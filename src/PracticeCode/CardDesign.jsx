import React from 'react'
const todoTitle = "Call Family";
const todoDes = "Assalamu Alaikum Everyone";
//const date = "23/03/2025";
//const dates = new Date();
// const currentDATE = dates.getDate();
// const currentMonth = dates.getMonth();
// const currentYear = dates.getFullYear();


function CardDesign() {
  return (
    <div>
      <h1>Hello</h1>
      <div className='card'>
        {" "}
        <h3 className='tittle'>{todoTitle}</h3>
        <p className='date'>23/03/2025</p>
        <p className='des'>{todoDes}</p>
        <p className='footer'>All right reserved by 2025</p>
      </div>
      {/* <p>{new Date().getFullYear()}</p>
      <p>{currentDATE}</p>
      <p>{currentDATE + " /" + currentMonth + "/ " + currentYear}</p> */}
    </div>
  );
}

export default CardDesign