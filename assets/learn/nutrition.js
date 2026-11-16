/* Learn · Nutrition Science. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'nutrition', title: 'Nutrition Science',
  lessons: [
    { id: 'energy', tab: 'Energy balance', level: 'Introductory',
      h: 'Calories and <span>energy balance</span>',
      intro: ['Food is fuel and building material. Before the details of what to eat, one sum explains why body weight goes up or down over time.'],
      facts: ['Protein 4 kcal/g · Carbs 4 · Fat 9 · Alcohol 7', 'Weight change follows energy in minus energy out'],
      b: [
        '## What a calorie is',
        'A calorie is a unit of energy. Food labels use kilocalories (kcal), which everyone just calls calories. 1 kcal = 4.184 kilojoules.',
        ['tb', ['Nutrient', 'Energy per gram'], ['Carbohydrate', '4 kcal'], ['Protein', '4 kcal'], ['Fat', '9 kcal'], ['Alcohol', '7 kcal'], ['Fibre', 'About 2 kcal']],
        '## Where your energy goes',
        ['tb', ['Part', 'Typical share', 'What it is'], ['Basal metabolic rate (BMR)', '60 to 70%', 'Keeping you alive at rest: heart, brain, organs'], ['Activity', '15 to 30%', 'Exercise plus all everyday movement'], ['Thermic effect of food', 'About 10%', 'Energy spent digesting. Highest for protein']],
        ['eq', 'Total daily energy expenditure (TDEE) = BMR + activity + digestion\n\nEat more than TDEE  -> body stores the surplus\nEat less than TDEE  -> body draws on its stores'],
        '## Estimating BMR',
        'The Mifflin-St Jeor equation is the usual starting point. It is an estimate, often off by 10% for an individual.',
        ['eq', 'Men:    BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5\nWomen:  BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161\n\nThen multiply by an activity factor: about 1.2 (desk job) to 1.9 (very active)'],
        '## What the simple sum leaves out',
        ['ul', 'As you lose weight, you burn less. A smaller body needs less energy, so the same intake stops producing loss.', 'Food labels are allowed a margin of error, and people under-report what they eat.', 'Early weight change on a new diet is often water and stored carbohydrate, not fat.', 'Hunger, sleep and food environment decide whether a person can keep to an intake. The physics is simple; the behaviour is not.'],
        ['note', 'Body mass index', 'BMI = weight (kg) ÷ height (m)². It is a quick screen for populations: under 18.5 underweight, 18.5 to 24.9 healthy range, 25 to 29.9 overweight, 30 and above obese. It cannot tell muscle from fat.']
      ],
      quiz: [
        ['Which nutrient has the most energy per gram?', ['Fat', 'Protein', 'Carbohydrate', 'Fibre'], 0, '9 kcal per gram.'],
        ['The largest part of daily energy use for most people is:', ['Basal metabolic rate', 'Exercise', 'Digestion', 'Thinking'], 0, 'About 60 to 70%.'],
        ['The thermic effect of food is highest for:', ['Protein', 'Fat', 'Sugar', 'Alcohol'], 0, 'Protein costs the most energy to process.'],
        ['As a person loses weight, their energy needs usually:', ['Fall', 'Rise', 'Stay the same', 'Double'], 0, 'A smaller body burns less.'],
        ['BMI cannot distinguish:', ['Muscle from fat', 'Height from weight', 'Adults from children', 'Men from women'], 0, 'It only uses height and weight.']
      ] },

    { id: 'macros', tab: 'Protein, carbs & fat', level: 'Beginner',
      h: 'The three <span>macronutrients</span>',
      intro: ['Macronutrients are the nutrients you need in grams, not milligrams. Each has a different job.'],
      facts: ['9 essential amino acids', '2 essential fatty acids', 'No carbohydrate is strictly essential'],
      b: [
        '## Protein',
        ['ul', 'Made of 20 amino acids. Nine are <b>essential</b>: the body cannot make them.', 'Used to build and repair muscle, enzymes, hormones and immune cells.', 'The basic adult requirement is 0.8 g per kg of body weight per day. Older adults and people training hard often benefit from more, commonly 1.2 to 2.0 g/kg.', '<b>Complete</b> proteins contain all nine essential amino acids: meat, fish, eggs, dairy, soy. Most plant sources are low in one or two, so variety covers the gap.'],
        '## Carbohydrate',
        ['tb', ['Type', 'Examples', 'Notes'], ['Sugars', 'Glucose, fructose, sucrose, lactose', 'Absorbed fast'], ['Starch', 'Bread, rice, potatoes, oats', 'Chains of glucose, broken down in the gut'], ['Fibre', 'Vegetables, fruit, beans, whole grains', 'Not digested by you; feeds gut bacteria, slows absorption']],
        ['ul', 'The body stores carbohydrate as <b>glycogen</b> in liver and muscle: a few hundred grams.', 'The brain mainly runs on glucose. With very little carbohydrate, the liver makes ketones as a substitute fuel.', 'The <b>glycaemic index</b> ranks foods by how fast they raise blood sugar. It changes with cooking, ripeness and what else is in the meal.', 'Health bodies advise keeping <b>free sugars</b> under 10% of energy intake, and most adults eat less fibre than the suggested 25 to 30 g a day.'],
        '## Fat',
        ['tb', ['Type', 'Found in', 'Effect on blood cholesterol'], ['Unsaturated (mono, poly)', 'Olive oil, nuts, avocado, oily fish', 'Tends to lower LDL when it replaces saturated fat'], ['Saturated', 'Butter, fatty meat, cheese, coconut oil', 'Tends to raise LDL'], ['Trans (industrial)', 'Partially hydrogenated oils', 'Raises LDL and lowers HDL; being phased out worldwide']],
        ['ul', 'Two fatty acids are essential: <b>linoleic acid</b> (omega-6) and <b>alpha-linolenic acid</b> (omega-3).', 'Fat is needed to absorb vitamins A, D, E and K, and to make hormones and cell membranes.', 'Fat is the body\'s main long-term energy store.'],
        '## Water and alcohol',
        'Water is the nutrient you would miss first. Needs vary with size, heat and activity; thirst and pale urine are practical guides. Alcohol supplies 7 kcal per gram and no essential nutrients.'
      ],
      quiz: [
        ['How many amino acids are essential in adults?', ['9', '20', '2', '12'], 0, 'The body cannot make these nine.'],
        ['The basic adult protein requirement is about:', ['0.8 g per kg per day', '8 g per kg per day', '0.08 g per kg per day', '80 g per kg per day'], 0, 'Many people benefit from somewhat more.'],
        ['Fibre is:', ['Carbohydrate you cannot digest', 'A kind of protein', 'A saturated fat', 'A vitamin'], 0, 'Gut bacteria ferment some of it.'],
        ['Which fat raises LDL and lowers HDL?', ['Industrial trans fat', 'Olive oil', 'Omega-3', 'Monounsaturated fat'], 0, 'It has no known benefit.'],
        ['Carbohydrate is stored in the body as:', ['Glycogen', 'Glucagon', 'Starch', 'Insulin'], 0, 'In liver and muscle.'],
        ['Vitamins A, D, E and K need what to be absorbed?', ['Fat', 'Fibre', 'Sugar', 'Caffeine'], 0, 'They are fat-soluble.']
      ] },

    { id: 'micros', tab: 'Vitamins & minerals', level: 'Intermediate',
      h: 'Micronutrients: <span>vitamins and minerals</span>',
      intro: ['You need these in tiny amounts, but a shortage of any one causes a specific illness. A varied diet covers nearly all of them.'],
      facts: ['13 vitamins', '4 fat-soluble, 9 water-soluble', 'More is not better'],
      b: [
        '## Fat-soluble vitamins | Stored in the body, so they can build up to harmful levels.',
        ['tb', ['Vitamin', 'Needed for', 'Sources', 'Deficiency'], ['A', 'Vision, immunity, skin', 'Liver, eggs, orange and dark green vegetables', 'Night blindness'], ['D', 'Calcium absorption, bone', 'Sunlight on skin, oily fish, fortified foods', 'Rickets, soft bones'], ['E', 'Antioxidant', 'Nuts, seeds, vegetable oils', 'Rare; nerve damage'], ['K', 'Blood clotting', 'Leafy greens', 'Bleeding']],
        '## Water-soluble vitamins | Not stored much, so you need a regular supply.',
        ['tb', ['Vitamin', 'Needed for', 'Sources', 'Deficiency'], ['C', 'Collagen, iron absorption', 'Citrus, peppers, berries', 'Scurvy'], ['B1 (thiamine)', 'Energy release', 'Whole grains, pork, beans', 'Beriberi'], ['B3 (niacin)', 'Energy release', 'Meat, fish, peanuts', 'Pellagra'], ['B9 (folate)', 'Making DNA; pregnancy', 'Leafy greens, beans, fortified flour', 'Anaemia; neural tube defects'], ['B12', 'Nerves, red cells', 'Animal foods only; fortified foods', 'Anaemia, nerve damage']],
        ['warn', 'B12 on plant-based diets', 'Vitamin B12 is not reliably found in plant foods. People who eat no animal products need fortified foods or a supplement.'],
        '## Key minerals',
        ['tb', ['Mineral', 'Needed for', 'Sources'], ['Calcium', 'Bones, muscle contraction', 'Dairy, fortified plant milks, tinned fish with bones'], ['Iron', 'Carrying oxygen in blood', 'Red meat, beans, lentils, spinach'], ['Iodine', 'Thyroid hormone', 'Iodised salt, fish, dairy'], ['Zinc', 'Immunity, healing', 'Meat, shellfish, seeds'], ['Magnesium', 'Hundreds of enzymes', 'Nuts, whole grains, greens'], ['Potassium', 'Nerves, blood pressure', 'Fruit, vegetables, beans'], ['Sodium', 'Fluid balance', 'Salt; most people get too much']],
        ['ul', 'Iron from meat (haem iron) is absorbed better than iron from plants. Vitamin C with a meal helps plant iron along.', 'Iron deficiency is the most common nutrient deficiency in the world.', 'Health bodies advise under 5 g of salt a day (about 2 g of sodium).'],
        '## Reading the label terms',
        ['kv', ['RDA', 'Recommended Dietary Allowance: enough for nearly all healthy people.'], ['UL', 'Tolerable Upper Intake Level: the most you can take daily without likely harm.'], ['% Daily Value', 'How much of a day\'s reference amount one serving provides.']],
        ['note', 'Supplements', 'For most people who eat a varied diet, large trials have not shown that multivitamins prevent heart disease or cancer. Supplements make sense for a known gap: B12 on a vegan diet, folic acid before and in early pregnancy, vitamin D with little sun.']
      ],
      quiz: [
        ['Which vitamins are fat-soluble?', ['A, D, E, K', 'B and C', 'C and D', 'All of them'], 0, 'They are stored in body fat and the liver.'],
        ['Scurvy is caused by lack of:', ['Vitamin C', 'Vitamin D', 'Iron', 'Iodine'], 0, 'Collagen cannot be made properly.'],
        ['Which vitamin is not reliably found in plant foods?', ['B12', 'C', 'K', 'Folate'], 0, 'Vegans need fortified foods or a supplement.'],
        ['The most common nutrient deficiency worldwide is:', ['Iron', 'Vitamin E', 'Sodium', 'Zinc'], 0, 'It causes anaemia.'],
        ['Iodine is needed to make:', ['Thyroid hormone', 'Insulin', 'Haemoglobin', 'Collagen'], 0, 'Hence iodised salt.'],
        ['The UL of a nutrient is:', ['The highest daily intake likely to be safe', 'The minimum to avoid deficiency', 'The average intake', 'The amount in one serving'], 0, 'Above it, risk of harm rises.']
      ] },

    { id: 'evidence', tab: 'Diets & evidence', level: 'Advanced',
      h: 'Dietary patterns and <span>how to judge a nutrition claim</span>',
      intro: ['Nutrition headlines contradict each other every week. The reason is not that nothing is known. It is that nutrition is hard to study, and weak studies get loud coverage.'],
      facts: ['Patterns matter more than single foods', 'Most diet studies are observational'],
      b: [
        '## Why nutrition is hard to study',
        ['ul', 'You cannot blind people to what they eat, or keep them on a diet for 30 years.', 'So most long-term evidence is <b>observational</b>: it follows what people choose to eat. People who eat more vegetables differ in many other ways.', 'Intake is measured by questionnaires and memory, which are unreliable.', 'Eating more of one thing means eating less of another. "Is butter bad?" depends on what replaces it.'],
        '## What holds up',
        'These points are supported by many studies of different kinds and appear in the guidelines of most countries.',
        ['ul', 'Eat plenty of vegetables, fruit, beans, whole grains and nuts.', 'Choose unsaturated fats over saturated; avoid industrial trans fat.', 'Keep added sugar, salt and processed meat low.', 'Do not drink your calories: sugary drinks are consistently linked with weight gain.', 'Enough protein and fibre help with fullness.', 'Eat an amount that keeps your weight in a healthy range.'],
        '## Named diets compared',
        ['tb', ['Pattern', 'Idea', 'Evidence in brief'], ['Mediterranean', 'Vegetables, olive oil, fish, legumes, little red meat', 'Strongest evidence for heart health, including randomised trials'], ['DASH', 'Fruit, vegetables, low-fat dairy, low salt', 'Lowers blood pressure in trials'], ['Low-carbohydrate / keto', 'Cut carbs, raise fat and protein', 'Works for weight loss; similar to other diets after a year'], ['Low-fat', 'Cut fat', 'Works for weight loss; similar to low-carb after a year'], ['Intermittent fasting', 'Limit eating to set hours or days', 'Roughly matches ordinary calorie restriction'], ['Vegetarian / vegan', 'Little or no animal food', 'Linked to lower heart risk; needs planning for B12, iron, omega-3']],
        ['tip', 'The common result', 'For weight loss, trials that compare diets head to head mostly find that the best diet is the one a person can stay on.'],
        '## Red flags in a nutrition claim',
        ['ol', 'A single food or nutrient is a miracle or a poison.', 'The evidence is from mice, cells or a few dozen people for a few weeks.', 'The headline says "linked to" and the article says "causes".', 'Risk is quoted as a relative change with no absolute numbers.', 'It promises fast results, or to "detox", "boost" or "melt".', 'The source sells the product.', 'It dismisses all mainstream advice as a conspiracy.'],
        ['note', 'Go deeper', 'The course <a href="learn-studies.html">How to Read Studies</a> covers these traps in detail.']
      ],
      quiz: [
        ['Most long-term diet evidence is:', ['Observational', 'Double-blind randomised', 'From animals only', 'From single case reports'], 0, 'Long, blinded diet trials are nearly impossible.'],
        ['Which pattern has the strongest evidence for heart health?', ['Mediterranean', 'Carnivore', 'Juice cleanse', 'Alkaline'], 0, 'Including randomised trials.'],
        ['After a year, low-carb and low-fat diets for weight loss tend to be:', ['About equally effective', 'Low-carb far better', 'Low-fat far better', 'Both harmful'], 0, 'Staying on the diet matters most.'],
        ['"Linked to" in a headline usually means:', ['An association, not proof of cause', 'A proven cause', 'A randomised trial', 'A lab result'], 0, 'Correlation is not causation.'],
        ['Which is a red flag?', ['It promises to detox your body', 'It cites absolute risks', 'It mentions limitations', 'It has been replicated'], 0, 'Your liver and kidneys already do that.']
      ] }
  ],
  sources: [
    ['Dietary Guidelines for Americans, 2020-2025', 'https://www.dietaryguidelines.gov/', 'dietary patterns and limits'],
    ['WHO: Healthy diet fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet', 'sugar, salt and fat limits'],
    ['NIH Office of Dietary Supplements: fact sheets', 'https://ods.od.nih.gov/factsheets/list-all/', 'every vitamin and mineral: needs, sources, upper limits'],
    ['National Academies: Dietary Reference Intakes', 'https://nap.nationalacademies.org/collection/57/dietary-reference-intakes', 'RDA and UL values, the 0.8 g/kg protein figure'],
    ['Mifflin et al. 1990, American Journal of Clinical Nutrition', 'https://pubmed.ncbi.nlm.nih.gov/2305711/', 'the BMR equation'],
    ['Estruch et al., PREDIMED trial, New England Journal of Medicine 2018', 'https://www.nejm.org/doi/full/10.1056/NEJMoa1800389', 'Mediterranean diet and cardiovascular events'],
    ['Gardner et al., DIETFITS trial, JAMA 2018', 'https://jamanetwork.com/journals/jama/fullarticle/2673150', 'low-fat versus low-carbohydrate at 12 months']
  ]
};
