import React from 'react'


const Map = (props) => {

  const Couny= props.countries.map((country,index)=>(
    <li key={index}>{country}</li>
  ))
  return (
    <div>
      <p >{Couny}</p>
    </div>
  )
}

export default Map