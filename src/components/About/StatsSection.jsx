import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
    { number: 40, suffix: "+", label: "Years Experience" },
    { number: 15, suffix: "+", label: "Years Manufacturing" },
    { number: 10000, suffix: "+", label: "Stones Crafted Monthly" },
    { number: 25, suffix: "+", label: "Global Clients" },
];

export default function StatsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-black via-emerald-950/20 to-black">

            <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                {stats.map((s, index) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-emerald-400">
                            <CountUp end={s.number} duration={2} />
                            {s.suffix}
                        </h3>

                        <p className="text-gray-400 text-sm tracking-wide">
                            {s.label}
                        </p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
