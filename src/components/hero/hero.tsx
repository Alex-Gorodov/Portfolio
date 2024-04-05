import { ReactComponent as Linkedin} from '../../img/icons/linkedin.svg';
import { ReactComponent as Telegram} from '../../img/icons/telegram.svg';
import { ReactComponent as Github} from '../../img/icons/github.svg';
import { ReactComponent as Email} from '../../img/icons/email.svg';
import { HeroNav, HERO_TEXT } from "../../const";
import { Link } from "react-router-dom";
import { Letter } from "./letter";
import React from "react";

window.alert('System\'s taking a breather for maintenance. Time for a digital makeover! Hang tight, grab a coffee, and let\'s wait for the upgrade!')

export function Hero(): JSX.Element {
  const text = Array.from(HERO_TEXT);

  return (
    <div className="hero">
      <h1 className="hero__title">
      {text.map((char, index) => {
        switch (char) {
          case " ":
            return <>&nbsp;</>;
          case ",":
            return (
              <React.Fragment key={char + '-' + index}>
                <Letter key={char + '-' + index} letter={char} index={index}/>
                <br/>
              </React.Fragment>
            );
          default:
            return <Letter key={char + '-' + index} letter={char} index={index}/>;
        }
      })}
      </h1>
      <p className="hero__description">Junior frontend developer</p>
      <ul className="hero__navigation hero-nav">
        <li className="hero-nav__item">
          <Link className="hero-nav__link" to={HeroNav.Github} target="_blank">
            <span className="visually-hidden">to github profile</span>
            <Github/>
          </Link>
        </li>
        <li className="hero-nav__item">
          <Link className="hero-nav__link" to={HeroNav.Linkedin} target="_blank">
            <span className="visually-hidden">to linkedin profile</span>
            <Linkedin/>
          </Link>
        </li>
        <li className="hero-nav__item">
          <Link className="hero-nav__link" to={HeroNav.Telegram} target="_blank">
            <span className="visually-hidden">send message in Telegram</span>
            <Telegram/>
          </Link>
        </li>
        <li className="hero-nav__item">
          <Link className="hero-nav__link" to={HeroNav.Email} target="_blank">
            <span className="visually-hidden">send email</span>
            <Email/>
          </Link>
        </li>
      </ul>
    </div>
  );
}
