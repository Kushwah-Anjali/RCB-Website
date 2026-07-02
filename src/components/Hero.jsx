function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586357507341-3fbe59f2a5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuaSUyMHB1cml8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px) brightness(0.45)",
          transform: "scale(1.05)", // prevents blur edge bleed
          zIndex: 0,
        }}
      />

      {/* Vintage overlay gradient on top of blur */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(45,20,5,0.55) 0%, rgba(20,10,0,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Decorative vintage dot pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(196,138,58,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 640,
          padding: "0 24px",
        }}
      >
        {/* Est. badge */}
        <div
          style={{
            display: "inline-block",
            border: "1px solid #C48A3A",
            color: "#C48A3A",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 10,
            letterSpacing: 4,
            textTransform: "uppercase",
            padding: "5px 18px",
            borderRadius: 2,
            marginBottom: 24,
          }}
        >
          Est. 1978 · Agra, Uttar Pradesh
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(38px, 7vw, 64px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 8,
          }}
        >
          Ratan Chaat
          <br />
          <span style={{ color: "#C48A3A" }}>Bhandar</span>
        </h1>

        {/* Hindi tagline */}
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13,
            color: "#bbb",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          असली स्वाद · Asli Swaad
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: "#C48A3A",
            margin: "0 auto 24px",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 15,
            color: "#ccc",
            lineHeight: 1.9,
            marginBottom: 36,
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          For over <strong style={{ color: "#C48A3A" }}>45 years</strong>, our
          family has served the streets of Agra with love — from Nanaji's
          original recipe to the beloved{" "}
          <strong style={{ color: "#C48A3A" }}>Tiki Bhala</strong> that keeps
          you coming back.
        </p>

        {/* CTA button */}
        <a
          href="#story"
          style={{
            display: "inline-block",
            background: "#C48A3A",
            color: "#fff",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            padding: "13px 36px",
            borderRadius: 30,
            textDecoration: "none",
            letterSpacing: 2,
            textTransform: "uppercase",
            transition: "background 0.3s",
          }}
          onMouseEnter={e => (e.target.style.background = "#8B4513")}
          onMouseLeave={e => (e.target.style.background = "#C48A3A")}
        >
          Our Story ↓
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 9,
            color: "#888",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 32,
            background: "#C48A3A",
            animation: "pulse 1.5s infinite",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;