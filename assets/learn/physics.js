/* Learn · Physics. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'physics', title: 'Physics',
  lessons: [
    { id: 'motion', tab: 'Motion & forces', level: 'Introductory',
      h: 'Motion and <span>forces</span>',
      intro: ['Physics starts with one question: why do things move the way they do? Newton answered it with three laws that still run bridges, cars and spacecraft.'],
      facts: ['F = ma', 'g ≈ 9.8 m/s² near Earth'],
      b: [
        '## Describing motion',
        ['kv', ['Position and displacement', 'Where something is, and how far it has moved in a straight line from the start.'], ['Velocity', 'Speed with a direction. Metres per second (m/s).'], ['Acceleration', 'How quickly velocity changes. Metres per second, per second (m/s²).']],
        ['eq', 'For constant acceleration:\nv = u + at\ns = ut + ½at²\nv² = u² + 2as\n\nu = starting velocity, v = final velocity, a = acceleration, t = time, s = displacement'],
        "## Newton's three laws",
        ['ol', '<b>Inertia.</b> An object keeps doing what it is doing (resting or moving in a straight line at steady speed) unless a net force acts on it.', '<b>F = ma.</b> Net force equals mass times acceleration. Double the force, double the acceleration. Double the mass, half the acceleration.', '<b>Action and reaction.</b> If A pushes B, B pushes A back equally hard in the opposite direction.'],
        ['note', 'Mass is not weight', 'Mass is how much matter (kg). Weight is the force of gravity on it: W = mg, in newtons. Your mass is the same on the Moon; your weight is about a sixth.'],
        '## Common forces',
        ['tb', ['Force', 'Acts', 'Size'], ['Gravity (weight)', 'Down', 'mg'], ['Normal force', 'Out of a surface', 'Whatever stops the object sinking in'], ['Friction', 'Against sliding', 'μ × normal force'], ['Tension', 'Along a rope', 'Same throughout a light rope'], ['Drag', 'Against motion through air or water', 'Grows with speed']],
        '## Projectiles and circles',
        'A thrown ball does two things at once: moves sideways at constant speed and falls with acceleration g. The two do not affect each other. Together they make a parabola.',
        ['eq', 'Circular motion needs an inward (centripetal) force:\nF = mv² / r'],
        '## Gravity between any two masses',
        ['eq', 'F = G · m1 · m2 / r²        G = 6.674 × 10⁻¹¹ N·m²/kg²'],
        'Double the distance and the pull drops to a quarter. This one law explains falling apples, tides and orbits.'
      ],
      quiz: [
        ['A 2 kg object is pushed with a net force of 10 N. Its acceleration is:', ['5 m/s²', '20 m/s²', '0.2 m/s²', '12 m/s²'], 0, 'a = F / m = 10 / 2.'],
        ['A car starts from rest and accelerates at 3 m/s² for 4 s. Its speed is:', ['12 m/s', '7 m/s', '24 m/s', '0.75 m/s'], 0, 'v = u + at = 0 + 3 × 4.'],
        ['If the distance between two masses doubles, gravity between them becomes:', ['One quarter', 'One half', 'Double', 'Unchanged'], 0, 'Inverse square law.'],
        ['On the Moon, your mass is:', ['The same', 'One sixth', 'Zero', 'Six times larger'], 0, 'Mass does not change. Weight does.'],
        ["Newton's third law says forces:", ['Come in equal and opposite pairs', 'Always cancel out', 'Only act on heavy objects', 'Need contact'], 0, 'The pair acts on two different objects, so they do not cancel.']
      ] },

    { id: 'energy', tab: 'Energy & momentum', level: 'Beginner',
      h: 'Energy and <span>momentum</span>',
      intro: ['Forces tell you what happens moment by moment. Conservation laws tell you what cannot change, which often solves the problem in one line.'],
      facts: ['Energy is never created or destroyed', 'Momentum too'],
      b: [
        '## Work and energy',
        ['eq', 'Work           W = F · d          (joules, J)\nKinetic energy KE = ½mv²\nPotential      PE = mgh          (near Earth)\nPower          P = W / t         (watts, W)'],
        'Energy changes form but the total stays fixed. A ball dropped from height h trades mgh for ½mv² on the way down.',
        ['eq', 'mgh = ½mv²     so     v = √(2gh)      (mass cancels: all objects fall alike without air)'],
        '## Momentum',
        ['eq', 'p = mv\nImpulse = F · t = change in momentum'],
        'In any collision with no outside force, total momentum before equals total momentum after. A longer stopping time means a smaller force, which is how airbags and crumple zones work.',
        ['tb', ['Collision', 'Momentum', 'Kinetic energy'], ['Elastic (billiard balls)', 'Conserved', 'Conserved'], ['Inelastic (car crash)', 'Conserved', 'Partly turned into heat and damage'], ['Perfectly inelastic (objects stick)', 'Conserved', 'Maximum loss']],
        '## Rotation',
        ['tb', ['Straight line', 'Rotation'], ['Force F', 'Torque τ = F × lever arm'], ['Mass m', 'Moment of inertia I'], ['Momentum mv', 'Angular momentum L = Iω']],
        'Angular momentum is conserved too. A spinning skater pulls in her arms, I gets smaller, so the spin rate ω must rise.'
      ],
      quiz: [
        ['The kinetic energy of a 2 kg ball moving at 3 m/s is:', ['9 J', '6 J', '18 J', '3 J'], 0, '½ × 2 × 3² = 9.'],
        ['If speed doubles, kinetic energy becomes:', ['Four times larger', 'Twice as large', 'The same', 'Half'], 0, 'KE depends on v².'],
        ['In a collision with no outside forces, which is always conserved?', ['Momentum', 'Kinetic energy', 'Speed', 'Temperature'], 0, 'Kinetic energy is conserved only in elastic collisions.'],
        ['An airbag reduces injury by:', ['Lengthening the stopping time', 'Reducing your momentum change', 'Increasing the force', 'Removing inertia'], 0, 'Same impulse, longer time, smaller force.'],
        ['A skater pulls her arms in and spins faster because:', ['Angular momentum is conserved', 'Energy is destroyed', 'Friction increases', 'Gravity weakens'], 0, 'L = Iω stays fixed, so smaller I means larger ω.']
      ] },

    { id: 'waves', tab: 'Waves & heat', level: 'Intermediate',
      h: 'Waves, sound, light and <span>heat</span>',
      intro: ['A wave carries energy without carrying matter. Heat is the energy of jiggling atoms. Both are about energy spreading out.'],
      facts: ['v = fλ', 'Heat flows from hot to cold'],
      b: [
        '## Wave basics',
        ['fig', '<svg viewBox="0 0 520 150"><line x1="20" y1="75" x2="500" y2="75" stroke="#333"/><path d="M20 75 Q80 -15 140 75 T260 75 T380 75 T500 75" fill="none" stroke="#00ffa3" stroke-width="2"/><g stroke="#f5a623"><line x1="80" y1="18" x2="320" y2="18"/><line x1="80" y1="30" x2="80" y2="75"/></g><text x="165" y="12" fill="#f5a623">wavelength λ</text><text x="86" y="58" fill="#f5a623">amplitude</text></svg>', 'Wavelength is the distance between crests. Amplitude is the height. Frequency is how many crests pass each second.'],
        ['eq', 'wave speed = frequency × wavelength        v = fλ\nperiod T = 1 / f'],
        ['tb', ['', 'Sound', 'Light'], ['Type', 'Longitudinal (squeeze and stretch)', 'Transverse (side to side), electromagnetic'], ['Needs a medium?', 'Yes', 'No, travels through empty space'], ['Speed', 'About 343 m/s in air', '299,792,458 m/s in a vacuum'], ['Frequency is heard or seen as', 'Pitch', 'Colour']],
        '## What waves do',
        ['kv', ['Reflection', 'Bounce off a surface. Angle in equals angle out.'], ['Refraction', 'Bend when they change speed, as light does entering water.'], ['Diffraction', 'Spread out after passing through a gap or round a corner.'], ['Interference', 'Two waves add. Crest on crest gets bigger; crest on trough cancels.'], ['Doppler effect', 'A source moving towards you sounds higher; moving away, lower.']],
        '## The electromagnetic spectrum',
        'Radio, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays are all the same kind of wave. From radio to gamma the wavelength gets shorter and the energy per photon gets higher.',
        '## Heat and temperature',
        ['kv', ['Temperature', 'Average kinetic energy of the particles. Kelvin = Celsius + 273.15.'], ['Heat', 'Energy moving because of a temperature difference.'], ['Three ways heat moves', 'Conduction (contact), convection (moving fluid), radiation (infrared light).']],
        ['eq', 'Q = mcΔT        heat needed to warm mass m by ΔT (c = specific heat)\nPV = nRT        ideal gas law'],
        '## The laws of thermodynamics',
        ['ol', '<b>Zeroth.</b> If A and B are each at the same temperature as C, they are at the same temperature as each other.', '<b>First.</b> Energy is conserved: ΔU = Q - W.', '<b>Second.</b> Entropy (disorder) of an isolated system never decreases. Heat will not flow from cold to hot by itself, and no engine is 100% efficient.', '<b>Third.</b> Absolute zero (0 K) cannot be reached in a finite number of steps.']
      ],
      quiz: [
        ['A wave has frequency 5 Hz and wavelength 2 m. Its speed is:', ['10 m/s', '2.5 m/s', '7 m/s', '0.4 m/s'], 0, 'v = fλ.'],
        ['Which needs a medium to travel?', ['Sound', 'Light', 'Radio waves', 'X-rays'], 0, 'Sound is vibration of matter.'],
        ['Light bending as it enters water is:', ['Refraction', 'Diffraction', 'Reflection', 'Interference'], 0, 'It changes speed, so it changes direction.'],
        ['Which has the highest energy per photon?', ['Gamma rays', 'Radio waves', 'Infrared', 'Visible light'], 0, 'Shortest wavelength, highest energy.'],
        ['The second law of thermodynamics says:', ['Entropy of an isolated system does not decrease', 'Energy can be created', 'Heat flows from cold to hot', 'Engines can be 100% efficient'], 0, 'Disorder tends to grow.'],
        ['0 °C in kelvin is about:', ['273 K', '0 K', '100 K', '373 K'], 0, 'K = °C + 273.15.']
      ] },

    { id: 'em', tab: 'Electricity & magnetism', level: 'Advanced',
      h: 'Electricity and <span>magnetism</span>',
      intro: ['Electric charge is a basic property of matter, like mass. Moving charge is current. Moving charge also makes magnetism, and changing magnetism makes current. That loop is light itself.'],
      facts: ['V = IR', 'Light is an electromagnetic wave'],
      b: [
        '## Charge and fields',
        ['eq', "Coulomb's law:  F = k · q1 · q2 / r²        k ≈ 8.99 × 10⁹ N·m²/C²"],
        'Like charges repel, opposites attract. A charge fills the space around it with an <b>electric field</b>: the force a small test charge would feel at each point.',
        '## Circuits',
        ['tb', ['Quantity', 'Symbol', 'Unit', 'Water-pipe picture'], ['Voltage', 'V', 'volt (V)', 'Pressure'], ['Current', 'I', 'ampere (A)', 'Flow rate'], ['Resistance', 'R', 'ohm (Ω)', 'Narrowness of the pipe']],
        ['eq', "Ohm's law:  V = IR\nPower:      P = VI = I²R\n\nSeries:    R = R1 + R2          same current through each\nParallel:  1/R = 1/R1 + 1/R2    same voltage across each"],
        '## Magnetism',
        ['ul', 'A current in a wire makes a magnetic field that circles the wire.', 'A magnetic field pushes on a moving charge: <code>F = qvB</code>, at right angles to both the motion and the field. This is how motors turn.', 'A <b>changing</b> magnetic field through a loop drives a current in it (Faraday\'s law of induction). This is how generators and transformers work.'],
        "## Maxwell's equations in words",
        ['ol', 'Electric field lines start and end on charges.', 'Magnetic field lines never start or end. There are no lone north or south poles.', 'A changing magnetic field makes an electric field.', 'A current or a changing electric field makes a magnetic field.'],
        'Put 3 and 4 together and each field keeps creating the other, travelling outward as a wave. Maxwell worked out its speed from two constants measured on a lab bench and got the speed of light.',
        ['eq', 'c = 1 / √(μ0 · ε0) ≈ 3.00 × 10⁸ m/s']
      ],
      quiz: [
        ['A 12 V battery drives 2 A through a resistor. Its resistance is:', ['6 Ω', '24 Ω', '14 Ω', '0.17 Ω'], 0, 'R = V / I.'],
        ['Two 10 Ω resistors in parallel have a combined resistance of:', ['5 Ω', '20 Ω', '10 Ω', '100 Ω'], 0, '1/R = 1/10 + 1/10.'],
        ['What produces a current in a loop of wire?', ['A changing magnetic field through it', 'A steady magnetic field', 'Any nearby magnet at rest', 'Gravity'], 0, "Faraday's law needs change."],
        ['Power used by a device at 230 V drawing 2 A is:', ['460 W', '115 W', '232 W', '0.0087 W'], 0, 'P = VI.'],
        ['Maxwell showed that light is:', ['An electromagnetic wave', 'A sound wave', 'A stream of electrons', 'A form of heat only'], 0, 'Electric and magnetic fields regenerating each other.']
      ] },

    { id: 'modern', tab: 'Relativity & beyond', level: 'Advanced',
      h: 'Relativity and <span>modern physics</span>',
      intro: ['Around 1900 two cracks appeared in classical physics: light always moves at the same speed, and atoms should not be stable. Fixing the first gave relativity. Fixing the second gave quantum mechanics.'],
      facts: ['E = mc²', 'Nothing with mass reaches the speed of light'],
      b: [
        '## Special relativity (1905)',
        'Two starting points: the laws of physics are the same for everyone moving at steady speed, and everyone measures the same speed of light, c.',
        ['eq', 'γ = 1 / √(1 - v²/c²)        the Lorentz factor\n\nTime dilation:        moving clocks run slow by a factor γ\nLength contraction:   moving objects are shorter along their motion by γ\nEnergy:               E = γmc²     at rest:  E = mc²'],
        ['tb', ['Speed', 'γ'], ['Everyday speeds', '1.000000…'], ['0.5 c', '1.15'], ['0.9 c', '2.29'], ['0.99 c', '7.09']],
        ['note', 'It is real', 'GPS satellites correct their clocks for relativity every day. Without the correction, positions would drift by kilometres.'],
        '## General relativity (1915)',
        'Gravity is not a force pulling across space. Mass and energy curve spacetime, and objects follow the straightest path through that curve. Confirmed by the bending of starlight (1919), the slowing of clocks in gravity, and gravitational waves (first detected in 2015).',
        '## Inside the atom',
        ['kv', ['Nucleus', 'Protons and neutrons, held by the strong force.'], ['Fission', 'A heavy nucleus splits and releases energy. Powers nuclear reactors.'], ['Fusion', 'Light nuclei join and release energy. Powers the Sun.'], ['Radioactive decay', 'Alpha (helium nucleus), beta (electron or positron), gamma (high-energy light). Each isotope has a fixed half-life.']],
        '## The four forces',
        ['tb', ['Force', 'Acts on', 'Carrier'], ['Strong', 'Quarks, holds nuclei together', 'Gluon'], ['Electromagnetic', 'Charged particles', 'Photon'], ['Weak', 'Causes beta decay', 'W and Z bosons'], ['Gravity', 'Everything with mass or energy', 'Not yet part of the Standard Model']],
        'The Standard Model describes the first three and every known particle: six quarks, six leptons, the force carriers and the Higgs boson (found in 2012). What dark matter and dark energy are, and how gravity fits with quantum theory, are still open.'
      ],
      quiz: [
        ['According to special relativity, a clock moving past you:', ['Runs slow', 'Runs fast', 'Runs the same', 'Stops'], 0, 'Time dilation by the factor γ.'],
        ['E = mc² says:', ['Mass is a form of energy', 'Energy has no mass', 'Light has mass', 'Mass moves at c'], 0, 'A small mass is a very large amount of energy.'],
        ['In general relativity, gravity is:', ['The curvature of spacetime', 'A magnetic effect', 'A pull through the ether', 'Caused by air pressure'], 0, 'Mass and energy curve spacetime.'],
        ['The Sun is powered by:', ['Fusion', 'Fission', 'Chemical burning', 'Radioactive decay'], 0, 'Hydrogen nuclei fuse into helium.'],
        ['Which force is not part of the Standard Model?', ['Gravity', 'Strong', 'Weak', 'Electromagnetic'], 0, 'A quantum theory of gravity is still missing.']
      ] }
  ],
  sources: [
    ['OpenStax: University Physics, volumes 1 to 3', 'https://openstax.org/details/books/university-physics-volume-1', 'free peer-reviewed textbook; mechanics, waves, thermodynamics, E&M, modern physics'],
    ['The Feynman Lectures on Physics (Caltech, free online)', 'https://www.feynmanlectures.caltech.edu/', 'the classic explanations'],
    ['NIST: Fundamental Physical Constants', 'https://physics.nist.gov/cuu/Constants/', 'values of c, G, k and the rest'],
    ['LIGO: first detection of gravitational waves', 'https://www.ligo.caltech.edu/page/what-are-gw', 'general relativity confirmed'],
    ['CERN: The Standard Model', 'https://home.cern/science/physics/standard-model', 'particles and forces']
  ]
};
