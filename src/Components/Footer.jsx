import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background : black;
  color: white;
  text-align: center;
  padding: 1rem 0;
  width: 100%;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2024 Travel Never End. All Rights Reserved.</p>
    </StyledFooter>
  );
}

export default Footer;
