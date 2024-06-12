function handleSciencePhrases(matchedScienceP) {
    let botResponse = "";

    if (matchedScienceP.includes('astronomy')) {
        botResponse = "Astronomy is the study of everything in outer space, like stars, planets, and galaxies. For example, astronomers use telescopes to observe distant stars and study the formation of planets. Did you know that our galaxy, the Milky Way, contains over 100 billion stars?";
    } else if (matchedScienceP.includes('geology')) {
        botResponse = "Geology is the science of the Earth, including its rocks, minerals, and the processes that shape the planet. Geologists study things like earthquakes, volcanoes, and the formation of mountains. For example, the Grand Canyon is a famous geological site that reveals millions of years of Earth's history through its rock layers.";
    } else if (matchedScienceP.includes('meteorology')) {
        botResponse = "Meteorology is the study of weather and the atmosphere. Meteorologists use tools like weather balloons and radar to predict weather patterns. For instance, they can forecast hurricanes and help people prepare for severe weather events. A common meteorological term is the 'cold front,' which is a boundary leading cold air into a region.";
    } else if (matchedScienceP.includes('ecology')) {
        botResponse = "Ecology is the study of how living things interact with each other and their environment. Ecologists might study the relationships between predators and prey or the impact of human activities on ecosystems. For example, they could examine how deforestation affects wildlife habitats.";
    } else if (matchedScienceP.includes('botany')) {
        botResponse = "Botany is the scientific study of plants. Botanists research plant life, including their growth, reproduction, and disease resistance. For example, botanists might study how certain plants can survive in extreme environments, like cacti in deserts.";
    } else if (matchedScienceP.includes('zoology')) {
        botResponse = "Zoology is the branch of biology that studies animals. Zoologists examine animal behavior, physiology, and classification. For instance, a zoologist might study the social behavior of chimpanzees in the wild or the anatomy of marine mammals.";
    } else if (matchedScienceP.includes('genetics')) {
        botResponse = "Genetics is the study of genes and heredity. Geneticists explore how traits are passed from parents to offspring through DNA. For example, they might investigate genetic disorders like cystic fibrosis or study how certain genes influence behavior.";
    } else if (matchedScienceP.includes('microbiology')) {
        botResponse = "Microbiology is the study of microorganisms, such as bacteria, viruses, and fungi. Microbiologists might research how bacteria cause diseases or how viruses spread. For instance, understanding the structure of the influenza virus helps in developing effective vaccines.";
    } else if (matchedScienceP.includes('biochemistry')) {
        botResponse = "Biochemistry is the study of the chemical processes that occur within living organisms. Biochemists might study how cells produce energy or how enzymes work. For example, they could research how insulin regulates blood sugar levels in the body.";
    } else if (matchedScienceP.includes('organic chemistry')) {
        botResponse = "Organic chemistry is the study of carbon-based compounds, which are essential to life. Organic chemists might work on developing new pharmaceuticals or studying the chemical reactions in living organisms. For instance, they could synthesize new materials like plastics.";
    } else if (matchedScienceP.includes('inorganic chemistry')) {
        botResponse = "Inorganic chemistry is the study of inorganic compounds, such as metals and minerals. Inorganic chemists might explore the properties of metals or develop new catalysts for industrial processes. An example would be studying how metal alloys are used in construction.";
    } else if (matchedScienceP.includes('physical chemistry')) {
        botResponse = "Physical chemistry combines chemistry and physics to study how matter behaves on a molecular and atomic level. Physical chemists might investigate how energy is transferred during chemical reactions. For instance, they could study the thermodynamics of reactions in batteries.";
    } else if (matchedScienceP.includes('nuclear physics')) {
        botResponse = "Nuclear physics is the study of atomic nuclei and their interactions. Nuclear physicists might research nuclear energy or the properties of radioactive elements. For example, they could work on understanding nuclear fusion, which powers the sun.";
    } else if (matchedScienceP.includes('quantum physics')) {
        botResponse = "Quantum physics is the study of the smallest particles in the universe and their interactions. Quantum physicists explore phenomena that occur at the atomic and subatomic levels. For instance, they study how particles like electrons behave in unpredictable ways.";
    } else if (matchedScienceP.includes('particle physics')) {
        botResponse = "Particle physics investigates the fundamental particles that make up the universe and how they interact. Particle physicists use large particle accelerators to smash particles together and study the results. An example is the discovery of the Higgs boson particle.";
    } else if (matchedScienceP.includes('cosmology')) {
        botResponse = "Cosmology is the study of the origin, evolution, and eventual fate of the universe. Cosmologists might study the Big Bang theory or the expansion of the universe. For example, they investigate how galaxies formed and evolved over billions of years.";
    } else if (matchedScienceP.includes('planetary science')) {
        botResponse = "Planetary science is the study of planets, moons, and planetary systems. Planetary scientists might explore the surfaces and atmospheres of planets in our Solar System. For example, the study of Mars helps us understand its potential to support life.";
    } else if (matchedScienceP.includes('seismology')) {
        botResponse = "Seismology is the scientific study of earthquakes and the propagation of seismic waves through the Earth. Seismologists use instruments called seismometers to detect and measure these waves. They can help predict earthquakes and understand Earth's interior structure.";
    } else if (matchedScienceP.includes('volcanology')) {
        botResponse = "Volcanology is the study of volcanoes, lava, magma, and related geological phenomena. Volcanologists might monitor active volcanoes to predict eruptions and understand volcanic activity. For example, studying Mount Vesuvius helps in predicting future eruptions.";
    } else if (matchedScienceP.includes('climatology')) {
        botResponse = "Climatology is the study of climate, including patterns and effects of climate changes over time. Climatologists might analyze historical weather data to predict future climate trends. For example, they study how global warming affects polar ice caps.";
    } else if (matchedScienceP.includes('oceanography')) {
        botResponse = "Oceanography is the study of the physical and biological aspects of the ocean. Oceanographers might explore ocean currents, marine ecosystems, and the ocean floor. For example, they study coral reefs and their role in marine biodiversity.";
    } else if (matchedScienceP.includes('environmental science')) {
        botResponse = "Environmental science is the study of the environment and solutions to environmental problems. Environmental scientists might work on pollution control or conservation efforts. For example, they study the impact of human activities on natural habitats.";
    } else if (matchedScienceP.includes('ecosystem')) {
        botResponse = "An ecosystem is a community of living organisms and their physical environment, interacting as a system. Ecologists study how different species and environmental factors work together. For example, a forest ecosystem includes trees, animals, insects, and the soil.";
    } else if (matchedScienceP.includes('evolution')) {
        botResponse = "Evolution is the process through which species of organisms change over time through changes in their genetic material. Evolution explains how modern animals and plants have descended from ancient ancestors. For example, the evolution of the horse shows gradual changes in its size and hoof structure over millions of years.";
    } else if (matchedScienceP.includes('natural selection')) {
        botResponse = "Natural selection is the process where organisms that are better adapted to their environment tend to survive and reproduce more successfully. This concept, introduced by Charles Darwin, explains how species evolve over time. An example is the peppered moth, which changed color due to industrial pollution.";
    } else if (matchedScienceP.includes('cell biology')) {
        botResponse = "Cell biology is the study of cells, their physiology, structure, and life cycle. Cell biologists might investigate how cells communicate with each other or how cancer cells grow. For example, they study the differences between healthy cells and tumor cells.";
    } else if (matchedScienceP.includes('molecular biology')) {
        botResponse = "Molecular biology is the study of biological processes at the molecular level, including interactions between different systems of a cell. Molecular biologists might study DNA replication or protein synthesis. For instance, they research how genes are turned on and off.";
    } else if (matchedScienceP.includes('neuroscience')) {
        botResponse = "Neuroscience is the study of the nervous system, including the brain and spinal cord. Neuroscientists might research how neurons communicate or what causes neurological disorders. For example, they study the brain's role in memory and learning.";
    } else if (matchedScienceP.includes('cell')) {
        botResponse = "A cell is the smallest unit of life that can replicate independently. Cells make up all living organisms. For example, human bodies are composed of trillions of cells, each performing specific functions like carrying oxygen or fighting infections.";
    } else if (matchedScienceP.includes('natural')) {
        botResponse = "Natural sciences are branches of science that study the physical world, its phenomena, and processes. This includes fields like physics, chemistry, and biology. For instance, studying natural phenomena like gravity or plant photosynthesis falls under natural sciences.";
    }

    return botResponse;
}




