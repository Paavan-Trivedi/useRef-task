import React, { useEffect, useRef } from 'react'
import './input.css'

const Input = () => {

    let inputRef = useRef()

    const handleinput = () => {
        console.log(inputRef.current.value)
    }
    // const focload = () =>{
    //     inputRef.current.focus();
    // }

    useEffect(()=>{
        inputRef.current.focus();
    }
    )

  return (
     <>
     <div className="main">
        <div className="box">
        <h2 id='heading'>INPUT BOX</h2>
        <div className="inputmain">
        <input className='input' ref={inputRef} type="text"  />
        <button className='btn' onClick={handleinput} >Submit</button>
        </div>
        </div>
     </div>
     </>
  )
}

export default Input
