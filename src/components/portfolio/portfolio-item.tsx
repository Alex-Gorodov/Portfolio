import { Link } from "react-router-dom";
import { PortfolioItemType } from "../../types/portfolio-item";
import { ReactComponent as BrightLights } from "../../img/portfolio/logos/bright-lights.svg"
import { ReactComponent as CatEnergy } from "../../img/portfolio/logos/cat-energy.svg"
import { ReactComponent as Createx } from "../../img/portfolio/logos/createx.svg"
import { ReactComponent as Gllacy } from "../../img/portfolio/logos/gllacy.svg"
import { ReactComponent as Sedona } from "../../img/portfolio/logos/sedona.svg"
import { ReactComponent as Device } from "../../img/portfolio/logos/device.svg"
import { ReactComponent as Divesea } from "../../img/portfolio/logos/divesea.svg"
import { ReactComponent as React } from "../../img/icons/react.svg"
import { ReactComponent as Redux } from "../../img/icons/redux.svg"
import { ReactComponent as Sass } from "../../img/icons/sass.svg"
import { ReactComponent as HTML } from "../../img/icons/html.svg"
import { ReactComponent as Less } from "../../img/icons/less.svg"
import { ReactComponent as CSS } from "../../img/icons/css.svg"
import { ReactComponent as JS } from "../../img/icons/js.svg"
import { ReactComponent as TS } from "../../img/icons/ts.svg"

type PortfolioItemProps = {
  item: PortfolioItemType;
}

export function PortfolioItem({item}: PortfolioItemProps): JSX.Element {
  return (
    <li className="portfolio__item portfolio-item" key={item.id}>
      <Link className="portfolio__link" to={item.path} target="_blank">
        <picture>
          <source media="(min-width: 1170px)" srcSet={`${item.img}.webp`} width={item.isAdaptive ? 401 : 312} height={250} type="image/webp"/>
          <img className="portfolio-item__image" src={`${item.img}.webp`} width={item.isAdaptive ? 268 : 208} height={167} alt={item.name} />
        </picture>
        <span className="visually-hidden">go to {item.name}</span>
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
              case "divesea":
                return <Divesea/>;
              default:
                return null;
            }
          })()
        }
      </Link>
      <p className="portfolio-item__description">
        {
          item.description.endsWith('HTML Academy.')
            ?
              <>
                {item.description.replace('HTML Academy.', '')}
                <Link className="portfolio-item__description--link" rel="noreferrer nofollow" target="_blank" to={"https://htmlacademy.ru"}>{" HTML Academy"}</Link>
              </>
            :
              item.description
        }
      </p>

      <ul className="portfolio-item__technologies">
        {
          item.technologies.map((item) => {
            return (
              <li key={`${item}-${Math.random() * 10}`} title={item}>
                {
                  (() => {
                    switch (item) {
                      case 'React':
                        return <React/>
                      case 'TypeScript':
                        return <TS/>
                      case 'Redux':
                        return <Redux/>
                      case 'SASS(CSS)':
                        return <Sass/>
                      case 'Less(CSS)':
                        return <Less/>
                      case 'HTML':
                        return <HTML/>
                      case 'JavaScript':
                        return <JS/>
                      case 'CSS':
                        return <CSS/>
                      default:
                        return item;
                    }
                  })()
                }
                <span className="visually-hidden">{item}</span>
              </li>
            )
          })
        }
      </ul>
    </li>
  )
}
