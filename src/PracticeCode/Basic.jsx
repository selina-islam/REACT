import React from 'react'

const todoTitle = 'Call Family';
const todoDes = 'Assalamu Alaikum Everyone';
const date = '23/03/2025';
const dates = new Date();
const currentDATE = dates.getDate();
const currentMonth = dates.getMonth();
const currentYear = dates.getFullYear();


function Basic() {
  return (
          <div>
                  <h1>Hello</h1>
                  <h3>{ todoTitle}</h3>
                  <p>23/03/2025</p>
                  <p>{todoDes}</p>
                  <p>{date}</p>
                  <p>{new Date().getFullYear()}</p>
                  <p>{currentDATE}</p>
                  <p>{ currentDATE + ' /' + currentMonth + '/ '+ currentYear}</p>
    </div>
  )
}

export default Basic