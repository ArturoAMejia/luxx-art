import Head from "next/head";
import React, { FC } from "react";
import { ToastContainer } from "react-toastify";
import { Footer } from '../UI'
import Navbar from "../UI/Navbar";

import "react-toastify/dist/ReactToastify.css";


interface Props {
  title: string;
  pageDescription: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children, title, pageDescription }) => {
  return (
    <>
      <Head>
        <title>Luxx Art✨ - {title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <main className="bg-white">{children}</main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer/>
    </>
  );
};
