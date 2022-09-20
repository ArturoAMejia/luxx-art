import { Card } from "../components/Card";
import { Layout } from "../components/layout/Layout";
import { covers, lienzos, products , publicidad} from "../helpers/products";

const GaleriaPage = () => {
  return (
    <>
      <Layout title="Galería" pageDescription="Página de Galería">
        <Card title="Sección de Collares y pulseras" products={products} />
        <Card title="Sección de Lienzos" products={lienzos} />
        <Card title="Sección de Covers" products={covers} />
        <Card title="Sección de Publicidad y Detalles" products={publicidad} />
      </Layout>
    </>
  );
};

export default GaleriaPage;
