import { useState, useRef, useEffect } from "react";
import { returnAllFoodsByCategory } from "../lib/HealthysupabaseFunctions";
import styled from "styled-components";

const Cont = styled.div``;

const FoodSelector = () => {
  const [categories, setCategories] = useState([
    "Beef",
    "Dairy and Eggs",
    "Fish",
    "Poultry",
    "Lamb, Veal and Game",
    "Pork",
    "Fruits and Fruit Juices",
    "Grains and Starches",
  ]);

  const [foods, setFoods] = useState([]);
  const [renderCount, setRenderCount] = useState(10);
  const categoryRef = useRef(null);
  const [renderElems, setRenderElems] = useState([]);
  const selectCategory = async () => {
    let search =
      categoryRef.current.options[categoryRef.current.selectedIndex].text;

    const res = await returnAllFoodsByCategory(search);
    setFoods(res.foods);
    console.log(res);
  };

  useEffect(() => {
    console.log("???");
    if (foods.length > 0) {
      let realRenderCount =
        renderCount < foods.length ? renderCount : foods.length;
      const elems = [];

      for (let i = 0; i < realRenderCount; i++) {
        elems.push(
          <div className="border-teal-700 border-2 p-2 cursor-pointer">
            <p>{foods[i].name}</p>
          </div>
        );
      }
      setRenderElems(elems);
    }
  }, [foods, renderCount]);

  return (
    <Cont>
      <p>select a category</p>
      <select ref={categoryRef}>
        <option value="Beef">Beef</option>
        <option value="Dairy and Eggs">Dairy and Eggs</option>
        <option value="Fish">Fish</option>
        <option value="Poultry">Poultry</option>
        <option value="Lamb, Veal and Game">Lamb, Veal and Game</option>
        <option value="Pork">Pork</option>
        <option value="Fruits and Fruit Juices">Fruits and Fruit Juices</option>
        <option value="Grains and Starches">Grains and Starches</option>
      </select>
      <br />

      <button
        onClick={() => setRenderCount(renderCount + 10)}
        className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to primal
      </button>
      <br />

      <button
        onClick={selectCategory}
        className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
      <div className="results">{renderElems}</div>

      <button
        onClick={() => setRenderCount(renderCount + 10)}
        className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show more
      </button>
    </Cont>
  );
};

export default FoodSelector;
