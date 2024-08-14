import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import award1 from "../assests/iwef2024original.png";
import award1original from "../assests/iwef2024award.jpg";
import award2original from "../assests/iwef2023award.jpg";
import award3original from "../assests/iwef2021award.jpg";
import award4original from "../assests/iwef2020original.png";
import award5original from "../assests/iwef2019award.jpg";

import award2 from "../assests/iwef2023original.png";
import award3 from "../assests/iwef2021original.png";
import award4 from "../assests/iwef2020original.png";
import award5 from "../assests/iwef2019.jpg";

import awardleft from "../assests/ppt2.png";
import awardcenter from "../assests/ppt1.png";
import iwpaaward2021 from "../assests/iwpa2021award.jpg";
import awardright from "../assests/isgf 2022.png";
import isgfaward2022 from "../assests/isgf2022award.jpg";
import digitalaward from "../assests/digital week 2020.png";

function Awards() {
  return (
    <>
      <Header />
      <section className="awardsbg">
        <div className="container">
          <div className="row d-flex justify-content-evenly align-items-center p-1">
            <h3 className="display-7 text-center mt-3 font-weight-semibold">
              INDIA WIND ENERGY FORUM AWARDS
            </h3>
            <div className="col-md-2 shadow bordergreen rounded text-center card mt-2">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                <img src={award1} className=" rounded mt-2 image1" />
                <h4 className="fs-5 font-weight-semibold mt-2 bg-light rounded border p-1">
                  2024
                </h4>
              </button>
              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header border-0 d-flex align-items-center">
                      <h3 className="fs-6 font-weight-semibold">
                        INDIA WIND ENERGY FORUM AWARDS - 2024
                      </h3>
                      <button
                        type="button "
                        class="btn-close border border-secondary shadow-sm"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body p-1">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-12 text-center">
                          <img
                            src={award1original}
                            className="img-fluid rounded"
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center m-1 rounded  content-container">
                        <div className="col-md-10 text-center ">
                          <h5 className="color fs-5 mt-3">
                            Digital Technology of the Year
                          </h5>
                          <h5 className="fs-6">
                            {" "}
                            Wind Energy Forecasting & Scheduling
                          </h5>

                          <p className="mt-3 fs-6">
                            <span>Leap Green Energy</span> has been honored with
                            the prestigious{" "}
                            <span className="">
                              Digital Technology of the Year
                            </span>{" "}
                            award in the category of Wind Energy Forecasting &
                            Scheduling at the India Wind Energy Forum Leadership
                            Awards on May 22, 2024.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 shadow-sm bordergreen rounded text-center card mt-2">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                <img src={award2} className="img-fluid mt-2 image1" />
                <h4 className="fs-5 font-weight-semibold mt-2 bg-light rounded border p-1">
                  2023
                </h4>
              </button>
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header border-0 d-flex align-items-center">
                      <h3 className="fs-6 font-weight-semibold">
                        INDIA WIND ENERGY FORUM AWARDS - 2023
                      </h3>
                      <button
                        type="button "
                        class="btn-close border border-secondary shadow-sm"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body p-1 ">
                      <div className="row d-flex justify-content-center ">
                        <div className="col-md-12 text-center">
                          <img
                            src={award2original}
                            className="img-fluid rounded"
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center bg-light m-1 content-container">
                        <div className="col-md-10 text-center">
                          <h5 className="color fs-5 mt-3">
                            Digital Technology of the Year
                          </h5>
                          <h5 className="fs-6">
                            {" "}
                            Wind Energy Forecasting & Scheduling
                          </h5>

                          <p className="mt-3 fs-6">
                            <span>Leap Green Energy</span> has been honored with
                            the prestigious{" "}
                            <span className="">
                              Digital Technology of the Year
                            </span>{" "}
                            award in the category of Wind Energy Forecasting &
                            Scheduling at the India Wind Energy Forum Leadership
                            Awards on April 12, 2023.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 shadow-sm bordergreen rounded text-center card mt-2">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                <img src={award3} className="img-fluid mt-2 image1" />
                <h4 className="fs-5 font-weight-semibold mt-2 bg-light rounded border p-1">
                  2021
                </h4>
              </button>
              <div
                class="modal fade"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header border-0 d-flex align-items-center">
                      <h3 className="fs-6 font-weight-semibold">
                        INDIA WIND ENERGY FORUM AWARDS - 2021
                      </h3>
                      <button
                        type="button "
                        class="btn-close border border-secondary shadow-sm"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body p-1">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-12 text-center">
                          <img
                            src={award3original}
                            className="img-fluid rounded"
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center bg-light m-1 content-container">
                        <div className="col-md-10 ">
                          <h5 className="color fs-5 mt-3">
                            Digital Technology of the Year
                          </h5>

                          <h5 className="fs-6 ">Forecasting & Scheduling</h5>

                          <p className="mt-3 fs-6">
                            Leap Green Energy has won India Wind Energy Forum
                            2021 Awards for the third consecutive year on 8th
                            December 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 shadow-sm bordergreen rounded text-center card mt-2">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                <img src={award4} className="img-fluid mt-2 image1" />
                <h4 className="fs-5 font-weight-semibold mt-2 bg-light rounded border p-1">
                  2020
                </h4>
              </button>
              <div
                class="modal fade"
                id="exampleModal4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header border-0 d-flex align-items-center">
                      <h3 className="fs-6 font-weight-semibold">
                        INDIA WIND ENERGY FORUM AWARDS - 2020
                      </h3>
                      <button
                        type="button "
                        class="btn-close border border-secondary shadow-sm"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="row d-flex justify-content-center border rounded shadow-sm border-2">
                        <div className="col-md-5 text-center ">
                          <img src={award4original} className="img-fluid" />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center content-container">
                        <div className="col-md-11 text-center">
                          <h5 className="color fs-5 mt-2 text-center">
                            Digital Technology of the Year
                          </h5>
                          <h5 className="fs-6 mt-3">
                            Forecasting & Scheduling
                            <br /> (Multi Model Integrated Forecast System)
                            award
                          </h5>

                          <p className="mt-2 fs-6 p-1">
                            Leap Green Energy has won India Wind Energy Forum
                            2021 Awards for its outstanding performance on 4th
                            December 2020
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 shadow bordergreen rounded  card mt-2">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
              >
                <img src={award5} className="img-fluid mt-2 image2 " />
                <h4 className="fs-5 font-weight-semibold mt-2 bg-light border p-1 rounded">
                  2019
                </h4>
              </button>
              <div
                class="modal fade"
                id="exampleModal5"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header border-0 d-flex align-items-center">
                      <h3 className="fs-6 font-weight-semibold">
                        INDIA WIND ENERGY FORUM AWARDS - 2019
                      </h3>
                      <button
                        type="button "
                        class="btn-close border border-secondary shadow-sm"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-12 text-center">
                          <img
                            src={award5original}
                            className="img-fluid rounded"
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center content-container">
                        <div className="col-md-11 text-center">
                          <h5 className="color fs-5 mt-3">
                            Silver Award Winner
                          </h5>
                          <h5 className="fs-6">
                            {" "}
                            Wind Energy Forecasting & Scheduling Company of the
                            Year
                          </h5>

                          <p className="mt-3 fs-6">
                            Leap Green Energy has won India Wind Energy Forum
                            2019 Awards for outstanding contribution to the
                            growth of wind industry
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-evenly align-items-top  p-2">
            <div className="col-md-3  rounded shadow-sm award left card bordergreen">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
              >
                <h3 className="fs-6 text-center mt-2">SKOCH</h3>
                <img src={awardleft} className="img-fluid rounded " />
                <h3 className="fs-5  text-center bg-light rounded border p-1">
                  2022
                </h3>
              </button>
            </div>
            <div
              class="modal fade"
              id="exampleModal6"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header border-0 d-flex align-items-center">
                    <h3 className="fs-6 font-weight-semibold">
                      SKOCH AWARD - 2022
                    </h3>
                    <button
                      type="button "
                      class="btn-close border border-secondary shadow-sm"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-11 text-center">
                        <img src={awardleft} className="img-fluid" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center content-container">
                      <div className="col-md-10 text-center">
                        <h5 className="color fs-5 mt-3">SKOCH Award</h5>
                        <p className="mt-3 fs-6">
                          Leap Green Energy has qualified as Semi-Finalist of
                          the SKOCH Order of Merit Award 2022 for its State
                          Level Wind Power Forecasting for the State of Tamil
                          Nadu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2  rounded shadow-sm text-center award right card bordergreen">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
              >
                <h3 className="fs-6 text-center mt-2">ISGF</h3>

                <img
                  src={awardright}
                  className="img-fluid rounded award imageisgf"
                />
                <h3 className="fs-5  text-center bg-light rounded border p-1">
                  2022
                </h3>
              </button>
            </div>
            <div
              class="modal fade"
              id="exampleModal7"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header border-0 d-flex align-items-center">
                    <h3 className="fs-6 font-weight-semibold">
                      ISGF AWARD - 2022
                    </h3>
                    <button
                      type="button "
                      class="btn-close border border-secondary shadow-sm"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12 text-center">
                        <img
                          src={isgfaward2022}
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center content-container">
                      <div className="col-md-10 text-center">
                        <h5 className="color fs-5 mt-3">
                          India Smart Grid Forum Awards
                        </h5>
                        <p className="mt-3 fs-6">
                          Leap Green Energy has been awarded the prestigious
                          Platinum Award in the category of Smart Technology
                          (Electricity RE Integration) by the India Smart Grid
                          Forum on 4th March 2022 for State Level Wind Power
                          Forecasting in Tamil Nadu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3  rounded shadow-sm award left card bordergreen">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal8"
              >
                <h3 className="fs-6 text-center">IWPA</h3>
                <img src={awardcenter} className="img-fluid rounded" />
                <h3 className="fs-5  text-center bg-light rounded border p-1">
                  2021
                </h3>
              </button>
            </div>
            <div
              class="modal fade"
              id="exampleModal8"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header border-0 d-flex align-items-center">
                    <h3 className="fs-6 font-weight-semibold">
                      IWPA AWARD - 2021
                    </h3>
                    <button
                      type="button "
                      class="btn-close border border-secondary shadow-sm"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12 text-center">
                        <img
                          src={iwpaaward2021}
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center content-container">
                      <div className="col-md-12 text-center">
                        <h5 className="color fs-5 mt-3 text-center">
                          Indian Wind Power Association Awards
                        </h5>
                        <p className="mt-3 fs-6">
                          Leap Green Energy has won Wind Energy Forecaster Of
                          The Year 2021 Award from Indian Wind Power
                          Association, for its contribution to State Wide
                          Forecasting in Tamil Nadu and its appointment as State
                          QCA for Tamil Nadu State
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2  rounded shadow-sm  text-center award right card bordergreen">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal9"
              >
                <h3 className="fs-6 text-center mt-2">Digital</h3>
                <img
                  src={digitalaward}
                  className="img-fluid rounded imagedigital"
                />
                <h3 className="fs-5  text-center bg-light rounded border p-1">
                  2020
                </h3>
              </button>
            </div>
            <div
              class="modal fade"
              id="exampleModal9"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header border-0 d-flex align-items-center">
                    <h3 className="fs-6 font-weight-semibold">
                      Digital Week AWARD - 2020
                    </h3>
                    <button
                      type="button "
                      class="btn-close border border-secondary shadow-sm"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-12 text-center">
                        <img src={digitalaward} className="img-fluid" />
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center content-container">
                      <div className="col-md-11 text-center">
                        <h5 className="color fs-5 mt-3">
                          Service Provider of the Year
                        </h5>
                        <h5 className=" fs-6">
                          Energy Forecast - (Wind - 8.5 GW)
                        </h5>

                        <p className="mt-3 fs-6">
                          Leap Green Energy has won Renewable Energy Digital
                          Week India 2020 Awards for its outstanding performance
                          in the field of Forecasting and Data Analytics on 30th
                          October 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Awards;
