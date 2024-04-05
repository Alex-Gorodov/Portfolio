import { Hero } from "../../components/hero/hero";
import { Layout } from "../../components/layout/layout";
import { Helmet } from "react-helmet-async";
import { Works } from "../../components/works/works";
import { About } from "../../components/about/about";

export function HomePage(): JSX.Element {

  return (
    <Layout>
      <Helmet>
        <title>AG | FrontEnd Developer</title>
      </Helmet>
      <main className="main">
        <Hero/>
        <Works/>
        <About/>
      </main>
    </Layout>
  );
}
