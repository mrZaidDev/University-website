import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const ulRef = useRef(null)
  const [isOpen,setIsOpen] = useState(false)
  useEffect(() => {
    const handleScrolling = () => {
      if (window.scrollY < 50) {
        setSticky(false);
      } else {
        setSticky(true);
      }
    };
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  const handleMenuIconClick = ()=> {
    if(!isOpen){
      setIsOpen(true)
      ulRef.current.style.right = 0
    }
    else{
      setIsOpen(false)
      ulRef.current.style.right = '-200px'
    }
  }

  return (
    <nav className={`container ${!sticky ? "transparent" : "dark-nav"}`}>
      <img className="logo" src={logo} alt="logo" />
      <ul ref={ulRef}>
        <li>
          <Link smooth={true} offset={0} duration={500} to="hero">
            Home
          </Link>
        </li>
        <li>
          <Link smooth={true} offset={-270} duration={500} to="engineers">
            Program
          </Link>
        </li>
        <li>
          <Link smooth={true} offset={-150} duration={500} to="about">About Us
          </Link>
        </li>
        <li>
          <Link smooth={true} offset={-350} duration={500} to="campus">
            Campus
          </Link>
        </li>
        <li>
          <Link smooth={true} offset={-260} duration={500} to="testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link smooth={true} offset={0} duration={500} to="contact" className="btn">Contact us</Link>
        </li>
      </ul>
      <img src={menu_icon} onClick={handleMenuIconClick} className="menu-icon" alt="" />
    </nav>
  );
};

export default Navbar;
