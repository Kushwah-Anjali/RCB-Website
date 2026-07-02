// Contact.jsx
// Address, phone, timings and a Google Map placeholder

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

// Contact details in one array — easy to update
const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Find Us",
    text: "Near Civil Lines Crossing, Aligarh, Uttar Pradesh — 202001",
  },
  {
    icon: <FaPhone />,
    title: "Call Us",
    text: "+91 98765 43210",
  },
  {
    icon: <FaClock />,
    title: "Opening Hours",
    text: "Mon – Sun: 4:00 PM – 10:30 PM",
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-background py-20 px-4">

      {/* Section heading */}
      <div className="text-center mb-14">
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-2">
          Get In Touch
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark">
          Visit Us Today
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* ── LEFT: Contact Info Cards ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="
                flex items-start gap-4
                bg-white rounded-2xl p-5 shadow-sm
                border border-gray-100
                hover:border-primary transition-colors duration-300
              "
            >
              {/* Icon */}
              <div className="
                w-11 h-11 rounded-full bg-primary bg-opacity-10
                flex items-center justify-center
                text-primary text-lg flex-shrink-0
              ">
                {info.icon}
              </div>
              <div>
                <p className="font-heading text-dark font-bold text-base mb-1">
                  {info.title}
                </p>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {info.text}
                </p>
              </div>
            </div>
          ))}

          {/* WhatsApp order button */}
          <a
            href="https://wa.me/917505415482"
            target="_blank"
            rel="noreferrer"
            className="
              bg-primary text-white text-center font-semibold font-body
              py-3 rounded-full
              hover:bg-secondary transition-colors duration-300
            "
          >
            Order on WhatsApp
          </a>
        </motion.div>

        {/* ── RIGHT: Map Placeholder ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          {/* Replace this iframe src with your real Google Maps embed URL */}
          <iframe
            title="Chat Bhandar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56658.36659697228!2d78.03715!3d27.8974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5a8b4a4c7c7%3A0x8e4a0a0a0a0a0a0a!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000"
            className="w-full h-72 lg:h-full min-h-64 rounded-2xl border-0 shadow-md"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;