import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import InputForm from './components/InputForm/InputForm';
import Stock from './components/Stock/Stock';
import CartContextProvider from './components/store/CartContextProvider';
import StockContextProvider from './components/store/StockContextProvider';
import image from './assets/Images/image.jpg';

function App() {
  return (
    <CartContextProvider>
      <StockContextProvider>
        <Header />
        <img className='image' src={image} alt='medical look'/>
        <InputForm />
        <Stock />
      </StockContextProvider>
    </CartContextProvider>
  );
}

export default App;
