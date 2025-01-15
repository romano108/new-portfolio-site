'use client';
import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css'; // Assuming you have a CSS file for styling

const HorizontalScrollComponent = React.forwardRef((props, ref) => {
  const racesRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const blogRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Exposing refs to the parent component
  useImperativeHandle(ref, () => ({
    aboutRef,
    educationRef,
    blogRef,
    testimonialsRef,
  }));

  useEffect(() => {
    let racesWidth = racesRef.current.offsetWidth;
    let amountToScroll = racesWidth - window.innerWidth;

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.to(racesRef.current, {
      x: -amountToScroll,
      duration: 3,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: '.racesWrapper',
      start: 'top 20%',
      end: '+=' + amountToScroll,
      pin: true,
      animation: tween,
      scrub: 1,
      markers: true,
    });

    console.log('page load');
  }, []);

  return (
    <div className="appContainer">
      <div className="space-30vh lightBG"></div>
      <div className="racesWrapper">
        <div className="races" ref={racesRef}>
          <div id="about" ref={aboutRef}>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              fermentum, lectus nec laoreet vehicula, justo libero cursus nisl,
              id suscipit lacus erat non risus. Proin placerat ligula eget diam
              commodo, eget vestibulum urna convallis. Nulla facilisi. Curabitur
              feugiat sem id nunc efficitur, in pretium massa suscipit.
            </p>
          </div>
          <div id="education" ref={educationRef}>
            <h2>Education</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              fermentum, lectus nec laoreet vehicula, justo libero cursus nisl,
              id suscipit lacus erat non risus. Proin placerat ligula eget diam
              commodo, eget vestibulum urna convallis. Nulla facilisi. Curabitur
              feugiat sem id nunc efficitur, in pretium massa suscipit.
            </p>
          </div>
          <div id="blog" ref={blogRef}>
            <h2>Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              fermentum, lectus nec laoreet vehicula, justo libero cursus nisl,
              id suscipit lacus erat non risus. Proin placerat ligula eget diam
              commodo, eget vestibulum urna convallis. Nulla facilisi. Curabitur
              feugiat sem id nunc efficitur, in pretium massa suscipit.
            </p>
          </div>
          <div id="testimonials" ref={testimonialsRef}>
            <h2>Testimonials</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              fermentum, lectus nec laoreet vehicula, justo libero cursus nisl,
              id suscipit lacus erat non risus. Proin placerat ligula eget diam
              commodo, eget vestibulum urna convallis. Nulla facilisi. Curabitur
              feugiat sem id nunc efficitur, in pretium massa suscipit.
            </p>
          </div>
        </div>
      </div>
      <div className="space-50vh lightBG"></div>
    </div>
  );
});

export default HorizontalScrollComponent;
