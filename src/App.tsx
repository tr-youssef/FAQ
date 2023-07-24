import React from "react";
import Header from "./components/Header";
import FaqSelector from "./components/FaqSelector";

export default function App() {
  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <div className="flex items-center flex-col h-screen">
        <div className="flex flex-row">
          <h1 className="font-bold text-5xl mt-10">Frequently Asked&nbsp;</h1>
          <h1 className="font-bold text-5xl mt-10 text-blue-700">Questions</h1>
        </div>
        <FaqSelector />
      </div>
    </div>
  );
}
