import { about, aboutSec } from "../constants";
import { motion } from "motion/react";

const AboutPage = () => {
  return (
    <>
      {/* ABOUT HERO */}
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="AboutBanner padding-x-lg bg-cover bg-center bg-no-repeat h-100 flex justify-start items-center"
      >
        <div className="px-0 sm:px-24 font-semibold ">
          <h4 className="text-3xl text-primary">About</h4>
          <h1 className="text-5xl hero-title">Meet the Founder</h1>
        </div>
      </motion.div>

      {/* ABOUT ME */}
      <div className="padding-x-lg py-8 sm:py-24">
        <div className="px-0 lg:px-20 ">
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT SIDE */}
            <div>
              <h1 className="text-accent text-3xl mb-6">Meredith L. Kaufman</h1>
              <div className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="text-sky-500 border-b border-sky-400 tracking-wide hover:text-sky-300 transition-colors"
                >
                  (123) 123-456-7890
                </a>
                <a
                  href="#"
                  className="text-sky-500 border-b border-sky-400 tracking-wide hover:text-sky-300 transition-colors"
                >
                  Kaufman@outlook.com
                </a>
              </div>
              {about.map((about, id) => (
                <p key={id} className="text-muted mb-4 tracking-wider">
                  {about.description}
                </p>
              ))}
            </div>
            {/* RIGHT SIDE */}
            <div className="">
              <div className="w-full h-120">
                <img
                  src="../images/person.jpg"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              {aboutSec.map((aboutSec, index) => (
                <div key={index}>
                  <h2 className="text-lg text-accent my-4 uppercase">
                    {aboutSec.title}
                  </h2>
                  <p className="text-muted  tracking-wider leading-7">
                    {aboutSec.description}
                  </p>
                  <p className="text-muted  tracking-wider leading-7">
                    {aboutSec.description2}
                  </p>
                  <p className="text-muted  tracking-wider leading-7">
                    {aboutSec.description3}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
