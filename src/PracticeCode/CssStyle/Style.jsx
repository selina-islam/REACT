import React from 'react'

import './Styless.css'
const heading = {
        color: "purple",
        backgroundColor: "indigo",
        textAlign: "center",
        padding: "10px"
}
     
function Style() {
  return (
          <div>
                  {/* Inline style */}
                  <p style={{ color: "red", fontSize: "3rem" }}>Selina Islam</p>
                  <h1 style={heading}>This is heading</h1>
                  {/* external css */}
                  <h3 className='style largeText '>Inderzani Public High School</h3>
    </div>
  )
}

export default Style