// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 1.5rem 0 1rem;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Icon = styled.a`
  color: ${(props) => props.theme.linkColor};
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #03dac6;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Section>
        <Subtitle>Welcome</Subtitle>
        <Description>
          Welcome to our travel website! We are dedicated to helping you explore the world with ease and joy. Discover new destinations, plan your trips, and make unforgettable memories.
        </Description>
      </Section>

      <Section>
        <Subtitle>Our History</Subtitle>
        <Description>
          Our journey began in 2010 with a small team of travel enthusiasts who wanted to make travel planning easier for everyone. Over the years, we have grown into a large community of travelers, offering a wide range of travel services and resources.
        </Description>
      </Section>

      <Section>
        <Subtitle>Our Mission</Subtitle>
        <Description>
          Our mission is to inspire and enable people to explore the world. We aim to provide the best travel planning experience with comprehensive guides, tips, and resources.
        </Description>
      </Section>

      <Section>
        <Subtitle>Our Team</Subtitle>
        <Description>
          We are a diverse team of travel experts, developers, designers, and customer service professionals. Our team is passionate about travel and committed to providing the best service to our users.
        </Description>
      </Section>

      <Section>
        <Subtitle>Contact Us</Subtitle>
        <Description>
          Have questions or need assistance? Feel free to reach out to us through our social media channels or email us at support@travelwebsite.com.
        </Description>
        <IconContainer>
          <Icon href="https://facebook.com" target="_blank" rel="https://www.facebook.com/sharma.raghav25"><FaFacebook /></Icon>
          <Icon href="https://instagram.com" target="_blank" rel="https://www.instagram.com/travelneverendss/"><FaInstagram /></Icon>
        </IconContainer>
      </Section>
    </AboutContainer>
  );
};

export default About;
