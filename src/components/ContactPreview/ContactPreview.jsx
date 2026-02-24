import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone } from "lucide-react";

export default function ContactPreview() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("https://formspree.io/f/xaqbdpwy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: "Quick enquiry from homepage",
                    _subject: "Quick Emerald Enquiry (Homepage)",
                }),
            });

            if (res.ok) {
                setToast(true);
                setForm({ name: "", email: "", phone: "" });
                setTimeout(() => setToast(false), 3000);
            }
        } catch {
            alert("Error sending enquiry");
        }

        setLoading(false);
    };

    const whatsappLink = `https://wa.me/918302290180?text=${encodeURIComponent(
        `Hello Natural Emerald Factory, my name is ${form.name}. I want emerald details.`
    )}`;

    return (
        <section className="relative py-28 bg-[var(--bg-soft)] overflow-hidden">

            {/* Soft Emerald Accent Glow */}
            <div className="absolute -top-24 right-[-120px] w-[400px] h-[400px] bg-emerald-200/40 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Header */}
                <p className="uppercase tracking-[6px] text-[var(--emerald-accent)] text-xs mb-4">
                    Get In Touch
                </p>

                <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-primary)] mb-4">
                    Let’s Connect
                </h2>

                <div className="w-16 h-[2px] bg-[var(--emerald-accent)] mx-auto my-6" />

                <p className="text-[var(--text-secondary)] mb-12 text-sm md:text-base">
                    Quick enquiry for bulk emerald supply and custom sizing.
                </p>

                {/* ================= FORM CARD ================= */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="
            bg-white
            rounded-2xl
            p-8 md:p-10
            shadow-[0_30px_70px_rgba(0,0,0,0.08)]
            space-y-5
          "
                >

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Full Name"
                            className="
                border border-gray-200
                rounded-xl
                px-4 py-3
                outline-none
                focus:border-[var(--emerald-accent)]
                transition
              "
                        />

                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="Mobile Number"
                            className="
                border border-gray-200
                rounded-xl
                px-4 py-3
                outline-none
                focus:border-[var(--emerald-accent)]
                transition
              "
                        />

                    </div>

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="
              w-full
              border border-gray-200
              rounded-xl
              px-4 py-3
              outline-none
              focus:border-[var(--emerald-accent)]
              transition
            "
                    />

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 pt-4">

                        {/* Quick Enquiry */}
                        <button
                            disabled={loading}
                            className="
                flex-1
                bg-[var(--emerald-accent)]
                text-white
                py-3 rounded-xl font-semibold
                hover:scale-105
                transition
                flex items-center justify-center gap-2
              "
                        >
                            <Send size={18} />
                            {loading ? "Sending..." : "Quick Enquiry"}
                        </button>

                        {/* WhatsApp */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            className="
                flex-1
                border border-[var(--emerald-accent)]
                text-[var(--emerald-accent)]
                py-3 rounded-xl
                hover:bg-[var(--emerald-accent)]
                hover:text-white
                transition
                flex items-center justify-center gap-2
              "
                        >
                            <Phone size={18} />
                            WhatsApp
                        </a>

                    </div>

                </motion.form>
            </div>

            {/* ================= TOAST ================= */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
              fixed bottom-8 left-1/2 -translate-x-1/2
              bg-[var(--emerald-accent)]
              text-white
              px-6 py-3 rounded-xl font-semibold
              shadow-[0_10px_30px_rgba(0,0,0,0.1)]
              z-50
            "
                    >
                        ✅ Enquiry sent successfully!
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}