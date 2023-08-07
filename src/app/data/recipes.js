const infantGlandularBooster = {
  name: "Infant Glandular Booster",
  servings: 8,
  ingredients: [
    { quantity: "1 cup", name: "organic raw liver" },
    { quantity: "1 cup", name: "raw milk" },
    { quantity: "1/4 teaspoon", name: "unheated honey" },
  ],
  description:
    "Cut liver into small chunks. Blenderize all ingredients in a 16-ounces jar on high speed for 20-25 seconds. Strain mixture through a strainer or cloth-pouch. Squeeze pouch to speed straining. Use nipple with a large hole.",
};

const infantImmuneBooster = {
  name: "Infant Immune Booster",
  servings: 8,
  ingredients: [
    { quantity: "1 cup", name: "organic raw liver" },
    { quantity: "1/2 cup", name: "raw milk" },
    { quantity: "2 raw", name: "eggs" },
    { quantity: "1/4 teaspoon", name: "unheated honey" },
  ],
  description:
    "Cut liver into small chunks. Blenderize all ingredients in a 16-ounces jar on high speed for 20-25 seconds. Strain mixture through a strainer or cloth-pouch. Squeeze pouch to speed straining. Use nipple with a large hole.",
};

const infantMilkshake = {
  name: "Infant Milkshake",
  servings: 2,
  ingredients: [
    { quantity: "2 ounces", name: "raw milk" },
    { quantity: "2 ounces", name: "raw cream" },
    { quantity: "1 raw", name: "egg" },
    { quantity: "1/4 teaspoon", name: "unheated honey" },
  ],
  description:
    "Blenderize all ingredients together in an 8-ounces jar on medium speed for 5 seconds. No straining is necessary.",
};

const infantNervousSystemBooster = {
  name: "Infant Nervous System Booster",
  servings: 8,
  ingredients: [
    { quantity: "1 ounce", name: "fresh ocean wild-caught raw fish" },
    { quantity: "3 tablespoons", name: "raw cream" },
    { quantity: "1/4 cup", name: "fresh organic liver" },
    { quantity: "2 ounces", name: "raw milk" },
    { quantity: "1 raw", name: "egg" },
    { quantity: "1/2 teaspoon", name: "unheated honey" },
  ],
  description:
    "Cut liver and fish into small chunks. Blenderize ingredients in an 8-ounces jar on high speed for 20-25 seconds. Strain mixture through a strainer or cloth-pouch. Squeeze pouch to speed straining. Use nipple with a large hole.",
};

const recipe1 = {
  title:
    "Helps Regulate Body Salts, Remove Toxic Salts, And Increase Oxygen Absorption",
  servings: 12,
  ingredients: [
    { quantity: "5 bunches", name: "fresh celery stalks" },
    { quantity: "5 bunches", name: "fresh parsley" },
    { quantity: "3-4 ounces", name: "unheated honey" },
  ],
  description: "",
};

const recipe2 = {
  title:
    "Helps Remove Impactions (Plaque) From Arteries And Intestines, Regulate Body Salts, And Increase Oxygen Absorption",
  servings: 12,
  ingredients: [
    { quantity: "4 bunches", name: "fresh celery stalks" },
    { quantity: "3 bunches", name: "fresh parsley" },
    { quantity: "3 medium", name: "carrots" },
    { quantity: "3 ounces", name: "unheated honey" },
    { quantity: "1/2 -inch", name: "circular slice pineapple. dice" },
  ],
  description:
    "Blenderize diced pineapple into an 8-ounces jar on medium speed for 10 seconds.",
};

const recipe3 = {
  title:
    "Helps Eliminate Toxicity From Liver, Other Glands, Decrease Lymphatic Congestion, Regulate Body Salts, And Increase Oxygen Absorption",
  servings: 12,
  ingredients: [
    { quantity: "4 bunches", name: "fresh celery stalks" },
    { quantity: "3 bunches", name: "fresh parsley" },
    { quantity: "1 lemon,", name: "juice rind and all" },
    { quantity: "1 bunch", name: "cilantro" },
    {
      quantity: "2 medium",
      name: "raw zucchini, crookneck or sunburst squash",
    },
    { quantity: "1 medium", name: "cucumber" },
    { quantity: "3 ounces", name: "unheated honey" },
    { quantity: "12 tablespoons", name: "coconut cream." },
  ],
  description:
    "Immediately before drinking this juice formula, eat 1 tablespoon coconut cream, unsalted raw butter, or raw cream.",
};

const recipe4 = {
  title:
    "Helps Remove & Eliminate Mercury And Other Heavy Metals, Regulate Body Salts, And Increase Oxygen Absorption",
  servings: 12,
  ingredients: [
    { quantity: "3 bunches", name: "fresh celery stalks" },
    { quantity: "3 bunches", name: "fresh parsley" },
    { quantity: "3 bunches", name: "fresh cilantro" },
    {
      quantity: "4 medium",
      name: "raw zucchini, crookneck or sunburst squash",
    },
    { quantity: "3 ounces", name: "unheated honey" },
    { quantity: "12 tablespoons", name: "raw cream, or" },
    {
      quantity: "12 tablespoons",
      name: "coconut cream, or unsalted raw butter.",
    },
  ],
  description:
    "Often, the body pulls heavy metals from its cells and tissues with the nutrients in this juice. Fats must be present with the juice to ensure that detoxified metals do not cause harm and restore in the body. Therefore, immediately before drinking this juice formula, eat 1 tablespoon coconut cream or butter, or drink a little juice and put 1 tablespoons raw cream into the juice and stir.",
};

const milkshake = {
  title: "Milkshake",
  description: "(Soothes nerves.)",
  servings: 1,
  ingredients: [
    { quantity: "1 to 3", name: "raw eggs" },
    { quantity: "3 to 6 ounces", name: "raw milk" },
    { quantity: "2 to 4 ounces", name: "raw cream" },
    { quantity: "1 to 2 tablespoons", name: "unheated honey" },
  ],
  descriptionSteps:
    "Blenderize in an appropriately sized jar on medium speed for 5-10 seconds.",
};

const coffeeSubstitute = {
  title: "Coffee Substitute",
  description:
    "(Most often, any mixture of green vegetable juices is the best substitute for coffee. Green vegetable juices fill the digestive tract and blood with energy-producing vitamins, enzymes, and minerals, and usually increase appetite for healthy food.)",
  servings: 1,
  ingredients: [
    { quantity: "4 ounces", name: "natural mineral water" },
    { quantity: "2 tablespoons", name: "unheated honey" },
    { quantity: "2 tablespoons", name: "lemon or lime juice" },
    { quantity: "1 tablespoon", name: "raw apple cider vinegar" },
    { quantity: "2 tablespoons", name: "raw cream" },
  ],
  descriptionSteps:
    "Blenderize all ingredients, except cream, in an 8-ounces jar on medium speed for 5-10 seconds. Pour in cream and stir. If you would like it warm, cap and immerse in mildly hot water for 5 minutes.",
};

const bananaSmoothie = {
  title: "Banana Smoothie",
  description:
    "Fruity milkshakes make some people more emotional, sensitive, irritable, and/or sleepy. If you experience those symptoms, you would probably do better by drinking milkshakes.",
  servings: 1,
  ingredients: [
    { quantity: "2 to 3", name: "raw eggs" },
    { quantity: "1/3", name: "banana" },
    { quantity: "3 ounces", name: "raw milk" },
    { quantity: "1 ounce", name: "raw cream" },
    { quantity: "1 pinch", name: "freshly ground nutmeg" },
    { quantity: "1 tablespoon", name: "unheated honey" },
  ],
  descriptionSteps:
    "Blend all ingredients together in an 8- or 12-ounces jar on medium speed for 10 seconds.",
};

const orangeSmoothie = {
  title: "Orange Smoothie",
  description:
    "Fruity milkshakes make some people more emotional, sensitive, irritable, and/or sleepy. If you experience those symptoms, you would probably do better by drinking milkshakes.",
  servings: 1,
  ingredients: [
    { quantity: "2 to 3", name: "raw eggs" },
    { quantity: "1 peeled and seeded", name: "orange" },
    { quantity: "2 ounces", name: "raw cream" },
    { quantity: "1 teaspoon", name: "unheated honey (optional)" },
  ],
  descriptionSteps:
    "Blenderize all ingredients together in an 8-ounces jar on high speed for 10 seconds.",
};

const raspberrySmoothie = {
  title: "Raspberry Smoothie",
  description:
    "Fruity milkshakes make some people more emotional, sensitive, irritable, and/or sleepy. If you experience those symptoms, you would probably do better by drinking milkshakes.",
  servings: 1,
  ingredients: [
    { quantity: "2 to 3", name: "raw eggs" },
    { quantity: "4 ounces", name: "raspberries" },
    { quantity: "1 ounce", name: "raw milk" },
    { quantity: "2 ounces", name: "raw cream" },
    { quantity: "1 teaspoon", name: "unheated honey" },
  ],
  descriptionSteps:
    "Blenderize all ingredients together in an 8- or 12-ounces jar on medium speed for 10 seconds.",
};

const sweetCottageCheese = {
  title: "Sweet Cottage Cheese",
  servings: 4,
  ingredients: [
    { quantity: "1 quart", name: "raw milk" },
    { quantity: "3 ounces", name: "raw cream" },
  ],
  description:
    "Pour milk into a wide-mouthed quart jar and let stand in refrigeration until cream separates to the top. Skim the cream off of milk, place cream in an 8-ounces jar, cap, and place cream in the refrigerator. Let the milk stand in the quart jar in a dark high cupboard until the liquid completely separates from the solids (2-4 days). Pour into a cheese-making cloth pouch, or make a pouch from gauze-cloth or several layers of cheesecloth. Hang and let strain until milk solids are firm but not dry. (Use the whey to pickle, or in place of raw vinegar to prepare sauces and spices, or mix whey with 5 parts water and feed to indoor or outdoor plants.) Put firm cheese in a bowl and stir in separated cream and an additional 3 ounces raw cream.",
};

const sourCottageCheese = {
  title: "Sour Cottage Cheese",
  servings: 4,
  ingredients: [
    { quantity: "1 quart", name: "raw milk" },
    { quantity: "3 ounces", name: "raw cream" },
  ],
  description:
    "Pour milk into a wide-mouthed quart jar and let stand in a dark high cupboard until the liquid completely separates from the solids (2-4 days). Pour into a cheese-making cloth-pouch, or make a pouch from gauze-cloth or several layers of cheesecloth. Hang and let strain until milk solids are firm but not too dry. (Use the whey to pickle, or in place of raw vinegar to prepare sauces and spices, or mix whey with 5 parts water and feed to indoor or outdoor plants.) Put firm cheese in a bowl and gently stir in 3 ounces raw cream.",
};

const carawayCottageCheese = {
  title: "Caraway Cottage Cheese",
  servings: 4,
  ingredients: [
    { quantity: "1 quart", name: "raw milk" },
    { quantity: "3 ounces", name: "raw cream" },
    { quantity: "1 1/2 tablespoons", name: "caraway seeds" },
  ],
  description:
    "Pour milk into a wide-mouthed quart jar, add caraway seeds and let stand in a dark high cupboard until the liquid completely separates from the solids (2-4 days). Pour into a cheese-making cloth-pouch, or make a pouch from gauze-cloth or several layers of cheesecloth. Hang and let strain until milk solids are firm but not too dry. (Use the whey to pickle, or in place of raw vinegar to prepare sauces and spices, or mix whey with 5 parts water and feed to indoor or outdoor plants.) Put firm cheese in a bowl and gently stir in 3 ounces raw cream.",
};

const x = {
  title: "Barbecue Sauce",
  servings: "2 Servings",
  ingredients: [
    { quantity: "1 tomato, medium", name: "tomato, medium" },
    {
      quantity: "1/4 to 1/2 fresh hot pepper, such as jalapeno",
      name: "fresh hot pepper, such as jalapeno",
    },
    { quantity: "4 tablespoons", name: "stone-pressed olive oil" },
    { quantity: "1 teaspoon", name: "raw unpasteurized apple cider vinegar" },
    { quantity: "1 teaspoon", name: "finely chopped fresh basil" },
    { quantity: "1 teaspoon", name: "finely chopped fresh thyme" },
    { quantity: "1/8 teaspoon", name: "minced fresh garlic, (optional)" },
    { quantity: "1 teaspoon", name: "diced fresh red onion" },
  ],
  description:
    "If a thicker sauce is desired, slice a deep and wide cut in the tomato. Over a bowl, gently squeeze the tomato to remove juice and seeds. Drink tomato juice when thirsty. Blenderize all ingredients, except onion, together in an 8-ounces jar for 7 seconds. Stir onion into the sauce, or sprinkle over the sauce after the sauce is poured over meat.",
};

const x1 = {
  title: "Asian Spicy Meat Sauce",
  servings: "2 Servings",
  ingredients: [
    { quantity: "1", name: "raw egg" },
    { quantity: "7 tablespoons", name: "raw cream" },
    { quantity: "1 tablespoon", name: "finely grated fresh ginger root" },
    { quantity: "1/2 teaspoon", name: "unheated honey" },
    { quantity: "1 tablespoon", name: "MUSTARD" },
  ],
  description:
    "Ingredients should be room temperature except mustard. Blenderize all ingredients, except cream, together in a 4-ounces jar on medium speed for 10 seconds. Blenderize cream in a 4-ounces jar on low speed until cream is stiff. Gently fold blended mixture into whipped cream.",
};

const x2 = {
  title: "Béchamel Sauce",
  servings: "1 Serving",
  ingredients: [
    { quantity: "2 tablespoons", name: "unsalted raw sunflower seeds" },
    { quantity: "2 tablespoons", name: "raw milk" },
    { quantity: "3 tablespoons", name: "unsalted raw butter" },
    { quantity: "1 pinch", name: "freshly grated nutmeg" },
    { quantity: "1 teaspoon", name: "chopped fresh thyme" },
    { quantity: "1/4 teaspoon", name: "chopped fresh red onion" },
    { quantity: "1 pinch", name: "ground white pepper" },
  ],
  description:
    "All ingredients must be room temperature. Warm the milk, butter, nutmeg, onion, and pepper together in a 4-ounces jar immersed in a bowl of mildly hot water for 5 minutes. When the butter is liquid, blenderize together for 10 seconds on low speed. In another 4-ounces jar, blenderize seeds on medium speed for 5 seconds. Add seed flour to sauce and blenderize for 10 seconds on low speed.",
};

const x4 = {
  title: "Bordelaise Sauce",
  servings: "1 Serving",
  ingredients: [
    { quantity: "2 tablespoons", name: "bone marrow" },
    { quantity: "2 tablespoons", name: "raw cream" },
    { quantity: "1 tablespoon", name: "unsalted raw butter" },
    { quantity: "1 teaspoon", name: "chopped fresh leeks" },
    { quantity: "1 teaspoon", name: "grated fresh turnips" },
    { quantity: "1 tablespoon", name: "grated no-salt-added raw cheese" },
  ],
  description:
    "Scoop the marrow from the bone. Warm all ingredients, except cheese, in a 4-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize together on low speed for 10 seconds. Stir in grated cheese.",
};

