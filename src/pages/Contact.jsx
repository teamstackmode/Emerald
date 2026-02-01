import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section className="bg-black text-white min-h-screen py-24 px-6 md:px-16">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                {/* ================================================= */}
                {/* ================= INFO SIDE ===================== */}
                {/* ================================================= */}

                <div>
                    <h1 className="font-serif text-4xl md:text-5xl mb-6">
                        Contact Us
                    </h1>

                    <p className="text-gray-400 mb-10">
                        We supply emeralds to wholesalers, traders and jewellers across
                        India and worldwide. Reach out for bulk orders or custom sizes.
                    </p>

                    <div className="space-y-5 text-gray-300">

                        <div className="flex items-center gap-3">
                            <Phone className="text-emerald-400" size={18} />
                            +91 98765 43210
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="text-emerald-400" size={18} />
                            info@naturalemeraldfactory.com
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin className="text-emerald-400" size={18} />
                            Raja Park, Jaipur, Rajasthan
                        </div>

                        <a
                            href="https://wa.me/919876543210"
                            className="flex items-center gap-3 text-emerald-400"
                        >
                            <MessageCircle size={18} />
                            WhatsApp Chat
                        </a>
                    </div>
                </div>

                {/* ================================================= */}
                {/* ================= FORM ========================== */}
                {/* ================================================= */}

                <form className="space-y-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

                    <input
                        placeholder="Full Name"
                        className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3"
                    />

                    <input
                        placeholder="Email Address"
                        className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3"
                    />

                    <input
                        placeholder="Phone Number"
                        className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3"
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Requirement"
                        className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3"
                    />

                    <button className="w-full bg-emerald-500 text-black py-3 rounded-lg font-semibold hover:scale-105 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
