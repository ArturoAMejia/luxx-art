import React, { FC } from "react";
import { IProduct } from "../helpers/interfaces";
import { CardProduct } from "./CardProduct";

interface Props {
  title: string;
  products: IProduct[];
}

export const Card: FC<Props> = ({ title, products }) => {
  return (
    <div className="bg-white">
      <div className="pb-10 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
