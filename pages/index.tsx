import type { NextPage } from "next";
import Head from "next/head";
import { Zoom } from "react-awesome-reveal";
import { Footer, Header } from "../components/UI";
import { Hero } from "../components/UI/Hero";
import Navbar from "../components/UI/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Luxx Art✨ - Inicio</title>
        <meta name="description" content={"Pagina de inicio"} />
      </Head>
      <Navbar />
      <Header />
      <Zoom>
        <Hero />
      </Zoom>
      <Footer />
    </div>
  );
};

export default Home;
