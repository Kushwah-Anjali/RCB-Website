// About.jsx — Ratan Chaat Bhandar
// Our Story section with Nanaji's 1978 legacy

function About() {
  const stats = [
    { number: "45+", label: "Years Serving" },
    { number: "1978", label: "Est. by Nanaji" },
    { number: "3", label: "Generations" },
  ];

  return (
    <section
      id="story"
      style={{
        background: "#FFF8F0",
        padding: "80px 32px",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#C48A3A",
            marginBottom: 10,
          }}
        >
          हमारी कहानी · Our Story
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            fontWeight: 700,
            color: "#2D2D2D",
            marginBottom: 14,
          }}
        >
          A Legacy Since 1978
        </h2>
        <div
          style={{
            width: 50,
            height: 2,
            background: "#C48A3A",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Story box */}
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          border: "1.5px solid #C48A3A",
          borderRadius: 4,
          padding: "40px 48px",
          background: "#fff",
          position: "relative",
        }}
      >
        {/* Decorative quote mark */}
        <div
          style={{
            position: "absolute",
            top: -20,
            left: 20,
            fontFamily: "'Playfair Display', serif",
            fontSize: 120,
            color: "#C48A3A",
            opacity: 0.08,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          "
        </div>

        {/* Year badge */}
        <div
          style={{
            display: "inline-block",
            background: "#C48A3A",
            color: "#fff",
            fontFamily: "'Playfair Display', serif",
            fontSize: 12,
            fontWeight: 700,
            padding: "4px 16px",
            borderRadius: 2,
            letterSpacing: 2,
            marginBottom: 20,
          }}
        >
          SINCE 1978
        </div>

        {/* Story paragraphs */}
        {[
          `It all began with Nanaji — our grandfather — who started Ratan Chaat Bhandar
          in 1978 with nothing but a cart, a fire, and a recipe no one could forget.
          In the lanes of Agra, where the smell of spices fills every evening air,
          he built something that would outlast generations.`,

          `Today, our family carries that same flame. RCB Tiki Bhala —
          crispy aloo tikki, soft bhala, tangy chutneys and just the right amount of
          masala — has become the dish people travel across the city for.
          Every bite is the same as it was in 1978. Kuch cheezein badalni nahi chahiye.`,

          `We don't take orders online. We don't deliver. We are here every evening,
          just like Nanaji was — because real chaat is best eaten standing, fresh from
          the tawa, with family beside you.`,
        ].map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              lineHeight: 1.9,
              color: "#555",
              marginBottom: i < 2 ? 16 : 0,
            }}
          >
            {para}
          </p>
        ))}

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 36,
            paddingTop: 28,
            borderTop: "1px solid #f0e0cc",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#C48A3A",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 11,
                  color: "#999",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginTop: 2,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;