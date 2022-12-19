import React from "react";
import ReactDOM from "react-dom";
import clas from "./main.module.scss";
import "./main.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Arrow from '../../assets/icons/free.png'

const Humburger = ({ active, setState }) => {
    const location = useLocation()
    useEffect(()=>{
        setState(false)
    },[location])
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const [mini_items, setMini_items] = useState(' ')
  const home = document.getElementById("root");
  const body = document.querySelector("body");
  const ref = useRef(null);
  const refTwo = useRef(null);
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        ref.current.classList.add("active");
        refTwo.current.classList.add("active");
      }, 400);
    } else {
      ref.current.classList.remove("active");
      refTwo.current.classList.remove("active");
    }
  }, [active]);
  if (active) {
    home.classList.add("active");
    body.classList.add("active");
  } else {
    home.classList.remove("active");
    body.classList.remove("active");
  }
  return ReactDOM.createPortal(
    <React.Fragment>
      <div ref={ref} onClick={() => setState(false)} className="overlay"></div>
      <div ref={refTwo} className="Humburger">
        <Link to={'/profile'} className={clas.enter_profile}>Войти в личный кабинет</Link>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className={clas.menu_ul}
        >
          <motion.li variants={item}>
            <div className={clas.menu_heading}>
            <Link  to={"/writers"} className={`${clas.menu_link} ${clas.arrow}`}>
            Авторы
            </Link>
                <button onClick={()=> setMini_items('first')}><img src={Arrow} alt="" /></button>
            </div>
            <div className={`${clas.mini_items2} ${mini_items === 'first' ? clas.active : ''}`}>
                <ul>
                    <li><button>Произведения авторов</button></li>
                    <li><button>Молодые писатели</button></li>
                    <li><button>Популярные писатели</button></li>
                </ul>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/about"} className={clas.menu_link}>
              О нас
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <div className={clas.menu_heading}>
                <Link  className={`${clas.menu_link} ${clas.arrow}`}>
                Каталог
                </Link>
                <button onClick={()=> setMini_items('second')}><img src={Arrow} alt="" /></button>
            </div>
            <div className={`${clas.mini_items} ${mini_items === 'second' ? clas.active : ''}`}>
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
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/edition"} className={clas.menu_link}>
              Букинистика
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/sale"} className={clas.menu_link}>
              Акции
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/book-series"} className={clas.menu_link}>
              Серии
            </Link>
          </motion.li>
          <motion.li variants={item}>
            
            <div className={clas.menu_heading}>
            <Link to={"/rating"} className={`${clas.menu_link} ${clas.arrow}`}>
              Рейтинги
            </Link>
                <button onClick={()=> setMini_items('thirt')}><img src={Arrow} alt="" /></button>
            </div>
            <div className={`${clas.mini_items3} ${mini_items === 'thirt' ? clas.active : ''}`}>
                <ul>
                    <li><button>Авторов</button></li>
                    <li><button>Издательств</button></li>
                    <li><button>Книг и журналов</button></li>
                </ul>
            </div>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/auction"} className={clas.menu_link}>
              Аукцион
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/spell-checking"} className={clas.menu_link}>
              Проверка орфографии
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/partners"} className={clas.menu_link}>
              Нашим партнерам
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/delivery"} className={clas.menu_link}>
              Доставка
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/work"} className={clas.menu_link}>
              Работа специалистам
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link to={"/print"} className={clas.menu_link}>
              Онлайн печать
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default Humburger;
