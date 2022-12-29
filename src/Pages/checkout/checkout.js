import "./checkout.css";
import { useEffect } from "react";

// Router-DOM
import { NavLink, Routes, Route } from "react-router-dom";

// Context
import { useGlobalArtsyContext } from "../../context/context";

// Components
import Cart from "./cart/cart";
import Details from "./details/details";
import Payment from "./payment/payment";

const Checkout = () => {
  const { footerContainer } = useGlobalArtsyContext();
  useEffect(() => {
    footerContainer.current.style.display = "none";
  });

  return (
    <section className='checkout container'>
      <nav className='checkout-nav d-none'>
        <NavLink to='/checkout/cart'>
          <li>Shopping cart</li>
        </NavLink>
        <NavLink to='/checkout/details'>
          <li>Shopping details</li>
        </NavLink>
        <NavLink to='/checkout/pay'>
          <li>Payment details</li>
        </NavLink>
      </nav>

      <Routes>
        <Route path='cart' element={<Cart />} />
        <Route path='details' element={<Details />} />
        <Route path='pay' element={<Payment />} />
      </Routes>
    </section>
  );
};

export default Checkout;
