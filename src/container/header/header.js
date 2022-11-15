import React, { useState } from 'react'
import clas from './main.module.scss'
import { Link } from 'react-router-dom'
import { ShopBasket, Search } from '../../assets/icons'
import { BurgerBtn } from '../../assets/icons'

const Header = ()=>{
    const [lang, setLang] = useState(true)
    const changeLang = ()=>{
        setLang(!lang)
    }
    const [activeSidebar, setActiveSidebar] = useState(false)
    return <React.Fragment>
        <div className={clas.Header_wrapper}>
            <div className="container">
                <div className={clas.inner}>
                    <div className={`${clas.header_navs} ${clas.burger}`}>
                        <div className={clas.burger_btn} onClick={()=> setActiveSidebar(!activeSidebar)}><BurgerBtn/></div>
                        <div className={clas.logo}><Link className={clas.logo_link} to={'/'}>Izdat.uz</Link></div>
                    </div>
                    <div className={clas.header_navs}>
                        <ul className={clas.header_links}>
                            <li><Link className={clas.link} to={'/catalog'}>Каталог</Link></li>
                            <li><Link className={clas.link}  to={'/about'}>О проекте</Link></li>
                            <li><Link className={clas.link}  to={'/shippingPayment'}>Доставка и оплата</Link></li>
                            <li><Link className={clas.link}  to={'/contact'}>Контакты</Link></li>
                        </ul>
                    </div>
                    <div className={clas.header_navs_term}>
                        <div className={clas.search}><input placeholder='Поиск' type="search" name="" id="" /> <button><Search/></button></div>
                        <div className={clas.lang}>{lang ? <button onClick={changeLang}>ЎЗ</button> :<button onClick={changeLang}>Рус</button>}</div>
                        <div className={clas.korzinka}><ShopBasket/></div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Header