const x3 = {
  title: "Bordelaise Sauce, Two",
  servings: "1 Serving",
  ingredients: [
    { quantity: "4 tablespoons", name: "bone marrow" },
    { quantity: "2 sugar-cubed-sized cubes", name: "fresh pineapple" },
    { quantity: "1/2 teaspoon", name: "chopped shallots" },
    { quantity: "1/4 teaspoon", name: "chopped bay leaves" },
    { quantity: "1/8 teaspoon", name: "chopped thyme" },
    { quantity: "1 pinch", name: "freshly ground mixed peppercorns" },
    { quantity: "1/2 teaspoon", name: "fresh lemon juice" },
    { quantity: "1 sliced", name: "fresh mushroom" },
  ],
  description:
    "Scoop the marrow from the bone. Warm all ingredients, except mushroom and shallot, together in a 4-ounces jar, capped with blender washer/blades/base, in a bowl of mildly hot water for 5 minutes. Blenderize on low speed for 10 seconds. Add sauce to meat, arrange sliced mushrooms and top by sprinkling with shallot.",
};

const caesarMeatDressing = {
  title: "Caesar Meat-Dressing",
  servings: 1,
  ingredients: [
    { quantity: "2 tablespoons", name: "walnut halves" },
    { quantity: "1", name: "egg or 4 tablespoons stone-pressed olive oil" },
    { quantity: "2 teaspoons", name: "fresh lemon juice" },
    { quantity: "1 tablespoon", name: "raw cream" },
    { quantity: "1 teaspoon", name: "unheated honey" },
    { quantity: "1/2 teaspoon", name: "freshly chopped thyme" },
    { quantity: "1 slice", name: "fresh garlic" },
  ],
  description:
    "Blend walnuts in an 8-ounces jar for 5 seconds on medium speed. Add all other ingredients and blend on low speed for 10 seconds.",
};

const cheesySpicedPaste = {
  title: "Cheesy Spiced Paste",
  servings: 4,
  ingredients: [
    { quantity: "1 cup", name: "SOUR COTTAGE CHEESE" },
    { quantity: "2 ounces", name: "SPICE PASTE" },
  ],
  description:
    "Mash and stir together until thoroughly mixed. Will keep in refrigeration for 2 weeks.",
};

const creamyCheesePepperSauce = {
  title: "Creamy Cheese Pepper Sauce",
  servings: 1,
  ingredients: [
    { quantity: "2 tablespoons", name: "grated no-salt-added raw cheese" },
    { quantity: "2 tablespoons", name: "raw cream" },
    { quantity: "1/2 medium", name: "tomato" },
    { quantity: "1 teaspoon", name: "MUSTARD" },
    { quantity: "1/3", name: "jalapeno" },
    { quantity: "1/4", name: "hot red pepper" },
    {
      quantity: "1 teaspoon",
      name: "finely chopped fresh bay leaves (optional)",
    },
  ],
  description:
    "If a thicker sauce is desired, slice a deep and wide cut in the tomato. Over a bowl, gently squeeze the tomato to remove juice and seeds. Drink tomato juice when thirsty. Place all ingredients in an 8-ounces jar and blenderize for 5-10 seconds.",
};

const eggCheeseBasilSauce = {
  title: "Egg/Cheese Basil Sauce",
  servings: 1,
  ingredients: [
    {
      quantity: "2 tablespoons",
      name: "unsalted raw butter, or raw cream, or raw milk",
    },
    { quantity: "1", name: "egg" },
    {
      quantity: "4 tablespoons",
      name: "grated no-salt-added raw Monterey cheese",
    },
    { quantity: "2 tablespoons", name: "finely chopped fresh basil leaves" },
    { quantity: "1 diced", name: "tomato" },
    { quantity: "1 teaspoon", name: "PICKLED PEPPERS (PIMENTOS) (optional)" },
  ],
  description:
    "Blenderize the egg, 1 tablespoon basil, and cheese together in an 8-ounces jar on medium speed until smooth. Slice beef thinly lengthwise, and slice again to make small rectangles. Place meat and diced tomato in a decorative pattern on the plate. Pour sauce over meat. Sprinkle with pimentos and remaining chopped basil.",
};

const frenchMayonnaise = {
  title: "French Mayonnaise",
  servings: 3,
  ingredients: [
    { name: "eggs", quantity: "2" },
    { name: "MUSTARD", quantity: "2 teaspoons" },
    { name: "fresh lemon juice", quantity: "1/2 teaspoon" },
    { name: "chilled unsalted raw butter", quantity: "6 tablespoons" },
    { name: "stone-pressed olive oil", quantity: "6 tablespoons" },
    { name: "ground white pepper", quantity: "2 pinches" },
  ],
  description:
    "Blend all ingredients together in a 12-ounces jar on medium speed for 15-20 seconds.",
};

const garlicButter = {
  title: "Garlic Butter",
  servings: 2,
  ingredients: [
    { name: "raw unsalted butter", quantity: "6 tablespoons" },
    {
      name: "thin slice of a single section of garlic clove",
      quantity: "1 (or more)",
    },
    { name: "unheated honey (optional)", quantity: "1/8 teaspoon" },
  ],
  description:
    "Place all ingredients together in a 4-ounces jar, capped with blender washer/blades/base, immersed in mildly hot water until melted. Blenderize on medium speed for 5 seconds.",
};

const hollandaiseMeatSauce = {
  title: "Hollandaise Meat Sauce",
  servings: 2,
  ingredients: [
    { name: "raw unsalted butter", quantity: "4 tablespoons" },
    { name: "MUSTARD", quantity: "1/2 teaspoon" },
    { name: "grated horseradish", quantity: "1 tablespoon" },
    { name: "medium tomato", quantity: "1/2" },
    { name: "unheated honey", quantity: "1 teaspoon" },
    { name: "stone-pressed olive oil", quantity: "2 tablespoons" },
  ],
  description:
    "All ingredients should be room temperature. If a thicker sauce is desired, slice a deep and wide cut in tomato. Over a bowl, gently squeeze tomato to remove juice and seeds. Drink tomato juice when thirsty. Blenderize all ingredients together in an 8-ounces jar on medium speed for 5 seconds.",
};

const hollandaiseMeatSauceTwo = {
  title: "Hollandaise Meat Sauce, Two",
  servings: 1,
  ingredients: [
    { name: "raw unsalted butter", quantity: "3 tablespoons" },
    { name: "raw egg", quantity: "1" },
    { name: "fresh lemon juice", quantity: "1/2 teaspoon" },
    { name: "fresh hot pepper", quantity: "1/4 to 1/2" },
  ],
  description:
    "Butter should be room temperature, firm but not cold. Blend all ingredients together in a 4-ounces jar on low speed for 5 seconds.",
};

const horseradishSauce = {
  title: "Horseradish Sauce",
  servings: 8,
  ingredients: [
    { name: "grated fresh horseradish", quantity: "6 tablespoons" },
    { name: "raw cream", quantity: "3 tablespoons" },
    { name: "raw milk", quantity: "3 tablespoons" },
    { name: "unheated honey", quantity: "1/2 teaspoon" },
    { name: "fresh raw lime juice (optional)", quantity: "1/2 teaspoon" },
  ],
  description:
    "Blenderize all ingredients together in an 8-ounces jar on medium speed for 10 seconds. It will keep for 2 months in refrigeration.",
};

const horseradishSauceTwo = {
  title: "Horseradish Sauce, Two",
  servings: 8,
  ingredients: [
    { name: "grated fresh horseradish", quantity: "7 tablespoons" },
    {
      name: "raw milk, or whey, or raw apple cider vinegar",
      quantity: "5 tablespoons",
    },
    { name: "unheated honey", quantity: "1 tablespoon" },
    { name: "fresh lime juice", quantity: "1 tablespoon" },
  ],
  description:
    "Blenderize all ingredients together in an 8-ounces jar on medium speed for 10 seconds. It will keep for 2 months in refrigeration.",
};

const italianSauce = {
  title: "Italian Sauce",
  servings: 2,
  ingredients: [
    { name: "stone-pressed olive oil", quantity: "5 ounces" },
    { name: "finely chopped rosemary", quantity: "1 tablespoon" },
    { name: "finely chopped basil", quantity: "1 tablespoon" },
    { name: "garlic clove (optional)", quantity: "1/4" },
  ],
  description:
    "Stir all ingredients together in an 8-ounces jar for 1 minute. Cap and let stand in cupboard for at least 3 days. Do not refrigerate at any time.\n\nIf you would like to flavor a bottle of olive oil, triple the quantities of rosemary, basil, and garlic, add to the bottle of oil and let stand for at least 3 days.",
};

const ketchup = {
  title: "Ketchup",
  servings: "2 Servings",
  ingredients: [
    { name: "tomato", quantity: "1" },
    { name: "unsalted raw butter", quantity: "1 tablespoon" },
    { name: "stone-pressed olive oil", quantity: "1 tablespoon" },
    { name: "unheated honey", quantity: "1 teaspoon" },
    { name: "raw apple cider vinegar", quantity: "1/2 teaspoon" },
    { name: "fresh red onion", quantity: "1 teaspoon" },
    { name: "fresh garlic", quantity: "1 slice" },
    { name: "freshly ground mixed peppercorns", quantity: "1 pinch" },
    {
      name: "fresh fish eggs (optional, makes for salty taste)",
      quantity: "1 teaspoon",
    },
    { name: "MUSTARD or SPICE PASTE", quantity: "1 teaspoon" },
  ],
  description:
    "Slice a deep and wide cut in the tomato. Over a bowl, gently squeeze the tomato to remove juice and seeds. Drink tomato juice when thirsty. Place tomato and all ingredients in an 8-ounces jar and blend on medium speed for 10 seconds. If ingredients stick to the bottom and do not blend properly, remove from the blender and shake the jar until ingredients unsettle at blades. Replace on the blender and resume blending.",
};

const mayonnaise = {
  title: "Mayonnaise",
  servings: "2 Servings",
  ingredients: [
    { name: "unsalted raw butter", quantity: "4 tablespoons" },
    { name: "raw fertile egg", quantity: "1" },
    { name: "fresh raw lemon juice", quantity: "1 tablespoon" },
    { name: "unheated honey", quantity: "1/2 teaspoon" },
    { name: "raw unpasteurized apple cider vinegar", quantity: "1/2 teaspoon" },
    { name: "stone-pressed olive oil", quantity: "4 tablespoons" },
  ],
  description:
    "All ingredients should be room temperature. Blenderize all ingredients together in an 8-ounces jar on medium speed until smooth.",
};

const mexicanSourCreamSauce = {
  title: "Mexican Sour Cream Sauce",
  servings: "6 Servings",
  ingredients: [
    { name: "minced fresh garlic", quantity: "1 slice" },
    { name: "chopped fresh red onion", quantity: "2 tablespoons" },
    { name: "tomato", quantity: "1" },
    { name: "chopped fresh cilantro", quantity: "2 tablespoons" },
    { name: "SOUR CREAM", quantity: "1 cup" },
  ],
  description:
    "Slice a deep and wide cut in the tomato. Gently squeeze the tomato in hand over a bowl to remove juice and seeds. Drink tomato juice when thirsty. Chop the tomato and stir/fold all ingredients together. It will keep in refrigeration for 3 weeks.",
};

const mornaySauce = {
  title: "Mornay Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "BECHAMEL SAUCE", quantity: "2 ounces" },
    { name: "raw cream", quantity: "1 tablespoon" },
    { name: "raw egg", quantity: "1" },
    { name: "ground white pepper", quantity: "2 pinches" },
    { name: "grated no-salt-added raw cheese", quantity: "2 tablespoons" },
  ],
  description:
    "Blenderize egg, cream, and pepper together in a 4-ounces jar on low speed for 10 seconds. Add Béchamel Sauce and cheese, and stir/marbleize. Spoon over slivered raw meat.",
};

const mousseleineSauce = {
  title: "Mousseleine Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "HOLLANDAISE MEAT SAUCE, TWO", quantity: "2 ounces" },
    { name: "raw cream", quantity: "2 ounces" },
  ],
  description:
    "Blenderize cream in a 4-ounces jar on low speed until it is stiff. Swirl/marbleize Hollandaise sauce into whipped cream.",
};

const mushroomCreamCheeseSauce = {
  title: "Mushroom Cream Cheese Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "large mushroom", quantity: "1" },
    { name: "raw cream", quantity: "2 tablespoons" },
    { name: "no-salt-added raw cheddar cheese", quantity: "3 tablespoons" },
    { name: "raw egg", quantity: "1" },
  ],
  description:
    "Chop the mushroom and set aside. Cut the cheese into small chunks. Blenderize all ingredients, except half of the chopped mushroom, together in a 4-ounces jar on low speed for 10 seconds. Stir in the remaining chopped mushroom.",
};

const mushroomCreamSauce = {
  title: "Mushroom Cream Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "large mushroom", quantity: "1" },
    { name: "unsalted raw butter", quantity: "1 tablespoon" },
    { name: "raw cream", quantity: "3 tablespoons" },
    { name: "raw milk", quantity: "2 tablespoons" },
    { name: "diced fresh red onion (optional)", quantity: "2 teaspoons" },
  ],
  description:
    "Chop the mushroom. Blenderize all ingredients, except half of the chopped mushroom and onion, together in an 8-ounces jar on medium speed for 15 seconds. Stir in the remaining chopped mushrooms and onion.",
};

const mustard = {
  title: "Mustard",
  servings: "10 Servings",
  ingredients: [
    { name: "whole yellow mustard seeds", quantity: "4 tablespoons" },
    { name: "whole brown mustard seeds", quantity: "4 tablespoons" },
    { name: "whey or natural mineral water", quantity: "3 ounces" },
    {
      name: "raw unpasteurized apple cider vinegar",
      quantity: "3 tablespoons",
    },
    { name: "unheated honey", quantity: "1 to 2 tablespoons" },
  ],
  description:
    "Place mustard seeds, vinegar, and whey together in an 8-ounces jar. Pour in enough whey or water to fill the jar. Cap and let it stand at room temperature in a cupboard for 24 hours. Add honey and blend on medium speed for 15 seconds. It will keep in refrigeration for several months.",
};

const mustardTwo = {
  title: "Mustard, Two",
  servings: "10 Servings",
  ingredients: [
    { name: "whole yellow mustard seeds", quantity: "3 tablespoons" },
    { name: "whole brown mustard seeds", quantity: "3 tablespoons" },
    { name: "unheated honey", quantity: "2 tablespoons" },
    { name: "raw apple cider vinegar", quantity: "3 tablespoons" },
    { name: "whey or natural mineral water", quantity: "4 ounces" },
    { name: "freshly grated nutmeg", quantity: "2 pinches" },
    { name: "chopped fresh watercress", quantity: "1 teaspoon" },
  ],
  description:
    "Place mustard seeds, vinegar, and whey together in an 8-ounces jar. Pour in enough whey or water to fill the jar. Cap and let stand at room temperature in a cupboard for 24 hours. Add honey, nutmeg, and watercress. Blend on medium speed for 15 seconds. It will keep in refrigeration for several months.",
};

