import React from "react";
import "../Pages/Pages.css";
import Carousel from 'react-bootstrap/Carousel';
import NavBar from "../Components/NavBar";
import Footers from "../Components/Footers";
// import washingpic1 from '../../images/washingpics'



const Home = () => {
  return (
    <>
     <NavBar />
    <div className="body">
      
      <div className="totalhome home">
        <div> 

        <h1 className="titlehome d-flex flex-flex-wrap row-cols-md-10 row-cols-sm-8">
          Welcome to <span className="hometitlespan">S</span> Carcare
        </h1>
        </div>

        {/* <span className="hometitlespanS ts">S</span>  */}
        <br />

        <div className="firstpic">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images\washingpics\washingpic1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images\washingpics\washingpic2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images\washingpics\washingpic3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




     </div>
     <div>
      <h1>hllo</h1>
     </div>
     
        <br />
      </div>
    </div>
    <Footers/>
    </>
  );
};

export default Home;
