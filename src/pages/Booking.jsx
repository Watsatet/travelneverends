import React, { useState } from "react";
import styled from "styled-components";

const BookingForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

function Booking() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    // console.log(formData)

    formData.append("access_key", "21dda683-5e72-4098-8963-7187b9851334");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="container mt-5">
      <h2>Book Your Trip</h2>
      <BookingForm onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            className="form-control"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
          ></textarea>
        </FormGroup>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="d-flex justify-content-center">{result}</div>
      </BookingForm>
    </div>
  );
}

export default Booking;
