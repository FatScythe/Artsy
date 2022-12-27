import "./cart.css";
import m1 from "../../../images/marketplace/m1.png";
import { CloseIcon } from "../../../Components/Icons/icons";
import { Link } from "react-router-dom";
import BlueButton from "../../../Components/button/button";

const Cart = () => {
  return (
    <section className='cart'>
      <CartCard />
      <div className='footer'>
        <div className='proceed'>
          <Link to='/checkout/pay'>
            <BlueButton text='Proceed to checkout' />
          </Link>

          <Link to='/market'>Continue shopping</Link>
        </div>

        <div className='total'>
          <div>
            <span className='title'>Products in cart:</span>
            <span className='result'>3 items</span>
          </div>

          <div>
            <span className='title'>Shipping:</span>
            <span className='result'>$2.50</span>
          </div>

          <div>
            <span className='title'>Total:</span>
            <span className='result'>$114.00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const CartCard = () => {
  return (
    <div className='card'>
      <div className='info'>
        <span>
          <img src={m1} alt='' />
        </span>
        <span className='details'>
          <h2>philomena '22</h2>
          <p>clearamane</p>
          <p>
            <span>size:</span> <span>200 ft</span>
          </p>
          <div>
            <span>-</span>
            <input type='text' value='1' />
            <span>+</span>
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

export default Cart;
