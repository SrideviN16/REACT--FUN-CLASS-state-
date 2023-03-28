import React,{useState} from 'react'
import {Dare} from './childfn.js';

export const Fare = () => {
    let employees = [
        { id: 11, name:"Abhinav", salary:75000 }, 
        { id: 2131, name:"Gaurav", salary:62000 },
        { id: 3012, name:"Raj", salary:32000 }
       ]
    
   const [sri,setSri]=useState([])
   
       var arr=(a,b)=>{
   
      let de=employees.filter((value,index)=>{
         return value.salary<a.salary
      })
      console.log(de)
      setSri(de)
       }
     
     
       return (
        <div>
          <Dare  sri={employees} btn={arr}/>
          {sri.map((value,index)=>{
              return <div key={index}>
              <h2>{value.id}</h2>
              <h3>{value.name}</h3>
              <p>{value.salary}</p>
              </div>
          })
        }
        </div>
      )
    }
    export default Fare;