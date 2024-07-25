import { useState } from 'react';
import proyectos from '../../proyectos.json'; 
import { motion } from 'framer-motion';

function Cardproyect() {
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 3;

  const displayedProyectos = showAll ? proyectos : proyectos.slice(0, itemsPerPage);

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className='traba-wrapper'>
      <div className='traba-container'>
        {displayedProyectos.map((proyecto) => (
          <div key={proyecto.titulo} className="card">
            <img src={proyecto.img} />  
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
      {!showAll && proyectos.length > itemsPerPage && (
        <button className='vermas' onClick={() => setShowAll(true)}>Ver todos</button>
      )}
    </div>
    </motion.div>
  );
}

export default Cardproyect;
