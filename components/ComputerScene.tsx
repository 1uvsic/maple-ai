"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";

function MonitorModel() {
  const { scene } = useGLTF("/monitor.gltf");
  return (
    <Center>
      <primitive object={scene} scale={[3, 3, 3]} rotation={[0, Math.PI / 2, 0]} />
    </Center>
  );
}

export default function ComputerScene() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }} camera={{ position: [0, 0.5, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <MonitorModel />
      <OrbitControls />
    </Canvas>
  );
}
