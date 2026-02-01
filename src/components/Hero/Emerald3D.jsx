import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Emerald() {
    const ref = useRef();
    const { scene } = useGLTF("/models/emerald.glb");

    // smooth lightweight rotation
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

export default function Emerald3D() {
    return (
        <Canvas
            camera={{ position: [0, 0, 4], fov: 45 }}
            dpr={[1, 1.5]}              // performance optimized
            frameloop="demand"
            shadows={false}
            gl={{ antialias: false }}
            className="w-full h-full touch-auto"
        >
            <ambientLight intensity={0.9} />
            <directionalLight position={[3, 3, 3]} intensity={1.5} />

            <Emerald />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableDamping
                dampingFactor={0.1}
            />
        </Canvas>
    );
}
