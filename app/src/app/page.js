'use client';
import HeaderLanding from '@/components/HeaderLanding';
import './page.css';
import Image from 'next/image';
import Pineapple from '@/app/assets/pineapple.png';
import { gsap } from 'gsap';
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const pineAppleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.defaults({ ease: 'none', duration: 2 });
    const tl = gsap.timeline();

    tl.from('.section-one', { xPercent: -100 })
      .from('.section-two', { xPercent: 100 })
      .from('.section-three', { xPercent: -100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: 'section-container',
      start: 'top top',
      end: '+=4000',
      scrub: true,
      pin: true,
      anticipatePin: 2,
    });

    gsap.to(pineAppleRef.current, { scale: 1.5, duration: 1 });
  }, []);

  return (
    <div>
      <div className="portfolio-container">
        <aside className="sidebar">
          <div className="flex justify-center" ref={pineAppleRef}>
            <Image src={Pineapple} alt="Pineapple" className="pineapple" />
          </div>
        </aside>
        <div className="header-landing-container">
          <HeaderLanding />
        </div>
        <div className="flex flex-col section-container">
          <section className="section-one background-test h-screen w-full">
            ONE
          </section>
          <section className="section-two bg-blue-300 h-screen w-full">
            TWO
          </section>
          {/* <section className="section-three bg-orange-300 h-screen">
            THREE
          </section> */}
          <section className="section-four bg-green-300 h-48"></section>
        </div>
      </div>
    </div>
  );
}
