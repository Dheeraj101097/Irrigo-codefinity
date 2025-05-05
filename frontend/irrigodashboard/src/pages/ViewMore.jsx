// import React, { useEffect } from "react";
// import { useState } from "react";
// // Images for the farmer to interpret
// import moistureHighImage from "../assets/soilh.jpeg";
// import moistureLowImage from "../assets/soilhi.png";
// import pumpOnImage from "../assets/pump.png";
// import pumpOffImage from "../assets/pump.png";
// import temperatureHotImage from "../assets/temph.png";
// import temperatureCoolImage from "../assets/templ.png";
// import Rainprediction from "../components/RainPrediction";
// import water from "../assets/water.png";

// const Pumpstatus = () => {
//   const [soilMoisture, setSoilMoisture] = useState(0);
//   const [pumpStatus, setPumpStatus] = useState("On");
//   const [temperature, setTemperature] = useState(28); // Degrees Celsius
//   const [waterreq, setwaterreq] = useState(30); // Battery percentage

//   const fetchingData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/data");
//       const responsedata = await response.json();
//       const controlresponse = await fetch("http://localhost:3000/control");
//       const controlresponsedata = await controlresponse.json();
//       console.log(controlresponsedata);
//       // console.log(responsedata);

//       // Update current data
//       setSoilMoisture(responsedata.soilmoisture);
//       setTemperature(responsedata.temperature);
//       setPumpStatus(controlresponsedata.pump_status === 1 ? "On" : "Off");
//       setwaterreq(controlresponsedata.water_required);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     }
//   };
//   useEffect(() => {
//     fetchingData();
//     // Update data every 5 seconds
//     setInterval(fetchingData, 5000);
//   }, []);
//   return (
//     <>
//       <header className="bg-red-500 p-4 text-white flex justify-between items-center">
//         <h2 className="text-xl font-bold">Irrigation System Dashboard</h2>
//         <div className="flex justify-evenly space-x-16">
//           <a href="/">Home run</a>
//           <a href="/pumpstatus">Pump Status</a>
//           <a href="/cropdatabase">Crop Settings</a>
//         </div>
//       </header>
//       {/* bg-gradient-to-b from-amber-100 to-amber-50 */}
//       <div className=" bg-gradient-to-b from-[#1f2120] to-black min-h-screen">
//         <h1 className="text-4xl font-bold  bg-[#1f2120] text-[#cf1212] p-6 text-center ">
//           Soil & Irrigation Monitoring
//         </h1>
//         <div className="grid grid-cols-4 gap-6 items-center justify-center m-10   p-4 mx-auto">
//           {/* Soil Moisture Section */}
//           <div className="rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-red-200  p-6 w-full max-w-md ">
//             <h2 className="text-xl font-semibold mb-4 text-white">
//               Soil Moisture
//             </h2>
//             <div className="flex items-center justify-between">
//               <p className="text-3xl font-bold text-white">{soilMoisture}%</p>
//               <img
//                 src={soilMoisture > 50 ? moistureHighImage : moistureLowImage}
//                 alt="Moisture Status"
//                 className="h-16 w-16 "
//               />
//             </div>
//           </div>

//           {/* Pump Status Section */}
//           <div className="rounded-lg shadow-lg bg-gradient-to-br from-green-200 to-amber-100 p-6 w-full max-w-md ">
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">
//               Pump Status
//             </h2>
//             <div className="flex items-center justify-between">
//               <p
//                 className={`text-3xl font-bold ${
//                   pumpStatus === "On" ? "text-green-500" : "text-blue-400"
//                 } `}
//               >
//                 {pumpStatus}
//               </p>
//               <img
//                 src={pumpStatus === "On" ? pumpOnImage : pumpOffImage}
//                 alt="Pump Status"
//                 className="h-16 w-16"
//               />
//             </div>
//           </div>
//           {/*  */}
//           <div className="rounded-lg shadow-lg bg-gradient-to-br from-teal-300 to-teal-100 p-6 w-full max-w-md ">
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">
//               Water Required (Lt)
//             </h2>
//             <div className="flex items-center justify-between">
//               <p className={`text-3xl font-bold text-black `}>
//                 {waterreq.toFixed(1)}
//               </p>
//               <img src={water} alt="Pump Status" className="h-16 w-16" />
//             </div>
//           </div>

//           {/* Temperature Section */}
//           <div className="rounded-lg shadow-lg bg-gradient-to-br from-purple-300 to-purple-200 p-6 w-full max-w-md ">
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">
//               Temperature
//             </h2>
//             <div className="flex items-center justify-between">
//               <p className="text-3xl font-bold text-gray-900">
//                 {temperature}°C
//               </p>
//               <img
//                 src={
//                   temperature > 30 ? temperatureHotImage : temperatureCoolImage
//                 }
//                 alt="Temperature Status"
//                 className="h-16 w-16"
//               />
//             </div>
//           </div>
//           <div className="rounded-lg shadow-lg bg-gradient-to-br from-teal-300 to-teal-100 p-6 w-full max-w-md ">
//             <h2 className="text-xl font-semibold mb-4 text-gray-700">
//               Water Required (Lt)
//             </h2>
//             <div className="flex items-center justify-between">
//               <p className={`text-3xl font-bold text-black `}>
//                 {waterreq.toFixed(1)}
//               </p>
//               <img src={water} alt="Pump Status" className="h-16 w-16" />
//             </div>
//           </div>
//         </div>
//         {/* Recommendations Section */}
//         <div className="rounded-lg shadow-lg bg-white p-6  mx-20">
//           <h2 className="text-xl font-semibold mb-4 text-gray-700">
//             Recommendations
//           </h2>
//           <p className="text-gray-800">
//             {soilMoisture < 30
//               ? "Soil moisture is low. Please turn the pump ON to ensure adequate irrigation."
//               : "Soil moisture is sufficient. Keep the pump OFF to avoid over-irrigation."}
//           </p>
//         </div>
//         <Rainprediction />
//       </div>
//     </>
//   );
// };

// export default Pumpstatus;
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

import MoistureCard from "../components/cards/MoistureCard";
import PumpCard from "../components/cards/PumpCard";
import WaterRequirementCard from "../components/cards/WaterRequirementCard";
import TemperatureCard from "../components/cards/TemperatureCard";
import RecommendationsPanel from "../components/RecommendationsPanel";
import RainPrediction from "../components/RainPrediction";
import "chart.js/auto";
import Header from "../components/Header";

const ViewMore = () => {
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

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <Header />

        <main className="px-4 py-6 md:px-8 lg:px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            More Details
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
            <MoistureCard moisture={data.soilMoisture} />
            <PumpCard status={pumpStatus} />
            <WaterRequirementCard liters={waterRequired} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecommendationsPanel
              moisture={data.soilMoisture}
              temperature={data.temperature}
            />
            <RainPrediction />
          </div>
        </main>
      </div>
    </>
  );
};

export default ViewMore;
