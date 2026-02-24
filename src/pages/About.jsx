import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    Gem,
    ShieldCheck,
    Box,
    FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import LocationMap from "../components/LocationMap";

/* ================= DATA ================= */

const stats = [
    { n: 40, label: "Years in the Gem Trade" },
    { n: 15, label: "Years of Emerald Manufacturing" },
    { n: 10000, label: "Stones Processed Monthly" },
    { n: 25, label: "Countries Supplied" },
];

export default function About() {
    return (
        <section className="pt-16 md:pt-20 bg-[var(--bg-main)] text-[var(--text-primary)] overflow-x-hidden">

            {/* ================= HERO ================= */}

            <header className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center mx-4 rounded-3xl overflow-hidden">

                {/* Background Image */}
                <img
                    src="/gallery/g18.jpg"
                    alt="Emerald workshop"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Soft Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/70 to-white/40" />

                <div className="relative z-10 text-center max-w-4xl px-6 py-10">

                    {/* Main Brand */}
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight">
                        Natural Emerald Factory
                    </h1>

                    {/* Gold Divider */}
                    <div className="flex justify-center my-3 md:my-4">
                        <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                    </div>

                    {/* Sub Brand */}
                    <p className="uppercase tracking-[3px] text-xs sm:text-sm md:text-base text-[var(--emerald-accent)] font-medium">
                        by Rukmani Jewellers
                    </p>

                    {/* Tagline */}
                    <h2 className="mt-6 font-serif text-2xl sm:text-3xl md:text-5xl leading-tight">
                        Crafting Nature’s Rarest —
                        <span className="block text-[var(--emerald-accent)]">
                            Emerald Masterpieces
                        </span>
                    </h2>

                    <p className="mt-5 text-sm sm:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
                        From mine to masterpiece, we source, plan and finish premium emeralds
                        in-house at Jaipur. Each stone is cut to preserve natural brilliance —
                        no permanent resin or hard filling.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-[var(--emerald-accent)] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                        >
                            Request Samples
                        </Link>

                        <Link
                            to="/gallery"
                            className="border border-[var(--emerald-accent)] px-6 py-3 rounded-xl hover:bg-[var(--emerald-accent)] hover:text-white transition"
                        >
                            View Gallery
                        </Link>
                    </div>

                </div>
            </header>

            {/* ================= STATS ================= */}

            <section className="py-16 md:py-20 bg-[var(--bg-soft)]">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <h3 className="text-2xl md:text-4xl font-serif text-[var(--emerald-accent)]">
                                <CountUp end={s.n} duration={2} />+
                            </h3>
                            <p className="text-[var(--text-secondary)] mt-2 text-sm">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}

            <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                <div className="grid md:grid-cols-3 gap-10">

                    <div className="md:col-span-2 space-y-6">

                        <h2 className="font-serif text-2xl md:text-3xl">
                            A Vertically Integrated Emerald Manufacturer
                        </h2>

                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            Natural Emerald Factory (NEF), by Rukmani Jewellers, is a Jaipur-based
                            emerald manufacturer with over 40 years in the gemstone trade and
                            15 years dedicated to emerald production.
                            We source rough emeralds from Zambia, Brazil and Russia through
                            verified channels and auctions.
                        </p>

                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            Every emerald is cut and polished in-house by master craftsmen.
                            We manufacture square, round, octagon, pear, sugarloaf, oval
                            and custom shapes depending on raw material availability.
                        </p>

                        <blockquote className="border-l-4 border-[var(--emerald-accent)] pl-4 italic text-[var(--text-secondary)]">
                            “Our craft enhances nature — it never hides it.”
                        </blockquote>

                    </div>

                    {/* Quick Facts */}
                    <aside className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6 space-y-3">
                        <h4 className="font-serif text-lg text-[var(--emerald-accent)]">
                            Quick Facts
                        </h4>
                        <p><strong>Location:</strong> Janta Colony, Jaipur (Raj)</p>
                        <p><strong>Type:</strong> Manufacturer & Exporter</p>
                        <p><strong>Speciality:</strong> Natural Untreated Emeralds</p>
                        <p><strong>Clients:</strong> Wholesalers, Traders, Jewellers, Retail</p>
                    </aside>

                </div>
            </section>

            {/* ================= PROCESS ================= */}

            <section className="py-16 md:py-20 bg-[var(--bg-soft)]">
                <div className="max-w-6xl mx-auto px-6">

                    <h3 className="font-serif text-2xl md:text-3xl text-center mb-10 md:mb-12">
                        Manufacturing Process
                    </h3>

                    <div className="grid md:grid-cols-4 gap-6">

                        {[
                            "Rough Evaluation",
                            "Precision Cutting",
                            "Faceting & Shaping",
                            "Polish & Quality Control",
                        ].map((title, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center"
                            >
                                <Gem className="mx-auto text-[var(--emerald-accent)] mb-4" />
                                <h4 className="font-semibold">{title}</h4>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= TRUST SECTION ================= */}

            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">

                    {[
                        { icon: ShieldCheck, title: "Authenticity Guarantee" },
                        { icon: Gem, title: "Natural & Untreated" },
                        { icon: FileText, title: "Full Documentation" },
                        { icon: Box, title: "Secure Packaging" },
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                            >
                                <Icon className="mx-auto text-[var(--emerald-accent)]" />
                                <h5 className="mt-4 font-semibold">{item.title}</h5>
                            </div>
                        );
                    })}

                </div>
            </section>

            {/* ================= CTA ================= */}

            <section className="py-16 md:py-20 bg-[var(--bg-soft)] text-center">

                <h3 className="font-serif text-2xl md:text-3xl mb-4">
                    Request Samples or Pricing
                </h3>

                <p className="text-[var(--text-secondary)] mb-6">
                    Share your shape, size and carat requirement. We’ll respond with availability and pricing.
                </p>

                <Link
                    to="/contact"
                    className="bg-[var(--emerald-accent)] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                    Contact Sales
                </Link>

            </section>

            <LocationMap />

        </section>
    );
}