import { Portfolio } from "../../components/portfolio/portfolio";
import { Contact } from "../../components/contact/contact";
import { Layout } from "../../components/layout/layout";
import { About } from "../../components/about/about";
import { Hero } from "../../components/hero/hero";
import { Helmet } from "react-helmet-async";

export function HomePage(): JSX.Element {

  return (
    <Layout>
      <Helmet>
        <title>AG | FrontEnd Developer</title>
      </Helmet>
      <main className="main">
        <Hero/>
        <Portfolio/>
        <About/>
        <Contact/>
      </main>
    </Layout>
  );
}
