'use client';
import './headerlanding.css';
import Nature from '@/app/assets/Nature.png';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeaderLanding() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.container',
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: true,
          markers: false,
        },
      })
      .to(imageRef.current, {
        scale: 8,
        z: 350,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      });
  });

  return (
    <div className="container">
      <main className="content">
        <div className="background-landing-img">
          <Image
            className=" nature w-full h-full"
            ref={imageRef}
            src={Nature}
            alt="Nature"
          />
        </div>
      </main>
    </div>
  );
}
