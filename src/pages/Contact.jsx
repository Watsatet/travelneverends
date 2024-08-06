import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
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
  const [result, setResult] = React.useState("");

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
    <ContactSection>
      <h2>Contact Us</h2>
      <ContactForm onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="form-control" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-control" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className="form-control" rows="5" required></textarea>
        </FormGroup>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </ContactForm>
      <span>{result}</span>

      <h3>Follow Us</h3>
      <SocialIcons>
        <SocialIcon href="https://www.facebook.com/sharma.raghav25" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/sharma.raghav25/" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
      </SocialIcons>
    </ContactSection>
  );
}

export default Contact;
