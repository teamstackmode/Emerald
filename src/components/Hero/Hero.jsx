import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image: "/gallery/g9.jpg",
        title: "Natural Oval Emerald",
        caption: "Pure untreated brilliance sourced from premium origins.",
    },
    {
        image: "/gallery/g2.jpg",
        title: "Precision Round Cut",
        caption: "Diamond cut emeralds from 1mm to 6mm with perfect symmetry.",
    },
    {
        image: "/gallery/g3.jpg",
        title: "Octagon & Pear Shapes",
        caption: "Crafted in-house with advanced cutting precision.",
    },
    {
        image: "/gallery/g4.jpeg",
        title: "Carat Plus Centre Pieces",
        caption: "High-value emeralds for premium jewellery collections.",
    },
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () =>
        setIndex((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );

    return (
        <section className="relative h-[calc(100svh-80px)] w-full overflow-hidden">

            {/* FULL IMAGE */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={slides[index].image}
                    alt="Emerald"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* SOFT BOTTOM GRADIENT FOR READABILITY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* BOTTOM CAPTION */}
            <div className="absolute bottom-16 w-full text-center px-6 z-10">

                <motion.h1
                    key={slides[index].title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
            font-serif
            text-3xl sm:text-5xl md:text-6xl
            text-white
            mb-4
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]
          "
                >
                    {slides[index].title}
                </motion.h1>

                <motion.p
                    key={slides[index].caption}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="
            text-sm sm:text-base md:text-lg
            text-gray-200
            drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]
          "
                >
                    {slides[index].caption}
                </motion.p>

            </div>

            {/* ARROWS */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition z-10"
            >
                <ChevronLeft size={22} className="text-white" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition z-10"
            >
                <ChevronRight size={22} className="text-white" />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${i === index
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}