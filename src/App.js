import { Routes, BrowserRouter, Route } from "react-router-dom";
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
// import Cart from "./Pages/Cart";

function App() {
  // const [cartIsEmpty, setCartIsEmpty] = useState(true);
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Market' element={<Market />} />
          <Route path='/Auction' element={<Auction />} />
          <Route path='/live-bid/:id' element={<LiveBid />} />
          <Route path='/Drops' element={<Drops />} />
          <Route path='/product-detail/:id' element={<Product />} />
          {/* <Route
            path='/Cart'
            element={cartIsEmpty ? <Navigate to='/Market' /> : <Cart />}
          /> */}
          <Route
            path='*'
            element={
              <div>
                <h1>Not Found :( </h1>
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
