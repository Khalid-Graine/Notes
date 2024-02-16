import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// oooooooooooooooo

export default function SimpleSlider() {
  const [items, setItems] = useState(["1", "2", "3",'4','5','6','7','8']);
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
   

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow bg-blue-600 w-10"
        style={{ right: "155px", top: "1px", zIndex: "-1" }}
        onClick={onClick}
      >
        Next
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow"
        style={{ left: "-30px", zIndex: "1" }}
        onClick={onClick}
      >
        Prev
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    appendDots: (dots) => (
      <div>
        <ul className=" flex items-center justify-center" >
          {dots.map((dot, index) => (
            <li key={index}  >
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: i === activeSlide ? "green" : "gray",
          color: i === activeSlide ? "red" : "yellow",
          cursor: "pointer",
        }}
      >
        <span className=" text-transparent">
        {i + 1}
        </span>
      </div>
    )
   
  };

  return (
    <div className="bg-red-500 px-7 overflow-hidden h-[300px] border border-black">
    <Slider {...settings}>
      {items.map((item, i) => {
        return (
          <div key={i} className="bg-yellow-300">
            <div>
              <div>
                <p>title</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="h-full flex justify-center items-center">
                <img
                  src={`https://picsum.photos/id/23${i}/600`}
                  alt=""
                  className="w-[200px]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
  
  );
}
