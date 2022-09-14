import Head from "next/head";
import React, { FC } from "react";
import { Footer, Navbar} from '../UI'

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
    </>
  );
};
