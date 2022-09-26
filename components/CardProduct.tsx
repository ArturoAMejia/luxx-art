import { FC } from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { IProduct } from "../helpers/interfaces";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  product: IProduct;
}

export const CardProduct: FC<Props> = ({ product }) => {
  const { addItem } = useCart();
  const addCart = (item:IProduct) => {
    addItem(item);
    toast.success("Producto añadido correctamente");
  };
  // console.log(product);
  return (
    <div className="flex flex-col">
      <div key={product.id} className="relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80 scale-up-center">
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
          <p className="text-sm font-medium text-gray-900">
            C$ {product.price}
          </p>
        </div>
        {product.style && (
          <p className="text-sm font-medium  text-gray-900">
            Estilo: {product.style}
          </p>
        )}
        {product.dimensions && (
          <p className="text-sm font-medium  text-gray-900">
            Dimensiones: {product.dimensions}
          </p>
        )}
        {product.description && (
          <p className="text-sm font-medium  text-gray-900">
            {product.description}
          </p>
        )}
      </div>
      <button type="submit" onClick={() => addCart(product)} className="rounded-md capitalize font-medium mt-3 bg-[#FED06A]">
        agregar
      </button>
    </div>
  );
};
