import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="wrapper px-4 sm:px-8 lg:px-16 py-8 bg-black text-white">
      {/* Title */}
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700" data-aos="flip-left">Skills</h1>

      {/* Skills Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pt-8" data-aos="zoom-in">
        
        {/* Row 1 */}
        <div className="flex flex-col items-center">
          <Image 
            src="/html.png" 
            alt="HTML logo" 
            height={180} 
            width={180} 
            className="bg-transparent transition-transform duration-300 transform hover:scale-110" 
          />
          <p className="pt-4 text-lg font-medium hover:text-orange-500 transition-colors duration-300">HTML</p>
        </div>
        
        <div className="flex flex-col items-center">
          <Image 
            src="/css.png" 
            alt="CSS logo" 
            height={180} 
            width={180} 
            className="transition-transform duration-300 transform hover:scale-110" 
          />
          <p className="pt-4 text-lg font-medium hover:text-blue-700 transition-colors duration-300">CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <Image 
            src="/js.webp" 
            alt="JavaScript logo" 
            height={180} 
            width={180} 
            className="transition-transform duration-300 transform hover:scale-110" 
          />
          <p className="pt-4 text-lg font-medium hover:text-yellow-400 transition-colors duration-300">JavaScript</p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pt-8"  data-aos="zoom-in-left">
        <div className="flex flex-col items-center">
          <Image 
            src="/ts.webp" 
            alt="TypeScript logo" 
            height={180} 
            width={180} 
            className="transition-transform duration-300 transform hover:scale-110" 
          />
          <p className="pt-4 text-lg font-medium hover:text-blue-500 transition-colors duration-300">TypeScript</p>
        </div>

        <div className="flex flex-col items-center">
          <Image 
            src="/react.webp" 
            alt="React logo" 
            height={180} 
            width={180} 
            className="transition-transform duration-300 transform hover:scale-110" 
          />
          <p className="pt-4 text-lg font-medium hover:text-blue-400 transition-colors duration-300">React</p>
        </div>

        <div className="flex flex-col items-center">
          <Image 
            src="/next.png" 
            alt="Next.js logo" 
            height={180} 
            width={180} 
            className="transition-transform duration-300 transform hover:scale-110" 
          />
          <p className="pt-4 text-lg font-medium hover:text-blue-500 transition-colors duration-300">Next.js</p>
        </div>

        <div className="flex flex-col items-center">
          <Image 
            src="/tailwind.png" 
            alt="Tailwind CSS logo" 
            height={180} 
            width={180} 
            className="transition-transform duration-300 transform hover:scale-110" 
          />
          <p className="pt-4 text-lg font-medium hover:text-blue-300 transition-colors duration-300">Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
