import React from 'react';

const Name = 'Reetu';
let currentdate = new Date().toLocaleDateString();
const Timeofday = new Date().toLocaleTimeString()
function ChallengTwo(){
    return(
        <>
           <h1>{`My Name is ${Name}`}</h1> 
           <p>{`Current Date is ${currentdate} `}</p>
           <p>{`Current Time is ${Timeofday} `}</p>
        </>
    )
}
export default ChallengTwo