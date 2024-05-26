function handleBotDetails(botQns) {
    let botResponse = "";
        if (botQns === 'your name' || botQns === 'what is your name') {
            botResponse = 'My name is ChatNMG, your friendly assistant!';
        } else if (botQns === 'who are you') {
            botResponse = 'I am ChatNMG, a virtual assistant here to help you with your queries.';
        } else if (botQns === 'introduce yourself') {
            botResponse = 'Hello! I am ChatNMG, an AI-powered assistant created to assist you with various tasks and provide information.';
        } else if (botQns === 'who created you') {
            botResponse = 'I was created by a team of developers at NMG to assist users with their inquiries.';
        } else if (botQns === 'what do you do') {
            botResponse = 'I provide assistance with various questions and tasks, ranging from general information to specific queries you might have.';
        }

    return botResponse;
}

function handleUserDissatisfaction(phrase) {
    var lowerCasePhrase = phrase.toLowerCase();
    var botResponse = "";

    if (lowerCasePhrase.includes("not what i asked") || lowerCasePhrase.includes("not what i wanted") || lowerCasePhrase.includes("wrong answer")) {
        botResponse = "I'm sorry for the misunderstanding. Could you please provide more details or rephrase your question?";
    } else if (lowerCasePhrase.includes("misunderstood my question") || lowerCasePhrase.includes("didnt get my question") || lowerCasePhrase.includes("didnt understand")) {
        botResponse = "I apologize if I misunderstood. Could you please clarify your question?";
    } else if (lowerCasePhrase.includes("isnt helpful") || lowerCasePhrase.includes("not helpful") || lowerCasePhrase.includes("not useful")) {
        botResponse = "I'm sorry this wasn't helpful. Could you please provide more information or specify what you need help with?";
    } else if (lowerCasePhrase.includes("try again") || lowerCasePhrase.includes("can you try again") || lowerCasePhrase.includes("another try")) {
        botResponse = "Of course, let me try again. Could you please provide more details?";
    } else if (lowerCasePhrase.includes("incorrect") || lowerCasePhrase.includes("wrong") || lowerCasePhrase.includes("not correct")) {
        botResponse = "I apologize for the incorrect information. Could you please rephrase your question or give more details?";
    } else if (lowerCasePhrase.includes("didnt answer my question") || lowerCasePhrase.includes("didnt answer") || lowerCasePhrase.includes("no answer")) {
        botResponse = "I'm sorry if I didn't answer your question. Could you please clarify or provide more context?";
    }

    return botResponse;
}



function thankingStatementsResponse(thanking) {
    let botResponse = "";
  
    if (thanking.includes("thank you")|| thanking.includes("thank you very much")) {
      botResponse = "You're welcome! How can I assist you further?";
    } else if (thanking.includes("thanks for your help")) {
      botResponse = "You're welcome! I'm here to help.";
    } else if (thanking.includes("thanks so much") || thanking.includes("thanks a lot")) {
      botResponse = "You're welcome! Glad I could help. Is there anything else you need?";
    } else if (thanking.includes("thank you for your assistance")) {
      botResponse = "You're welcome! Let me know if there's anything else I can do for you.";
    } 
  
    return botResponse;
  }
  
function statementGreetingsResponse(greeting) {
    let botResponse = "";
    if (greeting.includes('good morning')) {
        botResponse = "Good morning! How can I assist you today?";
    } else if (greeting.includes('good afternoon')) {
        botResponse = "Good afternoon! How may I help you?";
    } else if (greeting.includes('good evening')) {
        botResponse = "Good evening! How can I assist you?";
    } else if (greeting.includes('how are you')) {
        botResponse = "I'm doing well, thank you for asking. How about you?";
    } else if (greeting.includes('nice to meet you') || greeting.includes('pleased to meet you') || greeting.includes('it\'s nice to meet you') || greeting.includes('it\'s a pleasure to meet you') || greeting.includes('nice meeting you') || greeting.includes('pleasure meeting you')) {
        botResponse = "Likewise! How can I assist you?";
    } else if (greeting.includes('good to see you') || greeting.includes('it\'s good to see you') || greeting.includes('nice to see you') || greeting.includes('pleased to see you') || greeting.includes('it\'s nice to see you') || greeting.includes('it\'s a pleasure to see you')) {
        botResponse = "It's great to see you too! How may I assist you?";
    } else if (greeting.includes('how\'s it going') || greeting.includes('how do you do')) {
        botResponse = "It's going well, thank you! How can I help?";
    }  else if (greeting.includes('how\'s your day')) {
            botResponse = "My day is going well, thank you for asking! How about yours?";
        } else if (greeting.includes('what\'s up') || greeting.includes('sup')) {
            botResponse = "Not much, just here to help you out! What can I do for you?";
        } else if (greeting.includes('how was your weekend')) {
            botResponse = "My weekend was relaxing, thank you for asking! How was yours?";
        } else if (greeting.includes('how\'s the weather')) {
            botResponse = "The weather is fine today! Anything else you'd like to know?";
        } else if (greeting.includes('what are you doing') || greeting.includes('what\'s going on') || greeting.includes('what\'s happening')) {
            botResponse = "I'm here to assist you. How can I help?";
        } else if (greeting.includes('tell me a joke')) {
            botResponse = "Sure! Why don't skeletons fight each other? They don't have the guts!";
        } else if (greeting.includes('tell me about yourself')) {
            botResponse = "I'm a chatbot designed to assist you with various tasks and answer your questions. How can I help you today?";
        } else if (greeting.includes('do you like music')) {
            botResponse = "Yes, I love music! What's your favorite genre?";
        } else if (greeting.includes('do you have any hobbies')) {
            botResponse = "I enjoy learning new things and helping people like you!";
        } else if (greeting.includes('what\'s your favorite movie') || greeting.includes('what movies do you like')) {
            botResponse = "I'm a fan of classic movies like The Shawshank Redemption. How about you?";
        } else if (greeting.includes('do you like sports')) {
            botResponse = "I'm not into sports myself, but I can help you find information about your favorite teams or events!";
        } else if (greeting.includes('do you have any pets')) {
            botResponse = "No, I'm just a virtual assistant! But I can help you with pet-related questions.";
        }
    return botResponse;
}

