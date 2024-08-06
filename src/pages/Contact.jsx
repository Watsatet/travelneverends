import React,{ useState } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
const BookingForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;


const ContactSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;


const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 2rem;
  color: #333;
`;

const SocialIcon = styled.a`
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: #007bff; /* Change color on hover */
  }
`;

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    // console.log(formData)

    formData.append("access_key", "e90a7f5e-7598-434f-a0d7-2c566502d494");

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
  return(
    
    <div className="container">
      <h2>Contact Us</h2>
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
          <label htmlFor="phone">Phone No.</label>
          <input
            type="number"
            id="phone"
            name="phone"
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
  <ContactSection>
      <h3>Follow Us</h3>
      <SocialIcons>
        <SocialIcon href="https://www.facebook.com/sharma.raghav25" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/travelneverendss/" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialIcon>
        
      </SocialIcons>
    </ContactSection>
    </div>
  );
}

export default Contact;
