'use client';
import HeaderLanding from '@/components/HeaderLanding';
import './page.css';
import Image from 'next/image';
import Pineapple from '@/app/assets/pineapple.png';
import React, { useRef, useEffect } from 'react';
import About from './about/page';
import Contact from './contact/page';
import Footer from '@/components/Footer';

export default function Home() {
  const pineAppleRef = useRef(null);

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
        <div className="ml-44">
          <About />
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
