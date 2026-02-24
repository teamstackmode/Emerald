import { motion } from "framer-motion";

/* ✅ Your updated images */
const images = [
    "/gallery/g1.jpg",
    "/gallery/g2.jpg",
    "/gallery/g3.jpg",
    "/gallery/g9.jpg",
    "/gallery/g5.jpg",
    "/gallery/g6.jpg",
    "/gallery/g7.jpg",
    "/gallery/g8.jpg",
];

export default function Showcase() {
    return (
        <section className="bg-[var(--bg-soft)] py-28 px-5 md:px-16">

            {/* ================= HEADER ================= */}

            <div className="text-center mb-20">
                <p className="uppercase tracking-[6px] text-[var(--emerald-accent)] text-xs mb-4">
                    Our Craft
                </p>

                <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-primary)]">
                    Crafted With Precision
                </h2>

                <div className="w-16 h-[2px] bg-[var(--emerald-accent)] mx-auto my-6" />

                <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                    Every emerald is cut, polished and perfected with decades of
                    craftsmanship and complete in-house manufacturing expertise.
                </p>
            </div>

            {/* ================= GRID ================= */}

            <div
                className="
          grid gap-5 md:gap-6
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          auto-rows-[140px]
          sm:auto-rows-[160px]
          md:auto-rows-[180px]
          lg:auto-rows-[200px]
        "
            >
                {images.map((src, i) => {
                    const sizeStyles = [
                        "md:col-span-2 md:row-span-2",
                        "",
                        "",
                        "lg:col-span-2",
                        "",
                        "md:row-span-2",
                        "",
                        "",
                    ];

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                cursor-pointer
                bg-white
                shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                ${sizeStyles[i % sizeStyles.length]}
              `}
                        >
                            <img
                                src={src}
                                loading="lazy"
                                alt="emerald"
                                className="
                  w-full h-full object-cover
                  transition duration-700 ease-out
                  group-hover:scale-105
                "
                            />

                            {/* Subtle Emerald Hover Glow */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-[var(--emerald-accent)] transition duration-500 rounded-2xl pointer-events-none" />
                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
}