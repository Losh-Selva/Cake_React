import { useState } from "react";
import Ingredients from "../Components/Ingredients";

const CakeContainer = () => {

    const [victoriaIngredient, setVictoriaIngredient] = useState(["eggs, \n" ,
    "butter, \n",
    "sugar, \n",
    "self-raising flour, \n",
    "baking powder, \n",
    "milk \n"]);
    const [teaIngredient, setTeaIngredient] = useState(["eggs, \n",
    "oil, \n",
    "dried fruit, \n",
    "sugar, \n",
    "self-raising flour, \n",
    "strong tea \n",]);
    const [carrotIngredient, setCarrotIngredient] = useState(["carrots, \n",
    "walnuts, \n",
    "oil, \n",
    "cream cheese, \n",
    "flour, \n",
    "sugar \n",]);

    
    const [victoriaPrice, setVictoriaPrice] = useState("£5")
    const [teaPrice, seTeaPrice] = useState("£2")
    const [carrotPrice, setCarrotPrice] = useState("£8")

    const [victoriaRating, setVictoriaRating] = useState(5)
    const [teaRating, setTeaRating] = useState(3)
    const [carrotRating, setCarrotRating] = useState(8)


    return (
        <>
        <h2>Cake List:</h2>
        <Ingredients name={"Victoria Sponge"} ingredient={victoriaIngredient} 
        price={victoriaPrice}
        rating={victoriaRating}/>
        <Ingredients name={"Tea Loaf"} ingredient={teaIngredient} 
        price={teaPrice}
        rating={teaRating}/>
        <Ingredients name={"Carrot"} ingredient={carrotIngredient} 
        price={carrotPrice}
        rating={carrotRating}/>
        <p> Average Rating: {victoriaRating + teaRating + carrotRating}</p>
        </>
    )



}
export default CakeContainer;