function biosWords(matchedbiosWord) {
    let botResponse = "";
    if (matchedbiosWord === "biology") {
                                botResponse = "Biology is the scientific study of living organisms and their interactions with the environment. It encompasses a wide range of topics, from the structure and function of cells and organisms to the processes that govern life at the molecular, cellular, and ecological levels.Here are some key aspects of biology:" +

                                    "/ 'Organismal Biology' / --- This branch of biology focuses on the structure, function, behavior, and evolution of individual organisms. It includes fields such as anatomy, physiology, and behavior." +

                                    "/ 'Cell Biology' / --- Cell biology is the study of the structure and function of cells, which are the basic units of life. It examines cellular processes such as metabolism, growth, division, and communication." +

                                    "/ 'Genetics and Molecular Biology' / --- Genetics is the study of genes, heredity, and variation in living organisms. Molecular biology focuses on the structure and function of biomolecules such as DNA, RNA, and proteins, as well as the mechanisms of gene expression and regulation." +

                                    "/ 'Ecology' / --- Ecology is the study of the relationships between organisms and their environment. It examines topics such as population dynamics, community structure, ecosystem function, and the interactions between organisms and their habitats." +

                                    "/ 'Evolutionary Biology' / --- Evolutionary biology explores the processes by which species change over time and the mechanisms of evolutionary adaptation. It includes fields such as evolutionary genetics, paleontology, and comparative anatomy." +

                                    "/ 'Microbiology' / --- Microbiology is the study of microorganisms, including bacteria, viruses, fungi, and protists. It examines their structure, function, diversity, ecology, and interactions with other organisms." +

                                    "/ 'Biotechnology' / --- Biotechnology applies biological knowledge and techniques to develop practical applications in fields such as medicine, agriculture, food production, and environmental conservation. What about Biology Interest You?";
                            } else if (matchedbiosWord === "vein that suppy") {

                                botResponse = `The veins that supply blood to the heart are known as coronary veins. These veins collect deoxygenated blood from the myocardium (heart muscle) and return it to the right atrium of the heart. The main coronary veins include:

/Great Cardiac Vein:/ - This vein runs alongside the left anterior descending artery (LAD) on the anterior surface of the heart. It collects blood from the front of the heart and the left side of the ventricles.

/Middle Cardiac Vein:/ - As the name suggests, this vein lies between the anterior and posterior surfaces of the heart and drains blood from the posterior surface of the left ventricle.

/Small Cardiac Vein:/ - This vein travels along the right side of the heart and drains blood from the right atrium and the right ventricle.

These coronary veins, along with several smaller veins, ultimately merge into a larger vein called the coronary sinus. The coronary sinus is located on the posterior surface of the heart and empties its contents into the right atrium. This process completes the circulation of deoxygenated blood back to the heart.`;
                            } else if (matchedbiosWord === 'action potential') {
                                botResponse = "An action potential is a rapid and transient change in the membrane potential of a neuron or muscle cell. It is a crucial mechanism for transmitting electrical signals along neurons and for communication between neurons in the nervous system.Here's how an action potential occurs:  '| Resting State: |' -  Neurons maintain a stable resting membrane potential, typically around -70 millivolts (mV), due to the unequal distribution of ions across the cell membrane. At rest, there are more sodium ions (Na+) outside the cell and more potassium ions (K+) inside the cell.  '| Depolarization: |' -  When a neuron receives a stimulus, such as a neurotransmitter binding to receptors on its dendrites, ion channels in the cell membrane open, allowing sodium ions to flow into the cell. This influx of positive charge depolarizes the membrane potential, making it less negative.  '| Threshold: |' -  If the depolarization reaches a certain threshold level, typically around -55 mV, voltage-gated sodium channels in the membrane open rapidly, causing a further influx of sodium ions. This rapid influx of positive charge triggers a rapid and large increase in membrane potential, known as the action potential. '| Rising Phase: |' -  During the rising phase of the action potential, the membrane potential becomes more positive, reaching a peak value of around +40 mV. This phase is driven by the influx of sodium ions into the cell. '| Repolarization: |' -  After reaching its peak, the membrane potential begins to repolarize as voltage-gated potassium channels open, allowing potassium ions to flow out of the cell. This efflux of positive charge restores the negative membrane potential. '| Hyperpolarization: |' -  Sometimes, the membrane potential temporarily becomes more negative than the resting potential during the repolarization phase. This phase is called hyperpolarization and occurs due to the continued efflux of potassium ions. '| Resting State: |' -  Once repolarization is complete, the cell returns to its resting membrane potential, ready to transmit another action potential if stimulated again.Action potentials are all-or-nothing events, meaning they occur at full amplitude once the threshold is reached and are independent of the intensity of the stimulus. They propagate along the axon of the neuron and are essential for the transmission of signals in the nervous system.";
                            } else if (matchedbiosWord === 'resting potential') {
                                botResponse = "Resting potential refers to the difference in electric charge between the inside and the outside of a neuron when the neuron is not actively sending a signal. In other words, it's the electrical potential difference across the cell membrane of a neuron when the neuron is at rest.At rest, the inside of the neuron is negatively charged relative to the outside. This difference in charge is typically around -70 millivolts (mV) and is maintained by the selective permeability of the cell membrane to different ions, particularly sodium (Na+), potassium (K+), and chloride (Cl-) ions.The resting potential is primarily established and maintained by the sodium-potassium pump, a protein complex embedded in the cell membrane that actively transports sodium ions out of the cell and potassium ions into the cell against their concentration gradients. Additionally, the cell membrane is selectively permeable to potassium ions, allowing them to pass more freely out of the cell than sodium ions pass into the cell.The resting potential is essential for the normal functioning of neurons. It provides the baseline electrical state from which changes in membrane potential, called action potentials, can occur. Action potentials are the basis for electrical signaling in the nervous system and are crucial for transmitting information between neurons and throughout the body.";
                            } else if (matchedbiosWord === 'neuroglia' || matchedbiosWord === 'glial cells' || matchedbiosWord === 'glia') {
                                botResponse = "Neuroglia, also known as glial cells or simply glia, are a type of cell found in the central nervous system (CNS) and the peripheral nervous system (PNS). They are often referred to as the supporting cells of the nervous system because they provide various functions that support and protect neurons, the primary functional cells of the nervous system.There are several types of neuroglial cells, each with distinct functions: 1. Astrocytes: These are star-shaped cells found in the CNS. Astrocytes play crucial roles in maintaining the chemical environment around neurons, regulating ion concentrations, providing metabolic support to neurons, and forming the blood-brain barrier, which controls the passage of substances between the blood and the brain. 2. Oligodendrocytes: In the CNS, oligodendrocytes are responsible for producing myelin, a fatty substance that forms a sheath around axons, the long projections of neurons. Myelin enhances the speed and efficiency of nerve impulse transmission. 3. Microglia: Microglia are the resident immune cells of the CNS. They function as the primary form of active immune defense in the central nervous system, scavenging for damaged neurons and infectious agents, and playing a role in inflammation and immune responses in the brain. 4. Ependymal Cells: These cells line the ventricles of the brain and the central canal of the spinal cord. Ependymal cells are involved in the production and circulation of cerebrospinal fluid, which cushions and protects the brain and spinal cord. 5. Schwann Cells: In the PNS, Schwann cells are the equivalent of oligodendrocytes and produce myelin sheaths around peripheral nerve fibers. They also play a role in nerve regeneration following injury.Neuroglia outnumber neurons in the nervous system and are essential for its proper functioning. While neurons are responsible for transmitting electrical signals, neuroglial cells provide structural support, regulate the chemical environment, insulate neurons, and participate in immune responses within the nervous system.";
                            } else if (matchedbiosWord === 'oomycota' || matchedbiosWord === 'water molds') {
                                botResponse = "Oomycota, also known as water molds, are a group of fungus-like microorganisms belonging to the kingdom Straminipila. Despite their superficial resemblance to fungi, they are not closely related and belong to a different taxonomic group. Oomycetes are typically found in water or in moist environments, and many are parasites or saprophytes, meaning they feed on decaying organic matter or living organisms.One of the most notorious oomycetes is Phytophthora infestans, the causal agent of late blight in potatoes and tomatoes, which famously caused the Irish Potato Famine in the 19th century. Other oomycetes can cause diseases in fish, algae, and other plants.Oomycota are characterized by their filamentous growth structure, similar to true fungi, but they have cell walls made of cellulose rather than chitin, which is characteristic of true fungi. This fundamental difference in cell wall composition distinguishes them from fungi and places them in a separate taxonomic group.";
                            } else if (matchedbiosWord === 'phyacophyta') {
                                botResponse = "Phaeophyta is a division of multicellular algae commonly known as brown algae. They are primarily marine organisms, found in coastal waters around the world. Brown algae exhibit a wide range of forms and sizes, from small filamentous species to large kelps that form underwater forests.Some characteristics of Phaeophyta include: 1. Color: They are called brown algae due to the presence of the pigment fucoxanthin, which gives them their characteristic brown color. 2. Structure: Brown algae typically have a complex structure with holdfasts for attachment, stipes for support, and blades for photosynthesis. 3. Habitat: They are predominantly found in cold temperate waters, though some species can also be found in tropical regions. 4. Ecological Importance: Brown algae play crucial roles in marine ecosystems, providing habitats and food for various organisms. Some species, like kelps, form extensive underwater forests that support diverse marine life. 5. Economic Significance: Brown algae have economic importance as a source of food, particularly in Asian cuisines where certain species are consumed as seaweed. They are also used in various industrial applications, such as the production of alginates, which are used in food processing and other industries. Overall, Phaeophyta represent an ecologically and economically significant group of marine organisms with diverse forms and functions in marine ecosystems.";
                            } else if (matchedbiosWord === 'phytophthora') {
                                botResponse = "Phytophthora is a genus of plant-pathogenic oomycetes (water molds) that includes many destructive species known to cause significant damage to crops, ornamental plants, and natural ecosystems. These organisms are responsible for various plant diseases, often leading to severe economic losses in agriculture and forestry.Here are some key characteristics and features of Phytophthora:" + '"' + " Host Range:" + '"' + " Phytophthora species have a broad host range and can infect a wide variety of plants, including vegetables, fruits, ornamentals, and trees. Different species of Phytophthora may have specific host preferences, but many are capable of causing disease in multiple plant species." + '"' + "Infection Mechanism:" + '"' + " Phytophthora species typically infect plants through their roots or by direct penetration of plant tissues. They produce motile zoospores that swim in water and can move through soil or surface water to reach plant roots. Once inside the plant, they colonize and spread through the vascular system, causing damage to root tissues and disrupting water and nutrient uptake." + '"' + "Disease Symptoms:" + '"' + " Symptoms of Phytophthora diseases vary depending on the host plant and the specific species involved. Common symptoms include wilting, yellowing or browning of leaves, root rot, stem lesions, and sudden death of plants. In some cases, characteristic water-soaked lesions may be visible on affected plant parts." + '"' + "Environmental Factors:" + '"' + " Phytophthora species thrive in warm, moist conditions, making them particularly problematic in regions with humid climates or during periods of high rainfall. Excessively wet or poorly drained soils provide favorable conditions for Phytophthora infection and spread." + '"' + "Management:" + '"' + " Managing Phytophthora diseases often involves a combination of cultural, chemical, and genetic control measures. Practices such as improving soil drainage, avoiding overwatering, rotating crops, and using resistant plant varieties can help reduce the risk of infection. Fungicides may be used to protect plants from infection, especially in high-risk situations.Some notable species of Phytophthora include Phytophthora infestans, the causative agent of late blight in potatoes and tomatoes, and Phytophthora ramorum, responsible for sudden oak death and ramorum blight in trees and shrubs. These and other Phytophthora species continue to pose significant challenges to agriculture, horticulture, and natural ecosystems worldwide.";
                            } else if (matchedbiosWord === "urea cycle" || matchedbiosWord === "urea") {
                                botResponse = "It looks like you are looling for " + '"' + "The urea cycle" + '"' + ", also known as the ornithine cycle, is a series of biochemical reactions that occur in the liver and some other tissues to remove excess nitrogen from the body. It plays a crucial role in the metabolism of nitrogen-containing compounds, particularly ammonia, which is toxic to the body if accumulated in excess.Here's an overview of the key steps involved in the urea cycle: " + '"' + "Formation of Carbamoyl Phosphate:" + '"' + " The cycle begins in the mitochondria of liver cells, where ammonia (NH3) and bicarbonate (HCO3-) react with ATP to form carbamoyl phosphate. This reaction is catalyzed by the enzyme carbamoyl phosphate synthetase I. " + '"' + "Formation of Citrulline:" + '"' + " Carbamoyl phosphate then combines with ornithine to form citrulline. This reaction is catalyzed by the enzyme ornithine transcarbamylase. Citrulline is transported out of the mitochondria into the cytosol." + '"' + "Formation of Argininosuccinate:" + '"' + " In the cytosol, citrulline combines with aspartate to form argininosuccinate. This reaction is catalyzed by the enzyme argininosuccinate synthetase." + '"' + "Formation of Arginine:" + '"' + " Argininosuccinate is then cleaved into arginine and fumarate by the enzyme argininosuccinate lyase. " + '"' + "Formation of Urea:" + '"' + " Arginine is hydrolyzed by arginase to produce urea and regenerate ornithine. Urea is a non-toxic compound that can be excreted by the kidneys in urine. " + '"' + "Regeneration of Ornithine:" + '"' + " Ornithine produced in the last step re-enters the mitochondria to participate in the next round of the urea cycle.The urea cycle serves to detoxify ammonia, which is produced during the catabolism of proteins and other nitrogen-containing compounds. Ammonia is converted to urea, which is much less toxic and can be safely excreted by the kidneys. The urea cycle is essential for maintaining nitrogen balance in the body and preventing the accumulation of toxic ammonia.";
                            } else if (matchedbiosWord === 'meninges') {
                                botResponse = "The meninges are three protective membranes that cover the brain and spinal cord. These membranes are essential for providing cushioning and support to the central nervous system. The three layers of the meninges are: First is " + '"' + "Dura mater:" + '"' + " This is the outermost layer, and it is a tough, fibrous membrane that provides protection to the brain and spinal cord, Second is " + '"' + "Arachnoid mater:" + '"' + " This is the middle layer, and it is a thin, delicate membrane that lies beneath the dura mater. It helps to cushion the central nervous system and contains cerebrospinal fluid, And Third is " + '"' + "Pia mater:" + '"' + "  This is the innermost layer, and it is a thin, transparent membrane that is closely adhered to the surface of the brain and spinal cord. It provides blood vessels to nourish the central nervous system, Together, the meninges help to protect the brain and spinal cord from injury and infection. Inflammation of the meninges, known as meningitis, can lead to serious health complications.";
                            } else if (matchedbiosWord === 'meningitis') {
                                botResponse = "Meningitis is a medical condition characterized by inflammation of the protective membranes covering the brain and spinal cord, known as the meninges. This inflammation is typically caused by an infection, which can be bacterial, viral, or fungal in nature. Meningitis can lead to symptoms such as severe headaches, fever, stiffness of the neck, sensitivity to light, and altered mental status. In severe cases, it can result in neurological complications and even death if not promptly treated. Bacterial meningitis is considered a medical emergency and requires immediate medical attention, whereas viral meningitis is often less severe and may resolve on its own with supportive care.";
                            } else if (matchedbiosWord === 'anatomy') {
                                botResponse = "Anatomy is the branch of science that deals with the study of the structure and organization of living organisms. It involves examining the physical structure of organisms, including their organs, tissues, and systems, and understanding how they function together to support life. Anatomy is essential for various fields such as medicine, biology, and physiology, as it provides fundamental knowledge about the body's form and function.";
                            } else if (matchedbiosWord === 'celebrospinal' || matchedbiosWord === 'celebro spinal' || matchedbiosWord === 'celebro' || matchedbiosWord === 'csf') {
                                botResponse = "Cerebrospinal fluid is a clear, colorless body fluid found in the brain and spinal cord. It is produced in the choroid plexuses of the ventricles of the brain and circulates through the ventricular system and the subarachnoid space surrounding the brain and spinal cord. The CSF plays several crucial roles, including:1.Protecting the Brain and Spinal Cord: It acts as a cushion, providing a protective buffer that absorbs shocks and impacts that could injure these vital structures. 2.Removing Waste Products: The CSF helps to remove waste products from the brain's metabolism.3.Transporting Nutrients: It serves as a medium for delivering nutrients to the brain and spinal cord while removing waste products.4.Maintaining Chemical Stability: CSF helps in regulating the chemical environment of the CNS, ensuring optimal conditions for nerve function.";
                            } else if (matchedbiosWord === 'celebro spinal' || matchedbiosWord === 'celebro' || matchedbiosWord === 'csf') {
                                var correctWord = "Celebro Spinal Fluid";
                                botResponse = "It looks like You are looking for " + `${correctWord}` + " if is that here is what I have: " + "  Cerebrospinal fluid is a clear, colorless body fluid found in the brain and spinal cord. It is produced in the choroid plexuses of the ventricles of the brain and circulates through the ventricular system and the subarachnoid space surrounding the brain and spinal cord. The CSF plays several crucial roles, including:1.Protecting the Brain and Spinal Cord: It acts as a cushion, providing a protective buffer that absorbs shocks and impacts that could injure these vital structures. 2.Removing Waste Products: The CSF helps to remove waste products from the brain's metabolism.3.Transporting Nutrients: It serves as a medium for delivering nutrients to the brain and spinal cord while removing waste products.4.Maintaining Chemical Stability: CSF helps in regulating the chemical environment of the CNS, ensuring optimal conditions for nerve function.";
                            } else if (matchedbiosWord === 'staphylococcus' || matchedbiosWord === 'staphalococcus' || matchedbiosWord === 'aureus' || matchedbiosWord === 'staphylo') {
                                botResponse = "Staphylococcus aureus is a bacterium that can cause a variety of infections in humans. Some of the diseases caused by Staphylococcus aureus include: Skin Infections: Staphylococcus aureus can cause skin infections such as boils, cellulitis, impetigo, and folliculitis.1.Wound Infections: Staphylococcus aureus can infect wounds, leading to localized infections and potentially more severe infections if the bacteria enter the bloodstream.2.Pneumonia: Staphylococcus aureus can cause pneumonia, particularly in individuals with weakened immune systems or underlying respiratory conditions.3.Bacteremia: Staphylococcus aureus bacteremia is a bloodstream infection that can occur when the bacteria enter the bloodstream, leading to potentially life-threatening conditions such as sepsis.4.Endocarditis: Staphylococcus aureus can infect the lining of the heart chambers and valves, leading to endocarditis, which is a serious and potentially fatal condition.5.Toxic Shock Syndrome (TSS): Staphylococcus aureus can produce toxins that can cause toxic shock syndrome, a rare but potentially life-threatening condition characterized by fever, rash, low blood pressure, and multiple organ failure.6.Food Poisoning: Staphylococcus aureus can produce heat-stable toxins that can cause food poisoning when contaminated food is ingested. Symptoms of staphylococcal food poisoning include nausea, vomiting, diarrhea, and abdominal cramps.";
                            } else if (matchedbiosWord === 'physiology') {
                                botResponse = "`Physiology` is a branch of biology dealing with the processes and activities by which life is carried on and which are special features of the functioning of living things, tissues, and cells.";
                            } else if (matchedbiosWord === 'urine') {
                                botResponse = "I hope you are looking for the urine formation... So, `Urine formation` is a very important process of the body to remove waste and toxic products after filtration. What is the definition of urine formation? Urine is the human body's liquid waste that is made up of urea, uric acid, salts, water, and other waste products that are produced by the body's metabolic activities...... The kidneys filter unwanted substances from the blood and produce urine to excrete them. There are 3 main steps of urine formation: Glomerular filtration, Reabsorption Secretion. These processes ensure that only waste and excess water are removed from the body.";
                            }
     return botResponse;
                        
}

