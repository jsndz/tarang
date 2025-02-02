import React from "react";
import SportsEv from "./SportsEv";
import CulturalEv from "./CulturalEv";

const Events = () => {
  return (
    <div className="w-full mx-auto p-6 bg-dark">
      <h1 className="text-3xl text-text font-bold text-center mb-8">Events</h1>
      <div className="flex space-x-4">
        <div className="flex-1  shadow-lg rounded-lg border border-gray-300 p-6">
          <h2 className="text-2xl text-paragraph font-semibold mb-4">
            Cultural Events
          </h2>
          <CulturalEv />
        </div>
        <div className="flex-1  shadow-lg rounded-lg border border-gray-300 p-6">
          <h2 className="text-2xl text-paragraph font-semibold mb-4">
            Sports Events
          </h2>
          <SportsEv />
        </div>
      </div>
    </div>
  );
};
export default Events;
