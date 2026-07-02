// Menu.jsx — Ratan Chaat Bhandar
// Chaat specialities grid
import tikibhala from "../assets/tikibhala.jpg";
import golgappe from "../assets/gol-gappe.jpg";
import dahibhalla from "../assets/dahi-bhalla.jpg";
import alootikki from "../assets/aloo-tikki.jpg";
import cholechaat from "../assets/chole-chaat.jpg";
import pakodichaat from "../assets/pakodi-chaat.jpg";
const dishes = [
  {
    image: tikibhala,
    name: "Tiki Bhala",
    desc: "Our signature — crispy tikki with soft bhala, dahi, and chutneys. Uncle's recipe since forever.",
    badge: "Must Try ★",
  },
  {
    image: golgappe,
    name: "Gol Gappe",
    desc: "Crispy puris filled with tangy imli water and spiced potatoes. A timeless classic.",
    badge: "Since 1978",
  },
  {
    image: dahibhalla,
    name: "Dahi Bhalla",
    desc: "Soft lentil bhallas soaked in cool dahi, sweet chutney and a pinch of masala on top.",
    badge: "Family Favourite",
  },
  {
    image: alootikki,
    name: "Aloo Tikki",
    desc: "Golden potato patties with green chutney and meethi chutney. Crispy outside, soft inside.",
    badge: "Evening Special",
  },
  {
    image: cholechaat,
    name: "Chole Chaat",
    desc: "Spiced chickpeas tossed with onions, tomatoes, green chilli and tangy imli chutney.",
    badge: "Crowd Pleaser",
  },
  {
    image: pakodichaat,
    name: "Pakodi Chaat",
    desc: "Crispy besan pakodis in dahi, topped with chutneys and fresh sev. Light and delicious.",
    badge: "Daily Fresh",
  },
];

function Menu() {
  return (
    <section
      id="menu"
      style={{
        background: "#f5ede0",
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
          हमारे व्यंजन · Our Specialities
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
          What We Serve
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

      {/* Grid */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {dishes.map((dish) => (
          <div
            key={dish.name}
            style={{
              background: "#fff",
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid #e8d5be",
              transition: "border-color 0.3s, transform 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#C48A3A";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#e8d5be";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Dish photo */}
            <div
              style={{
                width: "100%",
                height: 160,
                overflow: "hidden",
                background: "#fdf6ee",
              }}
            >
              <img
                src={dish.image}
                alt={dish.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: 16 }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#2D2D2D",
                  marginBottom: 6,
                }}
              >
                {dish.name}
              </div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: "#888",
                  lineHeight: 1.7,
                  marginBottom: 10,
                }}
              >
                {dish.desc}
              </p>
              <span
                style={{
                  display: "inline-block",
                  background: "#C48A3A",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: 2,
                  letterSpacing: 1,
                }}
              >
                {dish.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;