import React from 'react';
import { useState } from 'react';

export default function CustomForm({ onSubmitForm }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    esAdmin: '',
    genero: '',
    color: '',
    comentarios: '',
  });

  const valueToState = ({ name, value, checked, type }) => {
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmitForm) {
      onSubmitForm(formData);
    }
  };

  return (
    <>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          name="nombre"
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={(event) => valueToState(event.target)}
          value={formData.nombre}
          required={true}
        />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          name="email"
          type="email"
          placeholder="ejemplo@gmail.com"
          onChange={(event) => valueToState(event.target)}
          value={formData.email}
        />
        <label>
          ¿Es Administrador?
          <input
            type="checkbox"
            name="esAdmin"
            value={formData.esAdmin}
            onChange={(event) => valueToState(event.target)}
          />
        </label>
        <legend>Género</legend>
        <label>
          Masculino
          <input
            type="radio"
            name="genero"
            value={'m'}
            checked={formData.genero === 'm'}
            onChange={(event) => valueToState(event.target)}
          />
        </label>
        <label>
          Femenino
          <input
            type="radio"
            name="genero"
            value={'f'}
            checked={formData.genero === 'f'}
            onChange={(event) => valueToState(event.target)}
          />
        </label>
        <label htmlFor="color">¿Cual es tu color favorito?</label>
        <select
          name="color"
          value={formData.color}
          onChange={(event) => valueToState(event.target)}
        >
          <option value={''}>- selecciona uno -</option>
          <option value={'rojo'}>rojo</option>
          <option value={'azul'}>azul</option>
          <option value={'verde'}>verde</option>
        </select>
        <label htmlFor="comentarios">Comentarios</label>
        <textarea
          name="comentarios"
          placeholder="Escribe tus sugerencias"
          value={formData.comentarios}
          onChange={(event) => valueToState(event.target)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
