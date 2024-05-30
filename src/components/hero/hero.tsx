import { ReactComponent as Linkedin} from '../../img/icons/linkedin.svg';
import { ReactComponent as Telegram} from '../../img/icons/telegram.svg';
import { ReactComponent as Github} from '../../img/icons/github.svg';
import { ReactComponent as Email} from '../../img/icons/email.svg';
import React, { Fragment, useEffect, useState } from "react";
import { HeroNav, HERO_TEXT } from "../../const";
import { Link } from "react-router-dom";
import { Letter } from "./letter";

export function Hero(): JSX.Element {
  const text = Array.from(HERO_TEXT);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setLoaded(true);
      }, 1200);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <div className="hero">
      <h1 className="hero__title">
      {text.map((char, index) => {
        switch (char) {
          case " ":
            return <Fragment key={`space-${Math.random() * 10}`}>&nbsp;</Fragment>;
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
      <p className={`hero__description ${isLoaded ? 'loaded' : ''}`}>Junior frontend developer</p>
      <ul className={`hero__navigation hero-nav ${isLoaded ? 'loaded' : ''}`}>
        <li className="hero-nav__item">
          <Link className="hero-nav__link" to={HeroNav.Github} rel="noreferrer nofollow" target="_blank">
            <span className="visually-hidden">to github profile</span>
            <Github/>
          </Link>
        </li>
        <li className="hero-nav__item">
          <Link className="hero-nav__link" to={HeroNav.Linkedin} rel="noreferrer nofollow" target="_blank">
            <span className="visually-hidden">to linkedin profile</span>
            <Linkedin/>
          </Link>
        </li>
        <li className="hero-nav__item">
          <Link className="hero-nav__link" to={HeroNav.Telegram} rel="noreferrer nofollow" target="_blank">
            <span className="visually-hidden">send message in Telegram</span>
            <Telegram/>
          </Link>
        </li>
        <li className="hero-nav__item">
          <Link className="hero-nav__link" to={HeroNav.Email} rel="noreferrer nofollow" target="_blank">
            <span className="visually-hidden">send email</span>
            <Email/>
          </Link>
        </li>
      </ul>
    </div>
  );
}
