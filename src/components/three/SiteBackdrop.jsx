import { Component, Suspense, lazy, useEffect, useState } from "react";
import useDeviceTier from "../../hooks/useDeviceTier.js";
import { useTheme } from "../ThemeProvider.jsx";

const BackdropScene = lazy(() => import("./BackdropScene.jsx"));

class Boundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    if (import.meta.env.DEV) console.warn("[backdrop] disabled:", error);
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/**
 * The fixed WebGL layer behind the whole site. Sections show it through
 * their translucent backgrounds; content scrolls over it. Decorative only,
 * so it is aria-hidden, pointer-transparent, and simply absent on
 * reduced-motion / low-power / no-WebGL visitors — the CSS auras remain.
 */
export default function SiteBackdrop() {
  const { theme } = useTheme();
  const { enabled, tier, ready } = useDeviceTier();
  const [awake, setAwake] = useState(true);

  useEffect(() => {
    const onVisibility = () => setAwake(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (!ready || !enabled) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
      <Boundary>
        <Suspense fallback={null}>
          <BackdropScene theme={theme} tier={tier} active={awake} />
        </Suspense>
      </Boundary>
    </div>
  );
}
