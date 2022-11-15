import clas from "./main.module.scss";
import "./anime.scss";
import { Rating } from "react-simple-star-rating";
import { Sale, Korzina, True } from "../../assets/icons";
import { useState } from "react";
import Title from 'react-vanilla-tilt'
const Shopcard = ({
  image,
  title,
  rate,
  rateCount,
  price,
  sale,
  saleprice,
}) => {
  const [active, setActive] = useState(false);
  return (
    <Title className="vanilla">
        <div className={`${clas.shopcard_wrapper} card`}
    >
      <div className={clas.sale}>{sale ? <Sale /> : null}</div>
      <div className={clas.image}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <div className={clas.rate}>
        <Rating initialValue={rate} size={20} />
        <span className={clas.rateCount}>({rateCount})</span>
      </div>
      <div className={clas.price}>
        <span>{price} сум</span>
        {saleprice !== "" ? <span>{saleprice}сум</span> : null}
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
          <i class="fas fa-shopping-cart"></i>
          <i class="fas fa-box"></i>
        </button>
      </div>
    </div>
    </Title>
  );
};

export default Shopcard;
