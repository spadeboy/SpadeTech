"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  Float,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

interface GlassBoxProps {
  position?: [number, number, number];
}

const GlassBox: React.FC<GlassBoxProps> = ({ position = [0, 0, 0] }) => {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (boxRef.current) {
      boxRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.1;
      boxRef.current.rotation.y = clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={boxRef} position={position} scale={2}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={2}
          chromaticAberration={0.05}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={0.3}
          temporalDistortion={0.1}
          transmission={1}
          ior={1.25}
        />
      </mesh>
    </Float>
  );
};

const FloatingObject: React.FC = () => {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = clock.elapsedTime * 0.3;
      torusRef.current.rotation.y = clock.elapsedTime * 0.5;
      torusRef.current.position.z = Math.sin(clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={torusRef} position={[0, 0, 0]} scale={0.6}>
      <dodecahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial
        color="#ff0000"
        emissive="#d71921"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.1}
      />
    </mesh>
  );
};

const HeroStage: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
      {/* 3D Canvas */}
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color="#d71921" />

        {/* Environment */}
        <Environment preset="studio" />

        {/* Glass Box */}
        <GlassBox position={[0, 0, 0]} />

        {/* Floating Object Inside */}
        <FloatingObject />
      </Canvas>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="dot-matrix text-6xl md:text-7xl font-bold text-center mb-4 fade-in-up">
          NOTHING
        </h1>
        <p className="tech-text text-sm text-white/60 text-center max-w-md mb-8">
          The future of transparent engineering
        </p>
        <div className="flex gap-4 pointer-events-auto">
          <button className="glass-panel px-8 py-3 text-white hover-glow rounded-lg transition">
            Explore Store
          </button>
          <button className="glass-panel px-8 py-3 text-nothing-red hover-glow border border-nothing-red/50 rounded-lg transition">
            View Details
          </button>
        </div>
      </div>

      {/* Floating Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
    </div>
  );
};

export default HeroStage;
