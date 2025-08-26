import { motion } from "motion/react";
const Certifications = ({ cvalues, index }) => {
  const { year, role, university, description } = cvalues;
  
  
  return (
    <motion.div key={index} initial={{opacity:0}} whileInView={{opacity:[0,0,1]}} transition={{delay:0.2, duration:1}} >
      <div className="mb-4 md:mb-8 flex flex-wrap scale-90 md:scale-100 lg:justify-center">
        <div className="w-full lg:w-1/4">
          <p className="mb-2 text-sm text-neutral-400">{year}</p>
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold ">
            {role} -{" "}
            <span className="text-sm text-purple-100">{university}</span>
          </h6>
          <p className="mb-4 text-neutral-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
