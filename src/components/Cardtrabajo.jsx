import React, { useState } from 'react';
import trabajos from '../../trabajos.json'; 


function Cardtrabajo() {
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 3;

  const displayedTrabajos = showAll ? trabajos : trabajos.slice(0, itemsPerPage);

  return (
    <div className='traba-wrapper'>
      <div className='traba-container'>
        {displayedTrabajos.map((trabajo) => (
          <div key={trabajo.titulo} className="card">
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
  );
}

export default Cardtrabajo;
