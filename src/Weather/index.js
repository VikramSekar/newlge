import React, { useState, useCallback, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import wind from "../assests/windgif1.gif";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet"; // Import leaflet for custom icons

// Your OpenWeatherMap API key
const apiKey = "ce930efe13c2004e0ed78c0dd6021edd";

// Tamil Nadu boundaries (approximate)
const tamilNaduBounds = [
  [8.0, 76.0], // Southwest coordinates
  [13.8, 82.0], // Northeast coordinates
];

// Important locations with their coordinates
const importantLocations = [
  { name: "Panapatty", lat: 10.87887, lon: 77.10186 },
  { name: "Kundadam", lat: 10.85209, lon: 77.44551 },
  { name: "Elavanthy", lat: 10.92516, lon: 77.31108 },
  { name: "Udumalpet", lat: 10.60036, lon: 77.28435 },
  { name: "Moolanur", lat: 10.79824, lon: 77.70738 },
  { name: "Sellakkarichal", lat: 10.95219, lon: 77.17076 },
  { name: "Tultaripalayam", lat: 11.08256, lon: 77.16996 },
  { name: "Kandamanur", lat: 9.91785, lon: 77.51351 },
  { name: "Thevaram", lat: 9.89187, lon: 77.29016 },
  { name: "Keelaveeranam", lat: 8.92591, lon: 77.58313 },
  { name: "Amuthapuram", lat: 9.06178, lon: 77.54503 },
  { name: "Surandai", lat: 8.97895, lon: 77.44438 },
  { name: "Veerasigamani", lat: 9.08881, lon: 77.43633 },
  { name: "Udayathoor", lat: 8.3097, lon: 77.70884 },
  { name: "Sankaneri", lat: 8.2069, lon: 77.67831 },
  { name: "Radhapuram", lat: 8.26182, lon: 77.67767 },
];

// Custom hook to handle map events
const MapEvents = ({ onHover }) => {
  useMapEvents({
    mousemove: (event) => {
      const { lat, lng } = event.latlng;
      onHover(lat, lng);
    },
  });
  return null;
};

// Create a custom icon
const locationIcon = new L.Icon({
  iconUrl: wind,
  iconSize: [40, 40], // size of the icon
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});

const InteractiveWeatherMap = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [position, setPosition] = useState([11.1271, 78.6569]); // Center of Tamil Nadu
  const [currentDateTime, setCurrentDateTime] = useState(
    formatDateTime(new Date())
  );
  const [city, setCity] = useState("");

  const fetchWeatherData = useCallback(async (lat, lon) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );

      // Extract next 24 hours forecast (8 entries, each representing 3 hours)
      const next24HoursForecast = forecastResponse.data.list
        .slice(0, 8)
        .map((entry) => ({
          time: entry.dt_txt,
          temperature: entry.main.temp,
          windSpeed: entry.wind.speed,
          windGust: entry.wind.gust || "N/A",
          rainfall: entry.rain ? entry.rain["1h"] : 0,
          weather: entry.weather[0].description,
        }));

      setWeatherInfo({
        temperature: weatherResponse.data.main.temp,
        windSpeed: (weatherResponse.data.wind.speed + 1).toFixed(2),
        windGust: (weatherResponse.data.wind.gust + 1.5).toFixed(2) || "N/A",
        rainfall: weatherResponse.data.rain
          ? weatherResponse.data.rain["1h"]
          : 0,
      });

      setPosition([lat, lon]);
      setCity(weatherResponse.data.name);
      setCurrentDateTime(formatDateTime(new Date()));
      setForecastData(next24HoursForecast);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }, []);

  useEffect(() => {
    // Fetch weather data for Tamil Nadu center on mount
    fetchWeatherData(11.1271, 78.6569);

    // Update date and time every minute
    const interval = setInterval(() => {
      setCurrentDateTime(formatDateTime(new Date()));
    }, 60000); // 60000 ms = 1 minute

    return () => clearInterval(interval); // Clean up on component unmount
  }, [fetchWeatherData]);

  return (
    <>
      <Header />

      <section className="min-vh-100">
        <div className="container-fluid">
          <div className="row d-flex justify-content-evenly align-items-center">
            <div className="col-lg-5 col-sm-12 mt-2 shadow-sm rounded">
              <MapContainer
                center={[11.1271, 78.6569]} // Center of Tamil Nadu
                zoom={6} // Adjust zoom level to fit Tamil Nadu
                style={{ width: "100%", height: "85vh", cursor: 'pointer' }} // Adjust height as needed
                bounds={tamilNaduBounds} // Limit the map bounds to Tamil Nadu
                maxBounds={tamilNaduBounds} // Prevent panning outside Tamil Nadu
                maxBoundsViscosity={1.0} // Make sure the map doesn't go outside bounds
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapEvents onHover={fetchWeatherData} />

                {weatherInfo && (

                  <Tooltip
                    direction="top"
                    offset={[0, -10]}
                    opacity={1}
                    className="weather-tooltip"
                  >
                    <div className="tooltip-content text-center p-2">
                      <h5 className="text-success display-7">
                        Weather Info {city}
                      </h5>
                      <p className="fs-5 ">{currentDateTime}</p>
                      <table className="table table-bordered mt-3">
                        <thead>
                          <tr>
                            <th className="text-danger">Parameter</th>
                            <th className="text-danger">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Rainfall</td>
                            <td>{weatherInfo.rainfall} mm</td>
                          </tr>
                          <tr>
                            <td>Temperature</td>
                            <td>{weatherInfo.temperature} °C</td>
                          </tr>
                          <tr>
                            <td>Wind Speed</td>
                            <td>{weatherInfo.windSpeed} m/s</td>
                          </tr>
                          <tr>
                            <td>Wind Gust</td>
                            <td>{weatherInfo.windGust} m/s</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tooltip>
                )}
                {/* Add markers for important locations */}
                {importantLocations.map((location, index) => (
                  <Marker
                    key={index}
                    position={[location.lat, location.lon]}
                    icon={locationIcon}
                  >
                    <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                      <div className="text-center">
                        <strong>{location.name}</strong>
                      </div>
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="col-lg-6 col-sm-12 mt-2 p-2">
              <div
                className="weather-info text-center p-1 rounded mt-2"
                style={{ background: "#e6f7e6" }}
              >
                <h5 className="text-success">Weather Info {city}</h5>
                <p className="fs-5">{currentDateTime}</p>
                {weatherInfo ? (
                  <table className="table table-bordered mt-3 table-success">
                    <thead>
                      <tr>
                        <th className="text-danger">Parameter</th>
                        <th className="text-danger">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Rainfall</td>
                        <td>{weatherInfo.rainfall} mm</td>
                      </tr>
                      <tr>
                        <td>Temperature</td>
                        <td>{weatherInfo.temperature} °C</td>
                      </tr>
                      <tr>
                        <td>Wind Speed</td>
                        <td>{weatherInfo.windSpeed} m/s</td>
                      </tr>
                      <tr>
                        <td>Wind Gust</td>
                        <td>{weatherInfo.windGust} m/s</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p>No weather information available</p>
                )}
              </div>

              <div
                className="forecast-info text-center p-1 rounded mt-2"
                style={{ background: "#e6f7e6" }}
              >
                <h5 className="text-success">Next 24 Hours Forecast {city}</h5>
                {forecastData.length > 0 ? (
                  <table className="table table-bordered mt-3 table-warning">
                    <thead>
                      <tr>
                        <th className="text-danger">Time</th>
                        <th className="text-danger">Temperature</th>
                        <th className="text-danger">Wind Speed</th>
                        <th className="text-danger">Wind Gust</th>
                        <th className="text-danger">Rainfall</th>
                        <th className="text-danger">Weather</th>
                      </tr>
                    </thead>
                    <tbody>
                      {forecastData.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.time}</td>
                          <td>{entry.temperature} °C</td>
                          <td>{entry.windSpeed} m/s</td>
                          <td>{entry.windGust} m/s</td>
                          <td>{entry.rainfall} mm</td>
                          <td>{entry.weather}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No forecast information available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

// Helper function to format date and time
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const formatDateTime = (date) => {
  const formattedDate = formatDate(date);
  const time = date.toLocaleTimeString(); // Use the locale time string for the time portion
  return `${formattedDate} ${time}`;
};

export default InteractiveWeatherMap;
