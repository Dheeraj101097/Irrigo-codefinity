import React, { useState, useEffect } from "react";
import {
  Droplet,
  Thermometer,
  CloudRain,
  Leaf,
  FlaskConical,
  Waves,
} from "lucide-react";
import Header from "../components/Header";
import maize from "../assets/maize.jpg";
import potato from "../assets/potato.jpg";
import rice from "../assets/rice.jpg";
import tomato from "../assets/tomato.jpg";
import wheat from "../assets/wheat.jpg";

const crops = [
  {
    name: "Wheat",
    image: wheat,
    waterRequirement: "500-600 mm",
    temperature: "10-25°C",
    npkValues: "N: 100, P: 50, K: 40",
    rainfall: "400-800 mm",
    soil: "Well-drained loamy soil",
    pH: "5.5-7.5",
    moistureLevel: "12-14%",
  },
  {
    name: "Rice",
    image: rice,
    waterRequirement: "900-1300 mm",
    temperature: "20-30°C",
    npkValues: "N: 120, P: 60, K: 60",
    rainfall: "1000-1500 mm",
    soil: "Clayey soil with good water retention",
    pH: "5.0-6.5",
    moistureLevel: "15-18%",
  },
  {
    name: "Maize",
    image: maize,
    waterRequirement: "400-600 mm",
    temperature: "18-27°C",
    npkValues: "N: 90, P: 40, K: 30",
    rainfall: "500-800 mm",
    soil: "Well-drained loamy soil",
    pH: "6.0-7.5",
    moistureLevel: "10-12%",
  },
  {
    name: "Potato",
    image: potato,
    waterRequirement: "400-600 mm",
    temperature: "15-20°C",
    npkValues: "N: 150, P: 75, K: 100",
    rainfall: "400-600 mm",
    soil: "Loose, well-drained loamy soil",
    pH: "5.0-6.5",
    moistureLevel: "12-14%",
  },
  {
    name: "Tomato",
    image: tomato,
    waterRequirement: "600-800 mm",
    temperature: "18-25°C",
    npkValues: "N: 120, P: 80, K: 100",
    rainfall: "600-800 mm",
    soil: "Sandy loam soil",
    pH: "6.0-6.8",
    moistureLevel: "10-12%",
  },
];

const CropDatabase = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [soilWaterLevel, setSoilWaterLevel] = useState(0);

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
  };

  const fetchingData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data");
      const responsedata = await response.json();
      setSoilWaterLevel(responsedata.soilmoisture);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchingData();
    const interval = setInterval(fetchingData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <Header />

        <main className="px-4 py-6 md:px-8 lg:px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Crop Requirement Database
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {crops.map((crop) => (
              <div
                key={crop.name}
                onClick={() => handleCropSelect(crop)}
                className={`cursor-pointer rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 shadow-lg h-full max-w-2xl  text-white ${
                  selectedCrop?.name === crop.name
                    ? "ring-4 ring-green-500"
                    : ""
                }`}
              >
                <img
                  src={crop.image}
                  alt={crop.name}
                  className=" object-contain rounded-2xl"
                />
                <div className="p-4 text-gray-300 ">
                  <h3 className="text-xl text-white text-center font-semibold mb-2">
                    {crop.name}
                  </h3>
                  <div className="flex items-center  mb-1">
                    <Droplet className="h-5 w-5 mr-2" />
                    <span>Water Requirement : {crop.waterRequirement}</span>
                  </div>
                  <div className="flex items-center mb-1">
                    <Thermometer className="h-5 w-5 mr-2" />
                    <span>Temperature : {crop.temperature}</span>
                  </div>
                  <div className="flex items-center  mb-1">
                    <FlaskConical className="h-5 w-5 mr-2" />
                    <span>npk Values : {crop.npkValues}</span>
                  </div>
                  <div className="flex items-center  mb-1">
                    <CloudRain className="h-5 w-5 mr-2" />
                    <span>Rainfall : {crop.rainfall}</span>
                  </div>
                  <div className="flex items-center  mb-1">
                    <Leaf className="h-5 w-5 mr-2" />
                    <span>Soil : {crop.soil}</span>
                  </div>
                  <div className="flex items-center  mb-1">
                    <FlaskConical className="h-5 w-5 mr-2" />
                    <span>pH : {crop.pH}</span>
                  </div>
                  <div className="flex items-center ">
                    <Waves className="h-5 w-5 mr-2" />
                    <span>Moisture Level : {crop.moistureLevel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default CropDatabase;
