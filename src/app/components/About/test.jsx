import React from "react";

function test() {
  {
    /* Grid of Cards */
  }
  <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
    {Array(4)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="bg-red-600 rounded-lg p-4 flex flex-col items-center text-white"
        >
          <div className="w-16 h-10 bg-gray-300 rounded-sm mb-2"></div>
          <div className="space-y-1">
            <div className="w-20 h-2 bg-gray-200 rounded"></div>
            <div className="w-16 h-2 bg-gray-200 rounded"></div>
            <div className="w-24 h-2 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
  </div>;
}

export default test;
