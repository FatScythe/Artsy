import "./footer.css";
import { links } from "../Navbar/Navlinks";
import { Link, useNavigate } from "react-router-dom";
import { LocationIcon, MailIcon } from "../Icons/icons";
import { useGlobalArtsyContext } from "../../context/context";

const Footer = () => {
  const { footerContainer } = useGlobalArtsyContext();
  const navigate = useNavigate();
  return (
    <footer ref={footerContainer}>
      <h2 className='d-md-none'>REACH US</h2>
      <div className='container'>
        <div className='logo clash d-none' onClick={() => navigate("/")}>
          ARTSY.
        </div>
        <div className='links d-none'>
          {links.map((to) => {
            const { id, link, name } = to;
            return (
              <Link key={id} to={link}>
                <li>{name}</li>
              </Link>
            );
          })}
        </div>

        <div className='services d-none'>
          <Link to='/'>
            <li>Blog</li>
          </Link>
          <Link to='/'>
            <li>Wallet</li>
          </Link>
          <Link to='/'>
            <li>Rates</li>
          </Link>
          <Link to='/'>
            <li>High bids</li>
          </Link>
        </div>

        <div className='contact'>
          <a href='mailto: holadhayo28@gmail.com'>
            <span>
              <MailIcon />
            </span>
            <span>artsystudios@gmail.com</span>
          </a>

          <a href='/'>
            <span>
              <LocationIcon />
            </span>
            <span>Lagos, Nigeria.</span>
          </a>
        </div>
      </div>

      <div className='copyright d-none'>
        Artsystudios © 2022. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
