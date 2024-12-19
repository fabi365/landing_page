import React, { useState } from 'react';

const Contacto = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Formulario enviado');
  };

  return (
    <section className="p-56 bg-gray-50">
      {/* Título de la página de contacto */}
      <h1 className="text-4xl font-bold text-center text-lime-600 mb-6">Reserva Con Nosotros</h1>

      {/* Descripción */}
      <p className="text-lg text-gray-700 mb-6 text-center">
        ¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte! Completa el formulario y nos pondremos en contacto contigo a la brevedad.
      </p>

      {/* Formulario de contacto */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-gray-700 font-semibold">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              rows="4"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>

      {/* Información adicional de contacto */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-lime-600 mb-4">Otros Métodos de Contacto</h2>
        <p className="text-lg text-gray-700 mb-2">También puedes contactarnos a través de:</p>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>
            <a href="mailto:info@tuempresa.com" className="hover:text-lime-600">
              <i className="bi bi-envelope"></i> info@tuempresa.com
            </a>
          </li>
          <li>
            <a href="tel:+1234567890" className="hover:text-lime-600">
              <i className="bi bi-telephone"></i> +1 (234) 567-890
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer" className="hover:text-lime-600">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacto;
