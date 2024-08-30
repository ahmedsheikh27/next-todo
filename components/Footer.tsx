import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-4 border-t">
      <div className="flex flex-col items-center">
        <a
          href="https://github.com/ahmedsheikh27"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition"
        >
          <FaGithub className="text-3xl" />
        </a>
        <p className="text-gray-600 text-sm mt-2">
          Made by Muhammad Ahmed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
