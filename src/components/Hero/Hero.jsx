import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        image: "/gallery/g1.jpg",
        title: "Natural Oval Emerald",
        caption: "Pure untreated brilliance from Zambian origin.",
    },
    {
        image: "/gallery/g2.jpg",
        title: "Precision Round Cut",
        caption: "Diamond cut round emeralds from 1mm to 6mm.",
    },
    {
        image: "/gallery/g3.jpg",
        title: "Octagon & Pear Shapes",
        caption: "Crafted in-house with precision symmetry.",
    },
    {
        image: "/gallery/g4.jpeg",
        title: "Carat Plus Centre Pieces",
        caption: "Premium stones for high-end jewellery.",
    },
    {
        image: "/gallery/g11.jpg",
        title: "Sugarloaf & Custom Shapes",
        caption: "Designed according to raw material availability.",
    },
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[var(--bg-primary)] min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

                {/* ================= IMAGE SIDE ================= */}

                <div className="relative flex justify-center">

                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            src={slides[index].image}
                            alt="Emerald"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="
                w-full max-w-md md:max-w-lg
                rounded-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                object-contain
              "
                        />
                    </AnimatePresence>

                </div>

                {/* ================= TEXT SIDE ================= */}

                <div>

                    <div className="w-16 h-[3px] bg-[var(--emerald-accent)] mb-6" />

                    <motion.h1
                        key={slides[index].title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="
              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              text-[var(--text-primary)]
              mb-6
            "
                    >
                        {slides[index].title}
                    </motion.h1>

                    <motion.p
                        key={slides[index].caption}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-[var(--text-secondary)] text-base max-w-md"
                    >
                        {slides[index].caption}
                    </motion.p>

                </div>

            </div>

            {/* ================= SLIDE INDICATORS ================= */}

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${i === index
                                ? "w-8 bg-[var(--emerald-accent)]"
                                : "w-2 bg-black/20"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}