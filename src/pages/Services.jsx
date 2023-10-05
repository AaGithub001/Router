import React, { useState } from 'react'

function Services() {
    const [check, setCheck]= useState(true);
    const toggleValue = () => {
        setCheck(prev => !prev)
    }
  return (
    <>
    <div>{check ? "true":"false"}</div>
    <button onClick={toggleValue}> </button>
    Toggle
    </>
  )
}

export default Services