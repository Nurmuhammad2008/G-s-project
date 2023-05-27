
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
   
 
  return (
    <>
    <footer>
        <div className="container d-flex " color='dark'>
          <div className="footerLogo">
            <img src="" alt="logo" />
          </div>
          <div className="footer-contact_icons">
            
          </div>
          <div className="footer-contact_text d-flex">
            <div className="contact-text">
                <ul>
                    <li><b>Навигация</b></li>
                    <li>Главная</li>
                    <li>Каталог</li>
                    <li>Оптовая продажа</li>
                    <li>О нас</li>
                </ul>
            </div>
            <div className="contact-text">
                <ul>
                    <li><b>Наши контакты</b></li>
                    <li className='links'>Телефоны</li>
                    <li>+7 (988) 565 00 38</li>
                    <li>+375 33 662 82 56</li>
                    <li>Email</li>
                    <li>vladpertcev@mail.ru</li>
                    <li>korobko416@gmail.com</li>
                </ul>
            </div>
            <div className="contact-text">
                <ul>
                    <li><b>Наш адрес</b></li>
                    <li >Россия, Ростов-на-Дону <br /> ул. Богачева, 16</li>
                </ul>
            </div>
            <div className="contact-text">
                <ul>
                    <li><b>информация</b></li>
                    <li>Доставка и оплата</li>
                    <li>Гарантии</li>
                    <li>Возврат товара</li>
                </ul>
            </div>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer