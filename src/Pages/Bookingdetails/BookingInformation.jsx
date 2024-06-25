// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import React, { useEffect, useState } from 'react';
// import * as YUP from 'yup';
// import "../Bookingdetails/Bookinginfo.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { postbookings } from '../../Redux/Bookingredux/BookingActions';
// import { useNavigate, useParams } from 'react-router-dom';
// import PastService from '../HistoryandTracking/PastService';

// const BookingInformation = () => {

//     const[bookeddate,setDate]=useState();
//     const[vehicleno,setVehicleno]=useState();
//     const[rendering,setRendering]=useState(false);

//     console.log(bookeddate,vehicleno);

//     const navigate =useNavigate();

//     const planid=useParams();
    
//     const plan=planid.id;

//     const dispath=useDispatch();

//     const {booking,state}=useSelector((state)=>state.bookingsState);
//     console.log(booking);

//     useEffect(()=>{

//     },[booking])

//     const data={
//         customername:"",
//         dateofbooking:"", 
//         phonenumber: "",  
//         email: "",
//         address: "",
//         city:"",
//         state:"",
//         vehiclenumber:"",
//         vehiclebrand:"",
//         vehiclename:"",
//         appointmentdateandtime:"",
//         planid:plan
//     }

//     const handlesubmit=(values)=>{
//         console.log(values);
//         setRendering(true)
//         // setDate(values.dateofbooking);
//         // setVehicleno(values.vehiclenumber);

//         console.log(bookeddate,vehicleno);

//         dispath(postbookings(values));
//         // navigate(`/mybookings/${vehicleno}/${bookeddate}`);
//     }


//     const Schema=YUP.object().shape({
//         customername:YUP.string().required(" name must be added"),
//         dateofbooking:YUP.string().required(" date of booking must be added"), 
//         phonenumber: YUP.string().required("phonenumber must be added"),  
//         email: YUP.string().required("email must be added"),
//         address: YUP.string().required("address must be added"),
//         city:YUP.string().required("city must be added"),
//         state:YUP.string().required("state must be added"),
//         vehiclenumber:YUP.string().required("vehicle number must be added"),
//         vehiclebrand:YUP.string().required("vehicle brand must be added"),
//         vehiclename:YUP.string().required("vehicle name must be added"),
//         appointmentdateandtime:YUP.string().required("appointmentdate must be added"),


       
//     })


//     return (
//         <>
//         <div className='totalcontent '>
//         <div className='totalbookingcontent bookingimg  '>
//             <div className='formikforms'>
//             <Formik initialValues={data} validationSchema={Schema} onSubmit={handlesubmit} >
//                 <Form className='form d-flex flex-column' choosedplan={planid}>
                    
//                     <h1>BOOKING DETAILS</h1>
//                     <br />
//                     <h1>PERSONAL INFORMATION</h1>
//                     <div className='bookingdetails'>
                       
                       
//                     <div className=" d-flex flex-column">
//                     <div className='name align '>
//                     <label>CustomerName</label>
//                     <Field type="text" name="customername"  className="inputbox" placeholder=" JohnDoe"/>
//                     <ErrorMessage name="customername" component='h5' className='color' />
//                     </div>
//                     <br />
                    

//                     <div className='dateofbooking align'>
//                     <label>Date Of Booking</label>
//                     <Field type="date" name="dateofbooking"  className="inputbox"/>
//                     <ErrorMessage name="dateofbooking" component='h5' className='color' />
//                     </div>
//                     <br />
//                     </div>

//                     <div  className=" d-flex flex-column">
//                     <div className='phonenumber align'>
//                     <label>PhoneNumber</label>
//                     <Field type="text" name="phonenumber"  className="inputbox" placeholder=" 9876543210"/>
//                     <ErrorMessage name="phonenumber" component='h5' className='color' />
//                     </div>
//                     <br />

//                     <div className='email align'>
//                     <label>Email</label>
//                     <Field type="text" name="email"  className="inputbox" placeholder=" johndoe@gmail.com"/>
//                     <ErrorMessage name="email" component='h5' className='color' />
//                     </div>
//                     <br />
//                     </div>

//                     <div  className=" d-flex flex-column">
//                     <div className='address align'>
//                     <label>Address</label>
//                     <Field type="text" name="address"  className="inputbox " placeholder=" 177A Bleecker Street "/>
//                     <ErrorMessage name="address" component='h5' className='color' />
//                     </div>
//                     <br />
//                     </div>
                    
//                     <div  className=" d-flex flex-column">
//                     <div className='city align'>
//                     <label>City</label>
//                     <Field type="text" name="city"  className="inputbox" placeholder=" Chennai"/>
//                     <ErrorMessage name="city" component='h5' className='color' />
//                     </div>
//                     <br />
//                     </div>
                    

//                     <div className='state align'>
//                     <label>State</label>
//                     <Field type="text" name="state"  className="inputbox" placeholder=" Tamilnadu " />
//                     <ErrorMessage name="state" component='h5' className='color' />
//                     </div>
//                     <br />
//                     </div>

//                     <h1 >VEHICLE INFORMATION</h1>

//                     <div className='vehicleinformation d-flex flex-column justify-content-center align-items-center'>

//                     <div className='vehiclenumber align'>
//                     <label>Vehicle Number</label>
//                     <Field type="text" name="vehiclenumber"  className="inputbox" placeholder=" TN 07 TS 0707 "/>
//                     <ErrorMessage name="vehiclenumber" component='h5' className='color' />
//                     </div>
//                     <br />

//                     <div className='vehiclebrand align'>
//                     <label>Vehicle Brand</label>
//                     <Field type="text" name="vehiclebrand"  className="inputbox" placeholder=" hyundai "/>
//                     <ErrorMessage name="vehiclebrand" component='h5' className='color' />
//                     </div>
//                     <br />

//                     <div className='vehiclename align'>
//                     <label>Vehicle Name</label>
//                     <Field type="text" name="vehiclename"  className="inputbox" placeholder=" i20 "/>
//                     <ErrorMessage name="vehiclename" component='h5' className='color' />
//                     </div>
//                     <br />
                    

//                     <h1>Choose your Appointment</h1>
//                     <div className='appointment align'>
//                     <label>Appointment Date and Time</label>
//                     <Field type="datetime-local" name="appointmentdateandtime"  className="inputbox" />
//                     <ErrorMessage name="appointmentdateandtime" component='h5' className='color' />
//                     <br />

                  
//                     <div className='choosedplan align d-none  ' >
//                     <label>Choosed Plan</label>
//                     <Field type="text" name="planid"  className="inputbox" value={plan}/>
//                     <ErrorMessage name="planid" component='h5' className='color' />
//                     <br />
//                     </div>

                 

//                     </div>
                   

//                     <button type='submit' className='btn btn-primary' >Book Now</button>
//                     </div>

//                 </Form>
//             </Formik>
//         </div>
//         </div>
//         </div>
//         </>
//     );
// };

// export default BookingInformation;