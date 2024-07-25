import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Linkedin(props) {
  const { nodes, materials } = useGLTF('/modelDracoli.gltf');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación aquí si es necesario
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group position={[-1, 2, 0]} scale={1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.5}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/modelDracoli.gltf');
