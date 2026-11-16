/* Learn · Quantum Mechanics. Content blocks are rendered by assets/learn.js. */
window.LEARN = {
  kind: 'course', id: 'quantum', title: 'Quantum Mechanics',
  lessons: [
    { id: 'quanta', tab: 'Why quantum', level: 'Introductory',
      h: 'Energy comes in <span>lumps</span>',
      intro: ['Quantum mechanics is the set of rules for very small things: atoms, electrons, light. It was not invented for fun. It was forced on physicists by experiments that the old physics got flatly wrong.'],
      facts: ['Planck constant h = 6.626 × 10⁻³⁴ J·s', 'Born around 1900 to 1927'],
      b: [
        '## Three experiments that broke classical physics',
        ['kv', ['Glowing hot objects', 'Old theory said a hot oven should pour out unlimited ultraviolet light. It does not. In 1900 Max Planck fixed the maths by assuming energy is emitted only in packets.'],
               ['The photoelectric effect', 'Light knocks electrons out of metal. Dim blue light works; bright red light does not. Einstein (1905): light arrives as particles, photons, and each must carry enough energy on its own.'],
               ['Atomic spectra', 'Hot hydrogen glows in a few sharp colours, not a rainbow. Bohr (1913): the electron can only have certain energies, and gives off a photon when it drops between them.']],
        ['eq', 'Energy of one photon:   E = hf        (h = Planck constant, f = frequency)'],
        '## Waves that are particles, particles that are waves',
        'Light, long known to be a wave, also behaves as particles. In 1924 de Broglie proposed the reverse: every particle has a wavelength.',
        ['eq', 'λ = h / p        (p = momentum = mass × velocity)'],
        'For a tennis ball the wavelength is far too small to notice. For an electron it is about the size of an atom, so its wave nature controls everything it does.',
        '## The double-slit experiment',
        ['fig', '<svg viewBox="0 0 520 180"><rect x="170" y="10" width="8" height="60" fill="#666"/><rect x="170" y="82" width="8" height="16" fill="#666"/><rect x="170" y="110" width="8" height="60" fill="#666"/><circle cx="40" cy="90" r="6" fill="#f5a623"/><g fill="none" stroke="#00ffa3" opacity=".5"><path d="M180 76 Q260 40 420 30"/><path d="M180 76 Q260 80 420 90"/><path d="M180 104 Q260 100 420 90"/><path d="M180 104 Q260 140 420 150"/></g><rect x="430" y="10" width="6" height="160" fill="#333"/><g fill="#00ffa3"><rect x="440" y="24" width="20" height="10" opacity=".4"/><rect x="440" y="54" width="40" height="10" opacity=".7"/><rect x="440" y="84" width="62" height="10"/><rect x="440" y="114" width="40" height="10" opacity=".7"/><rect x="440" y="144" width="20" height="10" opacity=".4"/></g><text x="20" y="115">source</text><text x="150" y="178">two slits</text><text x="420" y="178">screen</text></svg>', 'Electrons sent one at a time still build up bright and dark stripes, as waves would. Each electron lands at one point, as a particle would.'],
        ['ul', 'Send electrons through two slits one at a time. Each makes a single dot on the screen.', 'After many electrons, the dots form stripes: an interference pattern. Each electron behaved like a wave passing through both slits.', 'Put a detector at the slits to see which one each electron used. The stripes vanish.'],
        ['note', 'The lesson', 'Small things do not have a definite path until something measures it. What we can predict is probability.']
      ],
      quiz: [
        ['The energy of a photon depends on its:', ['Frequency', 'Brightness', 'Speed', 'Mass'], 0, 'E = hf.'],
        ['In the photoelectric effect, dim blue light ejects electrons but bright red light does not because:', ['Each blue photon carries more energy', 'Blue light is faster', 'Red light has no photons', 'Metals reflect red'], 0, 'It is the energy per photon that counts.'],
        ['The de Broglie wavelength of a particle is:', ['h divided by its momentum', 'h times its mass', 'Its speed divided by h', 'Always zero'], 0, 'λ = h / p.'],
        ['In the double-slit experiment, detecting which slit each electron uses:', ['Destroys the interference pattern', 'Makes the pattern sharper', 'Has no effect', 'Speeds up the electrons'], 0, 'Which-path information removes the interference.'],
        ['Hot hydrogen gives off sharp spectral lines because:', ['Electron energies are quantised', 'Hydrogen is very hot', 'Photons have mass', 'The gas is thin'], 0, 'Only certain energy jumps are allowed.']
      ] },

    { id: 'wave', tab: 'The wave function', level: 'Beginner',
      h: 'The wave function and <span>uncertainty</span>',
      intro: ['Quantum mechanics describes a particle by a wave function, written ψ (psi). It does not say where the particle is. It says where you are likely to find it.'],
      facts: ['|ψ|² = probability', 'Δx · Δp ≥ ħ/2'],
      b: [
        '## What ψ means',
        ['ul', 'ψ is a number (in general a complex number) at every point in space.', 'Its size squared, <code>|ψ|²</code>, is the probability of finding the particle there. This is the <b>Born rule</b>.', 'All the probabilities add to 1: the particle is somewhere.'],
        '## Superposition',
        'If a system can be in state A or state B, it can also be in a mix of both at once. This is not ignorance about which one it is in. The mix produces interference effects that neither state alone can.',
        ['eq', '|ψ⟩ = a|A⟩ + b|B⟩        chance of finding A = |a|²,  of B = |b|²,   |a|² + |b|² = 1'],
        '## Measurement',
        'Measuring forces one outcome. Before: a spread of possibilities. After: one definite result, and the wave function "collapses" to match it. Which result you get is random, with the odds set by |ψ|².',
        ['note', 'Schrödinger\'s cat', 'Schrödinger invented the cat in a box (1935) to show how odd it would be to apply superposition to everyday objects. It was a criticism, not a claim that cats are both alive and dead. Large warm objects interact with their surroundings so fast that superpositions are destroyed almost instantly. This is called decoherence.'],
        '## The uncertainty principle',
        ['eq', 'Δx · Δp ≥ ħ / 2          ħ = h / 2π ≈ 1.055 × 10⁻³⁴ J·s'],
        'The more sharply a particle\'s position is defined, the less sharply its momentum is, and the reverse. This is not a flaw in our instruments. A wave that is squeezed into a small space is made of many wavelengths, so it has no single momentum.',
        ['fig', '<svg viewBox="0 0 520 150"><line x1="20" y1="50" x2="500" y2="50" stroke="#333"/><path d="M20 50 Q35 20 50 50 T80 50 T110 50 T140 50 T170 50 T200 50 T230 50 T260 50 T290 50 T320 50 T350 50 T380 50 T410 50 T440 50 T470 50 T500 50" fill="none" stroke="#00ffa3" stroke-width="1.5"/><line x1="20" y1="115" x2="500" y2="115" stroke="#333"/><path d="M20 115 L200 115 Q215 112 225 100 Q235 80 245 112 Q255 150 262 115 Q268 78 276 115 Q284 148 292 112 Q300 90 308 105 Q318 114 335 115 L500 115" fill="none" stroke="#f472b6" stroke-width="1.5"/><text x="20" y="18" fill="#00ffa3">One clear wavelength: momentum known, position spread everywhere</text><text x="20" y="145" fill="#f472b6">A short pulse: position known, many wavelengths mixed</text></svg>', 'You cannot have both. A wave cannot be in one place and have one wavelength at the same time.'],
        '## Tunnelling',
        'A wave function does not stop dead at a barrier. It leaks through, fading as it goes. So a particle has a small chance of appearing on the far side of a wall it does not have the energy to climb. This is how the Sun fuses hydrogen, how some radioactive decay happens, and how flash memory and scanning tunnelling microscopes work.'
      ],
      quiz: [
        ['|ψ|² gives:', ['The probability of finding the particle', 'The energy of the particle', 'The mass of the particle', 'The exact position'], 0, 'This is the Born rule.'],
        ['The uncertainty principle links:', ['Position and momentum', 'Mass and charge', 'Speed and colour', 'Energy and temperature'], 0, 'Δx · Δp ≥ ħ/2.'],
        ['Uncertainty exists because:', ['A localised wave has no single wavelength', 'Instruments are not good enough yet', 'Electrons are too fast to see', 'Measurements are done badly'], 0, 'It is built into wave behaviour.'],
        ['Schrödinger\'s cat was meant to:', ['Show how strange superposition is for large objects', 'Prove cats can be alive and dead', 'Describe a real experiment', 'Explain tunnelling'], 0, 'It was a thought experiment and a criticism.'],
        ['Quantum tunnelling lets a particle:', ['Pass a barrier it lacks the energy to climb', 'Travel faster than light', 'Split in two', 'Lose its mass'], 0, 'The wave function leaks through.']
      ] },

    { id: 'atoms', tab: 'Atoms & spin', level: 'Intermediate',
      h: 'The Schrödinger equation, <span>atoms and spin</span>',
      intro: ['One equation tells you how any wave function changes in time. Solve it for an electron near a proton and the whole periodic table starts to fall out.'],
      facts: ['Ĥψ = Eψ', 'Hydrogen ground state: -13.6 eV'],
      b: [
        '## The Schrödinger equation',
        ['eq', 'Time-dependent:     iħ ∂ψ/∂t = Ĥψ\nTime-independent:   Ĥψ = Eψ\n\nĤ (the Hamiltonian) = kinetic energy + potential energy'],
        'Read the second line as: "find the wave shapes ψ that the energy operator leaves unchanged apart from a number E". Those shapes are the allowed states, and the numbers E are the allowed energies. Only certain ones fit, in the same way that only certain notes fit on a guitar string.',
        '## Particle in a box',
        'Trap a particle between two walls a distance L apart. The wave must be zero at both walls, so only whole numbers of half-wavelengths fit.',
        ['eq', 'E_n = n² h² / (8 m L²)        n = 1, 2, 3, …'],
        ['ul', 'Energy is quantised: only these values are allowed.', 'The lowest energy is not zero. A confined particle can never be perfectly still.', 'Smaller box, bigger gaps between levels. This is why quantum effects show up for small things.'],
        '## The hydrogen atom',
        ['eq', 'E_n = -13.6 eV / n²'],
        'Each state of the electron is labelled by quantum numbers:',
        ['tb', ['Number', 'Symbol', 'Values', 'Sets'], ['Principal', 'n', '1, 2, 3, …', 'Energy and size of the orbital'], ['Angular momentum', 'l', '0 to n - 1', 'Shape: s, p, d, f'], ['Magnetic', 'm', '-l to +l', 'Orientation in space'], ['Spin', 's', '+½ or -½', 'Spin up or spin down']],
        '## Spin',
        'Electrons carry a built-in angular momentum called spin. It is not a tiny ball rotating. Measured along any direction, it gives only two answers: up or down. The Stern-Gerlach experiment (1922) showed this by splitting a beam of atoms into two.',
        '## The Pauli exclusion principle',
        'No two electrons in an atom can have the same four quantum numbers. So electrons cannot all pile into the lowest level. They fill shells, and the pattern of filled and half-filled shells is chemistry.',
        ['tb', ['Particle type', 'Spin', 'Rule', 'Examples'], ['Fermions', 'Half-integer', 'Never share a state', 'Electrons, protons, neutrons'], ['Bosons', 'Whole number', 'Happy to share a state', 'Photons (which is why lasers work)']]
      ],
      quiz: [
        ['In Ĥψ = Eψ, E is:', ['An allowed energy', 'The electric field', 'The wave function', 'The mass'], 0, 'Each allowed state has its own energy.'],
        ['The lowest energy of a particle in a box is:', ['Greater than zero', 'Exactly zero', 'Negative infinity', 'Undefined'], 0, 'This is zero-point energy.'],
        ['Measured along one direction, an electron\'s spin can be:', ['Up or down only', 'Any value', 'Zero only', 'Three values'], 0, 'Two outcomes, +½ or -½.'],
        ['The Pauli exclusion principle explains:', ['Why electrons fill shells', 'Why light has a fixed speed', 'Why atoms decay', 'Why protons are positive'], 0, 'No two electrons share all four quantum numbers.'],
        ['The ground-state energy of hydrogen is:', ['-13.6 eV', '0 eV', '13.6 J', '-1 eV'], 0, 'E = -13.6 eV / n² with n = 1.'],
        ['Photons are:', ['Bosons', 'Fermions', 'Leptons', 'Quarks'], 0, 'Bosons can share a state.']
      ] },

    { id: 'entangle', tab: 'Entanglement & beyond', level: 'Advanced',
      h: 'Entanglement, interpretation and <span>quantum computing</span>',
      intro: ['The deepest feature of quantum mechanics is that two particles can share one wave function. What you learn about one tells you about the other at once, however far apart they are.'],
      facts: ["Bell's theorem, 1964", 'Nobel Prize in Physics 2022'],
      b: [
        '## Entanglement',
        'Make two particles together so that their spins must be opposite. Neither has a definite spin yet. Measure one as up and the other will be found down, even on the other side of the galaxy.',
        ['eq', '|ψ⟩ = ( |up, down⟩ - |down, up⟩ ) / √2'],
        ['warn', 'No faster-than-light messages', 'Each result on its own is random. The link only shows when the two sets of results are compared, and comparing needs an ordinary signal. Nothing usable travels faster than light.'],
        '## Einstein versus Bell',
        ['tl', ['1935', 'Einstein, Podolsky and Rosen argue that the particles must carry hidden instructions set in advance. They call the alternative "spooky action at a distance".'], ['1964', 'John Bell proves that any hidden-instruction theory limits how strongly results can be correlated. Quantum mechanics predicts the limit is broken.'], ['1972 to 2015', 'Experiments by Clauser, Aspect, Zeilinger and others break Bell\'s limit and close the loopholes one by one.'], ['2022', 'Aspect, Clauser and Zeilinger share the Nobel Prize in Physics.']],
        'Conclusion: nature is not both "local" and "pre-decided". Quantum mechanics passed the test.',
        '## What does it all mean?',
        'Everyone agrees on the maths and the predictions. People disagree on the story behind them.',
        ['tb', ['Interpretation', 'Claim in one line'], ['Copenhagen', 'The wave function is a tool for predicting results. Do not ask what happens between measurements.'], ['Many-worlds', 'The wave function never collapses. Every outcome happens, in branches that no longer affect each other.'], ['Pilot wave (Bohm)', 'Particles have real positions, guided by a wave. The price is that the guidance is non-local.'], ['Objective collapse', 'Collapse is a real physical process that happens by itself for large enough systems.']],
        '## Quantum computing',
        ['kv', ['Qubit', 'A bit can be 0 or 1. A qubit can be a superposition of both, and many qubits can be entangled.'], ['Why it helps', 'A quantum algorithm arranges interference so wrong answers cancel and right answers add up.'], ['Shor\'s algorithm', 'Factors large numbers far faster than any known classical method. A big enough machine would break RSA encryption.'], ['Grover\'s algorithm', 'Searches an unsorted list of N items in about √N steps.'], ['The hard part', 'Qubits lose their state through decoherence. Useful machines need error correction, which takes many physical qubits for each reliable one.']],
        '## Where it goes next',
        'Combine quantum mechanics with special relativity and you get quantum field theory: particles are ripples in fields that fill space. Its best-tested part, quantum electrodynamics, matches experiment to better than one part in a billion.'
      ],
      quiz: [
        ['Entangled particles:', ['Share a single quantum state', 'Send signals faster than light', 'Are always close together', 'Have the same charge'], 0, 'One wave function describes both.'],
        ["Bell's theorem made it possible to:", ['Test hidden-variable theories by experiment', 'Build a laser', 'Measure the speed of light', 'Split the atom'], 0, 'It turned a philosophical argument into a measurable limit.'],
        ['Entanglement cannot be used for faster-than-light messaging because:', ['Each individual result is random', 'Light is too slow', 'Particles decay', 'It only works in a lab'], 0, 'The pattern appears only after comparing notes by ordinary means.'],
        ["Shor's algorithm threatens:", ['RSA encryption', 'AES-256 directly', 'Hash functions only', 'All passwords'], 0, 'It factors large numbers efficiently.'],
        ['The many-worlds interpretation says:', ['The wave function never collapses', 'Particles have hidden positions', 'Measurement creates reality', 'Collapse is a physical process'], 0, 'All outcomes occur in separate branches.'],
        ['The main obstacle to large quantum computers is:', ['Decoherence and errors', 'Lack of electricity', 'The speed of light', 'Shortage of electrons'], 0, 'Qubits are fragile.']
      ] }
  ],
  sources: [
    ['The Feynman Lectures on Physics, Volume III: Quantum Mechanics', 'https://www.feynmanlectures.caltech.edu/III_toc.html', 'free online; double slit, spin, the Schrödinger equation'],
    ['MIT OpenCourseWare 8.04: Quantum Physics I', 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/', 'full lecture course'],
    ['OpenStax: University Physics Volume 3, Modern Physics', 'https://openstax.org/details/books/university-physics-volume-3', 'photons, wave functions, the hydrogen atom'],
    ['Nobel Prize in Physics 2022: press release', 'https://www.nobelprize.org/prizes/physics/2022/press-release/', 'entanglement and Bell tests'],
    ['Stanford Encyclopedia of Philosophy: Interpretations of quantum mechanics', 'https://plato.stanford.edu/entries/qm/', 'what the theory says and how it is read'],
    ['NIST: Fundamental Physical Constants', 'https://physics.nist.gov/cuu/Constants/', 'h and ħ']
  ]
};
