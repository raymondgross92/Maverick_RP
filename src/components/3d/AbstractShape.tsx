'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function AbstractShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    // Manage form state (0 = TorusKnot, 1 = Icosahedron, 2 = Wireframe Sphere)
    const [formIndex, setFormIndex] = useState(0);

    // Rotate mesh over time, and make it follow mouse vaguely
    useFrame((state) => {
        if (meshRef.current) {
            // Base rotation
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.005;

            // Mouse follow
            const targetX = (state.pointer.x * Math.PI) / 4;
            const targetY = (state.pointer.y * Math.PI) / 4;

            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.02);
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.02);

            // Excitement scale pulse on click/form change
            meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, hovered ? 1.1 : 1, 0.1);
            meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, hovered ? 1.1 : 1, 0.1);
            meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, hovered ? 1.1 : 1, 0.1);
        }
    });

    const handleClick = () => {
        // Play a click sound effect if we had actual assets, for now we just change state
        // Cycle forms
        setFormIndex((prev) => (prev + 1) % 3);

        // Add a satisfying "kick" to the rotation on click
        if (meshRef.current) {
            meshRef.current.rotation.y += Math.PI / 2;
            meshRef.current.scale.set(1.5, 1.5, 1.5); // Brief expansion that lerps back down
        }
    };

    return (
        <Float speed={formIndex === 2 ? 4 : 2} rotationIntensity={formIndex === 1 ? 3 : 1} floatIntensity={2}>
            <mesh
                ref={meshRef}
                onPointerOver={() => {
                    setHovered(true);
                    document.body.style.cursor = 'pointer';
                }}
                onPointerOut={() => {
                    setHovered(false);
                    document.body.style.cursor = 'auto';
                }}
                onClick={handleClick}
            >
                {/* Dynamic Geometry based on click state */}
                {formIndex === 0 && <torusKnotGeometry args={[1, 0.3, 256, 32]} />}
                {formIndex === 1 && <icosahedronGeometry args={[1.2, 0]} />}
                {formIndex === 2 && <sphereGeometry args={[1.3, 32, 32]} />}

                {/* Dynamic Material based on hover and click state */}
                {formIndex !== 2 ? (
                    <MeshDistortMaterial
                        color={hovered ? "#00f0ff" : (formIndex === 1 ? "#00f0ff" : "#ea0027")}
                        emissive={hovered ? "#004050" : (formIndex === 1 ? "#002030" : "#400000")}
                        roughness={0.1}
                        metalness={0.8}
                        distort={formIndex === 1 ? 0.8 : 0.4}
                        speed={hovered ? 4 : (formIndex === 1 ? 5 : 2)}
                        wireframe={false}
                    />
                ) : (
                    // Form 3: A glowing wireframe orb
                    <meshStandardMaterial
                        color="#ea0027"
                        emissive="#ea0027"
                        emissiveIntensity={2}
                        wireframe={true}
                    />
                )}
            </mesh>
        </Float>
    );
}
