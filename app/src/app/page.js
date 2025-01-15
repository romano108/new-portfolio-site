'use client';
import HeaderLanding from '@/components/HeaderLanding';
import './page.css';
import Image from 'next/image';
import Pineapple from '@/app/assets/pineapple.png';
import React, { useRef, useEffect } from 'react';
import About from './about/page';
import Contact from './contact/page';
import Footer from '@/components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }, []);
  const aboutRef = useRef(null);
  const pineAppleRef = useRef(null);
  function scrollToView(id) {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      console.log(rect);
      console.log(aboutRef.current);
      // const yPosition = rect.top + window.scrollY;
      // console.log(yPosition); // This is the position relative to the document
    }
    // switch (id) {
    //   case 'about':
    //     gsap.to(window, { duration: 2, scrollTo: 1700 });
    //     break;
    //   case 'education':
    //     gsap.to(window, { duration: 2, scrollTo: 3000 });
    //     break;
    //   case 'blog':
    //     gsap.to(window, { duration: 2, scrollTo: 4250 });
    //     break;
    //   case 'testimonials':
    //     gsap.to(window, { duration: 2, scrollTo: 5600 });
    //     break;
    //   default:
    //     gsap.to(window, { duration: 2, scrollTo: 6000 });
    //     break;
    // }
  }

  return (
    <div>
      <div className="portfolio-container">
        <aside className="sidebar">
          <div className="flex justify-center" ref={pineAppleRef}>
            <Image src={Pineapple} alt="Pineapple" className="pineapple" />
          </div>
          <div className="mt-6">
            <section
              onClick={() => scrollToView('about')}
              className="section-sidebar flex justify-center"
            >
              About
            </section>
            <section
              onClick={() => scrollToView('education')}
              className="section-sidebar flex justify-center mt-2"
            >
              Education
            </section>
            <section
              className="section-sidebar flex justify-center mt-2"
              onClick={() => scrollToView('blog')}
            >
              Blog
            </section>
            <section
              className="section-sidebar flex justify-center mt-2"
              onClick={() => scrollToView('testimonials')}
            >
              Testimonials
            </section>
            <section
              className="section-sidebar flex justify-center mt-2"
              onClick={() => scrollToView('contact')}
            >
              Contact
            </section>
          </div>
        </aside>
        <div className="header-landing-container w-full">
          <HeaderLanding />
        </div>
        <div className="ml-44">
          <About ref={aboutRef} />
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
