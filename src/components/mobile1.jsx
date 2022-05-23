import React from 'react'

function Mobile1({ip,id}) {
  return (
    <li id={id}>{ip}</li>
  )
}


function Mobile2({ip1,id}) {
    return (
      <li id={id}> {ip1} </li>
    )
  }
export {Mobile2,Mobile1}