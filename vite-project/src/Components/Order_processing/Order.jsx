import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { jobCard } from "../Data/data";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Order.css";

const Order = () => {
  const spanColor = {
    color: "rgba(66, 149, 228, 1)",
  };
  const font = {
    fontSize: "24px",
  };

  return (
    <>
      <Header />

      <section className="order_processing">
        <div className="d-flex order container justify-content-between">
          <div className="title-order_processing  ">
            <h2>Оформите заявку и мы вам перезвоним</h2>
            <p>
              Vitae, urna, massa dictumst morbi ut id dui nulla. Purus a velit
              sem viverra. Nunc ac quis donec nunc eu blandit ante nibh. Sit
              felis nulla donec mauris quis nulla velit.
            </p>
          </div>
          <div className="form-order_processing">
            <h2>Оформление заявки</h2>
            <form>
              <label>
                Имя
                <br />
                <input type="name" placeholder="Имя" />
              </label>
              <label>
                Название компании
                <br />
                <input type="name" placeholder="Имя Вашей компании" />
              </label>
              <label>
                Номер телефона
                <br />
                <input type="tel" placeholder="+7 ( _ _ _ ) _ _  _ _  _ _ _" />
              </label>
              <label className="label">
                Название товара <br />
                <div className="div"></div>
                <input
                  type="text"
                  className="input-text "
                  placeholder="Введите название или артикул товара "
                />
              </label>
              <label className="label">
                Количество
                <br />
                <input type="name" placeholder="Количество товара" />
              </label>
            </form>
            <div className="mt-4">
              <p>
                <span>
                  <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                </span>
                Нанесение персонального логотипа (бесплатно)
              </p>
              <p>
                <span>
                  <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                </span>
                Помощь в монтажных работах (бесплатно)
              </p>
            </div>
            <div className="order-form-items d-flex justify-content-between mt-4">
              <p>Приблизительная стоимость</p>
              <a href="#">
                <button>Отправить заявку</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="job-items container ">
          <h1>Как мы работаем</h1>
          <div className="job-cards d-flex justify-content-between">
            {jobCard.map((card) => {
              return (
                <div key={card.id} className="job-card">
                  <img src={card.imagePath} alt="img" />
                  <b className="mt-5">{card.title}</b>
                  <p className="mt-3">{card.text}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="choose-items">
          <h1 className="container mb-5">Почему стоит выбрат нас</h1>
          <div className="d-flex">
            <div className="choose-img">
              <img src="/src/images/Rectangle 804.png" alt="" />
            </div>
            <div className="choose-text">
              <ul>
                <li>
                  <b>
                    <span>
                      <img
                        className="choose-text-icon"
                        src="/src/images/choose-text_icons/Group1.png"
                        alt="img"
                      />
                    </span>
                    Возврат удвоенной стоимости
                  </b>
                  <p>
                    За каждый отправленый товар который окажеться бракованным,
                    мы вернем вам двойную стоимость.
                  </p>
                </li>
                <li>
                  <b>
                    <span>
                      <img
                        className="choose-text-icon"
                        src="/src/images/choose-text_icons/image 2.png"
                        alt="img"
                      />
                    </span>
                    Монтаж
                  </b>
                  <p>
                    Проводим монтажные работы любой сложности и в любое удобное
                    для Вас время
                  </p>
                </li>
                <li>
                  <b>
                    <span>
                      <img
                        className="choose-text-icon"
                        src="/src/images/choose-text_icons/Vector (3).png"
                        alt="img"
                      />
                    </span>
                    Брендирование продукта
                  </b>
                  <p>
                    Мы нанесем Ваш логотип любой сложности на свою продукцию,
                    чтобы прибавить ей эксклюзивности{" "}
                  </p>
                </li>
                <li>
                  <b>
                    <span>
                      <img
                        className="choose-text-icon"
                        src="/src/images/choose-text_icons/Group1.png"
                        alt="img"
                      />
                    </span>
                    Брендирование продукта
                  </b>
                  <p className="li-text">
                    Мы нанесем Ваш логотип любой сложности на свою продукцию,
                    чтобы прибавить ей эксклюзивности{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="company p-5">
          <div className="container">
            <h1>Наши крупные проекты</h1>
            <div className="corusel-items d-flex justify-content-between mt-5 ">
              <div className="corusel-img">
                <img src="/src/images/Image (1).png" alt="" />
              </div>
              <div className="corusel-text">
                <img src="/src/images/radisson-dark 1.png" alt="" /> <br />
                <div className="mt-4">
                  <b>Проект для гостинницы Radisson Hotels</b>
                  <p>
                    <span>
                      <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Установлено 123 Вариативных замка Golden Soft для отеля
                  </p>
                  <p>
                    <span>
                      <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Было нанесено личный брендинг на все замки{" "}
                  </p>
                  <p>
                    <span>
                      <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Были проведны монтажные работы, также была произведена
                    помощь в пкделючении замков к системе
                  </p>
                  <h2 style={font}>
                    Бюджет - <span style={spanColor}> $5000</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="question">
          <div className="question-container container text-center">
            <h1>Остались вопросы?</h1>
            <p className="">
              Если у вас возникли какие-то вопросы по поводу оптовых заказов,
              заполните форму и мы Вам перезвоним.
            </p>
            <div className="question-inputs d-flex justify-content-center">
              <input type="text" />
              <input type="text" />
              <a href="#"><button>Отправить</button></a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Order;
