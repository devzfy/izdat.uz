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
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

}

