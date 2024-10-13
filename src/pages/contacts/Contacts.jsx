import "./contact.css";
import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import Topimage from "../../components/Topimage";
import contactImage from "../../assets/contact.jpg";
import Footer from "../../components/Footer";

export default function Contacts() {
  // State to manage form values
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    cv: null,
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Set the submitted data and show the success message
    setSubmittedData(formData);
    setSuccessMessage(true);

    // Clear form
    setFormData({
      fullName: "",
      phoneNumber: "",
      cv: null,
    });
  };

  return (
    <>
      <Navigation />
      <Topimage text1="Careers" text2="Home / Careers" image={contactImage} />

      <section className="form-section container mb-5">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="validationServer01" className="form-label">
              Full name
            </label>
            {!submittedData ? (
              <input
                type="text"
                className="form-control "
                id="validationServer01"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type="text"
                className="form-control is-valid"
                id="validationServer01"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            )}

            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationServer02" className="form-label">
              Phone Number
            </label>
            {!submittedData ? (
              <input
                type="text"
                className="form-control "
                id="validationServer02"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                type="text"
                className="form-control is-valid"
                id="validationServer02"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            )}
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div>
            <label htmlFor="formFileLg" className="form-label">
              Upload CV
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
              onChange={handleFileChange}
            />
          </div>

          <div className="col-12 mt-5">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>

        {/* Success alert */}
        {successMessage && (
          <div className="alert alert-success mt-4" role="alert">
            Form submitted successfully!
          </div>
        )}
      </section>

      {/* Display submitted data */}
      {submittedData && (
        <section className="submitted-data-section container mt-5">
          <h3>Submitted Data</h3>

          <div>
            <h4>Full Name:</h4>
            <article>{submittedData.fullName}</article>
          </div>

          <div>
            <h4>Phone Number:</h4>
            <article>{submittedData.phoneNumber}</article>
          </div>

          {submittedData.cv && (
            <div>
              <h4>CV:</h4>
              <article>{submittedData.cv.name}</article>
            </div>
          )}
        </section>
      )}

      <section className="map-section d-flex justify-content-center">
        <img className="w-75" src={require("../../assets/Map.png")} alt="" />
      </section>

      <Footer />
    </>
  );
}
