import React from 'react';
import img from '../assets/contacto.png'; // Asegúrate de que la ruta sea correcta.

const SobreNosotros = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      {/* Título de la sección */}
      <h1 className="text-4xl font-bold text-center text-lime-600 mb-6">
        Sobre Nosotros
      </h1>
      
      {/* Descripción */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl text-center">
        Somos una empresa dedicada a ofrecer soluciones innovadoras en el ámbito de la tecnología. Nuestra misión es ayudar a las empresas a mejorar su rendimiento mediante productos de alta calidad y servicios excepcionales.
      </p>

      {/* Segundo párrafo */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl text-center">
        Con un equipo de profesionales altamente capacitados, trabajamos para crear experiencias personalizadas que se adapten a las necesidades de nuestros clientes. Nuestro enfoque está centrado en la mejora continua y el compromiso con la calidad.
      </p>

      {/* Imagen sobre nosotros */}
      <div className="flex justify-center mb-8">
        <img 
          src={img} 
          alt="Imagen sobre nosotros"
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Llamado a la acción */}
      <div className="flex justify-center">
        <a
          href="#contacto"
          className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-8 rounded-full shadow-md transition-all duration-300"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}

export default SobreNosotros;
