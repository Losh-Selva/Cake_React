const Ingredients = ({name, ingredient, price, rating}) => {


    return (
        <>
        <h3>{name} cake:</h3>
        <p>Ingredients: {ingredient}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        </>
    )

}

export default Ingredients;