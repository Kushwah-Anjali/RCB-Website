// Visit.jsx — Ratan Chaat Bhandar
// Location, timings and WhatsApp CTA

const info = [
  {
    icon: "📍",
    title: "Location",
    text: ["Kheria Mod , Agra, Uttar Pradesh", "Since 1978, same spot,", "same flavour"],
  },
  {
    icon: "🕓",
    title: "Timing",
    text: ["Every Evening", "4:00 PM – 10:30 PM", "Mon to Sun · No holidays"],
  },
  {
    icon: "🤝",
    title: "Our Promise",
    text: ["No delivery. No online orders.", "Fresh from tawa to your hands.", "Just come and taste."],
  },
];

function Visit() {
  return (
    <section
      id="visit"
      style={{
        background: "#2D2D2D",
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
          मिलने आइये · Come Visit
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 14,
          }}
        >
          Find Us in Agra
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

      {/* Cards */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {info.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#3a3a3a",
              border: "1px solid #444",
              borderRadius: 4,
              padding: "28px 20px",
              textAlign: "center",
              transition: "border-color 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#C48A3A")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#444")}
          >
            <div style={{ fontSize: 30, marginBottom: 12 }}>{item.icon}</div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 15,
                color: "#C48A3A",
                marginBottom: 10,
                fontWeight: 600,
              }}
            >
              {item.title}
            </div>
            {item.text.map((line, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: "#aaa",
                  lineHeight: 1.8,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <a
          href="https://wa.me/917505415482"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            background: "#25D366",
            color: "#fff",
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            padding: "13px 36px",
            borderRadius: 30,
            textDecoration: "none",
            letterSpacing: 1,
          }}
        >
          📞 Call Us
        </a>
      </div>
    </section>
  );
}

export default Visit;