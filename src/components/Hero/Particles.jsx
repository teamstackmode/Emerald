import { useMemo } from "react";

export default function Particles() {
    const particles = useMemo(
        () =>
            Array.from({ length: 30 }, () => ({
                top: Math.random() * 100,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                size: Math.random() * 3 + 1,
            })),
        []
    );

    return (
        <div className="absolute inset-0 pointer-events-none">
            {particles.map((p, i) => (
                <span
                    key={i}
                    className="absolute rounded-full bg-emerald-300/50 animate-pulse"
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
