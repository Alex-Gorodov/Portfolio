import { useEffect, useRef } from 'react';
import Pdf from '../../alex_gorodov_cv.pdf';
import { ReactComponent as ParallaxA} from '../../img/parallax/parallax-1.svg'
import { ReactComponent as ParallaxB} from '../../img/parallax/parallax-2.svg'

export function About(): JSX.Element {
  const parallaxLeftRef = useRef<HTMLDivElement>(null);
  const parallaxRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (parallaxLeftRef.current && parallaxRightRef.current) {
        const speedLeftAttr = parallaxLeftRef.current.getAttribute('data-speed');
        const speedRightAttr = parallaxRightRef.current.getAttribute('data-speed');

        if (speedLeftAttr && speedRightAttr) {
          const speedLeft = parseFloat(speedLeftAttr);
          const speedRight = parseFloat(speedRightAttr);

          const offsetYLeft = -scrollY * speedLeft;
          const offsetYRight = -scrollY * speedRight;

          parallaxLeftRef.current.style.transform = `translateY(${offsetYLeft / 2}px) rotate(${offsetYLeft / 8}deg)`;
          parallaxRightRef.current.style.transform = `translateY(${offsetYRight / 2}px) rotate(${offsetYRight / 8}deg)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className='section about' id="about">
      <div className="about__parallax about__parallax--left" data-speed={0.3} ref={parallaxLeftRef}>
        <ParallaxA/>
      </div>
      <div className="about__parallax about__parallax--right" data-speed={0.6} ref={parallaxRightRef}>
        <ParallaxB/>
      </div>
      <div>
        <h2>About</h2>
        <p className='about__text'>
          I'm a highly motivated front-end developer. I've been writing pet projects using React with TypeScript for over a year now. I'm all about crafting clean, efficient, and easy-to-maintain code. I follow two important principles: DRY and KISS.
        </p>
        <p className='about__text'>
          I believe in simplicity and elegance in design. I aim to create user interfaces that are intuitive, accessible, and responsive across all devices and platforms.
        </p>
        <p className='about__text'>
          Semantic correctness is key for me. I make sure that my code is well-organized and easy to understand, both for humans and machines.
        </p>
        <p className='about__text'>
          With a solid foundation in HTML, CSS, and JavaScript, I'm excited to continue learning and growing. I'm eager to contribute to innovative projects that push the boundaries of what's possible on the web.
        </p>
        <p className='about__text'>
          Recently, I've been diving deeper into React, TypeScript, and Redux. These tools allow me to build even better and more scalable web applications.
        </p>
      </div>
      <a className="about__cv-btn" href={Pdf} rel="noreferrer nofollow" target="_blank" download>Download CV</a>
    </section>
  );
}