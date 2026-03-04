'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export default function AbstractShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    // Rotate mesh over time, and make it follow mouse vaguely
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.005;

            const targetX = (state.pointer.x * Math.PI) / 4;
            const targetY = (state.pointer.y * Math.PI) / 4;

            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.02);
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.02);
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={hovered ? 1.1 : 1}
            >
                <torusKnotGeometry args={[1, 0.3, 256, 32]} />
                <MeshDistortMaterial
                    color={hovered ? "#00f0ff" : "#ea0027"}
                    emissive={hovered ? "#004050" : "#400000"}
                    roughness={0.1}
                    metalness={0.8}
                    distort={0.4}
                    speed={hovered ? 4 : 2}
                />
            </mesh>
        </Float>
    );
}
