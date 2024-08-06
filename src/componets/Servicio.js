// src/components/Servicio.js
import React from 'react';

const Servicio = ({ servicio }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{servicio.nombre}</h5>
        <p className="card-text">Descripción: {servicio.descripcion}</p>
        <p className="card-text">Costo: ${servicio.costo}</p>
      </div>
    </div>
  );
};

export default Servicio;
