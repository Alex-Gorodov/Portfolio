import { ReactComponent as ParallaxA} from '../../img/parallax/parallax-1.svg'
import { ReactComponent as ParallaxB} from '../../img/parallax/parallax-2.svg'
import { useEffect, useRef, useState } from 'react';
import Pdf from '../../alexandr_gorodov_cv.pdf';

export function About(): JSX.Element {
  const parallaxLeftRef = useRef<HTMLDivElement>(null);
  const parallaxRightRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isAboutSectionInView, setAboutSectionInView] = useState(false);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1170);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1170);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

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
          const offsetYRight = scrollY * speedRight;

          parallaxLeftRef.current.style.transform = `translateY(${offsetYLeft / 2}px) rotate(${offsetYLeft / 8}deg)`;
          parallaxRightRef.current.style.transform = `translateY(${offsetYRight / 2}px) rotate(${offsetYRight / 8}deg)`;

          const aboutRect = aboutRef.current?.getBoundingClientRect();
          const aboutTop = aboutRect?.top;

          const windowHeight = window.innerHeight;

          if (aboutTop && aboutTop < windowHeight) {
            setAboutSectionInView(true)
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className='section about' id="about" ref={aboutRef}>
      {
        !isDesktop &&
        <div className={`about__parallax about__parallax--left ${isAboutSectionInView && 'design'}`} data-speed={0.5} ref={parallaxLeftRef}>
          <ParallaxA/>
        </div>
      }
      {
        !isDesktop &&
        <div className={`about__parallax about__parallax--right ${isAboutSectionInView && 'nothing'}`} data-speed={0.8} ref={parallaxRightRef}>
          <ParallaxB/>
        </div>
      }
      <div>
        <h2>About</h2>
        <p className='about__text'>
          I'm a highly motivated front-end developer with over a year of experience crafting pet projects using React and TypeScript. My focus is on writing clean, efficient, and maintainable code, adhering to principles like DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid).
        </p>
        <p className='about__text'>
          I prioritize simplicity and elegance in design, striving to create intuitive, accessible, and responsive user interfaces across various devices and platforms.
        </p>
        <p className='about__text'>
          Ensuring semantic correctness is essential to me. I take care to organize my code in a way that's easily understandable for both humans and machines.
        </p>
        <p className='about__text'>
          With a strong foundation in HTML, CSS, and JavaScript, I'm eager to continue expanding my skills and knowledge. I'm particularly interested in contributing to innovative projects that challenge the limits of web development.
        </p>
        <p className='about__text'>
          Recently, I've been delving deeper into React, TypeScript, and Redux, enabling me to develop even more robust and scalable web applications. I'm actively seeking a full-time opportunity where I can apply my expertise and contribute to meaningful projects.
        </p>
      </div>
      <a className="effect-button" href={Pdf} rel="noreferrer nofollow" target="_blank" download>Download CV</a>
    </section>
  );
}
