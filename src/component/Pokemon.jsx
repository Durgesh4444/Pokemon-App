import React from "react"

function Pokemon({text}) {
return (

  <div>
    {
  
      <div className='pokemonList'>
         <h1>{text.name}</h1>
         <img src={text?.sprites?.other?.dream_world?.front_default} alt="" />
       </div>
     
    }
    
  </div>
)

}

export default Pokemon
