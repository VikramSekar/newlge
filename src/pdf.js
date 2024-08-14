import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import co2 from "../src/assests/co2gif.gif";
import tree from "../src/assests/treegif.gif";
import water from "../src/assests/watergif1.gif";
import wind from "../src/assests/windgif1.gif";
import event from "../src/assests/loginpageimage.jpg";

import Header from './Header'

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedinIn,
} from "react-icons/fa";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [TodayWindGeneration, setTodayWindGeneration] = useState(30.04);
  const [targetco2, setCo2Value] = useState(0);
  const [watervalue, setWaterValue] = useState(0);
  const [treeValue, setTreeValue] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/images");
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleRemoveImage = async (imageId) => {
    try {
      await axios.delete(`http://localhost:5000/images/${imageId}`);
      setImages(images.filter((image) => image._id !== imageId));
      console.log(`Image with ID ${imageId} removed successfully.`);
    } catch (error) {
      console.error(`Error removing image with ID ${imageId}:`, error);
    }
  };

  useEffect(() => {
    const calculatedTargetCo2 = Math.round(TodayWindGeneration * 100 * 0.9328);
    const calculatedTargettree = (calculatedTargetCo2 / 0.022 / 100000).toFixed(
      2
    );
    const calculatedTargetwater = TodayWindGeneration * 1000 * 0.004;

    setCo2Value(calculatedTargetCo2);
    setWaterValue(calculatedTargetwater);
    setTreeValue(calculatedTargettree);
  }, [TodayWindGeneration]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Enter a valid Email address.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      navigate("/Dashboard", { state: { email } });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (

    <>
      <Container fluid className=" overflow-hidden shadow rounded min-vh-100">
        <Row className="d-flex justify-content-evenly align-items-center">
          <Col
            md="4"
            className="shadow-sm rounded  mt-2"
            style={{ backgroundColor: "#eafaf1" }} // Light green background
          >
            <h3
              className="display-7  text-center mt-2"
              style={{ color: "#289b2c" }}
            >
              Care For Earth?{" "}
              <i className="fa fa-globe shadow p-1 rounded-circle "></i>
            </h3>
            <div className="row d-flex align-items-center justify-content-evenly">
              <div className="col-3 text-center">
                <img src={co2} className="img-fluid rounded" alt="CO2" />
                <h4 className="fs-5">{targetco2}</h4>
                <small style={{ fontSize: "14px" }}>Metric Tons</small>
              </div>
              <div className="col-3 text-center">
                <img src={water} className="img-fluid rounded" alt="Water" />
                <h4 className="fs-5">{watervalue}</h4>
                <small style={{ fontSize: "14px" }}>Litres</small>
              </div>
              <div className="col-3 text-center">
                <img src={tree} className="img-fluid rounded" alt="Trees" />
                <h4 className="fs-5">{treeValue}</h4>
                <small style={{ fontSize: "14px" }}>Lakh Trees</small>
              </div>
            </div>
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "#eafaf1" }}
            >
              <div className="col-4 text-center">
                <img className="img-fluid rounded" src={wind} alt="Wind" />
                <h3 className="fs-5">30.4 MU</h3>
                <p className="fs-6">August 8th</p>
              </div>
            </div>
            <div>
            </div>
            {/* <div className="col-md-8 mb-2 mx-auto">
              <div className="card">
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://images.pexels.com/photos/1635332/pexels-photo-1635332.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100 rounded" alt="Wind Forecast" />
                      <div className="carousel-caption d-none d-md-block text-center">
                        <h5 className="border rounded shadow-sm">Wind Forecast</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.pexels.com/photos/19895880/pexels-photo-19895880/free-photo-of-man-standing-among-solar-panels.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100 rounded" alt="Solar Forecast" />
                      <div className="carousel-caption d-none d-md-block text-center">
                      <h5 className="border rounded shadow-sm">Solar Forecast</h5>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-footer text-center p-1">
                  <h5 className="fs-5">Our Services</h5>
                </div>
              </div>

            </div> */}
          </Col>

          <Col md="3" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-lg"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#d4edda",
                top: "10%",
                left: "10%",
              }}
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-lg"
              style={{
                width: "300px",
                height: "300px",
                backgroundColor: "#d4edda",
                top: "50%",
                left: "30%",
              }}
            ></div>

            <Card className="my-5 shadow rounded">
              <Card.Body className="p-4">
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="form3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="form4"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  className="w-100 mb-4 shadow"
                  size="lg"
                  style={{
                    backgroundColor: "#28a745",
                    borderColor: "#28a745",
                  }}
                  onClick={handleLogin}
                >
                  Login
                </Button>

                <div className="text-center">
                  <Button
                    variant="link"
                    className=" fs-3 mx-2 mt-2 border rounded-circle"
                    style={{ color: "#1266f1" }}
                  >
                    <FaFacebookSquare />
                  </Button>

                  <Button
                    variant="link"
                    className="fs-3 mx-2 mt-2 border rounded-circle"
                    style={{ color: "#1da1f2" }}
                  >
                    <FaTwitterSquare />
                  </Button>

                  <Button
                    variant="link"
                    className="fs-3 mx-2 mt-2 border rounded-circle"
                    style={{ color: "#db4437" }}
                  >
                    <FaYoutubeSquare />
                  </Button>

                  <Button
                    variant="link"
                    className="fs-3 mx-2 mt-2 border rounded-circle"
                    style={{ color: "#0077b5" }}
                  >
                    <FaLinkedinIn />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>






      </Container >
    </>
  );
}

export default App;




