import  { useState } from 'react';
import trabajos from '../../trabajos.json'; 
import { motion } from 'framer-motion';



function Cardtrabajo() {
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 3;

  const displayedTrabajos = showAll ? trabajos : trabajos.slice(0, itemsPerPage);

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className='traba-wrapper'>
      <div className='traba-container'>
        {displayedTrabajos.map((trabajo) => (
          <div key={trabajo.titulo} className="card">
            <img src={trabajo.img} />
            <h3>{trabajo.titulo}</h3>
            <p>{trabajo.descripcion}</p>
            <a href={trabajo.enlace} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
      {!showAll && trabajos.length > itemsPerPage && (
        <button className="vermas" onClick={() => setShowAll(true)}>Ver todos</button>
      )}
    </div>
    </motion.div>
  );
}

export default Cardtrabajo;
