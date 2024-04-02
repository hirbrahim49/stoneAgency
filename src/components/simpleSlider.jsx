
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./simpleSlider.css"
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="head">
          <h3>1</h3>
        </div>
        <div className="head">
          <h3>2</h3>
        </div>
        <div className="head">
          <h3>3</h3>
        </div>
        <div className="head">
          <h3>4</h3>
        </div>
        <div className="head"> 
          <h3>5</h3>
        </div>
        <div className="head">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;