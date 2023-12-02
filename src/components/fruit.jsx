const Fruit = ({infoFruit, actionClick}) => {
    //State

    //Comportements

    //Affichage (render)

    return (
        <>
            <li>
                {infoFruit.nom}<button onClick={(actionClick)}>X</button>
            </li>
        </>
    )
}

export default Fruit