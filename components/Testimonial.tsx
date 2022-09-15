import React from "react";

export const Testimonial = () => {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">
          Como emprendimiento{" "}
          <span className="text-blue-500">
            contamos con una mision y vision
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  ">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl ">
                  Mision
                </h1>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-justify">
              Ser una empresa progresista y exitosa deleitando siempre a
              nuestros clientes con productos de la mejor calidad y excelente
              servicio. Satisfacer las necesidades del cliente interno y
              externo: desarrollando, fabricando y comercializando productos y
              servicios de excelente calidad.
            </p>
          </div>
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl  ">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl ">
                  Vision
                </h1>
              </div>
            </div>
            <p className="mt-4 text-gray-500 text-justify">
              Ser una empresa productora de diversas manualidades, como por
              ejemplo, lienzos, collares, personalizacion de cover. La visión
              Luxx Art-Cfts será poder vender sus productos a tiendas y cadenas
              departamentales a nivel nacional con diversas presentaciones de
              nuestros productos que nos permitan penetrar y diversificar
              nuestro mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
