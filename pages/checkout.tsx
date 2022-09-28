import { MinusCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from "react-use-cart";
import { Layout } from "../components/layout/Layout";
import { toast } from "react-toastify";
import Image from "next/image";

const CheckoutPage = () => {
  const { items, cartTotal ,emptyCart} = useCart();
  const total = cartTotal / 36;

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
                        toast.success("Pago realizado correctamente!")
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
