import { PROJECTS } from "../../mocks/portfolio-items";
import { PortfolioItem } from "./portfolio-item";

export function Portfolio(): JSX.Element {
  return (
    <section className="section portfolio" id="portfolio">
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
