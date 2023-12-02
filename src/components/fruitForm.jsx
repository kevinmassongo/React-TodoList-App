import { useState } from "react"
const FruitForm = ({fruits,setFruits}) =>{
    //State
    const [nouveauFruit, setNouveauFruit] = useState("")

    //Comportement

    const handleSubmit = (event) =>{
        event.preventDefault()
        // console.log(inputRef.current.value);
    
        //copie du state
        const fruitsCopy = [...fruits]
    
        //manipuler mon state sur la copie du state
        const id = new Date().getTime();
        const nom = nouveauFruit;
        const fruitAAjouter = {id, nom}
        fruitsCopy.push(fruitAAjouter)
    
        //modifier mon state avec le setter
        setFruits(fruitsCopy);
        setNouveauFruit("")
    
      }
    
      
      const handleChange = (event) =>{
        setNouveauFruit(event.target.value)
      }
    //Affichage (Render)

    return (
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <input value={nouveauFruit} type="text" placeholder='Ajouter un fruit...' onChange={handleChange}/>
                <button>Ajouter +</button>
            </form>
        </>
    )
}

export default FruitForm;