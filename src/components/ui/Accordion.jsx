import { ArrowDown, PersonStanding, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { accordionItems } from "../../constants";

const AccordionItem = ({
  icon : Icon,
  title,
  title2,
  title3,
  content,
  content2,
  content3,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mt-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-slate-800 bg-white hover:bg-slate-50 transition"
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ArrowDown />
        </span>
      </button>

      <div
        className={`grid transition-all duration-600 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-[30%_70%] px-5 pb-4">
          <div className="grid-icon mt-6">
            {/* <TriangleAlert className="icon" /> */}
            {Icon && <Icon className="icon" />}
          </div>
          <div className="h-full">
            <h1 className="text-primary text-2xl my-6">{title}</h1>
            <p className="text-muted mb-4">{content}</p>
            <h2 className="text-accent text-lg mb-4">{title2}</h2>
            <p className="text-muted mb-4">{content2}</p>
            <h2 className="text-accent text-lg mb-4">{title3}</h2>
            <p className="text-muted mb-4">{content3}</p>
          </div>

          {/* <div className="grid-icon mt-6">
            <PersonStanding className="icon" />
          </div>
          <div className="mt-6">
            <h2>{title}</h2>
            <p>{content}</p>
            <h2>{}</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          icon={item.icon}
          title={item.title}
          title2={item.title2}
          title3={item.title3}
          content={item.content}
          content2={item.content2}
          content3={item.content3}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
