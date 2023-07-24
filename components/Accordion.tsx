import React from "react";

interface AccordionItem {
  question: string;
  answer: string;
}
interface AccordionProps {
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  item: AccordionItem;
  last: boolean;
  iconClose: JSX.Element;
  iconOpen: JSX.Element;
  style: string;
}

const Accordion: React.FC<AccordionProps> = ({ item, index, activeIndex, setActiveIndex, last, iconClose, iconOpen, style }) => {
  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return style === "FAQ1" || style === "FAQ2" ? (
    <div key={index} className={`${last ? "mb-6" : ""} border border-gray-200 rounded-lg shadow p-4 ${activeIndex === index ? "border-blue-200" : ""}`}>
      <div className={`text-blue-700 font-bold flex flex-row justify-between items-center    ${activeIndex === index ? "active" : ""}`} onClick={() => handleClick(index)}>
        <div>{item.question}</div>
        {activeIndex === index ? <div className="bg-blue-700 text-white rounded-full  p-2">{iconOpen}</div> : <div className="bg-white text-blue rounded-full p-2">{iconClose}</div>}
      </div>
      {activeIndex === index && <div className="mt-4 text-black">{item.answer}</div>}
    </div>
  ) : (
    <div key={index} className="">
      <div className="text-blue-700 font-bold flex flex-row justify-between items-center px-2  my-4 " onClick={() => handleClick(index)}>
        <div>{item.question}</div>
        {activeIndex === index ? iconClose : iconOpen}
      </div>
      {activeIndex === index && <div className="my-4 px-2 text-black">{item.answer}</div>}
      {last && <div className="border-b-2 border-blue-700" />}
    </div>
  );
};

export default Accordion;
