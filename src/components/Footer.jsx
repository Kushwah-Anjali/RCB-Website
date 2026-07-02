// Footer.jsx — Ratan Chaat Bhandar

function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        padding: "32px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 20,
          color: "#C48A3A",
          marginBottom: 4,
        }}
      >
        Ratan Chaat Bhandar · RCB
      </div>
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 10,
          color: "#666",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Since 1978 · Agra, UP
      </div>
      <div
        style={{
          width: 40,
          height: 1,
          background: "#C48A3A",
          margin: "14px auto",
        }}
      />
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          color: "#555",
          letterSpacing: 1,
        }}
      >
        © {new Date().getFullYear()} Ratan Chaat Bhandar. A family legacy.
        Made with ❤️ in Agra.
      </div>
    </footer>
  );
}

export default Footer;