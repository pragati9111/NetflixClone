import React, {useEffect, useState} from 'react';
import './Nav.css';

function Nav() {
    const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX" 
            />
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"
            />
    </div>
  );
}

export default Nav;
