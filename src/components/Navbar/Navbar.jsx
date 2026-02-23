import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./navLinks";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* ================= NAVBAR ================= */}

            <header className="fixed top-0 w-full z-50">

                {/* Floating Warm Glass Container */}
                <div
                    className="
            mx-4 mt-4
            rounded-2xl
            backdrop-blur-xl
            bg-[var(--navbar-bg)]
            border border-[var(--border-color)]
            shadow-[var(--shadow-soft)]
            relative
          "
                >

                    {/* subtle emerald accent line */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--emerald-accent)] to-transparent opacity-40" />

                    <div className="px-6 py-3 flex justify-between items-center">

                        {/* ================= LOGO ================= */}

                        <Link
                            to="/"
                            className="flex items-center gap-3 group"
                        >
                            <motion.img
                                src="/logo/nef.png"
                                alt="Natural Emerald Factory"
                                whileHover={{ scale: 1.06 }}
                                className="w-10 h-10 object-contain"
                            />

                            <span
                                className="
                  font-serif
                  text-base md:text-lg
                  tracking-wide
                  font-semibold
                  text-[var(--emerald-dark)]
                "
                            >
                                Natural Emerald Factory
                            </span>
                        </Link>

                        {/* ================= DESKTOP LINKS ================= */}

                        <nav className="hidden md:flex items-center gap-10">

                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`
                    relative uppercase text-sm tracking-wide transition group
                    ${location.pathname === link.path
                                            ? "text-[var(--emerald-accent)]"
                                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                        }
                  `}
                                >
                                    {link.name}

                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--emerald-accent)] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}

                            <Link
                                to="/contact"
                                className="
                  bg-[var(--emerald-accent)]
                  text-white
                  px-5 py-2 rounded-xl font-semibold
                  hover:scale-105 transition
                "
                            >
                                Enquiry
                            </Link>
                        </nav>

                        {/* ================= MOBILE BUTTON ================= */}

                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                        >
                            <motion.span
                                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                                className="w-6 h-[2px] bg-[var(--text-primary)] rounded"
                            />
                            <motion.span
                                animate={{ opacity: open ? 0 : 1 }}
                                className="w-6 h-[2px] bg-[var(--text-primary)] rounded"
                            />
                            <motion.span
                                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                                className="w-6 h-[2px] bg-[var(--text-primary)] rounded"
                            />
                        </button>

                    </div>
                </div>
            </header>

            {/* ================= MOBILE MENU ================= */}

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 40 }}
                            transition={{ duration: 0.25 }}
                            className="
                fixed bottom-6 left-1/2 -translate-x-1/2
                w-[90%] max-w-md
                rounded-2xl
                bg-[var(--bg-secondary)]
                border border-[var(--border-color)]
                shadow-xl
                p-8
                z-50
              "
                        >
                            <div className="flex flex-col gap-7 text-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-serif text-[var(--text-primary)] hover:text-[var(--emerald-accent)] transition"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}