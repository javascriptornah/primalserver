import Render from "./index/Render";
import { getAllFoods } from "./lib/PrimalSupabaseFunctions";

export default async function Home() {
  const foods = await getAllFoods();
  return (
    <main>
      <Render foods={foods} />
    </main>
  );
}
