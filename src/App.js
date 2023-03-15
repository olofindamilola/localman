import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Info from './components/info/Info';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Payment from './components/payment/Payment';
import Product from './components/product/Product';
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
      <Form />
      <Product />
      <Footer />
    </>
  )
}

export default App