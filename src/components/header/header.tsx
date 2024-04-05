import { AppRoute } from "../../const";

export function Header(): JSX.Element {
  return (
    <header>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href={AppRoute.Root} className="navigation__link">Home</a>
          </li>
          <li className="navigation__item">
            <a href={AppRoute.Works} className="navigation__link">Works</a>
          </li>
          <li className="navigation__item">
            <a href={AppRoute.About} className="navigation__link">About</a>
          </li>
          <li className="navigation__item">
            <a href={AppRoute.Skills} className="navigation__link">Skills</a>
          </li>
          <li className="navigation__item">
            <a href={AppRoute.Contacts} className="navigation__link">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
