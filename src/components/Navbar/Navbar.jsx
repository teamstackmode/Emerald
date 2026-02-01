import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./navLinks";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* ================================================= */}
            {/* ================= NAVBAR ======================== */}
            {/* ================================================= */}
            <header className="fixed top-0 w-full z-50">

                {/* ===== Floating luxury glass container ===== */}
                <div
                    className="
            mx-3 mt-3
            rounded-2xl
            backdrop-blur-3xl
            bg-emerald-950/40
            border border-emerald-400/10
            shadow-[0_10px_50px_rgba(16,185,129,0.25)]
            relative overflow-hidden
          "
                >
                    {/* soft emerald glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-emerald-600/10 pointer-events-none" />

                    {/* content */}
                    <div className="relative z-10 px-5 py-3 flex justify-between items-center">

                        {/* ================= LOGO ================= */}
                        <Link
                            to="/"
                            className="font-serif text-lg tracking-widest"
                        >
                            <span className="bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-700 bg-clip-text text-transparent font-semibold">
                                Natural Emerald
                            </span>
                        </Link>

                        {/* ================= DESKTOP LINKS ================= */}
                        <nav className="hidden md:flex items-center gap-10">

                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`
                    relative uppercase text-sm tracking-wide
                    transition group
                    ${location.pathname === link.path
                                            ? "text-emerald-400"
                                            : "text-gray-300 hover:text-white"
                                        }
                  `}
                                >
                                    {link.name}

                                    {/* underline animation */}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}

                            {/* CTA */}
                            <Link
                                to="/contact"
                                className="
                  bg-emerald-500 text-black
                  px-5 py-2 rounded-xl font-semibold
                  hover:bg-emerald-400 hover:scale-105
                  transition
                "
                            >
                                Enquiry
                            </Link>
                        </nav>

                        {/* ================= MOBILE BUTTON ================= */}
                        <button
                            onClick={() => setOpen(true)}
                            className="md:hidden text-white"
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ================================================= */}
            {/* ================= MOBILE MENU =================== */}
            {/* ================================================= */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* overlay blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 backdrop-blur-xl bg-black/60 z-40"
                        />

                        {/* popup luxury glass card */}
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 40 }}
                            transition={{ duration: 0.3 }}
                            className="
                fixed bottom-6 left-1/2 -translate-x-1/2
                w-[90%] max-w-md
                rounded-3xl
                backdrop-blur-3xl
                bg-emerald-950/80
                border border-emerald-400/20
                shadow-[0_0_60px_rgba(16,185,129,0.35)]
                p-8
                z-50
              "
                        >
                            {/* close */}
                            <div className="flex justify-end mb-6">
                                <X
                                    className="cursor-pointer text-gray-300 hover:text-white"
                                    onClick={() => setOpen(false)}
                                />
                            </div>

                            {/* links */}
                            <div className="flex flex-col gap-7 text-center">

                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setOpen(false)}
                                        className="text-xl font-serif text-white hover:text-emerald-400 transition"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <Link
                                    to="/contact"
                                    onClick={() => setOpen(false)}
                                    className="bg-emerald-500 text-black py-3 rounded-xl font-semibold mt-4"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
