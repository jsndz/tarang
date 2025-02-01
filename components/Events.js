import React from "react";
import SportsEv from "./SportsEv";
import CulturalEv from "./CulturalEv";

const Events = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Events</h1>
      <div className="flex space-x-4">
        <div className="flex-1 bg-white shadow-lg rounded-lg border border-gray-300 p-6">
          <h2 className="text-2xl font-semibold mb-4">Cultural Events</h2>
          <CulturalEv />
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg border border-gray-300 p-6">
          <h2 className="text-2xl font-semibold mb-4">Sports Events</h2>
          <SportsEv />
        </div>
      </div>
    </div>
  );
};
export default Events;
