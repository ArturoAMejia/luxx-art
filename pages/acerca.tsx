import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Hero } from "../components/Hero";
import { InfoCard } from "../components/InfoCard";
import { Layout } from "../components/layout/Layout";
import { Testimonial } from "../components/Testimonial";

const AcercaDe = () => {
  return (
    <Layout title="Acerca de" pageDescription="Página de Acerca de">
      <Fade delay={100}>
        <Hero />
      </Fade>
      <Fade delay={300}>
        <Testimonial />
      </Fade>
      <div className="flex justify-center">
        <Zoom>
          <InfoCard />
        </Zoom>
      </div>
    </Layout>
  );
};

export default AcercaDe;
