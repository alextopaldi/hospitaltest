import { Link } from "react-router-dom";
import { Record } from "../components/Record";
import { records } from "../data/records";

export function Account() {

    const cart2 = require('../media/cart2.png')
    const cart1 = require('../media/cart1.png')
    const cart3 = require('../media/cart3.png')
    const cart4 = require('../media/cart4.png')

    return(
        <>
        <div className='container'>
            <p className='intro'>Записи на прием</p>
            <div className='records-main'>
            {records.slice(0,2).map(record => <Record key={record.id} record={record}/>)}
            <div className='records-main__link'>
                <p>Еще {records.length-2} записи</p>
                <Link className="account-link" to='/appointment'>Подробнее</Link>
            </div>
            </div>
            <p className='intro cart'>Электронная карта</p>
            <div className="cart-items">
            <div className="cart-item">
                <div className="cart-item__img">
                <img src={cart2} alt="" />
                </div>
                <div className='cart-item__text'>
                <p>Информация о пациенте</p>
                <div className="line"></div>
                <ul>
                    <li>Ваши личные данные</li>
                    <li>Рекомендации врачей</li>
                    <li>История болезней</li>
                </ul>
                </div>
            </div>
            <div className="cart-item">
                <div className="cart-item__img">
                <img src={cart1} alt="" />
                </div>
                <div className='cart-item__text'>
                <p>Результаты анализов</p>
                <div className="line"></div>
                <p>Вы можете узнать здесь результаты своих анализов</p>
                </div>
            </div>
            <div className="cart-item">
                <div className="cart-item__img">
                <img src={cart3} alt="" />
                </div>
                <div className='cart-item__text'>
                <p>Добавить информацию</p>
                <div className="line"></div>
                <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
                </div>
            </div>
            <div className="cart-item">
                <div className="cart-item__img">
                <img src={cart4} alt="" />
                </div>
                <div className='cart-item__text'>
                <p>История приемов</p>
                <div className="line"></div>
                <p>Вся информация о полученных услугах за все время хранится здесь</p>
                </div>
            </div>
        </div>
      </div>
    </>
    )
}