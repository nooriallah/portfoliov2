/**
 * Everything about how the character looks, in one place.
 *
 * The geometry in Figure.jsx is deliberately generic — it is this file that
 * makes the avatar *him*. Matching a new reference photo means editing these
 * values and nothing else.
 */
export const LOOK = {
  // --- skin ---
  skin: "#e3ac83",
  skinDeep: "#c98d63", // ears, inner mouth shadow

  // --- hair ---
  hair: "#20150f",
  hairCap: 1.46, // polar sweep of the crown cap, in radians
  hairTilt: 0.1, // forward lean, which is what makes a hairline read naturally
  hairPuff: 1.05, // >1 gives it volume above the skull
  hairBack: 0.62, // how far down the back and sides the hair continues

  // --- face ---
  brow: "#20150f",
  eye: "#1c1410",
  eyeWhite: "#f8fafc",
  beard: "#20150f",
  beardStrength: 0.85, // 0 = clean shaven, 1 = full beard
  hasGlasses: true,
  glassesFrame: "#111827",
  glassesLens: "#93c5fd",

  // --- clothing ---
  shirt: "#3d4c68",
  shirtDeep: "#303c52", // sleeve bands and collar
  trousers: "#1b2534",
  shoe: "#0b1220",
  shoeSole: "#8593a8",

  // --- the accent used for holograms, scan lines and screen glow ---
  accent: "#60a5fa",
};

/**
 * Skeleton measurements, in metres, from the soles up. The proportions are
 * intentionally stylised — the head is about a third of the total height,
 * which is what gives 3D-illustration characters their charm. Realistic
 * proportions at this polygon budget just look like a mannequin.
 */
export const RIG = {
  hipY: 0.78,
  chestY: 0.24, // relative to hips
  neckY: 0.3, // relative to chest
  headY: 0.26, // relative to neck

  headR: 0.265,
  headScale: [1, 1.06, 0.97],

  torsoR: 0.19,
  torsoLen: 0.24,
  torsoScale: [1.36, 1, 0.88],

  shoulderX: 0.255,
  shoulderY: 0.2,
  upperArmR: 0.078,
  upperArmLen: 0.15,
  foreArmR: 0.068,
  foreArmLen: 0.14,
  handR: 0.085,

  hipX: 0.115,
  thighR: 0.095,
  thighLen: 0.16,
  shinR: 0.082,
  shinLen: 0.16,
  footLen: 0.22,
};
