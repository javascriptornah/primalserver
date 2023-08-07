import supabase from "./HealthySupabaseClient";

export const returnAllFoodsByCategory = async (category) => {
  try {
    const { data, error } = await supabase
      .from("foodCategory")
      .select("*, foods(*, nutrients_id(*))")
      .eq("name", category)
      .maybeSingle();
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
  }
};
