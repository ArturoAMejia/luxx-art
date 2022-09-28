import "../styles/globals.css";
import "../styles/animations.css";
import type { AppProps } from "next/app";
import { CartProvider } from "react-use-cart";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PayPalScriptProvider options={{"client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''}}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
