import React, { useState } from "react";
import { FaPlusCircle } from "@react-icons/all-files/fa/FaPlusCircle";
import { FaMinusCircle } from "@react-icons/all-files/fa/FaMinusCircle";
import Accordion from "./Accordion";

interface Faq3Item {
  question: string;
  answer: string;
}

interface Faq3Props {
  data: Faq3Item[];
}

const Faq3: React.FC<Faq3Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="">
      {data.map((item, index) => (
        <Accordion key={index} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} item={item} last={index !== data.length - 1} iconClose={<FaMinusCircle />} iconOpen={<FaPlusCircle />} style="FAQ3" />
      ))}
    </div>
  );
};

export default Faq3;
