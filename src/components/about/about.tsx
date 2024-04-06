import Pdf from '../../alex_gorodov_cv.pdf';

export function About(): JSX.Element {
  return (
    <section className='section about' id="about">
      <div>
        <p className='about__text'>
          I'm a highly motivated front-end developer. I've been writing pet projects using React with TypeScript for over a year now. I'm all about crafting clean, efficient, and easy-to-maintain code. I follow two important principles: DRY and KISS.
        </p>
        <p className='about__text'>
        <br/>
          I believe in simplicity and elegance in design. I aim to create user interfaces that are intuitive, accessible, and responsive across all devices and platforms.
        </p>
        <p className='about__text'>
        <br/>
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
