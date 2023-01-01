import { Link } from "react-router-dom";
// CSS
import "./payment.css";

// Image
import mm from "../../../images/checkout/MetaMask.png";
import cb from "../../../images/checkout/Coinbase.png";
import wc from "../../../images/checkout/WalletConnect.png";
import phantom from "../../../images/checkout/Phantom.png";

// Components
import BlueButton from "../../../Components/button/button";
import { RadioButton, Secure } from "../../../Components/Icons/icons";
import "../cart/cart.css";
import { CartTotal } from "../cart/cart";

const Payment = ({ total, cart }) => {
  return (
    <section className='payment'>
      <p className='navigation d-md-none'>
        Home/ Marketplace/ Cart/ Shipping/ <span>Payment</span>
      </p>
      <div className='secure-payment'>
        <p className='d-none h1'>Payment method</p>
        <p className='d-none secure'>
          <span>
            <Secure />
          </span>
          <span>Secure server</span>
        </p>
      </div>
      <main>
        <div className='method-container'>
          <div className='method'>
            <div className='select'>
              <div className='input'>
                <RadioButton />
                <span className='h1'>Select your wallet</span>
              </div>

              <div className='wallets'>
                <img src={mm} alt='MetaMask' />
                <img src={cb} alt='CoinBase' />
                <img src={wc} alt='WalletConnect' />
                <img src={phantom} alt='Phantom' />
              </div>
            </div>
            <p className='title'>
              Connect with one of our available wallet providers or add and
              connect a new wallet.
            </p>
            <div className='wallet-type'>
              <label htmlFor='wallet type'>Wallet type</label>
              <input type='text' />
            </div>

            <div className='key'>
              <label htmlFor='key'>Key</label>
              <input type='text' placeholder='Please enter your key' />
              <img src={mm} alt='MetaMask' />
            </div>

            <div className='card-details'>
              <div className='expiry'>
                <label htmlFor='name'>Expiry date</label>
                <input type='text' placeholder='MM/YY' />
              </div>
              <div className='cvv'>
                <label htmlFor='cvv'>CVV</label>
                <input type='password' />
              </div>
            </div>

            <div className='update'>
              <input type='checkbox' />
              <span>
                Save my wallet details & information for future transactions
              </span>
            </div>
          </div>
          <Link to='/thanks'>
            <BlueButton text='Confirm' />
          </Link>
        </div>

        <div className='summary d-none'>
          <p className='h1'>Payment Summary</p>
          <p className='sub-title'>
            Metamask wallet : 002345KJi90pzzz3
            <span className='linked'>
              Actively linked to Yaba, Lagos Nigeria.
            </span>
          </p>

          <p className='sub-title'>
            Expected arrival date: Between 22nd September and 26th September
            20222
          </p>
          <div className='cart'>
            <CartTotal total={total} cart={cart} />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Payment;
