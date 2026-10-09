import React from 'react'
import { useState } from 'react'

const App = () => {

const [name ,  setfirst] = useState(" ")

const submithandle = (e)=>{
  e.preventDefault()
console.log("form submitted",name);

setfirst("")

}

  return (
    <div><form onSubmit={submithandle}>
      <input type="text" placeholder='Enter your name' 
      
        value={name}

      onChange={(e)=>{
        setfirst(e.target.value)
      }}
      
      />
      <button >Submit</button>


</form>





    </div>
  )
}

export default App