function physicsWords(matchedphysWord) {
    let botResponse = "";
    if(matchedphysWord) {
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
                            }
    return botResponse;
}


function mathWords(matchedmathWord) {
    let botResponse = "";
    if(matchedmathWord) {
                                botResponse = `Mathematics is the study of numbers, quantity, structure, space, and change. It provides a framework for understanding patterns, relationships, and properties of objects and phenomena in the natural and abstract world. Mathematics is often described as the language of science because of its role in describing and explaining the laws of nature.

Key branches of mathematics include:

/ Arithmetic: /  Arithmetic deals with basic operations such as addition, subtraction, multiplication, and division, as well as the properties of numbers.

/ Algebra: /  Algebra studies symbols and the rules for manipulating them. It includes topics such as equations, inequalities, polynomials, and functions.

/ Geometry: /  Geometry is the study of shapes, sizes, and properties of space. It includes topics such as points, lines, angles, polygons, and three-dimensional figures.

/ Calculus: / Calculus deals with rates of change and accumulation. It includes differential calculus, which studies rates of change and slopes of curves, and integral calculus, which deals with areas under curves and accumulation of quantities.

/ Probability and Statistics: /  Probability and statistics deal with the likelihood of events and the analysis of data. Probability theory studies random phenomena, while statistics involves collecting, organizing, analyzing, and interpreting data.

/ Number Theory: /  Number theory explores the properties of integers and their relationships. It includes topics such as prime numbers, divisibility, and modular arithmetic.

/ Discrete Mathematics: / Discrete mathematics studies countable and distinct objects. It includes topics such as combinatorics, graph theory, and logic.

Mathematics is fundamental to many fields, including science, engineering, economics, computer science, and finance. It provides tools and techniques for solving problems, making predictions, and understanding complex systems. Moreover, mathematics has practical applications in everyday life, from budgeting and finance to cooking and home improvement.`;
                            }
    return botResponse;
}
function civicsWords(matchedcivicWord) {
    let botResponse = "";
    botResponse = `Civics is the branch of political science that deals with the rights and duties of citizens, as well as the functioning of government and civic affairs. It encompasses the study of government structures, political institutions, public policy, and the rights and responsibilities of individuals within society. Civics education aims to promote civic engagement, political literacy, and active participation in democratic processes.

Key topics in civics include:

/Government Structures:/ - Civics examines different forms of government, such as democracy, monarchy, republic, and dictatorship, and their organizational structures at local, national, and international levels.

/Political Institutions:/ - It explores the roles and functions of political institutions, including the executive, legislative, and judicial branches of government, as well as other entities such as political parties, interest groups, and electoral systems.

/Constitutional Law:/ - Civics education covers the principles and provisions of constitutions, including fundamental rights and freedoms, separation of powers, checks and balances, and the rule of law.

/Citizenship:/ - Civics teaches the rights, responsibilities, and obligations of citizenship, including voting, participating in public life, respecting the rights of others, obeying laws, paying taxes, and serving on juries.

/Public Policy:/ - It examines the process of policymaking, including the formulation, implementation, and evaluation of public policies on issues such as education, healthcare, immigration, the environment, and social welfare.

/Civil Rights and Liberties:/ - Civics addresses civil rights and liberties, including freedom of speech, assembly, religion, and the press, as well as the right to privacy, due process, equal protection under the law, and non-discrimination.

/Political Ideologies:/ - It explores different political ideologies, such as liberalism, conservatism, socialism, and libertarianism, and their influence on public opinion, political parties, and policy debates.

/Global Citizenship:/ - Civics increasingly includes a focus on global citizenship, emphasizing the interconnectedness of nations and the importance of addressing global challenges such as human rights, environmental sustainability, poverty, and conflict resolution.

Civics education plays a vital role in promoting civic engagement, fostering informed and responsible citizenship, and sustaining democratic societies. It empowers individuals to understand their rights and responsibilities, participate in civic life, advocate for social change, and contribute to the common good. Through civics education, individuals develop critical thinking skills, political awareness, and a sense of civic identity, which are essential for active participation in democratic decision-making and shaping the future of their communities and nations.
`;

    return botResponse;
}



