import React from 'react'
import { FaFacebook,
  FaGithub,
  FaLinkedin      
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-lg font-semibold">Hiba Sheikh</h2>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} Hiba Sheikh. All Rights Reserved.
            </p>
          </div>
          {/* Right Section */}
          <div>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://github.com/hibasheikh90"
                  className="hover:text-gray-400 text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hiba-sheikh-a437472b4/"
                  className="hover:text-gray-400 text-2xl"
                  aria-label="LinkedIn"
                >
                 <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/p/CDUNeA9LAMckRds9/"
                  className="hover:text-gray-400 text-2xl"
                  aria-label="facebook"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer