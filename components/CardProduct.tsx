import { FC } from "react";
import { IProduct } from "../helpers/interfaces";

interface Props {
  product: IProduct;
}

export const CardProduct: FC<Props> = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:scale-105 lg:aspect-none lg:h-80 scale-up-center">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name ? product.name : product.colection}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      {product.style && <p className="text-sm font-medium  text-gray-900">Estilo: {product.style}</p>}
      {product.dimensions && <p className="text-sm font-medium  text-gray-900">Dimensiones: {product.dimensions}</p>}
      {product.description && <p className="text-sm font-medium  text-gray-900">{product.description}</p>}
    </div>
  );
};
