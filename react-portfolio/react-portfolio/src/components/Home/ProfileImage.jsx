import { motion } from "motion/react";
import { useState, useEffect } from "react";

const ProfileImage = ({ profile }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize screen size check after mount
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      console.log(window.innerWidth, window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Call the function initially
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.img
      initial={isMobile ? { x:100, opacity: 0 } : { x: -1000, opacity: 0 }} // Mobile: vertical, Desktop: horizontal
      animate={isMobile ? { x:[0], opacity: 1 } : { x: 0, opacity: 1 }} // Adjust to slide in based on device
      transition={{ duration: 1.5, delay: 0.5 }}
      src={profile}
      alt="Profile"
      className="w-48 h-48 md:w-[23rem] md:h-[23rem] max-w-xs lg:max-w-lg object-cover rounded-lg"
    />
  );
};

export default ProfileImage;
