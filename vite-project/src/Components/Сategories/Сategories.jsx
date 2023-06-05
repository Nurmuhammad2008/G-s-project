import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cotegories_card from "../Data/data";
import "./Categories.css";

const Сategories = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Главная</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Каталог</BreadcrumbItem>
      </Breadcrumb>
      <div className="Categories__products container text-center">
        <div className="title">
          <h1>Категории</h1>
        </div>
        <div className="product-cards">
          {Cotegories_card.map((card) => {
            return (
              <div key={card.id} className="card-product">
                {card.imagePath}
                {card.text}
              </div>
            );
          })}
        </div>
        <a href="#"><button className="button">Смотреть чощо</button></a>
      </div>
    </>
  );
};

export default Сategories;