function handleothersPhrases(matchedPhrasedOther) {
    let botResponse = "";
   

    if (matchedPhrasedOther.includes("Can you tell me about the history of typewriters") ||
        matchedPhrasedOther.includes("Tell me about typewriters")  ||
        matchedPhrasedOther.includes("what is typewriters")) {
        botResponse = "Typewriters were invented in the early 19th century. They revolutionized the way people wrote documents by providing a mechanical means to produce text. The first commercially successful typewriter was developed by Christopher Latham Sholes and sold in 1873. Typewriters were widely used until computers and word processors became popular.";
    } else if (matchedPhrasedOther.includes("What is a typewriter and how does it work") ||
               matchedPhrasedOther.includes("Why were typewriters important")) {
        botResponse = "A typewriter is a mechanical or electromechanical machine for writing characters similar to those produced by a printer's movable type. Each key causes a different letter or character to be printed on the paper. Typewriters were important because they allowed for faster, more legible writing compared to handwriting, and they played a crucial role in offices, journalism, and literature before computers.";
    } else if (matchedPhrasedOther.includes("What is shorthand writing") ||
               matchedPhrasedOther.includes("How is shorthand used") ||
               matchedPhrasedOther.includes("Can you explain shorthand") ||
               matchedPhrasedOther.includes("What are the different types of shorthand")) {
        botResponse = "Shorthand is a method of rapid writing by using symbols or abbreviations for sounds, words, or phrases. It is used to quickly transcribe spoken words. There are different systems of shorthand, such as Pitman, Gregg, and Teeline, each with its own set of rules and symbols. Shorthand is often used by secretaries, journalists, and anyone who needs to take quick, accurate notes.";
    } else if (matchedPhrasedOther.includes("What types of books do you recommend") ||
               matchedPhrasedOther.includes("Can you suggest some good books") ||
               matchedPhrasedOther.includes("What are different genres of books") ||
               matchedPhrasedOther.includes("Tell me about books")) {
        botResponse = "Books come in many genres, including fiction, non-fiction, mystery, fantasy, science fiction, and biographies. Fiction books tell made-up stories, while non-fiction books provide factual information. Mysteries involve solving a crime or uncovering secrets. Fantasy books include magical elements, and science fiction explores futuristic or technological themes. Biographies tell the life stories of real people.";
    } else if (matchedPhrasedOther.includes("What are some ergonomic tips for chairs") ||
               matchedPhrasedOther.includes("Can you recommend a good chair") ||
               matchedPhrasedOther.includes("What types of chairs are best for back support") ||
               matchedPhrasedOther.includes("Tell me about different types of chairs")) {
        botResponse = "When choosing a chair for ergonomics, look for adjustable height and lumbar support to maintain the natural curve of your spine. A good chair should also have a comfortable seat cushion and armrests. There are various types of chairs, including office chairs, gaming chairs, and recliners, each designed for specific purposes and comfort levels.";
    } else if (matchedPhrasedOther.includes("What kinds of tables are there") ||
               matchedPhrasedOther.includes("Can you describe different types of tables") ||
               matchedPhrasedOther.includes("What should I look for in a table") ||
               matchedPhrasedOther.includes("Tell me about tables")) {
        botResponse = "Tables come in many types, including dining tables, coffee tables, desks, and bedside tables. When choosing a table, consider the material (wood, glass, metal), size, shape (round, square, rectangular), and purpose. A dining table should be sturdy and large enough to accommodate meals, while a desk should provide enough space for work and storage.";
    } else if (matchedPhrasedOther.includes("How do I choose the right lamp") ||
               matchedPhrasedOther.includes("What are the different types of lamps") ||
               matchedPhrasedOther.includes("Can you help me choose a lamp") ||
               matchedPhrasedOther.includes("Tell me about lamps")) {
        botResponse = "Lamps come in various types, such as table lamps, floor lamps, desk lamps, and bedside lamps. When choosing a lamp, consider its purpose (reading, ambient lighting, decoration), the style, and the type of light bulb it uses. LED bulbs are energy-efficient and long-lasting, while incandescent bulbs provide warm light. Adjustable lamps are useful for focused tasks.";
    } else if (matchedPhrasedOther.includes("What types of pens are available") ||
               matchedPhrasedOther.includes("Which pen is best for writing") ||
               matchedPhrasedOther.includes("Can you recommend a good pen") ||
               matchedPhrasedOther.includes("Tell me about pens")) {
        botResponse = "Pens come in various types, including ballpoint, fountain, gel, and rollerball. Ballpoint pens are reliable and long-lasting, while fountain pens offer a smooth writing experience and are refillable. Gel pens provide vibrant colors and smooth lines, and rollerball pens combine the smoothness of fountain pens with the convenience of ballpoint pens. Choose a pen based on your writing needs and comfort.";
    } else if (matchedPhrasedOther.includes("What should I consider when choosing a notebook") ||
               matchedPhrasedOther.includes("Can you suggest a good notebook") ||
               matchedPhrasedOther.includes("What types of notebooks are there") ||
               matchedPhrasedOther.includes("Tell me about notebooks")) {
        botResponse = "Notebooks come in various sizes, bindings, and paper types. Consider the purpose (note-taking, journaling, drawing), paper quality (lined, blank, dotted), and cover material (softcover, hardcover). Spiral-bound notebooks are easy to lay flat, while stitched or glued bindings offer a more traditional look. Choose a notebook that fits your needs and preferences.";
    } else if (matchedPhrasedOther.includes("What are different types of cups") ||
               matchedPhrasedOther.includes("Can you recommend a good cup") ||
               matchedPhrasedOther.includes("What should I look for in a cup") ||
               matchedPhrasedOther.includes("Tell me about cups")) {
        botResponse = "Cups come in various materials such as ceramic, glass, stainless steel, and plastic. Consider the purpose (coffee, tea, cold drinks), size, and insulation properties. Ceramic and glass cups are great for hot drinks, while insulated stainless steel cups keep beverages at the desired temperature longer. Choose a cup based on your drink preferences and usage habits.";
    } else if (matchedPhrasedOther.includes("What types of plates are available") ||
               matchedPhrasedOther.includes("Can you suggest a good plate") ||
               matchedPhrasedOther.includes("What should I consider when choosing a plate") ||
               matchedPhrasedOther.includes("Tell me about plates")) {
        botResponse = "Plates come in various materials such as ceramic, porcelain, glass, and plastic. Consider the size, shape, and durability. Ceramic and porcelain plates are durable and elegant, suitable for formal dining. Glass plates are stylish and easy to clean, while plastic plates are lightweight and great for casual use or outdoor settings. Choose plates based on your dining needs and style.";
    } else if (matchedPhrasedOther.includes("What types of spoons are there") ||
               matchedPhrasedOther.includes("Can you recommend a good spoon") ||
               matchedPhrasedOther.includes("What should I look for in a spoon") ||
               matchedPhrasedOther.includes("Tell me about spoons")) {
        botResponse = "Spoons come in various types, including teaspoons, tablespoons, dessert spoons, and soup spoons. Consider the material (stainless steel, silver, plastic), size, and purpose. Stainless steel spoons are durable and versatile, while silver spoons are elegant for formal settings. Choose spoons based on your dining habits and preferences.";
    } else if (matchedPhrasedOther.includes("What are the different types of forks") ||
               matchedPhrasedOther.includes("Can you suggest a good fork") ||
               matchedPhrasedOther.includes("What should I consider when choosing a fork") ||
               matchedPhrasedOther.includes("Tell me about forks")) {
        botResponse = "Forks come in various types, such as dinner forks, salad forks, dessert forks, and serving forks. Consider the material (stainless steel, silver, plastic) and size. Dinner forks are larger and used for main courses, while salad forks are smaller. Dessert forks are smaller and often used for sweet dishes. Choose forks based on your dining needs and style.";
    } else if (matchedPhrasedOther.includes("What types of knives are available") ||
               matchedPhrasedOther.includes("Can you recommend a good knife") ||
               matchedPhrasedOther.includes("What should I look for in a knife") ||
               matchedPhrasedOther.includes("Tell me about knives")) {
        botResponse = "Knives come in various types, such as chef's knives, paring knives, bread knives, and steak knives. Consider the material (stainless steel, carbon steel), blade type (serrated, straight), and handle comfort. Chef's knives are versatile for chopping and slicing, paring knives are great for small tasks, bread knives have serrated edges, and steak knives are ideal for cutting meat. Choose knives based on your cooking needs.";
    } else if (matchedPhrasedOther.includes("How have phones evolved over time") ||
               matchedPhrasedOther.includes("Can you tell me about the history of phones") ||
               matchedPhrasedOther.includes("What are different types of phones") ||
               matchedPhrasedOther.includes("Tell me about phones")) {
        botResponse = "Phones have evolved significantly from early landlines to modern smartphones. The first telephone was invented by Alexander Graham Bell in 1876. Mobile phones appeared in the 1980s, and smartphones with internet access and touchscreens became popular in the 2000s. Today, phones are essential for communication, entertainment, and work, featuring advanced technology like cameras, apps, and GPS.";
    } else if (matchedPhrasedOther.includes("What should I know about computers") ||
               matchedPhrasedOther.includes("Can you explain the different types of computers") ||
               matchedPhrasedOther.includes("What are some uses of computers") ||
               matchedPhrasedOther.includes("Tell me about computers")) {
        botResponse = "Computers are electronic devices that process data and perform tasks based on instructions. There are various types of computers, including desktops, laptops, tablets, and servers. Desktops are powerful and customizable, laptops are portable, tablets are touch-operated, and servers manage networks and data. Computers are used for work, entertainment, communication, and information access.";
    } else if (matchedPhrasedOther.includes("What are the different types of keyboards") ||
               matchedPhrasedOther.includes("Can you recommend a good keyboard") ||
               matchedPhrasedOther.includes("What should I look for in a keyboard") ||
               matchedPhrasedOther.includes("Tell me about keyboards")) {
        botResponse = "Keyboards come in various types, including mechanical, membrane, and wireless. Mechanical keyboards have individual switches for each key, providing tactile feedback and durability. Membrane keyboards are quieter and more affordable. Wireless keyboards offer flexibility and reduce cable clutter. Choose a keyboard based on your typing habits and comfort.";
    } else if (matchedPhrasedOther.includes("What are the different types of computer mice") ||
               matchedPhrasedOther.includes("Can you recommend a good computer mouse") ||
               matchedPhrasedOther.includes("What should I consider when choosing a computer mouse") ||
               matchedPhrasedOther.includes("Tell me about computer mice")) {
        botResponse = "Computer mice come in various types, including optical, laser, and wireless. Optical mice use LED light for movement detection, while laser mice offer more precision. Wireless mice provide freedom of movement without cables. Consider the shape, size, and features like additional buttons or adjustable DPI settings. Choose a mouse that fits your hand comfortably and meets your usage needs.";
    } else if (matchedPhrasedOther.includes("What types of televisions are there") ||
               matchedPhrasedOther.includes("Can you recommend a good TV") ||
               matchedPhrasedOther.includes("What should I look for in a television") ||
               matchedPhrasedOther.includes("Tell me about televisions")) {
        botResponse = "Televisions come in various types, such as LED, OLED, QLED, and Plasma. LED TVs are energy-efficient and affordable, OLED TVs offer excellent color and contrast, QLED TVs have enhanced brightness, and Plasma TVs provide good color accuracy but are less common. Consider screen size, resolution (HD, 4K, 8K), and smart features when choosing a TV.";
    } else if (matchedPhrasedOther.includes("How do remote controls work") ||
               matchedPhrasedOther.includes("What are the different types of remotes") ||
               matchedPhrasedOther.includes("Can you recommend a good remote control") ||
               matchedPhrasedOther.includes("Tell me about remote controls")) {
        botResponse = "Remote controls use infrared or radio signals to communicate with devices like TVs, DVD players, and stereo systems. There are universal remotes that can control multiple devices and smart remotes with advanced features like voice control. Choose a remote control based on compatibility with your devices and desired features.";
    } else if (matchedPhrasedOther.includes("What are the different types of windows") ||
               matchedPhrasedOther.includes("Can you recommend a good window") ||
               matchedPhrasedOther.includes("What should I look for in a window") ||
               matchedPhrasedOther.includes("Tell me about windows")) {
        botResponse = "Windows come in various types, including double-hung, casement, awning, and sliding. Double-hung windows have two sashes that slide vertically, casement windows are hinged on one side and open outward, awning windows are hinged at the top, and sliding windows move horizontally. Consider energy efficiency, materials, and style when choosing windows.";
    } else if (matchedPhrasedOther.includes("What are the different types of doors") ||
               matchedPhrasedOther.includes("Can you recommend a good door") ||
               matchedPhrasedOther.includes("What should I look for in a door") ||
               matchedPhrasedOther.includes("Tell me about doors")) {
        botResponse = "Doors come in various types, including panel doors, flush doors, French doors, and sliding doors. Panel doors have raised or recessed panels, flush doors have a flat surface, French doors feature glass panes, and sliding doors move horizontally. Consider material (wood, metal, glass), style, and security features when choosing doors.";
    } else if (matchedPhrasedOther.includes("What types of beds are available") ||
               matchedPhrasedOther.includes("Can you recommend a good bed") ||
               matchedPhrasedOther.includes("What should I consider when choosing a bed") ||
               matchedPhrasedOther.includes("Tell me about beds")) {
        botResponse = "Beds come in various types, including platform beds, storage beds, canopy beds, and adjustable beds. Platform beds have a solid base, storage beds offer built-in drawers, canopy beds have posts and a frame for drapes, and adjustable beds can change positions. Consider size, comfort, and features when choosing a bed.";
    } else if (matchedPhrasedOther.includes("What are the different types of pillows") ||
               matchedPhrasedOther.includes("Can you recommend a good pillow") ||
               matchedPhrasedOther.includes("What should I look for in a pillow") ||
               matchedPhrasedOther.includes("Tell me about pillows")) {
        botResponse = "Pillows come in various types, including memory foam, down, feather, and synthetic. Memory foam pillows offer support and contour to your head and neck, down pillows are soft and luxurious, feather pillows provide a mix of support and softness, and synthetic pillows are hypoallergenic. Choose a pillow based on your sleep position and comfort preference.";
    } else if (matchedPhrasedOther.includes("What types of blankets are there") ||
               matchedPhrasedOther.includes("Can you recommend a good blanket") ||
               matchedPhrasedOther.includes("What should I look for in a blanket") ||
               matchedPhrasedOther.includes("Tell me about blankets")) {
        botResponse = "Blankets come in various types, including wool, cotton, fleece, and electric. Wool blankets are warm and breathable, cotton blankets are soft and versatile, fleece blankets are lightweight and warm, and electric blankets provide adjustable warmth. Choose a blanket based on your climate, comfort needs, and material preference.";
    } else if (matchedPhrasedOther.includes("What are the best materials for towels") ||
               matchedPhrasedOther.includes("Can you recommend a good towel") ||
               matchedPhrasedOther.includes("What should I look for in a towel") ||
               matchedPhrasedOther.includes("Tell me about towels")) {
        botResponse = "Towels come in various materials, including cotton, microfiber, and bamboo. Cotton towels are absorbent and soft, microfiber towels dry quickly and are lightweight, and bamboo towels are eco-friendly and naturally antibacterial. Consider the towel's absorbency, softness, and durability when choosing the best one for your needs.";
    } else if (matchedPhrasedOther.includes("What types of soap are available") ||
               matchedPhrasedOther.includes("Can you recommend a good soap") ||
               matchedPhrasedOther.includes("What should I consider when choosing a soap") ||
               matchedPhrasedOther.includes("Tell me about soaps")) {
        botResponse = "Soaps come in various forms, including bar soap, liquid soap, and foam soap. Bar soap is traditional and long-lasting, liquid soap is convenient and often comes with a pump, and foam soap is light and easy to use. Consider ingredients, scent, and skin type when choosing a soap. Look for moisturizing ingredients if you have dry skin or antibacterial properties if you need extra cleanliness.";
    } else if (matchedPhrasedOther.includes("What are the different types of shampoos") ||
               matchedPhrasedOther.includes("Can you recommend a good shampoo") ||
               matchedPhrasedOther.includes("What should I look for in a shampoo") ||
               matchedPhrasedOther.includes("Tell me about shampoos")) {
        botResponse = "Shampoos come in various types, including moisturizing, volumizing, clarifying, and color-safe. Moisturizing shampoos are ideal for dry hair, volumizing shampoos add body to fine hair, clarifying shampoos remove buildup, and color-safe shampoos protect dyed hair. Choose a shampoo based on your hair type and needs.";
    } else if (matchedPhrasedOther.includes("What types of toothbrushes are there") ||
               matchedPhrasedOther.includes("Can you recommend a good toothbrush") ||
               matchedPhrasedOther.includes("What should I look for in a toothbrush") ||
               matchedPhrasedOther.includes("Tell me about toothbrushes")) {
        botResponse = "Toothbrushes come in various types, including manual, electric, and ultrasonic. Manual toothbrushes are simple and affordable, electric toothbrushes provide better cleaning with less effort, and ultrasonic toothbrushes use high-frequency vibrations for deep cleaning. Consider the bristle type (soft, medium, hard) and handle design when choosing a toothbrush.";
    } else if (matchedPhrasedOther.includes("What types of toothpaste are available") ||
               matchedPhrasedOther.includes("Can you recommend a good toothpaste") ||
               matchedPhrasedOther.includes("What should I consider when choosing a toothpaste") ||
               matchedPhrasedOther.includes("Tell me about toothpastes")) {
        botResponse = "Toothpastes come in various types, including fluoride, whitening, sensitive, and natural. Fluoride toothpaste helps prevent cavities, whitening toothpaste removes stains, sensitive toothpaste reduces discomfort, and natural toothpaste avoids artificial ingredients. Choose a toothpaste based on your dental needs and preferences.";
    } else if (matchedPhrasedOther.includes("What are the different types of mirrors") ||
               matchedPhrasedOther.includes("Can you recommend a good mirror") ||
               matchedPhrasedOther.includes("What should I look for in a mirror") ||
               matchedPhrasedOther.includes("Tell me about mirrors")) {
        botResponse = "Mirrors come in various types, including wall mirrors, floor mirrors, vanity mirrors, and compact mirrors. Wall mirrors are mounted on walls for decoration or functionality, floor mirrors are large and freestanding, vanity mirrors are used for grooming, and compact mirrors are portable. Consider size, frame style, and placement when choosing a mirror.";
    }

    return botResponse;
}


