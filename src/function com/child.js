import React, { Component } from 'react'


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
 class stateClass extends React.Component {
    constructor(){
        super();
            let h = product;
            this.state={
                h
            }
    }
  render() {
      
    
        let ltoh =(pri)=>{ 
            let ltoh1=[...product].sort((a,b)=>{
          return a.price-b.price;
        })
        pri=="ltoh"?this.setState({h:ltoh1}):this.setState({h:ltoh1.reverse()});
        }


      
        const whysorting=(alp)=>{
          var so=[...product].sort((a,b) => {
              var sad=a.name.toUpperCase()
              var sosad=b.name.toUpperCase()
              if(sad<sosad){return -1}
              if(sad>sosad){return 1}
              return 0;
              
       })
      {alp==='truee' ? this.setState({h:so}):this.setState({h:so.reverse()})}
         }
         let fil =()=>{
          let buy =[...product].filter(s=>s.quality===true)
          this.setState({h:buy})
         }
         let k=this.state.h;
      return(
        <div>
          <button onClick={()=>whysorting("truee")}>Name apha order</button>
          <button onClick={()=>whysorting("aa")}>Name apha reverse</button>
          <button onClick={()=>ltoh("htol")}>price low to high</button>
          <button onClick={()=>ltoh("ltoh")}>price high to low</button>
          <button onClick={()=>fil()}>Quality</button>
          <button onClick={()=>this.setState({h:product})}>All</button>
          {
            k.map((value,index)=>{
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
}

export default stateClass