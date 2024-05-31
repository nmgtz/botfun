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
                            } else if (matchedeconomicWord === 'key principle') {
                                botResponse = "Key principles are fundamental guidelines or rules that guide decision-making and behavior within an organization.";
                            } else if (matchedeconomicWord === 'excellent customer') {
                                botResponse = "Providing excellent customer service is essential for building strong relationships and fostering loyalty.";
                            } else if (matchedeconomicWord === 'empathy') {
                                botResponse = "Empathy is the ability to understand and share the feelings of others, which is crucial in customer service and team dynamics.";
                            } else if (matchedeconomicWord === 'active listening') {
                                botResponse = "Active listening involves fully concentrating on what is being said, understanding the message, and responding thoughtfully.";
                            } else if (matchedeconomicWord === 'interactions') {
                                botResponse = "Interactions refer to the exchanges or communications between individuals or entities, which can occur in various contexts.";
                            } else if (matchedeconomicWord === 'interaction') {
                                botResponse = "Interaction refers to the act of communicating or engaging with others, which is vital in business and social settings.";
                            } else if (matchedeconomicWord === 'mechanisms for business') {
                                botResponse = "Mechanisms for business encompass the processes, systems, and tools used to operate and manage a business effectively.";
                            } else if (matchedeconomicWord === 'enterprises') {
                                botResponse = "Enterprises are organizations or businesses engaged in commercial, industrial, or professional activities.";
                            } else if (matchedeconomicWord === 'costs') {
                                botResponse = "Costs are expenses incurred in the production or operation of a business, including both fixed and variable expenses.";
                            } else if (matchedeconomicWord === 'production') {
                                botResponse = "Production involves the process of creating goods or services using various resources, such as labor, materials, and technology.";
                            } else if (matchedeconomicWord === 'profit') {
                                botResponse = "Profit is the financial gain or benefit obtained from a business operation after deducting all expenses and costs.";
                            } else if (matchedeconomicWord === 'revenue') {
                                botResponse = "Revenue is the total income generated by a business through its normal business activities, such as sales of goods or services.";
                            } else if (matchedeconomicWord === 'expenses') {
                                botResponse = "Expenses are the costs incurred in the process of generating revenue, including operating expenses, salaries, and utilities.";
                            } else if (matchedeconomicWord === 'budget') {
                                botResponse = "A budget is a financial plan that outlines the expected revenues and expenses of an organization over a specific period.";
                            } else if (matchedeconomicWord === 'investment') {
                                botResponse = "Investment refers to the allocation of resources, such as money or time, into assets or activities with the expectation of generating a positive return.";
                            } else if (matchedeconomicWord === 'market') {
                                botResponse = "The market refers to the environment in which buyers and sellers interact to trade goods or services, including physical and virtual marketplaces.";
                            } else if (matchedeconomicWord === 'strategy') {
                                botResponse = "Strategy refers to the plan of action designed to achieve specific goals or objectives, typically over a long-term period.";
                            } else if (matchedeconomicWord === 'growth') {
                                botResponse = "Growth refers to the increase in size, scale, or magnitude of a business or economy over time, typically measured by indicators such as revenue, profit, or market share.";
                            } else if (matchedeconomicWord === 'branding') {
                                botResponse = "Branding involves creating a unique identity, image, or perception for a product, service, or organization to differentiate it from competitors and attract customers.";
                            } else if (matchedeconomicWord === 'innovation') {
                                botResponse = "Innovation is the process of introducing new ideas, products, services, or methods that create value for customers and contribute to the growth and success of a business.";
                            } else if (matchedeconomicWord === 'leadership') {
                                botResponse = "Leadership is the ability to inspire, influence, and guide individuals or groups toward the achievement of common goals or objectives.";
                            } else if (matchedeconomicWord === 'management') {
                                botResponse = "Management involves planning, organizing, directing, and controlling resources, such as people, finances, and materials, to achieve organizational goals effectively and efficiently.";
                            } else if (matchedeconomicWord === 'operations') {
                                botResponse = "Operations refer to the activities, processes, and systems involved in producing goods or delivering services within an organization.";
                            } else if (matchedeconomicWord === 'sales') {
                                botResponse = "Sales are the activities related to selling goods or services to customers, including prospecting, lead generation, negotiation, and closing deals.";
                            } else if (matchedeconomicWord === 'marketing') {
                                botResponse = "Marketing is the process of promoting, selling, and distributing products or services to customers through various channels and strategies.";
                            } else if (matchedeconomicWord === 'customer') {
                                botResponse = "A customer is an individual or organization that purchases goods or services from a business in exchange for money or other valuable considerations.";
                            } else if (matchedeconomicWord === 'satisfaction') {
                                botResponse = "Customer satisfaction is the degree to which customers are pleased with the products, services, or experiences provided by a business.";
                            } else if (matchedeconomicWord === 'service') {
                                botResponse = "Service refers to the intangible products or experiences provided by businesses to meet the needs and desires of customers.";
                            } else if (matchedeconomicWord === 'quality') {
                                botResponse = "Quality is the degree of excellence or superiority of a product or service in meeting the expectations and requirements of customers.";
                            } else if (matchedeconomicWord === 'product') {
                                botResponse = "A product is a tangible item or good that is manufactured or produced for sale to customers.";
                            } else if (matchedeconomicWord === 'supply') {
                                botResponse = "Supply refers to the quantity of goods or services available for sale or distribution in the market at a given time.";
                            } else if (matchedeconomicWord === 'demand') {
                                botResponse = "Demand is the desire, willingness, and ability of consumers to purchase goods or services at various prices during a specific period.";
                            } else if (matchedeconomicWord === 'competition') {
                                botResponse = "Competition is the rivalry or contest between businesses or individuals seeking to win customers, market share, or other desirable outcomes.";
                            } else if (matchedeconomicWord === 'partnership') {
                                botResponse = "A partnership is a business structure in which two or more individuals or entities collaborate and share ownership, profits, and liabilities.";
                            } else if (matchedeconomicWord === 'negotiation') {
                                botResponse = "Negotiation is the process of reaching agreements or settlements through discussion, compromise, and bargaining between parties with conflicting interests.";
                            } else if (matchedeconomicWord === 'contract') {
                                botResponse = "A contract is a legally binding agreement between two or more parties that outlines the rights, obligations, and terms of their relationship.";
                            } else if (matchedeconomicWord === 'compliance') {
                                botResponse = "Compliance refers to the adherence to laws, regulations, standards, or guidelines applicable to a particular industry, organization, or activity.";
                            }  else if (matchedeconomicWord === 'regulation') {
                                botResponse = "Regulation is the establishment and enforcement of rules, laws, or directives by governmental authorities to control or influence conduct, activities, or processes within a particular industry or society.";
                            } else if (matchedeconomicWord === 'policy') {
                                botResponse = "Policy refers to a set of principles, guidelines, or rules established by an organization, government, or authority to guide decision-making, behavior, or action.";
                            } else if (matchedeconomicWord === 'liability') {
                                botResponse = "Liability is the legal responsibility or obligation of an individual, organization, or entity to compensate others for harm, damage, or loss caused by their actions, negligence, or misconduct.";
                            } else if (matchedeconomicWord === 'asset') {
                                botResponse = "An asset is any resource or property owned or controlled by an individual, organization, or entity that has economic value and can be used to generate future benefits.";
                            } else if (matchedeconomicWord === 'equity') {
                                botResponse = "Equity represents the ownership interest or residual claim in the assets of an organization after deducting its liabilities, often represented as shares or ownership stakes.";
                            } else if (matchedeconomicWord === 'dividend') {
                                botResponse = "A dividend is a distribution of profits or earnings by a corporation to its shareholders as a return on their investment in the company's stock.";
                            } else if (matchedeconomicWord === 'shareholder') {
                                botResponse = "A shareholder, also known as a stockholder, is an individual, institution, or entity that owns shares or equity in a corporation and thus has ownership rights and claims to a portion of its assets and earnings.";
                            } else if (matchedeconomicWord === 'stakeholder') {
                                botResponse = "A stakeholder is any individual, group, or entity that has an interest, concern, or stake in the activities, decisions, or outcomes of an organization or project, including employees, customers, shareholders, suppliers, communities, and governments.";
                            } else if (matchedeconomicWord === 'merger') {
                                botResponse = "A merger is a corporate transaction in which two or more companies combine their operations, assets, and resources to form a single entity.";
                            } else if (matchedeconomicWord === 'acquisition') {
                                botResponse = "An acquisition is the purchase or takeover of one company by another, often through the exchange of cash, stock, or a combination of both.";
                            } else if (matchedeconomicWord === 'liquidation') {
                                botResponse = "Liquidation is the process of winding up or dissolving a business by selling off its assets, paying off its debts, and distributing any remaining funds or assets to its shareholders or creditors.";
                            } else if (matchedeconomicWord === 'bankruptcy') {
                                botResponse = "Bankruptcy is a legal process that allows individuals or businesses to seek relief from their debts when they are unable to repay their creditors, typically resulting in the liquidation of assets or the reorganization of debts.";
                            } else if (matchedeconomicWord === 'solvency') {
                                botResponse = "Solvency is the ability of an individual, organization, or entity to meet its financial obligations and pay off its debts as they come due, often assessed by comparing assets to liabilities.";
                            } else if (matchedeconomicWord === 'cash flow') {
                                botResponse = "Cash flow is the movement of money in and out of a business or organization, including inflows of revenue and outflows of expenses, investments, and financing activities.";
                            } else if (matchedeconomicWord === 'balance sheet') {
                                botResponse = "A balance sheet is a financial statement that provides a snapshot of an organization's assets, liabilities, and equity at a specific point in time, typically at the end of a reporting period.";
                            } else if (matchedeconomicWord === 'income statement') {
                                botResponse = "An income statement, also known as a profit and loss statement, is a financial report that summarizes an organization's revenues, expenses, and profits or losses over a specified period, such as a quarter or year.";
                            } else if (matchedeconomicWord === 'capital') {
                                botResponse = "Capital refers to financial resources, such as money, assets, or investments, that are used to generate income, grow a business, or support operations.";
                            } else if (matchedeconomicWord === 'interest rate') {
                                botResponse = "An interest rate is the percentage charged or paid on borrowed money or invested funds, typically expressed as an annualized rate.";
                            } else if (matchedeconomicWord === 'loan') {
                                botResponse = "A loan is a financial arrangement in which one party, known as the lender, provides money or resources to another party, known as the borrower, with the expectation that the borrowed funds will be repaid with interest.";
                            } else if (matchedeconomicWord === 'debt') {
                                botResponse = "Debt is an obligation or liability owed by one party, known as the debtor, to another party, known as the creditor, typically arising from borrowing money or obtaining goods or services on credit.";
                            } else if (matchedeconomicWord === 'credit') {
                                botResponse = "Credit is the ability of a borrower to obtain goods, services, or money from a lender with the promise of future repayment, often based on the borrower's reputation, financial history, and ability to repay.";
                            } else if (matchedeconomicWord === 'insurance') {
                                botResponse = "Insurance is a contract or agreement in which an individual or organization pays a premium to an insurance company in exchange for financial protection or reimbursement against specified risks, losses, or damages.";
                            } else if (matchedeconomicWord === 'risk') {
                                botResponse = "Risk is the probability or likelihood of loss, harm, or adverse events occurring due to uncertain or unpredictable factors, including economic, financial, environmental, or social factors.";
                            } else if (matchedeconomicWord === 'return on investment') {
                                botResponse = "Return on investment (ROI) is a financial metric that measures the profitability or efficiency of an investment relative to its cost, often expressed as a percentage.";
                            } else if (matchedeconomicWord === 'break-even') {
                                botResponse = "Break-even is the point at which total revenues equal total costs, resulting in neither profit nor loss, often used to assess the minimum level of sales or production needed to cover expenses.";
                            } else if (matchedeconomicWord === 'outsourcing') {
                                botResponse = "Outsourcing is the practice of contracting or delegating certain tasks, processes, or services to external providers or third-party vendors, often to reduce costs, improve efficiency, or access specialized expertise.";
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


function geoWords(matchedgeoWord) {
    let botResponse = "";
    if (matchedgeoWord === 'geography') {
        botResponse = "Geography is the study of the Earth's landscapes, environments, and the relationships between people and their environments. For example, studying how climate change affects the distribution of species is a part of geography.";
    } else if (matchedgeoWord === 'terrain') {
        botResponse = "Terrain refers to the physical features of an area, including its elevation, slope, and surface characteristics. For example, a mountainous terrain is characterized by steep slopes and high elevation.";
    } else if (matchedgeoWord === 'climate') {
        botResponse = "Climate refers to the long-term patterns of temperature, humidity, precipitation, and other atmospheric conditions in a region. For example, the Mediterranean climate is known for its hot, dry summers and mild, rainy winters.";
    } else if (matchedgeoWord === 'ecosystem') {
        botResponse = "An ecosystem is a community of living organisms (plants, animals, and microbes) in conjunction with the nonliving components of their environment (such as air, water, and mineral soil), interacting as a system. For example, a coral reef ecosystem includes coral, fish, algae, and other organisms interacting in a marine environment.";
    } else if (matchedgeoWord === 'latitude') {
        botResponse = "Latitude is the angular distance of a location north or south of the Earth's equator, measured in degrees. For example, the Tropic of Cancer is located approximately 23.5 degrees north latitude.";
    } else if (matchedgeoWord === 'longitude') {
        botResponse = "Longitude is the angular distance of a location east or west of the prime meridian, measured in degrees. For example, the city of London is located at approximately 0 degrees longitude.";
    } else if (matchedgeoWord === 'continent') {
        botResponse = "A continent is a large, continuous landmass, typically separated by oceans. For example, Africa is the second largest continent in terms of both land area and population.";
    } else if (matchedgeoWord === 'island') {
        botResponse = "An island is a landmass that is surrounded by water on all sides. For example, the Hawaiian Islands are a group of volcanic islands in the Pacific Ocean.";
    } else if (matchedgeoWord === 'ocean') {
        botResponse = "An ocean is a large body of saltwater that covers over 70% of the Earth's surface. For example, the Pacific Ocean is the largest and deepest ocean on Earth.";
    } else if (matchedgeoWord === 'river') {
        botResponse = "A river is a large natural stream of water flowing in a channel to the sea, a lake, or another river. For example, the Amazon River is the largest river by discharge volume of water in the world.";
    } else if (matchedgeoWord === 'mountain') {
        botResponse = "A mountain is a large landform that rises prominently above its surroundings, generally exhibiting steep slopes, a relatively confined summit area, and considerable local relief. For example, Mount Everest is the highest mountain peak in the world, reaching an elevation of 8,848.86 meters (29,031.7 feet) above sea level.";
    } else if (matchedgeoWord === 'plateau') {
        botResponse = "A plateau is a flat-topped tableland, elevated above the surrounding terrain with one or more sides that are steep cliffs. For example, the Tibetan Plateau is often referred to as the 'Roof of the World' because of its vast size and high elevation.";
    } else if (matchedgeoWord === 'valley') {
        botResponse = "A valley is a low area of land between hills or mountains, typically with a river or stream flowing through it. For example, the Grand Canyon in Arizona, USA, is a steep-sided canyon carved by the Colorado River.";
    } else if (matchedgeoWord === 'desert') {
        botResponse = "A desert is a barren area of land where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. For example, the Sahara Desert in North Africa is the largest hot desert in the world, covering an area of approximately 9.2 million square kilometers (3.6 million square miles).";
    } else if (matchedgeoWord === 'forest') {
        botResponse = "A forest is a large area covered chiefly with trees and undergrowth. For example, the Amazon Rainforest in South America is the largest tropical rainforest in the world, known for its incredible biodiversity.";
    } else if (matchedgeoWord === 'tundra') {
        botResponse = "The tundra is a vast, flat, treeless Arctic region of Europe, Asia, and North America where the subsoil is permanently frozen. For example, the Arctic tundra is characterized by low temperatures, short growing seasons, and sparse vegetation, such as mosses, lichens, and shrubs.";
    } else if (matchedgeoWord === 'glacier') {
        botResponse = "A glacier is a persistent body of dense ice that is constantly moving under its own weight; it forms where the accumulation of snow exceeds its ablation (melting and sublimation) over many years, often centuries. For example, the Antarctic Ice Sheet is the largest single mass of ice on Earth, covering an area of nearly 14 million square kilometers (5.4 million square miles).";
    } else if (matchedgeoWord === 'coastline') {
        botResponse = "A coastline is the boundary between land and sea, including the shoreline and adjacent coastal features. For example, the coastline of Norway is characterized by deep fjords, rugged cliffs, and numerous islands.";
    } else if (matchedgeoWord === 'delta') {
        botResponse = "A delta is a landform that forms at the mouth of a river, where the river flows into an ocean, sea, estuary, lake, or reservoir. For example, the Nile Delta in Egypt is one of the world's largest river deltas, covering an area of approximately 24,000 square kilometers (9,300 square miles).";
    } else if (matchedgeoWord === 'canyon') {
        botResponse = "A canyon is a deep, narrow valley with steep sides, often with a stream or river flowing through it. For example, the Grand Canyon in Arizona, USA, is one of the most famous canyons in the world, carved by the Colorado River over millions of years.";
    }
    return botResponse;
}

function codeWords(matchedcodeWord) {
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

/ Specificity: / CSS specificity determines which styles are applied to an element when conflicting styles are defined. Styles with higher specificity (eg, those targeting IDs or inline styles) take precedence over styles with lower specificity (eg, those targeting tag names or classes).

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
