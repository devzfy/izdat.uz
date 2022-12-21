import { ArrowNext, ArrowPrev } from "../assets/icons";

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

export const settings = {
    dots: true,
      fade: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      nextArrow: false,
      prevArrow: false

}