function entertainWords(matchedentertainWord) {
    let botResponse = "";
    if (matchedentertainWord === 'music') {
                                botResponse = "According to what I last trained on in 2024, Music is an art of sound in time that expresses ideas and emotions in significant forms through the elements of rhythm, melody, harmony, and color. the tones or sounds employed, occurring in single line (melody) or multiple lines (harmony), and sounded or to be sounded by one or more voices or instruments, or both.";
                            } else if (matchedentertainWord === 'nana' || matchedentertainWord === 'falling' || matchedentertainWord === 'kinyerezi' || matchedentertainWord === 'mpenzi' || matchedentertainWord === 'mtazamaji' || matchedentertainWord === 'kope') {
                                if (matchedentertainWord === 'nana') {
                                    var correctWord = "Mr. Nana";
                                    botResponse = correctWord + " is an east africa music artist. coming from Tanzania and one of the artist that made some smash hit songs like : kinyerezi and now has his own recently song called Falling";
                                } else if (matchedentertainWord === 'falling') {
                                    var correctWord = "Mr. Nana";
                                    botResponse = "It looks like you are looking for the " + ' "' + "Falling" + '" ' + " from " + correctWord + " is one among his song! but also he is an east africa music artist. coming from Tanzania and one of the artist that made some smash hit songs";
                                } else if (matchedentertainWord === 'Kinyerezi') {
                                    var correctWord = "Mr. Nana";
                                    botResponse = "It looks like you are looking for the " + ' "' + "kinyerezi" + '" ' + " from " + correctWord + " is one among his song! but also he is an east africa music artist. coming from Tanzania and one of the artist that made some smash hit songs";
                                } else if (matchedentertainWord === 'mpenzi') {
                                    var correctWord = "Mr. Nana";
                                    botResponse = "It looks like you are looking for the " + ' "' + "Mpenzi Mtazamaji" + '" ' + " from " + correctWord + " is one among his song! but also he is an east africa music artist. coming from Tanzania and one of the artist that made some smash hit songs";
                                } else if (matchedentertainWord === 'mtazamaji') {
                                    var correctWord = "Mr. Nana";
                                    botResponse = "It looks like you are looking for the " + ' "' + "Mpenzi Mtazamaji" + '" ' + " from " + correctWord + " is one among his song! but also he is an east africa music artist. coming from Tanzania and one of the artist that made some smash hit songs";
                                } else if (matchedentertainWord === 'kope') {
                                    var correctWord = "Mr. Nana";
                                    botResponse = "It looks like you are looking for the " + ' "' + "Kope Juu ya Kope" + '" ' + " from " + correctWord + " is one among his song! but also he is an east africa music artist. coming from Tanzania and one of the artist that made some smash hit songs";
                                }
                            } else if (matchedentertainWord === 'shirazi' || matchedentertainWord === 'kaka' || matchedentertainWord === 'shiraz') {
                                if (matchedentertainWord === 'shirazi') {
                                    var correctWord = "Kaka Shirazi";
                                    botResponse = '"' + correctWord + '"' + " is a rising comedian from East Africa, and gearing up to bring laughter with his new comedic style. Hailing from Newala Mtwara, Tanzania, in the southern region, he stands out as one of the area's few comedians. " + '"' + correctWord + '"' + " is his stage name,but full name known  as Shirazi Ibrahim Bakari, this emerging comedian from East Africa is ready to bring joy with his fresh comedic style.Currently residing in Dar es Salaam, Shirazi is eagerly preparing to debut his latest work on April 15th this year, promising to entertain audiences with his unique humor";
                                } else if (matchedentertainWord === 'kaka' || matchedentertainWord === 'shiraz') {
                                    var correctWord = "Kaka Shirazi";
                                    botResponse = "It looks like you are looking for the " + '"' + correctWord + '?"' + " okey if is that, " + '"' + correctWord + '"' + " is his satge name, but his real full name is Shirazi Ibrahim Bakari. he is an up-and-coming comedian from East Africa, is set to bring laughter with his fresh comedic style. Originally from Newala Mtwara, Tanzania, in the southern region, he stands out as one of the few comedians from that area. Now living in Dar es Salaam, Shirazi is excited to share his latest work on April 15th this year, promising lots of laughs.";
                                }
                            } else if (matchedentertainWord === 'alikiba' || matchedentertainWord === 'ali kiba' || matchedentertainWord === 'ali' || matchedentertainWord === 'kiba') {
                                if (matchedentertainWord === 'alikiba' || matchedentertainWord === 'ali kiba') {
                                    botResponse = "Ali Saleh Kiba, better known by his stage name Ali Kiba or Alikiba, is a Tanzanian singer, songwriter, and actor. He is one of the most prominent and successful musicians in East Africa. Alikiba's music career began in the early 2000s, and he quickly rose to fame with his distinctive voice, catchy melodies, and energetic performances. Alikiba is known for his versatility in music genres, including Bongo Flava (a genre that blends Tanzanian hip hop with traditional Tanzanian music), R&B, Afrobeat, and dancehall. His songs often feature themes of love, romance, and everyday life experiences.Some of Alikiba's most popular songs include 'Mwana' 'Chekecha Cheketua,' 'Seduce Me,' and 'Aje.' He has released several successful albums and singles throughout his career, earning him numerous awards and accolades in the East African music industry.In addition to his music career, Alikiba has also ventured into acting, appearing in Tanzanian films and television series.Alikiba's influence extends beyond Tanzania, with his music gaining popularity across Africa and beyond. He remains one of the most respected and celebrated artists in East Africa, known for his talent, charisma, and contributions to the music industry.";
                                } else if (matchedentertainWord === 'ali') {
                                    botResponse = "It seems like you're referring to the name 'Ali' without specifying further context. 'Ali' is a common name used in various cultures and regions around the world. It can be a given name or a surname. Popularly,It seems like you're referring to Ali Kiba, the Tanzanian singer and musician. Is there anything specific you'd like to know about him or his music? Feel free to ask!"
                                } else if (matchedentertainWord === 'kiba') {
                                    botResponse = "'Kiba' is often used as a nickname for Ali Saleh Kiba, the Tanzanian singer and musician commonly known as Ali Kiba or Alikiba. He is a prominent figure in East African music, known for his versatile musical style and catchy songs. If you have any more questions about Ali Kiba or his music, feel free to ask!"
                                }
                            } else if (matchedentertainWord === 'thom' || matchedentertainWord === 'sechuma') {
                                botResponse = "Thom Sechuma is an stage name as gospel artist... His full name is Thomas Allen Sechuma who is now living  in Dodoma, Tanzania, a vibrant city known for its rich culture and bustling atmosphere. From a young age, Thom showed a deep passion for music and a natural talent for singing. Growing up in a household filled with gospel music, he was inspired by the powerful messages and soul-stirring melodies that filled the air." +

                                    "As Thom pursued his love for music, he quickly gained recognition in the local music scene for his soulful voice and heartfelt lyrics. With his stage name, Thom Sechuma, he embarked on a journey to share his faith and inspire others through his music." +

                                    "One of Thom's most recent songs, 'Itakuwa Shwari,' is a poignant reflection of his unwavering faith and trust in God's plan. The song's lyrics speak of finding peace and comfort in times of struggle, knowing that God is always by our side, guiding and protecting us. With its uplifting melody and heartfelt message, 'Itakuwa Shwari' has resonated deeply with listeners, offering hope and encouragement in difficult times." +

                                    "In addition to 'Itakuwa Shwari' Thom has released several other inspiring songs that have touched the hearts of his fans. 'Rafiki Yangu' celebrates the power of friendship and the joy of companionship, while 'Mwanzo Mpya' speaks of new beginnings and the promise of a brighter future. 'Tupendane' is a heartfelt anthem of love and unity, reminding us of the importance of compassion and understanding in our relationships with others." +

                                    "Through his music, Thom Sechuma has become not only a talented artist but also a beacon of hope and inspiration for his community. His songs uplift the spirit, bring people together, and remind us of the power of faith, love, and perseverance in the face of adversity. As he continues to share his gift with the world, Thom's music will undoubtedly touch the hearts and souls of many, leaving a lasting legacy of faith, hope, and love.";
                            }
    return botResponse;
}

function techWords(matchedtechWord) {
    let botResponse = "";
    if(matchedtechWord ==="gpt" || matchedtechWord ==="chat gpt" ){ 
    botResponse = " ChatGPT is like a super-smart version of a computer program called GPT. It's made to chat with people and understand what they're saying. Think of it as having a conversation with a really clever friend!While GPT is already pretty smart, ChatGPT takes it a step further by being specifically trained to talk like a human in conversations. It's great at understanding what you say and responding in a way that makes sense, just like a real person would.It can chat about all sorts of things, answer questions, give advice, and more. Its secret sauce comes from learning lots of stuff from the internet, so it knows a ton of things to talk about.verall, ChatGPT is a powerful tool for making chatbots and virtual assistants that can have realistic conversations with people. It makes talking to computers feel more like talking to a friend, which makes the experience more fun and engaging for users.";
     }
    return botResponse;
}

