import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import logo from "../src/assests/logo.png";
import service from "../src/assests/service.png";
import co2 from "../src/assests/co2gif.gif";
import tree from "../src/assests/treegif.gif";
import water from "../src/assests/watergif1.gif";
import wind from "../src/assests/windgif1.gif";

function Login({ }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [TodayWindGeneration, setTodayWindGeneration] = useState(7.76);
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
      setImages(response.data); // Assuming your backend returns an array of image objects
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  const handleRemoveImage = async (imageId) => {
    try {
      await axios.delete(`http://localhost:5000/images/${imageId}`);
      // Update images state after successful deletion
      setImages(images.filter((image) => image._id !== imageId));
      console.log(`Image with ID ${imageId} removed successfully.`);
    } catch (error) {
      console.error(`Error removing image with ID ${imageId}:`, error);
    }
  };

  useEffect(() => {
    // Calculate CO2 Value based on TodayWindGeneration
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
    // Store email in session storage
    sessionStorage.setItem('email', email);
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
      <section className="loginbg">
        <div className="container-fluid">
          <div className="row d-flex justify-content-between  shadow  border bg-light  borderbottom">
            <div className="col-md-3">
              <img src={logo} className="img-fluid" />
            </div>
            <div className="col-md-3">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-3 text-center">
                  <img src={service} className="img-fluid" />
                </div>
                <div className="col-md-6 mt-3 text-center">
                  <p className="fw-bold">
                    <i class="fa fa-phone"></i> 0422 661 9579
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 col-sm-12  shadow rounded mt-4">
              <h1
                class=" display-6 fw-semibold  text-center"
                style={{ color: "#289b2c" }}
              >
                Care For Earth?{" "}
                <i class="fa fa-globe shadow p-1 rounded-circle"></i>
              </h1>
              <div className="row  d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="row d-flex align-items-center justify-content-center mt-2">
                    <div className="col-3">
                      <img src={co2} className="img-fluid" />
                    </div>
                    <div className="col-4 text-center">
                      <h4>{targetco2}</h4>
                      <small style={{ fontSize: "14px" }}>Metric Tons</small>
                    </div>
                  </div>

                  <div className="row d-flex align-items-center justify-content-center mt-3">
                    <div className="col-3">
                      <img src={water} className="img-fluid" />
                    </div>
                    <div className="col-4 mx-1 text-center">
                      <h3>{watervalue}</h3>
                      <small style={{ fontSize: "14px" }}>Litres</small>
                    </div>
                  </div>

                  <div className="row d-flex align-items-center justify-content-center mt-3">
                    <div className="col-3">
                      <img src={tree} className="img-fluid" />
                    </div>
                    <div className="col-4 mx-1 text-center">
                      <h3>{treeValue}</h3>
                      <small style={{ fontSize: "14px" }}>Lakh Trees</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-4">
                  <div className="row d-flex justify-content-center align-items-center shadow bg-light rounded p-1">
                    <div className="col-6">
                      <img className="img-fluid" src={wind} />
                    </div>
                    <div className="col-6">
                      <h3 className="fs-4">{TodayWindGeneration} MU</h3>
                      <p className="fs-5">August 13</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-10 col-lg-4 mt-4 mx-auto">
              <div class="card mb-0 ">
                <div class="card-body p-3">
                  <h6 class="border-bottom pb-3">Proceed to Login</h6>

                  <form onSubmit={handleLogin}>
                    <label for="formEmail" class="form-label text-muted">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email..."
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />

                    <label
                      for="formPassword"
                      class="form-label text-muted fs-14 mt-4"
                    >
                      Password <span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password..."
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control "
                      required
                    />
                    <div className="text-center mt-2">
                      <button
                        type="submit"
                        className="btn btnbg text-white px-4 shadow-sm rounded-pill"
                      >
                        Login <i className="fa fa-sign-in"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly align-items-center mt-3">
            <div className="col-md-3 text-center mt-2">
              <div className="card border-0 rounded">
                <img
                  src={
                    "https://images.pexels.com/photos/1635332/pexels-photo-1635332.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  className="card-img-top rounded imgs shadow"
                  alt="Wind Forecast"
                />
                <h4 className="fs-5 p-1">Wind Forecast</h4>
              </div>
            </div>
            <div className="col-md-5   mt-2">
              <div className="row d-flex justify-content-center align-items-center">
                <div id="carouselExampleControls" className="carousel slide">
                  <div className="carousel-inner">
                    {images.map((image, index) => (
                      <div
                        key={image._id}
                        className={`carousel-item ${index === 0 ? "active" : ""
                          }`}
                      >
                        <button
                          className="border-0 rounded"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalimg"
                        >
                          <div
                            id="carouselExampleControls"
                            className="carousel slide"
                          >
                            <div className="carousel-inner">
                              {images.map((image, index) => (
                                <div
                                  key={image._id}
                                  className={`carousel-item ${index === 0 ? "active" : ""
                                    }`}
                                >
                                  <img
                                    src={`http://localhost:5000/uploads/${image.filename}`}
                                    className="d-block w-100 img-fluid rounded"
                                    alt={image.originalname}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </button>
                        <div
                          class="modal fade"
                          id="exampleModalimg"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                              <div class="modal-header border-0">
                                <button
                                  type="button"
                                  class="btn-close border"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div className="row d-flex justify-content-center">
                                  <div className="col-md-12">
                                    <img
                                      src={`http://localhost:5000/uploads/${image.filename}`}
                                      className="d-block w-100 img-fluid rounded"
                                      alt={image.originalname}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {email === "admin@gmail.com" && (
                          <div className="carousel-caption d-none d-md-block">
                            <button
                              className="btn btn-danger"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevents the modal from opening
                                handleRemoveImage(image._id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center mt-2">
              <div className="card border-0 rounded">
                <img
                  src={
                    "https://images.pexels.com/photos/19895880/pexels-photo-19895880/free-photo-of-man-standing-among-solar-panels.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  className="card-img-top rounded imgs shadow"
                  alt="Solar Forecast"
                />

                <h4 className="fs-5 p-1">Solar Forecast</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Login;
