import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-8 bg-black">
      {/* Profile Image */}
      <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
        <Image src="/p1.png" alt="profile" height={400} width={400} className="pt-6"   data-aos="zoom-out-right"/>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 mt-8 lg:mt-0">
      <h1 className="font-bold text-4xl sm:text-5xl  text-gray-700 lg:text-7xl">Hello,</h1><br/>
      <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl text-white" data-aos="fade-right">I&apos;m Hiba Sheikh</h1>
      <h2 className="font-bold text-gray-700 text-4xl sm:text-2xl lg:text-7xl mt-4" data-aos="fade-down-left">UI/UX Designer</h2>
      <br/>
      <Link href="/Hiba Sheikh.pdf" target="_blank">
      <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
        Download Resume
      </button>
    </Link>

      </div>
    </div>
  );
};

export default Hero;
