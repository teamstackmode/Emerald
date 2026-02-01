import { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { Phone, Mail, Gem } from "lucide-react";
import WhatsappIcon from "../icons/WhatsappIcon";


export default function FloatingContact() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScroll = useRef(0);

    /* ================= AUTO HIDE ================= */

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            if (current > lastScroll.current && current > 120) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            lastScroll.current = current;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ================= SOUND ================= */

    const playSound = () => {
        const audio = new Audio("/click.mp3");
        audio.volume = 0.2;
        audio.play();
    };

    const toggle = () => {
        playSound();
        setOpen((prev) => !prev);
    };

    /* ================= MAGNETIC ================= */

    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 200, damping: 15 });
    const springY = useSpring(y, { stiffness: 200, damping: 15 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * 0.25);
        y.set((e.clientY - centerY) * 0.25);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    /* ================= ITEMS ================= */

    const items = [
        { icon: Phone, link: "tel:+918302290180" },
        {
            icon: WhatsappIcon,
            link: `https://wa.me/918302290180?text=${encodeURIComponent(
                "Hello Natural Emerald Factory, I am interested in emerald purchase. Please share details."
            )}`,
        },
        { icon: Mail, link: "mailto:info@naturalemeraldfactory.com" },
    ];

    const radius = 95;

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-[999]"
            animate={{
                opacity: visible ? 1 : 0,
                y: visible ? 0 : 40,
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative flex items-center justify-center">

                {/* ========== CIRCULAR POPCORN BUTTONS ========== */}

                <AnimatePresence>
                    {open &&
                        items.map((item, i) => {
                            const angle = 180 + i * 45;
                            const rad = (angle * Math.PI) / 180;

                            const xPos = Math.cos(rad) * radius;
                            const yPos = Math.sin(rad) * radius;

                            const Icon = item.icon;

                            return (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.2 }}
                                    animate={{
                                        opacity: 1,
                                        x: xPos,
                                        y: yPos,
                                        scale: [0.2, 1.25, 1],
                                    }}
                                    exit={{ opacity: 0, x: 0, y: 0, scale: 0.2 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 420,
                                        damping: 16,
                                        delay: i * 0.08,
                                    }}
                                    className="
                    absolute
                    w-12 h-12
                    rounded-full
                    backdrop-blur-xl bg-white/10
                    border border-white/20
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    hover:bg-emerald-500 hover:text-black
                    transition
                  "
                                >
                                    <Icon size={18} />
                                </motion.a>
                            );
                        })}
                </AnimatePresence>

                {/* ========== MAIN EMERALD BUTTON ========== */}

                <motion.button
                    ref={ref}
                    style={{ x: springX, y: springY }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={toggle}
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: open ? 45 : 0 }}
                    className="
            relative
            w-14 h-14
            rounded-full
            flex items-center justify-center
            text-white
            bg-gradient-to-br
            from-emerald-400
            via-emerald-500
            to-emerald-700
            shadow-[0_0_35px_rgba(16,185,129,0.8)]
          "
                >
                    <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400/25" />
                    <Gem className="relative z-10" size={20} />
                </motion.button>
            </div>
        </motion.div>
    );
}
