import { bggradient, EXPERIENCES, EDUCATION, CERTIFICATIONS } from "../../constants";
import Certifications from "./Certifications";

import Education from "./Education";
import { motion } from "motion/react";

const Experience = () => {
  const certifications = CERTIFICATIONS;
  const education = EDUCATION;
  return (
    <section className=" text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="h-full w-full bg-slate-950">
          <div className={bggradient}></div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full container mb-2 border-b-2 border-neutral-900  xl:mx-auto">
          <h2 className="pt-8 my-14 md:my-20 text-center text-3xl md:text-4xl font-bold uppercase">
            {" "}
            Work Experience{" "}
          </h2>
          <div>
            {EXPERIENCES.map((experience, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0, 1] }}
                  transition={{ delay: 0.2, duration: 1 }}
                  key={index}
                  className="mb-8 flex flex-wrap scale-90 md:scale-100  lg:justify-center"
                >
                  <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">
                      {experience.year}
                    </p>
                  </div>
                  <div className="w-full max-w-xl lg:w-3/4 ">
                    <h6 className="mb-2 font-semibold ">
                      {experience.role} -{" "}
                      <span className="text-sm text-purple-100">
                        {experience.company}
                      </span>
                    </h6>
                    <p className="mb-4 text-neutral-400">
                      {experience.description}
                    </p>
                    {experience.technologies.map((tech, index) => (
                      <span
                        className="mr-2 mt-4 rounded-md text-wrap bg-neutral-900 px-2 py-1 font-medium text-fuchsia-200"
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="w-full h-full xl:mx-auto container mb-2">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 1] }}
            transition={{ delay: 0.2, duration: 1 }}
            className="my-5  md:my-20 text-center text-3xl md:text-4xl font-bold uppercase "
          >
            {" "}
            Education{" "}
          </motion.h2>
          {education.map((edu, index) => (
            <Education key={index} evalues={edu} />
          ))}
        </div>
        <div className="w-full h-full container mb-2 xl:mx-auto ">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 1] }}
            transition={{ delay: 0.2, duration: 1 }}
            className="my-5 md:my-20 text-center text-3xl md:text-4xl font-bold uppercase"
          >
            {" "}
            Certifications{" "}
          </motion.h2>
          {certifications.map((cer, index) => (
            <Certifications key={index} cvalues={cer} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
