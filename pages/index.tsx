import type { NextPage } from "next";
import Head from "next/head";
import { title } from "process";
import { Fade, Zoom } from "react-awesome-reveal";
import { Layout } from "../components/layout/Layout";
import { Footer, Header } from "../components/UI";
import { Hero } from "../components/UI/Hero";


const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Luxx Art - Inicio</title>
        <meta name="description" content={'Pagina de inicio'} />
      </Head>
        <Header/>

      <Zoom>
        <Hero />
      </Zoom>
    <Footer/>
    </div>
  );
};

export default Home;
