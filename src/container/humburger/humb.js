import React from "react";
import ReactDOM from "react-dom";
import clas from "./main.module.scss";
import "./main.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Arrow from '../../assets/icons/free.png'

const Humburger = ({ active, setState }) => {
    const location = useLocation()
    useEffect(() => {
        setState(false)
    }, [location])
    
    const [mini_items, setMini_items] = useState({
        first: false,
        second: false,
        thirt: false
    })

    const clickOne = () => {
        setMini_items({
             first: !mini_items.first,
             second: false,
             thirt: false 
        })
    }
    const clickTwo = () => {
        setMini_items({
            first: false,
            second: !mini_items.second,
            thirt: false 
       })
    }
    const clickThirt = () => {
        setMini_items({
            first: false,
            second: false,
            thirt: !mini_items.thirt 
       })
    }

    const refTwo = useRef(null);
    useEffect(() => {
        const home = document.querySelector(".App");
        const body = document.querySelector("body");
        if (active) {
            refTwo.current.classList.add("active");
            setTimeout(() => {
            }, 300);
            home.classList.add("active");
            body.classList.add("active");
        } else {
            setTimeout(() => {
                refTwo.current.classList.remove("active");
            }, 0);
            home.classList.remove("active");
            body.classList.remove("active");
        }
    }, [active]);



    return ReactDOM.createPortal(
        <React.Fragment>
            <div ref={refTwo} className="Humburger">
                <button onClick={() => setState(false)} className={clas.close_btn}>&times;</button>
                <Link to={'/profile'} className={clas.enter_profile}>Войти в личный кабинет</Link>
                <ul
                    className={clas.menu_ul}
                >
                    <li>
                        <div className={clas.menu_heading}>
                            <Link to={"/writers"} className={`${clas.menu_link} ${clas.arrow}`}>
                                Авторы
                            </Link>
                            <button onClick={clickOne} className={`${clas.btn} ${mini_items.first ? clas.active : ''}`}><img src={Arrow} alt="" /></button>
                        </div>
                        <div className={`${clas.mini_items2} ${mini_items.first ? clas.active : ''}`}>
                            <ul>
                                <li><button>Произведения авторов</button></li>
                                <li><button>Молодые писатели</button></li>
                                <li><button>Популярные писатели</button></li>
                            </ul>
                        </div>
                    </li>
                    <li >
                        <Link to={"/about"} className={clas.menu_link}>
                            О нас
                        </Link>
                    </li>
                    <li >
                        <div className={clas.menu_heading}>
                            <Link to={'/'} className={`${clas.menu_link} ${clas.arrow}`}>
                                Каталог
                            </Link>
                            <button className={mini_items.second ? clas.active : ''} onClick={clickTwo}><img src={Arrow} alt="" /></button>
                        </div>
                        <div className={`${clas.mini_items} ${mini_items.second ? clas.active : ''}`}>
                            <ul>
                                <li><button>Художественная литература</button></li>
                                <li><button>Психология и мотивация</button></li>
                                <li><button>Досуг и хобби</button></li>
                                <li><button>Бизнес</button></li>
                                <li><button>Детская литература</button></li>
                                <li><button>Для родителей</button></li>
                                <li><button>Для школы</button></li>
                                <li><button>Для подростков</button></li>
                                <li><button>Научно-популярные издания</button></li>
                                <li><button>Скоро в продаже</button></li>
                            </ul>
                        </div>
                    </li>
                    <li >
                        <Link to={"/edition"} className={clas.menu_link}>
                            Букинистика
                        </Link>
                    </li>
                    <li >
                        <Link to={"/sale"} className={clas.menu_link}>
                            Акции
                        </Link>
                    </li>
                    <li >
                        <Link to={"/book-series"} className={clas.menu_link}>
                            Серии
                        </Link>
                    </li>
                    <li>

                        <div className={clas.menu_heading}>
                            <Link to={"/rating"} className={`${clas.menu_link} ${clas.arrow}`}>
                                Рейтинги
                            </Link>
                            <button className={mini_items.thirt ? clas.active : ''} onClick={clickThirt}><img src={Arrow} alt="" /></button>
                        </div>
                        <div className={`${clas.mini_items3} ${mini_items.thirt ? clas.active : ''}`}>
                            <ul>
                                <li><button>Авторов</button></li>
                                <li><button>Издательств</button></li>
                                <li><button>Книг и журналов</button></li>
                            </ul>
                        </div>
                    </li>
                    <li >
                        <Link to={"/auction"} className={clas.menu_link}>
                            Аукцион
                        </Link>
                    </li>
                    <li>
                        <Link to={"/spell-checking"} className={clas.menu_link}>
                            Проверка орфографии
                        </Link>
                    </li>
                    <li>
                        <Link to={"/partners"} className={clas.menu_link}>
                            Нашим партнерам
                        </Link>
                    </li>
                    <li >
                        <Link to={"/delivery"} className={clas.menu_link}>
                            Доставка
                        </Link>
                    </li>
                    <li >
                        <Link to={"/work"} className={clas.menu_link}>
                            Работа специалистам
                        </Link>
                    </li>
                    <li >
                        <Link to={"/print"} className={clas.menu_link}>
                            Онлайн печать
                        </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>,
        document.getElementById("portal")
    );
};

export default Humburger;
