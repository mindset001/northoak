"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, Grid, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

type Building = {
  x: number;
  z: number;
  w: number;
  d: number;
  h: number;
  color: string;
  edge: string;
};

const buildings: Building[] = [
  { x: -3.7, z: -0.4, w: 0.85, d: 0.85, h: 1.7, color: "#0d1530", edge: "#5a8bff" },
  { x: -2.7, z: 0.6, w: 0.7, d: 0.7, h: 2.5, color: "#14213f", edge: "#8fb3ff" },
  { x: -1.6, z: -1.0, w: 0.95, d: 0.95, h: 3.6, color: "#1c3c97", edge: "#ecc05f" },
  { x: -0.45, z: 0.5, w: 0.65, d: 0.65, h: 2.0, color: "#0d1530", edge: "#5a8bff" },
  { x: 0.55, z: -0.8, w: 0.85, d: 0.85, h: 2.9, color: "#244fc2", edge: "#f6dd9c" },
  { x: 1.6, z: 0.7, w: 0.7, d: 0.7, h: 1.8, color: "#14213f", edge: "#8fb3ff" },
  { x: 2.5, z: -0.2, w: 0.8, d: 0.8, h: 2.6, color: "#1c3c97", edge: "#5a8bff" },
  { x: 3.5, z: 0.8, w: 0.6, d: 0.6, h: 1.35, color: "#0d1530", edge: "#5a8bff" },
  { x: -2.1, z: -2.3, w: 0.6, d: 0.6, h: 1.15, color: "#070c18", edge: "#28407e" },
  { x: 0.7, z: -2.5, w: 0.55, d: 0.55, h: 0.95, color: "#070c18", edge: "#28407e" },
  { x: 2.7, z: -2.1, w: 0.5, d: 0.5, h: 0.85, color: "#070c18", edge: "#28407e" },
];

function Skyline() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.07;
    }
  });

  return (
    <group ref={group}>
      {buildings.map((b, i) => (
        <group key={i} position={[b.x, b.h / 2, b.z]}>
          <RoundedBox args={[b.w, b.h, b.d]} radius={0.04} smoothness={4} castShadow receiveShadow>
            <meshStandardMaterial color={b.color} roughness={0.45} metalness={0.25} />
            <Edges color={b.edge} threshold={15} />
          </RoundedBox>
        </group>
      ))}
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 1.1 - camera.position.x) * 0.04;
    camera.position.y += (2.4 - pointer.y * 0.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 1.4, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2.4, 9.5], fov: 38 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <hemisphereLight args={["#8fb3ff", "#03060d", 0.5]} />
      <directionalLight
        position={[6, 8, 4]}
        intensity={2.2}
        color="#eef3ff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0005}
      />
      <pointLight position={[-6, 3, -3]} intensity={2.4} color="#ecc05f" />
      <pointLight position={[4, 2, 5]} intensity={1.4} color="#5a8bff" />

      <Float speed={1.1} rotationIntensity={0} floatIntensity={0.4}>
        <Skyline />
      </Float>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.01} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <shadowMaterial opacity={0.45} />
      </mesh>

      <Grid
        position={[0, -0.005, 0]}
        args={[40, 40]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#1b2c5c"
        sectionSize={2.5}
        sectionThickness={1}
        sectionColor="#5a8bff"
        fadeDistance={16}
        fadeStrength={1.5}
        infiniteGrid
      />

      <Sparkles count={50} scale={9} size={1.8} speed={0.25} color="#c4cee6" opacity={0.45} />
      <Rig />
    </Canvas>
  );
}
