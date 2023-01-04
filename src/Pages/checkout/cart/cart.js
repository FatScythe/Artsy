import { Link, NavLink, Routes, Route } from "react-router-dom";
// CSS
import "./cart.css";

// Components
import BlueButton from "../../../Components/button/button";
import Schedule from "../schedule/schedule";
import { CloseIcon } from "../../../Components/Icons/icons";
// import Loader from "../../../Components/Loader/loader";
// Context
// import { useGlobalArtsyContext } from "../../../context/context";

const Cart = ({
  total,
  cart,
  value,
  setValue,
  Increase,
  Decrease,
  removeItem,
}) => {
  return (
    <section className='cart'>
      <CartNav />
      {cart.map((item) => {
        return (
          <CartCard
            key={item.id}
            {...item}
            value={value}
            setValue={setValue}
            Increase={Increase}
            Decrease={Decrease}
            removeItem={removeItem}
          />
        );
      })}

      <div className='footer'>
        <div className='proceed'>
          <Link to='/checkout/details'>
            <BlueButton text='Proceed to checkout' />
          </Link>

          <Link to='/market'>Continue shopping</Link>
        </div>
        <CartTotal total={total} cart={cart} />
      </div>
    </section>
  );
};

export const CartTotal = ({ total, cart }) => {
  return (
    <div className='total'>
      <div>
        <span className='title'>Products in cart:</span>
        <span className='result'>
          {cart.length} <span>items</span>
        </span>
      </div>

      <div>
        <span className='title'>Shipping:</span>
        <span className='result'>$2.50</span>
      </div>

      <div>
        <span className='title'>Total:</span>
        <span className='result'>${total}</span>
      </div>

      <div className='grand-total'>
        <span className='title'>Grand total:</span>
        {/* Add the total and shipping price */}
        <span className='result'>${total + 2.5}</span>
      </div>
    </div>
  );
};

export const CartCard = ({
  id,
  name,
  creator,
  price,
  url,
  number,
  setValue,
  Increase,
  Decrease,
  removeItem,
}) => {
  return (
    <div className='card'>
      <div className='info'>
        <span>
          <img src={url} alt={name} />
        </span>
        <span className='details'>
          <h2 className='d-md-none type'>Editorials</h2>
          <h2>{name}</h2>
          <p className='d-none'>{creator}</p>
          <p className='d-none'>
            <span>size:</span> <span>200 ft</span>
          </p>
          <div>
            <button className='decrease' onClick={() => Decrease(id)}>
              -
            </button>
            <input
              type='text'
              className='value'
              onChange={(e) => setValue(e.target.value)}
              value={number}
              readOnly={true}
            />
            <button className='increase' onClick={() => Increase(id)}>
              +
            </button>
          </div>
        </span>
      </div>

      <div className='price'>
        <span onClick={() => removeItem(id)}>
          <CloseIcon />
        </span>
        <span className='bellefair'>${price.usd}</span>
      </div>
    </div>
  );
};

export const CartNav = () => {
  return (
    <div className='cart-nav d-md-none'>
      <p>
        <Link to='/'>Home/ </Link>
        <Link to='/market'>Marketplace/</Link> <span>Cart</span>
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