const mustardButter = {
  title: "Mustard Butter",
  servings: "1 Serving",
  ingredients: [
    { name: "MUSTARD", quantity: "1 to 2 tablespoons" },
    { name: "unsalted raw butter", quantity: "3 to 4 tablespoons" },
  ],
  description: "Vigorously stir or marbleize mustard into soft butter.",
};

const nutAndSpiceSauce = {
  title: "Nut And Spice Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "pine nuts", quantity: "2 ounces" },
    { name: "stone-pressed olive oil", quantity: "2 tablespoons" },
    { name: "unsalted raw butter", quantity: "2 tablespoons" },
    { name: "unheated honey", quantity: "1 to 3 teaspoons" },
    { name: "raw apple cider vinegar", quantity: "1/2 teaspoon" },
    { name: "garlic (optional)", quantity: "1/2 slice" },
    { name: "fresh red onion, chopped (optional)", quantity: "1 tablespoon" },
  ],
  description:
    "Blenderize nuts into flour in a 4-ounces jar on medium speed. Warm butter and oil in an 8-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Add nut flour, honey, vinegar, and garlic and blend on low speed. Stir in the onion.",
};

const pepitaGravy = {
  title: "Pepita Gravy",
  servings: "1 Serving",
  ingredients: [
    { name: "pumpkin seeds", quantity: "2 ounces" },
    { name: "meat-fat trimmings or unsalted raw butter", quantity: "2 ounces" },
    { name: "raw cream", quantity: "2 tablespoons" },
    { name: "unheated honey (optional)", quantity: "1 teaspoon" },
  ],
  description:
    "Warm meat-fat or butter with cream in a 4-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize pumpkin seeds into flour in a 4-ounces jar on medium speed. Add fat or butter, cream, and honey, and blend on low speed for 15-20 seconds, until it won't blend or it is smooth.",
};

const sourCream = {
  title: "Sour Cream",
  servings: "8 Servings",
  ingredients: [{ name: "raw cream", quantity: "24 ounces" }],
  description:
    "Pour cream into a quart jar, loosely screw on the lid, and let stand in the refrigerator for 1-3 months. Scoop out as you want it. When you reach the bottom, you will find whey. Use the whey in recipes or dilute with 5x more water than whey and feed to plants.",
};

const sourCreamQuick = {
  title: "Sour Cream Quick",
  servings: "1 Serving",
  ingredients: [
    { name: "raw cream", quantity: "4 tablespoons" },
    { name: "grated no-salt-added cheese", quantity: "3 tablespoons" },
  ],
  description:
    "Blenderize cream and cheese together in a 4-ounces jar on lowspeed until thick and firm (10-15 seconds).South African Frikkadel Glaze",
};

const spicedButterOrOil = {
  title: "Spiced Butter or Oil",
  servings: "2 Servings",
  ingredients: [
    {
      name: "unsalted raw butter, or olive oil, or flax oil",
      quantity: "6 ounces",
    },
    { name: "slice garlic clove", quantity: "1" },
    { name: "freshly grated ginger root", quantity: "1 teaspoon" },
    { name: "pinch turmeric", quantity: "1 pinch" },
    { name: "freshly ground cardamon seed", quantity: "1 pinch" },
    { name: "freshly ground cloves", quantity: "1 pinch" },
    { name: "nutmeg, freshly ground", quantity: "1 pinch" },
    { name: "fresh red onion (optional)", quantity: "1 teaspoon" },
  ],
  description:
    "Warm butter in an 8-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize all ingredients together on medium speed for 15 seconds. If using oil, there is no need to immerse in hot water before blenderizing. ALTERNATIVE: Stir in onion after blenderizing all other ingredients together.",
};

const spicyAfricanPaste = {
  title: "Spicy African Paste",
  servings: "4 Servings",
  ingredients: [
    { name: "tomatoes", quantity: "2" },
    { name: "stone-pressed olive oil", quantity: "6 tablespoons" },
    { name: "unsalted raw butter", quantity: "3 tablespoons" },
    { name: "whole cardamon seed", quantity: "1" },
    { name: "coriander seeds", quantity: "1/4 teaspoon" },
    { name: "grated fresh ginger root", quantity: "1/4 teaspoon" },
    { name: "fenugreek seeds", quantity: "1/4 teaspoon" },
    { name: "whole clove", quantity: "1" },
    { name: "cinnamon stick", quantity: "1/4 inch" },
    { name: "whole allspice", quantity: "1/4 teaspoon" },
    { name: "slice fresh garlic clove", quantity: "1" },
    { name: "fresh red onion", quantity: "1/2 teaspoon" },
    { name: "paprika", quantity: "1 pinch" },
    { name: "whole mixed peppercorns", quantity: "3" },
    { name: "grated nutmeg", quantity: "1 pinch" },
    { name: "fresh hot red pepper", quantity: "1/4" },
    { name: "unheated honey", quantity: "1 tablespoon" },
  ],
  description:
    "Blenderize cardamon, coriander, fenugreek, clove, cinnamon, allspice, and peppercorns together in a 4-ounces jar until they are flour. If a thicker sauce is desired, slice a deep and wide cut in tomato. Over a bowl, gently squeeze tomato to remove juice and seeds. Drink tomato juice when thirsty. Blenderize all ingredients together in a 12- or 16-ounces jar for 15 seconds. Let stand for at least 10 hours. The sauce will keep in refrigeration for at least 1 month.",
};

const spicyThaiSauce = {
  title: "Spicy Thai Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "walnut halves", quantity: "2 ounces" },
    { name: "stalk celery", quantity: "1/4" },
    { name: "fresh ginger root", quantity: "1/2 teaspoon" },
    { name: "coconut cream", quantity: "3 tablespoons" },
    { name: "unheated honey", quantity: "1/2 tablespoon" },
    {
      name: "chopped Thai basil, or mint leaves (optional)",
      quantity: "1 tablespoon",
    },
    { name: "fresh hot peppers", quantity: "1/2-4 tablespoons" },
  ],
  description:
    "Blenderize celery and ginger together and strain out pulp. Warm coconut cream in a 4-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize walnuts in an 8-ounces jar until they are flour. Add juices, honey, and coconut cream and blenderize all ingredients together on medium speed for 10 seconds. If ingredients stick to the bottom while blending, remove from blender and shake loose, then resume blending. ALTERNATIVE 1: Rather than blenderize basil into sauce, cover meat with sauce and top with sprinkled basil. ALTERNATIVE 2: Stir all ingredients together for 1 minute rather than blenderizing.",
};

const tangoMeatSauce = {
  title: "Tango Meat Sauce",
  servings: "1 Serving",
  ingredients: [
    {
      name: "room-temperature soft raw unsalted butter",
      quantity: "3 tablespoons",
    },
    {
      name: "grated horseradish, or HORSERADISH recipe",
      quantity: "1 teaspoon",
    },
    { name: "tomato", quantity: "1/2" },
    { name: "unheated honey", quantity: "1 teaspoon" },
    { name: "olive oil", quantity: "2 tablespoons" },
  ],
  description:
    "If a thicker sauce is desired, slice a deep and wide cut in the tomato. Over a bowl, gently squeeze the tomato to remove juice and seeds. Drink tomato juice when thirsty. Blenderize all ingredients together in an 8-ounces jar on medium speed for 10 seconds. ALTERNATIVE 1: Blenderize all ingredients, except horseradish, together on medium speed for 10 seconds. Stir-marbleize horseradish into the sauce. ALTERNATIVE 2: Blenderize all ingredients, except tomato, together in a 4-ounces jar on medium speed for 10 seconds. Dice the tomato and fold into the sauce.",
};

const tartarCoconutCreamSauce = {
  title: "Tartar Coconut Cream Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "finely chopped fresh dill weed", quantity: "1 tablespoon" },
    { name: "coconut cream", quantity: "4 tablespoons" },
    { name: "fresh lemon juice", quantity: "1 tablespoon" },
    { name: "fresh lime juice", quantity: "1 tablespoon" },
    { name: "chopped PICKLE", quantity: "1 tablespoon" },
  ],
  description:
    "All ingredients must be room temperature except dill. Finely chop the dill. Blenderize all ingredients, except pickles, together in a 4-ounces jar on low speed for 10 seconds. Add and stir in the pickles. Eat with meat, or marinate at room temperature for 1 hour to enhance flavors.",
};

const tartarSauce = {
  title: "Tartar Sauce",
  servings: "2 Servings",
  ingredients: [
    { name: "lemon juice", quantity: "2 tablespoons" },
    { name: "unheated honey", quantity: "1 teaspoon" },
    { name: "raw unsalted butter", quantity: "6 tablespoons" },
    { name: "raw egg", quantity: "1" },
    { name: "fresh dill weed", quantity: "2 tablespoons" },
    {
      name: "finely diced fresh red onion (optional)",
      quantity: "1 tablespoon",
    },
    { name: "chopped PICKLE", quantity: "1 tablespoon" },
  ],
  description:
    "All ingredients must be room temperature except dill. Finely chop the dill. Blenderize all ingredients, except onion and pickle, together in an 8-ounces jar on medium speed for 10 seconds. Stir in the chopped onion and pickle. Pour on meat. Eat, or marinate at room temperature for 4 hours.",
};

const thousandIslandMeatDressing = {
  title: "Thousand Island Meat-Dressing",
  servings: "1 Serving",
  ingredients: [
    { name: "cherry tomatoes", quantity: "2 ounces" },
    { name: "stone-pressed olive oil", quantity: "1 tablespoon" },
    { name: "raw egg", quantity: "1" },
    { name: "unsalted raw butter", quantity: "1 tablespoon" },
    { name: "fresh red onion", quantity: "1/2 tablespoon" },
    { name: "slice fresh garlic", quantity: "1" },
  ],
  description:
    "Blenderize all ingredients in an 8-ounces jar on medium speed for 10 seconds.",
};

const thousandIslandMeatDressingTwo = {
  title: "Thousand Island Meat-Dressing, Two",
  servings: "4 Servings",
  ingredients: [
    { name: "fresh lemon juice", quantity: "2 tablespoons" },
    { name: "unheated honey", quantity: "1 1/2 teaspoons" },
    { name: "cherry tomatoes", quantity: "3/4 cup" },
    { name: "vinegar", quantity: "1 teaspoon" },
    { name: "olive oil", quantity: "2 tablespoons" },
    { name: "no-salt-added raw Monterey cheese", quantity: "1/2-inch cube" },
    { name: "fresh red onion (optional)", quantity: "1 teaspoon" },
    { name: "slice fresh garlic (optional)", quantity: "1 slice" },
  ],
  description:
    "Cut cheese into thin slices. Blenderize all ingredients together in a 12-ounces jar on high speed for 10-15 seconds. This dressing will keep in refrigeration for several weeks in a closed jar.",
};

const tomatoCreamCheeseSauce = {
  title: "Tomato Cream Cheese Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "raw cream", quantity: "2 tablespoons" },
    { name: "diced tomato", quantity: "1/2" },
    { name: "fresh lemon juice", quantity: "1 teaspoon" },
    { name: "no-salt-added raw cheese", quantity: "1-inch cube" },
    { name: "grated no-salt-added raw cheese", quantity: "2 tablespoons" },
  ],
  description:
    "If a thicker sauce is desired, slice a deep and wide cut in the tomato. Over a bowl, gently squeeze the tomato to remove juice and seeds. Drink tomato juice when thirsty. Blenderize all ingredients, except grated cheese, together in a 4-ounces jar on low speed for 10 seconds. Pour over meat and top with sprinkled grated cheese.",
};

const tomatoSauce = {
  title: "Tomato Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "tomato", quantity: "1/2" },
    {
      name: "raw unsalted butter (or stone-pressed olive oil)",
      quantity: "4 tablespoons",
    },
    { name: "no-salt-added raw cheese", quantity: "1/2-inch cube" },
    { name: "slice fresh garlic", quantity: "1" },
    { name: "chopped fresh red onion", quantity: "1/2 to 1 tablespoon" },
    { name: "favorite fresh herbs to your taste (optional)", quantity: "N/A" },
  ],
  description:
    "All ingredients should be room temperature. If a thicker sauce is desired, slice a deep and wide cut in the tomato. Over a bowl, gently squeeze the tomato to remove juice and seeds. Drink tomato juice when thirsty. Warm the butter in an 8-ounces jar, capped with the blender washer/blades/base, immersed in a bowl of warm water until the butter melts. Add the rest of the ingredients to the jar and blenderize on medium speed for 10 seconds.",
};

const wasabe = {
  title: "Wasabe",
  servings: "4 Servings",
  ingredients: [
    { name: "grated fresh wasabe or horseradish", quantity: "6 tablespoons" },
    { name: "natural mineral water or whey", quantity: "2 ounces" },
    { name: "unheated honey", quantity: "1 teaspoon" },
    { name: "fresh lemon juice", quantity: "1 teaspoon" },
    { name: "avocado", quantity: "1/3" },
    { name: "raw apple cider vinegar", quantity: "1/4 teaspoon" },
  ],
  description:
    "Blenderize all together in an 8-ounces jar on medium speed for 15 seconds.",
};

const whitePepperSauce = {
  title: "White Pepper Sauce",
  servings: "1 Serving",
  ingredients: [
    { name: "raw egg", quantity: "1" },
    { name: "unsalted raw butter", quantity: "2 tablespoons" },
    { name: "raw cream", quantity: "2 tablespoons" },
    { name: "grated nutmeg", quantity: "1 pinch" },
    { name: "ground white pepper", quantity: "2 pinches" },
  ],
  description:
    "Blenderize all ingredients together in a 4-ounces jar on low speed for 10-15 seconds.",
};

const himalayanMeat = {
  title: "Himalayan Meat",
  servings: "1 Serving",
  ingredients: [
    { name: "raw meat (beef, lamb, fowl, seafood)", quantity: "5 to 8 ounces" },
    { name: "CHEESY SPICED PASTE", quantity: "2 to 3 ounces" },
  ],
  description:
    "Chop meat into bite-sized pieces. Spread paste on a plate and cover with chopped meat. Alternatively, cut meat into strips and spread paste on strips.",
};

