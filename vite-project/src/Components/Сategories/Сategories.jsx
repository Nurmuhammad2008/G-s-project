import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Categories.css"

const Сategories = () => {
  return (
    <>
 <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">
        Главная
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Каталог
    </BreadcrumbItem>
  </Breadcrumb>
  </>
  )
}

export default Сategories