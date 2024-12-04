import React from 'react';
import './contact.css';

const Page = () => {
  return (
    <div className="container">
      <h1 class="section-header">Contact</h1>

      <form className="flex flex-col">
        <input
          className="w-96 mb-4 p-2"
          type="text"
          id="name"
          name="firstname"
          placeholder="Name"
        />
        <input
          className="w-96 mb-4 p-2"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Last Name"
        />
        <textarea
          className="w-96 p-2 h-40"
          id="subject"
          name="subject"
          placeholder="Message"
        ></textarea>
        <input className="mt-2" id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Page;
