import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Header from "../components/Header";
import MoistureCard from "../components/cards/MoistureCard";
import PumpCard from "../components/cards/PumpCard";
import WaterRequirementCard from "../components/cards/WaterRequirementCard";
import TemperatureCard from "../components/cards/TemperatureCard";
import RecommendationsPanel from "../components/RecommendationsPanel";
import RainPrediction from "../components/RainPrediction";
import "chart.js/auto";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard_two = () => {
  const [data, setData] = useState({
    temperature: 28,
    humidity: 60,
    soilMoisture: 5,
    // pumpStatus: "Off",
    // waterRequired: 30,
  });
  const [pumpStatus, setPumpStatus] = useState("On");
  const [waterRequired, setWaterRequired] = useState(30);

  const [historicalData, setHistoricalData] = useState({
    temperatureData: [],
    moistureData: [],
    timestamps: [],
  });

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        // setLoading(true);
        const response = await fetch("http://localhost:3000/data");
        const dashboardData = await response.json();
        setData(dashboardData);

        const controlresponse = await fetch("http://localhost:3000/control");
        const controlresponsedata = await controlresponse.json();
        setPumpStatus(controlresponsedata.pump_status === 1 ? "On" : "Off");
        setWaterRequired(controlresponsedata.water_required);

        setHistoricalData((prev) => {
          const newTimestamps = [
            ...prev.timestamps,
            new Date().toLocaleTimeString(),
          ];
          const newTemperatureData = [
            ...prev.temperatureData,
            dashboardData.temperature,
          ];
          const newMoistureData = [
            ...prev.moistureData,
            dashboardData.soilMoisture,
          ];

          if (newTimestamps.length > 24) {
            newTimestamps.shift();
            newTemperatureData.shift();
            newMoistureData.shift();
          }

          return {
            temperatureData: newTemperatureData,
            moistureData: newMoistureData,
            timestamps: newTimestamps,
          };
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
      // finally {
      //   setLoading(false);
      // }
    };

    getData();
    const interval = setInterval(getData, 5000);
    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#94a3b8",
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: "rgba(148, 163, 184, 0.1)",
        },
        ticks: {
          color: "#94a3b8",
        },
      },
      x: {
        grid: {
          color: "rgba(148, 163, 184, 0.1)",
        },
        ticks: {
          color: "#94a3b8",
        },
      },
    },
  };

  const temperatureChartData = {
    labels: historicalData.timestamps,
    datasets: [
      {
        label: "Temperature (°C)",
        data: historicalData.temperatureData,
        borderColor: "#f97316",
        backgroundColor: "rgba(249, 115, 22, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const moistureChartData = {
    labels: historicalData.timestamps,
    datasets: [
      {
        label: "Soil Moisture (%)",
        data: historicalData.moistureData,
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14, 165, 233, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <Header />

      <main className="px-4 py-6 md:px-8 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
          Smart Irrigation Monitoring
        </h1>
        {/* chnage this false */}
        {false ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MoistureCard moisture={data.soilMoisture} />
              <TemperatureCard temperature={data.temperature} />
              <PumpCard status={pumpStatus} />
              <WaterRequirementCard liters={waterRequired} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Temperature History
                </h3>
                <div className="h-[300px]">
                  <Line data={temperatureChartData} options={chartOptions} />
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Moisture History</h3>
                <div className="h-[300px]">
                  <Line data={moistureChartData} options={chartOptions} />
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecommendationsPanel
                moisture={data.soilMoisture}
                temperature={data.temperature}
              />
              <RainPrediction />
            </div> */}
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard_two;
