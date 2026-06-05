import { useState } from "react";
import { colors } from "./theme/colors";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Companies from "./components/Companies";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          background: colors.bg,
          minHeight: "100vh",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease-in",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Companies />
        <Stats />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
