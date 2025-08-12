import { bggradient, PROJECTS } from "../../constants/index.js";
import Blog from "./Blog.jsx";
import { BLOGS } from "../../constants/index.js";
import { motion } from "motion/react";
const Portfolio = () => {
  return (
    <section className="flex text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="h-full w-full bg-slate-950">
          <div className={bggradient}></div>
        </div>
      </div>
      <motion.div
          className="w-full h-full container mb-2  mt-28 gap-5 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
      <div className="">
        <h2 className="text-center mb-10 text-4xl font-bold uppercase">
          {" "}
          Projects{" "}
        </h2>
        <div className="grid grid-cols-1 md:flex md:flex-wrap justify-center mb-5 gap-6 2xl:gap-16 ">
          {PROJECTS.map((proj, i) => (
            <div
              key={i}
              className="relative max-w-sm scale-90 md:scale-100 bg-zinc-50/10 border border-purple-700 rounded-lg shadow"
            >
              <div className="px-2 py-3 w-full h-64 object-cover">
                <a href="#">
                  <img className="rounded-t-lg" src={proj.image} alt="" />
                </a>
              </div>
              <div className="p-5 pb-12">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-medium tracking-tight text-purple-300 ">
                    {proj.title}
                  </h5>
                </a>
                <p className="mb-3 font-sans leading-6 text-purple-100 text-wrap ">
                  {proj.description}
                </p>

                <a
                  href={proj.link} target="_blank"
                  className="absolute bottom-3 inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-box hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 "
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-full container mb-2 mt-28 gap-5 mx-auto">
          <h2 className="text-center mb-10 text-4xl font-bold uppercase">
            {" "}
            Blogs{" "}
          </h2>
          <div className="px-2 scale-90 gap-10 mx-auto md:flex grid items-center mb-4 md:flex-wrap">
            {BLOGS.map((blog, index) => (
              <Blog key={index} values={blog} /> //passing blog object as props to Blog component.
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
