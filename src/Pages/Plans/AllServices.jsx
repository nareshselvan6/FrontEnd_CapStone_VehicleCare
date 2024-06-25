import React, { useEffect, useState } from 'react';
import "../Plans/Plans.css";
import { useDispatch, useSelector } from 'react-redux';
import { getPlans, getPlansbyname, getplansbyprice } from '../../Redux/Plansredux/PlansActions';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import Footers from '../../Components/Footers';

const AllServices = () => {

  const[searchplan,setSearchplan]=useState();

  const[searchFilter,setsearchFilter]=useState();

  const [activeIndex, setActiveIndex] = useState(null);


  const navigate = useNavigate();

  const dispatch=useDispatch();
  const {plans,loading}=useSelector((state)=>state.plansState);


  const plan= plans?.getplans ? plans?.getplans :  plans?.getplanprice ? [plans?.getplanprice] :[plans?.getplantype]  ;


  // useEffect(()=>{
  //   dispatch(getPlans)
  // })

  useEffect(()=>{

    dispatch(getPlans)

  if(!searchplan){
  dispatch(getPlans)
}

  },[searchplan])


  useEffect(()=>{

if(searchFilter=="pricefilter"){
  dispatch(getPlans)
}

  },[searchFilter])

  const search=(e)=>{
    dispatch(getPlansbyname(searchplan))

  }

  const handlefilter=(e)=>{
    setsearchFilter(e.target.value)

     if(searchFilter=="priceFilter"){
    dispatch(getPlans)
  }
    dispatch(getplansbyprice(e.target.value))

  }

  
    return (
      <>
     <NavBar />
        <div className='totalcontent allservices'>
        <div className='totalallservices blurred-div  d-flex justify-content-center align-items-center '>
          <h1 className='labelplan plan-label'> Plans </h1>
          
          <div className='search d-flex justify-content-center align-items-center '>
          {/* <label className='labelplan'>Search</label> */}
          <input type="text" className='searchbox bg-body-secondary' id='search' name="search" value={searchplan} onChange={(e)=>setSearchplan(e.target.value)} />
          <button type='button' className='btn btn-primary searchbtn' name="searchbtn" onClick={search}><span className='search'>Search</span> <i class="fa fa-search magnifier-icon" aria-hidden="true"></i></button>
          
          </div>

          <div className='filter '>
          <label className='labelplan'>Filter</label>
                <select 
                    className='filterbox  btn btn-info' 
                    onChange={handlefilter} 
                >
                    <option value="pricefilter" className='pricefilter-btn'>Price Filter</option>
                    <option value="19$">19$</option>
                    <option value="29$">29$</option>
                    <option value="59$">59$</option>
                    <option value="79$">79$</option>
                    <option value="109$">109$</option>
                    <option value="119$">119$</option>
                </select>         
          </div>

        <div className='totalaccordion d-flex justify-content-center row-cols-2 row-cols-md-1 row-cols-sm-12'>
        <div className="accordion" id="accordionExample">

        {plan?.map((ele,index)=>{
         return  ( 
          <div key={index}>
         <div className="accordion-item">
    <h2 className="accordion-header d-flex justify-content-center align-items-center">
      
      <button className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`} type="button"  onClick={() => setActiveIndex(index === activeIndex ? null : index)} >
       <b> {ele?.plantype}</b> 
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}  data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div className='servicetype'>
        <strong>Service Type: </strong>{ele?.package}
        </div>
        <br />

        <div className='works'>
        <b>Works: </b>{ele?.works}
        </div>
        <br />

        <div className='cost'>
          <b>Cost: </b> {ele?.price} <b> + Exculded Service Charges </b> 

        </div>
      <div className='booknowbtn'>
          <button className='btn btn-primary' onClick={()=>(navigate(`/bookingdetails/${ele?._id}`))}> BOOK NOW</button>
        </div>

      </div>
    </div>
  </div>
  </div>
  )
     })}
   


 
</div>
        </div>
        </div>
        </div>
        <Footers/>
    </>
    );
};

export default AllServices;