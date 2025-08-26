import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full text-white py-4 px-8 relative border-to">
      <div className="absolute inset-0 md:flex justify-center items-center z-0 hidden">
        <h3 className="font-sans text-xs text-center"></h3>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-sans text-xs">Made with ❤ and ☕ by Heena Shaikh © </h3>
        <div className="flex items-center gap-2 z-10">
          <a  href="" target='_blank'><FaFacebookF className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="https://www.linkedin.com/in/heena-shaikh-556731353/" target='_blank'><FaLinkedinIn className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="https://github.com/heena2004shaikh" target='_blank'><FaGithub className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="" target='_blank'><FaInstagram className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="" target='_blank'><FaTwitter className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
