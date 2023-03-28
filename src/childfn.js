import React from 'react'

export const Dare = (sec) => {
    let br=sec.sri
  
    return (
      <div>
      {br.map((value,index)=>{
        return <div key={index}>
          <h2>{value.id}</h2>
          <h3>{value.name}</h3>
          <p>{value.salary}</p>
      
          <button onClick={()=>sec.btn(value,index)}>Click Here</button>
        </div>
            })}
      </div>
    )
  }
  export default Dare; 