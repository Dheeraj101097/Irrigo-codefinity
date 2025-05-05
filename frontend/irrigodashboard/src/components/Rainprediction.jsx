// import React, { useState, useEffect } from "react";
// import {
//   Cloud,
//   CloudRain,
//   Sun,
//   CloudLightning,
//   CloudDrizzle,
// } from "lucide-react";
// import { fetchWeatherForecast } from "../pages/services/dataService";

// const RainPrediction = () => {
//   const [forecast, setForecast] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getForecast = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchWeatherForecast();
//         setForecast(data);
//       } catch (error) {
//         console.error("Error fetching weather forecast:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getForecast();
//   }, []);

//   const getWeatherIcon = (condition) => {
//     switch (condition.toLowerCase()) {
//       case "rain":
//         return <CloudRain className="h-8 w-8 text-blue-400" />;
//       case "clear":
//         return <Sun className="h-8 w-8 text-amber-400" />;
//       case "partly cloudy":
//         return <Cloud className="h-8 w-8 text-slate-400" />;
//       case "thunderstorm":
//         return <CloudLightning className="h-8 w-8 text-purple-400" />;
//       case "drizzle":
//         return <CloudDrizzle className="h-8 w-8 text-cyan-400" />;
//       default:
//         return <Cloud className="h-8 w-8 text-slate-400" />;
//     }
//   };

//   const getPrecipitationColor = (chance) => {
//     if (chance < 20) return "text-emerald-400";
//     if (chance < 50) return "text-amber-400";
//     return "text-blue-400";
//   };

//   return (
//     <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 shadow-md h-full">
//       <h3 className="text-xl font-semibold text-white mb-4">
//         Weather Forecast
//       </h3>

//       {loading ? (
//         <div className="flex justify-center items-center h-40">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       ) : (
//         <>
//           <div className="space-y-1 mb-4">
//             <div className="flex items-center justify-between">
//               <span className="text-slate-400">Next 24 hours:</span>
//               <span
//                 className={`text-sm font-medium ${getPrecipitationColor(
//                   forecast[0]?.rainChance || 0
//                 )}`}
//               >
//                 {forecast[0]?.rainChance}% chance of rain
//               </span>
//             </div>
//           </div>

//           <div className="grid grid-cols-4 gap-2">
//             {forecast.map((day, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center p-3 rounded-xl bg-slate-800/50 transition-transform hover:scale-105"
//               >
//                 <span className="text-sm text-slate-300 mb-2">{day.day}</span>
//                 {getWeatherIcon(day.condition)}
//                 <span className="mt-2 text-lg font-semibold">
//                   {day.temperature}°C
//                 </span>
//                 <span
//                   className={`text-xs mt-1 ${getPrecipitationColor(
//                     day.rainChance
//                   )}`}
//                 >
//                   {day.rainChance}%
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 text-xs text-slate-400">
//             Based on local weather data
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default RainPrediction;

//
//
//
// import React, { useState, useEffect } from "react";
// import {
//   Cloud,
//   CloudRain,
//   Sun,
//   CloudLightning,
//   CloudDrizzle,
//   Thermometer,
//   Droplets,
//   MapPin,
// } from "lucide-react";

// const API_KEY = "37e813d661d84461a53111553251602"; // Replace with your WeatherAPI key

// const RainPrediction = () => {
//   const [location, setLocation] = useState("Loading...");
//   const [temperature, setTemperature] = useState("--");
//   const [precipitation, setPrecipitation] = useState("--");
//   const [condition, setCondition] = useState("--");
//   const [icon, setIcon] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchWeather = (lat, lon) => {
//       const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=1&aqi=no&alerts=no`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setLocation(`${data.location.name}, ${data.location.region}`);
//           setTemperature(`${data.current.temp_c}`);
//           setPrecipitation(`${data.current.precip_mm}`);
//           setCondition(data.current.condition.text);
//           setIcon(`https:${data.current.condition.icon}`);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Failed to fetch weather:", err);
//           setLocation("Weather data unavailable.");
//           setLoading(false);
//         });
//     };

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           fetchWeather(position.coords.latitude, position.coords.longitude);
//         },
//         (err) => {
//           console.error("Geolocation error:", err);
//           setLocation("Location access denied.");
//           setLoading(false);
//         }
//       );
//     } else {
//       setLocation("Geolocation not supported.");
//       setLoading(false);
//     }
//   }, []);

//   const getWeatherIcon = (conditionText) => {
//     const text = conditionText.toLowerCase();
//     if (text.includes("rain"))
//       return <CloudRain className="h-8 w-8 text-blue-400" />;
//     if (text.includes("clear"))
//       return <Sun className="h-8 w-8 text-amber-400" />;
//     if (text.includes("thunder"))
//       return <CloudLightning className="h-8 w-8 text-purple-400" />;
//     if (text.includes("drizzle"))
//       return <CloudDrizzle className="h-8 w-8 text-cyan-400" />;
//     return <Cloud className="h-8 w-8 text-slate-400" />;
//   };

//   const getPrecipitationColor = (precip) => {
//     if (precip < 1) return "text-emerald-400";
//     if (precip < 5) return "text-amber-400";
//     return "text-blue-400";
//   };

//   return (
//     <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 shadow-md h-full max-w-md mx-auto">
//       <h3 className="text-xl font-semibold text-white mb-4">Current Weather</h3>

