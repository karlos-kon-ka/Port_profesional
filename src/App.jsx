import { useState } from 'react'

import './App.css'
import Scene from './components/Scene'
import Presentacion from './components/Presentacion'
import Trabajos from './components/Trabajos'
import Proyectos from './components/Proyectos'
import SceneRedes from './components/SceneRedes'
import BotonSubida from './components/BotonSubida'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <div className='contenedor_model'>
         <Scene />
      </div>
      <Presentacion />
      <Trabajos/>
      <Proyectos />
      <div className='contenedor_model2'>
         <SceneRedes />
         <small>Puedes acceder ami Perfil en <a>Linkedin</a> para ver más de cerca en lo que trabajo. </small>
      </div>
      <BotonSubida />
      <Footer />
      
    </>
  )
}

export default App
