import { configureStore,combineReducers } from "@reduxjs/toolkit";
import plansreducer from "./PlansSlice"
import bookingsreducer from "../Bookingredux/BookingSlice";
import authenticationreducer from "../Authenticationredux/AuthenticationSlice";
import feedbackreducer from"../Feedbackredux/FeedbackSlice"
import stripereducer from"../Striperedux/StripeSlice"




const reducer = combineReducers({

plansState:plansreducer,
bookingsState:bookingsreducer,
authenticationState:authenticationreducer,
feedbackState:feedbackreducer,
stripeState:stripereducer


})

const store =configureStore({
    reducer,

})

export default store;
