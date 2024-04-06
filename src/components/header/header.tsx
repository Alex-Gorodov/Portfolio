import { useEffect, useState } from "react";
import { AppRoute } from "../../const";
import cn from 'classnames';

export function Header(): JSX.Element {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 580);
  const [isOpened, setOpened] = useState(false);
  const menuClassName = cn('navigation__list', {
    'navigation__list--mobile' : isMobile,
    'navigation__list--mobile-opened' : isOpened
  })
  const burgerClassName = cn('navigation__toggler', {
    'navigation__toggler--opened' : isOpened
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 580);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <nav className="navigation">
        {
          isMobile
            ?
            <button className={burgerClassName} onClick={() => setOpened(!isOpened)}>
              <span></span>
            </button>
            :
            ''
        }
        <ul className={menuClassName}>
          <li className="navigation__item">
            <a href={AppRoute.Root} className="navigation__link" onClick={() => setOpened(false)}>Home</a>
          </li>
          <li className="navigation__item">
            <a href={AppRoute.Works} className="navigation__link" onClick={() => setOpened(false)}>Works</a>
          </li>
          <li className="navigation__item">
            <a href={AppRoute.About} className="navigation__link" onClick={() => setOpened(false)}>About</a>
          </li>
          <li className="navigation__item">
            <a href={AppRoute.Skills} className="navigation__link" onClick={() => setOpened(false)}>Skills</a>
          </li>
          <li className="navigation__item">
            <a href={AppRoute.Contacts} className="navigation__link" onClick={() => setOpened(false)}>Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
