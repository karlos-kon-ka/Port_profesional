import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Linkedin } from './Linkedin'
import { OrbitControls } from '@react-three/drei'




function SceneRedes() {
  return (
    <Canvas   >
        <ambientLight intensity={0.5} />
        <directionalLight  position={[0, 10, 7.5]}
        intensity={4}
        />
        


         <Suspense fallback={null} >
              <Linkedin />

         </Suspense>
         


     
    </Canvas>
  )
}

export default  SceneRedes

