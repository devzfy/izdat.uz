import clas from "./main.module.scss";
import {  Banner, Recommend } from "../../container";
import React, {  useState } from "react";
import { UpArrow, DownArrow } from "../../assets/icons";
import Image from "../../assets/images/Frame 4.png";

const SpellCheck = () => {
  const [spell, setSpell] = useState();

  function transliterate(word) {
    var answer = "",
      a = {};

    a["Ё"] = "YO";
    a["Й"] = "I";
    a["Ц"] = "TS";
    a["У"] = "U";
    a["К"] = "K";
    a["Е"] = "E";
    a["Н"] = "N";
    a["Г"] = "G";
    a["Ш"] = "SH";
    a["Щ"] = "SCH";
    a["З"] = "Z";
    a["Х"] = "H";
    a["Ъ"] = "'";
    a["ё"] = "yo";
    a["й"] = "i";
    a["ц"] = "ts";
    a["у"] = "u";
    a["к"] = "k";
    a["е"] = "e";
    a["н"] = "n";
    a["г"] = "g";
    a["ш"] = "sh";
    a["щ"] = "sch";
    a["з"] = "z";
    a["х"] = "h";
    a["ъ"] = "'";
    a["Ф"] = "F";
    a["Ы"] = "I";
    a["В"] = "V";
    a["А"] = "А";
    a["П"] = "P";
    a["Р"] = "R";
    a["О"] = "O";
    a["Л"] = "L";
    a["Д"] = "D";
    a["Ж"] = "J";
    a["Э"] = "E";
    a["ф"] = "f";
    a["ы"] = "i";
    a["в"] = "v";
    a["а"] = "a";
    a["п"] = "p";
    a["р"] = "r";
    a["о"] = "o";
    a["л"] = "l";
    a["д"] = "d";
    a["ж"] = "j";
    a["э"] = "e";
    a["Я"] = "Ya";
    a["Ч"] = "CH";
    a["С"] = "S";
    a["М"] = "M";
    a["И"] = "I";
    a["Т"] = "T";
    a["Ь"] = "'";
    a["Б"] = "B";
    a["Ю"] = "YU";
    a["я"] = "ya";
    a["ч"] = "ch";
    a["с"] = "s";
    a["м"] = "m";
    a["и"] = "i";
    a["т"] = "t";
    a["ъ"] = "'";
    a["б"] = "b";
    a["ю"] = "yu";
    a["YO"] = "Ё";
    a["I"] = "Й";
    a["TS"] = "Ц";
    a["U"] = "У";
    a["К"] = "K";
    a["Е"] = "E";
    a["N"] = "Н";
    a["G"] = "Г";
    a["SH"] = "Ш";
    a["SCH"] = "Щ";
    a["Z"] = "З";
    a["H"] = "Х";
    a["'"] = "Ъ";
    a["yo"] = "ё";
    a["i"] = "й";
    a["ts"] = "ц";
    a["u"] = "у";
    a["k"] = "к";
    a["е"] = "e";
    a["n"] = "н";
    a["g"] = "г";
    a["sh"] = "ш";
    a["sch"] = "щ";
    a["z"] = "з";
    a["h"] = "x";
    a["'"] = "ъ";
    a["F"] = "Ф";
    a["I"] = "Ы";
    a["V"] = "В";
    a["А"] = "А";
    a["P"] = "П";
    a["R"] = "Р" ;
    a["O"] = "О" ;
    a["L"] = "Л" ;
    a["D"] = "Д" ;
    a["J"] = "Ж";
    a["E"] = "Э" ;
    a["f"] = "ф" ;
    a["i"] = "ы" ;
    a["v"] = "в" ;
    a["a"] = "а" ;
    a["p"] = "п" ;
    a["r"] = "р" ;
    a["o"] = "о" ;
    a["l"] = "л" ;
    a["d"] = "д" ;
    a["j"] = "ж";
    a["e"] = "э";
    a["Ya"] = "Я";
    a["CH"] = "Ч";
    a["S"] = "С" ;
    a["M"] = "М" ;
    a["I"] = "И" ;
    a["T"] = "Т" ;
    a["'"] = "Ь" ;
    a["B"] = "Б" ;
    a["YU"] = "Ю";
    a["ya"] = "я";
    a["ch"] = "ч";
    a["s"] = "с" ;
    a["m"] = "м" ;
    a["i"] = "и" ;
    a["t"] = "т" ;
    a["'"] = "ъ" ;
    a["b"] = "б" ;
    a["yu"] = "ю";

    for (let i in word) {
      if (word.hasOwnProperty(i)) {
        if (a[word[i]] === undefined) {
          answer += word[i];
        } else {
          answer += a[word[i]];
        }
      }
    }
    return setSpell(answer);
  }

  return (
    <React.Fragment>
      <Banner
        image={
          "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
      />
      <div className={clas.SpellCheck_wrapper}>
        <div className="container">
          <div className={clas.inner}>
            <h1 className={clas.holder}>Проверка орфографии</h1>

            <div className={clas.checking_wrapper}>
              <div className={clas.field_one}>
                <label htmlFor="kril">Латиница</label>
                <textarea
                  onChange={(el) => transliterate(el.target.value)}
                  spellCheck={true}
                  placeholder="Введите текст"
                  name=""
                  id="kril"
                  cols="30"
                  rows="10"
                ></textarea>
                <div className={clas.error_btns}>
                  <div className={clas.btn_one}>
                    <button>5</button>
                    <span>Ошибок</span>
                  </div>
                  <div className={clas.btn_one}>
                    <button>200</button>
                    <span>Кол-во слов </span>
                  </div>
                </div>
              </div>
              <div className={clas.changer}>
                <button>
                  <DownArrow />
                  <UpArrow />
                </button>
              </div>
              <div className={clas.field_one}>
                <label htmlFor="latin">Кирилица</label>
                <textarea
                  disabled
                  name=""
                  value={spell}
                  id="latin"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className={clas.check_btn}>
                <button>Проверить</button>
              </div>
            </div>

            <div className={clas.why_izdat}>
              <h1>Почему Izdat.uz? </h1>
              <div className={clas.content_block}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sodales nunc suspendisse elit mi habitant. Eget in dictum et
                  purus. Egestas mi, eleifend mi tortor eu, amet, sit duis
                  lobortis. Sit accumsan, mi et vitae pellentesque. Vulputate
                  ullamcorper lectus vitae auctor condimentum nunc, erat.
                  Viverra consequat sit velit vel et risus nec scelerisque
                  vulputate. Elementum integer pellentesque nisl tristique augue
                  tellus, vitae. Nisl risus mauris pretium velit. Porttitor
                  lacus, ac nulla lorem sed. Eget in dictum et purus. Egestas
                  mi, eleifend mi Eget in dictum et purus. Egestas mi, eleifend
                  mi Eget in dictum et purus. Egestas mi, eleifend mi
                </p>
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Recommend />
      </div>
    </React.Fragment>
  );
};

export default SpellCheck;
