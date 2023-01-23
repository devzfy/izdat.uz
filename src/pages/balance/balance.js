import clas from './main.module.scss'
import { Cash, Camera } from '../../assets/icons'

const Balance = () => {
    return <div className={clas.Balance_wrapper}>
        <div className="container">
            <div className={clas.Balance_inner}>
                <h1>Мой баланс на сайте</h1>
                <div className={clas.balance_overall}>
                    <div to="/balance" className={clas.balans}>
                        <div className={clas.cash_title}>
                            <div className={clas.cach_icon}>
                                <Cash />
                            </div>
                            <span>Баланс</span>
                        </div>
                        <div className={clas.cach_amount}>
                            <span>500 000 сум</span>
                        </div>
                    </div>
                    <div className={clas.balance_monthly}>
                        <span>Поступления за октябрь</span>
                        <span>300 000 сум</span>
                    </div>
                </div>
                <div className={clas.upload_book_holder}>
                    <h1>Загрузить книги</h1>
                    <h1>Объявить акцию</h1>
                </div>
                <div className={clas.upload_book}>
                    <form action="">
                        <div className={clas.input_field}>
                            <label htmlFor="">Название книги</label>
                            <input type="text" name="" id="" />
                        </div>
                        
                        <div className={clas.input_field}>
                            <label htmlFor="">Стоимость</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={clas.input_field}>
                            <label htmlFor="">Автор</label>
                            <input type="text" name="" id="" />
                        </div>
                        
                        <div className={clas.input_field}>
                            <label htmlFor="">Издательство</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={clas.input_field}>
                            <label htmlFor="">Кол-во страниц</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={clas.input_field}>
                            <label htmlFor="">Код товара</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={clas.input_field}>
                            <label htmlFor="">Описание </label>
                            <textarea type="text" name="" id="" />
                        </div>
                        <div className={clas.input_field}>
                            <label htmlFor="">Загрузить фото</label>
                            <label htmlFor="image" className={clas.upload_image}>
                                <Camera/>
                            </label>
                            <input className={clas.file} type="file"  name="" id="image" />
                        </div>
                        <div className={clas.upload_btn}><button>Загрузить</button></div>
                    </form>
                    <form action="">
                        <h1>Объявить акцию</h1>
                    <div className={clas.input_field}>
                            <label htmlFor="">Название акции</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={clas.input_field}>
                            <label htmlFor="">Описание </label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={clas.input_field}>
                            <label htmlFor="">Процент скидки</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={clas.input_field}>
                            <label htmlFor="">Загрузить фото</label>
                            <label htmlFor="photo" className={clas.upload_image}>
                                <Camera/>
                            </label>
                            <input className={clas.file} type="file"  name="" id="photo" />
                        </div>
                        <div className={clas.upload_btn}><button>Опубликовать</button></div>
                    </form>
                </div>

                
            </div>
        </div>
        <div className={clas.statistic}>
            <div className={clas.holder}>
                <div className="container">
                    <h1>Статистика</h1>
                </div>
            </div>
            <div className="container">
                <div className={clas.date}>
                    <label htmlFor="">Срок</label>
                    <select name="" id="">
                        <option value="">За 90 дней</option>
                    </select>
                </div>
                <div className={clas.result_cards}>
                    <div className={clas.card}>
                        <span>Рейтинг</span>
                        <span>5,6</span>
                    </div>
                    <div className={clas.card}>
                        <span>Посещаемость</span>
                        <span>70%</span>
                    </div>
                    <div className={clas.card}>
                        <span>Рейтинг</span>
                        <span>5,6</span>
                    </div>
                    <div className={clas.card}>
                        <span>Рейтинг</span>
                        <span>5,6</span>
                    </div>
                    <div className={clas.card}>
                        <span>Рейтинг</span>
                        <span>5,6</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Balance