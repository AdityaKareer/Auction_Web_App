// function About(){

//     return (
//         <>
//          <h1>About us </h1>
        
//         <div className="cards">
//             <img src=""></img>
//             <h4>Shravani</h4>

            
//         </div>
        
//         </>
//     );


// }

// export default About


// 








// import React from 'react'  
// class About extends React.Component {  
//   render() { 
    
//     return   <h1>About Us</h1> 






//     import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import Card from 'react-bootstrap/Card';

// function BootstrapCard() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src=".images/hammer.png" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           This is a basic Bootstrap card component in React.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BootstrapCard;








//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script> 

// <div className="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
    
 




//   }  
// }  
// export default About 






























// import * as React from 'react';
// import { connect } from 'react-redux';
// import Card from '@mui/material/Card';
// import './css/card.css';

// import { Link, useNavigate } from 'react-router-dom';
// // Actions
// import { loadAdDetails, loadAdImage, setImageLoadingStatus } from '../actions/ad';
// // MUI Components
// import { CardActionArea } from '@mui/material';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// // Files
// import imagePlaceholder from '../images/no-image-icon.png';
// import { secondsToHmsShort } from '../utils/secondsToHms';

// function MediaCard(props) {
//   const navigate = useNavigate();

//   const handleCardClick = (e) => {
//     navigate(`/ads/${props.ad._id}`);
//   };

//   // Auction status based on the ad-details
//   const updateAuctionStatus = (ad) => {
//     if (ad.sold) {
//       return 'Sold';
//     } else if (ad.auctionEnded) {
//       return 'Ended, not-sold';
//     } else if (!ad.auctionStarted) {
//       return 'Upcoming';
//     } else {
//       return 'Ongoing';
//     }
//   };

//   return (
//     <a
//       onClick={(e) => {
//         handleCardClick(e);
//       }}
//       style={{ textDecoration: 'none' }}
//     >
//       <Card style={props.cardStyle} className='card'>
//         <CardActionArea>
//           {!props.dashCard && (
//             <CardMedia
//               component='img'
//               height='180'
//               src={props.ad.image ? props.ad.image : imagePlaceholder}
//               alt='green iguana'
//             />
//           )}
//           <CardContent>
//             <Typography gutterBottom variant='h6' component='div'>
//               {props.ad.productName}
//             </Typography>
//             <Typography variant='body2' color='text.secondary'>
//               Price: ₹ {props.ad.currentPrice.$numberDecimal}
//             </Typography>
//             <Typography variant='body2' color='text.secondary'>
//               Remaining: {secondsToHmsShort(props.ad.timer)}
//             </Typography>
//             <Typography variant='body2' color='text.secondary'>
//               Status: {updateAuctionStatus(props.ad)}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </a>
//   );
// }

// const mapStateToProps = (state) => ({
//   adDetails: state.ad.adDetails,
// });

// export default connect(mapStateToProps, {
//   loadAdDetails,
//   loadAdImage,
//   setImageLoadingStatus,
// })(MediaCard);
