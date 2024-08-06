// src/components/Dueño.js
import React from 'react';

const Dueño = ({ dueño }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{dueño.nombre}</h5>
        <p className="card-text">Dirección: {dueño.direccion}</p>
        <p className="card-text">Teléfono: {dueño.telefono}</p>
        <p className="card-text">Email: {dueño.email}</p>
      </div>
    </div>
  );
};

export default Dueño;
