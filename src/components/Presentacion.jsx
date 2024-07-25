import { motion } from 'framer-motion';

import SceneLogo from './SceneLogo'

function Presentacion() {
  return (
    <motion.section
      className='presentacion'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      
      <br />
        <SceneLogo />
      <p>Gracias por estar aquí.</p>
      <div className='pre-parrafos'>
      <h1>Carlos Pérez</h1>
      <h2>FRONTEND DEVELOPER.</h2>
        <p>
          Empecé en el mundo SOFTWARE por la vida académica.
          Y a día de hoy la continuo con más de 1 año de experiencia como FREELANCER.
        </p>
        <p>
          El primer contacto lo tuve con PYTHON, los primeros scripts, proyectos, trabajos etc... <br />
          Actualmente trabajo con herramientas de JAVASCRIPT (React - NodeJs)
        </p>
      </div>
    </motion.section>
  );
}

export default Presentacion;
