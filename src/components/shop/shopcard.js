import clas from "./main.module.scss";
import "./anime.scss";
import { Rating } from "react-simple-star-rating";
import { Sale, Korzina, True, AnimeHeart } from "../../assets/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Title from 'react-vanilla-tilt'
const Shopcard = ({
  image,
  title,
  rate,
  rateCount,
  price,
  sale,
  saleprice,
  link
}) => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  return (
    <Title className="vanilla">
        <Link to={link} className={`${clas.shopcard_wrapper}`}
    >
      <div className={clas.sale}>{sale ? <Sale /> : null}</div>
      <div className={clas.liked}><button onClick={()=> setActive2(true)} className={`heart ${active2 ? 'active' : ''}`}><AnimeHeart/></button></div>
      <div className={clas.image}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <div className={clas.rate}>
        <Rating initialValue={rate} size={15} allowFraction={true}/>
        <span className={clas.rateCount}>({rateCount})</span>
      </div>
      <div className={clas.price}>
        <span>{price}$</span>
        {saleprice !== "" ? <span>{saleprice}</span> : null}
      </div>
      <div className={clas.action_btn}>
        <button className="btn btn-white btn-animate">Купить</button>
        <button
          onClick={() => setActive(true)}
          class={`cart-button ${active ? "clicked" : ""}`}
        >
          <span class="add-to-cart">
            <Korzina />{" "}
          </span>
          <span class="added">
            <True />
          </span>
          <i class="fas fa-shopping-cart fa-2xs" style={{color: '#F7A302'}}></i>
          <i class="fas fa-box"></i>
        </button>
      </div>
    </Link>
    </Title>
  );
};

export default Shopcard;
