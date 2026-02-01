import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutPreview() {
    return (
        <section className="relative bg-gradient-to-b from-black via-emerald-950/40 to-black py-28 px-6 md:px-16 overflow-hidden">

            {/* subtle glow background */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto relative z-10">

                {/* ================================================= */}
                {/* ================= TEXT SIDE ===================== */}
                {/* ================================================= */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* label */}
                    <p className="uppercase tracking-[6px] text-emerald-400 text-xs sm:text-sm mb-5">
                        Our Story
                    </p>

                    {/* heading */}
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                        Where Nature’s
                        <span className="block text-emerald-400">
                            Rarity Meets Craft
                        </span>
                    </h2>

                    {/* premium paragraph */}
                    <p className="mt-7 text-gray-300 leading-relaxed text-sm sm:text-base">
                        For over <span className="text-white font-semibold">40 years</span>,
                        our journey has been rooted in the timeless gemstone heritage of Jaipur.
                        What began as a family trade evolved into a dedicated emerald workshop —
                        where every stone is sourced raw, studied carefully, and shaped by hand.
                    </p>

                    <p className="mt-5 text-gray-400">
                        From mine to masterpiece, each emerald passes through our hands —
                        cut, polished and perfected in-house. No resin. No artificial treatments.
                        Only pure natural brilliance.
                    </p>

                    {/* CTA */}
                    <Link
                        to="/about"
                        className="
              inline-block mt-10
              border border-emerald-400/30
              px-8 py-3 rounded-xl
              hover:bg-emerald-500 hover:text-black
              transition duration-300
            "
                    >
                        Discover Our Journey →
                    </Link>
                </motion.div>

                {/* ================================================= */}
                {/* ================= IMAGE SIDE ==================== */}
                {/* ================================================= */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-5"
                >
                    <img
                        src="/showcase/s2.jpeg"
                        alt=""
                        className="rounded-2xl object-cover h-56 md:h-72 shadow-lg"
                    />

                    <img
                        src="/showcase/s5.jpg"
                        alt=""
                        className="rounded-2xl object-cover h-56 md:h-72 mt-10 shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
}
