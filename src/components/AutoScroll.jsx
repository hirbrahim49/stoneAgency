
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myArrayOffObject from "./objectWithArray";
import "./AutoScroll.css"

function AutoScroll() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {
        myArrayOffObject.map(({name,title,image,des,id})=>(
           <div key={id} className='card'>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <h4>{title}</h4>
            <p>{des}</p>
             
           </div>
        ))
      }
      </Slider>
    </div>
  );
}

export default AutoScroll;