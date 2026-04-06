import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial, ContactShadows, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function AbstractArtifact() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <icosahedronGeometry args={[1.5, 2]} />
          <MeshDistortMaterial
            color="#14b8a6"
            envMapIntensity={1}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
            metalness={0.8}
            roughness={0.2}
            distort={0.3}
            speed={2}
          />
        </mesh>
        
        {/* Wireframe overlay */}
        <mesh scale={1.05}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            color="#5eead4"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 bg-dark-900">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#0a0a0a']} />
        
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14b8a6" />
        
        <AbstractArtifact />
        
        <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.2} color="#5eead4" />
        
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
          color="#14b8a6"
        />
        
        <Environment preset="city" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
        />
      </Canvas>
      
      {/* Gradient overlay to blend with the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 pointer-events-none" />
    </div>
  );
}
