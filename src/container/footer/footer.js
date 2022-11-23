import clas from './main.module.scss'
import { Link } from 'react-router-dom'
import { Mail, Phone, Location } from '../../assets/icons'
const Footer = ()=>{
    return <div className={clas.footer_wrapper}>
        <div className="container">
            <div className={clas.inner}>
                <div className={clas.block}>
                    <Link to={'/'} className={clas.logo_link}>Izdat.uz</Link>
                    <ul>
                        <li><Link to={'/'} className={clas.footer_link}>Каталог</Link></li>
                        <li><Link to={'/about'} className={clas.footer_link}>О нас</Link></li>
                        <li><Link to={'/writers'} className={clas.footer_link}>Авторы</Link></li>
                        <li><Link to={'/edition'} className={clas.footer_link}>Букинистика</Link></li>
                        <li><Link to={'/sale'} className={clas.footer_link}>Акции</Link></li>
                        <li><Link to={'/book-series'} className={clas.footer_link}>Серии</Link></li>
                        <li><Link to={'/rating'} className={clas.footer_link}>Рейтинги</Link></li>
                        <li><Link to={'/auction'} className={clas.footer_link}>Аукцион</Link></li>
                        <li><Link to={'/spell-checking'} className={clas.footer_link}>Проверка орфографии</Link></li>
                        <li><Link to={'/partners'} className={clas.footer_link}>Нашим партнерам</Link></li>
                        <li><Link to={'/delivery'} className={clas.footer_link}>Доставка</Link></li>
                        <li><Link to={'/work'} className={clas.footer_link}>Работа специалистам</Link></li>
                        <li><Link to={'/print'} className={clas.footer_link}>Онлайн печать</Link></li>
                    </ul>
                </div>
                <div className={clas.block}>
                    <ul>
                        О нас
                        <li className={clas.locations_li}><Location/><a className={clas.locations} href="https://www.google.com/maps/place/982R%2BW4V,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3525065,69.3402902,19.75z/data=!4m6!3m5!1s0x38aef47ea3122299:0x4d7fa1bbb7c786c!8m2!3d41.3523956!4d69.3401342!16s%2Fg%2F11hklbyyvb">г. Ташкент адрес</a></li>
                        <li className={clas.locations_li}><Phone/><a className={clas.locations} href="tel:+998 99 999 99 99">+998 99 999 99 99</a></li>
                        <li className={clas.locations_li}><Mail/><a className={clas.locations} href="mailto:mailto@mail.ru">почта</a></li>
                    </ul>
                </div>
                <div className={clas.block}>
                    <div className={clas.connection_header}>
                        <h4>Остались вопросы?</h4>
                        <span>Мы готовы вам помочь</span>
                        <form action="">
                            <input placeholder='Ваше имя' type="text" name="" id="" />
                            <input placeholder='Ваш номер телефона' type="text" name="" id="" />
                            <input placeholder='Ваш E-mail' type="text" name="" id="" />
                            <textarea placeholder='Ваш вопрос' name="" id="" cols="30" rows="10"></textarea>
                            <button>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Footer