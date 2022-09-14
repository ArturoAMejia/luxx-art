import Image from "next/image";
import React from "react";

export const Carousel = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="carousel carousel-center max-w-4xl p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <Image
            src="/img/Target/t1.jpg"
            alt="t1"
            width={400}
            height={250}
            className="rounded-box w-auto"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/img/Target/t1.jpg"
            alt="t1"
            width={400}
            height={250}
            className="rounded-box w-auto"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/img/Target/t1.jpg"
            alt="t1"
            width={400}
            height={250}
            className="rounded-box w-auto"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/img/Target/t1.jpg"
            alt="t1"
            width={400}
            height={250}
            className="rounded-box w-auto"
          />
        </div>
      </div>
    </div>
  );
};
