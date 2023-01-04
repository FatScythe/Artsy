import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
// CSS
import "./navbar.css";

//Icon
import {
  CartIcon,
  ChatIcon,
  CloseIcon,
  Harmburger,
  NotiIcon,
  SearchIcon,
} from "../Icons/icons";
// Data
import { links } from "./Navlinks";
// Context
import { useGlobalArtsyContext } from "../../context/context";

const Navbar = () => {
  const [isSiderBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useGlobalArtsyContext();
  console.log(cart);

  return (
    <nav className='container top-nav'>
      <div className='harmburger-btn' onClick={() => setIsSideBarOpen(true)}>
        <Harmburger />
      </div>

      <div className='logo stix ' onClick={() => navigate("/")}>
        ARTSY.
      </div>

      <ul className={`${isSiderBarOpen ? "open" : ""} links`}>
        <div className='side-bar container'>
          <div className='logo stix' onClick={() => navigate("/")}>
            ARTSY.
          </div>

          <div className='close-btn' onClick={() => setIsSideBarOpen(false)}>
            <CloseIcon />
          </div>
        </div>

        {links.map((to) => {
          const { id, link, name } = to;
          return (
            <NavLink key={id} to={link} onClick={() => setIsSideBarOpen(false)}>
              <li>{name}</li>
            </NavLink>
          );
        })}

        <div className='chat-btn'>
          <ChatIcon />
        </div>
      </ul>

      <div className='nav-btn'>
        <button className='search-btn'>
          <Link to='/market'>
            <SearchIcon />
          </Link>
        </button>
        <button className='cart-btn'>
          {cart.length !== 0 && <span className='number'>{cart.length}</span>}
          <Link to='/checkout/cart'>
            <CartIcon />
          </Link>
        </button>
        <button className='notification-btn'>
          <NotiIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
