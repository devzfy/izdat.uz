import React, { useState, useRef, useEffect } from 'react'
import clas from './main.module.scss'
import { Link } from 'react-router-dom'
import { ShopBasket, Search, Close } from '../../assets/icons'
import { BurgerBtn } from '../../assets/icons'
import {GetData} from '../../hooks/getdata'
const Header = ()=>{
    const ref = useRef(null)
    const [search, setSearch] = useState('')
    const [lang, setLang] = useState(true)
    const [active, setActive] = useState(false)
    const [loading, data, error] = GetData(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=paid-ebooks&key=AIzaSyC9ROl3QupFvo-5ZqG3AD7LS_ECZqy8GsI`)    
    console.log(data, "error");
    const open = () =>{
        console.log(ref);
        setActive(true)
        document.body.classList.add('active')
        document.querySelector('input').setAttribute('autoFocus', 'true')
    }
    const close = ()=>{
        setActive(false)
        document.body.classList.remove('active')
    }
    const changeLang = ()=>{
        setLang(!lang)
    }
    
    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
      }, [open]);
    const [activeSidebar, setActiveSidebar] = useState(false)
    return <React.Fragment>
        <header>
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
                            <li><Link className={clas.link}  to={'/delivery'}>Доставка и оплата</Link></li>
                            <li><Link className={clas.link}  to={'/contact'}>Контакты</Link></li>
                        </ul>
                    </div>
                    <div className={clas.header_navs_term}>
                        <div className={clas.search} style={{cursor: 'pointer'}} onClick={()=> open()}><Search/></div>
                        <div className={clas.lang}>{lang ? <button onClick={changeLang}>ЎЗ</button> :<button onClick={changeLang}>Рус</button>}</div>
                        <div className={clas.korzinka}><ShopBasket/></div>
                    </div>
                </div>
            </div>

            <div className={`${clas.search_engine} ${active ? clas.active : null}`}>
                <div className="container">
                    <div className={clas.search_wrapper}>
                        <div className={clas.inner}>
                            <input ref={ref} onChange={(e) => setSearch(e.target.value)}  placeholder='Поиск' type="text" name="" id="" />
                            <div className={clas.close}><button onClick={close}><Close/></button></div>
                        </div>
                        {
                            data.totalItems !== 0 || error ? (
                                <div className={clas.search_results}>
                            {
                                data?.items?.slice(0,3).map(el => {
                                    return <div className={clas.result_cards}>
                                    <div className={clas.name}>
                                    <img src={el.volumeInfo.imageLinks.smallThumbnail} alt="" />
                                    <div>
                                    <h3>{el.volumeInfo.title}</h3>
                                        <span>{el.volumeInfo.publishedDate}</span>
                                    </div>
                                    </div>
                                    <div className={clas.info}>
                                        <span>{el.volumeInfo.authors && el.volumeInfo.authors[0] ? el.volumeInfo.authors[0] : el.volumeInfo.authors }</span>
                                        <span>{el.volumeInfo.averageRating ? el.volumeInfo.averageRating : 0}</span>
                                    </div>
                                </div>
                                })
                            }
                        </div>
                            ): null
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        </header>
    </React.Fragment>
}

export default Header