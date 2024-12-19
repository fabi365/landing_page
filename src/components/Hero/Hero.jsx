import React from 'react';
import Principal from "../../assets/IMG1.PNG";
import carrusel1 from "../../assets/IMG3.WEBP";
import carrusel2 from "../../assets/IMG5.WEBP";
import carrusel3 from "../../assets/IMG6.WEBP";
import carrusel4 from "../../assets/IMG4.WEBP";
import { motion } from "framer-motion";
import { animacion } from '../../utility/animation';
import Slider from "react-slick"; // Importa Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,  // Muestra puntos de navegación
    infinite: true, // Habilita el carrusel infinito
    speed: 500, // Duración de transición
    slidesToShow: 1, // Muestra una sola imagen
    slidesToScroll: 1, // Desplaza una imagen a la vez
    autoplay: true,  // Reproduce automáticamente
    autoplaySpeed: 2000, // Tiempo entre transiciones (en ms)
  };

  return (
    <section className="mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Sección de texto y video */}
        <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
          <img src={Principal} alt="imagen principal" className="w-full" />
          <motion.p
            className="py-12 text-white"
            variants={animacion(0.2)}
            initial="initial"
            animate="animate"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis
            cupiditate maiores ullam enim, quis aliquid, eaque aspernatur,
            consequuntur velit dolorum eum rem doloremque
            dolorem impedit voluptate! Enim, nisi voluptatibus.
          </motion.p>

          <div className="flex justify-center gap-4">
            <a className="bg-lime-400 py-2 px-12 rounded-3xl text-white hover:bg-black transition-all 
              duration-300 items-center cursor-pointer ml-1">
              Ver Video
              <i className="bi bi-youtube items-center text-xl ml-2"></i>
            </a>
          </div>
        </div>

        {/* Carrusel de imágenes */}
        <div className="mt-50 py-2 px-12">
          <Slider {...settings}>
            <motion.img
              src={carrusel1}
              alt="Imagen 1"
              variants={animacion(0.5)}
              initial="initial"
              animate="animate"
              className="carousel-image"
            />

            <motion.img
              src={carrusel2}
              alt="Imagen 2"
              variants={animacion(0.5)}
              initial="initial"
              animate="animate"
              className="carousel-image"
            />

            <motion.img
              src={carrusel3}
              alt="Imagen 3"
              variants={animacion(0.5)}
              initial="initial"
              animate="animate"
              className="carousel-image"
            />

            <motion.img
              src={carrusel4}
              alt="Imagen 4"
              variants={animacion(0.5)}
              initial="initial"
              animate="animate"
              className="carousel-image"
            />
            {/* Agrega más imágenes si lo deseas */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;

