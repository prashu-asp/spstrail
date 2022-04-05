import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles.css"



function blogsPage() {
  return (
    <div>
      <h1>Blogs and Articles</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        centerSlidePercentage={80}
        emulateTouch
        stopOnHover
        autoPlay
        useKeyboardArrows
        transitionTime={700}
        //axis="vertical"
        // selectedItem={1}
        width="600px"
        height="300px"
      >
        <div className="slide-holder">
          {/*<iframe src="https://www.youtube.com/embed/n0F6hSpxaFc" />*/}
          <div class="text-container">
            <h2>BLOG 1</h2>
            <img
              alt=""
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
            />
          </div>
        </div>
        <div className="slide-holder">
          <div className="text-container">
            <h2>BLOG 2</h2>
            <img
              alt=""
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
            />
          </div>
        </div>
        <div className="slide-holder">
          <div className="text-container">
            <h2>BLOG 3</h2>
            <img
              alt=""
              src="https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg"
            />
          </div>
        </div>
        <div className="slide-holder">
          <div className="text-container">
            <h2>BLOG 4</h2>
            <img
              alt=""
              src="https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg"
            />
          </div>
        </div>
      </Carousel>
      <button to = "/blogss"><h2>SHOW MORE</h2></button>
    </div>
  );
}

export default blogsPage ;