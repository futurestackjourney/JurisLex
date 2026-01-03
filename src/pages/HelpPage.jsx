import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Accordion from "../components/ui/Accordion";
import { accordionItems } from "../constants";
import { motion } from "motion/react";

const HelpPage = () => {
  const location = useLocation();

  const initialId = location.state?.activeId || 1;
  const [activeId, setActiveId] = useState(initialId);

  useEffect(() => {
    if (location.state?.activeId) {
      setActiveId(location.state.activeId);
    }
  }, [location.state]);

  const activeItem = accordionItems.find((item) => item.id === activeId);
  const Icon = activeItem?.icon;

  return (
    <>
      {/* HELP HERO */}
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
          <h4 className="text-3xl text-primary">How We Help</h4>
          <h1 className="text-5xl hero-title">Executives & Employees</h1>
        </div>
      </motion.div>

      {/* HELP CONTENT */}
      <div className="padding-x-lg py-8 sm:py-24">
        <div className="px-0 lg:px-20 mb-4">
          <h1 className="text-primary text-3xl mb-4">How We Help</h1>
          <p className="text-muted font-extralight tracking-wider">
            We represent executives and employees in all types of employment
            disputes.
          </p>
        </div>

        {/* DESKTOP */}
        <div className="not-md:hidden">
          <div className="flex justify-evenly items-center px-2 lg:px-24 border-b border-muted">
            {accordionItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`btn-primary transition ${
                  activeId === item.id ? "opacity-100 border-b-2" : "opacity-60"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[20%_80%] px-24 py-12">
            <div className="grid-icon">{Icon && <Icon className="icon" />}</div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {activeItem.title}
              </h2>

              <p className="text-muted mb-6">{activeItem.content}</p>

              <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
                {activeItem.title2}
              </h3>
              <p className="text-muted mb-6">{activeItem.content2}</p>

              <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
                {activeItem.title3}
              </h3>
              <p className="text-muted">{activeItem.content3}</p>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default HelpPage;
