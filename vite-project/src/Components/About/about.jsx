import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./about.css";

const about = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="Breandcrumb">
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#" className="breandItem">
                  Home
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="about-card d-flex">
          <div className="about-img">
            <img src="About-img-1.png" alt="" />
          </div>
          <div className="about-text">
            <h5> о нас</h5>
            <h1>
              Компания <span>Golden Soft</span>
            </h1>
            <p className="about-paragrph">
              Sit tempor ante justo amet duis. Ultricies cras eleifend elit,
              posuere et risus non. Id et ut pellentesque consequat, amet erat
              gravida euismod pharetra.
            </p>
          </div>
        </div>
        <section className="bg__color">
          <div className="container info-num-and-text">
            <div className="width">
              <h1 className="info-num">5,567</h1>
              <p className="info-text">Счастливых клиентов</p>
            </div>
            <div className="width">
              <h1 className="info-num">1245</h1>
              <p className="info-text">Продуктов на выбор</p>
            </div>
            <div className="width">
              <h1 className="info-num">372</h1>
              <p className="info-text">Продаж в день</p>
            </div>
            <div className="width">
              <h1 className="info-num">20</h1>
              <p className="info-text">Лет на рынке</p>
            </div>
          </div>
        </section>
        <div className="group-card d-flex  justify-content-between">
          <div className="about-text">
            <h5>наша миссия</h5>
            <img src="Group.png" alt="" />
            <p className="about-paragrph">
              Sit tempor ante justo amet duis. Ultricies cras eleifend elit,
              posuere et risus non. Id et ut pellentesque consequat, amet erat
              gravida euismod pharetra.
            </p>
          </div>
          <div className="about-img">
            <img src="about-group-img.png" alt="" />
          </div>
        </div>
        <div className="bg-massage ">
          <div className="card-message d-flex justify-content-between">
            <div className="Itemcard">
              <h2>Остались вопросы?</h2>
              <p>
                Если у вас возникли какие-то вопросы по поводу оптовых заказов,
                заполните форму и мы Вам перезвоним.
              </p>
              <form>
                <ul>
                  <li>
                    <input type="name"placeholder="Ваше имя" />
                  </li>
                  <li>
                    <input type="email" placeholder="Ваше Email"/>
                  </li>
                  <li>
                    <a href="#">
                      <button>Отправить</button>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
            <div className="about-conacts">
              <h2>Контакты</h2>
              <div className="card-text-contacts d-flex">
                <div className="cards">
                  <div className="card-text">
                    <b>Наш адрес</b>
                    <p>Россия , Ростов-на-дону улюБагачева ,16</p>
                  </div>
                </div>
                <div className="cards">
                  <div className="card-text">
                    <b>Телефоны</b>
                    <p>+7 (988) 565 00 38 +375 33 662 82 56</p>
                  </div>
                </div>
                <div className="cards">
                  <div className="card-text">
                    <b>Email</b>
                    <p>vladpertcev@mail.ru korobko416@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="card-img-contacts">
           <img src="about-contact_img-3.png" alt="" />
           <img src="about-contact_img-2.png" alt="" />
           <img src="about-contact_img-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default about;
