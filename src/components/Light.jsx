import React, { useEffect, useState } from "react";

function Light() {
  const timeduration = {
    green: 2 * 60 * 1000, // 2 minutes
    red: 30 * 1000, // 30 seconds
    yellow: 10 * 1000, // 10 seconds
  };

  const ColorLight = {
    green: "red",
    red: "yellow",
    yellow: "green",
  };

  // state save in localStorage
  const [lighting, setLighting] = useState(() => {
    const saved = localStorage.getItem("trafficLight");
    return saved ? JSON.parse(saved).light : "green";
  });

  const [startTime, setStartTime] = useState(() => {
    const saved = localStorage.getItem("trafficLight");
    return saved ? JSON.parse(saved).startTime : Date.now();
  });

  useEffect(() => {
    localStorage.setItem(
      "trafficLight",
      JSON.stringify({ light: lighting, startTime })
    );

    const elapsed = Date.now() - startTime;
    const remaining = timeduration[lighting] - elapsed;

    const timer = setTimeout(
      () => {
        const next = ColorLight[lighting];
        setLighting(next);
        setStartTime(Date.now());
      },
      remaining > 0 ? remaining : 0
    );

    return () => clearTimeout(timer);
  }, [lighting, startTime]);

  const handleChangeButton = () => {
    const next = ColorLight[lighting];
    setLighting(next);
    setStartTime(Date.now());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-6">
      <div className="w-24 h-64 bg-gray-900 rounded-2xl flex flex-col justify-around items-center p-4">
        <div
          className={`w-14 h-14 rounded-full transition-colors ${
            lighting === "red" ? "bg-red-500" : "bg-red-900"
          }`}
        />
        <div
          className={`w-14 h-14 rounded-full transition-colors ${
            lighting === "yellow" ? "bg-yellow-400" : "bg-yellow-900"
          }`}
        />
        <div
          className={`w-14 h-14 rounded-full transition-colors ${
            lighting === "green" ? "bg-green-500" : "bg-green-900"
          }`}
        />
      </div>
      <button
        onClick={handleChangeButton}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Change Light
      </button>
    </div>
  );
}

export default Light;
