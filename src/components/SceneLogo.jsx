import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Logo} from './ReactLogo'
import { OrbitControls } from '@react-three/drei'




function SceneLogo() {
  return (
    <Canvas   >
        <ambientLight intensity={0.5} />
        <directionalLight  position={[0, 10, 7.5]}
        intensity={4}
        />
        


         <Suspense fallback={null} >
               <Logo />

         </Suspense>
         


     
    </Canvas>
  )
}

export default  SceneLogo

