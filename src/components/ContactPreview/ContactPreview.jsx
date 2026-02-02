import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone } from "lucide-react";

export default function ContactPreview() {

    /* ================= STATE ================= */

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);


    /* ================= HANDLE CHANGE ================= */

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    /* ================= SUBMIT ================= */

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

                setForm({
                    name: "",
                    email: "",
                    phone: "",
                });

                setTimeout(() => setToast(false), 3000);
            }

        } catch (err) {
            alert("Error sending enquiry");
        }

        setLoading(false);
    };


    /* ================= WHATSAPP LINK ================= */

    const whatsappLink = `https://wa.me/918302290180?text=${encodeURIComponent(
        `Hello Natural Emerald Factory, my name is ${form.name}. I want emerald details.`
    )}`;


    /* ================= UI ================= */

    return (
        <section className="relative py-28 bg-gradient-to-b from-black via-emerald-950/40 to-black overflow-hidden text-white">

            {/* emerald glow */}
            <div className="absolute -top-32 left-[-150px] w-[450px] h-[450px] bg-emerald-600/10 blur-[180px] rounded-full" />

            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="font-serif text-3xl md:text-5xl mb-4">
                    Get In Touch
                </h2>

                <p className="text-gray-400 mb-10 text-sm md:text-base">
                    Quick enquiry for bulk emerald supply
                </p>


                {/* ================================================= */}
                {/* SHORT FORM CARD                                   */}
                {/* ================================================= */}

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl
            p-6 md:p-8
            space-y-4
          "
                >

                    {/* Name + Phone */}
                    <div className="grid md:grid-cols-2 gap-4">

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Full Name"
                            className="bg-white/10 rounded-lg px-4 py-3 outline-none"
                        />

                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="Mobile Number"
                            className="bg-white/10 rounded-lg px-4 py-3 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="w-full bg-white/10 rounded-lg px-4 py-3 outline-none"
                    />


                    {/* ================================================= */}
                    {/* BUTTONS                                           */}
                    {/* ================================================= */}

                    <div className="flex flex-col md:flex-row gap-4">

                        {/* Quick Enquiry */}
                        <button
                            disabled={loading}
                            className="
                flex-1
                bg-emerald-500 text-black
                py-3 rounded-xl font-semibold
                hover:scale-105 transition
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
                border border-emerald-400
                text-emerald-400
                py-3 rounded-xl
                hover:bg-emerald-500 hover:text-black
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


            {/* ================================================= */}
            {/* TOAST POPUP                                       */}
            {/* ================================================= */}

            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
              fixed bottom-8 left-1/2 -translate-x-1/2
              bg-emerald-500 text-black
              px-6 py-3 rounded-xl font-semibold
              shadow-lg
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
