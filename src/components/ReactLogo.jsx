import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Logo(props) {
  const { nodes, materials } = useGLTF('/modelDracore.gltf')
  const logoRef = useRef()

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.01 
    }
  })

  return (
    <group {...props} dispose={null}>
      <group ref={logoRef} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/modelDracore.gltf')
