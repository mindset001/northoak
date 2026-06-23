"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.3;
      inner.current.rotation.z += delta * 0.18;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <MeshDistortMaterial
          color="#244fc2"
          attach="material"
          distort={0.35}
          speed={1.6}
          roughness={0.15}
          metalness={0.85}
          emissive="#1c3c97"
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh ref={inner} scale={0.62}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshStandardMaterial
          color="#ecc05f"
          wireframe
          roughness={0.4}
          metalness={0.6}
          emissive="#d6a33a"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}

function OrbitingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.z += delta * 0.18;
    if (ring2.current) ring2.current.rotation.x += delta * 0.12;
  });

  return (
    <>
      <mesh ref={ring1} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.7, 0.012, 16, 120]} />
        <meshStandardMaterial color="#8fb3ff" emissive="#5a8bff" emissiveIntensity={0.6} />
      </mesh>
      <mesh ref={ring2} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[3.3, 0.008, 16, 120]} />
        <meshStandardMaterial color="#f6dd9c" emissive="#ecc05f" emissiveIntensity={0.5} />
      </mesh>
    </>
  );
}

function Rig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 4, 5]} intensity={2.2} color="#5a8bff" />
      <pointLight position={[-5, -3, -2]} intensity={1.4} color="#ecc05f" />
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
        <Core />
      </Float>
      <OrbitingRings />
      <Sparkles count={70} scale={7} size={2.2} speed={0.3} color="#c4cee6" opacity={0.6} />
      <Environment preset="city" />
      <Rig />
    </Canvas>
  );
}
