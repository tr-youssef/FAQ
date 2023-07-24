import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <a href="https://www.tryoussef.com" target="_blank" rel="noopener noreferrer">
        <div className="font-bold text-xl bg-blue-700 text-white px-6 py-2 rounded-full">&lt;Youssef Triki /&gt;</div>
      </a>
      <div className="button">
        <a href="https://www.linkedin.com/in/youssef-triki/" target="_blank" rel="noopener noreferrer">
          <button className="font-bold text-xl bg-blue-700 text-white px-6 py-2 rounded-full">LinkedIn</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
