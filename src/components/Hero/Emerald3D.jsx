import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float } from "@react-three/drei";
import { useRef } from "react";

/* ================= Emerald ================= */
function Emerald() {
    const ref = useRef();
    const { scene } = useGLTF("/models/emerald.glb");

    // slower + lighter rotation
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.4;
        }
    });

    return (
        <Float speed={1.5} floatIntensity={0.6}>
            <primitive ref={ref} object={scene} scale={1} />
        </Float>
    );
}

/* ================= Optimized Canvas ================= */
export default function Emerald3D() {
    return (
        <Canvas
            camera={{ position: [0, 0, 4], fov: 45 }}

            /* 🔥 HUGE PERFORMANCE BOOST SETTINGS */
            dpr={[1, 1.5]}           // limit pixel ratio
            frameloop="demand"      // render only when needed
            shadows={false}         // remove shadows
            gl={{ antialias: false }} // disable heavy AA

            className="w-full h-full touch-auto"
        >
            {/* Minimal lights only */}
            <ambientLight intensity={0.9} />
            <directionalLight position={[3, 3, 3]} intensity={1.5} />

            <Emerald />

            {/* Controls still work */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableDamping
                dampingFactor={0.1}
            />
        </Canvas>
    );
}
