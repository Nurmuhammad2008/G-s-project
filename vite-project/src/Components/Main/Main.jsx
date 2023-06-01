import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../assets/Icons/Group.png';
import evaluateIcon from '../assets/Icons/evaluate.png';
import pr1Image from '../assets/ProductsImage/pr1.png'

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

        <section className='container'>
           <h1 className='text-center'>Категории</h1> 
           <div className='box-product'>
            <div className='d-flex justify-content-around'>
                <div className='product-bg-img'>
                    <div className='btn-p-item'>
                        <p>Для отелей</p>
                        <button className='btn-go'>Перейти</button>
                    </div>
                </div>

                <div className='product-bg-img-2'>
                    <div className='btn-p-item'>
                        <p>Для шкафчиков</p>
                        <button className='btn-go'>Перейти</button>
                    </div>
                </div>
            </div>  

            <div className='d-flex justify-content-around mt-5'>
                <div className='product-bg-img-3'>
                    <div className='btn-p-item'>
                        <p>Для офисов</p>
                        <button className='btn-go'>Перейти</button>
                    </div>
                </div>

                <div className='product-bg-img-4'>
                    <div className='btn-p-item'>
                        <p>Замки для дома</p>
                        <button className='btn-go'>Перейти</button>
                    </div>
                </div>
            </div> 

            <div className='d-flex justify-content-center mb-5'>
                <button className='btn-categore mt-5'>Все категории</button>  
            </div>
           </div>
        </section>

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
    </>
  )
}

export default Main;