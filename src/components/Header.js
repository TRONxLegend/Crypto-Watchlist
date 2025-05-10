import React from 'react'
import { AppBar, Container, Toolbar, Typography , MenuItem, Select } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CryptoState } from '../CryptoContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const useStyles = makeStyles(() => ({  

    title:{
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}));

const Header = () => {
    const classes = useStyles();
    const {currency,setCurrency}= CryptoState()
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");


    }
  return (
     <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            onClick={handleClick}
            className={classes.title}>
            Crypto Watchlist
          </Typography>

          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header
