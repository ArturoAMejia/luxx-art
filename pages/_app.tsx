import "../styles/globals.css";
import "../styles/animations.css"
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} >
        <ToastContainer/>
      </Component>
  );
}

export default MyApp;
