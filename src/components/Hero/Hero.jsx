import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Emerald3D from "./Emerald3D";

const images = [
    "/hero/emerald1.jpeg",
    "/hero/emerald2.jpeg",
    "/hero/emerald3.jpg",
    "/hero/emerald4.jpg",
    "/hero/emerald5.jpg",
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    /* ================= Auto slider ================= */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* ================================================= */}
            {/* ================= BACKGROUND SLIDER ============== */}
            {/* ================================================= */}

            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="emerald"
                    initial={{ opacity: 0, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* overlays */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px] pointer-events-none" />

            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/20 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/20 blur-[160px] rounded-full pointer-events-none" />

            {/* ================================================= */}
            {/* ================= CONTENT GRID ================== */}
            {/* ================================================= */}

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-screen items-center">

                {/* ================= TEXT ================= */}
                <div className="px-6 md:px-16 text-center md:text-left">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.8, y: 0 }}
                        className="uppercase tracking-[5px] text-emerald-400 text-xs sm:text-sm mb-4"
                    >
                        Natural Emerald Factory
                    </motion.p>

                    <TypeAnimation
                        sequence={[
                            "From Mine",
                            1500,
                            "From Mine To Masterpiece",
                            2000,
                            "Pure Natural Emeralds",
                            2000,
                        ]}
                        wrapper="h1"
                        speed={40}
                        repeat={Infinity}
                        className="font-serif text-3xl sm:text-5xl md:text-7xl leading-tight text-white"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0"
                    >
                        40 years of gemstone heritage. 15 years dedicated to crafting
                        100% natural untreated emeralds — cut, polished and perfected
                        in-house in Jaipur.
                    </motion.p>

                    {/* buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="/gallery"
                            className="px-7 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:scale-105 transition"
                        >
                            View Collection
                        </a>

                        <a
                            href="/contact"
                            className="px-7 py-3 rounded-xl border border-white/30 backdrop-blur-md hover:bg-white/10 transition"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>

                {/* ================= 3D EMERALD ================= */}
                <div className="h-[35vh] sm:h-[40vh] md:h-[55vh] w-full flex items-center justify-center">
                    <Emerald3D />
                </div>
            </div>

            {/* scroll hint */}
            <div className="absolute bottom-6 w-full text-center text-xs tracking-widest text-gray-400">
                Scroll ↓
            </div>
        </section>
    );
}
