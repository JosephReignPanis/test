"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date().getTime() + 12 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 left-0 w-full z-50 flex justify-center bg-neutral-950">
      <div className=" text-white py-4 gap-4 items-center flex flex-row sm:flex-row  justify-center animate-pulse">
        <p className="text-lg font-bold  sm:mb-0">Mega Sale Ends In:</p>
        <div className="flex gap-3 text-lg font-mono">
          <div className="bg-white text-black px-3 py-1 rounded-md">
            {String(timeLeft.hours).padStart(2, "0")}h
          </div>
          <div className="bg-white text-black px-3 py-1 rounded-md">
            {String(timeLeft.minutes).padStart(2, "0")}m
          </div>
          <div className="bg-white text-black px-3 py-1 rounded-md">
            {String(timeLeft.seconds).padStart(2, "0")}s
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
