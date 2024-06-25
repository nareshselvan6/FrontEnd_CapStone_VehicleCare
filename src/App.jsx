import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./Components/NavBar";
import AllServices from "./Pages/Plans/AllServices";
// import BookingInformation from "./Pages/Bookingdetails/BookingInformation";
import PastService from "./Pages/HistoryandTracking/PastService";
import TrackAndMonitorExpenses from "./Pages/HistoryandTracking/TrackAndMonitorExpenses";
// import Footers from "./Components/Footers";
import Home from "./Pages/Home";
import RegisterPage from "./Pages/Authentication/RegisterPage";
import Resetpassword from "./Pages/Authentication/Resetpassword";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import Login from "./Pages/Authentication/Login";
import Feedback from "./Pages/SettlementandFeedback/Feedback";
import Mybookings from "./Pages/Bookingdetails/Mybookings";
import Bookingdetails from "./Pages/Bookingdetails/Bookingdetails";
import Invoice from "./Pages/SettlementandFeedback/Invoice";
import Protectedroute from "./Pages/ProtectedRoute/Protectedroute";
import StripepaySuccess from "./Pages/Stripepayment/StripepaySuccess";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/*    Authentication */}

          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/loginpage" element={<Login/>} />
          <Route path="/forgetpassword" element={<ForgetPassword/>} />
          <Route path="/resetpassword/:id/:token" element={<Resetpassword/>} />

          {/* Plans */}
           <Route element={<Protectedroute/>}>
          <Route path="/allservices" element={<AllServices />} />
          

          {/* Booking  */}
          <Route path="/bookingdetails/:id" element={<Bookingdetails />} />
          <Route path="/mybookings/:vehicleno/:bookeddate" element={<Mybookings />} />


          {/*History  Expenses Monitoring*/}

          <Route path="/pastservice" element={<PastService />} />
          <Route path="/track_expenses" element={<TrackAndMonitorExpenses />} />

          {/* Settlement and Feedback */}
          
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/feedback" element={<Feedback/>} />

          {/* Payment */}
          <Route path="/stripaymentsuccess" element={<StripepaySuccess/>}/>

          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
