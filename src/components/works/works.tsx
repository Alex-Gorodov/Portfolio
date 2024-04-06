import { Link } from "react-router-dom";
import { ReactComponent as CatEnergy } from "../../img/portfolio/logos/cat-energy.svg"
import { ReactComponent as Gllacy } from "../../img/portfolio/logos/gllacy.svg"
import { ReactComponent as Createx } from "../../img/portfolio/logos/createx.svg"
import { ReactComponent as Sedona } from "../../img/portfolio/logos/sedona.svg"
import { ReactComponent as BrightLights } from "../../img/portfolio/logos/bright-lights.svg"
import { ReactComponent as Device } from "../../img/portfolio/logos/device.svg"
import { PROJECTS } from "../../mocks/portfolio-items";

export function Works(): JSX.Element {
  return (
    <section className="section works" id="works">
      <ul className="works__list">
        {
          PROJECTS.map((item) => {
            return (
              <li className="works__item" key={item.id}>
                <Link className="works__link" to={item.path} target="_blank">
                  <img src={item.img} width={item.isAdaptive ? 268 : 208} height={167} alt={item.name} />
                  {
                    (() => {
                      switch (item.id) {
                        case "gllacy":
                          return <Gllacy />;
                        case "bright-lights":
                          return <BrightLights/>;
                        case "createx":
                          return <Createx />;
                        case "cat-energy":
                          return <CatEnergy />;
                        case "sedona":
                          return <Sedona/>;
                        case "device":
                          return <Device/>;
                        default:
                          return null;
                      }
                    })()
                  }
                </Link>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
}
