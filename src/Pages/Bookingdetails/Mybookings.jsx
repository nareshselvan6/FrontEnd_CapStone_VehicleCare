import React, { useEffect } from 'react';
import "./Bookinginfo.css";
import { useDispatch, useSelector } from 'react-redux';
import { getbookingsvnobdt } from '../../Redux/Bookingredux/BookingActions';
import { useNavigate, useParams } from 'react-router-dom';
import carserviceimage from "../../../images/carservicehistory.png";
import NavBar from '../../Components/NavBar';
import Footers from '../../Components/Footers';

const Mybookings = () => {

  const navigate=useNavigate();
    const dispath=useDispatch();

    const {vehicleno,bookeddate}=useParams();

    const payload={vehicleno,bookeddate};
    // console.log(payload);

    const {booking,state}=useSelector((state)=>state.bookingsState);
    // console.log(booking);

    useEffect(()=>{

        dispath(getbookingsvnobdt(payload))
        

    },[])


    return (
      <>
     <NavBar />
      <div className=' mybooking'>
      <div className='totalcontent'>
      <div className=' mybookingfull blurred-div d-flex flex-column align-items-center '>
        <h1 className='my-4 mybookinglabel'>My Bookings</h1>
        <div className='mybookings'>
       <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 d-flex flex-column">
        {booking?.result?.map((ele,index)=>{
            return(
       <div className="col mybookingcolsize" key={index}>
    <div className="card mybookingcard">
      <div className='card-img mybookings'> 
      <img src={carserviceimage} className="card-img-top servicehistoryimg" alt="serviceimage" />
      </div>
      <div className="card-body">
        <h2 className="card-title">CustomerName: <b>{ele.customername}</b></h2>
        <p className="card-text"><b>BookingStatus: </b> booked Successfully </p>
        <p className="card-text"><b>BookedDate: </b>{ele.dateofbooking}</p>
        <p className="card-text"><b>Vehiclebrand: </b>{ele.vehiclebrand}</p>
        <p className="card-text"><b>VehicleNumber:</b>  {ele.vehiclenumber} </p>
        <p className="card-text"><b>VehicleName:</b>  {ele.vehiclename} </p>
        <p className="card-text"><b>AppointmentDetails: </b>{ele.appointmentdateandtime}</p>
      </div>
      <button type='button' className='btn btn-primary' onClick={()=>{navigate("/track_expenses")}}>Track Expenses</button>
    </div>
       </div>

            )
        })}
 
</div>

        </div>
        </div>
        </div>
        </div>
        <Footers/>
    </>
    );
};

export default Mybookings;