import React, { useState } from "react";
import axios from "axios";
import Header from "../Header";


function ImageUpload() {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Capture the selected file
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file); // Append the file to FormData

      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadMessage(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadMessage("Error uploading file");
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid loginbg">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-4 border shadow-sm rounded p-5">
            <h4 className="fs-6">Image Upload</h4>
            <input
              className="form-control"
              type="file"
              onChange={handleFileChange}
            />
            <button className="btn btn-success mt-3" onClick={handleUpload}>
              Upload
            </button>
            {uploadMessage && <p className="mt-3">{uploadMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
