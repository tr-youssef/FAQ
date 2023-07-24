import React, { useState } from "react";
import Accordion from "./Accordion";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";

interface Faq1Item {
  question: string;
  answer: string;
}

interface Faq1Props {
  data: Faq1Item[];
}

const Faq1: React.FC<Faq1Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="flex py-6">
      <div className="w-1/2 ">
        {data.map((item, index) =>
          index % 2 === 0 ? (
            <Accordion
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              item={item}
              last={index !== data.length - 2}
              iconClose={<FaPlus />}
              iconOpen={<FaMinus />}
              style="FAQ1"
            />
          ) : null
        )}
      </div>
      <div className="w-1/2 pl-4">
        {data.map((item, index) =>
          index % 2 !== 0 ? (
            <Accordion
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              item={item}
              last={index !== data.length - 1}
              iconClose={<FaPlus />}
              iconOpen={<FaMinus />}
              style="FAQ1"
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Faq1;
