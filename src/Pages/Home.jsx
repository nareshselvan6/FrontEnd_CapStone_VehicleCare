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

        <br />

     
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
