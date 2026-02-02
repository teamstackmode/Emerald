import { motion } from "framer-motion";

const timeline = [
    {
        year: "1985",
        title: "Started Gemstone Trading",
        text: "Our family entered Jaipur’s gemstone market, building trust with jewellers and traders.",
    },
    {
        year: "2010",
        title: "Focused on Emerald Manufacturing",
        text: "Specialized in emerald sourcing and cutting to deliver consistent quality stones.",
    },
    {
        year: "2015",
        title: "In-House Cutting Facility",
        text: "Established our own workshop with trained master craftsmen.",
    },
    {
        year: "2020",
        title: "Global Supply Network",
        text: "Expanded exports to international wholesalers and jewellery manufacturers.",
    },
    {
        year: "Today",
        title: "Natural Emerald Factory",
        text: "Trusted supplier of natural untreated emeralds worldwide.",
    },
];

export default function TimelineSection() {
    return (
        <section className="py-28 bg-black relative">

            {/* vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-emerald-800/40 hidden md:block" />

            <div className="max-w-6xl mx-auto px-6 md:px-16 space-y-20">

                <h2 className="text-center font-serif text-3xl md:text-5xl mb-16">
                    Our Journey Through Time
                </h2>

                {timeline.map((item, index) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`
              md:grid md:grid-cols-2 items-center gap-10
              ${index % 2 === 0 ? "" : "md:text-right"}
            `}
                    >

                        {/* left/right content */}
                        <div className={`${index % 2 === 0 ? "" : "md:order-2"}`}>
                            <h3 className="text-emerald-400 text-xl font-semibold">
                                {item.year}
                            </h3>

                            <h4 className="text-white text-lg font-semibold mt-2">
                                {item.title}
                            </h4>

                            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </div>

                        {/* glowing dot */}
                        <div className="hidden md:flex justify-center">
                            <div className="w-5 h-5 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}
