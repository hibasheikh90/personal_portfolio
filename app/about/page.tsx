import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id="about" className="px-4 sm:px-8 lg:px-16 py-8 bg-black text-white">
      {/* Title */}
      <h2 className="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl pt-7 text-gray-700" data-aos="zoom-in-up">
        About Me
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-6 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Content */}
        <p className="text-lg sm:text-xl lg:text-2xl px-4 sm:px-8 lg:px-0 text-center lg:text-left">
          Hi,I&apos;m Hiba Sheikh, a dedicated and enthusiastic Frontend Developer with a passion for
          crafting intuitive and visually appealing websites. Recently, I have been focused on
          building my skills in HTML, CSS, JavaScript, and React, and I am eager to apply what I have
          learned to real-world projects.
          <br /><br />
          As a self-motivated learner, I am constantly exploring new technologies and best practices
          to stay updated with the latest trends in frontend development. Although I am a fresher in
          the industry, my dedication to writing clean, efficient code and my ability to quickly grasp
          new concepts make me confident in my potential to contribute to a dynamic team.
          <br /><br />
          I am excited to bring my creativity and technical skills to a professional setting, where I
          can grow and refine my abilities while contributing to the development of high-quality,
          user-friendly web applications.
          <br /><br />
          Let&apos;s connect and create something amazing together!
        </p>

        {/* Image */}
        <Image
          src="/p1.png"
          alt="Hiba Sheikh"
          height={300}
          width={300}
          className="rounded-full mx-auto lg:mx-0"  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </div>
    </div>
  );
};

export default About;
