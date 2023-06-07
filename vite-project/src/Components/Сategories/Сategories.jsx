import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cotegories_card from "../Data/data";
import Footer from "../Footer/Footer";

const Сategories = () => {
  return (
    <>
    <section className="breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Главная</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Каталог</BreadcrumbItem>
      </Breadcrumb>
      </section>
      <main className="Categories__products  text-center">
        <div className="title p-5 text-center">
          <h1>Категории</h1>
        </div>
        <div className="product-cards ">
          {Cotegories_card.map((card) => {
            return (
              <div key={card.id} className="card-product">
                <img src={card.imagePath} alt="img" />
                <p>{card.text}</p>
              </div>
            );
          })}
          <div className="button-container d-flex">
            <a href="#">
              <button className="button">Смотреть все</button>
            </a>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Сategories;
