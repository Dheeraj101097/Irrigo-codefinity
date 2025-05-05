import React from "react";
import { Droplets } from "lucide-react";

const WaterRequirementCard = ({ liters }) => {
  // Calculate the fill amount (0-100%) capped at 100%
  const fillAmount = Math.min(100, (liters / 50) * 100);

  return (
    <div className="rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-md group">
      <div className="px-6 py-5 relative z-10 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Water Required</h3>
          <Droplets className="h-6 w-6 text-blue-400" />
        </div>

        <div className="flex flex-col items-center">
          <div className="relative h-28 w-28 mb-3">
            {/* Water container */}
            <div className="absolute inset-0 border-2 border-blue-300/30 rounded-b-lg"></div>

            {/* Water level */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-b-lg transition-all duration-700"
              style={{ height: `${fillAmount}%` }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-300/50 animate-wave"></div>
            </div>

            {/* Measurement lines */}
            <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between py-2">
              <div className="w-full border-t border-blue-300/30 h-0"></div>
              <div className="w-full border-t border-blue-300/30 h-0"></div>
              <div className="w-full border-t border-blue-300/30 h-0"></div>
            </div>

            {/* Value display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {/* {liters.toFixed(1)} */}
              </span>
            </div>
          </div>

          <span className="text-sm text-slate-300">Liters</span>
        </div>

        <div className="mt-3 text-xs text-slate-400 text-center">
          Based on current conditions
        </div>
      </div>
    </div>
  );
};

export default WaterRequirementCard;
