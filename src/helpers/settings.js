import { ArrowNext, ArrowPrev, Arrow, Arrow2 } from "../assets/icons";

const SampleNextArrow = (props)=> {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      ><ArrowNext/></button>
    );
  }

  const SamplePrevArrow = (props)=> {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      ><ArrowPrev/></button>
    );
  }


  const Arrow1 = (props)=> {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      ><Arrow/></button>
    );
  }

  const Arrow21 = (props)=> {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      ><Arrow2/></button>
    );
  }

export const settings = {
    dots: true,
      fade: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>

}

export const settings2 = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    nextArrow: <Arrow21/>,
    prevArrow: <Arrow1/>
}

