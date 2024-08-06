import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  flex: 1 1 30%;
  box-shadow: 8px 5px 10px gray;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 8px 5px 10px crimson;

  }
  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 15px;
`;

function DestinationCard({ title, description, image }) {
  return (
    <Card>
      <CardImage className='mt-1' src={image} alt={title} />
      <CardBody>
        <h5>{title}</h5>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
}

export default DestinationCard;
