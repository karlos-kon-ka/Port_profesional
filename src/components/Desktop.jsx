import React, { useRef } from 'react';
import { useGLTF  } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Desktop(props) {
  const { nodes, materials } = useGLTF('/modelDraco.gltf');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Ajusta la velocidad de rotación
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.5}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials['01___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials['01___Default']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/modelDraco.gltf');
