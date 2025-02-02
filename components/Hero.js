"use client";
import { useEffect, useState } from "react";

const Hero = () => {
  const eventDate = new Date("February 20, 2025 00:00:00 GMT+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ).padStart(2, "0"),
          minutes: String(
            Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          ).padStart(2, "0"),
          seconds: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
            2,
            "0"
          ),
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center text-center p-6">
      <div className="relative">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-teal-400 drop-shadow-lg">
          TARANG 2025
        </h1>
        <p className="text-lg mt-4 opacity-80">
          Cultural & Sports Extravaganza
        </p>
        <p className="text-lg">
          February 20-22, 2025 | Kasturba Medical College Mangalore
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-teal-400">
            🎭 Cultural Events
          </h3>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li>Fashion Shows & Pageants</li>
            <li>Music & Dance Performances</li>
            <li>Fine Arts Competitions</li>
            <li>Dramatic & Theatrical Acts</li>
            <li>Literary Competitions</li>
          </ul>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-teal-400">
            🏅 Sports Events
          </h3>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li>Indoor Sports</li>
            <li>Outdoor Sports</li>
            <li>Athletic Events</li>
            <li>Team Championships</li>
            <li>Individual Competitions</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-400 rounded-full text-white font-semibold hover:scale-105 transition-transform">
          Register Now
        </button>
        <button className="px-6 py-3 border border-gray-300 rounded-full text-white font-semibold hover:scale-105 transition-transform">
          View Schedule
        </button>
      </div>

      <div className="mt-10 flex space-x-6 text-center">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="p-4 bg-white bg-opacity-10 rounded-lg min-w-[80px]"
          >
            <div className="text-3xl font-bold text-teal-400">{value}</div>
            <div className="text-xs uppercase text-gray-300">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
