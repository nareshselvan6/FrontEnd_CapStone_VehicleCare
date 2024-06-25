import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as YUP from 'yup';
import "../HistoryandTracking/historyandtracing.css"
import { useDispatch, useSelector } from "react-redux";
import { getbookingsvnobdt, postpayment } from "../../Redux/Bookingredux/BookingActions";
import { useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import NavBar from "../../Components/NavBar";
import Footers from "../../Components/Footers";


const TrackAndMonitorExpenses = () => {
    const[displaytable,setDisplaytable]=useState(false);

    const navigate=useNavigate();

    const dispatch=useDispatch();

    const {booking,checkout,loading}=useSelector((state)=>state.bookingsState);  
    const data={
      vehicleno:"",
      bookeddate:""
    }

    // stripe payment integration
    
useEffect(()=>{
makepay()
},[checkout])
    const makepay=async()=>{
      const Stripe=await loadStripe(
          "pk_test_51PUnYGGtPSZv8TncLliuhGNGURb3GHaPIxYXw1GcVOwsGMecLsUoygzW7ZtPMsHIeRyFxuoG9lzqFpXuXmfyTUkI00hAxf3b81"
      );
      Stripe.redirectToCheckout({
          sessionId:checkout?.id
      })
  }


    const handlesubmit=(values)=>{
        setDisplaytable(true)
        dispatch(getbookingsvnobdt(values))

        
    }


    const Schema=YUP.object().shape({
        vehicleno:YUP.string().required("vehicle number must be added"),
        bookeddate:YUP.string().required("date of booking must be added")

    })
  return (
    <>
     <NavBar />
    <div className=" trackingandexpense totalcontent ">
      <div className="trackandexpense blurred-div d-flex flex-column justify-content-start ">
        <h1 className="d-flex justify-content-center m-4 tracklabel track-title">Tracking Expense</h1>
        <div className="vehicledetails d-flex justify-content-center">
          <Formik
            initialValues={data}
            validationSchema={Schema}
            onSubmit={handlesubmit}
          >
            <Form>
              <div className="vehiclenumber m-2">
                <label className="tracklabel">Vehicle Number</label>
                <Field
                  type="text"
                  name="vehicleno"
                  className="inputbox"
                  placeholder=" TN 07 TS 0707"
                  
                />
                <ErrorMessage name="vehicleno" component="h5" className="trackerrorcolor" />
              </div>
              <br />

              <div className="dateofbooking m-2">
                <label className="tracklabel">Date Of Booking</label>
                <Field
                  type="text"
                  name="bookeddate"
                  className="inputbox"
                  placeholder="YYYY-MM-DD"
                />
                <ErrorMessage name="bookeddate" component="h5" className="trackerrorcolor" />
              </div>
              <br />

                    <div className="getexpensebtn d-flex justify-content-center align-content-center m-1">
                    <button type="submit" className="btn btn-primary ">Get Expense </button>
                    </div>

            </Form>
          </Formik>
        </div>
      { displaytable? <div className="trackingtable table-responsive  ">
        <h1 className="tracklabel d-flex justify-content-center align-items-center">Expense table</h1>
        <table className="table table-bordered table-striped flex-wrap  ">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">Materials cost</th>
      <th scope="col">Labour cost</th>
      <th scope="col">ServiceTax</th>
      <th scope="col">Total Expense</th>
      <th scope="col">Payment</th>
    </tr>
  </thead>
  <tbody>
  {booking?.result?.map((ele,index)=>{
    return(
      
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{ele.planid?.materialcost}</td>
      <td>{ele.planid?.labourcost}</td>
      <td>{ele.planid?.servicetax}</td>
      <td>{ele.planid?.totalcost}$</td>
      <td> <button type="button" className="m-0 btn btn-info" onClick={()=>dispatch(postpayment({vehiclecost:ele?.planid?.totalcost}))} >PayNow</button></td>
    </tr>
    )
  


    
  })}
 
   
  </tbody>
</table>
        </div>:null}
      </div>
      </div>
      <Footers/>
      </>
  );
};

export default TrackAndMonitorExpenses;
