import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //state (état)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot"},
    { id: 2, nom: "Banane"},
    { id: 3, nom: "Cerise"},
  ])
  

  
  //comportement
  const handleDelete = (id) =>{
    console.log(id);

    //copie du state
    const fruitsCopy = fruits.slice()
    console.log(fruitsCopy);

    //manipuler mon state
    const fruitsCopyUpdated = fruits.filter((fruit)=> fruit.id !== id)
    console.log(fruitsCopyUpdated);

    //modifier mon state avec le setter
    setFruits(fruitsCopyUpdated)
  }

  //rendu
  return (
    <>
      <div>
        <h1>Liste des fruits</h1>
        <ul>
          {fruits.map((fruit)=>
            <li key={fruit.id}>
              {fruit.nom}<button onClick={()=>handleDelete(fruit.id)}>X</button>
            </li> 
          )}
        </ul>
      </div>
    </>
  )
}

export default App
