import { motion } from "framer-motion";
import { ShieldCheck, Gem, Factory, Globe } from "lucide-react";

/* ================================================= */
/* ================= DATA ========================== */
/* ================================================= */

const testimonials = [
    {
        name: "Ramesh Mehta",
        role: "Wholesale Gem Trader",
        text: "Exceptional quality and perfect sizing consistency for bulk orders. Our go-to emerald supplier.",
    },
    {
        name: "Priya Jewels",
        role: "Jewellery Manufacturer",
        text: "Beautiful cuts with natural brilliance. Their stones elevate our premium collections.",
    },
    {
        name: "Arvind Exports",
        role: "International Trader",
        text: "Reliable sourcing, transparent pricing and timely delivery. A trusted long-term partner.",
    },
    {
        name: "Kunal Gems",
        role: "Retail Jeweller",
        text: "Customers love the natural look and color. Truly authentic emeralds.",
    },
];

/* trust badges */
const badges = [
    { icon: Gem, text: "100% Natural Emeralds" },
    { icon: Factory, text: "In-House Manufacturing" },
    { icon: ShieldCheck, text: "40+ Years Experience" },
    { icon: Globe, text: "Global Supply" },
];

export default function Testimonials() {
    return (
        <section className="relative bg-black py-28 px-6 md:px-16 overflow-hidden">

            {/* emerald glow */}
            <div className="absolute -top-32 right-[-120px] w-[450px] h-[450px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* ================================================= */}
                {/* ================= TRUST BADGES ================== */}
                {/* ================================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {badges.map((b, i) => {
                        const Icon = b.icon;

                        return (
                            <div
                                key={i}
                                className="
                  flex items-center gap-3
                  justify-center
                  bg-white/5 border border-white/10
                  rounded-xl
                  py-4
                  text-sm text-gray-300
                "
                            >
                                <Icon size={18} className="text-emerald-400" />
                                {b.text}
                            </div>
                        );
                    })}
                </motion.div>

                {/* ================================================= */}
                {/* ================= HEADER ======================== */}
                {/* ================================================= */}

                <div className="text-center mb-12">
                    <p className="uppercase tracking-[6px] text-emerald-400 text-xs mb-4">
                        Testimonials
                    </p>

                    <h2 className="font-serif text-3xl md:text-5xl text-white">
                        Trusted by Professionals Worldwide
                    </h2>
                </div>

                {/* ================================================= */}
                {/* ================= AUTO SLIDER =================== */}
                {/* ================================================= */}

                <div className="overflow-hidden relative">

                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 25, // slow luxury speed
                            ease: "linear",
                        }}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="
                  min-w-[280px] md:min-w-[360px]
                  backdrop-blur-xl bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-8
                "
                            >
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    “{t.text}”
                                </p>

                                <h4 className="text-white font-semibold">{t.name}</h4>
                                <p className="text-emerald-400 text-xs mt-1">{t.role}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
