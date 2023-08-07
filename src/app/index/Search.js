import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../data/colors";

const Cont = styled.div`
  .food {
    border: 1px solid black;
    padding: 4px 8px;
  }
`;

const Search = ({ foods }) => {
  const [text, setText] = useState("");
  const [foodResults, setFoodResults] = useState([]);

  const updateText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const callFindFoods = setTimeout(() => {
      findFoods(text);
    }, 1000);

    return () => clearTimeout(callFindFoods);
  }, [text]);

  const findFoods = (text) => {
    const foodsMatch = foods.filter((food) => {
      return food.name.toLowerCase().includes(text.toLowerCase());
    });
    const foodElems = foodsMatch.map((food) => {
      return (
        <div className="food">
          {" "}
          <p>{food.name}</p>
        </div>
      );
    });
    setFoodResults(foodElems);
  };

  console.log("foods");
  console.log(foods);

  return (
    <Cont colors={COLORS}>
      <input type="text" value={text} onChange={updateText} />
      <br />
      <button>search</button>
      <div className="mar-bottom-32"></div>
      {foodResults}
    </Cont>
  );
};

export default Search;
