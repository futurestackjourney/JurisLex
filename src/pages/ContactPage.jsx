import React from "react";
import { motion } from "motion/react";

const ContactPage = () => {
  return (
    <>
      {/* CONTACT HERO */}
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
        className="helpPage padding-x-lg bg-cover bg-center bg-no-repeat h-100 flex justify-start items-center"
      >
        <div className="px-0 sm:px-24 font-semibold text-zinc-300">
          <h1 className="text-5xl hero-title">Contact</h1>
        </div>
      </motion.div>
      {/* CONTACT FORM */}
      <div className="padding-x-lg py-8 sm:py-16">
        <div className="sm:px-28">
          <p className="text-muted mb-6">
            Want to learn more about how Kaufman Law can help you? Please call,
            email or use the contact form below.
          </p>
        </div>
        <div className="grid md:grid-cols-[55%_45%] gap-8 sm:px-24">
          {/* LEFT SIDE */}
          <div className="md:px-12 ">
            <form action="">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" cols="30"></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button className="btn-secondary w-full">SEND</button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="sm:px-6">
            <h2 className="text-xl text-accent my-4">Phone</h2>
            <a
              href="#"
              className="text-muted hover:text-zinc-400 text-lg border-b pb-1"
            >
              (123) 123456789
            </a>
            <h2 className="text-xl text-accent my-4">Email</h2>
            <a
              href="#"
              className="text-muted hover:text-zinc-400 text-lg border-b pb-1"
            >
              info@hussainemploymentlaw.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
