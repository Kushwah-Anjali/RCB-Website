// App.jsx — Ratan Chaat Bhandar
// Main entry — assembles all sections in order

import Navbar  from "./components/Navbar";
import Hero    from "./components/Hero";
import About   from "./components/About";
import Menu    from "./components/Menu";
import Visit   from "./components/Visit";
import Footer  from "./components/Footer";

// Google Fonts are loaded via index.html or add this in your <head>:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#FFF8F0" }}>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Visit />
      <Footer />
    </div>
  );
}

export default App;