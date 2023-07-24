import React, { useState } from "react";
import Faq1 from "./Faq1";
import Faq2 from "./Faq2";
import Faq3 from "./Faq3";
import FaqData from "../FaqData";

const SectionSelector: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);

  const handleSectionChange = (sectionNumber: number) => {
    setActiveSection(sectionNumber);
  };

  return (
    <div className="p-4 w-11/12 shadow-2xl rounded-3xl mt-16 bg-white">
      <div className="flex justify-center mb-4 justify-evenly  mt-10 ">
        <button
          className={`ronded py-4 px-8 border rounded-lg border-gray-200 focus:outline-none  ${
            activeSection === 1
              ? "bg-blue-700 text-white"
              : "bg-white text-gray-400"
          }`}
          onClick={() => handleSectionChange(1)}
        >
          FAQ 1
        </button>
        <button
          className={`ronded py-4 px-8 border rounded-lg border-gray-200 shadow focus:outline-none  ${
            activeSection === 2
              ? "bg-blue-700 text-white"
              : "bg-white text-gray-400"
          }`}
          onClick={() => handleSectionChange(2)}
        >
          FAQ 2
        </button>
        <button
          className={`ronded py-4 px-8 border rounded-lg border-gray-200 focus:outline-none ${
            activeSection === 3
              ? "bg-blue-700 text-white"
              : "bg-white text-gray-400"
          }`}
          onClick={() => handleSectionChange(3)}
        >
          FAQ 3
        </button>
      </div>
      <div className="bg-white rounded-lg m-10 px-15 ">
        {activeSection === 1 && <Faq1 data={FaqData} />}
        {activeSection === 2 && <Faq2 data={FaqData} />}
        {activeSection === 3 && <Faq3 data={FaqData} />}
      </div>
    </div>
  );
};

export default SectionSelector;
