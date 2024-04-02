import React from 'react';
import ContributorCard from './ContributorCard'; // Import your ContributorCard component
import styled from 'styled-components';


// Define the styled component for the card layout
const CardContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  
`;


const contributorsData = [
  {
    name: 'Srujana Makarande',
    // imageSrc: './srupic.jpg',
    // backgroundImage: url('../images/srupic.jpg'),
    imageSrc: './sru.webp',

    githubLink: 'https://github.com/srujana2310',
    linkedinLink: 'https://www.linkedin.com/in/srujana-makarande-1638b8283/', // Add the LinkedIn link
    email: '321srujana0047@dbit.in',
  },
  {
    name: 'Shravani Shinde',
    imageSrc: './shrav.jpg',
    githubLink: 'https://github.com/shravanishinde20/',
    linkedinLink: 'https://www.linkedin.com/in/shravanishinde20/', // Add the LinkedIn link
    email: '321shravani0055@dbit.in',
  },
  {
    name: 'Aditya Kareer',
    imageSrc: './adittya.jpg', // Change the image source
    githubLink: 'https://github.com/AdityaKareer',
    linkedinLink: 'https://www.linkedin.com/in/aditya-kareer-a88397159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', // Add the LinkedIn link
    email: 'adityakareer01@gmail.com',
  },
];

const ContributorsPage = () => {
  return (
    <div>
      {/* <h1>Contributors</h1> */}
      <CardContainer>
        {contributorsData.map((contributor, index) => (
          <ContributorCard key={index} {...contributor} />
        ))}
      </CardContainer>
    </div>
  );
};

export default ContributorsPage;
