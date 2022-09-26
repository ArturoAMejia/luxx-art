import { MinusIcon } from "@heroicons/react/24/outline";
import {
  CheckIcon,
  ClockIcon,
  MinusCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { useCart } from "react-use-cart";
import { Layout } from "../components/layout/Layout";

export default function Example() {
  const { items, cartTotal, updateItemQuantity, removeItem } = useCart();
  console.log(items);
  return (
    <Layout title={"Carrito"} pageDescription={"Página de carrito"}>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-4 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Carrito de Compras
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              {items.length == 0 ? (
                <h1 className="text-3xl font-semibold">
                  No hay items en el carrito
                </h1>
              ) : (
                <ul
                  role="list"
                  className="border-t border-b border-gray-200 divide-y divide-gray-200"
                >
                  {items.map((item, itemIdx) => (
                    <li key={item.id} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0">
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a
                                  href={item.href}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {item.name ? item.name : item.colection}
                                </a>
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm">
                              <p className="text-gray-500">{item.color}</p>
                              {item.size ? (
                                <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                                  {item.size}
                                </p>
                              ) : null}
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              C${item.price}.00
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <label
                              htmlFor={`quantity-${itemIdx}`}
                              className="sr-only"
                            >
                              Quantity, {item.name}
                            </label>
                            <select
                              id={`quantity-${itemIdx}`}
                              name={`quantity-${itemIdx}`}
                              className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              onChange={(e) =>
                                updateItemQuantity(
                                  item.id,
                                  Number(e.target.value)
                                )
                              }
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                            <div className="absolute top-0 right-0">
                              <button
                                type="button"
                                className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                                onClick={() => removeItem(item.id)}
                              >
                                <MinusCircleIcon className="h-6 w-6 text-gray-500" />
                                <span className="sr-only">Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {items.length !== 0 && (
              <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
              >
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Resumen de la Compra
                </h2>

                <dl className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ${cartTotal}
                    </dd>
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex text-sm text-gray-600">
                      <span>Tax estimate</span>
                      <a
                        href="#"
                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">
                          Learn more about how tax is calculated
                        </span>
                        <QuestionMarkCircleIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ${cartTotal * 0.15}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      C${cartTotal * 0.15 + cartTotal}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Checkout
                  </button>
                </div>
              </section>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
}