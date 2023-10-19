import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import InputForm from './components/InputForm/InputForm';
import Stock from './components/Stock/Stock';
import CartContextProvider from './store/CartContextProvider';
import StockContextProvider from './store/StockContextProvider';

function App() {
  return (
    <CartContextProvider>
      <StockContextProvider>
        <Header />
        <InputForm />
        <Stock />
      </StockContextProvider>
    </CartContextProvider>
  );
}

export default App;
