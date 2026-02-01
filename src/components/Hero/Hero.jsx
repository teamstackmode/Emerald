import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Emerald3D from "./Emerald3D";
import Particles from "./Particles";

const images = [
    "/hero/emerald1.jpeg",
    "/hero/emerald2.jpeg",
    "/hero/emerald3.jpeg",
    "/hero/emerald4.jpg",
    "/hero/emerald5.jpg",
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    /* ================= Background slider ================= */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((p) => (p + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* ================================================= */}
            {/* ================= BACKGROUND IMAGES ============= */}
            {/* ================================================= */}

            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    initial={{ opacity: 0, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* dark luxury overlay */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]" />

            {/* emerald glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/20 blur-[180px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/20 blur-[180px] rounded-full" />

            {/* sparkles */}
            <Particles />

            {/* ================================================= */}
            {/* ================= MAIN GRID ===================== */}
            {/* ================================================= */}

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center h-screen">

                {/* TEXT SIDE */}
                <div className="px-6 md:px-16 text-center md:text-left">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.8, y: 0 }}
                        className="uppercase tracking-[6px] text-emerald-400 text-xs sm:text-sm mb-6"
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
                        speed={40}
                        repeat={Infinity}
                        wrapper="h1"
                        className="
              font-serif
              text-3xl
              sm:text-5xl
              md:text-7xl
              leading-tight
              text-white
            "
                    />

                    <p className="mt-8 text-gray-300 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
                        40 years of gemstone heritage. 15 years dedicated to crafting
                        100% natural untreated emeralds — cut, polished and perfected
                        in-house in Jaipur.
                    </p>
                </div>

                {/* 3D EMERALD SIDE */}
                <div className="h-[35vh] sm:h-[40vh] md:h-[55vh] w-full flex items-center justify-center">
                    <Emerald3D />
                </div>
            </div>

            {/* subtle scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 2 }}
                className="absolute bottom-6 w-full text-center text-xs tracking-widest text-gray-400"
            >
                Scroll ↓
            </motion.div>
        </section>
    );
}
