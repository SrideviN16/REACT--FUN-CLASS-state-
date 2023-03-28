import { useState } from "react";
import Child from "./child"


const Parent = () =>{

  let product=[
    {
        name:"moblie",
        price:10000,
        quality:true
    },
    {
        name:"bag",
        price:600,
        quality:false
    },
    {
        name:"book",
        price:100,
        quality:true
    },
    {
        name:"sliper",
        price:300,
        quality:false
    },
    {
        name:"apple",
        price:200,
        quality:false
    },
    {
        name:"chocolate",
        price:150,
        quality:true
    },
];
  
  const [state,setState]=useState(product)

    let ltoh = [...product].sort((a,b)=>{
      return a.price-b.price;
    })
    let htol=[...ltoh].reverse();
  
    const whysorting=(alp)=>{
      var so=[...product].sort((a,b) => {
          var sad=a.name.toUpperCase()
          var sosad=b.name.toUpperCase()
          if(sad<sosad){return -1}
          if(sad>sosad){return 1}
          return 0;
          
   })
  {alp==='truee' ? setState(so):setState(so.reverse())}
     }
     let fil =()=>{
      let buy =[...product].filter(s=>s.quality===true)
      setState(buy)
     }
  return(
    <div>
      <button onClick={()=>whysorting("truee")}>Name apha order</button>
      <button onClick={()=>whysorting("aa")}>Name apha reverse</button>
      <button onClick={()=>setState(ltoh)}>price low to high</button>
      <button onClick={()=>setState(htol)}>price high to low</button>
      <button onClick={()=>fil()}>Quality</button>
      <button onClick={()=>setState([...product])}>All</button>
      {
        state.map((value,index)=>{
          return(
            <div key={index}>
              <h1>{value.name}</h1>
              <p>{value.price}</p>
              <h3>{value.quality}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
export default Parent