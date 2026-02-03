import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    Gem,
    Factory,
    Globe,
    ShieldCheck,
    Clock,
    Box,
    FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import LocationMap from "../components/LocationMap";


/*
  Premium About page for Natural Emerald Factory
  - Place this file at src/pages/About.jsx
  - Make sure react-countup is installed: npm i react-countup
  - Images referenced: /showcase/s1.jpeg ... s8.jpg (you already saved these)
*/

const stats = [
    { n: 40, label: "Years in the Gem Trade" },
    { n: 15, label: "Years of Emerald Manufacturing" },
    { n: 10000, label: "Stones Processed Monthly" },
    { n: 25, label: "Countries Supplied" },
];

const timeline = [
    { year: "1985", title: "Roots in Jaipur", text: "Family-run gemstone trading begins in Jaipur’s busy gem bazaar—relationships and reputation are built with local cutters, traders and jewellers." },
    { year: "2010", title: "Emerald Specialisation", text: "Company focuses on emeralds—developing sourcing channels into Zambia, Brazil and Russia and investing in specialised training." },
    { year: "2015", title: "In-house Workshop", text: "A dedicated cutting & polishing workshop is established in Rajapark, Jaipur with master cutters and calibrated production lines." },
    { year: "2020", title: "Export Growth", text: "Growing international demand leads to structured export packaging, documentation and compliance for global wholesalers." },
    { year: "Today", title: "Natural Emerald Factory", text: "Trusted supplier of natural, responsibly-sourced, untreated emeralds — from calibrated components to carat-plus centre stones." },
];

const galleryImages = [
    "/gallery/g1.jpg",
    "/gallery/g2.jpg",
    "/gallery/g3.jpg",
    "/gallery/g9.jpg",
    "/gallery/g5.jpg",
    "/gallery/g6.jpg",
    "/gallery/g7.jpg",
    "/gallery/g8.jpg",
];

