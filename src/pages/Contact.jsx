import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Instagram,
} from "lucide-react";

import LocationMap from "../components/LocationMap";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        try {
            await fetch("https://formspree.io/f/xaqbdpwy", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            setSuccess(true);
            e.target.reset();
        } catch {
            alert("Something went wrong. Please try WhatsApp.");
        }

        setLoading(false);
        setTimeout(() => setSuccess(false), 4000);
    };

    return (
        <section className="relative bg-[var(--bg-main)] text-[var(--text-primary)] min-h-screen overflow-hidden">

            {/* Soft Emerald Glow */}
            <div className="absolute -top-32 right-[-120px] w-[400px] h-[400px] bg-emerald-200/40 blur-[120px] rounded-full pointer-events-none" />

            {/* ================= MAIN CONTENT ================= */}

            <div className="py-28 px-6 md:px-16 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* ================= LEFT SIDE ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <p className="uppercase tracking-[6px] text-[var(--emerald-accent)] text-xs mb-4">
                            Get In Touch
                        </p>

                        <h1 className="font-serif text-4xl md:text-5xl mb-6">
                            Let’s Work Together
                        </h1>

                        <p className="text-[var(--text-secondary)] mb-10 leading-relaxed">
                            We supply premium natural emeralds to wholesalers, traders
                            and jewellers worldwide. Contact us for bulk orders,
                            custom sizes or sample requests.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6 text-[var(--text-secondary)]">

                            <a
                                href="tel:+918302290180"
                                className="flex items-center gap-3 hover:text-[var(--emerald-accent)] transition"
                            >
                                <Phone size={18} className="text-[var(--emerald-accent)]" />
                                +91 83022 90180
                            </a>

                            <a
                                href="mailto:info@naturalemeraldfactory.com"
                                className="flex items-center gap-3 hover:text-[var(--emerald-accent)] transition"
                            >
                                <Mail size={18} className="text-[var(--emerald-accent)]" />
                                info@naturalemeraldfactory.com
                            </a>

                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-[var(--emerald-accent)]" />
                                Janta Colony, Jaipur, Rajasthan, India
                            </div>

                        </div>

                        {/* Social Buttons */}
                        <div className="flex gap-4 mt-10">

                            <a
                                href={`https://wa.me/918302290180?text=${encodeURIComponent(
                                    "Hello Natural Emerald Factory, I am interested in emerald purchase."
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[var(--emerald-accent)] text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition shadow-md"
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </a>

                            <a
                                href="https://instagram.com/yourpage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[var(--emerald-accent)] text-[var(--emerald-accent)] px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-[var(--emerald-accent)] hover:text-white transition"
                            >
                                <Instagram size={18} />
                                Instagram
                            </a>

                        </div>

                    </motion.div>

                    {/* ================= RIGHT FORM ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="
                space-y-5
                bg-white
                rounded-2xl
                p-8
                shadow-[0_25px_60px_rgba(0,0,0,0.06)]
              "
                        >

                            <h3 className="font-serif text-xl mb-2">
                                Send Us Your Requirement
                            </h3>

                            <input
                                name="name"
                                placeholder="Full Name"
                                required
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--emerald-accent)] outline-none transition"
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--emerald-accent)] outline-none transition"
                            />

                            <input
                                name="phone"
                                placeholder="Phone Number"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--emerald-accent)] outline-none transition"
                            />

                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Tell us sizes, shapes, quantity..."
                                required
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[var(--emerald-accent)] outline-none transition"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[var(--emerald-accent)] text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                            {success && (
                                <p className="text-[var(--emerald-accent)] text-sm text-center mt-3">
                                    ✅ Message sent successfully! We'll contact you soon.
                                </p>
                            )}

                        </form>

                    </motion.div>

                </div>
            </div>

            {/* ================= MAP ================= */}

            <LocationMap address="Janta Colony, Jaipur, Rajasthan, India" />

        </section>
    );
}