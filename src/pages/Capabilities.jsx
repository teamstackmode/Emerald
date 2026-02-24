import { motion } from "framer-motion";
import {
    Factory,
    ShieldCheck,
    Globe,
    Package,
    Ruler,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ================================================= */
/* MAIN COMPONENT                                    */
/* ================================================= */

export default function Capabilities() {
    return (
        <section className="relative bg-[var(--bg-main)] text-[var(--text-primary)] overflow-hidden">

            {/* Soft Emerald Accent Glow */}
            <div className="absolute -top-32 right-[-120px] w-[400px] h-[400px] bg-emerald-200/40 blur-[120px] rounded-full pointer-events-none" />

            {/* ================================================= */}
            {/* HERO                                              */}
            {/* ================================================= */}

            <div className="py-32 text-center max-w-4xl mx-auto px-6">

                <p className="uppercase tracking-[6px] text-[var(--emerald-accent)] text-xs mb-4">
                    Capabilities
                </p>

                <h1 className="font-serif text-4xl md:text-6xl leading-tight">
                    Precision. Scale.
                    <span className="block text-[var(--emerald-accent)]">
                        Craftsmanship.
                    </span>
                </h1>

                <p className="mt-6 text-[var(--text-secondary)]">
                    From rough emerald sourcing to calibrated finished stones,
                    we manage every stage in-house to ensure unmatched quality,
                    consistency and trust for jewellers and wholesalers worldwide.
                </p>

            </div>

            {/* ================================================= */}
            {/* SECTIONS                                          */}
            {/* ================================================= */}

            <Section
                title="In-House Manufacturing"
                text="Every emerald is cut, faceted and polished inside our Jaipur workshop.
        Our skilled craftsmen analyze each rough stone and plan precise cuts
        to maximize brilliance and minimize wastage."
                img="/gallery/g3.jpg"
                icon={<Factory className="text-[var(--emerald-accent)]" />}
            />

            <Section
                title="Shapes & Calibrated Sizes"
                text="We manufacture oval, round, square, octagon, pear, sugarloaf and custom shapes.
        Available from 1mm calibrated sizes to carat-plus centre stones for high jewellery."
                img="/gallery/g9.jpg"
                reverse
                icon={<Ruler className="text-[var(--emerald-accent)]" />}
            />

            <Section
                title="Global Sourcing"
                text="We source rough emeralds directly from mines and auctions across Zambia,
        Brazil and Russia. This ensures authenticity, consistent supply and
        competitive pricing for bulk buyers."
                img="/gallery/g2.jpg"
                icon={<Globe className="text-[var(--emerald-accent)]" />}
            />

            {/* ================================================= */}
            {/* QUALITY STANDARDS                                */}
            {/* ================================================= */}

            <div className="py-28 px-6 md:px-16 max-w-6xl mx-auto">

                <h2 className="font-serif text-3xl text-center mb-14">
                    Quality Standards
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {[
                        "100% Natural Emeralds",
                        "No Resin or Hard Oil",
                        "Strict Quality Check",
                        "Hand Inspected Stones",
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                        >
                            <ShieldCheck className="mx-auto text-[var(--emerald-accent)] mb-3" />
                            <p className="text-sm text-[var(--text-secondary)]">{item}</p>
                        </motion.div>
                    ))}

                </div>

            </div>

            {/* ================================================= */}
            {/* BULK CAPABILITY                                  */}
            {/* ================================================= */}

            <Section
                title="Bulk & Custom Orders"
                text="From commercial parcels to premium centre stones, we handle both large-scale
        supply and custom manufacturing. Our calibrated sizing and consistent quality
        make us a preferred partner for wholesalers and jewellery manufacturers."
                img="/gallery/g12.jpg"
                reverse
                icon={<Package className="text-[var(--emerald-accent)]" />}
            />

            {/* ================================================= */}
            {/* STATS                                            */}
            {/* ================================================= */}

            <div className="py-24 text-center bg-[var(--bg-soft)]">

                <h2 className="font-serif text-3xl mb-14">
                    Trusted By Professionals
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

                    <Stat value="40+" label="Years Experience" />
                    <Stat value="15+" label="Years Manufacturing" />
                    <Stat value="10K+" label="Stones Monthly" />
                    <Stat value="25+" label="Countries Served" />

                </div>

            </div>

            {/* ================================================= */}
            {/* CTA                                              */}
            {/* ================================================= */}

            <div className="text-center py-28">
                <Link
                    to="/contact"
                    className="bg-[var(--emerald-accent)] text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                    Discuss Your Requirement
                </Link>
            </div>

        </section>
    );
}

/* ================================================= */
/* REUSABLE SECTION                                  */
/* ================================================= */

function Section({ title, text, img, reverse, icon }) {
    return (
        <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto">

            <div className={`grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:flex md:flex-row-reverse" : ""}`}>

                <motion.img
                    src={img}
                    alt={title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="rounded-2xl object-cover h-80 w-full shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        {icon}
                        <h2 className="font-serif text-3xl">{title}</h2>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        {text}
                    </p>
                </motion.div>

            </div>

        </div>
    );
}

/* ================================================= */
/* STATS                                             */
/* ================================================= */

function Stat({ value, label }) {
    return (
        <div>
            <h3 className="text-4xl font-serif text-[var(--emerald-accent)]">
                {value}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
                {label}
            </p>
        </div>
    );
}