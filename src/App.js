import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

// pages
import Home from "./Pages/Home";
import Market from "./Pages/Market";
import Auction from "./Pages/Auction";
import Drops from "./Pages/Drops";
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
          <Route path='/Drops' element={<Drops />} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
