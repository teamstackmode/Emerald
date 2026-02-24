import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutPreview() {
    return (
        <section className="relative bg-[var(--bg-primary)] py-28 px-6 md:px-16 overflow-hidden">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

                {/* ================= TEXT SIDE ================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >

                    {/* Label */}
                    <p className="uppercase tracking-[6px] text-[var(--emerald-accent)] text-xs sm:text-sm mb-5">
                        Our Story
                    </p>

                    {/* Heading */}
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-tight">
                        Where Nature’s
                        <span className="block text-[var(--emerald-accent)]">
                            Rarity Meets Craft
                        </span>
                    </h2>

                    {/* Decorative Divider */}
                    <div className="w-16 h-[2px] bg-[var(--emerald-accent)] mt-6 mb-8" />

                    {/* Paragraph */}
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                        For over <span className="font-semibold text-[var(--text-primary)]">40 years</span>,
                        our journey has been rooted in Jaipur’s gemstone heritage.
                        What began as a family trade evolved into a specialized emerald
                        manufacturing unit dedicated to precision, authenticity and excellence.
                    </p>

                    <p className="mt-5 text-[var(--text-secondary)]">
                        From sourcing rough emeralds in Zambia, Brazil and Russia to
                        cutting and polishing them in-house, every stone reflects
                        craftsmanship and purity. No resin. No artificial enhancement.
                        Only natural emerald brilliance.
                    </p>

                    {/* CTA */}
                    <Link
                        to="/about"
                        className="
              inline-block mt-10
              px-8 py-3
              rounded-xl
              border border-[var(--emerald-accent)]
              text-[var(--emerald-accent)]
              hover:bg-[var(--emerald-accent)]
              hover:text-white
              transition duration-300
            "
                    >
                        Discover Our Journey →
                    </Link>

                </motion.div>

                {/* ================= IMAGE SIDE ================= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6"
                >

                    <img
                        src="/gallery/g2.jpg"
                        alt="Emerald Crafting"
                        className="
              rounded-2xl
              object-cover
              h-64 md:h-80
              shadow-[0_20px_50px_rgba(0,0,0,0.06)]
              hover:scale-105
              transition duration-500
            "
                    />

                    <img
                        src="/gallery/g3.jpg"
                        alt="Emerald Detail"
                        className="
              rounded-2xl
              object-cover
              h-64 md:h-80
              mt-10
              shadow-[0_20px_50px_rgba(0,0,0,0.06)]
              hover:scale-105
              transition duration-500
            "
                    />

                </motion.div>

            </div>
        </section>
    );
}