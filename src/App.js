import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from './pages/Home';
import Coin from "./pages/Coin";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin' element={<Coin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

