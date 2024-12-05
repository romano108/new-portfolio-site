import React from 'react';
import './contact.css';
import Hand from '@/app/assets/hand.png';
import Image from 'next/image';
const Page = () => {
  return (
    <div className="container">
      <h1 class="section-header">
        Contact
        <span>
          <Image src={Hand} alt="Hand" className="hand" />
        </span>
      </h1>

      <div>
        <form className="flex flex-col">
          <input
            className="w-10/12 mb-4 p-2"
            type="text"
            id="name"
            name="firstname"
            placeholder="Name"
          />
          <input
            className="w-10/12 mb-4 p-2"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last Name"
          />
          <textarea
            className="w-10/12 p-2 h-40"
            id="subject"
            name="subject"
            placeholder="Message"
          ></textarea>
          <input className="mt-2" id="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Page;
