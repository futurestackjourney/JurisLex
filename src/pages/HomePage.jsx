import Button from "../components/ui/Button";
import { cards, howWeHelp, howWeHelpSec, accordionItems } from "../constants";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const HomePage = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headingX = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headingY = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* HERO SECTION */}
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
        className="hero-section relative padding-x-lg bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center"
      >
        {/* <div className="hero-section relative padding-x-lg mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%  bg-cover bg-center bg-no-repeat h-screen"> */}
        <div className="max-w-xl mx-auto flex flex-col justify-center items-center sm:justify-start sm:items-start sm:absolute top-1/4 left-1/7 transform ">
          <motion.h1
            initial={{
              x: -50,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="hero-title text-4xl sm:text-5xl font-bold text-left mt-10 text-gray-200"
          >
            We advocate for employee rights and help companies comply with
            workplace laws
          </motion.h1>
          <Button text="Learn More" />
        </div>
      </motion.div>

      {/* WHO WE ARE */}
      <div className="padding-x-lg my-16 max-w-5xl">
        <div className="sm:px-16 px-0">
          <motion.h3
            variants={headingX}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-primary font-medium mt-3 tracking-wider "
          >
            WHO WE ARE
          </motion.h3>
          <motion.h1
            variants={headingY}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl text-primary font-semibold mt-3"
          >
            Kaufman Law is a boutique firm located in New York City that
            represents employees, executives and companies in all types of
            employment disputes and advisory matters.
          </motion.h1>
          <motion.button
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="btn-primary mt-4"
          >
            EMAIL US
          </motion.button>
        </div>
      </div>

      {/* OUR SERVICES  */}
      <div className="max-w-7xl mx-auto py-16 padding-x-lg ">
        <motion.h2
          variants={headingX}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6 text-accent border-b-2 pb-4 w-max"
        >
          Our Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="bg-surface  rounded-xl p-6 transition hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>

              <h3 className="text-lg font-semibold text-text">{card.title}</h3>

              <p className="mt-2 text-muted text-sm leading-relaxed">
                {card.description}
              </p>

              <button className="mt-5 text-primary font-medium text-sm hover:underline">
                Learn more →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* HOW WE HELP */}
      <div className="padding-x-lg bg-zinc-200 py-16">
        <motion.h2
          variants={headingY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl text-center font-semibold mb-6 text-accent border-b-2 pb-4 w-max mx-auto"
        >
          How We Help
        </motion.h2>
        <div className="pt-8">
          <h4 className="text-center my-4 font-semibold text-muted text-lg border-t-2 py-8">
            Executives & Employees
          </h4>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 "
          >
            {accordionItems.map((item, index) => (
              <motion.div
                variants={cardVariants}
                key={index}
                className="mx-auto text-center"
              >
                <div className="grid-icon">
                  <item.icon className="icon " />
                </div>
                <Link
                  state={{ activeId: item.id }}
                  to="/help"
                  className="text-center mt-2 font-semibold text-lg text-primary border-b pb-1.5  hover:text-[#1624568e] transition-all ease-in-out"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {/* GRID 2 */}
          <div className="pt-8">
            <h4 className="text-center my-4 font-semibold text-muted text-lg border-t-2 py-8 ">
              Employers
            </h4>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {howWeHelpSec.map((item, index) => (
                <motion.div variants={cardVariants}>
                  <div key={index} className="mx-auto text-center">
                    <div className="grid-icon">
                      <item.icon className="icon " />
                    </div>
                    <h4 className="text-center mt-2 font-semibold text-lg text-primary">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Promise */}
      <div className="padding-x-lg my-16 ">
        <div>
          <motion.h2
            variants={headingX}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-16 text-accent border-b-2 pb-4 w-max mx-auto"
          >
            Our Promise to You
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-primary font-semibold ">
            <div className="flex gap-2 justify-center">
              <Check />
              <h1>STRONG ADVOCACY</h1>
            </div>
            <div className="flex gap-2 justify-center">
              <Check />
              <h1>PERSONALIZED CLIENT SERVICE</h1>
            </div>
            <div className="flex gap-2 justify-center">
              <Check />
              <h1>PRACTICAL ADVICE</h1>
            </div>
          </div>
        </div>
      </div>

      {/* MEET OUR FOUNDER */}
      <div className="foundersec padding-x-lg bg-primary py-16">
        <motion.h2
          variants={headingY}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-10 text-accent border-b-2 pb-4 w-max mx-auto"
        >
          Meet Our Founder
        </motion.h2>

        <div className="flex flex-col sm:relative px-8">
          <div className="w-full sm:w-1/2 border-4 border-white mx-auto sm:mx-0">
            <img src="../images/personb.jpg" alt="" />
          </div>

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white w-full mt-8 sm:absolute top-10 right-20 p-8 sm:w-1/2 sm:mt-0  "
          >
            <h4 className="text-primary font-semibold text-2xl">
              Meredith Kaufman
            </h4>
            <p className="text-muted text-sm">
              Meredith is the founder and owner of Kaufman Law. After spending
              over a decade at two prominent global law firms, Meredith opened
              this firm to provide top-notch legal services to individuals and
              companies with the flexibility and efficiency of an employment
              boutique. Meredith is a seasoned litigator with a strong track
              record and a trusted advisor to her clients. She has been
              practicing employment law exclusively for her entire career.
            </p>
            <button className="uppercase btn-primary mt-2">learn more</button>
          </motion.div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="padding-x-lg">
        <div className=" text-primary text-center py-16 px-8">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Contact us today to schedule a consultation and learn how we can
            assist you with your legal needs.
          </p>
          <button className="btn-secondary">CONTACT US</button>
        </div>
      </div>

      {/* Footer */}
      <footer></footer>
    </>
  );
};

export default HomePage;
