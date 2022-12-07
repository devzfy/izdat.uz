import React from "react";
import clas from "./main.module.scss";
import { Recommend } from "../../container";
import Image from '../../assets/images/Rectangle 74.png'
import Image1 from '../../assets/images/Rectangle 75.png'
import Image2 from '../../assets/images/Rectangle 76.png'
import Image3 from '../../assets/images/Rectangle 73.png'
import { Plus } from "../../assets/icons";
const About = () => {
  return (
    <React.Fragment>
      <div className={clas.About_wrapper}>
        <div className="container">
          <div className={clas.holder}>
            <h1>О проекте</h1>
          </div>
          <div className={clas.block_first}>
            <div className={clas.side}>
              <h1>
                <span>Izdat.uz</span> - уникальная платформа способствующая
                взаимодействию авторов и издательств
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices sit nisi auctor volutpat faucibus at viverra amet,
                urna. Neque, aliquet scelerisque nunc arcu malesuada augue
                fermentum. In ornare non mauris curabitur a felis natoque etiam.
                Adipiscing nulla magna integer orci, diam non enim. Tempor sit
                velit sed quis convallis lectus sagittis odio. In ornare non
                mauris curabitur a felis natoque etiam. Tempor sit velit sed
                quis convallis lectus sagittis odio. In ornare non mauris
                curabitur a felis natoque etiam.
              </p>
            </div>
            <div className={clas.side}>
              <img src={Image1} alt="" />
              <img src={Image} alt="" />
            </div>
          </div>
          <div className={clas.block_second}>
            <div className={clas.side}>
                <img src={Image3} alt="" />
            </div>
            <div className={clas.side}>
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
            </div>
          </div>

          <div className={clas.our_advantages}>
            <h1>Наши преимущества</h1>
            <div className={clas.advantages}>
                <div className={clas.advantages_card}>
                    <span className={clas.number}>8000<Plus/></span>
                    <span className={clas.text}>довольных потребителей</span>
                </div>
                <div className={clas.advantages_card}>
                    <span className={clas.number}>2900<Plus/></span>
                    <span className={clas.text}>качественного ассортимента</span>
                </div>
                <div className={clas.advantages_card}>
                    <span className={clas.number}>1000<Plus/></span>
                    <span className={clas.text}>антикварных книг</span>
                </div>
            </div>
          </div>

          <Recommend/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
