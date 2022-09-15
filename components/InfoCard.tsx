import Image from "next/image";
import React from "react";

export const InfoCard = () => {
  return (
    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center -mt-16 md:justify-end">
        <Image
          width={80}
          height={80}
          className="object-cover border-2 border-blue-500 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src="/img/Lupe.jpg"
        />
      </div>

      <h2 className="mt-2 text-2xl font-semibold text-gray-800  md:mt-0 md:text-3xl">
        Maria Guadalupe Gómez
      </h2>

      <p className="mt-2 text-gray-600 ">
        {" "}
        <b> Creadora Luxx Art-Cfts </b>
        <br />
        Estudiante de Ingeneria de sistema <br />
        Creativa e innovadora <br />
        19 años
      </p>

    </div>
  );
};
