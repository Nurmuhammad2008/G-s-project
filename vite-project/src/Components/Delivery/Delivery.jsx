import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import "./Delivery.css"
import image_1 from "../assets/1.png"
import image_2 from "../assets/2.png"
import image_3 from "../assets/3.png"
import Header from "../Header/Header";
import Card from "../assets/Icons/Card.png"
import Frame from "../assets/Icons/Frame.png"
import Footer from "../Footer/Footer"

const Delivery = () => {
  return (
    <>
        <Header />
        <section className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                <a href="#" className="main_src">Главная</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Доставка и оплата</BreadcrumbItem>
            </Breadcrumb>
        </section>
        
        <h1 className="container">Доставка</h1>

        <div className="container d-flex justify-content-between">
            <div className="images-content">
                <img className="mt-3" src={image_1} alt="image" />
                <div className="mt-3" >
                    <p style={{fontWeight: `500`}}>| Почта России</p>
                </div>
                <p style={{fontSize: `14px`,}}>
                    <span className="right">
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Получение посылки согласно условиям перевозчика
                </p>
                <p style={{fontSize: `14px`,}}>
                    <span className="right">
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Доставка в течении 1-2 дней
                </p>
            </div>
            <div className="images-content">
                <img className="mt-3" src={image_2} alt="image" />
                <div className="mt-3" >
                    <p style={{fontWeight: `500`}}>| Деловые линии</p>
                </div>
                <p style={{fontSize: `14px`,}}>
                    <span className="right">
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Получение посылки согласно условиям перевозчика
                </p>
                <p style={{fontSize: `14px`,}}>
                    <span className="right">
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Доставка в течении 1-2 дней
                </p>
            </div>
            <div className="images-content">
                <img className="mt-3" src={image_3} alt="image" />
                <div className="mt-3" >
                    <p style={{fontWeight: `500`}}>| СДЭК</p>
                </div>
                <p style={{fontSize: `14px`,}}>
                    <span className="right">
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Получение посылки согласно условиям перевозчика
                </p>
                <p style={{fontSize: `14px`,}}>
                    <span className="right">
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} />
                    </span>
                    Доставка в течении 1-2 дней
                </p>
            </div>
            
        </div>

        <hr className="hr_line container"/>

        <section className="container">
            <h1>Оплата</h1>
            <div className="d-flex mt-4" >
                <img style={{width: `20px`, height: `13.75px`, marginRight: `1rem`, marginTop: `0.6rem`}} src={Card} alt="icon" />
                <p style={{fontStyle: `normal`, fontWeight: `600`, fontSize: `20px`, lineHeight: `30px`}}>Банковская карта</p>
            </div>
            <p style={{
                width: `66%`,
                fontWeight: `400`,
                fontSize: `16px`,
                lineHeight: `24px`,
            }}>Онлайн заказ можно оплатить с помощью банковской карты, выпущенной на территории России. Оформляя заказ на сайте, в пункте «Оплата» выберите «Банковская карта». После переадресации на страницу системы безопасных платежей, необходимо лишь подтвердить платеж.</p>

            <div className="d-flex mt-4" >
                <img style={{width: `24px`, height: `24px`, marginRight: `1rem`, marginTop: `0.3rem`}} src={Frame} alt="icon" />
                <p style={{fontStyle: `normal`, fontWeight: `600`, fontSize: `20px`, lineHeight: `30px`}}>Оплата при получении товара</p>
            </div>
            <p style={{
                width: `66%`,
                fontWeight: `400`,
                fontSize: `16px`,
                lineHeight: `24px`,
            }}>Онлайн заказ можно оплатить непосредственно при получении. Оформляя заказ на сайте, в пункте «Оплата» выберите «Оплата при получении товара». После того как товар будет доставлен к заказчику, после полного осмотра, оплатите стоимость товара удобным для вас способом.</p>
        <hr style={{marginTop: `3.5rem`}} />
        </section>

        <section className="container" style={{marginTop: `3rem`}}>
            <h1>Гарантии</h1>
            <p style={{
                fontWeight: `500`,
                fontSize: `16px`,
                lineHeight: `26px`,
            }} className="mt-4">На все товары, приобретенные в нашем магазине, предоставляется гарантия, дающая право на:</p>


            <p className="text-dot">обмен или возврат товара в срок до 14 дней с момента приобретения;</p>
            <p className="text-dot">обмен или возврат товара на основании акта, выданного Авторизованным сервисным центром по результатам гарантийного обслуживания (в соответствии с Законом РФ «О защите прав потребителей»).
            </p>
            <hr style={{marginTop: `3rem`}} />
        </section>

        <section className="container mt-4" style={{marginBottom: `6rem`}}>
            <h1>Возврат товара</h1>
            <p style={{
                fontWeight: `500`,
                fontSize: `16px`,
                lineHeight: `26px`,
            }} className="mt-4">Подготовьте, пожалуйста, все необходимые документы:
            </p>
            <p className="text-dot">
                выданный продавцом расчетный документ (чек / акт приема-передачи / накладная или др.), подтверждающий факт приобретения;
            </p>
            <p className="text-dot">
                гарантийный талон;
            </p>
            <p className="text-dot">
                документ, удостоверяющий личность;
            </p>
            <p className="text-dot">
                идентификационный налоговый номер (ИНН);
            </p>
            <p className="text-dot">
                в случае оплаты покупки банковской картой – актуальные реквизиты карточного счета.
            </p>

            <p style={{
                fontWeight: `500`,
                fontSize: `16px`,
                lineHeight: `26px`,
            }} className="mt-4">
                Передайте товар на гарантийное обслуживание, обязательно приложите указанные выше документы.
            </p>

            <p style={{width: `65%`}}>
                Полезная информация о правах потребителя в случае приобретения им товара ненадлежащего качества – Закона РФ 
                «О защите прав потребителей».
            </p>
            <p style={{width: `65%`}}>
                Уважаемый покупатель, приносим извинения за неудобства, случившиеся в связи с выходом из строя. По вашему обращению будут приняты все меры для быстрого решения вашей проблемы.
            </p>

        </section>

        <Footer />
    </>
  )
}

export default Delivery