const africanLamb = {
  title: "African Lamb",
  servings: "1 Serving",
  ingredients: [
    { name: "raw apple cider vinegar", quantity: "1/4 teaspoon" },
    { name: "unheated honey", quantity: "1/2 teaspoon" },
    { name: "grated fresh ginger root", quantity: "1/4 teaspoon" },
    { name: "freshly ground clove", quantity: "1/2" },
    { name: "unsalted raw butter", quantity: "5 tablespoons" },
    { name: "seedless raisins", quantity: "3" },
    { name: "slice crushed fresh garlic", quantity: "1" },
    { name: "freshly ground peppercorns", quantity: "1 pinch" },
    { name: "lamb", quantity: "5 to 8 ounces" },
  ],
  description:
    "Warm all ingredients, except ginger and meat, in a 4-ounces jar, cap with blender washer/blades/base, immersed in a bowl of mildly hot water. When butter has completely melted, blenderize on medium speed for 10 seconds. Add and stir in ginger. Prepare lamb as you wish and add or cover with sauce.",
};

const beefPate = {
  title: "Beef Pâté",
  servings: "1 Serving",
  ingredients: [
    { name: "pumpkin seeds", quantity: "4 tablespoons" },
    { name: "unsalted raw butter", quantity: "4 tablespoons" },
    { name: "slice fresh garlic", quantity: "1" },
    { name: "ground beef", quantity: "5 to 8 ounces" },
    { name: "diced red onions", quantity: "1 teaspoon" },
    { name: "egg", quantity: "1" },
  ],
  description:
    "Blenderize seeds in an 8-ounces jar on medium speed for 5 seconds. Warm butter and garlic in a 4-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize butter and garlic on low speed for 5 seconds. Pour butter/garlic into seed flour in an 8-ounces jar, stir and blenderize on medium speed for 5 seconds. Place meat and all ingredients into a food processor and blend until they are paste.",
};

const beefStroganoff = {
  title: "Beef Stroganoff",
  servings: "1 Serving",
  ingredients: [
    { name: "chopped beef", quantity: "5 to 8 ounces" },
    { name: "minced garlic", quantity: "1 slice" },
    { name: "chopped mushrooms", quantity: "3" },
    { name: "chopped chives", quantity: "2" },
    { name: "SOUR CREAM or SOUR CREAM QUICK", quantity: "5 tablespoons" },
  ],
  description:
    "Stir garlic and sour cream together. Lay a bed of mushrooms, cover with meat, top with sour cream, and sprinkle with chives.",
};

const carpaccio = {
  title: "Carpaccio (pronounced carpachio)",
  servings: "1 Serving",
  ingredients: [
    { name: "stone-pressed olive oil", quantity: "5 tablespoons" },
    { name: "grated no-salt-added raw cheese", quantity: "2 tablespoons" },
    { name: "finely chopped fresh bay leaves", quantity: "1 tablespoon" },
    { name: "finely chopped fresh basil leaves", quantity: "1 tablespoon" },
    { name: "chopped fresh parsley", quantity: "1 tablespoon" },
    { name: "minced or crushed fresh garlic (optional)", quantity: "1 slice" },
    { name: "chopped fresh red onion (optional)", quantity: "1 teaspoon" },
    { name: "meat (beef, lamb, fowl, seafood)", quantity: "5 to 8 ounces" },
    { name: "mushroom", quantity: "1" },
  ],
  description:
    "Vigorously stir olive oil, bay, basil, onion, and garlic together for 1 minute. Slice meat into thin luncheon meat-sized slices in the food processor with a slicing plate. In a covered bowl at room temperature, marinate meat slices in sauce for 1 to 3 hours. Spread meat and sauce on a plate and sprinkle with cheese and top with parsley.",
};

const ethiopianKitfo = {
  title: "Ethiopian Kitfo",
  servings: "1 Serving",
  ingredients: [
    { name: "SPICE PASTE", quantity: "1 to 2 tablespoons" },
    { name: "red onions", quantity: "1 teaspoon" },
    { name: "fresh hot pepper", quantity: "1/2 teaspoon" },
    { name: "freshly grated fresh ginger root", quantity: "1/2 teaspoon" },
    { name: "freshly ground cardamon seed", quantity: "1 pinch" },
    { name: "lemon juice", quantity: "1 tablespoon" },
    { name: "red, yellow and/or green bell pepper", quantity: "1/4" },
    { name: "fresh beef", quantity: "5 to 8 ounces" },
  ],
  description:
    "Mash paste, pepper, ginger, cardamon, and lemon together in a cup. Cut meat into chunks and place in a food processor. Add all ingredients and blend all together for 10 seconds.",
};

const lambShanks = {
  title: "Lamb Shanks",
  servings: "1 Serving",
  ingredients: [
    { name: "lamb shanks", quantity: "5 to 8 ounces" },
    { name: "unsalted raw butter", quantity: "2 tablespoons" },
    { name: "bone marrow", quantity: "1 teaspoon" },
    { name: "stone-pressed olive oil", quantity: "3 tablespoons" },
    {
      name: "grated raw unsalted Monterey cheese",
      quantity: "1 to 2 tablespoons",
    },
    { name: "chopped fresh basil (optional)", quantity: "1 teaspoon" },
    { name: "chopped fresh bay leaves (optional)", quantity: "1 teaspoon" },
    { name: "chopped fresh parsley", quantity: "1 tablespoon" },
    { name: "spear asparagus", quantity: "1" },
    { name: "chopped red onions (optional)", quantity: "1 teaspoon" },
    { name: "minced fresh garlic (optional)", quantity: "1 slice" },
  ],
  description:
    "Scoop marrow from shank bone. Warm butter, oil, basil and/or bay leaves, and garlic together in a 4-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. When butter has melted, blenderize ingredients for 5 seconds at medium speed. Slice lamb into strips. Dice asparagus. In a covered bowl at room temperature, marinate lamb strips and asparagus in sauce for 1-3 hours. Spread marinated ingredients on a plate and top with cheese, onion, and parsley.",
};

const liverPate = {
  title: "Liver Pâté",
  servings: "1 Serving",
  ingredients: [
    { name: "organic raw liver", quantity: "5 to 8 ounces" },
    { name: "red onions (optional)", quantity: "1 to 3 tablespoons" },
  ],
  description:
    "Cut liver into small chunks. Put liver and onion in a food processor and blend together for 20-30 seconds.",
};

const liverPateTwo = {
  title: "Liver Pâté, Two",
  servings: "1 Serving",
  ingredients: [
    { name: "raw sunflower seeds", quantity: "2 to 4 tablespoons" },
    { name: "organic raw liver", quantity: "5 to 8 ounces" },
    { name: "red onions (optional)", quantity: "1 to 3 tablespoons" },
  ],
  description:
    "Blenderize sunflower seeds in a 4-ounces jar on medium speed for 10 seconds. Cut liver into small chunks. Put all ingredients in a food processor and blend together for 20-30 seconds.",
};

const meatAuGratin = {
  title: "Meat au Gratin",
  servings: "1 Serving",
  ingredients: [
    {
      name: "unsalted raw butter (may substitute stone-pressed olive oil)",
      quantity: "4 tablespoons",
    },
    { name: "fresh garlic", quantity: "1 slice" },
    { name: "red bell pepper", quantity: "1/4" },
    {
      name: "no-salt-added raw cheddar cheese (1 1/2-inch cube)",
      quantity: "1",
    },
    { name: "raw meat (beef, lamb, fowl, seafood)", quantity: "5 to 8 ounces" },
  ],
  description:
    "Grate a portion of room-temperature cheese and set aside. Slice remaining cheese thinly. Warm cheese slices, garlic, and room-temperature butter in a 4-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. When butter is completely melted, blenderize ingredients until smooth. Cut 1/8 bell pepper into circular slices. Chop remaining 1/8 bell pepper. Slice meat thinly lengthwise. Arrange meat on a plate in an overlapping circular pattern. Pour sauce over meat. Cover with slices of bell pepper like spokes of a wheel. Sprinkle grated cheese on top. Finish by sprinkling with chopped bell pepper.",
};

const nutsOverMeat = {
  title: "Nuts Over Meat",
  servings: "1 Serving",
  ingredients: [
    { name: "NUT BUTTER", quantity: "4 to 5 ounces" },
    { name: "raw meat (beef, lamb, fowl, seafood)", quantity: "5 to 8 ounces" },
    {
      name: "1/4 quarter of a zucchini or cucumber, or combination",
      quantity: "1",
    },
  ],
  description:
    "Make nut butter of choice. Slice zucchini and/or cucumber circularly and place on a plate in a circle. Slice meat into thin strips and place inside the squash circle. Pour nut butter over meat.",
};

const steakTartare = {
  title: "Steak Tartare",
  servings: "1 Serving",
  ingredients: [
    { name: "raw sirloin steak or New York steak", quantity: "5 to 8 ounces" },
    { name: "red onions", quantity: "2 tablespoons" },
    { name: "unsalted raw butter", quantity: "1 to 3 tablespoons" },
    { name: "raw egg", quantity: "1" },
    { name: "raw MUSTARD", quantity: "1 teaspoon" },
    { name: "freshly ground caraway seeds", quantity: "2 pinches" },
    { name: "freshly ground mixed peppercorns", quantity: "2 pinches" },
    { name: "unheated honey (optional)", quantity: "1/2 teaspoon" },
    { name: "horseradish (optional)", quantity: "1 teaspoon" },
    { name: "sprig parsley or cilantro", quantity: "1" },
  ],
  description:
    "Cut steak into cubes. Blend meat and all ingredients together in a food processor for 5-15 seconds, depending on the desired consistency.",
};

const cajunChicken = {
  title: "Cajun Chicken",
  servings: "1 Serving",
  ingredients: [
    { name: "refrigerated unsalted raw butter", quantity: "2 tablespoons" },
    { name: "refrigerated raw cream", quantity: "1 tablespoon" },
    { name: "chilled raw egg", quantity: "1 (keep refrigerated for 2 hours)" },
    { name: "freshly grated nutmeg", quantity: "1 pinch" },
    { name: "fresh ground mixed peppercorns", quantity: "1 pinch" },
    { name: "raw chicken", quantity: "5 to 8 ounces" },
    { name: "diced tomato", quantity: "1/2" },
  ],
  description:
    "Blenderize egg, nutmeg, pepper, chilled butter, and cream in a 4-ounces jar on low speed for 4-6 seconds. Dice chicken. Fold sauce with chicken and top with diced tomato.",
};

const cheesyChicken = {
  title: "Cheesy Chicken",
  servings: "1 Serving",
  ingredients: [
    { name: "stone-pressed olive oil", quantity: "5 tablespoons" },
    { name: "fresh lemon juice", quantity: "1 tablespoon" },
    { name: "sliced no-salt-added raw cheese (1-inch cube)", quantity: "1" },
    { name: "fresh hot pepper (1/4 to 1)", quantity: "1" },
    { name: "fresh red onion (optional)", quantity: "1 teaspoon" },
    { name: "raw chicken", quantity: "5 to 8 ounces" },
  ],
  description:
    "Blenderize all ingredients, except chicken, together in a 4-ounces jar on medium speed for 10 seconds. Slice chicken into narrow strips, baste, and marinate for 20-60 minutes. ALTERNATIVE: Instead of blenderizing onion, dice and gently stir into the sauce before basting and marinating chicken.",
};

const chickenSalad = {
  title: "Chicken Salad",
  servings: "1 Serving",
  ingredients: [
    { name: "raw chicken", quantity: "5 to 8 ounces" },
    { name: "diced cucumbers", quantity: "1 tablespoon" },
    { name: "chopped summer squash", quantity: "1 tablespoon" },
    { name: "PICKLED PEPPERS (PIMENTOS)", quantity: "1 tablespoon" },
    { name: "MAYONNAISE", quantity: "3 tablespoons" },
  ],
  description:
    "Place chicken in a food processor, blend for 5-7 seconds, and place in a bowl. Add all other ingredients and gently fold into ground chicken.",
};

const chickenBeefMustard = {
  title: "Chicken/Beef Mustard",
  servings: "1 Serving",
  ingredients: [
    { name: "ground or diced raw chicken", quantity: "2 to 3 ounces" },
    { name: "diced beef", quantity: "3 to 5 ounces" },
    {
      name: "grated no-salt-added raw Monterey cheese",
      quantity: "2 tablespoons",
    },
    { name: "MUSTARD BUTTER", quantity: "1 serving" },
  ],
  description: "Fold meats and mustard/butter together and top with cheese.",
};

const frenchChicken = {
  title: "French Chicken",
  servings: "1 Serving",
  ingredients: [
    { name: "SOUR CREAM or SOUR CREAM QUICK", quantity: "2 tablespoons" },
    { name: "diced tomato", quantity: "1/2" },
    { name: "finely chopped bay leaves", quantity: "1/2 teaspoon" },
    { name: "finely chopped thyme", quantity: "1/2 teaspoon" },
    { name: "freshly ground mixed peppercorns", quantity: "1/2 teaspoon" },
    { name: "crushed fresh garlic clove", quantity: "1/4" },
    { name: "chopped parsley", quantity: "1/2 teaspoon" },
    { name: "raw chicken", quantity: "5 to 8 ounces" },
  ],
  description:
    "Place chicken in a food processor and blend for 10 seconds. Spread a thick layer of chicken on the plate. Gently stir garlic and sour cream together. Spread a layer of sour cream over meat. Spoon tomato over sour cream and sprinkle with ground peppercorns, bay, thyme, and parsley, in that order.",
};

const macaroniCheeseChicken = {
  title: "Macaroni & Cheese-Tasting Chicken",
  servings: "1 Serving",
  ingredients: [
    { name: "chopped or ground raw chicken", quantity: "6 ounces" },
    { name: "SOUR CREAM", quantity: "3 tablespoons" },
    { name: "egg", quantity: "1" },
    { name: "red hot pepper", quantity: "1" },
    { name: "grated no-salt-added raw cheese", quantity: "3 tablespoons" },
  ],
  description:
    "Blenderize egg, pepper, cheese, and sour cream together in an 8-ounces jar on medium speed for 10 seconds. Fold sauce into chicken. ALTERNATIVE: On a plate, form chicken into a plateau, indent, and fill with sauce.",
};

const orangeGlazedDuck = {
  title: "Orange-Glazed Duck",
  servings: "1 Serving",
  ingredients: [
    { name: "soft unsalted raw butter", quantity: "3 tablespoons" },
    { name: "black pepper (optional)", quantity: "1 pinch" },
    { name: "section fresh orange", quantity: "1" },
    { name: "unheated honey", quantity: "1 tablespoon" },
    { name: "raw apple cider vinegar", quantity: "1/4 teaspoon" },
    { name: "lemon juice", quantity: "1/2 teaspoon" },
    { name: "fresh mint leaf", quantity: "1" },
    { name: "raw duck", quantity: "5 to 8 ounces" },
  ],
  description:
    "Blenderize all ingredients, except duck and mint, in a 4-ounces jar on high speed for 5 seconds. Chop duck into small pieces. Cover with orange glaze. Marinate for 2 hours. Finely chop mint leaf and sprinkle over glaze.",
};

