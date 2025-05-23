import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../CryptoContext';
import AliceCarousel, { Link } from 'react-alice-carousel';
const useStyles = makeStyles((theme)=>({
    carsousel:{
        height: "50%",
        display: "flex",
        alignItems: "center",
       
    },
    carouselItem:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
        fontFamily: "Montserrat",
    },
}));

export function numberwithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
    const [trending, setTrending] = useState([]);
    const classes = useStyles();
    const {currency , symbol} = CryptoState()
    const fetchTrendingCoins = async() =>{
        const {data} = await axios.get(TrendingCoins(currency));
        setTrending(data);
    };
    useEffect(() => {
        fetchTrendingCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);
    const items = trending.map((coin) =>{
      let profit = coin.price_change_percentage_24h > 0;
        return (
          <Link className={classes.carsouselItems} to={`/coin/${coin.id}`}>
            <img
              src={coin?.image}
              alt={coin.name}
              height="80"
              style={{ marginBottom: 10 }}
            />
            <span>
              {coin.symbol}
              &nbsp;
              <span style={{ fontSize: 22, color: profit ? "green" : "red" }}>
                {profit && "+"} {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </span>
            <span
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {symbol} {numberwithCommas(coin.current_price.toFixed(2))}
            </span>
          </Link>
        );
    })
    const responsive = {
        0: {
          items: 1,
        },
        512: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      };
     
  return (
    <div className={classes.carsousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
}

export default Carousel