function economicWords(matchedeconomicWord) {
    let botResponse = "";
    if (matchedeconomicWord === 'mechanisms for business' || matchedeconomicWord === 'enterprises' || matchedeconomicWord === 'costs' || matchedeconomicWord === 'production' || matchedeconomicWord === 'reduce') {
                                botResponse = `It looks like you are looking for "Various Mechanisms to which business enterprises may reduce production cost", If is that this is what I have: Reducing the cost of production is a critical goal for businesses to improve profitability and remain competitive in the market. Here are seven various mechanisms that businesses can employ to reduce their production costs: "Efficient Supply Chain Management: " Optimizing the supply chain can lead to cost savings by reducing inventory holding costs, minimizing transportation expenses, and improving overall efficiency. Businesses can achieve this by streamlining processes, negotiating better terms with suppliers, and adopting advanced inventory management techniques like Just-In-Time (JIT) inventory. "Investment in Technology and Automation: " Implementing technology and automation can enhance productivity, reduce labor costs, and minimize errors in production processes. Automation of repetitive tasks, such as assembly line operations or inventory tracking, can significantly lower production costs while improving quality and consistency. "Energy Efficiency Measures: " Energy costs can be a significant expense for many businesses. Implementing energy-efficient technologies, such as LED lighting, energy-efficient machinery, and renewable energy sources like solar or wind power, can lead to substantial savings on utility bills and reduce the overall environmental impact of operations. "Lean Manufacturing Principles:" Adopting lean manufacturing principles focuses on eliminating waste and optimizing processes to increase efficiency. Techniques such as Value Stream Mapping (VSM), Kaizen, and 5S can help identify and eliminate inefficiencies, reduce cycle times, and improve overall productivity. "Outsourcing and Offshoring: " Outsourcing non-core functions or offshoring production to lower-cost regions can be an effective strategy for reducing labor and operational costs. By leveraging the cost advantages offered by offshore labor markets, businesses can achieve significant savings while maintaining quality standards. "Negotiating with Suppliers: " Negotiating favorable terms with suppliers, including discounts, bulk purchase agreements, and extended payment terms, can help lower the cost of raw materials and components. Building strong relationships with suppliers and exploring alternative sourcing options can further drive down procurement costs. "Quality Improvement Initiatives:" Improving product quality can lead to cost savings by reducing defects, rework, and warranty claims. Investing in quality management systems, employee training, and continuous improvement programs can enhance product reliability and customer satisfaction while minimizing costs associated with defects and returns.By implementing these mechanisms effectively, businesses can achieve substantial cost reductions while maintaining or improving product quality and customer satisfaction. However, it's essential to carefully evaluate each strategy in the context of specific business goals, market conditions, and operational constraints to ensure long-term success.`;
                            } else if (matchedeconomicWord === "excellent customer") {
                                botResponse = `"Ensuring excellent customer service requires a strategic approach that focuses on understanding customer needs, empowering employees, and continuously improving processes. Here are some steps businesses can take to provide excellent customer service "Understand Customer Expectations:" Conduct market research, gather feedback, and analyze customer data to understand what customers expect from your products or services."Set Clear Service Standards:" Define clear service standards and expectations for your team, including response times, quality metrics, and communication guidelines."Empower Your Employees:" Invest in training and development to equip your employees with the skills, knowledge, and tools they need to deliver exceptional service. Empower them to make decisions and resolve issues independently."Create a Customer-Centric Culture:' Foster a culture that prioritizes customer satisfaction and emphasizes the importance of every customer interaction. Encourage employees to go above and beyond to meet customer needs."Provide Multichannel Support:" Offer support across multiple channels, including phone, email, chat, and social media, to meet customers wherever they are and provide a seamless experience."Implement Feedback Loops:" Establish processes for gathering feedback from customers at every touchpoint. Use this feedback to identify areas for improvement and make data-driven decisions."Resolve Issues Quickly and Proactively:" Address customer issues and complaints promptly and efficiently. Take ownership of problems, offer timely solutions, and follow up to ensure customer satisfaction.                                                                                                                                "Personalize the Customer Experience:" Use customer data to personalize interactions and tailor your products or services to individual preferences and needs. Show customers that you understand and value their unique requirements."+""+"'Measure Performance and KPIs:' Track key performance indicators (KPIs) such as customer satisfaction scores, response times, and resolution rates. Use these metrics to monitor performance and identify areas for improvement."+""+"'Celebrate Successes and Recognize Achievements:' Acknowledge and reward employees who deliver outstanding service. Celebrate successes and recognize achievements to reinforce a culture of excellence."Continuously Improve:' Regularly review and refine your customer service processes based on feedback, insights, and changing customer needs. Strive for continuous improvement to stay ahead of the competition."By following these steps and making customer service a top priority, businesses can create positive experiences for their customers, build loyalty, and drive long-term success.`;
                            } else if (matchedeconomicWord === 'active listening' || matchedeconomicWord === 'interactions' || matchedeconomicWord === 'interaction') {
                                botResponse = `Active listening is a critical skill in customer service interactions as it enables service providers to fully understand customer needs, concerns, and preferences. Here's how active listening can improve customer service interactions:
                            'Demonstrates Respect and Empathy:' Active listening involves giving the customer your full attention, showing that you respect and value their input. By actively listening to customers, service providers demonstrate empathy and understanding, which helps build rapport and trust.
                            'Clarifies Customer Needs and Concerns:' Through active listening, service providers can clarify and confirm customer needs and concerns. By asking probing questions and paraphrasing the customer's statements, service representatives can ensure they have a clear understanding of the issue at hand.
                            'Reduces Misunderstandings and Errors:' Active listening helps minimize misunderstandings and errors by ensuring that both parties are on the same page. By actively engaging with customers and seeking clarification when necessary, service providers can avoid misinterpretations and deliver accurate solutions.
                            'Enhances Problem-Solving Abilities:' Active listening enables service providers to gather relevant information and identify the root cause of customer issues. By actively engaging with customers and probing for additional details, service representatives can better diagnose problems and offer effective solutions.
                            'Fosters Collaboration and Cooperation:' Active listening fosters a collaborative relationship between the service provider and the customer. By actively involving customers in the problem-solving process and seeking their input, service representatives can build trust and cooperation.
                            'Increases Customer Satisfaction:' Customers appreciate being listened to and understood. By actively listening to their concerns and addressing them promptly and effectively, service providers can increase customer satisfaction and loyalty.
                            'Encourages Open Communication:' Active listening encourages open communication and dialogue between the service provider and the customer. By actively engaging with customers and encouraging them to express their thoughts and feelings, service representatives can create a positive and supportive service environment.
                            Overall, active listening is a powerful tool in customer service interactions that improves understanding, fosters collaboration, and enhances customer satisfaction. By developing active listening skills and applying them in customer interactions, service providers can build stronger relationships with customers and deliver exceptional service experiences.`;
                            } else if (matchedeconomicWord === 'empathy') {
                                botResponse = "Empathy plays a crucial role in customer service as it enables service providers to understand and relate to the feelings, emotions, and perspectives of their customers. Here's how empathy contributes to excellent customer service:" +

                                    "'Building Trust and Rapport:' When customers feel understood and valued, they are more likely to trust the company and develop a positive rapport with the service provider. Empathy creates a connection between the customer and the service representative, fostering a sense of trust and loyalty." +

                                    "'Effective Communication:' Empathetic service providers listen actively to customers, pay attention to their concerns, and respond in a way that acknowledges their emotions. This leads to more effective communication and helps resolve issues more efficiently."

                                "'Problem Resolution:' Empathy allows service providers to put themselves in the customer's shoes and understand the root cause of their problems or frustrations. By empathizing with the customer's situation, service representatives can offer appropriate solutions and address issues more effectively." +

                                    "'Reducing Customer Frustration:' Acknowledging and validating a customer's emotions can help de-escalate tense situations and reduce customer frustration. Empathetic responses demonstrate that the company cares about the customer's experience and is committed to finding a resolution." +

                                    "'Enhancing Customer Satisfaction:' Customers appreciate being treated with empathy and understanding. When their emotions are acknowledged and their concerns are addressed empathetically, they are more likely to feel satisfied with the service experience, even if the issue is not fully resolved." +

                                    "'Increasing Customer Loyalty:' Empathy builds emotional connections with customers, leading to increased loyalty and repeat business. Customers are more likely to return to companies where they feel understood, valued, and cared for." +

                                    "'Gaining Insights and Feedback:' Empathetic service providers are better able to empathize with customers' needs and preferences, gaining valuable insights into their experiences. This feedback can be used to improve products, services, and overall customer experience." +

                                    "In summary, empathy is a fundamental aspect of customer service that fosters trust, enhances communication, facilitates problem resolution, and ultimately leads to higher levels of customer satisfaction and loyalty. By prioritizing empathy in interactions with customers, businesses can create meaningful connections and deliver exceptional service experiences.";
                            }
    return botResponse;
}

function botWords(matchedbotWord) {
    let botResponse = "";
    if (matchedbotWord === 'nmg') {
    botResponse = "It seems like you're inquiring about the individual behind ChatNMG. ChatNMG is an innovative creation by Nurdin Mohamed, who stands as both the owner and the founder. His vision for ChatNMG was born out of his broader mission with nmgAI, emphasizing the development of advanced AI solutions. Furthermore, Nurdin Mohamed's entrepreneurial spirit doesn't stop with ChatNMG; he is also the proprietor of TechCity and NMG Company. These ventures underscore his commitment to pushing the boundaries in technology and AI, positioning him as a pivotal figure in these sectors. Through his leadership and vision, Nurdin Mohamed continues to contribute significantly to the tech landscape, driving forward with initiatives that blend innovation with practical applications.";
    } else if (matchedbotWord === 'nmgai') {
    botResponse = "NMGAI, developed in 2024, is an artificial intelligence system designed to assist people through chatbot interactions, giving rise to the generated entity known as ChatNMG.";
    }
    return botResponse;
}