const parmesanChicken = {
  title: "Parmesan Chicken",
  servings: "1 Serving",
  ingredients: [
    { name: "raw chicken, diced", quantity: "6 ounces" },
    { name: "walnut halves", quantity: "4" },
    { name: "stone-pressed olive oil", quantity: "2 tablespoons" },
    { name: "fresh lemon juice", quantity: "1 tablespoon" },
    { name: "raw cream", quantity: "2 tablespoons" },
    { name: "finely chopped oregano", quantity: "1 tablespoon" },
    { name: "minced garlic clove", quantity: "1 slice" },
  ],
  description:
    "Blenderize walnuts into flour in a 4-ounces jar on high speed for 5 seconds. Add all ingredients, except chicken, and blenderize on low speed for 15 seconds. Spread over chicken. Eat immediately or marinate for 45 minutes.",
};

const salsaChicken = {
  title: "Salsa Chicken",
  servings: "1 Serving",
  ingredients: [
    { name: "tomato", quantity: "1" },
    { name: "fresh hot pepper", quantity: "1" },
    { name: "fresh lime juice", quantity: "2 tablespoons" },
    { name: "vinegar", quantity: "1/2 teaspoon" },
    { name: "skinned, boned, diced chicken breast", quantity: "5 to 8 ounces" },
    { name: "diced red bell pepper", quantity: "1/4" },
    { name: "diced celery", quantity: "1/4 stalk" },
    { name: "slice avocado or raw egg", quantity: "1" },
    { name: "diced red onions", quantity: "1 tablespoon" },
    { name: "sprig cilantro (optional)", quantity: "1" },
  ],
  description:
    "Slice a deep and wide cut in the tomato. Over a bowl, gently squeeze tomato to remove juice and seeds. Drink tomato juice when thirsty. Blenderize tomato, pepper, vinegar, and lime juice together in an 8-ounces jar on medium speed for 5-10 seconds. Pour sauce over chicken in a bowl, fold together, and marinate for 45 minutes. Top with other ingredients and eat from the bowl. ALTERNATIVE: Spoon chicken on a plate, cover with sauce, and spread remaining ingredients on top.",
};

const sexyChicken = {
  title: "Sexy Chicken",
  servings: "1 Serving",
  ingredients: [
    {
      name: "skinned, boned, diced chicken breasts",
      quantity: "5 to 8 ounces",
    },
    { name: "raw egg", quantity: "1" },
    { name: "NUT BUTTER made with peanuts", quantity: "4 to 5 ounces" },
    { name: "chopped celery stalk", quantity: "1 inch section" },
    { name: "chopped fresh arugula leaves", quantity: "1 tablespoon" },
  ],
  description:
    "Gently whip raw egg, peanut butter, celery, and arugula together in a small bowl. Fold chicken into whipped mixture. Spoon spiced chicken on to plate. Pour remaining sauce in the bowl over chicken. ALTERNATIVE: Gently whip raw egg, peanut butter, and celery together in a small bowl. Spread chicken on a plate, cover with sauce, and top with arugula.",
};

const tahitianChicken = {
  title: "Tahitian Chicken",
  servings: "1 Serving",
  ingredients: [
    { name: "COCONUT CREAM", quantity: "3 ounces" },
    { name: "diced tomato", quantity: "1/2 to 1" },
    { name: "fresh lemon juice", quantity: "2 tablespoons" },
    { name: "fresh lime juice", quantity: "2 tablespoons" },
    { name: "fresh raw chicken", quantity: "5 to 8 ounces" },
  ],
  description:
    "Stir coconut cream and lime juice together, and let stand for 10 minutes. Dice meat. Place chicken, lemon juice, and tomato in a bowl and fold gently together. Top with coconut/lime sauce. Eat immediately or let marinate 2 hours before topping with coconut/lime sauce.",
};

const turkeyPate = {
  title: "Turkey Pâté",
  servings: "1 Serving",
  ingredients: [
    { name: "turkey", quantity: "5 to 8 ounces" },
    { name: "raw eggs", quantity: "1 to 2" },
    { name: "MUSTARD and/or HORSERADISH", quantity: "1 to 2 tablespoons" },
    { name: "diced red onions", quantity: "1 tablespoon" },
    { name: "diced tomato", quantity: "1/2" },
  ],
  description:
    "Place turkey in a food processor and blend for 20 seconds. Mash turkey down into the food processor and add egg(s) and mustard and/or horseradish and blend for 10 seconds more. Put into a bowl or on a plate and cover with tomato and onion. ALTERNATIVE: When adding egg and mustard, or egg and horseradish to the food processor, add tomato and onion. Blend for 10 seconds.",
};

const liverBooster = {
  serving: "1",
  ingredients: [
    { name: "organic raw liver", quantity: "4 to 8 ounces" },
    { name: "raw milk", quantity: "4 to 8 ounces" },
    { name: "unheated honey", quantity: "1 tablespoon", optional: true },
  ],
  description:
    "Cut liver into small chunks. Blenderize all ingredients together in a 12- or 16-ounces jar on high speed for 20 seconds.",
};

const liverBoosterTwo = {
  serving: "1",
  ingredients: [
    { name: "organic raw liver", quantity: "4 to 8 ounces" },
    { name: "raw milk", quantity: "4 to 8 ounces" },
    { name: "red onions", quantity: "1 to 2 tablespoons", optional: true },
  ],
  description:
    "Cut liver into small chunks. Blenderize all ingredients together in a 12- or 16-ounces jar on high speed for 20 seconds.",
};

const powerDrink = {
  serving: "1",
  ingredients: [
    { name: "organic raw liver", quantity: "2 tablespoons" },
    { name: "organic raw thyroid gland", quantity: "1 tablespoon" },
    { name: "organic raw testis or ovary", quantity: "1 tablespoon" },
    { name: "organic raw lung", quantity: "2 tablespoons" },
    { name: "organic raw brain", quantity: "1 tablespoon" },
    { name: "organic adrenal gland", quantity: "1 tablespoon" },
    { name: "raw milk", quantity: "4 ounces" },
    { name: "red onions", quantity: "1 to 2 tablespoons" },
  ],
  description:
    "Blenderize all ingredients together in a 12-ounces jar on high speed for 20 seconds.",
};

const islandFishSauce = {
  serving: "1",
  ingredients: [
    { name: "banana or pineapple", quantity: "1 ounce" },
    { name: "unsalted butter", quantity: "1 tablespoon" },
    { name: "raw egg", quantity: "1" },
    { name: "unheated honey", quantity: "1/4 teaspoon", optional: true },
    { name: "organic vanilla extract", quantity: "1 drop", optional: true },
  ],
  description:
    "Blenderize all ingredients together in a 4-ounces jar on high speed for 10 seconds.",
};

const polynesianGingerSauce = {
  serving: "1",
  ingredients: [
    { name: "coarsely grated fresh ginger root", quantity: "1 tablespoon" },
    { name: "fresh lemon juice", quantity: "2 tablespoons" },
    { name: "unheated honey", quantity: "1 tablespoon" },
    {
      name: "unsalted raw butter",
      quantity: "2 to 3 tablespoons",
      optional: true,
    },
  ],
  description: "Vigorously stir butter and all other ingredients together.",
};

const spicyAfricanPasteForFish = {
  serving: "4",
  ingredients: [
    { name: "tomatoes", quantity: "2" },
    { name: "flax oil", quantity: "6 tablespoons" },
    { name: "unsalted raw butter", quantity: "3 tablespoons" },
    { name: "whole cardamom seed", quantity: "1" },
    { name: "coriander seeds", quantity: "1/4 teaspoon" },
    { name: "grated fresh ginger root", quantity: "1/4 teaspoon" },
    { name: "fenugreek seeds", quantity: "1/4 teaspoon" },
    { name: "whole clove", quantity: "1" },
    { name: "cinnamon stick", quantity: "1/4 inch" },
    { name: "whole allspice", quantity: "1/4 teaspoon" },
    { name: "fresh garlic clove", quantity: "1 slice" },
    { name: "red onions", quantity: "1/2 teaspoon" },
    { name: "paprika", quantity: "1 pinch" },
    { name: "whole mixed peppercorns", quantity: "3" },
    { name: "grated nutmeg", quantity: "1 pinch" },
    { name: "fresh hot red pepper", quantity: "1/4" },
    { name: "unheated honey", quantity: "1 tablespoon" },
  ],
  description:
    "Blenderize cardamom, coriander, fenugreek, clove, cinnamon, allspice, and peppercorns together in a 4-ounces jar on high speed until they are flour. If a thicker sauce is desired, slice a deep and wide cut in tomato. Over a bowl, gently squeeze tomato to remove juice and seeds. Drink tomato juice when thirsty. Blenderize all ingredients together in a 12- or 16-ounces jar on medium speed for 15 seconds. Let stand for at least 10 hours. The sauce will keep in refrigeration for at least 1 month.",
};

const ceviche = {
  serving: "1",
  ingredients: [
    { name: "fresh ocean wild-caught raw fish", quantity: "5 to 8 ounces" },
    { name: "fresh lemon or lime juice", quantity: "3 to 4 ounces" },
    { name: "fresh tomato", quantity: "1/2 to 1, diced" },
    {
      name: "flax oil or stone-pressed olive oil",
      quantity: "4 to 6 tablespoons",
    },
    { name: "fresh cilantro, chopped", quantity: "1 tablespoon" },
    { name: "red onion, chopped", quantity: "1 tablespoon", optional: true },
    { name: "fresh garlic, minced", quantity: "1 slice", optional: true },
  ],
  description:
    "Dice fish and marinate in lemon or lime juice for 20 minutes to 24 hours in a jar or bowl. Stir oil, onion, and garlic together for 1 minute. Pour off lemon or lime juice from fish. Pour oil mixture over fish. Top with diced tomato.",
};

const escolarFresca = {
  serving: "1",
  ingredients: [
    { name: "Escolar fish", quantity: "5 to 8 ounces" },
    { name: "fresh tomato", quantity: "1/2, diced" },
    { name: "fresh lime or lemon juice", quantity: "2 tablespoons" },
    { name: "apples, diced", quantity: "1 tablespoon" },
    { name: "red onion, diced", quantity: "1 teaspoon", optional: true },
    { name: "unheated honey", quantity: "1 teaspoon", optional: true },
  ],
  description:
    "If using honey, mix lime or lemon juice with honey until honey is dissolved. Stir tomato, apple, and onion together and spoon over fish. Marinate for 10-40 minutes.",
};

const hotButteredSalmon = {
  serving: "1",
  ingredients: [
    { name: "fresh ocean wild-caught raw salmon", quantity: "5 to 8 ounces" },
    { name: "lemon or lime juice", quantity: "3 tablespoons" },
    { name: "hot pepper", quantity: "1/8 to 1/2" },
    { name: "raw unsalted butter", quantity: "3 tablespoons" },
    { name: "grated no-salt-added raw cheese", quantity: "2 tablespoons" },
  ],
  description:
    "Warm lemon and lime juices, hot pepper, and soft butter together in a 4-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize on medium speed for 10 seconds. Pour mixture over salmon and top with grated cheese.",
};

const oysterSauceAndPasta = {
  serving: "1",
  ingredients: [
    { name: "PASTA SUBSTITUTE (see recipe)", quantity: "1 serving" },
    { name: "oysters", quantity: "3" },
    { name: "mushrooms", quantity: "2" },
    { name: "raw unsalted butter", quantity: "2 tablespoons" },
    {
      name: "raw unsalted Monterey or Muenster cheese",
      quantity: "1 1/2 -inch cube",
    },
    { name: "red or white onion, sliced", quantity: "1 slice" },
    {
      name: "fresh sweet red pepper",
      quantity: "2 tablespoons",
      optional: true,
    },
  ],
  description:
    "Make PASTA SUBSTITUTE (see recipe). Blenderize 1 1/2 oysters, 1 mushroom, butter, 1/2 of the cheese, 1/2 of the onion, and 1/2 of the red pepper together in a 4-ounces jar on medium speed for 10 seconds. Dice remaining oysters, mushrooms, and onion. Fold diced ingredients together with sauce and pour over PASTA. Grate remaining cheese. Top dish with grated cheese. ALTERNATIVE: Follow recipe above but do not blenderize onion in sauce. Chop onion and fold into sauce.",
};

const oystersOverCheese = {
  serving: "1",
  ingredients: [
    { name: "fresh oysters", quantity: "5" },
    { name: "mushrooms", quantity: "2" },
    { name: "raw unsalted butter", quantity: "5 tablespoons" },
    { name: "grated no-salt-added raw cheese", quantity: "6 tablespoons" },
    { name: "red onions, chopped", quantity: "1 teaspoon" },
    {
      name: "fresh sweet red peppers, circular slices",
      quantity: "1 to 2 slices",
      optional: true,
    },
  ],
  description:
    "Blenderize 1 1/2 oysters and butter in a 4-ounces jar on high speed for 10 seconds. In a food processor, chop with pulse-action the sweet pepper, mushrooms, and remaining oysters. In a serving bowl, fold all ingredients, except cheese, together. Sprinkle a bed of cheese evenly over the plate. Spoon oyster/pepper/mushroom mixture evenly over cheese. Top with oyster/butter sauce.",
};

const salmonWithLemonAndParsley = {
  serving: "1",
  ingredients: [
    {
      name: "salmon, chopped into bite-sized pieces",
      quantity: "5 to 8 ounces",
    },
    { name: "fresh lemon or lime juice", quantity: "6 to 9 tablespoons" },
    { name: "fresh parsley, finely chopped", quantity: "1/2 cup" },
  ],
  description:
    "Marinate fish in juice for at least 20 minutes at room temperature. Place fish on a plate and sprinkle with parsley.",
};

const spicedSalmon = {
  serving: "1",
  ingredients: [
    { name: "fresh ocean wild-caught raw salmon", quantity: "5 to 8 ounces" },
    { name: "slivered shallots", quantity: "1 tablespoon" },
    { name: "unsalted raw butter", quantity: "2 tablespoons" },
    { name: "sliced mushroom", quantity: "1" },
    { name: "chopped fresh dill", quantity: "1 tablespoon" },
    { name: "egg", quantity: "1" },
    { name: "fresh lemon juice", quantity: "1 tablespoon" },
    { name: "chopped fresh hot pepper", quantity: "1/4 to 1/2" },
  ],
  description:
    "Blenderize egg, chilled butter, dill, and lemon juice together in a 4-ounces jar on high speed for 5 seconds. Cut salmon into strips and arrange in a circular pattern on a plate. Cover with blended mixture. Arrange shallot slivers on top and sprinkle with chopped hot pepper.",
};

const spicedSashimi = {
  serving: "1",
  ingredients: [
    { name: "grated fresh ginger root", quantity: "1 tablespoon" },
    { name: "WASABE or HORSERADISH", quantity: "1 teaspoon" },
    { name: "flax oil", quantity: "3 tablespoons" },
    { name: "very soft unsalted raw butter", quantity: "1 tablespoon" },
    { name: "unheated honey (optional)", quantity: "1/2 teaspoon" },
    { name: "fresh ocean wild-caught raw fish", quantity: "5 to 8 ounces" },
  ],
  description:
    "Vigorously stir all ingredients together or blenderize in a 4-ounces jar on low speed for 5 seconds. Spoon over fish.",
};

