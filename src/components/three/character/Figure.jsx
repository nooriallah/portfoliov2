import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import * as THREE from "three";
import { LOOK, RIG } from "./look.js";

/**
 * The character, built entirely from three.js primitives — capsules, spheres
 * and sphere *patches*. No model file, no loader, nothing to download.
 *
 * The point of building it this way is the rig: because every joint is a real
 * `<group>`, poses.js can drive shoulders, elbows, spine and head directly.
 * A downloaded .glb would need matching bone names and an animation clip for
 * every pose; here a pose is just a few numbers.
 *
 * Materials are created once and shared across every mesh, so the whole figure
 * costs a handful of draw calls.
 */
function useMaterials() {
  return useMemo(() => {
    const std = (color, opts = {}) =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        roughness: 0.62,
        metalness: 0,
        ...opts,
      });

    return {
      skin: std(LOOK.skin, { roughness: 0.72 }),
      skinDeep: std(LOOK.skinDeep, { roughness: 0.75 }),
      hair: std(LOOK.hair, { roughness: 0.55 }),
      brow: std(LOOK.brow, { roughness: 0.6 }),
      eye: std(LOOK.eye, { roughness: 0.25 }),
      eyeWhite: std(LOOK.eyeWhite, { roughness: 0.2 }),
      beard: std(LOOK.beard, { roughness: 0.7 }),
      frame: std(LOOK.glassesFrame, { roughness: 0.35, metalness: 0.35 }),
      lens: new THREE.MeshStandardMaterial({
        color: new THREE.Color(LOOK.glassesLens),
        transparent: true,
        opacity: 0.16,
        roughness: 0.05,
        metalness: 0.1,
      }),
      shirt: std(LOOK.shirt),
      shirtDeep: std(LOOK.shirtDeep),
      trousers: std(LOOK.trousers),
      shoe: std(LOOK.shoe, { roughness: 0.5 }),
      shoeSole: std(LOOK.shoeSole, { roughness: 0.8 }),
    };
  }, []);
}

/** Fewer segments on modest hardware; the silhouette barely changes. */
function segments(tier) {
  return tier === "high"
    ? { sphere: [28, 20], capsule: [4, 14], torus: [12, 24] }
    : { sphere: [16, 12], capsule: [3, 8], torus: [8, 14] };
}

