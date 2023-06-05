import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHeart,
  faShoppingCart,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Collapse, NavbarToggler } from "reactstrap";
import Catalog from "../Catalog/Catalog";
import  { useState } from "react";
import "./Header.css";
import { links } from "../Data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [selectedImage, setSelectedImage] = useState(null);



  const handleLinkClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  return (  
    <div>
      <navbar className="navbar">
            <div className="container d-flex justify-content-between">
          <div className="d-flex navbar-links">
            <div className="brand-logo">
              <img src="Logo.png" alt="logo" />
            </div>
            <div className="nav-item ">
              <ul className="d-flex">
                <li className="nav-links"><a href="">Главная</a></li>
                <li className="nav-links"><a href="">Каталог</a>
                  <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
                </li>
                <li className="nav-links"><a href="">Оптовая продажа</a></li>
                <li className="nav-links"><a href="">О нас</a></li>
              </ul>
            </div>
          </div>
          <div className="toggle">
            <NavbarToggler onClick={toggle} navbar className="toggle" />
          </div>

          <div className="nav-contacts d-flex ">
            <div className="contact__tel">
              <FontAwesomeIcon icon={faPhone} className="icon-tel" />
              <a href="tel:935588494">+7 (966) 55 88 499</a>
            </div>
            <div className="basket-icons">
              <FontAwesomeIcon icon={faHeart} className="basket-icon" />
              <FontAwesomeIcon icon={faShoppingCart} className="basket-icon" />
            </div>
          </div>
        </div>
        <Collapse isOpen={!isOpen} className="collapse" navbar>
          <div className="nav-item me-auto">
            <ul>
              <li className="nav-links">Главная</li>
              <li className="nav-links">
                Каталог{" "}
                <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
              </li>
              <li className="nav-links">Оптовая продажа</li>
              <li className="nav-links">О нас</li>
            </ul>
          </div>
        </Collapse>
      </navbar>
      <div className="popUp ">
        <div className="popUp-text">
          <ul>
         <li>
         {links.map((link) => (
        <a
          key={link.id}
          href={<Catalog />}
          onMouseEnter={() => handleLinkClick(link.imagePath)}
          className="popUp-link"
        >
          {link.text} <br/>
        </a>
      ))}
       {selectedImage && <img src={selectedImage} alt="Изображение" />}
         </li>
            <li>
              <a href={<Catalog />}>
                <button className="popUpButton">Смотреть все</button>
              </a>
            </li>
          </ul>
        </div>
        <div className="popUp-img"></div>
      </div>
    </div>
  );
};

export default Header;
