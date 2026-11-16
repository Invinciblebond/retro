/* Learn · Anatomy & Physiology. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'anatomy', title: 'Anatomy & Physiology',
  lessons: [
    { id: 'systems', tab: 'The body plan', level: 'Introductory',
      h: 'How the body is <span>organised</span>',
      intro: ['Anatomy is what the parts are. Physiology is how they work. The body is built in layers, and one idea runs through all of it: keep the inside steady while the outside changes.'],
      facts: ['11 organ systems', '206 bones in an adult', 'About 37 trillion cells'],
      b: [
        '## Levels of organisation',
        ['tl', ['Cells', 'The smallest living units. About 200 types.'], ['Tissues', 'Groups of similar cells doing one job.'], ['Organs', 'Two or more tissues working together: heart, liver, skin.'], ['Systems', 'Organs with a shared task: the digestive system.'], ['Organism', 'All systems together: you.']],
        '## The four tissue types',
        ['tb', ['Tissue', 'Job', 'Where'], ['Epithelial', 'Covers and lines', 'Skin, gut lining, glands'], ['Connective', 'Supports and binds', 'Bone, cartilage, fat, blood, tendons'], ['Muscle', 'Contracts', 'Skeletal muscle, heart, gut wall'], ['Nervous', 'Carries signals', 'Brain, spinal cord, nerves']],
        '## The organ systems',
        ['tb', ['System', 'Main parts', 'Job'], ['Skeletal', 'Bones, joints', 'Support, protection, blood cell production'], ['Muscular', 'Skeletal muscles', 'Movement, heat'], ['Cardiovascular', 'Heart, blood vessels', 'Transport'], ['Respiratory', 'Lungs, airways', 'Gas exchange'], ['Nervous', 'Brain, spinal cord, nerves', 'Fast control'], ['Endocrine', 'Glands', 'Slow control by hormones'], ['Digestive', 'Stomach, intestines, liver', 'Break down and absorb food'], ['Urinary', 'Kidneys, bladder', 'Filter blood, balance water and salts'], ['Immune / lymphatic', 'Lymph nodes, white cells', 'Defence'], ['Integumentary', 'Skin, hair, nails', 'Barrier, temperature control'], ['Reproductive', 'Gonads and ducts', 'Reproduction']],
        '## Homeostasis',
        'The body holds temperature, blood sugar, pH and water within narrow limits. It does this with <b>negative feedback</b>: a sensor detects a change, a control centre responds, and an effector pushes the value back.',
        ['fig', '<svg viewBox="0 0 520 150"><g fill="none" stroke="#00ffa3" stroke-width="1.5"><rect x="20" y="50" width="110" height="46" rx="10"/><rect x="205" y="50" width="110" height="46" rx="10"/><rect x="390" y="50" width="110" height="46" rx="10"/><path d="M130 73 H205 M315 73 H390"/><path d="M445 96 V130 H75 V96"/></g><text x="42" y="78">Sensor</text><text x="216" y="78">Control centre</text><text x="412" y="78">Effector</text><text x="185" y="145" fill="#00ffa3">response reverses the change</text><text x="20" y="30">Too hot: skin and brain sense it → hypothalamus → sweat glands and blood vessels cool you</text></svg>', 'Negative feedback. The response cancels the change that caused it, like a thermostat.'],
        '## Finding your way around',
        ['tb', ['Term', 'Means', 'Opposite'], ['Anterior (ventral)', 'Front', 'Posterior (dorsal)'], ['Superior', 'Towards the head', 'Inferior'], ['Medial', 'Towards the midline', 'Lateral'], ['Proximal', 'Nearer the trunk', 'Distal'], ['Superficial', 'Near the surface', 'Deep']]
      ],
      quiz: [
        ['Blood is which type of tissue?', ['Connective', 'Epithelial', 'Muscle', 'Nervous'], 0, 'Connective tissue includes bone, fat and blood.'],
        ['Homeostasis is mainly kept by:', ['Negative feedback', 'Positive feedback', 'Random chance', 'Voluntary control'], 0, 'The response reverses the change.'],
        ['Your wrist is ___ to your elbow.', ['Distal', 'Proximal', 'Medial', 'Superior'], 0, 'Further from the trunk.'],
        ['Which system gives slow, long-lasting control?', ['Endocrine', 'Nervous', 'Skeletal', 'Respiratory'], 0, 'Hormones travel in the blood.'],
        ['An adult has how many bones?', ['206', '106', '306', '260'], 0, 'Babies have more; many fuse.']
      ] },

    { id: 'movement', tab: 'Bones & muscles', level: 'Beginner',
      h: 'Bones, joints and <span>muscles</span>',
      intro: ['The skeleton is a living frame that rebuilds itself constantly. Muscles can only pull, never push, so they work in opposing pairs across joints.'],
      facts: ['Over 600 skeletal muscles', 'Bone is replaced about every 10 years'],
      b: [
        '## What bone does',
        ['ul', '<b>Support and protection:</b> skull for the brain, ribs for heart and lungs, spine for the spinal cord.', '<b>Levers</b> for muscles to pull on.', '<b>Mineral store:</b> 99% of the body\'s calcium.', '<b>Blood factory:</b> red marrow makes red cells, white cells and platelets.'],
        ['kv', ['Compact bone', 'The dense outer layer. Strong against bending.'], ['Spongy bone', 'A light honeycomb inside, holding marrow.'], ['Osteoblasts', 'Cells that build bone.'], ['Osteoclasts', 'Cells that break bone down. The balance between the two decides bone density.']],
        '## The skeleton in two parts',
        ['tb', ['Part', 'Bones', 'Includes'], ['Axial', '80', 'Skull, spine (33 vertebrae), ribs, sternum'], ['Appendicular', '126', 'Shoulders, arms, hands, pelvis, legs, feet']],
        '## Joints',
        ['tb', ['Type', 'Movement', 'Example'], ['Ball and socket', 'All directions', 'Shoulder, hip'], ['Hinge', 'One plane', 'Elbow, knee'], ['Pivot', 'Rotation', 'Neck (atlas on axis)'], ['Fixed', 'None', 'Skull sutures']],
        '<b>Ligaments</b> join bone to bone. <b>Tendons</b> join muscle to bone. <b>Cartilage</b> cushions the ends.',
        '## Three kinds of muscle',
        ['tb', ['Type', 'Control', 'Where'], ['Skeletal', 'Voluntary, striped', 'Attached to bones'], ['Cardiac', 'Involuntary, striped', 'Heart only'], ['Smooth', 'Involuntary, unstriped', 'Gut, blood vessels, bladder']],
        '## How a muscle contracts',
        'Each muscle fibre is packed with units called sarcomeres. Inside, thin filaments (<b>actin</b>) slide past thick ones (<b>myosin</b>). This is the sliding filament model.',
        ['ol', 'A nerve signal arrives and releases acetylcholine at the muscle.', 'The fibre releases calcium from its internal store.', 'Calcium uncovers binding sites on actin.', 'Myosin heads grab actin, pull, let go and grab again, burning ATP each cycle.', 'When the signal stops, calcium is pumped back and the muscle relaxes.'],
        ['note', 'Pairs', 'The biceps bends the elbow; the triceps straightens it. When one contracts (the agonist) the other relaxes (the antagonist).']
      ],
      quiz: [
        ['Tendons connect:', ['Muscle to bone', 'Bone to bone', 'Muscle to muscle', 'Nerve to muscle'], 0, 'Ligaments connect bone to bone.'],
        ['Which cells break bone down?', ['Osteoclasts', 'Osteoblasts', 'Red cells', 'Neurons'], 0, 'Clasts cut, blasts build.'],
        ['The shoulder is which type of joint?', ['Ball and socket', 'Hinge', 'Pivot', 'Fixed'], 0, 'It moves in all directions.'],
        ['Which ion triggers muscle contraction inside the fibre?', ['Calcium', 'Iron', 'Chloride', 'Iodine'], 0, 'Calcium uncovers the binding sites.'],
        ['Cardiac muscle is:', ['Involuntary and striped', 'Voluntary and striped', 'Involuntary and smooth', 'Voluntary and smooth'], 0, 'It beats without conscious control.'],
        ['Blood cells are made in:', ['Red bone marrow', 'The heart', 'Compact bone', 'Muscle'], 0, 'Mostly in flat bones and the ends of long bones.']
      ] },

    { id: 'heartlungs', tab: 'Heart, blood & lungs', level: 'Intermediate',
      h: 'Heart, blood and <span>lungs</span>',
      intro: ['Every cell needs oxygen delivered and carbon dioxide removed, all the time. Two pumps in one organ and about 100,000 km of vessels do the job.'],
      facts: ['About 5 litres of blood', 'Heart beats about 100,000 times a day', 'Normal blood pressure near 120/80'],
      b: [
        '## Two loops',
        ['fig', '<svg viewBox="0 0 520 170"><rect x="215" y="55" width="90" height="60" rx="12" fill="none" stroke="#888"/><line x1="260" y1="55" x2="260" y2="115" stroke="#888"/><text x="222" y="90">right</text><text x="268" y="90">left</text><ellipse cx="80" cy="85" rx="55" ry="35" fill="none" stroke="#38bdf8"/><text x="58" y="89">Lungs</text><ellipse cx="440" cy="85" rx="55" ry="35" fill="none" stroke="#f87171"/><text x="422" y="89">Body</text><g fill="none" stroke-width="2"><path d="M215 70 H135" stroke="#38bdf8"/><path d="M135 100 H215" stroke="#f87171" transform="translate(0,6)"/><path d="M305 70 H385" stroke="#f87171"/><path d="M385 106 H305" stroke="#38bdf8"/></g><text x="150" y="60" fill="#38bdf8">low O₂ out</text><text x="150" y="125" fill="#f87171">high O₂ back</text><text x="312" y="60" fill="#f87171">high O₂ out</text><text x="312" y="125" fill="#38bdf8">low O₂ back</text></svg>', 'The right side of the heart pumps blood to the lungs. The left side pumps it to the rest of the body.'],
        ['ol', 'Oxygen-poor blood returns from the body to the <b>right atrium</b>.', 'It passes to the <b>right ventricle</b>, which pumps it to the lungs.', 'In the lungs it drops carbon dioxide and picks up oxygen.', 'It returns to the <b>left atrium</b>, then the <b>left ventricle</b>.', 'The left ventricle, the strongest chamber, pumps it through the aorta to the body.'],
        '## Vessels',
        ['tb', ['Vessel', 'Carries blood', 'Wall'], ['Arteries', 'Away from the heart', 'Thick, muscular, high pressure'], ['Capillaries', 'Through the tissues', 'One cell thick; exchange happens here'], ['Veins', 'Back to the heart', 'Thin, with valves, low pressure']],
        '## What blood is made of',
        ['tb', ['Part', 'Share', 'Job'], ['Plasma', 'About 55%', 'Water carrying salts, proteins, hormones, nutrients, waste'], ['Red cells', 'About 45%', 'Carry oxygen on haemoglobin'], ['White cells', 'Under 1%', 'Defence'], ['Platelets', 'Under 1%', 'Clotting']],
        '## The numbers',
        ['eq', 'Cardiac output = heart rate × stroke volume\n70 beats/min × 70 mL ≈ 5 litres per minute at rest\n\nBlood pressure 120 / 80 mmHg\n  120 = systolic (heart contracting)\n   80 = diastolic (heart relaxing)'],
        '## Breathing',
        'Air travels nose → trachea → bronchi → bronchioles → <b>alveoli</b>, about 300 million tiny sacs wrapped in capillaries. Oxygen diffuses into the blood and carbon dioxide diffuses out.',
        ['ul', 'To breathe in, the <b>diaphragm</b> contracts and flattens. The chest expands, pressure drops and air flows in.', 'Breathing out at rest is passive: the diaphragm relaxes.', 'The urge to breathe is driven mainly by rising <b>carbon dioxide</b>, not falling oxygen.']
      ],
      quiz: [
        ['Which chamber pumps blood to the body?', ['Left ventricle', 'Right ventricle', 'Left atrium', 'Right atrium'], 0, 'It has the thickest wall.'],
        ['Gas exchange in the lungs happens in the:', ['Alveoli', 'Trachea', 'Bronchi', 'Diaphragm'], 0, 'Thin sacs next to capillaries.'],
        ['Arteries carry blood:', ['Away from the heart', 'Towards the heart', 'Only to the lungs', 'Only oxygen-rich'], 0, 'Defined by direction, not oxygen content.'],
        ['In 120/80, the 120 is the pressure when:', ['The heart contracts', 'The heart relaxes', 'You breathe in', 'You are asleep'], 0, 'Systolic pressure.'],
        ['The main trigger to breathe is:', ['Rising carbon dioxide', 'Falling oxygen', 'A full stomach', 'Heart rate'], 0, 'CO₂ changes blood pH, which the brainstem senses.'],
        ['Oxygen is carried in red cells by:', ['Haemoglobin', 'Plasma', 'Platelets', 'Insulin'], 0, 'An iron-containing protein.']
      ] },

    { id: 'control', tab: 'Nerves & hormones', level: 'Advanced',
      h: 'Control: <span>nerves and hormones</span>',
      intro: ['Two systems run the body. Nerves are fast and precise, like a phone call. Hormones are slow and broad, like a letter sent to every house.'],
      facts: ['About 86 billion neurons', 'Nerve signals up to about 120 m/s'],
      b: [
        '## The nervous system',
        ['tb', ['Division', 'Parts', 'Job'], ['Central (CNS)', 'Brain, spinal cord', 'Processing and decisions'], ['Peripheral: somatic', 'Nerves to skin and skeletal muscle', 'Sensation and voluntary movement'], ['Peripheral: autonomic, sympathetic', 'Nerves to organs', '"Fight or flight": faster heart, wider airways'], ['Peripheral: autonomic, parasympathetic', 'Nerves to organs', '"Rest and digest": slower heart, active gut']],
        '## How a neuron signals',
        ['ol', 'At rest the inside of the cell is about -70 millivolts.', 'If a stimulus pushes it past a threshold, sodium channels open and sodium rushes in. The voltage flips positive.', 'Potassium channels open, potassium leaves, and the voltage returns.', 'This spike, the <b>action potential</b>, travels down the axon without fading.', 'At the end (the <b>synapse</b>) it releases a chemical, a <b>neurotransmitter</b>, which crosses the gap and acts on the next cell.'],
        ['tb', ['Neurotransmitter', 'Main roles'], ['Acetylcholine', 'Muscle contraction, memory'], ['Glutamate', 'Main "go" signal in the brain'], ['GABA', 'Main "stop" signal in the brain'], ['Dopamine', 'Movement, motivation, reward'], ['Serotonin', 'Mood, sleep, appetite'], ['Noradrenaline', 'Alertness, fight or flight']],
        '## Brain regions',
        ['tb', ['Region', 'Job'], ['Cerebral cortex', 'Thought, language, voluntary movement, perception'], ['Cerebellum', 'Balance and coordination'], ['Brainstem', 'Breathing, heart rate, sleep and wake'], ['Hypothalamus', 'Temperature, hunger, thirst; controls the pituitary'], ['Hippocampus', 'Forming new memories'], ['Amygdala', 'Fear and emotional memory']],
        '## Hormones',
        ['tb', ['Gland', 'Hormone', 'Effect'], ['Pituitary', 'Growth hormone, TSH, ACTH, LH, FSH', 'Growth; controls other glands'], ['Thyroid', 'Thyroxine (T4, T3)', 'Sets metabolic rate'], ['Adrenal', 'Cortisol; adrenaline', 'Stress response; fight or flight'], ['Pancreas', 'Insulin; glucagon', 'Lowers blood sugar; raises it'], ['Ovaries / testes', 'Oestrogen, progesterone; testosterone', 'Reproduction and sexual characteristics'], ['Pineal', 'Melatonin', 'Sleep timing']],
        ['note', 'An axis', 'Many hormones are controlled in a chain with feedback. The hypothalamus signals the pituitary, the pituitary signals a gland, and the gland\'s hormone tells the first two to ease off.'],
        '## Blood sugar as an example',
        ['ul', 'After a meal, glucose rises. The pancreas releases <b>insulin</b>. Cells take in glucose and the liver stores it as glycogen.', 'Between meals, glucose falls. The pancreas releases <b>glucagon</b>. The liver breaks glycogen back into glucose.', 'In diabetes this loop fails: too little insulin (type 1) or cells that respond poorly to it (type 2).']
      ],
      quiz: [
        ['The "fight or flight" response is driven by the:', ['Sympathetic system', 'Parasympathetic system', 'Somatic system', 'Cerebellum'], 0, 'It speeds the heart and opens the airways.'],
        ['An action potential starts when which ion rushes into the neuron?', ['Sodium', 'Potassium', 'Calcium', 'Chloride'], 0, 'Sodium in, then potassium out.'],
        ['Which hormone lowers blood sugar?', ['Insulin', 'Glucagon', 'Cortisol', 'Adrenaline'], 0, 'It lets cells take up glucose.'],
        ['Balance and coordination are handled by the:', ['Cerebellum', 'Hippocampus', 'Amygdala', 'Pituitary'], 0, 'At the back, under the cortex.'],
        ['The main inhibitory neurotransmitter in the brain is:', ['GABA', 'Glutamate', 'Dopamine', 'Acetylcholine'], 0, 'Glutamate is the main excitatory one.'],
        ['The thyroid mainly controls:', ['Metabolic rate', 'Blood sugar', 'Sleep timing', 'Blood clotting'], 0, 'Through thyroxine.']
      ] }
  ],
  sources: [
    ['OpenStax: Anatomy and Physiology 2e', 'https://openstax.org/details/books/anatomy-and-physiology-2e', 'free peer-reviewed textbook; every topic in this course'],
    ['NIH National Heart, Lung, and Blood Institute: How the Heart Works', 'https://www.nhlbi.nih.gov/health/heart', 'chambers, circulation, blood pressure'],
    ['NIH National Institute of Neurological Disorders and Stroke: Brain Basics', 'https://www.ninds.nih.gov/health-information/public-education/brain-basics', 'neurons and brain regions'],
    ['Endocrine Society: Hormones and Endocrine Function', 'https://www.endocrine.org/patient-engagement/endocrine-library/hormones-and-endocrine-function', 'glands and hormones'],
    ['Azevedo et al. 2009, Journal of Comparative Neurology', 'https://pubmed.ncbi.nlm.nih.gov/19226510/', 'the count of about 86 billion neurons']
  ]
};
