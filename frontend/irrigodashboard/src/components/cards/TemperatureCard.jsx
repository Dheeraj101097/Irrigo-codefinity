import React from "react";
import { Thermometer } from "lucide-react";

const TemperatureCard = ({ temperature }) => {
  // Determine color based on temperature
  const getColorClass = () => {
    if (temperature < 15) return "from-blue-500 to-cyan-400";
    if (temperature < 25) return "from-green-500 to-emerald-400";
    if (temperature < 35) return "from-amber-500 to-orange-400";
    return "from-red-500 to-rose-400";
  };

  // Temperature category
  const getTemperatureStatus = () => {
    if (temperature < 15) return "Cool";
    if (temperature < 25) return "Mild";
    if (temperature < 35) return "Warm";
    return "Hot";
  };

  // Calculate thermometer fill (0-100%)
  const fillPercentage = Math.min(
    100,
    Math.max(0, ((temperature - 0) / (45 - 0)) * 100)
  );

  return (
    <div className="rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-md">
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Temperature</h3>
          <Thermometer
            className={`h-6 w-6 ${
              temperature > 30 ? "text-red-400" : "text-sky-400"
            }`}
          />
        </div>

        <div className="flex items-center">
          <div className="relative mr-4 w-6 h-24 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className={`absolute bottom-0 w-full rounded-full bg-gradient-to-t ${getColorClass()} transition-all duration-500`}
              style={{ height: `${fillPercentage}%` }}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              <div className="w-full border-t border-slate-500/30 h-0"></div>
              <div className="w-full border-t border-slate-500/30 h-0"></div>
              <div className="w-full border-t border-slate-500/30 h-0"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">{temperature}°C</span>
            </div>
            <span
              className={`mt-1 text-sm ${
                temperature > 35
                  ? "text-red-300"
                  : temperature > 25
                  ? "text-amber-300"
                  : temperature > 15
                  ? "text-emerald-300"
                  : "text-blue-300"
              }`}
            >
              {getTemperatureStatus()}
            </span>

            <div className="mt-2 text-xs text-slate-400">Field temperature</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
