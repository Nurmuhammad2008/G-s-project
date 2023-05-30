import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../assets/Icons/Group.png';
import evaluateIcon from '../assets/Icons/evaluate.png';

const Main = () => {
  return (
    <>
      <section className='bg__color'>
        <div className='container info-num-and-text'>
          <div className='width'>
            <h1 className='info-num'>5,567</h1>
            <p className='info-text'>Счастливых клиентов</p>
          </div>
          <div className='width'>
            <h1 className='info-num'>1245</h1>
            <p className='info-text'>Продуктов на выбор</p>
          </div>
          <div className='width'>
            <h1 className='info-num'>372</h1>
            <p className='info-text'>Продаж в день</p>
          </div>
          <div className='width'>
            <h1 className='info-num'>20</h1>
            <p className='info-text'>Лет на рынке</p>
          </div>       
        </div>
      </section>    

      <section>
        <h1 className='golden_ser'>Почему GoldenService? </h1>
        <div className='container d-flex justify-content-center'>
          <div className="information-golden-ser">
            <img className='icons-center' src={icon} alt="icon" />
            <p>Возврат удвоенной стоимости каждого замка в случае брака. </p>
          </div>
          <div className="information-golden-ser">
            <img className='icons-center' src={evaluateIcon} alt="icon" />
            <p>Наносим ваш логотип компании на наш продукт</p>
          </div>
          <div className="information-golden-ser">
            <img className='icons-center' src={icon} alt="icon" />
            <p>Возврат удвоенной стоимости каждого замка в случае брака. </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main;