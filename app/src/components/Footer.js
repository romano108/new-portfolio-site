import React from 'react';
import './footer.css';
import Dolphin from '@/app/assets/dolphin.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="h-60 w-full container-fluid">
      <div className="pt-40">
        <div className="flex justify-end  mr-48">
          <Image src={Dolphin} alt="Dolphin" className="dolphin" />
        </div>

        <div className="ocean">
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
