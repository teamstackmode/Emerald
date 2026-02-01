import { motion } from "framer-motion";

/* ✅ Your updated images (saved & used) */
const images = [
    "/showcase/s1.jpeg",
    "/showcase/s2.jpeg",
    "/showcase/s3.jpeg",
    "/showcase/s4.jpg",
    "/showcase/s5.jpg",
    "/showcase/s6.jpg",
    "/showcase/s7.png",
    "/showcase/s8.jpg",
];

export default function Showcase() {
    return (
        <section className="bg-black py-24 px-5 md:px-16">

            {/* ================================================= */}
            {/* ================= HEADER ======================== */}
            {/* ================================================= */}

            <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-5xl text-white">
                    Crafted With Precision
                </h2>

                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                    Every emerald is cut, polished and perfected with decades of
                    craftsmanship and in-house manufacturing.
                </p>
            </div>

            {/* ================================================= */}
            {/* =============== PREMIUM GRID ===================== */}
            {/* ================================================= */}

            <div
                className="
          grid gap-4 md:gap-5

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
                    /* creative luxury layout pattern */
                    const sizeStyles = [
                        "md:col-span-2 md:row-span-2", // feature large
                        "",
                        "",
                        "lg:col-span-2",               // wide
                        "",
                        "md:row-span-2",               // tall
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
                ${sizeStyles[i % sizeStyles.length]}
              `}
                        >
                            {/* image */}
                            <img
                                src={src}
                                loading="lazy"
                                alt="emerald"
                                className="
                  w-full h-full object-cover
                  transition duration-700 ease-out
                  group-hover:scale-110
                "
                            />

                            {/* luxury subtle overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500 pointer-events-none" />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
