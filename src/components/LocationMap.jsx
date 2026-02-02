import { MapPin } from "lucide-react";

export default function LocationMap() {
    return (
        <section className="relative py-28 bg-gradient-to-b from-black via-emerald-950/20 to-black">

            {/* emerald glow */}
            <div className="absolute -left-40 top-10 w-[400px] h-[400px] bg-emerald-600/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">

                {/* header */}
                <div className="text-center mb-14">
                    <p className="uppercase tracking-[6px] text-emerald-400 text-xs mb-4">
                        Visit Us
                    </p>

                    <h2 className="font-serif text-3xl md:text-5xl text-white">
                        Our Workshop Location
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Rajapark, Jaipur, Rajasthan — India
                    </p>
                </div>

                {/* map card */}
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(16,185,129,0.15)]">

                    <iframe
                        title="Natural Emerald Factory Location"
                        src="https://www.google.com/maps?q=Rajapark%20Jaipur%20Rajasthan&output=embed"
                        className="w-full h-[300px] md:h-[450px]"
                        loading="lazy"
                        allowFullScreen
                    />

                </div>

                {/* open maps button */}
                <div className="text-center mt-8">

                    <a
                        href="https://www.google.com/maps?q=Rajapark+Jaipur+Rajasthan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        <MapPin size={18} />
                        Open in Google Maps
                    </a>

                </div>
            </div>
        </section>
    );
}