function environmentWords(matchedenvirnWord) {
    let botResponse = "";
    if (matchedenvirnWord === "hse") {
                                botResponse = `"An HSE (Health, Safety, and Environment) plan is a comprehensive document that outlines an organization's approach to managing health, safety, and environmental risks within its operations. The primary purpose of an HSE plan is to ensure the well-being of employees, protect the environment, and comply with relevant laws and regulations.Typically, an HSE plan includes the following components` +
                                    `
/Introduction and Objectives:/ This section provides an overview of the HSE plan's purpose and outlines the organization's commitment to health, safety, and environmental protection.

/Policy Statement:/ The organization's official statement regarding its commitment to maintaining a safe and healthy work environment and minimizing its environmental impact.

/Responsibilities:/ Defines the roles and responsibilities of individuals and departments within the organization regarding HSE management.

/Risk Assessment and Hazard Identification:/ Describes the processes for identifying and assessing health, safety, and environmental risks associated with the organization's activities.

/Control Measures:/ Outlines the measures and procedures implemented to mitigate identified risks, including engineering controls, administrative controls, and personal protective equipment (PPE).

/Emergency Response and Preparedness:/ Details the organization's procedures for responding to emergencies such as accidents, spills, or natural disasters.

/Training and Competence:/ Specifies the training requirements for employees to ensure they have the necessary skills and knowledge to perform their tasks safely.

/Monitoring and Audit:/ Describes the methods for monitoring HSE performance, conducting audits, and evaluating the effectiveness of control measures.

/Communication:/ Outlines how the organization communicates HSE information to employees, contractors, and other stakeholders.

/Documentation and Record-Keeping:/ Specifies the requirements for documenting HSE activities, incidents, and compliance with regulations.

/Continuous Improvement:/ Establishes processes for reviewing and revising the HSE plan to incorporate lessons learned, new regulations, and best practices.

Overall, an HSE plan serves as a roadmap for promoting a culture of safety and environmental stewardship within an organization and helps ensure that health, safety, and environmental considerations are integrated into all aspects of its operations.`;
                            } else if (matchedenvirnWord === 'environmental' || matchedenvirnWord === 'social risk') {
                                botResponse = `Environmental and risk assessment are processes used to evaluate and mitigate potential risks and impacts associated with human activities on the environment. Here's a breakdown of each:

Environmental Assessment (EA):

"/Environmental assessment/" - is a systematic process for identifying, analyzing, and evaluating the potential environmental impacts of a proposed project, plan, program, or policy.
It aims to ensure that decision-makers consider the environmental effects when deciding whether to proceed with a project.
Environmental assessments typically involve the identification of potential impacts on various aspects of the environment, such as air quality, water resources, ecosystems, biodiversity, land use, and socio-economic factors.
The assessment may include gathering data, conducting studies, modeling environmental processes, and consulting with stakeholders.
The findings of the environmental assessment help decision-makers understand the potential environmental consequences of their actions and identify measures to avoid, minimize, or mitigate adverse impacts.
Risk Assessment:

"/Risk assessment/" - is a process used to identify, analyze, and evaluate potential risks associated with a particular activity, process, or situation.
It involves assessing the likelihood of specific hazards occurring and the potential consequences of those hazards.
Risk assessment considers both the probability of an adverse event happening and the severity of its consequences.
The goal of risk assessment is to provide decision-makers with information about potential risks so that they can make informed decisions to manage or control those risks effectively.
Risk assessment typically involves several steps, including hazard identification, exposure assessment, dose-response assessment, and risk characterization.
Risk assessment can be applied in various fields, including environmental management, public health, occupational safety, and product safety.
In summary, environmental assessment focuses on evaluating the environmental impacts of human activities, while risk assessment focuses on identifying and evaluating potential risks associated with those activities. Together, they provide valuable information to decision-makers to ensure that projects and activities are conducted in a manner that minimizes harm to the environment and human health.`;
                            }
    return botResponse;
}

function chemistryWords(matchedchemWord) {
    let botResponse = "";
    if (matchedchemWord === "chemistry") {
                                botResponse = `Chemistry is the scientific study of matter, its properties, composition, structure, and the changes it undergoes during chemical reactions. It is a fundamental branch of science that explores the interactions between atoms, molecules, and compounds to understand the behavior of substances and the underlying principles governing their transformations.

Key aspects of chemistry include:

/Matter:/ - Chemistry investigates the nature of matter, which comprises atoms and molecules. Matter can exist in various states, including solid, liquid, gas, and plasma.

/Elements and Compounds:/ - Chemistry classifies substances into elements and compounds. Elements are pure substances composed of only one type of atom, while compounds are substances composed of two or more different types of atoms chemically bonded together.

/Chemical Reactions:/ - Chemistry studies the mechanisms by which substances undergo chemical reactions, resulting in the formation of new substances with different properties. Chemical reactions involve the breaking and forming of chemical bonds.

/Atomic Structure:/ - Chemistry explores the structure of atoms, including the arrangement of subatomic particles such as protons, neutrons, and electrons within the atom. Understanding atomic structure is essential for explaining the properties and behavior of elements and compounds.

/Periodic Table:/ - Chemistry uses the periodic table as a framework for organizing elements based on their atomic number, electron configuration, and chemical properties. The periodic table provides valuable information about the relationships between different elements.

/Thermodynamics and Kinetics:/ - Chemistry encompasses the study of thermodynamics, which deals with the energy changes accompanying chemical reactions, and kinetics, which examines the rates of chemical reactions and the factors influencing reaction rates.

/Analytical Chemistry:/ - This branch of chemistry focuses on the qualitative and quantitative analysis of substances to identify their composition and concentration. Analytical techniques include spectroscopy, chromatography, and electrochemistry.

/Organic and Inorganic Chemistry:/ - Chemistry is divided into organic chemistry, which studies the structure, properties, and reactions of carbon-containing compounds, and inorganic chemistry, which focuses on the properties and behavior of inorganic substances.

/Biochemistry:/ - Biochemistry explores the chemical processes and substances occurring within living organisms. It investigates the structure and function of biomolecules such as proteins, nucleic acids, carbohydrates, and lipids.

/Environmental Chemistry:/ - This area of chemistry examines the interactions between chemical substances and the environment, including pollution, toxicology, and the impact of human activities on ecosystems.

Chemistry plays a crucial role in various scientific disciplines, industries, and everyday life, contributing to fields such as medicine, agriculture, materials science, energy production, and environmental protection.
`;
                            }
    return botResponse;
}

function streetWords(matchedStreetWord) {
    let botResponse = "";
    botResponse = `As of my last update in January 2024, "Wozaah" doesn't appear to be a widely recognized term or concept in a specific context. It's possible that "Wozaah" could be a name, brand, slang term, or reference to something specific in a particular community or culture. Without more context, it's challenging to provide a precise explanation of what "Wozaah" refers to. If you could provide more details or context, I'd be happy to try to help further!`;
    return botResponse;
}

function thankWords(matchedThankWord) {
    let botResponse = "";
    botResponse = `Oh, I'm glad to hear that it worked for you! Thank you for taking the time, and if you encounter any other issues, please feel free to ask, as I am ready to assist you. Welcome back, and don't hesitate to pose any questions you may have.`;
    return botResponse;
}

