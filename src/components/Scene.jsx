import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { DirectionalLight } from 'three'
import { Desktop } from './Desktop'


function Scene() {
  return (
    <Canvas  >
        <ambientLight intensity={0.5} />
        <directionalLight  position={[0, 10, 7.5]}
        intensity={4}
        />
        


         <Suspense fallback={null} >
              <Desktop />

         </Suspense>


      
    </Canvas>
  )
}

export default Scene
