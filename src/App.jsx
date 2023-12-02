import { useState } from 'react'
import Fruit from './components/fruit'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FruitForm from './components/fruitForm'

function App() {
  //state (état)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot"},
    { id: 2, nom: "Banane"},
    { id: 3, nom: "Cerise"},
  ])


  //comportement
  const handleDelete = (id) =>{

    //copie du state
    const fruitsCopy = fruits.slice()

    //manipuler mon state sur la copie du state
    const fruitsCopyUpdated = fruits.filter((fruit)=> fruit.id !== id)

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
            <Fruit infoFruit ={fruit} actionClick={()=>handleDelete(fruit.id)} key={fruit.id}></Fruit>
          )}
        </ul>
        <FruitForm fruits={fruits} setFruits={setFruits} />
      </div>
    </>
  )
}

export default App
