import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { afterfeedbackremainder, postfeedback } from '../../Redux/Feedbackredux/FeedbackActions';
import "../SettlementandFeedback/SettlementandFeedback.css";
import { useNavigate } from 'react-router-dom';
import Footers from '../../Components/Footers';
import NavBar from '../../Components/NavBar';


const Feedback = () => {

    const { feedback, loading } = useSelector((state) => state.feedbackState);
    
    const dispatch=useDispatch();

    const navigate=useNavigate();

  const formik = useFormik({
    initialValues: {
      customername: '',
      email: '',
      tipstoimprove: '',
      workSatisfaction: '',
    },
    validationSchema: Yup.object({
      customername: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),

      tipstoimprove: Yup.string()
        .max(500, 'Must be 500 characters or less'),
      workSatisfaction: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values) => {
    
      
      dispatch(postfeedback(values));      
      dispatch(afterfeedbackremainder(values))
      navigate("/");
    },
  });

  return (
<>
     <NavBar />
    <div className='fullfeedback-page'>
      <div className='fullfeedback-total d-flex justify-content-center align-items-center '>
    <div className='totalfeedback blurred-div'>
    <form onSubmit={formik.handleSubmit} className='d-flex justify-content-center align-items-center flex-column feedback-form'>
      <div>
        <h1 className='feedbacklabel d-flex justify-content-center align-items-center'>FeedBack Form</h1>
     
        <div className='customername label-input'>

        <label name="customername" className='feedbacklabel'>Customer Name</label>
        <input
          id="customername"
          name="customername"
          type="text"
          className='feedback-inputs'
          onChange={formik.handleChange}
          value={formik.values.customername}
        />
        {formik.touched.customername && formik.errors.customername ? (
          <div className='feedbacklabel' >{formik.errors.customername}</div>
        ) : null}
      </div>
        </div>

      <div className='email label-input'>
        <label name="email" className='feedbacklabel'>Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className='feedback-inputs'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='feedbacklabel'>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className='tipstoimprove label-input'>
        <label name="tipstoimprove" className='feedbacklabel'>Tips to Improve Service</label>
        <textarea
          id="tipstoimprove"
          name="tipstoimprove"
          className="textareabox feedback-inputs"
          onChange={formik.handleChange}
          value={formik.values.tipstoimprove}
        />
        {formik.touched.tipstoimprove && formik.errors.tipstoimprove ? (
          <div className='feedbacklabel'>{formik.errors.tipstoimprove}</div>
        ) : null}
      </div>

      <div>
        <label className='feedbacklabel d-flex justify-content-center align-items-center'>Work Satisfaction</label>
        <div className='checkedbox'>
        <div>
          <input
            type="radio"
            id="satisfied"
            name="workSatisfaction"
            value="satisfied"
             className='checkedinput'
            onChange={formik.handleChange}
            checked={formik.values.workSatisfaction === 'satisfied'}
          />
          <label name="satisfied"  >Satisfied</label>
        </div>
        <div>
          <input
            type="radio"
            id="neutral"
            name="workSatisfaction"
            value="neutral"
             className='checkedinput'
            onChange={formik.handleChange}
            checked={formik.values.workSatisfaction === 'neutral'}
          />
          <label name="neutral"  >Neutral</label>
        </div>
      </div>
        <div>
          <input
            type="radio"
            id="dissatisfied"
            name="workSatisfaction"
            value="dissatisfied"
            className='checkedinput'
            onChange={formik.handleChange}
            checked={formik.values.workSatisfaction === 'dissatisfied'}
          />
          <label name="dissatisfied"  >Dissatisfied</label>
        </div>
        {formik.touched.workSatisfaction && formik.errors.workSatisfaction ? (
          <div className='feedbacklabel'>{formik.errors.workSatisfaction}</div>
        ) : null}
      </div>

      <button type="submit" className='btn btn-primary'>Submit</button>
    </form>
    </div>
    </div>
    </div>
    <Footers/>
    </>
  );
};

export default Feedback;