const swordfishSashimi = {
  serving: "1",
  ingredients: [
    { name: "fresh Swordfish", quantity: "5 to 8 ounces" },
    { name: "fresh lemon or lime juice", quantity: "4 tablespoons" },
    { name: "fresh hot pepper (like jalapeno)", quantity: "1" },
    { name: "stone-pressed olive oil", quantity: "2 ounces" },
    { name: "small assortment of herbs or lettuce", quantity: "as needed" },
  ],
  description:
    "Grate and finely chop pepper. Stir juice, olive oil, and pepper together for 1 minute. Slice swordfish into strips. Arrange fish in a pattern on a plate. Pour oil/juice/pepper mixture over fish.",
};

const tahitianFish = {
  serving: "1",
  ingredients: [
    { name: "COCONUT CREAM", quantity: "3 ounces" },
    { name: "diced tomato", quantity: "1/2 to 1" },
    { name: "fresh lime juice", quantity: "3 to 4 tablespoons" },
    { name: "fresh ocean wild-caught raw fish", quantity: "5 to 8 ounces" },
  ],
  description:
    "Stir coconut cream and lime juice together and let stand for 10 minutes. Dice fish. Place fish and tomato in a bowl. Pour coconut/lime sauce over fish and tomato and fold gently together. Eat immediately or let marinate for up to 8 hours. ALTERNATIVE: Substitute 1/3 cup pineapple for tomato.",
};

const thaiCeviche = {
  serving: "1",
  ingredients: [
    { name: "fresh ocean wild-caught raw fish", quantity: "5 to 8 ounces" },
    { name: "fresh lemon or lime juice", quantity: "4 to 6 tablespoons" },
    {
      name: "flax oil or stone-pressed olive oil",
      quantity: "2 to 4 tablespoons",
    },
    { name: "unsalted raw butter", quantity: "1 to 2 tablespoons" },
    { name: "chopped fresh mint (optional)", quantity: "1 tablespoon" },
    { name: "chopped PICKLED GINGER", quantity: "2 tablespoons" },
  ],
  description:
    "Dice fish and marinate in lemon or lime juice for 20 minutes or up to 24 hours. Pour off juice. Stir oil, soft butter, and ginger together for 1 minute and pour over fish. Top with chopped mint. ALTERNATIVE: Use all oil, or all butter, or varying amounts of oil and butter.",
};

const chickenTomatoSoup = {
  serving: "1",
  ingredients: [
    { name: "chopped raw chicken", quantity: "3 to 5 ounces" },
    { name: "tomatoes", quantity: "1 1/2 to 2" },
    { name: "organic vanilla extract", quantity: "2 drops" },
    { name: "raw apple cider vinegar", quantity: "1 1/2 teaspoons" },
    { name: "unheated honey (optional)", quantity: "1 tablespoon" },
    { name: "stone-pressed olive oil", quantity: "2 tablespoons" },
  ],
  description:
    "Place all ingredients into the food processor and blend for 5 seconds. Pour into a bowl.",
};

const chickenSoup = {
  serving: "1",
  ingredients: [
    { name: "raw chicken", quantity: "5 to 8 ounces" },
    { name: "chopped watercress", quantity: "1 tablespoon" },
    { name: "unsalted raw butter", quantity: "2 tablespoons" },
    {
      name: "red onion, or shallot, or coarsely chopped chives",
      quantity: "1 slice",
    },
    { name: "raw milk", quantity: "3 ounces" },
    { name: "stone-pressed olive oil", quantity: "2 tablespoons" },
    { name: "freshly ground mixed peppercorns", quantity: "1 pinch" },
  ],
  description:
    "Warm butter, oil, milk, and watercress in an 8-ounces jar, capped tightly and immerse the jar in a bowl of mildly hot water until butter completely melts. Place all ingredients, including chicken, in the food processor and blend for 10-15 seconds. If you would like warm soup, place the soup in a 16-ounces jar, cap, and immerse in a bowl of mildly hot water for 10 minutes.",
};

const shrimpPassion = {
  serving: "1",
  ingredients: [
    { name: "fresh shrimp", quantity: "5 to 8 ounces" },
    { name: "grated fresh ginger root", quantity: "1 teaspoon" },
    { name: "chopped red onions (optional)", quantity: "1 teaspoon" },
    { name: "finely chopped fresh hot pepper", quantity: "1/4 to 1/2" },
    { name: "partially ripe papaya", quantity: "1/3" },
    { name: "chopped fresh parsley", quantity: "1 tablespoon" },
  ],
  description:
    "Sprinkle ginger over papaya and mash together until saucy, or chop papaya and blenderize with ginger in a 4-ounces jar on high speed for 5-10 seconds. Stir in pepper and onion. Spoon over shrimp and top by sprinkling with parsley.",
};

const creamOfChickenSoup = {
  serving: "1",
  ingredients: [
    { name: "raw chicken", quantity: "5 to 8 ounces" },
    { name: "egg", quantity: "1" },
    { name: "raw apple cider vinegar", quantity: "1/4 teaspoon" },
    { name: "unheated honey (optional)", quantity: "1 teaspoon" },
    { name: "stone-pressed olive oil", quantity: "1 tablespoon" },
    { name: "unsalted raw butter", quantity: "1 tablespoon" },
    { name: "raw milk", quantity: "4 tablespoons" },
    { name: "raw cream", quantity: "2 tablespoons" },
    { name: "SPICE PASTE", quantity: "1 tablespoon" },
    { name: "raw sunflower seeds", quantity: "1 tablespoon" },
  ],
  description:
    "Add all ingredients to the food processor and blend for 5-10 seconds. Pour into a bowl.",
};

const grandmasTomatoSoup = {
  serving: "1",
  ingredients: [
    { name: "tomatoes", quantity: "1 1/2 to 2" },
    { name: "organic vanilla extract", quantity: "2 drops" },
    { name: "raw apple cider vinegar", quantity: "1 1/2 teaspoons" },
    { name: "unheated honey", quantity: "1 tablespoon" },
    { name: "stone-pressed olive oil", quantity: "2 tablespoons" },
  ],
  description:
    "Place all ingredients into the food processor and blend for 5 seconds. Pour into a bowl.",
};

const lentilSoup = {
  serving: "1",
  ingredients: [
    {
      name: "whole sprouting lentils, do not sprout",
      quantity: "2 tablespoons",
    },
    { name: "natural mineral water", quantity: "3 ounces" },
    { name: "sunflower seeds", quantity: "1 tablespoon" },
    { name: "raw milk", quantity: "1 ounce" },
    { name: "raw cream", quantity: "2 ounces" },
    { name: "unsalted raw butter", quantity: "1 tablespoon" },
    { name: "raw egg", quantity: "1" },
    { name: "fresh garlic", quantity: "1 slice" },
    { name: "unheated honey", quantity: "1 teaspoon" },
  ],
  description:
    "Place lentils in a 4-ounces jar and fill jar to the top with water. Let stand for 24 hours. Drain off water and blenderize for 4 seconds. Blenderize sunflower seeds in another 4-ounces jar on high speed until they are flour. Blenderize all ingredients, except 1/2 of the ground lentils, into a 12-ounces jar on medium speed for 20-30 seconds. Stir in remaining ground lentils. If you prefer warm soup, put a tight lid on the jar and immerse in mildly hot water for 10 minutes.",
};

const splitPeaSoup = {
  serving: "1",
  ingredients: [
    { name: "whole sprouting peas, do not sprout", quantity: "2 tablespoons" },
    { name: "natural mineral water", quantity: "3 ounces" },
    { name: "sunflower seeds", quantity: "1 tablespoon" },
    { name: "raw milk", quantity: "1 ounce" },
    { name: "raw cream", quantity: "2 ounces" },
    { name: "unsalted raw butter", quantity: "1 tablespoon" },
    { name: "raw egg", quantity: "1" },
    { name: "fresh garlic", quantity: "1 slice" },
    { name: "unheated honey", quantity: "1 teaspoon" },
  ],
  description:
    "Place peas in a 4-ounces jar and fill the jar to the top with water. Let stand for 24 hours. Drain off water and blenderize for 4 seconds. Blenderize sunflower seeds in another 4-ounces jar on high speed until they are flour. Blenderize all ingredients in a 12-ounces jar and blend on medium speed for 15-20 seconds. If you prefer warm soup, put a tight lid on the jar and immerse in mildly hot water for 10 minutes.",
};

const nutButterNutFormula = {
  serving: "1 to 2",
  ingredients: [
    {
      name: "raw pecans or walnuts, pine or hazel nuts, sunflower or pumpkin seeds, or peanuts",
      quantity: "2 to 4 ounces",
    },
    { name: "unsalted raw butter", quantity: "4 to 8 tablespoons" },
    { name: "raw egg", quantity: "1 to 2" },
    { name: "unheated honey", quantity: "1½ to 2 tablespoons" },
  ],
  description:
    "Blenderize nuts in an 8- or 12-ounces jar on high speed until they are flour. Add remaining ingredients and stir. Blenderize on medium speed for 20-25 seconds, until smooth. ALTERNATIVE: Substitute coconut cream for butter.",
};

const pastaSubstitute = {
  serving: "1",
  ingredients: [
    { name: "raw sunflower seeds", quantity: "3 ounces" },
    { name: "unheated honey", quantity: "1/2 teaspoon" },
    { name: "raw egg", quantity: "1" },
    { name: "unsalted raw butter", quantity: "1 tablespoon" },
  ],
  description:
    "Blenderize sunflower seeds in an 8-ounces jar on high speed for 5-10 seconds. Add butter, honey, and egg, and stir together. Blenderize on medium speed for 15 seconds. Spread mixture evenly on a plate and let it stand in the refrigerator for 2 hours. Cover with any sauce.",
};

const reminiscentMexicanChips = {
  serving: "1",
  ingredients: [
    { name: "soft unsalted raw butter", quantity: "3 tablespoons" },
    { name: "fresh hot pepper", quantity: "1/4 to 1/2" },
    { name: "tomato", quantity: "1/4" },
    { name: "grated Monterey Jack cheese", quantity: "2 tablespoons" },
    { name: "fresh garlic (optional)", quantity: "1 slice" },
    { name: "red onions (optional)", quantity: "1 tablespoon" },
    { name: "PASTA SUBSTITUTE", quantity: "1 serving" },
  ],
  description:
    "Blenderize butter, tomato, hot pepper, garlic, and/or onion together in an 8-ounces jar on medium speed for 10 seconds. Add cheese and blenderize on medium speed for 15-20 seconds, until smooth and warm to the touch. Pour over Pasta Substitute and eat before it gets soggy. Eat with a serving of meat.",
};

const reminiscentRefriedBeans = {
  serving: "1",
  ingredients: [
    { name: "raw pumpkin seeds", quantity: "2 ounces" },
    { name: "raw sunflower seeds", quantity: "1 ounce" },
    { name: "raw unsalted butter", quantity: "3 tablespoons" },
    { name: "unheated honey", quantity: "1/4 teaspoon" },
    { name: "raw egg", quantity: "1" },
    { name: "fresh garlic", quantity: "1 slice" },
  ],
  description:
    "Blenderize pumpkin and sunflower seeds in an 8-ounces jar on high speed until they are flour. Add butter, honey, garlic, and egg and blenderize on medium speed for 15-20 seconds. Place in the cupboard and let stand for 2 hours. Top with a sauce and eat with a serving of meat.",
};

const cheesecake = {
  serving: "10",
  ingredients: [
    { name: "no-salt-added raw cheddar cheese", quantity: "3/4 pound" },
    { name: "unsalted raw butter", quantity: "1 pound" },
    { name: "raw walnut halves", quantity: "1 cup" },
    { name: "unheated honey", quantity: "3 tablespoons" },
    { name: "organic vanilla extract", quantity: "1 drop" },
  ],
  topping: [
    { name: "raw cream", quantity: "1 1/3 cups" },
    { name: "unheated honey", quantity: "1 tablespoon" },
  ],
  description:
    "Let cheese and butter stand at room temperature to warm for 4 hours before making cheesecake. Slice cheese into 1/8-inch slices. Warm half of the cheese, half of the butter, and 1 tablespoon honey immersed in a bowl of mildly hot water while making the Crust. Crust: In a food processor (not blender), place nuts, two tablespoons butter, and 1 tablespoon honey. Blend ingredients until they become a large ball. Butter bottom and sides of an 8- or 9-inch pie plate. Evenly spread nut mixture and press on to the bottom of the pie plate. Chill in the freezer while making the Filling. Filling: When butter is nearly liquid, blenderize both jars of butter/cheese/honey mixture on high speed for 60-90 seconds until ingredients are smooth, not grainy. Do not let it get too hot while blending. Pour both jars of Filling into the chilled pie crust and refrigerate for several hours. (If making a Topping, place back in the freezer while making Topping.)",
};

const miniatureCheesecake = {
  serving: "2",
  ingredients: [
    { name: "no-salt-added raw cheddar cheese", quantity: "3 ounces" },
    { name: "unsalted raw butter", quantity: "3 1/2 ounces" },
    { name: "raw walnut halves", quantity: "2 ounces" },
    { name: "unheated honey", quantity: "2 teaspoons" },
    { name: "organic vanilla extract", quantity: "1 drop" },
  ],
  topping: [
    { name: "raw cream", quantity: "3 ounces" },
    { name: "unheated honey", quantity: "1 teaspoon" },
  ],
  description:
    "Let cheese and butter stand at room temperature to warm for 4 hours before making cheesecake. Slice cheese into 1/8-inch slices. Warm cheese, butter, and 1 teaspoon honey in an 8-ounces jar, capped and immersed in a bowl of mildly hot water while making the Crust. Crust: Blenderize nuts, 1 teaspoon butter, and 1 teaspoon honey together in a 4-ounces jar on high speed using pulse-action for 5 seconds. Butter bottom and sides of 4-inch glass or ceramic pie-dish. Evenly spread nut mixture and press onto the bottom of the pie plate. Chill in the freezer while making Filling. Filling: Blenderize butter/cheese/honey mixture on high speed for 30-40 seconds until ingredients are smooth, not grainy; do not let it get too hot while blending. Pour into chilled piecrust and place in the refrigerator for several hours. (If making a Topping, place back in the freezer while making Topping.)",
};

const coconutCreamFruit = {
  serving: "1",
  ingredients: [
    { name: "COCONUT CREAM", quantity: "4 ounces" },
    { name: "peeled and seeded small papaya", quantity: "1/8" },
    { name: "circular slice fresh pineapple", quantity: "1/8 -inch" },
    { name: "unheated honey", quantity: "1 teaspoon (optional)" },
  ],
  description:
    "If pineapple is not organic, wash outside of pineapple with a brush and lukewarm water. Slice pineapple circularly. Cut away rind and discard. To retain juice in pineapple, slice and dice pineapple with a sawing motion. Fold diced fruit into coconut cream, or top diced fruit with coconut cream, or top coconut cream with diced fruit. ALTERNATIVE: Use 2 ounces each of other fruits, such as berries and peach, or nectarine and peach, or pear and grapes.",
};

