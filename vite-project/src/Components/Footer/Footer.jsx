import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import '../assets/images/Logo.png'

const Footer = () => {
  return (
    <>  
      <section className="section-back-gr">
        <div className="d-flex justify-content-center">
          <div className="text-email">
            <h1>Мы Вам перезвоним</h1>
            <p>Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div class="input-mail-btn">
              <input className="enter-name-and-email" type="text" placeholder="   Ваше имя" />
              <input className="enter-name-and-email" type="email" placeholder="   Ваш Email" />
              <input className="email-request-btn" type="submit" value="Отправить" />
          </div>
        </div>
      </section>
      <footer>
        <div className="container d-flex collaps">
          <div className="icon-item">
            <div className="footerLogo">
              <img src='Logo.png' alt="logo" />
            </div>
            <div className="footer-contact_icons">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <FontAwesomeIcon icon={faTwitter} className="icon" />
              <FontAwesomeIcon icon={faFacebookF} className="icon" />
            </div>
          </div>
          <div className="footer-contact_text d-flex justify-content-between">
            <div className="contact-text">
              <ul>
                <li>
                  <b>Навигация</b>
                </li>
                <li className="navLinks">Главная</li>
                <li className="navLinks">Каталог</li>
                <li className="navLinks">Оптовая продажа</li>
                <li className="navLinks">О нас</li>
              </ul>
            </div>
            <div className="contact-text">
              <ul>
                <li>
                  <b>Наши контакты</b>
                </li>
                <li className="navLinks">Телефоны</li>
                <li>+7 (988) 565 00 38</li>
                <li>+375 33 662 82 56</li>
                <li className="navLinks">Email</li>
                <li>vladpertcev@mail.ru</li>
                <li>korobko416@gmail.com</li>
              </ul>
            </div>
            <div className="contact-text">
              <ul>
                <li>
                  <b>Наш адрес</b>
                </li>
                <li className="navLinks">
                  Россия, Ростов-на-Дону <br /> ул. Богачева, 16
                </li>
              </ul>
            </div>
            <div className="contact-text">
              <ul>
                <li>
                  <b>Информация</b>
                </li>
                <li className="navLinks">Доставка и оплата</li>
                <li className="navLinks">Гарантии</li>
                <li className="navLinks">Возврат товара</li>
              </ul>
            </div>
          </div>
          <div className="text-sublime">
            <h6>© 2021 Golden Soft All rights reserved.</h6>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
