// src/components/HistoriaClinica.js
import React from 'react';

const HistoriaClinica = ({ historia }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Historia Clínica de {historia.mascota.nombre}</h5>
        <ul className="list-group list-group-flush">
          {historia.notasMedicas.map((nota, index) => (
            <li key={index} className="list-group-item">{nota}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoriaClinica;
