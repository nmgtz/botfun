
function physicsWords(matchedphysWord) {
    let botResponse = "";
    if(matchedphysWord.includes('physics')) {
    botResponse = `"Physics" - Is the natural science that studies matter, energy, and their interactions. It seeks to understand how the universe behaves, from the smallest subatomic particles to the largest galaxies. Physics encompasses a wide range of phenomena and explores fundamental principles that govern the behavior of physical systems.

Key areas of study in physics include:

/ Classical Mechanics: / - Classical mechanics deals with the motion of macroscopic objects and the forces acting upon them. It includes topics such as kinematics, dynamics, and statics, and it is governed by Newton's laws of motion.

/ Thermodynamics: / - Thermodynamics studies the relationships between heat, energy, and work. It explores concepts such as temperature, entropy, and the laws of thermodynamics, which govern energy transfer and conversion.

/ Electromagnetism: / - Electromagnetism deals with the interaction between electrically charged particles and magnetic fields. It includes topics such as electric fields, magnetic fields, electromagnetic waves, and Maxwell's equations.

/ Optics: / - Optics is the study of light and its interactions with matter. It includes topics such as reflection, refraction, diffraction, and the behavior of lenses and mirrors.

/ Quantum Mechanics: / - Quantum mechanics describes the behavior of particles at the atomic and subatomic levels. It introduces concepts such as wave-particle duality, uncertainty principle, and quantum states, which govern the behavior of particles in quantum systems.

/ Relativity: / - Relativity theory, developed by Albert Einstein, describes the relationship between space, time, and gravity. It includes both special relativity, which deals with objects moving at high speeds, and general relativity, which describes the curvature of spacetime caused by mass and energy.

/ Particle Physics: / - Particle physics explores the fundamental constituents of matter and their interactions. It includes the study of subatomic particles such as quarks, leptons, and bosons, as well as the fundamental forces of nature.

Physics plays a crucial role in understanding the natural world and has led to numerous technological advancements and scientific discoveries. It provides the foundation for other scientific disciplines and contributes to fields such as engineering, astronomy, chemistry, and medicine.`;
                            } else if (matchedphysWord.includes('bernoulli\'s theorem')) {
                                botResponse = "Bernoulli's theorem describes the principle of conservation of energy in fluid dynamics. It states that for an incompressible, frictionless fluid, the total mechanical energy remains constant.";
                            } else if (matchedphysWord.includes('theorem')) {
                                botResponse = "A theorem is a statement that has been proven on the basis of previously established statements and generally accepted operations within a formal system.";
                            } else if (matchedphysWord.includes('physics')) {
                                botResponse = "Physics is the natural science that studies matter, its motion, and behavior through space and time, along with related concepts such as energy and force.";
                            } else if (matchedphysWord.includes('physician')) {
                                botResponse = "A physician is a medical doctor, a professional who practices medicine, which is concerned with promoting, maintaining, or restoring health.";
                            } else if (matchedphysWord.includes('newton')) {
                                botResponse = "Isaac Newton was an English mathematician, physicist, astronomer, and author who is widely recognized as one of the most influential scientists of all time. His book 'Philosophiæ Naturalis Principia Mathematica' laid the foundations for classical mechanics.";
                            } else if (matchedphysWord.includes('einstein')) {
                                botResponse = "Albert Einstein was a theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science.";
                            } else if (matchedphysWord.includes('relativity')) {
                                botResponse = "Relativity, or the theory of relativity, encompasses two interrelated theories by Albert Einstein: special relativity and general relativity. It revolutionized the understanding of space, time, and gravity.";
                            } else if (matchedphysWord.includes('quantum mechanics')) {
                                botResponse = "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles.";
                            } else if (matchedphysWord.includes('thermodynamics')) {
                                botResponse = "Thermodynamics is the branch of physics that deals with the relationships between heat and other forms of energy. It describes how thermal energy is converted to and from other forms of energy and how it affects matter.";
                            } else if (matchedphysWord.includes('electromagnetism')) {
                                botResponse = "Electromagnetism is a branch of physics involving the study of the electromagnetic force, a type of physical interaction that occurs between electrically charged particles.";
                            } else if (matchedphysWord.includes('gravity')) {
                                botResponse = "Gravity is the force by which a planet or other body draws objects toward its center. The force of gravity keeps all of the planets in orbit around the sun.";
                            } else if (matchedphysWord.includes('force')) {
                                botResponse = "In physics, a force is any interaction that, when unopposed, will change the motion of an object. A force can cause an object with mass to change its velocity.";
                            } else if (matchedphysWord.includes('energy')) {
                                botResponse = "Energy is the quantitative property that must be transferred to an object to perform work on, or to heat, the object. It is conserved and comes in various forms, such as kinetic, potential, thermal, and electrical energy.";
                            } else if (matchedphysWord.includes('momentum')) {
                                botResponse = "Momentum is the product of the mass and velocity of an object. It is a vector quantity, possessing both magnitude and direction, and is conserved in isolated systems.";
                            } else if (matchedphysWord.includes('velocity')) {
                                botResponse = "Velocity is the speed of something in a given direction. It is a vector quantity, meaning it has both magnitude and direction.";
                            } else if (matchedphysWord.includes('acceleration')) {
                                botResponse = "Acceleration is the rate of change of velocity of an object. It is a vector quantity and is measured in meters per second squared (m/s²).";
                            } else if (matchedphysWord.includes('mass')) {
                                botResponse = "Mass is a measure of the amount of matter in an object, typically measured in kilograms or grams. It is not dependent on gravity and remains constant regardless of location.";
                            } else if (matchedphysWord.includes('wave')) {
                                botResponse = "A wave is a disturbance that travels through a medium, transporting energy from one location to another without transporting matter. Examples include sound waves, light waves, and water waves.";
                            } else if (matchedphysWord.includes('particle')) {
                                botResponse = "A particle is a small localized object to which can be ascribed several physical properties such as volume or mass. Particles can be atoms, molecules, or even smaller components like protons, neutrons, and electrons.";
                            } else if (matchedphysWord.includes('atom')) {
                                botResponse = "An atom is the smallest unit of ordinary matter that forms a chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms.";
                            } else if (matchedphysWord.includes('molecule')) {
                                botResponse = "A molecule is an electrically neutral group of two or more atoms held together by chemical bonds. Molecules are the smallest units of chemical compounds that can take part in a chemical reaction.";
                            } else if (matchedphysWord.includes('proton')) {
                                botResponse = "A proton is a subatomic particle, symbol p or p⁺, with a positive electric charge of +1e elementary charge. Protons are found in the nucleus of every atom.";
                            } else if (matchedphysWord.includes('neutron')) {
                                botResponse = "A neutron is a subatomic particle, symbol n or n⁰, with no electric charge and a mass slightly larger than that of a proton. Neutrons are found in the nucleus of an atom.";
                            } else if (matchedphysWord.includes('electron')) {
                                botResponse = "An electron is a subatomic particle, symbol e⁻ or β⁻, with a negative electric charge. Electrons are found in all atoms and are the primary carrier of electricity in solids.";
                            } else if (matchedphysWord.includes('photon')) {
                                botResponse = "A photon is a type of elementary particle, the quantum of the electromagnetic field including electromagnetic radiation such as light, and the force carrier for the electromagnetic force.";
                            } else if (matchedphysWord.includes('neutrino')) {
                                botResponse = "A neutrino is a neutral subatomic particle with a mass close to zero and half-integer spin, rarely interacting with normal matter. Neutrinos are produced in nuclear reactions such as those in the sun.";
                            } else if (matchedphysWord.includes('quark')) {
                                botResponse = "A quark is a type of elementary particle and a fundamental constituent of matter. Quarks combine to form composite particles called hadrons, the most stable of which are protons and neutrons.";
                            } else if (matchedphysWord.includes('string theory')) {
                                botResponse = "String theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings. It attempts to reconcile quantum mechanics and general relativity.";
                            } else if (matchedphysWord.includes('black hole')) {
                                botResponse = "A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it. Black holes are thought to form from the remnants of massive stars that collapse under their own gravity.";
                            } else if (matchedphysWord.includes('singularity')) {
                                botResponse = "In physics, a singularity is a point in spacetime where gravitational forces cause matter to have an infinite density and zero volume. Singularities are found at the center of black holes.";
                            } else if (matchedphysWord.includes('big bang')) {
                                botResponse = "The Big Bang theory is the prevailing cosmological model for the observable universe's origin and evolution. It describes how the universe expanded from a very high-density and high-temperature state.";
                            } else if (matchedphysWord.includes('cosmology')) {
                                botResponse = "Cosmology is the scientific study of the large-scale properties of the universe as a whole. It involves the study of the origins, evolution, and eventual fate of the universe.";
                            } else if (matchedphysWord.includes('entropy')) {
                                botResponse = "Entropy is a measure of the disorder or randomness in a system. In thermodynamics, it is a central concept that quantifies the number of possible microscopic configurations of a thermodynamic system.";
                            } else if (matchedphysWord.includes('fission')) {
                                botResponse = "Nuclear fission is the process by which a large atomic nucleus splits into two smaller nuclei, releasing a significant amount of energy. This process is used in nuclear reactors and atomic bombs.";
                            } else if (matchedphysWord.includes('fusion')) {
                                botResponse = "Nuclear fusion is the process by which two light atomic nuclei combine to form a heavier nucleus, releasing a large amount of energy. This process powers the sun and other stars.";
                            } else if (matchedphysWord.includes('radioactivity')) {
                                botResponse = "Radioactivity is the process by which unstable atomic nuclei lose energy by emitting radiation. This spontaneous emission can include alpha particles, beta particles, and gamma rays.";
                            } else if (matchedphysWord.includes('half-life')) {
                                botResponse = "Half-life is the time required for half of the radioactive atoms in a sample to decay. It is a measure of the stability of a radioactive isotope and is used in dating ancient objects.";
                            } else if (matchedphysWord.includes('magnetism')) {
                                botResponse = "Magnetism is a class of physical phenomena mediated by magnetic fields, which arise from the motion of electric charges. It includes the force that causes magnets to attract or repel each other.";
                            } else if (matchedphysWord.includes('superconductivity')) {
                                botResponse = "Superconductivity is a phenomenon in which a material can conduct electricity without resistance when it is cooled below a certain temperature. It has applications in medical imaging and quantum computing.";
                            } else if (matchedphysWord.includes('crystallography')) {
                                botResponse = "Crystallography is the study of crystal structures and their properties. It is used to determine the arrangement of atoms within solids and has applications in chemistry, physics, and biology.";
                            } else if (matchedphysWord.includes('fluid dynamics')) {
                                botResponse = "Fluid dynamics is the study of the movement of liquids and gases. It is a subdiscipline of fluid mechanics and has applications in engineering, meteorology, and medicine.";
                            } else if (matchedphysWord.includes('plasma')) {
                                botResponse = "Plasma is one of the four fundamental states of matter, consisting of highly ionized gas with nearly equal numbers of positive and negative charges. It is found in stars, lightning, and neon lights.";
                            } else if (matchedphysWord.includes('solid')) {
                                botResponse = "A solid is one of the four fundamental states of matter characterized by structural rigidity and resistance to changes in shape or volume. Solids have a fixed shape and fixed volume.";
                            } else if (matchedphysWord.includes('liquid')) {
                                botResponse = "A liquid is a nearly incompressible fluid that conforms to the shape of its container but retains a constant volume independent of pressure. Liquids have a definite volume but no fixed shape.";
                            } else if (matchedphysWord.includes('gas')) {
                                botResponse = "A gas is one of the four fundamental states of matter consisting of particles that have neither a defined volume nor defined shape. Gases expand to fill any container uniformly.";
                            } else if (matchedphysWord.includes('matter')) {
                                botResponse = "Matter is any substance that has mass and takes up space by having volume. Matter consists of atoms and molecules and exists in various states, including solid, liquid, gas, and plasma.";
                            } else if (matchedphysWord.includes('antimatter')) {
                                botResponse = "Antimatter is composed of antiparticles, which have the same mass as particles of ordinary matter but opposite charges. When matter and antimatter come into contact, they annihilate each other.";
                            } else if (matchedphysWord.includes('dark matter')) {
                                botResponse = "Dark matter is a form of matter thought to account for approximately 85% of the matter in the universe. It does not emit or interact with electromagnetic radiation, making it invisible and detectable only through its gravitational effects.";
                            } else if (matchedphysWord.includes('dark energy')) {
                                botResponse = "Dark energy is a mysterious form of energy that makes up about 68% of the universe and is responsible for its accelerated expansion. Its nature remains one of the biggest questions in cosmology.";
                            } else if (matchedphysWord.includes('universe')) {
                                botResponse = "The universe is all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy. It is governed by physical laws and constants.";
                            } else if (matchedphysWord.includes('multiverse')) {
                                botResponse = "The multiverse is a hypothetical group of multiple universes, including the universe we live in. These universes together comprise everything that exists: the entirety of space, time, matter, energy, information, and the physical laws and constants that describe them.";
                            } else if (matchedphysWord.includes('space-time')) {
                                botResponse = "Space-time is the four-dimensional continuum in which all events occur and all things exist, consisting of three dimensions of space and one of time. It is the framework used in the theory of relativity.";
                            } else if (matchedphysWord.includes('dimension')) {
                                botResponse = "In physics, dimensions refer to the structure of space-time, where physical phenomena occur. Commonly known dimensions are length, width, height, and time, but theories such as string theory suggest additional spatial dimensions.";
                            } else if (matchedphysWord.includes('wave-particle duality')) {
                                botResponse = "Wave-particle duality is the concept in quantum mechanics that every particle or quantum entity can exhibit both wave and particle properties. This duality is a central concept of quantum mechanics.";
                            } 
    return botResponse;
}
