import { useEffect, useState } from "react";
import "./App.css";

// MAIN APP COMPONENT
export default function App() {
  const [cocktail, setCocktail] = useState("");

  async function getCocktail() {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    setCocktail(data.drinks[0]);
  }

  useEffect(function () {
    getCocktail();
  }, []);

  return (
    <div className="container">
      <CocktailCard cocktail={cocktail} />
      <button className="order-btn" onClick={getCocktail}>
        Order Cocktail
      </button>
    </div>
  );
}

function CocktailCard(props) {
  return (
    <div className="card">
      <div className="img-card">
        <img src={props.cocktail.strDrinkThumb} alt="" />
      </div>

      <h1>{props.cocktail.strDrink}</h1>
      <p>{props.cocktail.strAlcoholic}</p>
    </div>
  );
}
