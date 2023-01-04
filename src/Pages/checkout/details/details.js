import { Link } from "react-router-dom";

// Component
import { CartCard, CartTotal } from "../cart/cart";
import BlueButton from "../../../Components/button/button";

// CSS
import "./details.css";

const Details = ({
  cart,
  value,
  setValue,
  Increase,
  Decrease,
  removeItem,
  total,
}) => {
  return (
    <section className='details'>
      <p className='navigation d-md-none'>
        <Link to='/'>Home/</Link> <Link to='/market'>Marketplace/</Link>
        <Link to='/checkout/cart'> Cart/</Link> <span>Shipping</span>
      </p>
      <main>
        <form>
          <div className='email'>
            <label htmlFor='email'>Your email</label>
            <input type='text' placeholder='holadhayo28@gmail.com' />
            <div className='update'>
              <input type='checkbox' />
              <span>Get updates about new drops & exclusive offers</span>
            </div>
          </div>
          <div className='name'>
            <label htmlFor='name'>Your full name</label>
            <input type='text' placeholder='Abdullahi Fahm' />
          </div>

          <div className='wallet'>
            <label htmlFor='wallet'>Choose a wallet</label>
            <select>
              <option value='popularity'>Popularity</option>
              <option value='average rating'>Average rating</option>
              <option value='newness'>Newness</option>
              <option value='price'>Price: low to high</option>
              <option value='price'>Price: high to low</option>
            </select>
          </div>
          <div className='city'>
            <label htmlFor='city'>City</label>
            <select>
              <option value='popularity'>Popularity</option>
              <option value='average rating'>Average rating</option>
              <option value='newness'>Newness</option>
              <option value='price'>Price: low to high</option>
              <option value='price'>Price: high to low</option>
            </select>
          </div>
          <div className='location'>
            <div className='country'>
              <label htmlFor='country'>Country</label>
              <select>
                <option value='popularity'>Popularity</option>
                <option value='average rating'>Average rating</option>
                <option value='newness'>Newness</option>
                <option value='price'>Price: low to high</option>
                <option value='price'>Price: high to low</option>
              </select>
            </div>
            <div className='postal'>
              <label htmlFor='postal-code'>Postal code</label>
              <input type='text' placeholder='001001' />
            </div>
          </div>

          <div className='phone'>
            <label htmlFor='phone-number'>Phone number</label>
            <input type='text' placeholder='0703 657 3306' />
          </div>
          <div className='links'>
            <Link to='/checkout/pay'>
              <BlueButton type='submit' text='Proceed to payment' />
            </Link>

            <Link className='go-back d-md-none' to='/checkout/cart'>
              Go back to cart
            </Link>
          </div>
        </form>

        <div className='cart d-none'>
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
          <CartTotal total={total} cart={cart} />
        </div>
      </main>
    </section>
  );
};

export default Details;
