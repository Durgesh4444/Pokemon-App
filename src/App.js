import { useState,useEffect } from 'react'
import './index.css'
import './App.css'
import Axios from 'axios'
import Pokemon from './component/Pokemon';
import img from "./component/pokemonlogo.png"

const poklogo = img;

function App() {
  const [text, setText] = useState([]);
  const [search, setSearch] = useState("");

  const fetechPokemons = async (e) => {

   e.preventDefault();


    if(search === ""){
         alert("Please Enter Any Data ")
         return;
    }

         const {data} = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
         console.log("Response", data);

         setText(data)
         
  }

  useEffect( ()=> {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
}, [search])

  return (
     <>
        <img className='logo' src={poklogo} alt='img'></img>
        <form className='pokemonForm'>
             <input type="text" value={search} placeholder='Enter Any Pokemon Name' onChange={(e) => setSearch(e.target.value)}/>
             <button onClick={fetechPokemons}>Search</button>
        </form>
        <Pokemon text={text}/>
     </>
  )
}

export default App;