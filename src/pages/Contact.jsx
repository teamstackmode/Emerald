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

    /* ================================================= */
    /* FORM STATE                                        */
    /* ================================================= */

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    /* ================================================= */
    /* SUBMIT HANDLER (AJAX → NO REDIRECT)               */
    /* ================================================= */

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.target);

        try {
            await fetch("https://formspree.io/f/xaqbdpwy", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            setSuccess(true);
            e.target.reset();
        } catch (err) {
            alert("Something went wrong. Please try WhatsApp.");
        }

        setLoading(false);

        setTimeout(() => setSuccess(false), 4000);
    };

    /* ================================================= */
    /* UI                                                */
    /* ================================================= */

    return (
        <section className="relative bg-black text-white min-h-screen overflow-hidden">

            {/* emerald glow */}
            <div className="absolute -top-40 left-[-120px] w-[500px] h-[500px] bg-emerald-600/10 blur-[180px] rounded-full pointer-events-none" />

            {/* ================================================= */}
            {/* MAIN CONTENT                                      */}
            {/* ================================================= */}

            <div className="py-28 px-6 md:px-16 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* ================================================= */}
                    {/* LEFT INFO SIDE                                    */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <p className="uppercase tracking-[6px] text-emerald-400 text-xs mb-4">
                            Get In Touch
                        </p>

                        <h1 className="font-serif text-4xl md:text-5xl mb-6">
                            Let’s Work Together
                        </h1>

                        <p className="text-gray-400 mb-10 leading-relaxed">
                            We supply premium natural emeralds to wholesalers, traders and
                            jewellers worldwide. Contact us for bulk orders, custom sizes or
                            sample requests.
                        </p>

                        {/* contact info */}
                        <div className="space-y-6 text-gray-300">

                            <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-emerald-400 transition">
                                <Phone size={18} className="text-emerald-400" />
                                +91 83022 90180
                            </a>

                            <a href="mailto:info@naturalemeraldfactory.com" className="flex items-center gap-3 hover:text-emerald-400 transition">
                                <Mail size={18} className="text-emerald-400" />
                                info@naturalemeraldfactory.com
                            </a>

                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-emerald-400" />
                                Raja Park, Jaipur, Rajasthan, India
                            </div>

                        </div>

                        {/* social buttons */}
                        <div className="flex gap-4 mt-10">

                            <a
                                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                                    "Hello Natural Emerald Factory, I am interested in emerald bulk purchase."
                                )}`}
                                target="_blank"
                                className="bg-emerald-500 text-black px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </a>

                            <a
                                href="https://instagram.com/yourpage"
                                target="_blank"
                                className="border border-white/20 px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-white/10 transition"
                            >
                                <Instagram size={18} />
                                Instagram
                            </a>

                        </div>

                    </motion.div>


                    {/* ================================================= */}
                    {/* RIGHT SIDE FORM                                   */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="
                space-y-5
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-8
                shadow-[0_0_40px_rgba(16,185,129,0.15)]
              "
                        >

                            <h3 className="font-serif text-xl mb-2">
                                Send Us Your Requirement
                            </h3>

                            <input name="name" placeholder="Full Name" required className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3" />

                            <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3" />

                            <input name="phone" placeholder="Phone Number" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3" />

                            <textarea name="message" rows="4" placeholder="Tell us sizes, shapes, quantity..." required className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3" />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-500 text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                            {/* success message */}
                            {success && (
                                <p className="text-emerald-400 text-sm text-center mt-3">
                                    ✅ Message sent successfully! We'll contact you soon.
                                </p>
                            )}

                        </form>

                    </motion.div>

                </div>
            </div>

            {/* ================================================= */}
            {/* MAP                                               */}
            {/* ================================================= */}

            <LocationMap />

        </section>
    );
}
