import React from "react";
import "../App.css";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";












// Define the chatbot theme with green colors
const theme = {
  background: '#eafaf1', // Light green background
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#4caf50', // Dark green header
  headerFontColor: '#fff', // White font color for the header
  headerFontSize: '15px',
  botBubbleColor: '#4caf50', // Dark green bubbles for the bot
  botFontColor: '#fff', // White font color for the bot bubbles
  userBubbleColor: '#fff', // White bubbles for the user
  userFontColor: '#4a4a4a', // Dark gray font color for the user bubbles
};



const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform any necessary cleanup here, such as removing authentication tokens
    localStorage.removeItem("authToken"); // Example token removal
    navigate("/"); // Redirect to the login page or home page
  };
  const data = [
    { name: "Jan", uv: 4000, pv: 2400 },
    { name: "Feb", uv: 3000, pv: 1398 },
    { name: "Mar", uv: 2000, pv: 9800 },
    { name: "Apr", uv: 2780, pv: 3908 },
    { name: "May", uv: 1890, pv: 4800 },
    { name: "Jun", uv: 2390, pv: 3800 },
    { name: "Jul", uv: 3490, pv: 4300 },
  ];

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

          <div className="row d-flex justify-content-start mt-3 p-3">
            <div className="col-md-6">
              <legend class="text-muted">Tamilnadu Forecast Data</legend>
              <div className="table-responsive-sm">
                <table class="table table-striped border text-center">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="bg-success">
                        1
                      </th>
                      <td class="bg-info">Item A</td>
                      <td class="bg-warning">10</td>
                      <td class="bg-danger">5.00</td>
                      <td class="bg-success">50.00</td>
                    </tr>
                    <tr class="highlightrow">
                      <th scope="row" class="bg-success">
                        2
                      </th>
                      <td class="bg-info">Item B</td>
                      <td class="bg-warning">5</td>
                      <td class="bg-danger">10.00</td>
                      <td class="bg-success">50.00</td>
                    </tr>
                    <tr>
                      <th scope="row" class="bg-success">
                        3
                      </th>
                      <td class="bg-info">Item C</td>
                      <td class="bg-warning">8</td>
                      <td class="bg-danger">7.50</td>
                      <td class="bg-success">60.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <h5>Color Legend</h5>
              <table class="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bg-success text-white">Green</td>
                    <td>Tree Count</td>
                  </tr>
                  <tr>
                    <td class="bg-info text-white">Blue</td>
                    <td>Item Name</td>
                  </tr>
                  <tr>
                    <td class="bg-warning text-dark">Yellow</td>
                    <td>Quantity</td>
                  </tr>
                  <tr>
                    <td class="bg-danger text-white">Red</td>
                    <td>Price</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
          <div className="row d-flex justify-content-start">
            <div className="col-md-8 mt-5">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;