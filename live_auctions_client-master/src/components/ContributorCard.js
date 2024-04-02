import React from 'react';
import styled from 'styled-components';


// Define the styled component for the card layout
const CardContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 68.5vh;
  background-image: linear-gradient(rgb(216, 195, 165), rgb(238, 226, 220) );
`;

const Card = styled.div`
  width: 400px;
  // background-color: #fff;
  background-image: linear-gradient(rgb(222, 221, 220), rgb(255, 255, 255) );

  border-radius: 15px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 2rem 0 2rem;
  box-shadow: 0 0 1rem 0 rgb(0, 0, 0);

  @media screen and (max-width: 900px) {
    margin: 1rem 0 1rem 0;
    width: 80%;
    
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    transition: transform 0.5s ease-in-out;
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  font-family: 'Montserrat', roman;
`;

const ProductDescription = styled.p`
  font-size: 25px;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  a {
    margin-right: 1rem;
    color: black;
  }
`;

const ContributorCard = (props) => {
  return (
    <CardContainer>
      <Card>
        <ImageContainer>
          <img src={props.imageSrc} alt={props.name} />
        </ImageContainer>
        <ProductInfo>
          <ProductTitle>{props.name}</ProductTitle>
          <ProductDescription>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, harum? */}
          </ProductDescription>
          <SocialIcons>
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github-square fa-2xl"></i>
            </a>
            <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href={`mailto:${props.email}`}>
              <i className="fa-regular fa-envelope fa-2xl"></i>
            </a>
          </SocialIcons>
        </ProductInfo>
      </Card>
    </CardContainer>
  );
};

export default ContributorCard;
