// src/components/Mascota.js
import React from 'react';

const Mascota = ({ mascota }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{mascota.nombre}</h5>
        <p className="card-text">Especie: {mascota.especie}</p>
        <p className="card-text">Raza: {mascota.raza}</p>
        <p className="card-text">Fecha de Nacimiento: {mascota.fechaNacimiento}</p>
        <p className="card-text">Dueño: {mascota.dueño.nombre}</p>
      </div>
    </div>
  );
};

export default Mascota;
