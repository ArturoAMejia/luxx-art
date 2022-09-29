import { MinusCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from "react-use-cart";
import { Layout } from "../components/layout/Layout";
import { toast } from "react-toastify";
import Image from "next/image";

const CheckoutPage = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const [error, setError] = useState(false);
  const { items, cartTotal, emptyCart } = useCart();
  const total = Math.round( cartTotal / 36);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   // Validación del Formulario
  //   if ([nombre, apellido, email, telefono].includes("")) {
  //     console.log("Hay Al Menos un campo vacio");

  //     setError(true);
  //     return;
  //   }

  //   setError(false);

  //   // Reiniciar el form
  //   setNombre("");
  //   setApellido("");
  //   setEmail("");
  //   setTelefono("");
  // };

  return (
    <Layout title="Checkout" pageDescription="Página de Checkout">
      <section>
        <h1 className="sr-only bg-white">Checkout</h1>
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-12 bg-white drop-shadow-2xl rounded-lg md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                <div className="mt-8">
                  <p className="text-2xl font-medium tracking-tight">
                    C${cartTotal}.00
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Por la compra de:
                  </p>
                </div>
                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      {items.map((item) => (
                        <li
                          className="flex items-center justify-between py-4"
                          key={item.id}
                        >
                          <div className="flex items-start">
                            <Image
                              width={64}
                              height={64}
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="flex-shrink-0 object-cover rounded-lg"
                            />
                            <div className="ml-4">
                              <p className="text-sm">
                                {item.name ? item.name : item.colection}
                              </p>
                              <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                <div>
                                  <dt className="inline">Color:</dt>
                                  <dd className="inline">Blue</dd>
                                </div>
                                <div>
                                  <dt className="inline">Size:</dt>
                                  <dd className="inline">UK 10</dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm">
                              C${item.price}.00
                              <small className="text-gray-500">
                                x{item.quantity}
                              </small>
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-12 bg-white md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                {error && (
                  <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                    <p>Todos los campos son obligatorios</p>
                  </div>
                )}
                <form className="flex flex-col">
                  <div className="col-span-3">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="first_name"
                    >
                      Nombre
                    </label>
                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="text"
                      id="frst_name"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="last_name"
                    >
                      Apellido
                    </label>
                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="text"
                      id="last_name"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="phone"
                    >
                      Telefono
                    </label>
                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5 mb-3"
                      type="tel"
                      id="phone"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </div>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: `${total}`,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order!.capture().then((details) => {
                        emptyCart();
                        toast.success("Pago realizado correctamente!");
                      });
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
