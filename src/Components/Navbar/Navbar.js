import "./navbar.css";
import {
  CartIcon,
  ChatIcon,
  CloseIcon,
  Harmburger,
  NotiIcon,
  SearchIcon,
} from "../Icons/icons";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { links } from "./Navlinks";

const Navbar = () => {
  const [isSiderBarOpen, setIsSideBarOpen] = useState(false);
  const navigate = useNavigate();

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
        <div className='search-btn'>
          <Link to='/market'>
            <SearchIcon />
          </Link>
        </div>
        <div className='cart-btn'>
          <Link to='/checkout/cart'>
            <CartIcon />
          </Link>
        </div>
        <div className='notification-btn'>
          <NotiIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
