import React from "react";
import { Power } from "lucide-react";

const PumpCard = ({ status }) => {
  const isOn = status === "On";

  return (
    <div className="rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden shadow-md relative bg-gradient-to-br from-slate-800 to-slate-900 group">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isOn ? "opacity-40" : "opacity-10"
        }`}
        style={{
          background: isOn
            ? "radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(148, 163, 184, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="px-6 py-5 relative z-10 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Pump Status</h3>
          <div
            className={`flex items-center justify-center h-8 w-8 rounded-full transition-colors duration-500 ${
              isOn ? "bg-emerald-500/20" : "bg-slate-600/20"
            }`}
          >
            <Power
              className={`h-5 w-5 ${
                isOn ? "text-emerald-400" : "text-slate-400"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 mb-2">
          <div
            className={`relative flex items-center justify-center h-24 w-24 rounded-full transition-all duration-500 ${
              isOn ? "bg-emerald-500/20" : "bg-slate-600/20"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full ${
                isOn ? "animate-pulse-slow" : ""
              }`}
              style={{
                boxShadow: isOn
                  ? "0 0 20px 2px rgba(16, 185, 129, 0.5)"
                  : "none",
              }}
            ></div>
            <span
              className={`text-2xl font-bold ${
                isOn ? "text-emerald-400" : "text-slate-400"
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <span
            className={`text-sm ${
              isOn ? "text-emerald-300" : "text-slate-400"
            }`}
          >
            {isOn ? "Actively irrigating" : "Irrigation paused"}
          </span>
        </div>

        <div className="mt-3 text-xs text-slate-400 text-center">
          Last toggled 5 min ago
        </div>
      </div>
    </div>
  );
};

export default PumpCard;
