import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 },
    },
};

export default function Footer() {
    const scrollTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative overflow-hidden mt-32">

            {/* ================================================= */}
            {/* PREMIUM LIGHT GRADIENT BACKGROUND                */}
            {/* ================================================= */}

            <div
                className="
          absolute inset-0
          bg-gradient-to-b
          from-[#f8f6f2]
          via-[#f3efe8]
          to-[#ece7de]
        "
            />

            {/* Soft emerald ambient glow */}
            <div className="absolute -top-32 left-[-150px] w-[400px] h-[400px] bg-emerald-300/30 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-emerald-200/30 blur-[160px] rounded-full pointer-events-none" />

            {/* subtle top divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

            {/* ================================================= */}
            {/* CONTENT                                           */}
            {/* ================================================= */}

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 text-gray-700"
            >

                {/* BRAND */}
                <motion.div variants={fadeUp} className="text-center mb-20">
                    <h2 className="font-serif text-3xl md:text-5xl text-gray-900">
                        Natural Emerald Factory
                    </h2>

                    <p className="text-emerald-600 tracking-[4px] text-xs mt-4 uppercase">
                        From Mine To Masterpiece
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid gap-14 md:grid-cols-3">

                    {/* ABOUT */}
                    <motion.div variants={fadeUp}>
                        <h4 className="text-gray-900 font-semibold mb-5">
                            About
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            40 years of gemstone heritage and 15 years of dedicated
                            emerald manufacturing. Pure natural stones. In-house
                            craftsmanship. Trusted globally.
                        </p>
                    </motion.div>

                    {/* LINKS */}
                    <motion.div variants={fadeUp}>
                        <h4 className="text-gray-900 font-semibold mb-5">
                            Explore
                        </h4>

                        <div className="flex flex-col gap-3 text-gray-600 text-sm">
                            <Link to="/" className="hover:text-emerald-600 transition">
                                Home
                            </Link>
                            <Link to="/about" className="hover:text-emerald-600 transition">
                                About
                            </Link>
                            <Link to="/gallery" className="hover:text-emerald-600 transition">
                                Gallery
                            </Link>
                            <Link to="/contact" className="hover:text-emerald-600 transition">
                                Contact
                            </Link>
                        </div>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div variants={fadeUp}>
                        <h4 className="text-gray-900 font-semibold mb-5">
                            Contact
                        </h4>

                        <div className="space-y-4 text-gray-600 text-sm">

                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-emerald-600" />
                                +91 8302290180
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-emerald-600" />
                                info@naturalemeraldfactory.com
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-emerald-600" />
                                Jaipur, Rajasthan
                            </div>

                            <a
                                href="https://wa.me/918302290180"
                                className="flex items-center gap-3 text-emerald-600 hover:opacity-80"
                            >
                                <MessageCircle size={16} />
                                WhatsApp
                            </a>

                        </div>
                    </motion.div>
                </div>

                {/* BOTTOM */}
                <motion.div
                    variants={fadeUp}
                    className="border-t border-gray-300 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs"
                >
                    <p>
                        © {new Date().getFullYear()} Natural Emerald Factory. All rights reserved.
                    </p>

                    <p>
                        Crafted with precision by{" "}
                        <span className="text-emerald-600 font-semibold">
                            Stackryft
                        </span>
                    </p>

                    <button
                        onClick={scrollTop}
                        className="
              p-2 rounded-full
              bg-emerald-100
              hover:bg-emerald-600
              hover:text-white
              transition
            "
                    >
                        <ArrowUp size={16} />
                    </button>
                </motion.div>

            </motion.div>
        </footer>
    );
}