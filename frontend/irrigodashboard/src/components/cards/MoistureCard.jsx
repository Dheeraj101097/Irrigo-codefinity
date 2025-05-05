import React from "react";
import { Droplet } from "lucide-react";

const MoistureCard = ({ moisture }) => {
  // Determine color based on moisture levels
  const getColorClass = () => {
    if (moisture < 30) return "from-red-500 to-amber-500";
    if (moisture < 60) return "from-amber-500 to-emerald-500";
    return "from-emerald-500 to-teal-500";
  };

  const getMoistureStatus = () => {
    if (moisture < 30) return "Low";
    if (moisture < 60) return "Moderate";
    return "Optimal";
  };

  return (
    <div className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-slate-800 to-slate-900 shadow-md group">
      <div
        className="absolute inset-0 bg-gradient-to-r opacity-60 transition-opacity duration-500 group-hover:opacity-80"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, 
            rgba(16, 185, 129, 0.3) 0deg, 
            rgba(59, 130, 246, 0.3) ${moisture * 3.6}deg, 
            transparent ${moisture * 3.6}deg, 
            transparent 360deg)`,
        }}
      />

      <div className="px-6 py-5 relative z-10 h-full">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white">Soil Moisture</h3>
          <Droplet
            className={`h-6 w-6 ${
              moisture < 30 ? "text-red-400" : "text-cyan-400"
            }`}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{moisture}%</span>
            <span className="ml-2 text-sm font-medium text-slate-300">
              {getMoistureStatus()}
            </span>
          </div>

          <div className="mt-4 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${getColorClass()} transition-all duration-500`}
              style={{ width: `${moisture}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-3 text-xs text-slate-400">Updated just now</div>
      </div>
    </div>
  );
};

export default MoistureCard;