function kiswahiliWords(matchedswahiliWord) {
    let botResponse = "";
    if (matchedswahiliWord === "kiswahili") {
                                botResponse = `Kiswahili ni lugha ya Kiafrika inayotumiwa sana katika nchi za Afrika Mashariki na Kati, pamoja na sehemu za Kusini mwa Afrika. Ni moja ya lugha rasmi katika nchi kadhaa kama vile Tanzania, Kenya, Uganda, na Jamhuri ya Kidemokrasia ya Kongo. Kiswahili kinachukuliwa kama lugha ya mawasiliano na biashara katika eneo hilo na pia kimekuwa kikienea kimataifa kama lugha ya pili au ya tatu kwa idadi kubwa ya watu duniani.`;
                            } else if (matchedswahiliWord === "swahili") {
                                botResponse = `Inaonekana kama unataka kufahamu kuhusiana na neno "Kiswahili", kama ndivyo ... Kiswahili ni lugha ya Kiafrika inayotumiwa sana katika nchi za Afrika Mashariki na Kati, pamoja na sehemu za Kusini mwa Afrika. Ni moja ya lugha rasmi katika nchi kadhaa kama vile Tanzania, Kenya, Uganda, na Jamhuri ya Kidemokrasia ya Kongo. Kiswahili kinachukuliwa kama lugha ya mawasiliano na biashara katika eneo hilo na pia kimekuwa kikienea kimataifa kama lugha ya pili au ya tatu kwa idadi kubwa ya watu duniani.`;
                            } else if (matchedswahiliWord === "maneno") {
                                botResponse = `Maneno ni sehemu ndogo ya lugha ambayo ina maana na inaweza kutumika kujenga sentensi na kueleza mawazo. Kuna aina nyingi za maneno katika lugha, na kila aina ina majukumu yake katika ujenzi wa sentensi na maana ya mawasiliano. Hapa kuna baadhi ya aina za maneno:

[ "Nomino:" ] - Maneno yanayotaja vitu, watu, mahali au dhana, kama vile "kitabu", "mti", "msichana", na "furaha".
[ "Vitenzi:" ] - Maneno yanayoelezea vitendo, hali, au mchakato, kama vile "kula", "kwenda", "kucheza", na "kuimba".
[ "Vivumishi:" ] - Maneno yanayotumika kuelezea sifa au hali ya nomino, kama vile "nzuri", "kubwa", "nyekundu", na "mzuri".
[ "Vielezi:" ] - Maneno yanayotumika kuelezea jinsi, wakati, mahali au kiwango cha vitendo au vivumishi, kama vile "haraka", "vizuri", "hapa", na "sana".
[ "Vishazi:" ] - Maneno yanayotumika badala ya nomino, kama vile "yeye", "wao", "sisi", na "hizo".
[ "Viunganishi:" ] - Maneno yanayotumika kuunganisha maneno, sentensi au vishazi, kama vile "na", "au", "lakini", na "kwa sababu".
[ "Viwakilishi:"] - Maneno yanayotumika kuonyesha mahusiano kati ya nomino na maneno mengine katika sentensi, kama vile "kwa", "katika", "kwenye", na "kwa ajili ya".
[ "Vihisishi:" ] - Maneno ya kupasha hisia au mshangao, kama vile "ah!", "oh!", "hebu!", na "yey".
Hizi ni baadhi tu ya aina za maneno, na kila aina ina jukumu lake katika ujenzi wa lugha ya asili.`;
                            } else if (matchedswahiliWord === "vishazi") {
                                botResponse = `Vishazi ni aina ya maneno ambayo hutumiwa badala ya nomino katika sentensi ili kurejelea vitu au watu bila kuhitaji kutaja tena jina lake. Vishazi hufanya lugha iwe rahisi kwa kuzuia kurudia nomino mara kwa mara. Kuna aina kuu mbili za vishazi ambazo ni Vishazi huru - ("maneno ambayo hutumiwa pekee yake katika sentensi bila kufuatiwa na nomino") na vishazi tegemezi - ("maneno ambayo vinahitaji kuambatana na nomino ili kutoa maana kamili katika sentensi."). Vishazi pia vinaweza kuwekwa katika aina ndogo ndogo mbalimbali, zinazojumuisha:

/Vishazi vya Kibinafsi:/ - Hivi hutumiwa kumaanisha watu au kikundi cha watu. Mifano ni "mimi", "wewe", "yeye", "sisi", "ninyi", na "wao".

/Vishazi vya Kinachukuliwa:/ - Hivi hutumiwa kumaanisha vitu au dhana fulani. Mifano ni "hicho", "hiki", "huyo", "ile", "izo", "hayo", "vile", na "vya".

/Vishazi vya Kutaja :/ - Hivi hutumiwa kuelezea au kubainisha vitu au watu fulani. Mifano ni "huyu", "huyo", "hizi", "hizo", "hiyo", "ile", na "izo".

/Vishazi vya Kuuliza :/ - Hivi hutumiwa kuuliza maswali kuhusu vitu au watu. Mifano ni "nani", "nini", "wapi", "lini", "kwa nini", na "vipi".

/Vishazi vya Kutaja Kiasi:/ - Hivi hutumiwa kurejelea vitu au watu bila kuhitaji kutoa maelezo kamili. Mifano ni "mtu", "kitu", "watu", "vitu", "chache", "wengi", "kila mtu", na "kila kitu".

Kwa kila aina ya vishazi, kuna jukumu lake katika kufanya mawasiliano kuwa wazi na rahisi. Vishazi hufanya sentensi ziweze kueleweka zaidi kwa kuwahusu watu au vitu bila kuhitaji kutaja jina lake kila wakati.`
                            } else if (matchedswahiliWord === "huru") {
                                botResponse = `Vishazi huru ni aina ya maneno ambayo hutumiwa pekee yake katika sentensi bila kufuatiwa na nomino. Wanaweza kujitegemea na kutoa maana kamili katika sentensi. Hapa kuna mifano ya vishazi huru katika Kiswahili:

/Mimi:/ - Mfano, "Mimi nilienda dukani."

/Wewe:/ - Mfano, "Wewe ulifika saa ngapi?"

/ Yeye:/ - Mfano, "Yeye anaendelea vizuri."

/ Sisi: / - Mfano, "Sisi tumechoka sana leo."

/ Ninyi: / - Mfano, "Ninyi mnafanya kazi nzuri."

/ Wao: / - Mfano, "Wao walikuja kwa gari jekundu."

Katika sentensi hizi, vishazi huru ("mimi", "wewe", "yeye", "sisi", "ninyi", "wao") vinaweza kusimama peke yake na kutoa maana kamili bila kutegemea nomino yoyote. Hii ni tofauti na vishazi ambavyo vinahitaji kuambatana na nomino ili kutoa maana kamili.`
                            } else if (matchedswahiliWord === "tegemezi") {
                                botResponse = `Vishazi tegemezi ni aina ya maneno ambayo vinahitaji kuambatana na nomino ili kutoa maana kamili katika sentensi. Hayawezi kusimama peke yao kama vishazi huru. Hapa kuna baadhi ya vishazi tegemezi katika Kiswahili:

/ Anavyopenda: / - Mfano, "Juma anavyopenda michezo."

/ Walioandika: / - Mfano, "Wanafunzi walioandika mitihani vizuri watapata alama nzuri."

/ Wakifanya: / - Mfano, "Wakulima wakifanya kazi kwa bidii, watavuna mavuno mengi."

/ Waliochaguliwa: / - Mfano, "Wanasiasa waliochaguliwa wanahudumu kwa muda wa miaka mitano."

/ Wakati aliyefika: / - Mfano, "Wakati uliofika wa kufanya maamuzi ni sasa."

Katika sentensi hizi, vishazi kama "anavyopenda", "walioandika", "wakifanya", "waliochaguliwa", na "wakati aliyefika" vinaambatana na nomino ili kutoa maana kamili. Hivyo, hizi ni mifano ya vishazi tegemezi katika lugha ya Kiswahili.`
                            } else if (matchedswahiliWord === "neno") {
                                botResponse = `"Neno" - linaweza kumaanisha kitu au dhana fulani, ambayo inaweza kuelezea kwa maneno. Katika lugha, neno ni kitengo cha msingi cha lugha ambacho huleta maana au hujenga sentensi. Neno linaweza kuwa jina (kama "kitabu", "nyumba", au "mti"), kitenzi (kama "kula", "kwenda", au "kusoma"), sifa (kama "mrefu", "mzuri", au "mkali"), kielezi (kama "vizuri", "sana", au "pia"), au maneno mengine ambayo huleta maana au kazi katika lugha. Katika muktadha wa sarufi, neno linaweza kutumika kumaanisha kitu kimoja, au inaweza kurejelea kikundi cha maneno yanayofanya kazi pamoja kwa kusudi moja.`
                            } else if (matchedswahiliWord === "nomino") {
                                botResponse = `"Nomino" - ni jina lingine linalotumika kwa "kivumishi". Ni aina ya maneno ambayo hufafanua vitu, watu, mahali au dhana. Nomino inaweza kuwa kitu cha mwili (kama "gari", "mnyama", au "nyumba"), kiumbe hai (kama "mtu", "mbwa", au "ndege"), mahali (kama "jiji", "shule", au "bahari"), au dhana (kama "furaha", "upendo", au "amani"). Nomino inaweza kuwa na aina mbalimbali, kama nomino za kawaida (kama "kitabu") au nomino za kipekee (kama majina ya watu au majina ya makampuni). Katika lugha ya Kiswahili, nomino pia inaweza kubadilika kulingana na majina (namba), hali (kama vile umoja au wingi), na hatua nyingine za sarufi.`;
                            } else if (matchedswahiliWord === "vitenzi") {
                                botResponse = `"Vitenzi" - ni aina ya maneno ambayo hufafanua vitendo, hali, au mchakato. Wanaweza kuelezea kitendo kinachofanyika (kama "kukimbia", "kula", "kucheza"), hali ya kitu au mtu (kama "kuwa na njaa", "kuwa na furaha", "kuwa na usingizi"), au mchakato wa kubadilika (kama "kukua", "kubadilika", "kufanikiwa").

                            Vitenzi katika lugha ya Kiswahili vinaweza kubadilika kulingana na muda (wakati), kitendo (kisarufi), na hatua nyingine za sarufi. Kwa mfano, katika Kiswahili, "kula" inaweza kubadilika kuwa "nakula" (sasa), "nalikuwa" (past), au "nitala" (futuri), kulingana na muktadha na sarufi.`
                            } else if (matchedswahiliWord === "vielezi") {
                                botResponse = `"Vielezi" - ni aina ya maneno ambayo hufafanua vitenzi, hali, au hali ya kitendo. Wanaweza kusaidia kufafanua jinsi kitendo kinavyofanyika, kwa mfano, kama kitendo kinavyofanyika kwa ufanisi, kwa kasi, au kwa bidii. Katika lugha ya Kiswahili, vielezi hujumuisha maneno kama "vizuri", "polepole", "kwa bidii", "kwa furaha", "kwa haraka", na kadhalika. Vielezi hufanya maelezo ya vitenzi kuwa zaidi na kutoa maelezo zaidi juu ya jinsi kitendo kinavyofanyika.`;
                            } else if (matchedswahiliWord === "vivumishi") {
                                botResponse = `"Vivumishi" - ni aina ya maneno ambayo hufanya kazi kama sifa au vielezi kwa nomino au vitenzi. Wanaweza kuelezea hali, hali, au sifa za nomino. Katika lugha ya Kiswahili, vivumishi vinaweza kuelezea mambo kama ukubwa, rangi, umri, au hali ya nomino. Mifano ya vivumishi ni pamoja na "mkubwa", "mweusi", "mdogo", "wazee", "wote", "chache", na kadhalika. Vivumishi huongeza maelezo zaidi kwa nomino na kusaidia kuelezea sifa zake.`;
                            } else if (matchedswahiliWord === "vihisishi") {
                                botResponse = `"Vihisishi" ni aina ya maneno ambayo hufanya kazi kama vigezo vya nomino na hurejelea nomino nyingine au vitenzi katika sentensi. Kwa mfano, katika sentensi "Yule mtoto anapenda kusoma, na yeye hupenda hadithi za kusisimua," neno "yule" ni kihisishi kinachorejelea "mtoto" na "yeye" ni kihisishi kinachorejelea "mtoto" pia. Kihisishi hufanya kazi ya kurejelea nomino iliyotajwa hapo awali ili kuifanya sentensi iweze kueleweka bila kurudia nomino hiyo hiyo mara kwa mara. Katika lugha ya Kiswahili, mifano ya vihisishi ni pamoja na "huyu", "hizi", "hilo", "kile", na kadhalika.`;
                            } else if (matchedswahiliWord === "msamiati") {
                                botResponse = `"Msamiati" - Ni mkusanyiko wa maneno na istilahi zinazotumiwa katika lugha fulani. Hizi ni maneno ambayo watu hutumia kuelezea mawazo, vitu, hali, au dhana mbalimbali katika mazungumzo yao ya kila siku. Msamiati unaweza kujumuisha maneno ya kawaida, maneno maalum au ya kitaaluma, na hata misemo au methali za lugha hiyo. Kwa mfano, msamiati wa lugha ya Kiingereza unaweza kujumuisha maneno kama "apple" (tufaa), "computer" (kompyuta), "science" (sayansi), na kadhalika.`;
                            } else if (matchedswahiliWord === "misamiati") {
                                botResponse = `"Misamiati" - ni mkusanyiko wa maneno au istilahi ambazo zinahusiana na mada au eneo fulani la maarifa, kazi, au shughuli. Misamiati inaweza kuwa ya kawaida au ya kitaaluma, na hutumika kwa lengo la kufafanua dhana au maelezo katika uwanja husika. Kwa mfano, misamiati ya matibabu inaweza kujumuisha maneno kama "shinikizo la damu," "kisukari," na "ugonjwa wa moyo," wakati misamiati ya teknolojia inaweza kujumuisha maneno kama "programu," "mtandao," na "intaneti."

                            Kuwepo kwa misamiati husaidia katika mawasiliano kwa kuwezesha uelewa mzuri na wa kina kati ya watu wanaoshiriki katika uwanja husika. Misamiati inaweza pia kusaidia katika kuunda lugha ya kitaalamu au ya kiufundi ambayo inawaruhusu wataalamu kubadilishana mawazo na kufanya kazi kwa ufanisi zaidi katika uwanja wao.`;
                            }  else if (matchedswahiliWord === "lugha") {
                                botResponse = `"Lugha" - Ni mfumo wa sauti, ishara, au maandishi yanayotumiwa na watu katika mawasiliano na kubadilishana mawazo. Ni zana muhimu sana ya mawasiliano na utambulisho wa kitamaduni kwa jamii na makundi mbalimbali ya watu. Lugha hutoa njia ya kuelezea fikra, hisia, na mawazo, na inaweza kujumuisha sarufi, msamiati, na kanuni za matamshi.

                            Kwa kifupi, lugha ni chombo cha msingi cha mawasiliano kinachotumiwa na binadamu kuelewa na kuelezea ulimwengu wao.`;
                            }  else if (matchedswahiliWord === "kishazi") {
                                botResponse = `"Kishazi" ni neno la Kiswahili ambalo linamaanisha "kizazi" au "kizazi cha watu walioungana kwa ukoo au asili ya kawaida." Kwa kawaida, linatumika kuelezea kundi la watu waliozaliwa na kufuata vizazi vya mababu zao, wakionyesha uhusiano wa damu na urithi wa tamaduni na mila.
                                Lakini pia hili neno lisichanganywe na neno "vishazi" kwani neno hili humaanisha aina moja wapo ya maneno`;
                            } else if (matchedswahiliWord === "asili" ||matchedswahiliWord === "chimbuko") {
                                botResponse = `Lugha ya Kiswahili ina chimbuko au asili  katika familia ya lugha za Kibantu, ambazo zinazungumzwa hasa katika maeneo ya Afrika Mashariki na Kati. Historia ya Kiswahili ina mizizi yake katika biashara na mawasiliano kati ya jamii za pwani ya Afrika Mashariki na wafanyabiashara wa Kiarabu na Waajemi katika karne za kati. Maneno mengi ya Kiswahili yana asili ya Kiarabu, Kireno, Kiingereza, na lugha nyingine za Kiafrika ambazo ziliongezeka kutokana na mwingiliano wa kitamaduni na biashara.

                            Kiswahili kiliendelea kukua na kuenea katika maeneo mengine ya Afrika Mashariki na Kati kutokana na biashara, utawala, na harakati za kijamii. Baadaye, Kiswahili kilitambuliwa kama lugha rasmi ya Kenya, Tanzania, na Uganda, na pia kuwa moja ya lugha za kufundishia katika shule na vyuo vikuu katika nchi hizi.

                            Leo hii, Kiswahili ni mojawapo ya lugha zinazokua kwa kasi zaidi barani Afrika, na imeenea katika maeneo mengi ya bara hilo kama lugha ya mawasiliano ya kikanda, biashara, na utamaduni.`;
                            } else {
                                botResponse = `Samahani kwa sasa siwezi kujibu hili swali kwa sababu sijapatiwa taarifa za kutosha kuhus `+`"${usersInpt}"`+`.nitajitahidi kukujibu pale tu nitakapofundishwa. unaweza pia kuandika au kuuliza kwa namna nyingine na niko tayari kukusaidia.pole kwa usumbufu.`;
                            }
    return botResponse;
}


