import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SkeletonGrid from "../components/SkeletonGrid";
import { galleryImages } from "../data/galleryData";

export default function Gallery() {

    /* ================= STATES ================= */

    const [filter, setFilter] = useState("all");
    const [visibleCount, setVisibleCount] = useState(20);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);


    /* ================================================= */
    /* FISHER–YATES SHUFFLE (PRO WAY)                    */
    /* ================================================= */

    const shuffleArray = (arr) => {
        const newArr = [...arr];

        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }

        return newArr;
    };


    /* ================= FILTER ================= */

    const shapes = ["all", ...new Set(galleryImages.map(i => i.shape))];

    const filtered = useMemo(() => {
        const base =
            filter === "all"
                ? galleryImages
                : galleryImages.filter(img => img.shape === filter);

        return shuffleArray(base); // ⭐ shuffle here
    }, [filter]);


    const visibleImages = filtered.slice(0, visibleCount);


    /* ================= SKELETON ================= */

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, [filter]);


    /* ================= PRELOAD NEXT ================= */

    useEffect(() => {
        const nextBatch = filtered.slice(visibleCount, visibleCount + 10);

        nextBatch.forEach(img => {
            const preload = new Image();
            preload.src = img.src;
        });
    }, [visibleCount, filtered]);


    /* ================= UI ================= */

    return (
        <section className="bg-black text-white min-h-screen">

            {/* ================= HEADER ================= */}

            {/* <div className="py-24 text-center">
                <h1 className="font-serif text-5xl">Emerald Gallery</h1>
                <p className="text-gray-400 mt-3">
                    Explore our handcrafted natural emerald collection
                </p>
            </div> */}
            {/* ================================================= */}
            {/* PREMIUM ROUNDED VIDEO HERO                        */}
            {/* ================================================= */}

            <section className="relative py-20 md:py-28 bg-black overflow-hidden">

                {/* emerald glow background */}
                <div className="absolute -top-40 left-[-150px] w-[500px] h-[500px] bg-emerald-600/10 blur-[180px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6">

                    {/* ================================================= */}
                    {/* VIDEO CARD (premium shape)                        */}
                    {/* ================================================= */}

                    <div
                        className="
        relative
        rounded-3xl
        overflow-hidden
        border border-white/10
        shadow-[0_20px_80px_rgba(16,185,129,0.25)]
      "
                    >

                        {/* video */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-[55vh] md:h-[65vh] object-cover"
                        >
                            <source src="/emerald.mp4" type="video/mp4" />
                        </video>

                        {/* dark overlay */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

                        {/* text content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                            <h1 className="font-serif text-4xl md:text-6xl text-white">
                                Emerald Gallery
                            </h1>

                            <p className="text-gray-300 mt-4 text-sm md:text-base">
                                Explore our handcrafted natural emerald collection By Rukmani Gems
                            </p>

                        </div>
                    </div>

                </div>
            </section>



            {/* ================= FILTER BAR ================= */}

            <div className="flex flex-wrap justify-center gap-3 mb-12">

                {shapes.map(shape => (
                    <button
                        key={shape}
                        onClick={() => {
                            setFilter(shape);
                            setVisibleCount(20);
                        }}
                        className={`
              px-5 py-2 rounded-xl capitalize transition
              ${filter === shape
                                ? "bg-emerald-500 text-black"
                                : "bg-white/5 border border-white/10 hover:bg-white/10"}
            `}
                    >
                        {shape}
                    </button>
                ))}

            </div>


            {/* ================= MASONRY + SKELETON ================= */}

            {loading ? (

                <SkeletonGrid count={20} />

            ) : (

                <div
                    className="
            px-6 md:px-16
            columns-2 sm:columns-3 md:columns-4 lg:columns-5
            gap-4
          "
                >

                    {visibleImages.map(img => (
                        <motion.img
                            key={img.id}
                            src={img.src}
                            loading="lazy"
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelected(img.src)}
                            className="
                w-full
                mb-4
                rounded-xl
                cursor-pointer
                break-inside-avoid
                object-cover
              "
                        />
                    ))}

                </div>

            )}


            {/* ================= LOAD MORE ================= */}

            {visibleCount < filtered.length && !loading && (
                <div className="text-center py-16">
                    <button
                        onClick={() => setVisibleCount(prev => prev + 20)}
                        className="
              bg-emerald-500 text-black
              px-8 py-3 rounded-xl
              font-semibold
              hover:scale-105 transition
            "
                    >
                        Load More
                    </button>
                </div>
            )}


            {/* ================= MODAL ================= */}

            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-6"
                        onClick={() => setSelected(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <X className="absolute top-6 right-6 cursor-pointer" />

                        <motion.img
                            src={selected}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="max-h-[90vh] rounded-xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
