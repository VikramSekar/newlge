import React from "react";
import "../App.css";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userlogo from '../../src/assests/userlogo.png';
import junepdf from "../../src/assests/JuneReport.pdf";
import wind from "../../src/assests/windgif1.gif";
import { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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


const Dashboard = ({ }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [raindata, setRaindata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    // Perform any necessary cleanup here, such as removing authentication tokens
    localStorage.removeItem("authToken"); // Example token removal
    navigate("/"); // Redirect to the login page or home page
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await Promise.all(
          importantLocations.map(async (location) => {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=dc044b3eab55cd318b327b44c8d783a9&units=metric`
            );
            return {
              name: location.name,
              windSpeed: response.data.wind.speed,
            };
          })
        );
        setData(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/rainfall')
      .then(response => {
        setRaindata(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const location = useLocation();
  const { email } = location.state || {}; // Get email from state


  return (
    <>
      <Header />

      <section className="dashboardbg">
        <div className="container-fluid">
          <div className="row d-flex justify-content-end shadow bg-light align-items-center p-1  borderbottom">
            <div className="col-md-3 mt-2 text-center d-md-flex justify-content-evenly align-items-center">
              <h5 className="fs-6">
                <i class="fa fa-user fa-2x text-success"></i> {email}
              </h5>

              {email && (
                <button
                  className="btn btn-outline-danger mb-2"
                  onClick={handleLogout}
                >
                  Logout <i className="fa fa-sign-out"></i>
                </button>
              )}
            </div>
          </div>

          <div className="row d-flex justify-content-evenly mt-3 p-3">
            <div className="col-lg-7 col-sm-12">
              <legend class="text-muted">Tamilnadu Rain-Fall</legend>
              <div className="table-responsive-sm">
                <table className="table table-bordered text-center p-0">
                  <thead className="bg-teal text-white">
                    <tr>
                      <th>Year</th>
                      <th>Rain (in MM)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    {raindata.map(row => (
                      <tr key={row.year}>
                        <td className="p-1">{row.year}</td>
                        <td className="p-1">{row.rain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ResponsiveContainer className="mt-3" width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="windSpeed" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="col-md-3">
              <h5 className="fs-5 text-center">Customer Details</h5>
              <div className="card mb-3 text-center mt-3 shadow-sm bordergreen lightbg">
                <div className="card-body border-bottom">
                  <img src={userlogo} className="img-fluid rounded-circle border border-2 border-success p-1 shadow-sm mb-2" alt="User Logo" style={{ width: '60px', height: '60px' }} />
                  <h5 className="card-title fs-6 text-dark">Name: <span className="text-uppercase">Vikram</span></h5>
                  <p className="card-text text-muted">Customer Payment Status</p>
                </div>
                <div className="card-body border-bottom">
                  <img src={wind} className="img-fluid rounded-circle mb-2" alt="Wind Image" style={{ width: '100px', height: '100px' }} />
                  <h5 className="fs-5">30 Mega Watts</h5>
                </div>
                <div className="card-body border-bottom">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="fs-6 p-2">Total Payment</h4>
                      <h5 className="fs-5 p-2">10,000</h5>
                    </div>
                    <div className="col-md-6">
                      <h4 className="fs-6 p-2">Balance Pay</h4>
                      <h5 className="fs-5 p-2">5,000</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <a href={junepdf} className="btn btn-outline-success " download>
                    Download Invoice
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Dashboard;
