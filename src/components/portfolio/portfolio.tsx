import { PROJECTS } from "../../mocks/portfolio-items";
import { PortfolioItem } from "./portfolio-item";
import { useEffect, useState } from "react";

export function Portfolio(): JSX.Element {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setLoaded(true);
      }, 1600);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => {
        window.removeEventListener('load', onPageLoad);
      };
    }
  }, []);

  return (
    <section className={`section portfolio ${isLoaded ? 'loaded' : ''}`} id="portfolio">
      <ul className="portfolio__list">
        {
          PROJECTS.map((item) => {
            return (
              <PortfolioItem item={item} key={item.id}/>
            )
          })
        }
      </ul>
    </section>
  );
}
