import React from 'react';
import { useNavigate } from 'react-router-dom';

const StripepaySuccess = () => {
    const navigate=useNavigate();
    return (
        <div>
            <h1>success page</h1>
            <button type='button' nav>Click Here To Give FeedBack</button>
        </div>
    );
};

export default StripepaySuccess;