const custard = {
  serving: "1",
  ingredients: [
    { name: "papaya (remove seeds and peel)", quantity: "1/3" },
    { name: "raw egg", quantity: "1" },
    { name: "raw unsalted butter", quantity: "2 tablespoons" },
    { name: "unheated honey", quantity: "1 tablespoon" },
  ],
  description:
    "Blenderize all ingredients together in an 8-ounces jar on low speed for 10 seconds. Immediately pour into a serving bowl before it thickens, or let it thicken in the jar and eat from the jar.",
};

const custardAphrodisiac = {
  serving: "1",
  ingredients: [
    { name: "egg", quantity: "1" },
    { name: "diced avocado", quantity: "1/3" },
    { name: "diced orange", quantity: "1/2" },
    { name: "unheated honey", quantity: "1 tablespoon" },
    { name: "papaya or mango", quantity: "4 ounces" },
    { name: "lime (optional)", quantity: "1 teaspoon" },
    { name: "unsalted raw butter", quantity: "4 tablespoons" },
  ],
  description:
    "Blenderize butter, papaya or mango, honey, egg, and lime juice together in an 8-ounces jar on high speed for 10 seconds. Immediately pour into a bowl and stir in diced avocado and orange before it thickens. Let stand for 3-5 minutes.",
};

const fudgeParfait = {
  serving: "2",
  ingredients: [
    { name: "raw cream", quantity: "5 ounces" },
    { name: "raw milk", quantity: "3 tablespoons" },
    { name: "raw egg", quantity: "1" },
    { name: "peeled and seeded fresh papaya", quantity: "3 tablespoons" },
    { name: "unheated honey", quantity: "2 teaspoons" },
    { name: "PECAN FUDGE", quantity: "2-inch square" },
  ],
  description:
    "Premake PECAN FUDGE recipe. Blenderize 2 ounces cream, milk, egg, papaya, and honey in an 8-ounces jar on medium speed for 5 seconds. Pour into a serving bowl, place in the freezer and let sit for 10-16 hours, or use an ice cream maker. Cut fudge of choice into thin layers and place one layer in a dessert glass. Spoon a layer of ice cream on top. Repeat the two layers. Blenderize 3 ounces cream in a 4-ounces jar on low speed until cream is stiff. Top fudge/ice cream layers with whipped cream. ALTERNATIVE: Chop mint leaves until you have 1 tablespoon. Blenderize 3 ounces cream and chopped mint in a 4-ounces jar on low speed until the mixture is stiff. Top fudge/ice cream layers with mint whipped cream.",
};

const gingerbreadBalls = {
  serving: "1",
  ingredients: [
    { name: "unsalted raw butter", quantity: "3 tablespoons" },
    { name: "unheated honey", quantity: "1 tablespoon" },
    { name: "grated fresh ginger root", quantity: "1 teaspoon" },
    { name: "raw carob powder", quantity: "1 tablespoon" },
    {
      name: "raw walnut or pecan halves, pine or hazel nuts, or sunflower seeds",
      quantity: "2 1/2 ounces",
    },
  ],
  description:
    "Warm butter and ginger in a 4-ounces jar, capped and immersed in a bowl of mildly hot water. Blenderize nuts in an 8-ounces jar on high speed until they are flour (or pulse-blend to make it chunky). When butter melts, add honey and blenderize for 5 seconds. Add nuts and carob powder and stir for 60 seconds. Put on a plate and let it stand for 2 hours until it firms. Form into balls. To harden it more, refrigerate for 30 minutes. ALTERNATIVE 1: Make it chewier by using honeycomb. ALTERNATIVE 2: Stir in 1 teaspoon soft fresh bee pollen. ALTERNATIVE 3: Finely grate coconut meat and roll balls in grated coconut.",
};

const mintChocolateSubstitute = {
  servings: 2,
  ingredients: [
    { name: "soft unsalted raw butter", quantity: "7 tablespoons" },
    { name: "raw egg", quantity: "1" },
    { name: "finely chopped fresh mint leaves", quantity: "3 tablespoons" },
    { name: "unheated honey", quantity: "2 tablespoons" },
    { name: "raw carob powder", quantity: "1 1/2 tablespoons" },
    { name: "organic vanilla extract", quantity: "2 drops" },
  ],
  description:
    "Blenderize all ingredients together in an 8-ounces jar on medium speed for 30-40 seconds. Refrigerate to harden for 2 hours. (To preserve the nutrients in eggs, it is best not to refrigerate for more than 4 hours.)",
};

const pecanFudge = {
  servings: 1,
  ingredients: [
    { name: "pecan halves", quantity: "2 ounces" },
    { name: "unsalted raw butter", quantity: "4 tablespoons" },
    { name: "raw egg", quantity: "1" },
    { name: "unheated honey", quantity: "3 tablespoons" },
    { name: "raw carob powder", quantity: "2 tablespoons" },
    { name: "organic vanilla extract", quantity: "1 drop" },
  ],
  description:
    "Blenderize pecans in an 8-ounces jar on high speed until they are flour. Place the rest of ingredients in jar, stir, and blenderize on medium speed until smooth. Place in a small bowl and refrigerate to harden for 2 hours. (To preserve the nutrients in eggs, it is best not to refrigerate for more than 4 hours.)",
  alternatives: {
    alternative1:
      "To make it chunky, place all ingredients, except 1 ounce pecans, in an 8-ounces jar and blend until smooth. Crush 1 ounce pecans into bits and stir into mixture. Place in a small bowl and refrigerate to harden for 2 hours.",
    alternative2: "Substitute walnuts, pine or hazelnuts for pecans.",
  },
};

const pineappleIceCream = {
  servings: 1,
  ingredients: [
    { name: "egg", quantity: "1" },
    { name: "raw cream", quantity: "4 tablespoons" },
    { name: "raw milk", quantity: "3 tablespoons" },
    { name: "fresh pineapple", quantity: "1 1/2 ounces" },
    { name: "unheated honey", quantity: "1 tablespoon" },
  ],
  description:
    "Blenderize all ingredients together in a 12-ounces jar on medium speed for 10 seconds. Pour into ice cream maker and churn until firm.",
};

const mangoCreamsickles = {
  servings: 4,
  ingredients: [
    { name: "egg", quantity: "1" },
    { name: "raw cream", quantity: "4 tablespoons" },
    { name: "raw milk", quantity: "4 tablespoons" },
    { name: "fresh mango", quantity: "2 ounces" },
    { name: "unheated honey", quantity: "1 teaspoon" },
  ],
  description:
    "Blenderize all ingredients together in a 12-ounces jar on medium speed for 10 seconds. Pour into popsicle-mold and freeze for 5-8 hours.",
  alternatives: {
    alternative1:
      "Substitute other fruit, such as peach, nectarine, or berries.",
    alternative2: "Substitute raw coconut cream for raw cream.",
  },
};

const ambrosiaCoconutCreamPieMiniature = {
  servings: 2,
  crust: {
    ingredients: [
      { name: "raw walnut or pecan halves", quantity: "2 ounces" },
      { name: "unsalted raw butter", quantity: "2 teaspoons" },
      { name: "unheated honey", quantity: "1/2 teaspoon" },
    ],
    description:
      "Blenderize walnuts, butter, and honey in a 4-ounces jar on medium speed using pulse-action for 5 seconds. Butter bottom and sides of 4-inch glass or ceramic pie-dish. Flatten mixture evenly on to the bottom of the dish and chill in the refrigerator for 15 minutes while making the Filling.",
  },
  filling: {
    ingredients: [
      { name: "non-steamed date", quantity: "1" },
      { name: "fruits or combination of fruits", quantity: "4 ounces" },
    ],
    description:
      "Remove the stone from the date and chop it. Blenderize the chopped date and 2 ounces of fruit together in a 4-ounces jar on high speed until creamy. Slice or dice the remaining fruit (unless berries) and fold it into the Filling mixture. Pour and spread evenly over the crust and chill in the refrigerator for 20 minutes.",
  },
  topping: {
    ingredients: [
      { name: "COCONUT CREAM", quantity: "2 ounces" },
      { name: "egg", quantity: "1" },
      { name: "unsalted raw butter", quantity: "1 tablespoon" },
      { name: "unheated honey (optional)", quantity: "1 teaspoon" },
    ],
    description:
      "Blenderize chilled coconut cream, egg, butter, and honey in an 8-ounces jar on medium speed for 15-20 seconds. Pour coconut cream over chilled Filling and spread evenly. Chill pie in refrigeration for 30 minutes to firm coconut cream. You could save some of the cut fruit from the Filling to make a pattern over the chilled and firmed coconut cream.",
    alternative:
      "ALTERNATIVE TOPPING: Use 1 egg only and add 1 1/2 ounces fresh lime or lemon juice, or a combination of lemon and lime juices. Place chilled coconut cream, egg, butter, honey, and lemon and/or lime juices in the food processor and blend for 20-30 seconds. Follow the rest of the instructions for Topping above.",
  },
};

const ambrosiaCoconutCreamPie = {
  servings: 10,
  crust: {
    ingredients: [
      { name: "walnuts or pecan halves", quantity: "1 cup" },
      { name: "unsalted raw butter", quantity: "2 tablespoons" },
      { name: "unheated honey", quantity: "1 tablespoon" },
    ],
    description:
      "Place walnuts, butter, and honey in the food processor and blend until the ingredients form into a ball. Butter bottom and sides of 8- or 9-inch glass pie-dish. Spread nut mixture evenly on the bottom of the pie-dish and chill in the refrigerator for 15 minutes while making the Filling.",
  },
  filling: {
    ingredients: [
      { name: "non-steamed dates", quantity: "6" },
      { name: "fruits or combination of fruits", quantity: "2 cups" },
    ],
    description:
      "Remove stones from dates and chop them. In a blender, blenderize chopped dates and 1/2 cup fruit (room temperature) together in an 8-ounces jar on high speed for 20-30 seconds, until thick. Slice or dice the remaining fruit (unless berries) and fold into the Filling mixture. Pour and spread evenly over the crust and chill in the refrigerator for 20 minutes.",
  },
  topping: {
    ingredients: [
      { name: "COCONUT CREAM", quantity: "8 ounces" },
      { name: "unsalted raw butter", quantity: "4 tablespoons" },
      { name: "raw eggs", quantity: "2" },
      { name: "unheated honey (optional)", quantity: "1 to 2 tablespoons" },
    ],
    description:
      "Place chilled coconut cream, eggs, butter, and honey in the food processor and blend for 20-30 seconds. Pour coconut cream over chilled Filling and spread evenly. Chill pie in refrigeration for 30 minutes to firm coconut cream. You can save some of the cut fruit from the Filling to make a pattern over the chilled and firmed coconut cream.",
    alternative:
      "ALTERNATIVE TOPPING: Use 1 egg only, and add 1 1/2 ounces fresh lime or lemon juice, or a combination of lemon and lime juices. Place chilled coconut cream, egg, butter, honey, and lemon and/or lime juices in the food processor and blend for 20-30 seconds. Follow the rest of the instructions for Topping above.",
  },
};

const ambrosiaCreamPie = {
  servings: 10,
  crust: {
    ingredients: [
      { name: "raw walnut halves", quantity: "1 cup" },
      { name: "unsalted raw butter", quantity: "2 tablespoons" },
      { name: "unheated honey", quantity: "1 tablespoon" },
    ],
    description:
      "Place walnuts, butter, and honey in the food processor and blend until the ingredients form into a ball. Butter bottom and sides of an 8- or 9-inch glass pie-dish. Spread nut mixture and flatten evenly on the bottom of the pie-dish. Chill in the freezer for 15 minutes while making the Filling.",
  },
  filling: {
    ingredients: [
      { name: "non-steamed dates", quantity: "6" },
      { name: "fruit or combination of fruits", quantity: "2 cups" },
    ],
    description:
      "Remove stones from dates and chop them. In a blender, blenderize chopped dates and 3/4 cup fruit in a 12-ounces jar on high speed for 20-30 seconds until thick. Slice or dice the remaining fruit (unless berries) and fold into the Filling mixture. Pour and spread evenly over the crust and chill in the freezer for 10 minutes.",
  },
  topping: {
    ingredients: [
      { name: "raw cream", quantity: "15 ounces" },
      { name: "unheated honey (optional)", quantity: "1 to 2 tablespoons" },
    ],
    description:
      "Blenderize 5 ounces of cream and 2 teaspoons honey in an 8-ounces jar on low speed until it is fluffy and stiff. Repeat two more times, each time with 5 ounces of cream and 2 teaspoons of honey in an 8-ounces jar. Remove pie from the freezer and top with whipped cream. You can save some of the cut fruit from the Filling to make a pattern over whipped cream. Let stand in refrigeration for 2 hours.",
    alternateTopping:
      "ALTERNATE TOPPING: Add 2 tablespoons fresh lime or lemon juice, or a combination of lemon and lime juices, to cream and honey. Blenderize as stated above. You can save some of the cut fruit from the Filling to make a pattern over whipped cream.",
  },
};

const ambrosiaCreamPieMiniature = {
  servings: 2,
  crust: {
    ingredients: [
      { name: "raw walnut halves", quantity: "2 ounces" },
      { name: "unsalted raw butter", quantity: "2 teaspoons" },
      { name: "unheated honey", quantity: "1/2 teaspoon" },
    ],
    description:
      "Blenderize walnuts, butter, and honey in a 4-ounces jar on medium speed using pulse-action for 5 seconds. Butter bottom and sides of 4-inch glass or ceramic pie-dish. Spread nut mixture and flatten evenly on to the bottom of the pie-dish. Chill in the freezer for 10 minutes while making the Filling.",
  },
  filling: {
    ingredients: [
      { name: "non-steamed date", quantity: "1" },
      { name: "fruit or combination of fruits", quantity: "4 ounces" },
    ],
    description:
      "Remove the stone from the date and chop it. Blenderize the chopped date and 2 ounces of fruit in a 4-ounces jar on high speed for 10-15 seconds until thick. Slice or dice the remaining fruit (unless berries) and fold into the Filling mixture. Pour and spread evenly over the crust and chill in the freezer for 10 minutes.",
  },
  topping: {
    ingredients: [
      { name: "raw cream", quantity: "4 ounces" },
      { name: "unheated honey (optional)", quantity: "2 teaspoons" },
    ],
    description:
      "Blenderize cream and honey in a 4-ounces jar on low speed until stiff. Top Filling with whipped cream. You can save some of the cut fruit from the Filling to make a pattern over whipped cream.",
  },
};

