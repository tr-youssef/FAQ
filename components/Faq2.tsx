import React, { useState } from "react";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import Accordion from "./Accordion";

interface Faq2Item {
  question: string;
  answer: string;
}

interface Faq2Props {
  data: Faq2Item[];
}

const Faq2: React.FC<Faq2Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="py-6">
      {data.map((item, index) => (
        <Accordion key={index} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} item={item} last={index !== data.length - 1} iconClose={<FaChevronRight />} iconOpen={<FaChevronDown />} style="FAQ2" />
      ))}
    </div>
  );
};

export default Faq2;
