import { useState } from "react";
import { PROJECTS } from "../../mocks/portfolio-items";
import { PortfolioItem } from "./portfolio-item";

export function Portfolio(): JSX.Element {
  const [isLoaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 2000);

  return (
    <section className={`section portfolio ${isLoaded ? '' : 'appearance'}`} id="portfolio">
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
