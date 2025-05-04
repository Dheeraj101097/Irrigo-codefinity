import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Automatically register all chart components
import { Link } from "react-router-dom";

const mockFetchData = () => {
  const generateRandomValue = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    temperature: generateRandomValue(22, 32),
    humidity: generateRandomValue(70, 95),
    soilmoisture: generateRandomValue(40, 70),
  };
};

const DashboardSection = () => {
  const [data, setData] = useState({
    temperature: 27,
    humidity: 88,
    soilmoisture: 56,
  });

  const [historicalData, setHistoricalData] = useState({
    temperatureData: [25, 26, 27, 28, 27, 26, 27],
    moistureData: [50, 52, 55, 56, 54, 53, 56],
    timestamps: Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setHours(date.getHours() - (6 - i));
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }),
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fetchingData = async () => {
    try {
      const responsedata = mockFetchData();

      setData(responsedata);

      setHistoricalData((prev) => {
        const newTimestamps = [
          ...prev.timestamps,
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        ];
        const newTemperatureData = [
          ...prev.temperatureData,
          responsedata.temperature,
        ];
        const newMoistureData = [
          ...prev.moistureData,
          responsedata.soilmoisture,
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
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchingData();
    const interval = setInterval(fetchingData, 5000);
    return () => clearInterval(interval);
  }, []);

  const realTimeTemperatureChartData = {
    labels: historicalData.timestamps,
    datasets: [
      {
        label: "Temperature (°C)",
        data: historicalData.temperatureData,
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.4,
      },
    ],
  };

  const realTimeMoistureChartData = {
    labels: historicalData.timestamps,
    datasets: [
      {
        label: "Soil Moisture (%)",
        data: historicalData.moistureData,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            Your <span className="text-primary">Smart Dashboard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subheading"
          >
            Monitor your fields in real-time with our intuitive dashboard. Track
            soil moisture, temperature, and more from anywhere.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 rounded-xl p-6 shadow-lg"
        >
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="font-bold text-xl text-blue-800 mb-2">
                  Soil Moisture
                </h3>
                <p className="text-3xl font-bold text-blue-600">
                  {data.soilmoisture}%
                </p>
                <p className="text-sm text-blue-800 mt-2">
                  {data.soilmoisture < 45
                    ? "Low - Watering Needed"
                    : data.soilmoisture > 65
                    ? "High - Reduce Watering"
                    : "Optimal Level"}
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-4">
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="font-bold text-xl text-yellow-800 mb-2">
                  Humidity
                </h3>
                <p className="text-3xl font-bold text-yellow-600">
                  {data.humidity}%
                </p>
                <p className="text-sm text-yellow-800 mt-2">
                  {data.humidity < 70
                    ? "Low Humidity"
                    : data.humidity > 90
                    ? "High Humidity"
                    : "Normal Range"}
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-4">
              <div className="bg-red-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="font-bold text-xl text-red-800 mb-2">
                  Temperature
                </h3>
                <p className="text-3xl font-bold text-red-600">
                  {data.temperature}°C
                </p>
                <p className="text-sm text-red-800 mt-2">
                  {data.temperature < 25
                    ? "Cool"
                    : data.temperature > 30
                    ? "Heat Warning"
                    : "Optimal Range"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold my-4 text-gray-800">
                Real-Time Temperature
              </h3>
              <Line
                data={realTimeTemperatureChartData}
                options={chartOptions}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold my-4 text-gray-800">
                Real-Time Soil Moisture
              </h3>
              <Line data={realTimeMoistureChartData} options={chartOptions} />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to={"/dashboard"}
              className="btn-primary inline-flex items-center"
            >
              Get Full Access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
