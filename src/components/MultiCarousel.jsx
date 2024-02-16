import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = () => {
  const [items, setItems] = useState(["1", "2", "3"]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="border border-black max-w-[700px] cursor-grab">
      <Carousel
        arrows={true}
        showDots={true}
        // swipeable={false}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {items.map((item, i) => {
          return (
            <div key={i} className="h-[250px] relative flex flex-col justify-center items-center">
            <div className=" w-full flex flex-col items-start pl-24 gap-2">
              <p>Lorem, ipsum dolor.</p>
              
              <button className="bg-green-500 text-white uppercase px-5 py-2">Shop</button>
            </div>
            <div className="bg-red-500 h-full w-full absolute right-0 top-0 -z-20 flex">
              <img
                src="src/assets/images/pic2.jpeg"
                alt=""
                className="object-countain w-full h-full"
              />
            </div>
          </div>
           
          );
        })}

       
        
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
