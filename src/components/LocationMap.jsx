import { MapPin } from "lucide-react";

export default function LocationMap() {
    return (
        <section className="relative py-28 bg-[var(--bg-soft)] overflow-hidden">

            {/* Soft Emerald Glow */}
            <div className="absolute -right-32 top-10 w-[400px] h-[400px] bg-emerald-200/40 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">

                {/* ================= HEADER ================= */}
                <div className="text-center mb-14">

                    <p className="uppercase tracking-[6px] text-[var(--emerald-accent)] text-xs mb-4">
                        Visit Us
                    </p>

                    <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-primary)]">
                        Our Workshop Location
                    </h2>

                    <p className="text-[var(--text-secondary)] mt-4">
                        Janta Colony, Jaipur, Rajasthan — India
                    </p>

                </div>

                {/* ================= MAP CARD ================= */}
                <div className="rounded-3xl overflow-hidden bg-white shadow-[0_25px_60px_rgba(0,0,0,0.08)]">

                    <iframe
                        title="Natural Emerald Factory Location"
                        src="https://www.google.com/maps?q=Janta%20Colony%20Jaipur%20Rajasthan&output=embed"
                        className="w-full h-[320px] md:h-[450px]"
                        loading="lazy"
                        allowFullScreen
                    />

                </div>

                {/* ================= OPEN MAP BUTTON ================= */}
                <div className="text-center mt-10">

                    <a
                        href="https://www.google.com/maps?q=Janta+Colony+Jaipur+Rajasthan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              inline-flex items-center gap-2
              bg-[var(--emerald-accent)]
              text-white
              px-6 py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              shadow-md
            "
                    >
                        <MapPin size={18} />
                        Open in Google Maps
                    </a>

                </div>

            </div>
        </section>
    );
}