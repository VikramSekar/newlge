import React from "react";
import Header from "../Header";
import junepdf from "../../src/assests/JuneReport.pdf";
import Footer from "../Footer";

function NewsEvents({ file }) {
  return (
    <>
      <Header />
      <section className="newsbg d-flex  align-items-center p-5">
        <div className="container-fluid p-5">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-3 shadow m-5 p-5"></div>
          </div>
        </div>
      </section>

      <section className="max-vh-75 ">
        <div className="container-fluid">
          <div className="row d-flex  justify-content-center">
            <div className="col-md-3 mt-5 rounded mb-3">
              <table class="table table-warning text-center border border-2 border-success table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Rain-Fall in MM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023</td>
                    <td>53.5 </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>79.1 </td>
                  </tr>
                  <tr>
                    <td>2021</td>
                    <td>62.3</td>
                  </tr>
                  <tr>
                    <td>2020</td>
                    <td>59.6</td>
                  </tr>
                  <tr>
                    <td>2019</td>
                    <td>33.6</td>
                  </tr>
                  <tr>
                    <td>2018</td>
                    <td>50.8</td>
                  </tr>
                  <tr>
                    <td>2017</td>
                    <td>47.9</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="fs-5 text-center">Historic Rainfall</h4>
            </div>
            <div className="col-md-7 mt-5 mb-3">
              <div className="content-container p-3">
                <h4 className="fs-5 text-success text-center">Wind Activity June 2024</h4>
                <p className="mt-3">
                  <span className="text-danger">cyclonic circulations</span>{" "}
                  over the North Indian Ocean. <br />
                  <br />
                  <span className="text-danger">
                    The El Niño Southern Oscillation (ENSO)
                  </span>{" "}
                  is exhibiting neutral conditions, with equatorial sea surface
                  temperatures (SSTs) showing above-average readings in the
                  western and west-central Pacific, near-average temperatures in
                  the east-central Pacific, and below-average temperatures in
                  the eastern Pacific Ocean. ENSO-neutral conditions are
                  expected to persist over the coming months, with a 70% chance
                  of La Niña developing between August and October and a 79%
                  chance of it continuing into the Northern Hemisphere winter of
                  2024-25. The most recent Oceanic Niño Index (ONI) value is
                  0.4°C for April to June 2024, and 0.16°C for June.
                  <br />
                  <br />
                  Meanwhile, the{" "}
                  <span className="text-danger">
                    Indian Ocean Dipole (IOD)
                  </span>{" "}
                  is currently neutral, with the latest anomaly recorded at
                  -0.16°C for June. The Madden Julian Oscillation (MJO) Index
                  fluctuated between phases 2 and 3 from June 20 to June 21,
                  with an average amplitude of 0.30, and between June 26 and
                  June 30, with an average amplitude of 0.72. In terms of wind
                  speeds, passes such as Palakkad, Kambam, Sengottai, and
                  Aralvaimozhi recorded average wind speeds of 7.9 m/s, 7.9 m/s,
                  8.1 m/s, and 7.2 m/s, respectively.
                  <br />
                  <br /> During peak lighting and daylight hours, wind speeds at
                  Palakkad and Sengottai increased to 9.0 m/s, with the maximum
                  wind speed reaching 12.5 m/s on June 26, 2024.
                </p>
                <div className="text-end mt-3">
                  <a
                    href={junepdf}
                    className="btn btn-outline-success me-2 text-end"
                    target="_blank"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >
      <Footer />
    </>
  );
}

export default NewsEvents;
