import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContactPreview() {
    return (
        <section className="bg-black py-24 px-6 md:px-16">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
          max-w-4xl mx-auto
          backdrop-blur-xl bg-white/5
          border border-white/10
          rounded-3xl
          p-10 md:p-14
          text-center
        "
            >
                <p className="uppercase tracking-[5px] text-emerald-400 text-xs mb-4">
                    Get In Touch
                </p>

                <h2 className="font-serif text-3xl md:text-4xl text-white">
                    Ready to Source Premium Emeralds?
                </h2>

                <p className="text-gray-400 mt-4 mb-10">
                    Share your requirement and our team will connect with you shortly.
                </p>

                {/* mini form */}
                <div className="grid sm:grid-cols-3 gap-4">
                    <input
                        placeholder="Your Name"
                        className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white"
                    />
                    <input
                        placeholder="Phone or Email"
                        className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white"
                    />
                    <button className="bg-emerald-500 text-black font-semibold rounded-lg py-3 hover:scale-105 transition">
                        Quick Enquiry
                    </button>
                </div>

                <Link
                    to="/contact"
                    className="block mt-6 text-emerald-400 hover:underline"
                >
                    Need detailed enquiry? Visit full contact page →
                </Link>
            </motion.div>
        </section>
    );
}