export default function About() {
    // gallery modal state
    const [activeIndex, setActiveIndex] = useState(null);

    // keyboard navigation for modal
    const onKeyDown = useCallback((e) => {
        if (activeIndex === null) return;
        if (e.key === "ArrowRight") {
            setActiveIndex((i) => (i + 1) % galleryImages.length);
        } else if (e.key === "ArrowLeft") {
            setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
        } else if (e.key === "Escape") {
            setActiveIndex(null);
        }
    }, [activeIndex]);

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    // preload hero fonts (safe quick import)
    // this is a convenience — move to index.html for production if preferred
    useEffect(() => {
        const id = "nef-google-fonts";
        if (!document.getElementById(id)) {
            const style = document.createElement("style");
            style.id = id;
            style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;600;700&display=swap');
      :root{
        --font-heading: 'Playfair Display', serif;
        --font-body: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      }`;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <section className="relative bg-black text-white overflow-x-hidden">

            {/* subtle page-level styles for fonts */}
            <style>{`
        .nef-heading { font-family: var(--font-heading); }
        .nef-body { font-family: var(--font-body); }
      `}</style>

            {/* HERO */}
            <header className="relative h-[56vh] min-h-[420px] flex items-center justify-center overflow-hidden">
                <img
                    src="/gallery/g18.jpg"
                    alt="Emerald workshop"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />

                {/* emerald light */}
                <div className="absolute -inset-20 bg-gradient-to-tr from-transparent via-emerald-900/10 to-transparent pointer-events-none" />

                <div className="relative z-20 max-w-5xl text-center px-6">
                    <h1 className="nef-heading text-4xl md:text-6xl leading-tight">
                        Crafting Nature’s Rarest — <span className="text-emerald-400">Emerald Masterpieces</span>
                    </h1>
                    <p className="nef-body mt-6 text-gray-300 max-w-3xl mx-auto">
                        From mine to masterpiece: we select, cut and finish premium natural emeralds at our Rajapark workshop in Jaipur.
                        Each gemstone is handled by master cutters to preserve natural color and life — no permanent fillings, only truthful disclosure.
                    </p>

                    <div className="mt-8 flex gap-4 justify-center">
                        <Link to="/contact" className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">Request Samples</Link>
                        <Link to="/gallery" className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/5 transition">View Gallery</Link>
                    </div>
                </div>

                {/* hero lower graphic */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </header>

            {/* STATS */}
            <section className="py-12 md:py-20 bg-gradient-to-b from-black to-emerald-950/5">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((s) => (
                        <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <h3 className="text-3xl md:text-4xl font-semibold text-emerald-400 nef-heading">
                                <CountUp end={s.n} duration={2} />+
                            </h3>
                            <p className="text-gray-300 mt-2 nef-body">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* DETAILED SELLER SUMMARY */}
            <section className="max-w-6xl mx-auto px-6 md:px-0 py-16">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="nef-heading text-2xl md:text-3xl">What We Do — In One Line</h2>
                        <p className="text-gray-300 nef-body">
                            Natural Emerald Factory (NEF) is a vertically-integrated emerald manufacturer based in Jaipur.
                            We source rough emeralds from verified mines and auctions, carefully plan cuts to respect crystal geometry,
                            and finish each stone in-house — providing calibrated components and bespoke centre stones for high-end jewellery.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="bg-white/3 border border-white/6 rounded-xl p-5">
                                <h4 className="text-emerald-300 font-semibold nef-heading">Origins</h4>
                                <p className="text-gray-300 text-sm nef-body mt-2">
                                    Primary sourcing: <strong>Zambia, Brazil, Russia</strong>. We maintain provenance logs for parcels and provide origin notes on request.
                                </p>
                            </div>

                            <div className="bg-white/3 border border-white/6 rounded-xl p-5">
                                <h4 className="text-emerald-300 font-semibold nef-heading">Integrity Policy</h4>
                                <p className="text-gray-300 text-sm nef-body mt-2">
                                    We do <strong>not</strong> use permanent resin or hard-filling treatments on stones marketed as "natural untreated". Any reversible minor oiling is disclosed.
                                </p>
                            </div>
                        </div>

                        <blockquote className="mt-6 border-l-2 border-emerald-600 pl-4 text-gray-200 nef-body italic">
                            “We believe a gemstone’s value lies in its natural character — our craft reveals nature without hiding it.”
                        </blockquote>

                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                            <div className="bg-white/4 border border-white/8 rounded-xl p-4 text-center">
                                <Gem className="mx-auto text-emerald-400" />
                                <p className="mt-2 text-sm text-gray-300">Pure Natural Stones</p>
                            </div>
                            <div className="bg-white/4 border border-white/8 rounded-xl p-4 text-center">
                                <Factory className="mx-auto text-emerald-400" />
                                <p className="mt-2 text-sm text-gray-300">In-House Manufacturing</p>
                            </div>
                            <div className="bg-white/4 border border-white/8 rounded-xl p-4 text-center">
                                <ShieldCheck className="mx-auto text-emerald-400" />
                                <p className="mt-2 text-sm text-gray-300">Ethical Sourcing & Traceability</p>
                            </div>
                        </div>

                        {/* packaging + lead time + MOQ */}
                        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                            <div className="bg-white/3 border border-white/6 rounded-xl p-4">
                                <h5 className="font-semibold text-white">Packaging & Shipping</h5>
                                <p className="mt-2">Export-ready packaging, tamper-evident sealing, insurance & documentation for customs included on request.</p>
                            </div>
                            <div className="bg-white/3 border border-white/6 rounded-xl p-4">
                                <h5 className="font-semibold text-white">Lead Time</h5>
                                <p className="mt-2">Samples: 3–7 business days. Bulk orders: 2–6 weeks depending on size and customization.</p>
                            </div>
                            <div className="bg-white/3 border border-white/6 rounded-xl p-4">
                                <h5 className="font-semibold text-white">MOQ</h5>
                                <p className="mt-2">Calibrated small sizes available in commercial lots. Custom MOQ for carat-plus centre stones; contact for options.</p>
                            </div>
                        </div>

                    </div>

                    {/* right column: fast facts + download */}
                    <aside className="space-y-6">
                        <div className="bg-gradient-to-br from-emerald-800/30 to-emerald-900/10 border border-emerald-800 rounded-xl p-6">
                            <h4 className="text-emerald-300 font-semibold nef-heading">Quick Facts</h4>
                            <ul className="text-gray-300 text-sm mt-3 space-y-2">
                                <li><strong>Headquarter:</strong> Rajapark, Jaipur</li>
                                <li><strong>Business Type:</strong> Manufacturer & Exporter</li>
                                <li><strong>Products:</strong> Calibrated & bespoke emeralds</li>
                                <li><strong>Policy:</strong> Natural untreated focus</li>
                            </ul>
                        </div>

                        <div className="bg-white/4 border border-white/8 rounded-xl p-6 text-center">
                            <Clock className="mx-auto text-emerald-400" />
                            <p className="mt-3 text-sm text-gray-300">Sample Requests processed within 3–7 days</p>
                        </div>
                    </aside>
                </div>
            </section>

            {/* MANUFACTURING PROCESS (cards) */}
            <section className="py-12 bg-black/60">
                <div className="max-w-6xl mx-auto px-6 md:px-0">
                    <h3 className="nef-heading text-2xl md:text-3xl text-center mb-8">Manufacturing — step by step</h3>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Rough Evaluation", desc: "Microscopic study of inclusions, crystal orientation and planning for optimal yield." },
                            { title: "Sawing & Blocking", desc: "Precision sawing to preserve usable material and split centrepieces." },
                            { title: "Faceting", desc: "Master-cutters execute step and brilliant facet patterns to reveal color and life." },
                            { title: "Polish & QC", desc: "Final polish, strict grading and photographic documentation for samples." },
                        ].map((card, i) => (
                            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white/4 border border-white/8 rounded-xl p-6">
                                <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                                    <Gem className="text-emerald-300" />
                                </div>
                                <h4 className="font-semibold">{card.title}</h4>
                                <p className="text-gray-300 text-sm mt-2">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section id="gallery" className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="nef-heading text-2xl md:text-3xl text-center mb-8">Showcase — selected pieces</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((src, i) => (
                            <motion.button
                                key={src}
                                onClick={() => setActiveIndex(i)}
                                whileHover={{ scale: 1.02 }}
                                className="rounded-xl overflow-hidden p-0 bg-transparent border-none"
                                aria-label={`Open gallery image ${i + 1}`}
                            >
                                <img src={src} alt={`emerald ${i + 1}`} className="w-full h-36 md:h-44 object-cover rounded-xl shadow-lg" loading="lazy" />
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* LIGHTBOX MODAL */}
                {activeIndex !== null && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
                        <div className="absolute inset-0 bg-black/70" onClick={() => setActiveIndex(null)} />
                        <div className="relative z-10 max-w-4xl w-full">
                            <img src={galleryImages[activeIndex]} alt={`emerald ${activeIndex + 1}`} className="w-full h-[60vh] object-contain rounded-xl shadow-2xl" />
                            <div className="flex items-center justify-between mt-4 gap-4">
                                <button onClick={() => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)} className="bg-white/5 p-3 rounded-full hover:bg-white/10">
                                    ‹
                                </button>
                                <div className="flex gap-2 overflow-auto">
                                    {galleryImages.map((g, j) => (
                                        <button key={g} onClick={() => setActiveIndex(j)} className={`rounded-md overflow-hidden ${j === activeIndex ? "ring-2 ring-emerald-400" : ""}`}>
                                            <img src={g} alt="" className="w-16 h-10 object-cover" />
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setActiveIndex((i) => (i + 1) % galleryImages.length)} className="bg-white/5 p-3 rounded-full hover:bg-white/10">
                                    ›
                                </button>
                            </div>
                            <div className="mt-4 text-right">
                                <button onClick={() => setActiveIndex(null)} className="text-sm text-gray-300 underline">Close</button>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* TIMELINE */}
            <section className="py-20 bg-black/80">
                <div className="max-w-5xl mx-auto px-6">
                    <h3 className="nef-heading text-2xl md:text-3xl text-center mb-8">Heritage Timeline</h3>

                    <div className="space-y-10">
                        {timeline.map((t, i) => (
                            <motion.div key={t.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white/4 border border-white/8 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-16">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <Globe className="text-emerald-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-emerald-300 font-semibold">{t.year}</p>
                                        <h4 className="text-white font-semibold mt-1">{t.title}</h4>
                                        <p className="text-gray-300 text-sm mt-2">{t.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST BADGES & CERTS */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
                    <div className="bg-white/4 border border-white/8 rounded-xl p-6 text-center">
                        <ShieldCheck className="mx-auto text-emerald-400" />
                        <h5 className="mt-3 font-semibold">Authenticity Guarantee</h5>
                        <p className="text-gray-300 text-sm mt-2">Every parcel includes a QC note; lab reports available on request for high-value lots.</p>
                    </div>

                    <div className="bg-white/4 border border-white/8 rounded-xl p-6 text-center">
                        <Gem className="mx-auto text-emerald-400" />
                        <h5 className="mt-3 font-semibold">Natural & Untreated</h5>
                        <p className="text-gray-300 text-sm mt-2">We never present permanently filled stones as untreated—full disclosure on all enhancements.</p>
                    </div>

                    <div className="bg-white/4 border border-white/8 rounded-xl p-6 text-center">
                        <FileText className="mx-auto text-emerald-400" />
                        <h5 className="mt-3 font-semibold">Documentation</h5>
                        <p className="text-gray-300 text-sm mt-2">Pro forma, packing list, origin notes & export docs available for every shipment.</p>
                    </div>

                    <div className="bg-white/4 border border-white/8 rounded-xl p-6 text-center">
                        <Box className="mx-auto text-emerald-400" />
                        <h5 className="mt-3 font-semibold">Packaging</h5>
                        <p className="text-gray-300 text-sm mt-2">Secure export-ready packaging, tamper-evident seals & insured shipping options.</p>
                    </div>
                </div>
            </section>

            {/* CTA & Contact */}
            <section id="contact" className="py-20 bg-gradient-to-b from-black to-emerald-950/5">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h3 className="nef-heading text-3xl mb-4">Request Samples or Pricing</h3>
                    <p className="text-gray-300 mb-6">Tell us the shape, size and approximate carat range. We'll reply with pricing, availability and sample options.</p>

                    <Link to="/contact" className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">Contact Sales</Link>

                    <p className="text-xs text-gray-400 mt-4">Prefer WhatsApp? Click the floating contact button — message is prefilled for convenience.</p>
                </div>
            </section>
            <LocationMap />

        </section>
    );
}
