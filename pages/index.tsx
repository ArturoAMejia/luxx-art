import type { NextPage } from "next";
import Head from "next/head";
import { Zoom } from "react-awesome-reveal";
import { Layout } from "../components/layout/Layout";
import { Footer, Header } from "../components/UI";
import { Hero } from "../components/UI/Hero";
import Navbar from "../components/UI/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Layout title="Inicio" pageDescription="Página de Inicio">
        <Header />
        <Zoom>
          <Hero />
        </Zoom>
      </Layout>
    </div>
  );
};

export default Home;