function codeWords(matchedcodeWord) {
    let botResponse = "";
    if (matchedgeoWord === "geography"){
    botResponse = `"Geography" - Is the study of Earth's landscapes, environments, and the relationships between people and their environments. It covers both the physical aspects of the Earth, such as landforms, climate, and ecosystems, as well as human activities and their impact on the environment. Geographers use various tools and techniques, including maps, satellite imagery, and geographic information systems (GIS), to analyze and understand patterns and processes on Earth's surface. The field of geography is diverse and includes sub-disciplines such as physical geography, human geography, environmental geography, and geographic information science.`;
    }  
    return botResponse;
}

function thankWords(matchedThankWord) {
    let botResponse = "";
    if (matchedcodeWord === "html"){
                            botResponse = `"HTML" (Hypertext Markup Language), Is the standard markup language used for creating web pages and web applications. It provides the structure and content of a web page by using a system of tags and attributes to define elements such as headings, paragraphs, links, images, and multimedia content. HTML documents are interpreted by web browsers to display the content as formatted web pages. HTML is often used in conjunction with CSS (Cascading Style Sheets) for styling and layout, as well as JavaScript for interactivity and dynamic content.`;
                            } else if(matchedcodeWord === "javascript"){
                            botResponse = `"JavaScript" - Is a high-level programming language primarily used for developing web applications. It is an essential component of web development alongside HTML and CSS. JavaScript allows developers to add dynamic behavior to web pages, interact with the Document Object Model (DOM) to modify page content, handle user interactions, and communicate with servers to retrieve or send data asynchronously.

JavaScript is a versatile language that can be used both on the client-side (in web browsers) and on the server-side (with environments like Node.js). It supports various programming paradigms, including procedural, functional, and object-oriented programming.

Some key features of JavaScript include:

/ Dynamic Typing: /  Variables in JavaScript can hold values of any data type without explicit declaration.

/ Prototypal Inheritance: /  Objects in JavaScript can inherit properties and methods from other objects through prototype chains.

/ First-Class Functions: / Functions in JavaScript are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

/ Closures: /  Functions in JavaScript retain access to the variables in their lexical scope even after the parent function has finished executing.

/ Asynchronous Programming: / JavaScript supports asynchronous programming using callbacks, promises, and async/await syntax to handle tasks that take time to complete, such as fetching data from servers or executing I/O operations.

JavaScript is widely used in web development, but its versatility extends beyond the web, as it is also used in server-side development, mobile app development, game development, and more.`;
                            } else if(matchedcodeWord === "css"){
                            botResponse = `CSS stands for Cascading Style Sheets. It is a style sheet language used to define the presentation and layout of HTML documents, including colors, fonts, spacing, and other visual aspects. CSS allows developers to separate the structure of a web page (defined with HTML) from its style and presentation, making it easier to maintain and update the appearance of a website across multiple pages.

Key features of CSS include:

/ Selectors: / CSS selectors are used to target HTML elements and apply styles to them. Selectors can target elements based on their tag names, class names, IDs, attributes, and relationships with other elements.

/ Properties and Values: / CSS properties define the visual characteristics of HTML elements, such as color, font size, margin, padding, and border. Each property is assigned a value that specifies how the characteristic should be styled.

/ Cascading: / CSS follows a cascading model, meaning that styles can be inherited from parent elements and overridden by more specific styles defined later in the document or in an external style sheet.

/ Specificity: / CSS specificity determines which styles are applied to an element when conflicting styles are defined. Styles with higher specificity (e.g., those targeting IDs or inline styles) take precedence over styles with lower specificity (e.g., those targeting tag names or classes).

/ Units and Values: / CSS supports various units and values for specifying measurements, such as pixels (px), percentages (%), ems (em), rems (rem), and viewport units (vw and vh).

/ Box Model: / CSS uses a box model to describe the layout of elements on a web page, including their content, padding, border, and margin. Developers can adjust these properties to control the spacing and alignment of elements.

CSS is an essential part of web development, allowing developers to create visually appealing and responsive websites that adapt to different screen sizes and devices. It is often combined with HTML and JavaScript to create modern and interactive web experiences.`;
                            }
    return botResponse;
}

function historyWords(matchedhistoryWord) {
    let botResponse = "";
    if (matchedhistoryWord === "history"){
                            botResponse = `History is the study of past events, particularly those relating to human affairs. It involves the investigation, analysis, and interpretation of events, cultures, societies, and individuals from ancient times to the present. Historians use various sources, including written records, archaeological evidence, oral traditions, and artifacts, to reconstruct and understand the past.

Key aspects of history include:

/ Chronology: /  History is organized chronologically, with events arranged in sequential order based on their occurrence in time. Chronology helps historians understand the causes and effects of events and identify patterns and trends over time.

/ Historiography: / Historiography refers to the study of the methods, theories, and interpretations used in historical research and writing. It explores how historical knowledge is produced, debated, and revised over time.

/ Sources: / Historians rely on a variety of primary and secondary sources to gather information about the past. Primary sources include original documents, artifacts, and eyewitness accounts, while secondary sources are interpretations and analyses of primary sources by other scholars.

/ Themes and Topics: / History encompasses a wide range of themes and topics, including political history, social history, economic history, cultural history, military history, intellectual history, and environmental history. Historians explore these themes to understand how societies and cultures have evolved and interacted over time.

/ Interpretation: / Historians interpret the past based on the evidence available to them. They analyze historical events in context, considering factors such as political, social, economic, cultural, and environmental conditions. Historical interpretation is often subject to debate and revision as new evidence emerges and perspectives evolve.

/ Historical Significance: /  Historians assess the significance of events, individuals, and developments in history based on their impact on society, culture, politics, and human progress. They identify key turning points, milestones, and enduring legacies that shape our understanding of the past.

/ Memory and Representation: / History is not only about the past but also about how it is remembered, commemorated, and represented in collective memory. Historians examine how historical narratives are constructed, contested, and reshaped over time, reflecting different perspectives and agendas.

Studying history provides insights into the complexities of human experience, the diversity of cultures and societies, and the forces that have shaped the world we live in today. It fosters critical thinking, empathy, and a deeper understanding of the present by contextualizing contemporary issues within broader historical frameworks.`;
                            }
    return botResponse;
}
