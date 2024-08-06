// src/components/Cita.js
import React from 'react';

const Cita = ({ cita }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Cita para {cita.mascota.nombre}</h5>
        <p className="card-text">Servicio: {cita.servicio.nombre}</p>
        <p className="card-text">Fecha y Hora: {new Date(cita.fechaHora).toLocaleString()}</p>
        <p className="card-text">Estado: {cita.estado}</p>
      </div>
    </div>
  );
};

export default Cita;
