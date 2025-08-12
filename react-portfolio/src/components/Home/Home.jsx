import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import { motion } from "motion/react";

const Home = () => {
  return (
    <>
      <Header />
      <section className=" text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-slate-950 ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="xl:relative container xl:mx-auto xl:px-8 flex flex-col"
        >
          <div className="relative container mx-auto px-8 flex flex-col">
            <div className="flex items-center md:flex-col mt-12">
              <Hero />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
