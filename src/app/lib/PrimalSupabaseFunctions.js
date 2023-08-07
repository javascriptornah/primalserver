import supabase from "./PrimalSupabaseClient";

/* export const addCategoryToPrimal = async (category, foods) => {
  const result = await Promise.all(
    foods.map(async (food) => {
      const { data, error } = await supabase.from("nutrients").insert({
        vitamin_a_daily_value: food.nutrients_id.vitamin_a_daily_value,
        vitamin_a_units: food.nutrients_id.vitamin_a_units,
        vitamin_c_daily_value: food.nutrients_id.vitamin_c_daily_value,
        vitamin_c_units: food.nutrients_id.vitamin_c_units,
        vitamin_d_daily_value: food.nutrients_id.vitamin_d_daily_value,
        vitamin_d_units: food.nutrients_id.vitamin_d_units,
        vitamin_e_daily_value: food.nutrients_id.vitamin_e_daily_value,
        vitamin_e_units: food.nutrients_id.vitamin_e_units,
        vitamin_k_daily_value: food.nutrients_id.vitamin_k_daily_value,
        vitamin_k_units: food.nutrients_id.vitamin_k_units,
        thiamin_daily_value: food.nutrients_id.thiamin_daily_value,
        thiamin_units: food.nutrients_id.thiamin_units,
        niacin_daily_value: food.nutrients_id.niacin_daily_value,
        vitamin_b6_daily_value: food.nutrients_id.vitamin_b6_daily_value,
        vitamin_b6_units: food.nutrients_id.vitamin_b6_units,
        folate_daily_value: food.nutrients_id.folate_daily_value,
        folate_units: food.nutrients_id.folate_units,
        vitamin_b12_daily_value: food.nutrients_id.vitamin_b12_daily_value,
        vitamin_b12_units: food.nutrients_id.vitamin_b12_units,
        pantothenic_acid_daily_value:
          food.nutrients_id.pantothenic_acid_daily_value,
        pantothenic_acid_units: food.nutrients_id.pantothenic_acid_units,
        choline_daily_value: food.nutrients_id.choline_daily_value,
        choline_units: food.nutrients_id.choline_units,
        calcium_daily_value: food.nutrients_id.calcium_daily_value,
        calcium_units: food.nutrients_id.calcium_units,
        iron_daily_value: food.nutrients_id.iron_daily_value,
        iron_units: food.nutrients_id.iron_units,
        magnesium_daily_value: food.nutrients_id.magnesium_daily_value,
        magnesium_units: food.nutrients_id.magnesium_units,
        phosphorus_daily_value: food.nutrients_id.phosphorus_daily_value,
        phosphorus_units: food.nutrients_id.phosphorus_units,
        potassium_daily_value: food.nutrients_id.potassium_daily_value,
        potassium_units: food.nutrients_id.potassium_units,
        sodium_daily_value: food.nutrients_id.sodium_daily_value,
        sodium_units: food.nutrients_id.sodium_units,
        zinc_daily_value: food.nutrients_id.zinc_daily_value,
        zinc_units: food.nutrients_id.zinc_units,
        copper_daily_value: food.nutrients_id.copper_daily_value,
        copper_units: food.nutrients_id.copper_units,
        manganese_daily_value: food.nutrients_id.manganese_daily_value,
        manganese_units: food.nutrients_id.manganese_units,
        selenium_daily_value: food.nutrients_id.selenium_daily_value,
        selenium_units: food.nutrients_id.selenium_units,
        cholesterol_daily_value: food.nutrients_id.cholesterol_daily_value,
        cholesterol_units: food.nutrients_id.cholesterol_units,
        omega6_units: food.nutrients_id.omega6_units,
        omega3_units: food.nutrients_id.omega3_units,
        polyunsaturated_fat: food.nutrients_id.polyunsaturated_fat,
        saturated_fat: food.nutrients_id.saturated_fat,
        fat: food.nutrients_id.fat,
        monounsaturated_fat: food.nutrients_id.monounsaturated_fat,
        protein: food.nutrients_id.protein,
        carbs: food.nutrients_id.carbs,
        quantity: food.nutrients_id.quantity,
        fiber: food.nutrients_id.fiber,
        starch: food.nutrients_id.starch,
        sugars: food.nutrients_id.sugars,
      });
    })
  );
};
 */

export const getAllFoods = async () => {
  try {
    const { data, error } = await supabase.from("foodz").select("*");

    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
  }
};
