import { useOutsideClick } from "../../hooks/useClickOutside";
import { useEffect, useState } from "react";
import { AppRoute } from "../../const";
import cn from 'classnames';
import { Link } from "react-router-dom";
import { PROJECTS } from "../../mocks/portfolio-items";

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

  const [isWorksListOpened, setWorksListOpened] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 580);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ref = useOutsideClick(() => {
    setOpened(false)
  }) as React.RefObject<HTMLUListElement>

  return (
    <header>
      <nav className="navigation">
        {
          isMobile
            ?
            <div className="navigation__toggler-wrapper">
              <button className={burgerClassName} onClick={() => setOpened(!isOpened)}>
                <span></span>
              </button>
            </div>
            :
            ''
        }
        <ul className={menuClassName} ref={ref}>
          <li className="navigation__item">
            <Link to={AppRoute.Root} className="navigation__link" rel="noreferrer nofollow" onClick={() => setOpened(false)}>Home</Link>
          </li>
          <li className="navigation__item navigation__item--dropdown-trigger">
            <Link to={AppRoute.Works} className="navigation__link" rel="noreferrer nofollow" onMouseEnter={() => setWorksListOpened(true)} onMouseLeave={() => setWorksListOpened(false)} onClick={() => setOpened(false)}>Works</Link>
            {
              isWorksListOpened &&
              <ul className="navigation__dropdown-list" onMouseEnter={() => setWorksListOpened(true)} onMouseLeave={() => setWorksListOpened(false)}>
                {
                  PROJECTS.map((project) => {
                    return (
                      <li className="navigation__item">
                        <Link to={project.path} className="navigation__link navigation__link--dropdown">{project.name}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            }
          </li>
          <li className="navigation__item">
            <Link to={AppRoute.About} className="navigation__link" rel="noreferrer nofollow" onClick={() => setOpened(false)}>About</Link>
          </li>
          <li className="navigation__item">
            <Link to={AppRoute.Contacts} className="navigation__link" rel="noreferrer nofollow" onClick={() => setOpened(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
