import useScrollSpy from "./hooks/useScrollSpy.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import SiteBackdrop from "./components/three/SiteBackdrop.jsx";

export default function App() {
  const { scrolled, active } = useScrollSpy();

  return (
    <div className="min-h-screen bg-bg text-body font-sans antialiased">
      {/* Fixed 3D layer; everything else stacks above it. Sections keep
          translucent backgrounds so the orb reads through them. */}
      <SiteBackdrop />
      <div className="relative z-10">
      <Navbar scrolled={scrolled} active={active} />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollTop show={scrolled} />
      </div>
    </div>
  );
}
