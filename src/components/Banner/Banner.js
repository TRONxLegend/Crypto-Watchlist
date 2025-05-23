import { Container, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import bannerImage from '../assets/banner.jpg';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 400,
    width: '100%',
  },
  bannerContext: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 25,
  },
  tagline: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '40%',
    textAlign: 'center',
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContext}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'Montserrat',
              color: 'white',
            }}  
          >
            Crypto Watchlist
            </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: 'lightgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
            }}
            >
            Get all the info regarding your favorite crypto currencies
            </Typography>
        </div>
   <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
