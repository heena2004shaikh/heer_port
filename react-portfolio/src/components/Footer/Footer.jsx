import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full text-white py-4 px-8 relative border-to">
      <div className="absolute inset-0 md:flex justify-center items-center z-0 hidden">
        <h3 className="font-sans text-xs text-center"></h3>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-sans text-xs">Made with ❤ and ☕ by Ahtesham Salamat Ansari © </h3>
        <div className="flex items-center gap-2 z-10">
          <a  href="https://www.facebook.com/profile.php?id=100007339538234" target='_blank'><FaFacebookF className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="https://www.linkedin.com/in/mudassirhussainansari" target='_blank'><FaLinkedinIn className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="https://github.com/maddy046" target='_blank'><FaGithub className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="https://www.instagram.com/maddy01432" target='_blank'><FaInstagram className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
          <a  href="https://www.twitter.com/your-username" target='_blank'><FaTwitter className='hover:scale-90 hover:cursor-pointer hover:transition-all hover:ease-in-out' /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