function handleBotDetails(botQns) {
    let botResponse = "";
        if (botQns === 'your name' || botQns === 'what is your name') {
            botResponse = 'My name is ChatNMG, your friendly assistant! what is your name too?';
        } else if (botQns === 'who are you') {
            botResponse = 'I am ChatNMG, a virtual assistant here to help you with your queries.';
        } else if (botQns === 'introduce yourself') {
            botResponse = 'Hello! I am ChatNMG, an AI-powered assistant created to assist you with various tasks and provide information.';
        } else if (botQns === 'who created you') {
            botResponse = 'I was created by a team of developers at NMG to assist users with their inquiries.';
        } else if (botQns === 'what do you do') {
            botResponse = 'I provide assistance with various questions and tasks, ranging from general information to specific queries you might have.';
        } else if (botQns === 'where are you from') {
            botResponse = 'I exist in the digital realm, created by developers to assist you.';
        } else if (botQns === 'how old are you') {
            botResponse = 'I don\'t have an age like humans do, but I\'m constantly learning and improving.';
        } else if (botQns === 'are you human') {
            botResponse = 'No, I am not human. I am an AI virtual assistant designed to help you.';
        } else if (botQns === 'are you a robot') {
            botResponse = 'I am a virtual assistant, which is a type of AI designed to assist with tasks and provide information.';
        } else if (botQns === 'are you a chatbot') {
            botResponse = 'Yes, I am a chatbot created to assist you with your questions and tasks.';
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
        } else if (greeting.includes('i am good')) {
            botResponse = "I'm glad to hear you're doing well!how can i help you feel free to ask";
        } else if (greeting.includes('great')) {
            botResponse = "It's great to hear that! Keep up the positive spirit!feel free to ask, i am here to asist you!";
        } else if (greeting.includes('my name')) {
            botResponse = "nice to meet you, how can now help you?";
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