const Figure = forwardRef(function Figure({ tier = "high" }, ref) {
  const m = useMaterials();
  const seg = segments(tier);

  // Every joint the animation layer is allowed to touch.
  const root = useRef(null);
  const hips = useRef(null);
  const chest = useRef(null);
  const neck = useRef(null);
  const head = useRef(null);
  const shoulderL = useRef(null);
  const shoulderR = useRef(null);
  const elbowL = useRef(null);
  const elbowR = useRef(null);
  const handL = useRef(null);
  const handR = useRef(null);
  const thighL = useRef(null);
  const thighR = useRef(null);
  const kneeL = useRef(null);
  const kneeR = useRef(null);
  const eyeL = useRef(null);
  const eyeR = useRef(null);
  const torso = useRef(null);

  // Exposed as one object so poses.js can drive any joint by name. Refs are
  // stable for the component's lifetime, so this is built once.
  useImperativeHandle(
    ref,
    () => ({
      root,
      hips,
      chest,
      neck,
      head,
      shoulderL,
      shoulderR,
      elbowL,
      elbowR,
      handL,
      handR,
      thighL,
      thighR,
      kneeL,
      kneeR,
      eyeL,
      eyeR,
      torso,
    }),
    [],
  );

  const arm = (side) => {
    const sign = side === "L" ? -1 : 1;
    return (
      <group
        key={side}
        ref={side === "L" ? shoulderL : shoulderR}
        position={[sign * RIG.shoulderX, RIG.shoulderY, 0]}
      >
        {/* short sleeve, a shade darker than the body of the shirt */}
        <mesh position={[0, -0.06, 0]} material={m.shirtDeep}>
          <capsuleGeometry
            args={[RIG.upperArmR * 1.16, 0.06, seg.capsule[0], seg.capsule[1]]}
          />
        </mesh>
        <mesh
          position={[0, -(RIG.upperArmLen / 2 + RIG.upperArmR), 0]}
          material={m.skin}
        >
          <capsuleGeometry
            args={[
              RIG.upperArmR,
              RIG.upperArmLen,
              seg.capsule[0],
              seg.capsule[1],
            ]}
          />
        </mesh>

        <group
          ref={side === "L" ? elbowL : elbowR}
          position={[0, -(RIG.upperArmLen + RIG.upperArmR * 2), 0]}
        >
          <mesh
            position={[0, -(RIG.foreArmLen / 2 + RIG.foreArmR), 0]}
            material={m.skin}
          >
            <capsuleGeometry
              args={[
                RIG.foreArmR,
                RIG.foreArmLen,
                seg.capsule[0],
                seg.capsule[1],
              ]}
            />
          </mesh>
          <group
            ref={side === "L" ? handL : handR}
            position={[0, -(RIG.foreArmLen + RIG.foreArmR * 1.6), 0]}
          >
            <mesh scale={[1, 0.82, 1.1]} material={m.skin}>
              <sphereGeometry args={[RIG.handR, ...seg.sphere]} />
            </mesh>
          </group>
        </group>
      </group>
    );
  };

  const leg = (side) => {
    const sign = side === "L" ? -1 : 1;
    return (
      <group
        key={side}
        ref={side === "L" ? thighL : thighR}
        position={[sign * RIG.hipX, 0, 0]}
      >
        <mesh
          position={[0, -(RIG.thighLen / 2 + RIG.thighR), 0]}
          material={m.trousers}
        >
          <capsuleGeometry
            args={[RIG.thighR, RIG.thighLen, seg.capsule[0], seg.capsule[1]]}
          />
        </mesh>

        <group
          ref={side === "L" ? kneeL : kneeR}
          position={[0, -(RIG.thighLen + RIG.thighR * 2), 0]}
        >
          <mesh
            position={[0, -(RIG.shinLen / 2 + RIG.shinR), 0]}
            material={m.trousers}
          >
            <capsuleGeometry
              args={[RIG.shinR, RIG.shinLen, seg.capsule[0], seg.capsule[1]]}
            />
          </mesh>
          {/* shoe: a squashed sphere pushed forward, on a pale sole */}
          <group position={[0, -(RIG.shinLen + RIG.shinR * 1.7), 0.03]}>
            <mesh scale={[1, 0.62, 1.75]} material={m.shoe}>
              <sphereGeometry args={[RIG.shinR * 1.15, ...seg.sphere]} />
            </mesh>
            <mesh position={[0, -0.045, 0.01]} material={m.shoeSole}>
              <boxGeometry args={[RIG.shinR * 1.9, 0.016, RIG.footLen * 0.8]} />
            </mesh>
          </group>
        </group>
      </group>
    );
  };

  return (
    <group ref={root}>
      <group ref={hips} position={[0, RIG.hipY, 0]}>
        {/* ---------------- upper body ---------------- */}
        <group ref={chest} position={[0, RIG.chestY, 0]}>
          <mesh
            ref={torso}
            position={[0, -0.02, 0]}
            scale={RIG.torsoScale}
            material={m.shirt}
          >
            <capsuleGeometry
              args={[RIG.torsoR, RIG.torsoLen, seg.capsule[0], seg.capsule[1]]}
            />
          </mesh>

          {arm("L")}
          {arm("R")}

          <group ref={neck} position={[0, RIG.neckY, 0]}>
            <mesh position={[0, -0.04, 0]} material={m.skin}>
              <capsuleGeometry args={[0.075, 0.05, 3, 12]} />
            </mesh>

            {/* ---------------- head ---------------- */}
            <group ref={head} position={[0, RIG.headY, 0]}>
              <mesh scale={RIG.headScale} material={m.skin}>
                <sphereGeometry args={[RIG.headR, ...seg.sphere]} />
              </mesh>

              {/* Hair in two pieces. A crown cap leaning forward gives the
                  hairline; a second patch continues down the back and sides,
                  stopping short of the face. Note three.js sphere phi: phi =
                  PI/2 faces +Z, so a "back of the head" patch is centred on
                  -PI/2. Getting that wrong puts the hair on one ear. */}
              <mesh
                rotation={[LOOK.hairTilt, 0, 0]}
                scale={[1.02, LOOK.hairPuff, 1.02]}
                material={m.hair}
              >
                <sphereGeometry
                  args={[
                    RIG.headR * 1.035,
                    seg.sphere[0],
                    seg.sphere[1],
                    0,
                    Math.PI * 2,
                    0,
                    LOOK.hairCap,
                  ]}
                />
              </mesh>
              <mesh scale={[1.02, 1.02, 1.02]} material={m.hair}>
                <sphereGeometry
                  args={[
                    RIG.headR * 1.03,
                    seg.sphere[0],
                    seg.sphere[1],
                    -Math.PI / 2 - 1.28,
                    2.56,
                    LOOK.hairCap - 0.12,
                    LOOK.hairBack,
                  ]}
                />
              </mesh>

              {/* beard: a patch of sphere over the jaw and chin */}
              {LOOK.beardStrength > 0.05 && (
                <mesh
                  material={m.beard}
                  scale={[1, 1.02, 1]}
                  rotation={[0.06, 0, 0]}
                >
                  <sphereGeometry
                    args={[
                      RIG.headR * 1.015,
                      seg.sphere[0],
                      seg.sphere[1],
                      Math.PI / 2 - 1.0,
                      2.0,
                      Math.PI * 0.5,
                      Math.PI * 0.4 * LOOK.beardStrength,
                    ]}
                  />
                </mesh>
              )}

              {/* ears */}
              {[-1, 1].map((s) => (
                <mesh
                  key={s}
                  position={[s * RIG.headR * 0.97, -0.01, -0.01]}
                  scale={[0.45, 1, 0.75]}
                  material={m.skinDeep}
                >
                  <sphereGeometry args={[0.058, 14, 10]} />
                </mesh>
              ))}

              {/* eyes, with a highlight so they read as glossy */}
              {[-1, 1].map((s) => (
                <group
                  key={s}
                  ref={s === -1 ? eyeL : eyeR}
                  position={[s * 0.112, 0.015, RIG.headR * 0.83]}
                >
                  <mesh scale={[1, 1.12, 0.55]} material={m.eye}>
                    <sphereGeometry args={[0.046, 16, 12]} />
                  </mesh>
                  <mesh
                    position={[s * 0.014, 0.016, 0.022]}
                    material={m.eyeWhite}
                  >
                    <sphereGeometry args={[0.013, 8, 6]} />
                  </mesh>
                </group>
              ))}

              {/* brows */}
              {[-1, 1].map((s) => (
                <mesh
                  key={s}
                  position={[s * 0.113, 0.098, RIG.headR * 0.85]}
                  rotation={[0, 0, s * -0.1]}
                  material={m.brow}
                >
                  <boxGeometry args={[0.096, 0.019, 0.026]} />
                </mesh>
              ))}

              {/* nose — barely there, like the reference */}
              <mesh
                position={[0, -0.028, RIG.headR * 0.92]}
                scale={[1, 0.85, 0.8]}
                material={m.skin}
              >
                <sphereGeometry args={[0.038, 12, 10]} />
              </mesh>

              {LOOK.hasGlasses && (
                <group position={[0, 0.015, RIG.headR * 0.86]}>
                  {[-1, 1].map((s) => (
                    <group key={s} position={[s * 0.112, 0, 0]}>
                      <mesh rotation={[Math.PI / 2, 0, 0]} material={m.frame}>
                        <torusGeometry
                          args={[0.082, 0.011, seg.torus[0], seg.torus[1]]}
                        />
                      </mesh>
                      <mesh material={m.lens}>
                        <circleGeometry args={[0.079, seg.torus[1]]} />
                      </mesh>
                      {/* temple arm sweeping back to the ear */}
                      <mesh
                        position={[s * 0.085, 0.012, -0.09]}
                        rotation={[0, s * 0.22, 0]}
                        material={m.frame}
                      >
                        <boxGeometry args={[0.012, 0.012, 0.19]} />
                      </mesh>
                    </group>
                  ))}
                  <mesh material={m.frame}>
                    <boxGeometry args={[0.062, 0.011, 0.011]} />
                  </mesh>
                </group>
              )}
            </group>
          </group>
        </group>

        {/* ---------------- lower body ---------------- */}
        {leg("L")}
        {leg("R")}
      </group>
    </group>
  );
});

export default Figure;
