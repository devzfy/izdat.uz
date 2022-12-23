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
    autoplay: true,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    nextArrow: <Arrow21/>,
    prevArrow: <Arrow1/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
}

