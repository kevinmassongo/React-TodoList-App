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

  const [nouveauFruit, setNouveauFruit] = useState("")
  
  // const inputRef = useRef()

  //comportement
  const handleDelete = (id) =>{

    //copie du state
    const fruitsCopy = fruits.slice()
    console.log(fruitsCopy);

    //manipuler mon state
    const fruitsCopyUpdated = fruits.filter((fruit)=> fruit.id !== id)
    console.log(fruitsCopyUpdated);

    //modifier mon state avec le setter
    setFruits(fruitsCopyUpdated)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    // alert("handleSubmit")
    // console.log(inputRef.current.value);
  }

  
  const handleChange = (event) =>{
    setNouveauFruit(event.target.value)
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
        <form action="submit" onSubmit={handleSubmit}>
          <input value={nouveauFruit} type="text" placeholder='Ajouter un fruit...' onChange={handleChange}/>
          <button>Ajouter +</button>
        </form>
      </div>
    </>
  )
}

export default App
