import React, { useState } from 'react';
import "./historyandtracing.css";
import { useDispatch, useSelector } from 'react-redux';
import {  getpastservice } from '../../Redux/Bookingredux/BookingActions';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as YUP from 'yup';
import Footers from '../../Components/Footers';
import NavBar from '../../Components/NavBar';

const PastService = () => {
const[displayservice,setDisplayservice]=useState(false);
const[value,setValue]=useState()


  const dispatch=useDispatch();

    const {booking,state}=useSelector((state)=>state.bookingsState);


  const data={
    vehiclenumber:""
  }

  const handlesubmit=(values)=>{
    setDisplayservice(true);
    setValue(values);
    dispatch(getpastservice(values));

  
}

const Schema=YUP.object().shape({
  vehiclenumber:YUP.string().required("vehicle number must be added")

})


    return (
      <>
     <NavBar />
        <div className='pasttotalcontent d-flex justify-content-center '>
        <div className='content'>
           <div className='pastservice'>
            <h1 className='pasttitle'>Past Service History</h1>

            <Formik initialValues={data} validationSchema={Schema} onSubmit={handlesubmit} >
            <Form className='form d-flex flex-column'>

            <div className=" d-flex flex-column">
               
                    <div className='vehiclenumber d-flex flex-column'>
                    <label className='pastservicelabel'>Vehicle Number</label>
                    <Field type="text" name="vehiclenumber"  className="inputbox" placeholder=" TN 07 TS 0707 "/>
                    <ErrorMessage name="vehiclenumber" component='h5' className='color' />
                    </div>
                    </div>
                    <br />
                    

                    <div className='getdetailsbtn d-flex flex-column '>
                      <button className='btn btn-primary' type='submit'>Get Details</button>
                    </div>




              </Form>
              </Formik>
{displayservice? <div className='servicehistory'>
       <div className="row row-cols-m-sm-5 row-cols-1 row-cols-md-1 g-4 p-5 totalcard">
 
        {booking?.result?.map((ele,index)=>{

          return(  <div className="col servicecard  " key={index}>
    <div className="card d-flex ">
        <div className='card-img'>
      <img src="images\carimage1.png" className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title"><b>CustomerName: </b>{ele.customername} </h5>
        <p className="card-text"> <b>VehicleBrand: </b>{ele.vehiclebrand}</p>
        <p className="card-text"><b>VehicleNumber: </b>{ele.vehiclenumber} </p>
        <p className="card-text"><b>Plan: </b>{ele.planid.plantype}</p>
        <p className="card-text"><b>TotalCost: </b>{ele.planid.totalcost}</p>
      </div>
    </div>
  </div>)

 
        })}
  
</div>
</div>:null}

            </div> 
            </div>
            </div>
            <Footers/>
    </>

    );
};

export default PastService;