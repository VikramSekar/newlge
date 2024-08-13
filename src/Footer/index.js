import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid ">
          <div className="row d-flex justify-content-evenly bg-dark  py-2 align-items-center border-dark">
            <div className="col-md-5 text-center mt-2">
              <p className="text-white pt-2">
                <i class="fa fa-copyright"></i>{" "}
                <span style={{ color: "#289b2c" }}>Leap Green Energy</span> 2024
                - All Rights Reserved
              </p>
            </div>
            <div
              className="col-md-2 d-flex justify-content-evenly mt-1"
              style={{ fontSize: "20px" }}
            >
              <a href="#" className="text-decoration-none">
                <i class="fa fa-twitter rounded-circle p-2 btn btn-outline-success text-white border-white"></i>
              </a>
              <a href="#" className="text-decoration-none text-dark">
                <i class="fa fa-facebook-square rounded-circle  p-2 btn btn-outline-success text-white border-white"></i>
              </a>
              <a href="#" className="text-decoration-none text-dark">
                <i class="fa fa-linkedin rounded-circle p-2  btn btn-outline-success text-white border-white"></i>
              </a>
              <a
                href="https://www.youtube.com/@Leapgreenenergy."
                className="text-decoration-none text-dark"
                target="_blank"
              >
                <i class="fa fa-youtube-play rounded-circle p-2 btn btn-outline-success text-white border-white"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
