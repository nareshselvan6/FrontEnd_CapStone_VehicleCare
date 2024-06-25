import React from 'react';

import "../Stripepayment/Stripe.css"


const StripepayFailure = () => {
    return (
        <div>
                     <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="message-box _success _failed">
                     <i class="fa fa-times-circle" aria-hidden="true"></i>
                    <h2> Your payment failed </h2>
             <p>  Try again later </p> 
         
            </div> 
        </div> 
    </div> 
            
        </div>
    );
};

export default StripepayFailure;