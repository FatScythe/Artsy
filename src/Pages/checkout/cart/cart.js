import "./cart.css";
import m1 from "../../../images/marketplace/m1.png";
import { CloseIcon } from "../../../Components/Icons/icons";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import BlueButton from "../../../Components/button/button";
import Schedule from "../schedule/schedule";

const Cart = () => {
  return (
    <section className='cart'>
      <CartNav />
      <CartCard />
      <div className='footer'>
        <div className='proceed'>
          <Link to='/checkout/details'>
            <BlueButton text='Proceed to checkout' />
          </Link>

          <Link to='/market'>Continue shopping</Link>
        </div>
        <CartTotal />
      </div>
    </section>
  );
};

export const CartTotal = () => {
  return (
    <div className='total'>
      <div>
        <span className='title'>Products in cart:</span>
        <span className='result'>
          3 <span>items</span>
        </span>
      </div>

      <div>
        <span className='title'>Shipping:</span>
        <span className='result'>$2.50</span>
      </div>

      <div>
        <span className='title'>Total:</span>
        <span className='result'>$114.00</span>
      </div>

      <div className='grand-total'>
        <span className='title'>Grand total:</span>
        <span className='result'>$116.50</span>
      </div>
    </div>
  );
};

export const CartCard = () => {
  return (
    <div className='card'>
      <div className='info'>
        <span>
          <img src={m1} alt='' />
        </span>
        <span className='details'>
          <h2 className='d-md-none type'>Editorials</h2>
          <h2>philomena '22</h2>
          <p className='d-none'>clearamane</p>
          <p className='d-none'>
            <span>size:</span> <span>200 ft</span>
          </p>
          <div>
            <span className='decrease'>-</span>
            <input type='text' className='value' value='1' />
            <span className='increase'>+</span>
          </div>
        </span>
      </div>

      <div className='price'>
        <span>
          <CloseIcon />
        </span>
        <span className='bellefair'>$35.50</span>
      </div>
    </div>
  );
};

export const CartNav = () => {
  return (
    <div className='cart-nav d-md-none'>
      <p>
        Home/ Marketplace/ <span>Cart</span>
      </p>
      <nav>
        <ul>
          <NavLink to='/checkout/cart'>
            <li>Shop</li>
          </NavLink>
          <NavLink className='schedule-nav' to='/checkout/cart/schedule'>
            <li>Scheduled</li>
          </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path='cart/schedule' element={<Schedule />} />
      </Routes>
    </div>
  );
};

export default Cart;
