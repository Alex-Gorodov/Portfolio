import { Hero } from "../../components/hero/hero";
import { Layout } from "../../components/layout/layout";
import { Helmet } from "react-helmet-async";
import { Portfolio } from "../../components/portfolio/portfolio";
import { About } from "../../components/about/about";
import { Contact } from "../../components/contact/contact";

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
