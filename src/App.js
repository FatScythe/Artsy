import { Routes, BrowserRouter, Route, Link, Navigate } from "react-router-dom";
// components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
// import { useState } from "react";

// pages
import Home from "./Pages/Home";
import Market from "./Pages/Market";
import Auction from "./Pages/Auction";
import Drops from "./Pages/Drops";
import Product from "./Pages/Market/product-detail/product";
import LiveBid from "./Pages/Auction/LiveBid/livebid";
import Checkout from "./Pages/checkout/checkout";
import Schedule from "./Pages/checkout/schedule/schedule";
import Thanks from "./Pages/checkout/thankyou";

// Context
import { useGlobalArtsyContext } from "./context/context";

function App() {
  const { cart } = useGlobalArtsyContext();
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/market' element={<Market />} />
          <Route path='/auction' element={<Auction />} />
          <Route path='/live-bid/:id' element={<LiveBid />} />
          <Route path='/drops' element={<Drops />} />
          <Route path='/product-detail/:id' element={<Product />} />
          <Route
            path='/checkout/*'
            element={
              cart.length === 0 ? <Navigate to='/Market' /> : <Checkout />
            }
          />
          {/* <Route path='/checkout/*' element={<Checkout />} /> */}
          <Route path='/checkout/cart/schedule' element={<Schedule />} />
          <Route path='thanks' element={<Thanks />} />

          <Route
            path='*'
            element={
              <div className='not-found'>
                <h1>Error: Page Not Found :( </h1>
                <Link to='/'>Return to HomePage</Link>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
