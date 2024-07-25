import { useState } from 'react';
import proyectos from '../../proyectos.json'; 

function Cardproyect() {
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 3;

  const displayedProyectos = showAll ? proyectos : proyectos.slice(0, itemsPerPage);

  return (
    <div className='traba-wrapper'>
      <div className='traba-container'>
        {displayedProyectos.map((proyecto) => (
          <div key={proyecto.titulo} className="card">
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
  );
}

export default Cardproyect;
