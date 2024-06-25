import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import "../Pages/Bookingdetails/Bookinginfo.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postbookings } from '../../Redux/Bookingredux/BookingActions';
import NavBar from '../../Components/NavBar';
import Footers from '../../Components/Footers';

const Bookingdetails = () => {

    const[vehicleno,setVehicleno]=useState();

  const navigate =useNavigate();

  const planid=useParams();
  
  const plan=planid.id;


  const dispath=useDispatch();

  const {booking,state}=useSelector((state)=>state.bookingsState);


  
  const validationSchema = Yup.object().shape({
    customername: Yup.string().required("Name must be added"),
    dateofbooking: Yup.string().required("Date of booking must be added"), 
    phonenumber: Yup.string().required("Phone number must be added"),  
    email: Yup.string().required("Email must be added"),
    address: Yup.string().required("Address must be added"),
    city: Yup.string().required("City must be added"),
    state: Yup.string().required("State must be added"),
    vehiclenumber: Yup.string().required("Vehicle number must be added"),
    vehiclebrand: Yup.string().required("Vehicle brand must be added"),
    vehiclename: Yup.string().required("Vehicle name must be added"),
    appointmentdateandtime: Yup.string().required("Appointment date and time must be added"),
    // planid:Yup.string().required("plainid")
  });

  const formik = useFormik({
    initialValues: {
      customername: '',
      dateofbooking: '',
      phonenumber: '',
      email: '',
      address: '',
      city: '',
      state: '',
      vehiclenumber: '',
      vehiclebrand: '',
      vehiclename: '',
      appointmentdateandtime: '',
      planid:plan
    },
    validationSchema,
    onSubmit: (values) => {

      dispath(postbookings(values));
      navigate(`/mybookings/${values.vehiclenumber}/${values.dateofbooking}`);
   
    }
  });

  return (
    <>
     <NavBar />
    <div className='totalcontent bookingdetailstotal '>
    <div className='totalbookingcontent blurred-div bookingdetail '>
        <div className='formikforms'>
            
        
        
    <form onSubmit={formik.handleSubmit}>
    <h1 className='BD-title d-flex justify-content-center align-items-center BD-labels'>BOOKING DETAILS</h1>
                    <br />
                    <div className='headlabels'>
     <h1  className='PI-title d-flex justify-content-center align-items-center BD-labels'>PERSONAL INFORMATION</h1>
     </div>
        <div className='customername d-flex flex-column align-items-center'>
      <label className='BD-labels'>Customer Name: </label>
      <input className="BD-inputs" type="text" name="customername" value={formik.values.customername} onChange={formik.handleChange}  />
        {formik.touched.customername  && formik.errors.customername ? <div className='BD-labels'>{formik.errors.customername}</div> : null}
      
      <br />
      </div>
      <div className='dateofbooking d-flex flex-column align-items-center'>
      <label className='BD-labels'>
        Date of Booking:
      </label>
        <input className="BD-inputs" type="date" name="dateofbooking" value={formik.values.dateofbooking} onChange={formik.handleChange}  />
        {formik.touched.dateofbooking && formik.errors.dateofbooking ? <div className='BD-labels'>{formik.errors.dateofbooking}</div> : null}

      </div>
      <br />

      <div className='phonenumber d-flex flex-column align-items-center'>
      <label  className='BD-labels'>
        Phone Number:
      </label>
        <input className="BD-inputs" type="tel" name="phonenumber" value={formik.values.phonenumber} onChange={formik.handleChange}  />
        {formik.touched.phonenumber && formik.errors.phonenumber ? <div  className='BD-labels'>{formik.errors.phonenumber}</div> : null}
      <br />

</div>
 <div className='email d-flex flex-column align-items-center'>
      <label  className='BD-labels'>
        Email:
      </label>
        <input className="BD-inputs" type="email" name="email" value={formik.values.email} onChange={formik.handleChange}  />
        {formik.touched.email && formik.errors.email ? <div  className='BD-labels'>{formik.errors.email}</div> : null}
      <br />

      </div>
      <div className='address d-flex flex-column align-items-center'>
      <label  className='BD-labels'>
        Address:
      </label>
        <input className="BD-inputs" type="text" name="address" value={formik.values.address} onChange={formik.handleChange}  />
        {formik.touched.address && formik.errors.address ? <div  className='BD-labels'>{formik.errors.address}</div> : null}
      <br />

</div>

<div className='city d-flex flex-column align-items-center'>

      <label  className='BD-labels'>
        City:
      </label>
        <input className="BD-inputs" type="text" name="city" value={formik.values.city} onChange={formik.handleChange}  />
        {formik.touched.city && formik.errors.city ? <div  className='BD-labels'>{formik.errors.city}</div> : null}
      <br />
</div>

<div className='state d-flex flex-column align-items-center'>
      <label  className='BD-labels'>
        State:
      </label>
        <input className="BD-inputs" type="text" name="state" value={formik.values.state} onChange={formik.handleChange}  />
        {formik.touched.state && formik.errors.state ? <div  className='BD-labels'>{formik.errors.state}</div> : null}
      <br />

</div>

<div className='vehiclenumber d-flex flex-column align-items-center'>
  <div className='headlabels'>
      <h1 className='VI-title d-flex justify-content-center align-items-center BD-labels ' >VEHICLE INFORMATION</h1>
      </div>
      <label  className='BD-labels'>
        Vehicle Number:
      </label>
        <input className="BD-inputs" type="text" name="vehiclenumber" value={formik.values.vehiclenumber} onChange={formik.handleChange}  />
        {formik.touched.vehiclenumber && formik.errors.vehiclenumber ? <div  className='BD-labels'>{formik.errors.vehiclenumber}</div> : null}
      <br />
</div>

<div className='vehiclebrand d-flex flex-column align-items-center'>
      <label  className='BD-labels'>

        Vehicle Brand:
      </label>
        <input className="BD-inputs" type="text" name="vehiclebrand" value={formik.values.vehiclebrand} onChange={formik.handleChange}  />
        {formik.touched.vehiclebrand && formik.errors.vehiclebrand ? <div  className='BD-labels'>{formik.errors.vehiclebrand}</div> : null}
      <br />

</div>

<div className='vehiclename d-flex flex-column align-items-center'>
      <label  className='BD-labels'>
        Vehicle Name:
        </label>
        <input className="BD-inputs" type="text" name="vehiclename" value={formik.values.vehiclename} onChange={formik.handleChange}  />
        {formik.touched.vehiclename && formik.errors.vehiclename ? <div  className='BD-labels'>{formik.errors.vehiclename}</div> : null}
      
      <br />

</div>

<div className=' d-flex flex-column align-items-center'>
<div className='headlabels'>
      <h1 className='CYA-title d-flex justify-content-center align-items-center BD-labels' >Choose your Appointment</h1>
      </div>
      <label  className='BD-labels'>
        Appointment Date and Time:
      </label>
        <input className="BD-inputs" type="datetime-local" name="appointmentdateandtime" value={formik.values.appointmentdateandtime} onChange={formik.handleChange}  />
        {formik.touched.appointmentdateandtime && formik.errors.appointmentdateandtime ? <div  className='BD-labels'>{formik.errors.appointmentdateandtime}</div> : null}
</div>


<div className='planid d-flex flex-column align-items-center d-none'>

      <label  className='BD-labels'> Choosed Plan</label>
        <input className="BD-inputs d-none" type="text" name="planid"  value={plan}  />

      <br />
</div>
<div className=' d-flex flex-column align-items-center'>

</div>
<div className='submitbtn d-flex flex-column align-items-center'>

      <button type="submit" className='btn btn-primary'>Submit</button>
</div>
    </form>
    </div>
    </div>
    </div>
    <Footers/>
    </>
    
  );
};

export default Bookingdetails;
