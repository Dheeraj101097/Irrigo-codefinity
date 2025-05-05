import React, { useMemo } from "react";
import { AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

const RecommendationsPanel = ({ moisture, temperature }) => {
  const { recommendations, status } = useMemo(() => {
    let recs = [];
    let statusType = "optimal"; // 'optimal' | 'warning' | 'alert'

    // Soil moisture recommendations
    if (moisture < 30) {
      recs.push(
        "Soil moisture is critically low. Immediate irrigation recommended."
      );
      statusType = "alert";
    } else if (moisture < 50) {
      recs.push(
        "Soil moisture is below optimal levels. Consider increasing irrigation duration."
      );
      statusType = "warning";
    } else if (moisture > 80) {
      recs.push(
        "Soil moisture is above optimal levels. Consider reducing irrigation to prevent waterlogging."
      );
      statusType = moisture > 90 ? "alert" : "warning";
    } else {
      recs.push(
        "Soil moisture levels are optimal. Maintain current irrigation schedule."
      );
    }

    // Temperature-based recommendations
    if (temperature > 35) {
      recs.push(
        "High temperatures detected. Consider increasing water supply and irrigating during cooler periods."
      );
      statusType = statusType === "optimal" ? "warning" : statusType;
    } else if (temperature < 10) {
      recs.push(
        "Low temperatures detected. Consider reducing irrigation and protect plants from frost."
      );
      statusType = statusType === "optimal" ? "warning" : statusType;
    }

    // Combined conditions
    if (moisture < 40 && temperature > 30) {
      recs.push(
        "Hot and dry conditions detected. High risk of plant stress - immediate action recommended."
      );
      statusType = "alert";
    }

    return {
      recommendations: recs,
      status: statusType,
    };
  }, [moisture, temperature]);

  const getStatusIcon = () => {
    switch (status) {
      case "alert":
        return <AlertTriangle className="h-6 w-6 text-red-400" />;
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-amber-400" />;
      case "optimal":
        return <CheckCircle className="h-6 w-6 text-emerald-400" />;
      default:
        return null;
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case "alert":
        return "border-red-500/30 bg-red-500/10";
      case "warning":
        return "border-amber-500/30 bg-amber-500/10";
      case "optimal":
        return "border-emerald-500/30 bg-emerald-500/10";
      default:
        return "";
    }
  };

  return (
    <div
      className={`rounded-2xl transition-all duration-300 border ${getStatusClass()} p-6 shadow-md h-full`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Recommendations</h3>
        {getStatusIcon()}
      </div>

      <ul className="space-y-4">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="flex items-start">
            <Lightbulb className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-slate-200">{recommendation}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-xs text-slate-400">
        Updated based on current field conditions
      </div>
    </div>
  );
};

export default RecommendationsPanel;
