import React from 'react';
import styled from 'styled-components';

const TestimonialSection = styled.div`
  margin: 50px 0;
  text-align: center;
`;

const Testimonial = styled.div`
  margin-bottom: 30px;
`;

function Testimonials() {
  return (
    <TestimonialSection>
      <h2>What Our Customers Say</h2>
      <Testimonial>
        <p>"Great service and amazing destinations!"</p>
        <p>- John Doe</p>
      </Testimonial>
      <Testimonial>
        <p>"Had an unforgettable experience!"</p>
        <p>- Jane Smith</p>
      </Testimonial>
    </TestimonialSection>
  );
}

export default Testimonials;