const bananaCreamPie = {
  servings: 10,
  crust: {
    ingredients: [
      { name: "raw walnut halves", quantity: "1 cup" },
      { name: "unsalted raw butter", quantity: "2 tablespoons" },
      { name: "unheated honey", quantity: "1 tablespoon" },
    ],
    description:
      "Place walnuts, butter, and honey in the food processor and blend until the ingredients form into a ball. Butter bottom and sides of an 8- or 9-inch glass pie-dish. Spread nut mixture and flatten evenly into the bottom of the pie-dish. Chill in the freezer for 15 minutes while making the Filling.",
  },
  filling: {
    ingredients: [
      { name: "eggs", quantity: "2" },
      { name: "non-steamed dates", quantity: "6" },
      { name: "bananas", quantity: "3" },
      { name: "unsalted raw butter", quantity: "8 tablespoons" },
      { name: "organic vanilla extract (optional)", quantity: "2 drops" },
    ],
    description:
      "Remove stones from dates and chop them. In a blender, blenderize eggs, 1 drop vanilla extract, chopped dates, 1/2 banana (break into small pieces), and butter (room temperature) together until thick. Slice 2 1/2 bananas lengthwise into halves. Slice laterally into 1/8-inch pieces. Fold bananas into Filling mixture. Pour and spread evenly over the crust and chill in the freezer for 20 minutes.",
  },
  topping: {
    ingredients: [
      { name: "raw cream", quantity: "15 ounces" },
      { name: "unheated honey (optional)", quantity: "1 to 2 tablespoons" },
    ],
    description:
      "Blenderize 5 ounces of cream and 2 teaspoons honey in an 8-ounces jar on low speed until it is fluffy and stiff. Repeat two more times, each time with 5 ounces of cream and 2 teaspoons of honey in an 8-ounces jar. Remove pie from the freezer and top with whipped cream. Let stand in refrigeration for 2 hours.",
    alternateTopping:
      "ALTERNATE TOPPING: Add 3 tablespoons fresh lime juice to cream and honey. Blenderize as stated above.",
  },
};

const bananaCreamPieMiniature = {
  servings: 2,
  crust: {
    ingredients: [
      { name: "raw walnut halves", quantity: "2 ounces" },
      { name: "unsalted raw butter", quantity: "2 teaspoons" },
      { name: "unheated honey", quantity: "1/2 teaspoon" },
    ],
    description:
      "Blenderize walnuts, butter, and honey in a 4-ounces jar on high speed using pulse-action for 5 seconds. Butter bottom and sides of 4-inch glass or ceramic pie-dish. Spread nut mixture and flatten evenly into the bottom of the pie-dish. Chill in the freezer for 10 minutes while making the Filling.",
  },
  filling: {
    ingredients: [
      { name: "egg", quantity: "1" },
      { name: "non-steamed date", quantity: "1" },
      { name: "banana", quantity: "3/4" },
      { name: "unsalted raw butter", quantity: "2 tablespoons" },
      { name: "organic vanilla extract (optional)", quantity: "1 drop" },
    ],
    description:
      "Remove the stone from the date and chop it. Blenderize the chopped date, egg, vanilla extract, half of 3/4 banana (break into small pieces), and butter (room temperature) together in an 8-ounces jar on high speed until thick. Slice the remainder of the banana lengthwise into quarters. Slice laterally into 1/4-inch pieces. Fold banana into Filling mixture. Pour and spread evenly over the crust and chill in the freezer for 10 minutes.",
  },
  topping: {
    ingredients: [
      { name: "raw cream", quantity: "3 ounces" },
      { name: "unheated honey (optional)", quantity: "2 teaspoons" },
    ],
    description:
      "Blenderize cream and honey in an 8-ounces jar on low speed until fluffy and stiff. Top Filling with whipped cream.",
  },
};

const pumpkinPie = {
  servings: 8,
  crust: {
    ingredients: [
      { name: "raw walnut halves", quantity: "1 cup" },
      { name: "unsalted raw butter", quantity: "2 tablespoons" },
      { name: "unheated honey", quantity: "3 tablespoons" },
    ],
    description:
      "Place nuts, 2 tablespoons butter, and 1 tablespoon honey in the food processor and blend until ingredients form into a ball. Butter a 6-inch glass pie-dish. Evenly distribute the crust on the plate and press firmly. Place in the freezer while making the Filling.",
  },
  filling: {
    ingredients: [
      { name: "ripe persimmons", quantity: "3" },
      { name: "non-steamed dates (remove stone and chop)", quantity: "6" },
      { name: "unheated honey", quantity: "3 tablespoons" },
    ],
    description:
      "Blenderize half of chopped dates and 1 1/2 persimmons in a 12-ounces jar on high speed for 40 seconds. Repeat with remaining dates and persimmons in another 12-ounces jar. Remove the crust from the freezer and pour in the persimmons mixture. Return to the freezer while making the Topping.",
  },
  topping: {
    ingredients: [{ name: "raw cream", quantity: "15 ounces" }],
    description:
      "Blenderize 5 ounces of cream and 2 teaspoons honey in an 8-ounces jar on low speed until it is fluffy and stiff. Repeat two more times, each time with 5 ounces of cream and 2 teaspoons of honey in an 8-ounces jar. Remove the pie from the freezer and top with whipped cream. Let stand in refrigeration for at least 8 hours.",
  },
};

const pumpkinPieMiniature = {
  servings: 1,
  crust: {
    ingredients: [
      { name: "raw walnut halves", quantity: "2 ounces" },
      { name: "unsalted raw butter", quantity: "2 teaspoons" },
      { name: "unheated honey", quantity: "3 teaspoons" },
    ],
    description:
      "Blenderize nuts, 2 teaspoons butter, and 1 teaspoon honey in a 4-ounces jar on high speed using pulse-action for 5 seconds. Butter the bottom and sides of the serving bowl. Evenly distribute the crust on the bottom of the bowl and press firmly. Place in the freezer while making the Filling.",
  },
  filling: {
    ingredients: [
      { name: "ripe persimmon", quantity: "3/4" },
      { name: "non-steamed date (remove stone and chop)", quantity: "1" },
      { name: "unheated honey", quantity: "3 teaspoons" },
    ],
    description:
      "Blenderize the chopped date and persimmon in an 8-ounces jar on high speed for 20-30 seconds until thick. Pour into the chilled piecrust. Return to the freezer while making the Topping.",
  },
  topping: {
    ingredients: [{ name: "raw cream", quantity: "3 ounces" }],
    description:
      "Blenderize raw cream and honey in an 8-ounces jar until it is fluffy and stiff. Remove pie from the freezer and top with whipped cream. Let stand in refrigeration for at least 6 hours.",
  },
};

const pickledGinger = {
  servings: 10,
  ingredients: [
    { name: "thinly sliced fresh ginger", quantity: "6 ounces" },
    { name: "raw apple cider vinegar", quantity: "4 tablespoons" },
    { name: "whey or natural mineral water", quantity: "3 tablespoons" },
    { name: "unheated honey", quantity: "1 tablespoon" },
  ],
  description:
    "Blenderize vinegar, whey or water, and honey together in an 8-ounces jar on medium speed for 10 seconds. Add ginger slices and cap. If necessary, add more whey or water to cover ginger slices. Marinate for 24 hours in refrigeration. It will keep in refrigeration for about 2 months. Pickled ginger may be mixed with unsalted raw butter, raw cream, raw coconut cream, olive oil, or flax oil and eaten with any meat, red or white.",
};

const primalFacialBodyCareCream = {
  ingredients: [
    { name: "raw cream", quantity: "2 ounces" },
    { name: "unsalted raw butter", quantity: "2 ounces" },
    { name: "raw COCONUT CREAM", quantity: "2 ounces" },
    { name: "unheated honey", quantity: "1/4 teaspoon" },
    { name: "royal jelly", quantity: "1/4 teaspoon" },
    { name: "fresh lime juice", quantity: "1 teaspoon" },
    { name: "fresh ginger juice", quantity: "1 teaspoon" },
  ],
  description:
    "Stir lime juice into coconut cream and let it stand for 10 minutes. Then, warm all ingredients in an 8-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize on medium speed for 5 seconds. Rub into the skin. Wipe away any excess 20 to 30 minutes after applying on the skin. It must be kept refrigerated. This skin cream feeds the skin and helps prevent and slowly remove lines and wrinkles with regular application. It works for the entire body. In all empirical tests, it acted on ALL participants as both a sunscreen and tanning lotion. Applying the skin cream liberally to a cut, scrape, or abrasion helps prevent excessive scabbing and the dryness that results from scabbing and helps heal the wound without scarring. Liberally applied and left on, the skin cream slowly dissolves scabs that have already formed. During tests for sunscreen potential, some participants thought that they had burned because they were so red. The next mornings there was no burn or soreness, and no one peeled.",
};

const moisturizingLubricationFormulaDrink = {
  ingredients: [
    { name: "raw eggs", quantity: "1 to 2" },
    { name: "unsalted raw butter or coconut cream", quantity: "2 to 4 ounces" },
    { name: "lemon juice", quantity: "1 to 2 tablespoons" },
    { name: "unheated honey", quantity: "1 to 2 teaspoons" },
  ],
  description:
    "All ingredients should be at room temperature. Warm all ingredients in an 8- or 12-ounces jar, capped with the blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize on medium speed for 10 seconds. It is most effective when consumed with, or shortly after, a meat meal. Most bodies are so starved for healthy raw fat that when they get fat, the organs, blood, glands, and nervous system consume it. The lymph, bones, joints, connective tissue, and skin continue to starve and shrivel with dryness unless we get enough fat. We cannot eat enough fat to supply all that our bodies need after years of cooked food. However, this formula helps rush fats into the body so that lymph, bones, joints, connective tissue, and skin receive some wonderful fats. Because fats are utilized for so many functions, I suggest eating this recipe almost daily. To make this recipe sound appealing to both sexes, I gave it two names. When I give this formula to women, I call it the Moisturizing Formula. When I give it to men, I call it the Lubrication Formula.",
};

const pickledPeppers = {
  ingredients: [
    { name: "red bell pepper", quantity: "1" },
    { name: "yellow bell pepper", quantity: "1" },
    { name: "raw apple cider vinegar", quantity: "1/2 cup" },
    { name: "natural mineral water", quantity: "1 cup" },
    { name: "unheated honey", quantity: "1/2 teaspoon" },
  ],
  description:
    "Blenderize 1/2 cup water, vinegar, and honey in a 16-ounces jar for 5 seconds at medium speed. Seed and dice peppers and place in a 16-ounces jar with vinegar/honey/water. If more water is needed to cover peppers, add it now, cap, and gently turn the jar upside down and back several times. Let it stand in the refrigerator for 24 hours. It will keep in refrigeration for 2 months. If the recipe is too much for use in 2 months, divide each ingredient by half and use an 8-ounces jar.",
};

const dillPickles = {
  ingredients: [
    { name: "pickling cucumbers", quantity: "4" },
    { name: "raw apple cider vinegar", quantity: "1/2 cup" },
    { name: "unheated honey", quantity: "1/2 teaspoon" },
    { name: "fresh dill weed", quantity: "2 tablespoons" },
    { name: "natural mineral water", quantity: "1/2 cup" },
  ],
  description:
    "Blenderize vinegar, honey, dill, and 1 ounce water together in an 8-ounces jar for 10 seconds on low speed. Slice cucumbers lengthwise into quarters. Slice the quarters into halves horizontally. Stuff cucumbers in a 16-ounces jar, pour in blenderized mixture into the jar. If more water is needed to cover cucumbers, add it now. Cap and gently turn the jar upside down and back several times. Let it stand in the refrigerator for 24 hours. It will keep in refrigeration for 2 months. ALTERNATIVE: Add garlic or ginger slices, or any other spice before adding water to cover cucumbers.",
};

const sweetPickles = {
  ingredients: [
    { name: "pickling cucumbers", quantity: "4" },
    { name: "raw apple cider vinegar", quantity: "1/2 cup" },
    { name: "unheated honey", quantity: "3 tablespoons" },
    { name: "natural mineral water", quantity: "1/4 cup" },
  ],
  description:
    "Blenderize vinegar, 1 ounce water, and honey together in an 8-ounces jar for 10 seconds on low speed. Slice cucumbers lengthwise into quarters. Slice the quarters into halves horizontally. Stuff cucumbers in a 16-ounces jar, pour in blenderized mixture into the jar. If more water is needed to cover cucumbers, add it now. Cap and gently turn the jar upside down and back several times. Let it stand in the refrigerator for 24 hours. It will keep in refrigeration for 2 months. ALTERNATIVE: Add garlic or ginger slices, or any other spice before adding water to cover cucumbers.",
};

const naturalDeodorant = {
  ingredients: [
    { name: "fresh lemon juice", quantity: "splash" },
    { name: "ginger juice", quantity: "1 drop" },
  ],
  description:
    "Splash and rub fresh lemon juice under armpits and wipe. It is effective in most cases of very strong body odor. A drop of ginger juice rubbed into underarms usually creates an alluring fragrance. One tablespoon of ginger and/or mint juices per quart of green vegetable juices also helps body odor.",
};

const naturalAntiperspirant = {
  ingredients: [{ name: "lemon rind and pulp (no juice)", quantity: "pieces" }],
  preparation:
    "Cut pieces of lemon rind and pulp (no juice) and dry it in the sun for 30 days. Grind into a powder. Brush it into armpits that have been splashed and rubbed with lemon juice and wiped.",
};

const dietDuringColdFluPain = {
  ingredients: [
    { name: "fowl", quantity: "1/2 to 1 pound" },
    { name: "MOISTURIZING/LUBRICATIONS FORMULA DRINK", quantity: "2 to 3" },
    { name: "MILKSHAKE", quantity: "2 to 3", note: "see page 57" },
    { name: "SMOOTHIE", quantity: "1", note: "see pages 58-59" },
  ],
  description:
    "This daily diet should be followed until symptoms have subsided and normal functions resume.",
};

const lemonThroatLozenge = {
  ingredients: [
    { name: "butter", quantity: "4 ounces" },
    { name: "fresh lemon juice", quantity: "2 tablespoons" },
    { name: "honey", quantity: "3 tablespoons" },
    {
      name: "fresh ginger root juice or grated fresh ginger root",
      quantity: "2 teaspoons or 2 tablespoons",
    },
  ],
  preparation:
    "Warm all ingredients in an 8-ounces jar, capped with blender washer/blades/base, immersed in a bowl of mildly hot water for 5 minutes. Blenderize on medium speed for 5 seconds. Enjoy 1-2 teaspoons, retaining the mixture in the mouth for as long as possible, swallowing a tiny amount at a time. That will coat the throat over a 1- to 4-minutes period, allowing it to absorb into and coat the throat.",
};

const toothpaste = {
  ingredients: [
    { name: "sun-dried clay", quantity: "1/4 teaspoon" },
    { name: "raw butter or raw cream", quantity: "2 tablespoons" },
    { name: "ginger or mint leaf juices", quantity: "2 drops" },
  ],
  usage: "Good for 5 toothbrushings.",
  storage: "Keep refrigerated.",
};
