import './App.css';
import About from './components/about/About';
import Info from './components/info/Info';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Payment from './components/payment/Payment';
import Wave from './components/wave/Wave';

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Wave />
      <About />
      <Payment />
      <Info />
    </>
  )
}

export default App