//       {loading ? (
//         <div className="flex justify-center items-center h-40">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       ) : (
//         <>
//           <div className="flex items-center gap-4 mb-4">
//             {getWeatherIcon(condition)}
//             <div className="text-white space-y-1">
//               <div className="flex items-center gap-1 text-sm text-slate-400">
//                 <MapPin className="h-4 w-4" /> {location}
//               </div>
//               <div className="text-lg font-medium">{condition}</div>
//             </div>
//             {icon && (
//               <img
//                 src={icon}
//                 alt="icon"
//                 className="h-10 w-10 ml-auto drop-shadow-md"
//               />
//             )}
//           </div>

//           <div className="grid grid-cols-2 gap-4 text-slate-200">
//             <div className="flex items-center gap-2">
//               <Thermometer className="h-5 w-5 text-red-400" />
//               <span className="text-sm">{temperature} °C</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Droplets className="h-5 w-5 text-blue-300" />
//               <span
//                 className={`text-sm ${getPrecipitationColor(
//                   Number(precipitation)
//                 )}`}
//               >
//                 {precipitation} mm
//               </span>
//             </div>
//           </div>

//           <div className="mt-6 text-xs text-slate-400">
//             Updated from real-time weather data
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default RainPrediction;

//
//
// 24 hrs
import React, { useState, useEffect } from "react";
import {
  Cloud,
  CloudRain,
  Sun,
  CloudLightning,
  CloudDrizzle,
  Thermometer,
  Droplets,
  MapPin,
  Clock,
} from "lucide-react";

const API_KEY = "37e813d661d84461a53111553251602"; // 🔑 Replace with your actual WeatherAPI key

const RainPrediction = () => {
  const [location, setLocation] = useState("Loading...");
  const [temperature, setTemperature] = useState("--");
  const [precipitation, setPrecipitation] = useState("--");
  const [condition, setCondition] = useState("--");
  const [icon, setIcon] = useState("");
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = (lat, lon) => {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=1&aqi=no&alerts=no`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setLocation(`${data.location.name}, ${data.location.region}`);
          setTemperature(`${data.current.temp_c}`);
          setPrecipitation(`${data.current.precip_mm}`);
          setCondition(data.current.condition.text);
          setIcon(`https:${data.current.condition.icon}`);

          // Get current hour and next 8 hours forecast
          const currentHour = new Date().getHours();
          const nextHours = data.forecast.forecastday[0].hour.slice(
            currentHour,
            currentHour + 8
          );
          setHourlyForecast(nextHours);

          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch weather:", err);
          setLocation("Weather data unavailable.");
          setLoading(false);
        });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.error("Geolocation error:", err);
          setLocation("Location access denied.");
          setLoading(false);
        }
      );
    } else {
      setLocation("Geolocation not supported.");
      setLoading(false);
    }
  }, []);

  const getWeatherIcon = (conditionText) => {
    const text = conditionText.toLowerCase();
    if (text.includes("rain"))
      return <CloudRain className="h-6 w-6 text-blue-400" />;
    if (text.includes("clear"))
      return <Sun className="h-6 w-6 text-amber-400" />;
    if (text.includes("thunder"))
      return <CloudLightning className="h-6 w-6 text-purple-400" />;
    if (text.includes("drizzle"))
      return <CloudDrizzle className="h-6 w-6 text-cyan-400" />;
    return <Cloud className="h-6 w-6 text-slate-400" />;
  };

  const getPrecipitationColor = (precip) => {
    if (precip < 1) return "text-emerald-400";
    if (precip < 5) return "text-amber-400";
    return "text-blue-400";
  };

  const formatHour = (timeString) => {
    const date = new Date(timeString);
    return `${date.getHours()}:00`;
  };

  return (
    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 shadow-md h-full max-w-2xl mx-auto text-white">
      <h3 className="text-xl font-semibold mb-4">Current Weather</h3>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {/* Current Weather Block */}
          <div className="flex items-center gap-4 mb-6">
            {getWeatherIcon(condition)}
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm text-slate-400">
                <MapPin className="h-4 w-4" /> {location}
              </div>
              <div className="text-lg font-medium">{condition}</div>
            </div>
            {icon && (
              <img src={icon} alt="icon" className="h-10 w-10 ml-auto" />
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 text-slate-200 mb-6">
            <div className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-red-400" />
              <span className="text-sm">{temperature} °C</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-blue-300" />
              <span
                className={`text-sm ${getPrecipitationColor(
                  Number(precipitation)
                )}`}
              >
                {precipitation} mm
              </span>
            </div>
          </div>

          {/* Hourly Forecast Grid */}
          <h4 className="text-md font-medium mb-2 flex items-center gap-1">
            <Clock className="h-4 w-4 text-slate-300" /> Next 8 Hours Forecast
          </h4>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {hourlyForecast.map((hour, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 rounded-xl bg-slate-800/50"
              >
                <span className="text-xs text-slate-300 mb-1">
                  {formatHour(hour.time)}
                </span>
                {getWeatherIcon(hour.condition.text)}
                <span className="text-sm font-medium mt-1">
                  {hour.temp_c}°C
                </span>
                <span
                  className={`text-xs ${getPrecipitationColor(hour.precip_mm)}`}
                >
                  {hour.precip_mm} mm
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-slate-400">
            Data sourced from WeatherAPI (real-time + forecast)
          </div>
        </>
      )}
    </div>
  );
};

export default RainPrediction;
