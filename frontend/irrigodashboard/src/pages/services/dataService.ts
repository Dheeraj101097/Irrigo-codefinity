import { DashboardData, WeatherForecast } from '../types';

// Mock data for demonstration purposes
export const fetchDashboardData = async (): Promise<DashboardData> => {
  // In a real app, you would fetch from an API instead of this mock
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data with some randomization
  return {
    soilMoisture: Math.floor(Math.random() * 60) + 20, // 20-80%
    pumpStatus: Math.random() > 0.5 ? 'On' : 'Off',
    waterRequired: parseFloat((Math.random() * 40 + 10).toFixed(1)), // 10-50 liters
    temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
  };
};

export const fetchWeatherForecast = async (): Promise<WeatherForecast[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  const conditions = ['Clear', 'Partly Cloudy', 'Rain', 'Drizzle', 'Thunderstorm'];
  const days = ['Today', 'Tomorrow', 'Wed', 'Thu'];
  
  // Generate mock forecast data
  return days.map((day) => {
    const conditionIndex = Math.floor(Math.random() * conditions.length);
    const isRainy = conditions[conditionIndex].toLowerCase().includes('rain') || 
                   conditions[conditionIndex].toLowerCase().includes('drizzle') ||
                   conditions[conditionIndex].toLowerCase().includes('thunder');
    
    return {
      day,
      temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
      condition: conditions[conditionIndex],
      rainChance: isRainy ? Math.floor(Math.random() * 40) + 60 : Math.floor(Math.random() * 30), // Higher chance if rainy condition
    };
  });
};