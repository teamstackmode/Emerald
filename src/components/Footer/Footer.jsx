import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================================================= */
/* =============== Animations ====================== */
/* ================================================= */

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15, // ✨ stagger reveal
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export default function Footer() {
    const scrollTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative bg-black overflow-hidden border-t border-white/10">

            {/* emerald glow */}
            <div className="absolute -top-32 left-[-150px] w-[450px] h-[450px] bg-emerald-600/10 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 md:px-16 py-24 relative z-10"
            >

                {/* ================================================= */}
                {/* ================= BRAND ======================== */}
                {/* ================================================= */}

                <motion.div
                    variants={fadeUp}
                    className="text-center mb-20"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-white">
                        Natural Emerald Factory
                    </h2>

                    <p className="text-emerald-400 tracking-[4px] text-xs mt-4 uppercase">
                        From Mine To Masterpiece
                    </p>
                </motion.div>

                {/* ================================================= */}
                {/* ================= GRID ========================== */}
                {/* ================================================= */}

                <div className="grid gap-14 md:grid-cols-3">

                    {/* ABOUT */}
                    <motion.div variants={fadeUp}>
                        <h4 className="text-white font-semibold mb-5">About</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            40 years of gemstone heritage and 15 years dedicated to crafting
                            pure natural emeralds. Sourced globally. Manufactured in-house.
                        </p>
                    </motion.div>

                    {/* LINKS */}
                    <motion.div variants={fadeUp}>
                        <h4 className="text-white font-semibold mb-5">Explore</h4>

                        <div className="flex flex-col gap-3 text-gray-400 text-sm">
                            <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
                            <Link to="/about" className="hover:text-emerald-400 transition">About</Link>
                            <Link to="/contact" className="hover:text-emerald-400 transition">Contact</Link>
                        </div>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div variants={fadeUp}>
                        <h4 className="text-white font-semibold mb-5">Contact</h4>

                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-emerald-400" />
                                +91 8302290180
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-emerald-400" />
                                info@naturalemeraldfactory.com
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-emerald-400" />
                                Jaipur, Rajasthan
                            </div>

                            <a
                                href="https://wa.me/918302290180?text=Hello%20Natural%20Emerald%20Factory,%20I%20am%20interested%20in%20bulk%20emerald%20purchase.%20Please%20share%20details."
                                className="flex items-center gap-3 text-emerald-400"
                            >
                                <MessageCircle size={16} />
                                WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* ================================================= */}
                {/* ================= BOTTOM ======================== */}
                {/* ================================================= */}

                <motion.div
                    variants={fadeUp}
                    className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs"
                >
                    <p>
                        © {new Date().getFullYear()} Natural Emerald Factory. All rights reserved.
                    </p>

                    <p>
                        Crafted with precision by{" "}
                        <span className="text-emerald-400 font-semibold">Stackryft</span>
                    </p>

                    <button
                        onClick={scrollTop}
                        className="p-2 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-black transition"
                    >
                        <ArrowUp size={16} />
                    </button>
                </motion.div>

            </motion.div>
        </footer>
    );
}
