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
    if (matchedbiosWord === "Biology") {
                                botResponse = "Biology is the scientific study of living organisms and their interactions with the environment. It encompasses a wide range of topics, from the structure and function of cells and organisms to the processes that govern life at the molecular, cellular, and ecological levels.Here are some key aspects of biology:" +

                                    "/ 'Organismal Biology' / --- This branch of biology focuses on the structure, function, behavior, and evolution of individual organisms. It includes fields such as anatomy, physiology, and behavior." +

                                    "/ 'Cell Biology' / --- Cell biology is the study of the structure and function of cells, which are the basic units of life. It examines cellular processes such as metabolism, growth, division, and communication." +

                                    "/ 'Genetics and Molecular Biology' / --- Genetics is the study of genes, heredity, and variation in living organisms. Molecular biology focuses on the structure and function of biomolecules such as DNA, RNA, and proteins, as well as the mechanisms of gene expression and regulation." +

                                    "/ 'Ecology' / --- Ecology is the study of the relationships between organisms and their environment. It examines topics such as population dynamics, community structure, ecosystem function, and the interactions between organisms and their habitats." +

                                    "/ 'Evolutionary Biology' / --- Evolutionary biology explores the processes by which species change over time and the mechanisms of evolutionary adaptation. It includes fields such as evolutionary genetics, paleontology, and comparative anatomy." +

                                    "/ 'Microbiology' / --- Microbiology is the study of microorganisms, including bacteria, viruses, fungi, and protists. It examines their structure, function, diversity, ecology, and interactions with other organisms." +

                                    "/ 'Biotechnology' / --- Biotechnology applies biological knowledge and techniques to develop practical applications in fields such as medicine, agriculture, food production, and environmental conservation. What about Biology Interest You?";
                            } else if (matchedbiosWord === "Vein that suppy") {

                                botResponse = `The veins that supply blood to the heart are known as coronary veins. These veins collect deoxygenated blood from the myocardium (heart muscle) and return it to the right atrium of the heart. The main coronary veins include:

/Great Cardiac Vein:/ - This vein runs alongside the left anterior descending artery (LAD) on the anterior surface of the heart. It collects blood from the front of the heart and the left side of the ventricles.

/Middle Cardiac Vein:/ - As the name suggests, this vein lies between the anterior and posterior surfaces of the heart and drains blood from the posterior surface of the left ventricle.

/Small Cardiac Vein:/ - This vein travels along the right side of the heart and drains blood from the right atrium and the right ventricle.

These coronary veins, along with several smaller veins, ultimately merge into a larger vein called the coronary sinus. The coronary sinus is located on the posterior surface of the heart and empties its contents into the right atrium. This process completes the circulation of deoxygenated blood back to the heart.`;
                            } else if (matchedbiosWord === "First Aid") {
                                botResponse =`First aid is the immediate care given to a person who has been injured or is suddenly ill before professional medical help is available. The primary goals of first aid are to preserve life, prevent the condition from worsening, and promote recovery. It can involve simple techniques and procedures that can be performed with minimal equipment.

                                Principles of First Aid.
                                Preserve Life:
                                
                                Ensure the safety of both the rescuer and the victim.
                                Assess the situation quickly to identify any hazards.
                                Provide immediate life-saving interventions, such as CPR if necessary.
                                Prevent the Condition from Worsening:
                                
                                Protect the victim from further harm by removing them from danger if possible.
                                Provide necessary interventions to stabilize the victim's condition, such as controlling bleeding, immobilizing fractures, or treating for shock.
                                Avoid moving the victim unnecessarily, especially if there might be spinal injuries.
                                Promote Recovery:
                                
                                Provide reassurance and comfort to the victim.
                                Apply appropriate first aid measures to treat the injury or illness.
                                Arrange for professional medical help as quickly as possible.
                                Basic Components of First Aid
                                Assessing the Situation:
                                
                                Check for dangers to yourself, the victim, and bystanders.
                                Quickly assess the victim's condition, including responsiveness, breathing, and circulation.
                                Airway, Breathing, and Circulation (ABC):
                                
                                Airway: Ensure the victim's airway is open and clear. Use techniques like the head-tilt, chin-lift maneuver.
                                Breathing: Check if the victim is breathing normally. If not, provide rescue breaths or CPR.
                                Circulation: Check for a pulse and signs of circulation. If absent, perform chest compressions.
                                Control Bleeding:
                                
                                Apply direct pressure to the wound with a clean cloth or bandage.
                                Elevate the injured part above the level of the heart if possible.
                                Use a tourniquet only if bleeding is severe and cannot be controlled by other means.
                                Treating Shock:
                                
                                Keep the victim lying down with their legs elevated if possible.
                                Maintain normal body temperature by covering the victim with a blanket.
                                Reassure the victim and keep them calm.
                                Bandaging and Splinting:
                                
                                Use sterile bandages to cover wounds and prevent infection.
                                Splint fractures to immobilize the injured part and reduce pain.
                                Burns and Scalds:
                                
                                Cool the burn with running cold water for at least 10 minutes.
                                Cover the burn with a sterile, non-stick dressing or cloth.
                                Poisoning:
                                
                                Identify the poison and call emergency services immediately.
                                Follow instructions from poison control centers, which might include inducing vomiting or giving activated charcoal.
                                CPR (Cardiopulmonary Resuscitation):
                                
                                For adults, use a ratio of 30 chest compressions to 2 rescue breaths.
                                For children and infants, the ratio may vary slightly, and the compressions should be gentler.
                                How First Aid Works
                                First aid works by providing initial care to manage the situation until professional medical services can take over. The effectiveness of first aid depends on:
                                
                                Quick Response: Immediate action can prevent complications and save lives.
                                Proper Techniques: Using correct first aid procedures minimizes harm and stabilizes the victim.
                                Calm and Reassurance: Keeping the victim calm helps prevent shock and other stress-related complications.
                                Ongoing Care: Continuous monitoring and care are essential until professional help arrives.
                                Training and Certification
                                First Aid Training: Learning first aid through certified courses is essential for effective response. Organizations like the Red Cross and American Heart Association offer such training.
                                Regular Practice: Periodic practice and refreshers ensure skills remain sharp and up-to-date.
                                By understanding and applying these basic principles and techniques, first aid can make a significant difference in emergency situations, potentially saving lives and reducing the severity of injuries and illnesses.`;
                            } else if (matchedbiosWord === "Pressure Regulation") {
                             botResponse =`The mechanism of blood pressure regulation is a complex process involving various physiological systems and feedback mechanisms. Here's a detailed explanation:

                             Components Involved in Blood Pressure Regulation
                             Heart
                             
                             Cardiac Output (CO): The amount of blood the heart pumps per minute. It is a product of heart rate (HR) and stroke volume (SV).
                             Blood Vessels
                             
                             Vascular Resistance: The resistance that blood encounters as it flows through the blood vessels. This is mainly influenced by the diameter of the arteries and arterioles.
                             Kidneys
                             
                             Renin-Angiotensin-Aldosterone System (RAAS): This hormonal system regulates blood volume and systemic vascular resistance, both of which influence cardiac output and arterial pressure.
                             Sodium and Water Retention: The kidneys adjust blood volume by controlling the excretion of sodium and water.
                             Nervous System
                             
                             Autonomic Nervous System (ANS): It controls heart rate and the diameter of blood vessels. The sympathetic nervous system (SNS) increases heart rate and constricts blood vessels, raising blood pressure, while the parasympathetic nervous system (PNS) lowers heart rate and dilates blood vessels, lowering blood pressure.
                             Hormones
                             
                             Epinephrine and Norepinephrine: These are released by the adrenal medulla and increase heart rate and contractility, and constrict blood vessels.
                             Antidiuretic Hormone (ADH): Also known as vasopressin, it promotes water retention by the kidneys and constricts blood vessels.
                             Mechanisms of Blood Pressure Regulation
                             Baroreceptor Reflex
                             
                             Baroreceptors: These are stretch-sensitive receptors located in the aorta and carotid arteries. They detect changes in blood pressure and send signals to the brainstem.
                             Response: When blood pressure rises, baroreceptors increase their firing rate, prompting the brainstem to reduce sympathetic output and increase parasympathetic output, resulting in lower heart rate and vasodilation. When blood pressure falls, the opposite occurs.
                             Renin-Angiotensin-Aldosterone System (RAAS)
                             
                             Renin Release: When blood pressure is low, the kidneys release renin.
                             Angiotensin II: Renin converts angiotensinogen to angiotensin I, which is then converted to angiotensin II. Angiotensin II constricts blood vessels and stimulates the release of aldosterone and ADH.
                             Aldosterone: Increases sodium and water reabsorption in the kidneys, increasing blood volume and pressure.
                             ADH: Promotes water reabsorption in the kidneys and constricts blood vessels, increasing blood pressure.
                             Natriuretic Peptides
                             
                             Atrial Natriuretic Peptide (ANP): Released by the atria of the heart in response to high blood volume. It promotes sodium and water excretion, leading to reduced blood volume and pressure.
                             Chemoreceptor Reflexes
                             
                             Chemoreceptors: Located in the carotid and aortic bodies, these receptors detect changes in blood levels of oxygen, carbon dioxide, and pH.
                             Response: Low oxygen, high carbon dioxide, or low pH can stimulate an increase in blood pressure to enhance blood flow and oxygen delivery.
                             Summary
                             The regulation of blood pressure is achieved through the interplay of the heart, blood vessels, kidneys, and nervous system, with hormones playing crucial roles. The primary mechanisms include the baroreceptor reflex, the RAAS, natriuretic peptides, and chemoreceptor reflexes. These systems work together to maintain blood pressure within a normal range, ensuring adequate perfusion of tissues and organs.`;
                            } else if (matchedbiosWord ==="Oxygen transport"){
                                botResponse =`Oxygen is transported in the blood by red blood cells. Hemoglobin, a protein in red blood cells, binds to oxygen in the lungs and carries it to tissues throughout the body, where it is released for cellular respiration.`;
                            } else if (matchedbiosWord === "Components of blood") {
                                botResponse =`Blood is composed of four main components: plasma, red blood cells, white blood cells, and platelets. Plasma is the liquid portion that contains water, salts, and proteins. Red blood cells carry oxygen, white blood cells fight infection, and platelets help with blood clotting.`;
                            } else if (matchedbiosWord === 'Action potential') {
                                botResponse = "An action potential is a rapid and transient change in the membrane potential of a neuron or muscle cell. It is a crucial mechanism for transmitting electrical signals along neurons and for communication between neurons in the nervous system.Here's how an action potential occurs:  '| Resting State: |' -  Neurons maintain a stable resting membrane potential, typically around -70 millivolts (mV), due to the unequal distribution of ions across the cell membrane. At rest, there are more sodium ions (Na+) outside the cell and more potassium ions (K+) inside the cell.  '| Depolarization: |' -  When a neuron receives a stimulus, such as a neurotransmitter binding to receptors on its dendrites, ion channels in the cell membrane open, allowing sodium ions to flow into the cell. This influx of positive charge depolarizes the membrane potential, making it less negative.  '| Threshold: |' -  If the depolarization reaches a certain threshold level, typically around -55 mV, voltage-gated sodium channels in the membrane open rapidly, causing a further influx of sodium ions. This rapid influx of positive charge triggers a rapid and large increase in membrane potential, known as the action potential. '| Rising Phase: |' -  During the rising phase of the action potential, the membrane potential becomes more positive, reaching a peak value of around +40 mV. This phase is driven by the influx of sodium ions into the cell. '| Repolarization: |' -  After reaching its peak, the membrane potential begins to repolarize as voltage-gated potassium channels open, allowing potassium ions to flow out of the cell. This efflux of positive charge restores the negative membrane potential. '| Hyperpolarization: |' -  Sometimes, the membrane potential temporarily becomes more negative than the resting potential during the repolarization phase. This phase is called hyperpolarization and occurs due to the continued efflux of potassium ions. '| Resting State: |' -  Once repolarization is complete, the cell returns to its resting membrane potential, ready to transmit another action potential if stimulated again.Action potentials are all-or-nothing events, meaning they occur at full amplitude once the threshold is reached and are independent of the intensity of the stimulus. They propagate along the axon of the neuron and are essential for the transmission of signals in the nervous system.";
                            } else if (matchedbiosWord === 'Resting potential') {
                                botResponse = "Resting potential refers to the difference in electric charge between the inside and the outside of a neuron when the neuron is not actively sending a signal. In other words, it's the electrical potential difference across the cell membrane of a neuron when the neuron is at rest.At rest, the inside of the neuron is negatively charged relative to the outside. This difference in charge is typically around -70 millivolts (mV) and is maintained by the selective permeability of the cell membrane to different ions, particularly sodium (Na+), potassium (K+), and chloride (Cl-) ions.The resting potential is primarily established and maintained by the sodium-potassium pump, a protein complex embedded in the cell membrane that actively transports sodium ions out of the cell and potassium ions into the cell against their concentration gradients. Additionally, the cell membrane is selectively permeable to potassium ions, allowing them to pass more freely out of the cell than sodium ions pass into the cell.The resting potential is essential for the normal functioning of neurons. It provides the baseline electrical state from which changes in membrane potential, called action potentials, can occur. Action potentials are the basis for electrical signaling in the nervous system and are crucial for transmitting information between neurons and throughout the body.";
                            } else if (matchedbiosWord === 'Neuroglia' || matchedbiosWord === 'Glial cells' || matchedbiosWord === 'Glia') {
                                botResponse = "Neuroglia, also known as glial cells or simply glia, are a type of cell found in the central nervous system (CNS) and the peripheral nervous system (PNS). They are often referred to as the supporting cells of the nervous system because they provide various functions that support and protect neurons, the primary functional cells of the nervous system.There are several types of neuroglial cells, each with distinct functions: 1. Astrocytes: These are star-shaped cells found in the CNS. Astrocytes play crucial roles in maintaining the chemical environment around neurons, regulating ion concentrations, providing metabolic support to neurons, and forming the blood-brain barrier, which controls the passage of substances between the blood and the brain. 2. Oligodendrocytes: In the CNS, oligodendrocytes are responsible for producing myelin, a fatty substance that forms a sheath around axons, the long projections of neurons. Myelin enhances the speed and efficiency of nerve impulse transmission. 3. Microglia: Microglia are the resident immune cells of the CNS. They function as the primary form of active immune defense in the central nervous system, scavenging for damaged neurons and infectious agents, and playing a role in inflammation and immune responses in the brain. 4. Ependymal Cells: These cells line the ventricles of the brain and the central canal of the spinal cord. Ependymal cells are involved in the production and circulation of cerebrospinal fluid, which cushions and protects the brain and spinal cord. 5. Schwann Cells: In the PNS, Schwann cells are the equivalent of oligodendrocytes and produce myelin sheaths around peripheral nerve fibers. They also play a role in nerve regeneration following injury.Neuroglia outnumber neurons in the nervous system and are essential for its proper functioning. While neurons are responsible for transmitting electrical signals, neuroglial cells provide structural support, regulate the chemical environment, insulate neurons, and participate in immune responses within the nervous system.";
                            } else if (matchedbiosWord === 'Oomycota' || matchedbiosWord === 'Water molds') {
                                botResponse = "Oomycota, also known as water molds, are a group of fungus-like microorganisms belonging to the kingdom Straminipila. Despite their superficial resemblance to fungi, they are not closely related and belong to a different taxonomic group. Oomycetes are typically found in water or in moist environments, and many are parasites or saprophytes, meaning they feed on decaying organic matter or living organisms.One of the most notorious oomycetes is Phytophthora infestans, the causal agent of late blight in potatoes and tomatoes, which famously caused the Irish Potato Famine in the 19th century. Other oomycetes can cause diseases in fish, algae, and other plants.Oomycota are characterized by their filamentous growth structure, similar to true fungi, but they have cell walls made of cellulose rather than chitin, which is characteristic of true fungi. This fundamental difference in cell wall composition distinguishes them from fungi and places them in a separate taxonomic group.";
                            } else if (matchedbiosWord === 'Phyacophyta') {
                                botResponse = "Phaeophyta is a division of multicellular algae commonly known as brown algae. They are primarily marine organisms, found in coastal waters around the world. Brown algae exhibit a wide range of forms and sizes, from small filamentous species to large kelps that form underwater forests.Some characteristics of Phaeophyta include: 1. Color: They are called brown algae due to the presence of the pigment fucoxanthin, which gives them their characteristic brown color. 2. Structure: Brown algae typically have a complex structure with holdfasts for attachment, stipes for support, and blades for photosynthesis. 3. Habitat: They are predominantly found in cold temperate waters, though some species can also be found in tropical regions. 4. Ecological Importance: Brown algae play crucial roles in marine ecosystems, providing habitats and food for various organisms. Some species, like kelps, form extensive underwater forests that support diverse marine life. 5. Economic Significance: Brown algae have economic importance as a source of food, particularly in Asian cuisines where certain species are consumed as seaweed. They are also used in various industrial applications, such as the production of alginates, which are used in food processing and other industries. Overall, Phaeophyta represent an ecologically and economically significant group of marine organisms with diverse forms and functions in marine ecosystems.";
                            } else if (matchedbiosWord === 'Phytophthora') {
                                botResponse = "Phytophthora is a genus of plant-pathogenic oomycetes (water molds) that includes many destructive species known to cause significant damage to crops, ornamental plants, and natural ecosystems. These organisms are responsible for various plant diseases, often leading to severe economic losses in agriculture and forestry.Here are some key characteristics and features of Phytophthora:" + '"' + " Host Range:" + '"' + " Phytophthora species have a broad host range and can infect a wide variety of plants, including vegetables, fruits, ornamentals, and trees. Different species of Phytophthora may have specific host preferences, but many are capable of causing disease in multiple plant species." + '"' + "Infection Mechanism:" + '"' + " Phytophthora species typically infect plants through their roots or by direct penetration of plant tissues. They produce motile zoospores that swim in water and can move through soil or surface water to reach plant roots. Once inside the plant, they colonize and spread through the vascular system, causing damage to root tissues and disrupting water and nutrient uptake." + '"' + "Disease Symptoms:" + '"' + " Symptoms of Phytophthora diseases vary depending on the host plant and the specific species involved. Common symptoms include wilting, yellowing or browning of leaves, root rot, stem lesions, and sudden death of plants. In some cases, characteristic water-soaked lesions may be visible on affected plant parts." + '"' + "Environmental Factors:" + '"' + " Phytophthora species thrive in warm, moist conditions, making them particularly problematic in regions with humid climates or during periods of high rainfall. Excessively wet or poorly drained soils provide favorable conditions for Phytophthora infection and spread." + '"' + "Management:" + '"' + " Managing Phytophthora diseases often involves a combination of cultural, chemical, and genetic control measures. Practices such as improving soil drainage, avoiding overwatering, rotating crops, and using resistant plant varieties can help reduce the risk of infection. Fungicides may be used to protect plants from infection, especially in high-risk situations.Some notable species of Phytophthora include Phytophthora infestans, the causative agent of late blight in potatoes and tomatoes, and Phytophthora ramorum, responsible for sudden oak death and ramorum blight in trees and shrubs. These and other Phytophthora species continue to pose significant challenges to agriculture, horticulture, and natural ecosystems worldwide.";
                            } else if (matchedbiosWord === "Urea cycle" || matchedbiosWord === "Urea") {
                                botResponse = "It looks like you are looling for " + '"' + "The urea cycle" + '"' + ", also known as the ornithine cycle, is a series of biochemical reactions that occur in the liver and some other tissues to remove excess nitrogen from the body. It plays a crucial role in the metabolism of nitrogen-containing compounds, particularly ammonia, which is toxic to the body if accumulated in excess.Here's an overview of the key steps involved in the urea cycle: " + '"' + "Formation of Carbamoyl Phosphate:" + '"' + " The cycle begins in the mitochondria of liver cells, where ammonia (NH3) and bicarbonate (HCO3-) react with ATP to form carbamoyl phosphate. This reaction is catalyzed by the enzyme carbamoyl phosphate synthetase I. " + '"' + "Formation of Citrulline:" + '"' + " Carbamoyl phosphate then combines with ornithine to form citrulline. This reaction is catalyzed by the enzyme ornithine transcarbamylase. Citrulline is transported out of the mitochondria into the cytosol." + '"' + "Formation of Argininosuccinate:" + '"' + " In the cytosol, citrulline combines with aspartate to form argininosuccinate. This reaction is catalyzed by the enzyme argininosuccinate synthetase." + '"' + "Formation of Arginine:" + '"' + " Argininosuccinate is then cleaved into arginine and fumarate by the enzyme argininosuccinate lyase. " + '"' + "Formation of Urea:" + '"' + " Arginine is hydrolyzed by arginase to produce urea and regenerate ornithine. Urea is a non-toxic compound that can be excreted by the kidneys in urine. " + '"' + "Regeneration of Ornithine:" + '"' + " Ornithine produced in the last step re-enters the mitochondria to participate in the next round of the urea cycle.The urea cycle serves to detoxify ammonia, which is produced during the catabolism of proteins and other nitrogen-containing compounds. Ammonia is converted to urea, which is much less toxic and can be safely excreted by the kidneys. The urea cycle is essential for maintaining nitrogen balance in the body and preventing the accumulation of toxic ammonia.";
                            } else if (matchedbiosWord === 'Meninges') {
                                botResponse = "The meninges are three protective membranes that cover the brain and spinal cord. These membranes are essential for providing cushioning and support to the central nervous system. The three layers of the meninges are: First is " + '"' + "Dura mater:" + '"' + " This is the outermost layer, and it is a tough, fibrous membrane that provides protection to the brain and spinal cord, Second is " + '"' + "Arachnoid mater:" + '"' + " This is the middle layer, and it is a thin, delicate membrane that lies beneath the dura mater. It helps to cushion the central nervous system and contains cerebrospinal fluid, And Third is " + '"' + "Pia mater:" + '"' + "  This is the innermost layer, and it is a thin, transparent membrane that is closely adhered to the surface of the brain and spinal cord. It provides blood vessels to nourish the central nervous system, Together, the meninges help to protect the brain and spinal cord from injury and infection. Inflammation of the meninges, known as meningitis, can lead to serious health complications.";
                            } else if (matchedbiosWord === 'Meningitis') {
                                botResponse = "Meningitis is a medical condition characterized by inflammation of the protective membranes covering the brain and spinal cord, known as the meninges. This inflammation is typically caused by an infection, which can be bacterial, viral, or fungal in nature. Meningitis can lead to symptoms such as severe headaches, fever, stiffness of the neck, sensitivity to light, and altered mental status. In severe cases, it can result in neurological complications and even death if not promptly treated. Bacterial meningitis is considered a medical emergency and requires immediate medical attention, whereas viral meningitis is often less severe and may resolve on its own with supportive care.";
                            } else if (matchedbiosWord === 'Anatomy') {
                                botResponse = "Anatomy is the branch of science that deals with the study of the structure and organization of living organisms. It involves examining the physical structure of organisms, including their organs, tissues, and systems, and understanding how they function together to support life. Anatomy is essential for various fields such as medicine, biology, and physiology, as it provides fundamental knowledge about the body's form and function.";
                            } else if (matchedbiosWord === 'Celebrospinal' || matchedbiosWord === 'Celebral Spinal' || matchedbiosWord === 'Celebral' || matchedbiosWord === 'Celebro Spinal' || matchedbiosWord === 'Csf') {
                                botResponse = "Cerebrospinal fluid is a clear, colorless body fluid found in the brain and spinal cord. It is produced in the choroid plexuses of the ventricles of the brain and circulates through the ventricular system and the subarachnoid space surrounding the brain and spinal cord. The CSF plays several crucial roles, including:1.Protecting the Brain and Spinal Cord: It acts as a cushion, providing a protective buffer that absorbs shocks and impacts that could injure these vital structures. 2.Removing Waste Products: The CSF helps to remove waste products from the brain's metabolism.3.Transporting Nutrients: It serves as a medium for delivering nutrients to the brain and spinal cord while removing waste products.4.Maintaining Chemical Stability: CSF helps in regulating the chemical environment of the CNS, ensuring optimal conditions for nerve function.";
                            } else if (matchedbiosWord === 'Celebro spinal' || matchedbiosWord === 'Celebro' || matchedbiosWord === 'Csf') {
                                var correctWord = "Celebro Spinal Fluid";
                                botResponse = "It looks like You are looking for " + `${correctWord}` + " if is that here is what I have: " + "  Cerebrospinal fluid is a clear, colorless body fluid found in the brain and spinal cord. It is produced in the choroid plexuses of the ventricles of the brain and circulates through the ventricular system and the subarachnoid space surrounding the brain and spinal cord. The CSF plays several crucial roles, including:1.Protecting the Brain and Spinal Cord: It acts as a cushion, providing a protective buffer that absorbs shocks and impacts that could injure these vital structures. 2.Removing Waste Products: The CSF helps to remove waste products from the brain's metabolism.3.Transporting Nutrients: It serves as a medium for delivering nutrients to the brain and spinal cord while removing waste products.4.Maintaining Chemical Stability: CSF helps in regulating the chemical environment of the CNS, ensuring optimal conditions for nerve function.";
                            } else if (matchedbiosWord === 'Staphylococcus' || matchedbiosWord === 'Staphalococcus' || matchedbiosWord === 'Aureus' || matchedbiosWord === 'Staphylo') {
                                botResponse = "Staphylococcus aureus is a bacterium that can cause a variety of infections in humans. Some of the diseases caused by Staphylococcus aureus include: Skin Infections: Staphylococcus aureus can cause skin infections such as boils, cellulitis, impetigo, and folliculitis.1.Wound Infections: Staphylococcus aureus can infect wounds, leading to localized infections and potentially more severe infections if the bacteria enter the bloodstream.2.Pneumonia: Staphylococcus aureus can cause pneumonia, particularly in individuals with weakened immune systems or underlying respiratory conditions.3.Bacteremia: Staphylococcus aureus bacteremia is a bloodstream infection that can occur when the bacteria enter the bloodstream, leading to potentially life-threatening conditions such as sepsis.4.Endocarditis: Staphylococcus aureus can infect the lining of the heart chambers and valves, leading to endocarditis, which is a serious and potentially fatal condition.5.Toxic Shock Syndrome (TSS): Staphylococcus aureus can produce toxins that can cause toxic shock syndrome, a rare but potentially life-threatening condition characterized by fever, rash, low blood pressure, and multiple organ failure.6.Food Poisoning: Staphylococcus aureus can produce heat-stable toxins that can cause food poisoning when contaminated food is ingested. Symptoms of staphylococcal food poisoning include nausea, vomiting, diarrhea, and abdominal cramps.";
                            } else if (matchedbiosWord === 'Physiology') {
                                botResponse = "`Physiology` is a branch of biology dealing with the processes and activities by which life is carried on and which are special features of the functioning of living things, tissues, and cells.";
                            } else if (matchedbiosWord === 'Urine') {
                                botResponse = "I hope you are looking for the urine formation. So, `Urine formation` is a very important process of the body to remove waste and toxic products after filtration. What is the definition of urine formation? Urine is the human body's liquid waste that is made up of urea, uric acid, salts, water, and other waste products that are produced by the body's metabolic activities.The kidneys filter unwanted substances from the blood and produce urine to excrete them. There are 3 main steps of urine formation: Glomerular filtration, Reabsorption Secretion. These processes ensure that only waste and excess water are removed from the body.";
                            }  else if (matchedbiosWord === "Organism") {
                                botResponse = "An organism is any individual living entity that exhibits the properties of life, including the ability to grow, reproduce, respond to stimuli, and maintain homeostasis. Organisms can be unicellular, like bacteria and archaea, or multicellular, like plants, animals, and fungi. For example, a single-celled amoeba can perform all life functions independently, while a human being is composed of trillions of specialized cells working together. Organisms interact with their environment and other organisms in various ways, forming complex ecosystems. For instance, plants (producers) convert sunlight into energy through photosynthesis, which is then utilized by herbivores (primary consumers) and predators (secondary consumers) in a food chain.";
                        
                            } else if (matchedbiosWord === "DNA") {
                                botResponse = "DNA, or deoxyribonucleic acid, is the hereditary material in almost all organisms. It carries genetic instructions used in growth, development, functioning, and reproduction. DNA is composed of two long strands forming a double helix, with each strand made up of nucleotides. Each nucleotide contains a sugar, a phosphate group, and a nitrogenous base (adenine, thymine, cytosine, or guanine). The sequence of these bases encodes genetic information. For example, the gene for hemoglobin, a protein in red blood cells that carries oxygen, is encoded in the DNA sequence of the hemoglobin gene. DNA replication is essential for cell division, ensuring each new cell receives a complete set of genetic instructions.";
                        
                            } else if (matchedbiosWord === "Gene") {
                                botResponse = "A gene is a segment of DNA that contains coding information for the synthesis of a specific protein or RNA molecule, which in turn influences traits and functions within an organism. Genes are located on chromosomes within the cell nucleus and can vary in size from a few hundred to thousands of base pairs. For instance, the gene responsible for eye color in humans determines the production of pigments in the iris. Genes can exist in different forms called alleles, which contribute to genetic diversity within a population. Mutations in genes can lead to variations that may be beneficial, neutral, or harmful to the organism. For example, a mutation in the BRCA1 gene increases the risk of breast cancer.";
                        
                            } else if (matchedbiosWord === "Species") {
                                botResponse = "A species is a group of organisms that can interbreed and produce fertile offspring in natural conditions. Species is the basic unit of biological classification and a critical concept in evolutionary biology. For example, the domestic dog (Canis lupus familiaris) and the gray wolf (Canis lupus) are different subspecies of the same species, capable of interbreeding. The concept of species helps biologists understand and organize the diversity of life on Earth. The process of speciation, where new species arise, can occur through mechanisms such as geographic isolation and natural selection, leading to the evolution of new traits.";
                        
                            } else if (matchedbiosWord === "Habitat") {
                                botResponse = "A habitat is the natural environment in which an organism lives, including all biotic (living) and abiotic (non-living) factors. Habitats provide the necessary conditions for an organism to survive, grow, and reproduce. They vary widely, from the depths of the ocean to mountain tops. For example, a coral reef is a habitat that supports a diverse community of fish, invertebrates, and marine plants. Different species adapt to their specific habitats through various means, such as camouflage, specialized feeding structures, or behavioral adaptations. Destruction or alteration of habitats can lead to loss of biodiversity and extinction of species.";
                        
                            } else if (matchedbiosWord === "Ecosystem") {
                                botResponse = "An ecosystem is a community of living organisms interacting with each other and their physical environment, functioning as a system. Ecosystems include biotic components like plants, animals, and microorganisms, and abiotic components like water, soil, and climate. For example, a forest ecosystem consists of trees, underbrush, animals, insects, and microorganisms, all interacting with each other and with non-living elements like sunlight, water, and minerals. Energy flows through ecosystems via food chains and food webs, and matter cycles within them through processes such as the water cycle and the carbon cycle. Ecosystems can be as small as a pond or as large as the entire planet.";
                        
                            } else if (matchedbiosWord === "Evolution") {
                                botResponse = "Evolution is the process through which populations of organisms change over generations through variations in their genetic material. These changes can result from mutations, gene flow, genetic drift, and natural selection. Evolutionary theory, first fully articulated by Charles Darwin, explains how species adapt to their environments and how new species arise. For instance, the evolution of antibiotic resistance in bacteria is a contemporary example of natural selection in action. Over time, beneficial traits become more common in a population, leading to the development of new adaptations that can give species a survival advantage in changing environments.";
                        
                            } else if (matchedbiosWord === "Adaptation") {
                                botResponse = "Adaptation is the process by which a species becomes better suited to its environment through evolutionary changes. Adaptations can be structural, such as the thick fur of polar bears for insulation against cold, behavioral, such as the migration of birds to warmer climates during winter, or physiological, such as the ability of desert plants to conserve water. These traits enhance the survival and reproductive success of organisms in their specific habitats. Adaptations arise over many generations through the process of natural selection, where beneficial traits that confer an advantage are more likely to be passed on to future generations.";
                        
                            } else if (matchedbiosWord === "Mitosis") {
                                botResponse = "Mitosis is a type of cell division that results in two daughter cells, each having the same number and kind of chromosomes as the parent nucleus, typical of ordinary tissue growth. Mitosis is divided into several stages: prophase, metaphase, anaphase, and telophase. During prophase, chromosomes condense and become visible, and the nuclear envelope breaks down. In metaphase, chromosomes align at the cell's equator. Anaphase follows, with sister chromatids separating and moving to opposite poles of the cell. In telophase, nuclear envelopes re-form around the separated chromosomes. Finally, cytokinesis divides the cytoplasm, resulting in two genetically identical daughter cells. For example, mitosis is responsible for the growth and repair of tissues in multicellular organisms.";
                        
                            } else if (matchedbiosWord === "Meiosis") {
                                botResponse = "Meiosis is a type of cell division that reduces the chromosome number by half, resulting in four haploid cells, each genetically distinct from the parent cell. This process is essential for sexual reproduction and occurs in two stages: meiosis I and meiosis II. In meiosis I, homologous chromosomes pair up and exchange genetic material through crossing over, then separate into two cells. Meiosis II resembles mitosis, where sister chromatids separate. The result is four genetically unique gametes (sperm or egg cells). For example, meiosis ensures genetic diversity in offspring through recombination and independent assortment of chromosomes.";
                        
                            } else if (matchedbiosWord === "Chromosome") {
                                botResponse = "A chromosome is a long, continuous thread of DNA that contains many genes and regulatory elements. In eukaryotic cells, chromosomes are located in the nucleus and are visible under a microscope during cell division. Humans have 46 chromosomes, arranged in 23 pairs. Each chromosome consists of a single molecule of DNA wrapped around histone proteins. Chromosomes ensure accurate replication and distribution of genetic material during cell division. For example, chromosome 21 is involved in Down syndrome when an individual has an extra copy (trisomy 21). Chromosomes play a crucial role in heredity, determining the genetic traits passed from parents to offspring.";
                        
                            } else if (matchedbiosWord === "Allele") {
                                botResponse = "An allele is a variant form of a gene at a particular locus (position) on a chromosome. Alleles can exist in different forms, leading to variations in the physical expression of a genetic trait. For example, the gene for flower color in pea plants has different alleles for purple and white flowers. Individuals inherit two alleles for each gene, one from each parent. If the alleles are identical, the individual is homozygous for that gene; if they are different, the individual is heterozygous. Dominant alleles mask the effect of recessive alleles in heterozygous combinations, determining the organism's phenotype.";
                        
                            } else if (matchedbiosWord === "Mutation") {
                                botResponse = "A mutation is a change in the DNA sequence of a gene or chromosome. Mutations can occur naturally during DNA replication or be induced by external factors such as radiation or chemicals. They can be beneficial, neutral, or harmful to the organism. For example, a mutation in the gene for hemoglobin can lead to sickle cell anemia, a condition where red blood cells become misshapen and cause health problems. However, some mutations can confer advantages, such as antibiotic resistance in bacteria. Mutations are a primary source of genetic variation and play a critical role in evolution and adaptation.";
                        
                            } else if (matchedbiosWord === "Natural Selection") {
                                botResponse = "Natural selection is a process in which individuals with favorable traits are more likely to survive and reproduce, passing those traits to the next generation. This mechanism of evolution, first proposed by Charles Darwin, explains how species adapt to their environment. For example, in a population of moths, individuals with coloration that better camouflages them from predators are more likely to survive and reproduce. Over time, the frequency of the advantageous trait increases in the population. Natural selection leads to the development of adaptations that enhance an organism's fitness in its specific environment.";
                        
                            } else if (matchedbiosWord === "Homeostasis") {
                                botResponse = "Homeostasis is the process by which living organisms regulate their internal environment to maintain stable, life-supporting conditions despite external changes. This involves various physiological mechanisms, such as temperature regulation, pH balance, and glucose levels. For example, humans maintain a constant body temperature through sweating, shivering, and altering blood flow to the skin. Homeostasis is critical for the proper functioning of cells and organs. Disruptions in homeostasis can lead to diseases or disorders. For instance, diabetes results from the inability to regulate blood glucose levels properly.";
                        
                            } else if (matchedbiosWord === "Metabolism") {
                                botResponse = "Metabolism encompasses all chemical reactions that occur within an organism to maintain life. These reactions are divided into catabolic pathways, which break down molecules to release energy, and anabolic pathways, which use energy to synthesize complex molecules. For example, cellular respiration is a catabolic process that converts glucose into ATP, providing energy for cellular activities. Photosynthesis is an anabolic process that builds glucose from carbon dioxide and water using sunlight energy. Metabolic pathways are regulated by enzymes and are essential for growth, reproduction, and maintaining cellular structures.";
                        
                            } else if (matchedbiosWord === "Enzyme") {
                                botResponse = "An enzyme is a protein that acts as a biological catalyst, speeding up chemical reactions in cells without being consumed in the process. Enzymes are highly specific, each catalyzing a particular reaction or type of reaction. They lower the activation energy required for reactions to proceed, allowing metabolic processes to occur efficiently. For example, the enzyme amylase breaks down starch into simpler sugars during digestion. Enzyme activity can be regulated by factors such as temperature, pH, and the presence of inhibitors or activators. Enzymes are crucial for various physiological functions, including digestion, DNA replication, and energy production.";
                        
                            } else if (matchedbiosWord === "Protein") {
                                botResponse = "Proteins are large, complex molecules made up of amino acids and play many critical roles in the body. They are essential for the structure, function, and regulation of the body's tissues and organs. For example, hemoglobin is a protein in red blood cells that carries oxygen from the lungs to the body's tissues. Enzymes, antibodies, and hormones are also proteins. Proteins are encoded by genes and are synthesized in cells through the processes of transcription and translation. The shape and function of a protein are determined by its amino acid sequence, which can be altered by mutations, potentially impacting its activity.";
                        
                            } else if (matchedbiosWord === "Carbohydrate") {
                                botResponse = "Carbohydrates are organic compounds made up of carbon, hydrogen, and oxygen, and are one of the main types of nutrients. They are the body's primary source of energy. Carbohydrates can be simple, such as glucose and fructose, or complex, such as starch and cellulose. For example, glucose is used in cellular respiration to produce ATP, the energy currency of the cell. Carbohydrates also play structural roles; for instance, cellulose provides structural support in plant cell walls. In animals, glycogen is a stored form of glucose in the liver and muscles, used for energy during physical activity.";
                        
                            } else if (matchedbiosWord === "Lipid") {
                                botResponse = "Lipids are a diverse group of hydrophobic organic compounds, including fats, oils, waxes, and steroids. They are important for storing energy, making up cell membranes, and serving as signaling molecules. For example, triglycerides are a type of lipid stored in fat cells and used for long-term energy storage. Phospholipids are essential components of cell membranes, forming a bilayer that acts as a barrier to protect the cell's interior. Steroids, such as cholesterol and hormones like estrogen and testosterone, play roles in cell signaling and regulation of physiological processes.";
                        
                            } else if (matchedbiosWord === "Nucleic Acid") {
                                botResponse = "Nucleic acids are biopolymers essential for all known forms of life. They include DNA (deoxyribonucleic acid) and RNA (ribonucleic acid). DNA stores genetic information used in the growth, development, and reproduction of organisms, while RNA is involved in protein synthesis and other cellular processes. For example, messenger RNA (mRNA) carries genetic information from DNA to the ribosome, where proteins are synthesized. Nucleic acids are composed of nucleotides, each containing a sugar, a phosphate group, and a nitrogenous base. The sequence of nucleotides in DNA and RNA determines the genetic code, which directs cellular activities.";
                        
                            } else if (matchedbiosWord === "ATP") {
                                botResponse = "ATP, or adenosine triphosphate, is the primary energy carrier in cells. It captures chemical energy from the breakdown of food molecules and releases it to fuel other cellular processes. ATP consists of an adenine base, a ribose sugar, and three phosphate groups. The high-energy bonds between the phosphate groups can be broken to release energy, powering activities such as muscle contraction, nerve impulse propagation, and chemical synthesis. For example, during cellular respiration, glucose is broken down, and the energy released is used to convert ADP (adenosine diphosphate) and an inorganic phosphate into ATP.";
                        
                            } else if (matchedbiosWord === "Genotype") {
                                botResponse = "A genotype is the set of genes in an organism's DNA responsible for a particular trait. It refers to the genetic makeup of an organism, in contrast to the phenotype, which is the physical expression of those genes. For example, in pea plants, the genotype for flower color could be 'PP' (homozygous dominant) or 'Pp' (heterozygous) for purple flowers, and 'pp' (homozygous recessive) for white flowers. Genotypes are inherited from an organism's parents and determine the potential traits that can be passed to offspring. Environmental factors can also influence the expression of genotypes.";
                        
                            } else if (matchedbiosWord === "Phenotype") {
                                botResponse = "A phenotype is the set of observable characteristics or traits of an organism, such as its morphology, development, biochemical properties, and behavior. Phenotypes result from the interaction of an organism's genotype with the environment. For example, two plants with the same genotype for height may grow to different heights if one receives more sunlight and nutrients than the other. Phenotypic variation within a population is essential for natural selection, as it allows some individuals to better survive and reproduce in their environment. Phenotypes can also be influenced by mutations, genetic recombination, and epigenetic factors.";
                        
                            } else if (matchedbiosWord === "Osmosis") {
                                botResponse = "Osmosis is the passive movement of water molecules through a selectively permeable membrane from an area of lower solute concentration to an area of higher solute concentration. This process is crucial for maintaining cell turgor and regulating the internal environment of cells. For example, plant roots absorb water from the soil through osmosis, allowing the plant to maintain its structure and transport nutrients. In animal cells, osmosis helps regulate fluid balance and transport essential molecules. Disruptions in osmotic balance can lead to cell damage or death, highlighting the importance of this process in biological systems.";
                        
                            }  else if (matchedbiosWord === "Diffusion") {
                                botResponse = "Diffusion is the passive movement of molecules or ions from an area of higher concentration to an area of lower concentration until equilibrium is reached. It is a fundamental process for the transport of substances within cells and across cell membranes. For example, oxygen diffuses from the alveoli in the lungs into the bloodstream, where its concentration is lower. Similarly, carbon dioxide diffuses from the blood into the alveoli to be exhaled from the body. In cells, small molecules like oxygen and carbon dioxide can diffuse freely across the cell membrane, while larger molecules may require specialized transport proteins. Diffusion is influenced by factors such as concentration gradient, temperature, and molecular size. It plays a vital role in processes like nutrient uptake, waste removal, and cell signaling, contributing to the maintenance of homeostasis in biological systems.";
                            } else if (matchedbiosWord === "Feedback Mechanism") {
                                botResponse = "A feedback mechanism is a regulatory process in which the output or response of a system amplifies or dampens the effects of the original stimulus. Feedback loops are essential for maintaining stability and homeostasis in biological systems. There are two main types of feedback mechanisms: positive feedback and negative feedback. Positive feedback amplifies the initial change, leading to an unstable condition. An example is the release of oxytocin during childbirth, which stimulates uterine contractions, leading to further oxytocin release. Negative feedback, on the other hand, counteracts the initial change, restoring equilibrium. For instance, in temperature regulation, when body temperature rises, sweating increases to cool the body down, bringing temperature back to normal.";
                            
                            } else if (matchedbiosWord === "Es Complex") {
                                botResponse = "An enzyme-substrate complex is a temporary complex formed when an enzyme binds to its substrate(s), the molecules upon which it acts. This interaction facilitates the catalysis of a specific chemical reaction. The substrate(s) bind to the active site of the enzyme through complementary shapes and chemical interactions, such as hydrogen bonding and hydrophobic interactions. Once bound, the enzyme catalyzes the conversion of substrates into products, which are then released, and the enzyme is free to bind to other substrates. For example, the enzyme lactase binds to lactose, breaking it down into glucose and galactose during digestion.";
                            
                            } else if (matchedbiosWord === "Catalyst") {
                                botResponse = "A catalyst is a substance that increases the rate of a chemical reaction without being consumed in the process. Catalysts lower the activation energy required for reactions to occur, thereby accelerating the reaction rate. Enzymes are biological catalysts that facilitate biochemical reactions in living organisms. For example, the enzyme catalase speeds up the decomposition of hydrogen peroxide into water and oxygen. Catalysts provide an alternative reaction pathway that allows more reactant molecules to reach the transition state, leading to faster product formation.";
                            
                            } else if (matchedbiosWord === "Cell Membrane") {
                                botResponse = "The cell membrane, also known as the plasma membrane, is a semipermeable membrane that surrounds the cytoplasm of a cell, separating it from the extracellular environment. It is composed of a phospholipid bilayer embedded with proteins, cholesterol, and carbohydrates. The phospholipid bilayer provides a barrier that regulates the passage of substances into and out of the cell. Membrane proteins play various roles, such as transport, signaling, and cell adhesion. For example, integral membrane proteins form channels and transporters that facilitate the movement of ions and molecules across the membrane. The cell membrane is essential for maintaining cell integrity, communication, and homeostasis.";
                            
                            } else if (matchedbiosWord === "Organelle") {
                                botResponse = "An organelle is a specialized structure within a cell that performs a specific function or set of functions. Organelles are membrane-bound compartments found in eukaryotic cells, each with its unique structure and role. For example, the nucleus contains the cell's genetic material and controls gene expression. Mitochondria are the powerhouses of the cell, generating ATP through cellular respiration. Chloroplasts, found in plant cells, are the site of photosynthesis, converting light energy into chemical energy. Other organelles include the endoplasmic reticulum, Golgi apparatus, lysosomes, and vacuoles. Each organelle contributes to the overall functioning and survival of the cell.";
                            
                            } else if (matchedbiosWord === "Cytoplasm") {
                                botResponse = "Cytoplasm is the gel-like substance found inside cells, filling the space between the cell membrane and the nucleus. It consists of water, salts, organic molecules, and various organelles. Cytoplasm plays a vital role in supporting and suspending organelles within the cell, facilitating their movement and interactions. It is involved in various cellular processes, including metabolism, protein synthesis, and signaling. For example, in eukaryotic cells, ribosomes in the cytoplasm synthesize proteins based on instructions from messenger RNA (mRNA) molecules transcribed from the nucleus. Cytoplasm also serves as a medium for the transport of molecules within the cell.";
                            
                            } else if (matchedbiosWord === "Ribosome") {
                                botResponse = "Ribosomes are cellular organelles responsible for protein synthesis, where amino acids are assembled into polypeptide chains based on instructions from messenger RNA (mRNA). Ribosomes can be found in both prokaryotic and eukaryotic cells, either free-floating in the cytoplasm or attached to the endoplasmic reticulum. They consist of two subunits, a large and a small subunit, each composed of ribosomal RNA (rRNA) and proteins. During translation, ribosomes read the genetic code carried by mRNA and catalyze the formation of peptide bonds between amino acids, resulting in the synthesis of proteins. Ribosomes are essential for cell growth, maintenance, and repair.";
                            
                            } else if (matchedbiosWord === "Endoplasmic Reticulum") {
                                botResponse = "The endoplasmic reticulum (ER) is a network of membrane-bound tubules and sacs found in eukaryotic cells, involved in the synthesis, folding, and transport of proteins and lipids. There are two types of ER: rough ER, which is studded with ribosomes on its surface, and smooth ER, which lacks ribosomes. Rough ER is involved in protein synthesis and processing, while smooth ER is involved in lipid synthesis, detoxification, and calcium storage. For example, in liver cells, smooth ER plays a role in detoxifying drugs and alcohol by breaking them down into harmless substances.";
                            
                            } else if (matchedbiosWord === "Mitochondrion") {
                                botResponse = "The mitochondrion is a membrane-bound organelle found in eukaryotic cells, responsible for producing ATP (adenosine triphosphate), the cell's primary energy currency. Mitochondria are often referred to as the 'powerhouses of the cell.' They have their own DNA and ribosomes and can replicate independently of the cell. Mitochondria generate ATP through cellular respiration, a series of metabolic reactions that break down glucose and other organic molecules in the presence of oxygen. For example, in muscle cells, mitochondria provide the energy needed for muscle contraction during physical activity.";
                            
                            } else if (matchedbiosWord === "Golgi Apparatus") {
                                botResponse = "The Golgi apparatus, or Golgi complex, is a cellular organelle found in eukaryotic cells, involved in modifying, sorting, and packaging proteins and lipids for transport to their final destinations. It consists of flattened membrane-bound sacs called cisternae and is often referred to as the 'post office' of the cell. Proteins synthesized in the endoplasmic reticulum (ER) are transported to the Golgi apparatus in vesicles. Within the Golgi apparatus, these proteins undergo post-translational modifications, such as glycosylation (attachment of sugar molecules) and phosphorylation (addition of phosphate groups). The modified proteins are then sorted and packaged into vesicles for transport to various cellular destinations, such as the plasma membrane for secretion or to other organelles. For example, digestive enzymes produced by pancreatic cells are packaged into vesicles in the Golgi apparatus and then secreted into the small intestine to aid in digestion.";
                            } else if (matchedbiosWord === "Lysosome") {
                                botResponse = "A lysosome is a membrane-bound organelle found in animal cells, containing digestive enzymes capable of breaking down various biomolecules, including proteins, nucleic acids, lipids, and carbohydrates. Lysosomes play a crucial role in intracellular digestion, recycling cellular components, and defense against pathogens. They are formed by the fusion of vesicles containing enzymes synthesized in the endoplasmic reticulum (ER) and Golgi apparatus. Lysosomal enzymes function optimally at acidic pH, maintained by proton pumps on the lysosomal membrane. For example, lysosomes degrade damaged organelles, foreign particles, and engulfed bacteria during the process of phagocytosis in immune cells.";
                            
                            } else if (matchedbiosWord === "Vacuole") {
                                botResponse = "A vacuole is a membrane-bound organelle found in plant cells, fungi, and some protists, serving various functions such as storage, digestion, and waste removal. Plant cells typically contain a large central vacuole that stores water, nutrients, and waste products, maintaining turgor pressure and providing structural support. Vacuoles in protists and some animal cells also play roles in osmoregulation and excretion. The membrane surrounding the vacuole, called the tonoplast, regulates the movement of molecules in and out of the vacuole. For example, in plant cells, vacuoles store pigments that give flowers their color and toxins that deter herbivores.";
                            
                            } else if (matchedbiosWord === "Cell Cycle") {
                                botResponse = "The cell cycle is the series of events that occur in a cell leading to its division and duplication. It consists of interphase, during which the cell grows and prepares for division, and mitotic (M) phase, where division occurs. Interphase is further divided into three stages: G1 (gap 1), S (synthesis), and G2 (gap 2). During G1, the cell grows, synthesizes proteins, and carries out its normal functions. In the S phase, DNA replication occurs, resulting in the duplication of chromosomes. G2 is a period of further growth and preparation for cell division. Mitotic phase includes mitosis, where the nucleus divides, and cytokinesis, where the cytoplasm divides, resulting in two daughter cells. For example, the cell cycle is tightly regulated by checkpoints that ensure proper DNA replication and repair, preventing the proliferation of damaged or abnormal cells.";
                            
                            } else if (matchedbiosWord === "Ecology") {
                                botResponse = "Ecology is the scientific study of interactions between organisms and their environment, including other organisms. It encompasses various levels of organization, from individual organisms to populations, communities, ecosystems, and the biosphere. Ecologists study patterns, processes, and relationships in nature, aiming to understand and predict how ecosystems function and respond to environmental changes. For example, population ecologists investigate factors affecting the size, distribution, and dynamics of populations, while community ecologists examine interactions between different species within a community.";
                            
                            } else if (matchedbiosWord === "Biodiversity") {
                                botResponse = "Biodiversity, short for biological diversity, refers to the variety and variability of life on Earth, including diversity within species, between species, and of ecosystems. It encompasses genetic diversity, species diversity, and ecosystem diversity. Biodiversity is essential for the functioning of ecosystems and provides numerous ecosystem services, such as pollination, nutrient cycling, and climate regulation. Human activities, such as habitat destruction, pollution, and climate change, threaten biodiversity worldwide. Conservation efforts aim to protect and restore biodiversity to ensure the continued survival of ecosystems and the species they support.";
                            
                            } else if (matchedbiosWord === "Taxonomy") {
                                botResponse = "Taxonomy is the branch of biology concerned with the classification, identification, and naming of organisms based on their shared characteristics and evolutionary relationships. It provides a hierarchical system for organizing and categorizing the diversity of life on Earth. Taxonomists classify organisms into a hierarchical scheme, including domains, kingdoms, phyla, classes, orders, families, genera, and species. For example, humans belong to the domain Eukarya, kingdom Animalia, phylum Chordata, class Mammalia, order Primates, family Hominidae, genus Homo, and species Homo sapiens.";
                            
                            } else if (matchedbiosWord === "Biome") {
                                botResponse = "A biome is a large geographical region characterized by distinct climate, vegetation, and animal life. Biomes are determined by factors such as temperature, precipitation, altitude, and soil type. Major terrestrial biomes include forests, grasslands, deserts, tundra, and aquatic biomes such as freshwater and marine ecosystems. Each biome supports a unique combination of plants and animals adapted to its specific environmental conditions. For example, the tropical rainforest biome, found near the equator, is characterized by high rainfall and biodiversity, while the desert biome, found in arid regions, has low rainfall and sparse vegetation.";
                            
                            } else if (matchedbiosWord === "Predation") {
                                botResponse = "Predation is a biological interaction in which one organism, the predator, kills and consumes another organism, the prey, for food. Predation is a key ecological process that influences population dynamics, species distribution, and community structure. Predators have adaptations for capturing, killing, and consuming prey, such as sharp teeth, claws, camouflage, and hunting strategies. Prey species have defenses to avoid predation, including camouflage, warning coloration, mimicry, and defensive structures like spines or toxins. Predation can have significant effects on prey populations and ecosystems, leading to adaptations and coevolution between predators and prey.";
                            
                            } else if (matchedbiosWord === "Commensalism") {
                                botResponse = "Commensalism is a type of symbiotic relationship between two species in which one organism benefits, and the other is neither harmed nor helped. The organism that benefits is called the commensal, while the other organism is called the host. Commensal interactions are common in nature and can involve various organisms, such as plants, animals, fungi, and microorganisms. For example, epiphytic plants, like orchids or bromeliads, grow on the branches of trees, using them for support and access to sunlight, without significantly affecting the tree's health. Commensal relationships can evolve when one organism exploits resources or habitats created by another without affecting its survival.";
                            
                            } else if (matchedbiosWord === "Parasitism") {
                                botResponse = "Parasitism is a type of symbiotic relationship between two species in which one organism, the parasite, benefits at the expense of the other organism, the host. The parasite derives nourishment and other benefits from the host, while the host is harmed in the process. Parasites can be found in various forms, including protozoa, helminths, and arthropods, and they can infect plants, animals, and even other parasites. Parasites often have specialized adaptations for attachment, feeding, and reproduction within or on the host's body. Examples of parasites include tapeworms, ticks, fleas, and parasitic plants. Parasitism can have significant effects on host populations, including reduced fitness, disease transmission, and changes in behavior or physiology.";
                            } else if (matchedbiosWord === "Mutualism") {
                                botResponse = "Mutualism is a type of symbiotic relationship between two species in which both organisms benefit from the interaction. Mutualistic associations are widespread in nature and can involve various organisms, such as plants, animals, fungi, and bacteria. Each participant provides something the other needs, such as food, shelter, protection, or services. Mutualistic relationships can be obligate, where one or both partners depend on the interaction for survival, or facultative, where the interaction is beneficial but not essential. Examples of mutualism include pollination, where flowering plants and pollinators benefit from the exchange of pollen and nectar, and nitrogen-fixing bacteria, which provide plants with usable nitrogen in exchange for carbohydrates.";
                            
                            } else if (matchedbiosWord === "Food Chain") {
                                botResponse = "A food chain is a linear sequence of organisms representing the transfer of energy and nutrients in an ecosystem. It starts with producers, such as plants or algae, which convert solar energy into organic compounds through photosynthesis. Primary consumers, also known as herbivores, feed on producers, while secondary consumers, or carnivores, feed on herbivores. Tertiary consumers, or top predators, may feed on secondary consumers. Decomposers, such as fungi and bacteria, break down organic matter from dead organisms, returning nutrients to the soil or water. Food chains illustrate the flow of energy through trophic levels in an ecosystem, with each level representing a feeding position. For example, a simple terrestrial food chain could consist of grass (producer) eaten by a grasshopper (primary consumer), which is then consumed by a frog (secondary consumer), and finally eaten by a snake (tertiary consumer).";
                            
                            } else if (matchedbiosWord === "Food network") {
                                botResponse = "A food web is a complex network of interconnected food chains representing the feeding relationships within an ecosystem. Unlike a simple linear food chain, a food web accounts for the multiple pathways by which energy and nutrients flow between species. It includes various interconnected trophic levels, from producers to primary consumers, secondary consumers, tertiary consumers, and decomposers. In a food web, organisms are often part of multiple interconnected chains, reflecting the complex interactions and dependencies within ecosystems. For example, a marine food web could involve phytoplankton (producer), zooplankton (primary consumer), small fish (secondary consumer), large fish (tertiary consumer), and decomposers like bacteria and fungi.";
                            
                            } else if (matchedbiosWord === "Trophic Level") {
                                botResponse = "A trophic level is a position in a food chain or food web occupied by a group of organisms with similar feeding habits and nutritional requirements. It represents the flow of energy and nutrients through an ecosystem, from primary producers at the base to top predators at higher levels. Trophic levels are numbered sequentially, with producers occupying the first level, primary consumers (herbivores) the second level, secondary consumers (carnivores) the third level, and so on. Decomposers, such as fungi and bacteria, occupy their own trophic level, responsible for breaking down organic matter and recycling nutrients. Trophic levels illustrate the transfer of energy and biomass between different organisms in an ecosystem.";
                            
                            } else if (matchedbiosWord === "Carbon Cycle") {
                                botResponse = "The carbon cycle is the biogeochemical cycle by which carbon is exchanged between the Earth's atmosphere, hydrosphere, biosphere, and geosphere. It involves various processes, including photosynthesis, respiration, decomposition, and combustion. Carbon dioxide (CO2) in the atmosphere is taken up by plants during photosynthesis, converting it into organic carbon compounds. Animals then consume these plants, transferring carbon through the food chain. When organisms respire, carbon is released back into the atmosphere as CO2. Decomposers break down dead organic matter, returning carbon to the soil or water. Combustion of fossil fuels and biomass also releases carbon dioxide into the atmosphere. The carbon cycle plays a crucial role in regulating Earth's climate and supporting life.";
                            
                            } else if (matchedbiosWord === "Nitrogen Cycle") {
                                botResponse = "The nitrogen cycle is the biogeochemical cycle by which nitrogen is converted between its various chemical forms, including organic, inorganic, and gaseous compounds. It involves processes such as nitrogen fixation, nitrification, assimilation, ammonification, and denitrification. Nitrogen gas (N2) makes up the majority of the Earth's atmosphere but must be converted into a usable form by nitrogen-fixing bacteria or lightning. Once fixed, nitrogen can be assimilated by plants and incorporated into organic molecules. Consumers then obtain nitrogen by consuming plants or other animals. Decomposers break down organic nitrogen compounds into ammonium (NH4+), which can be further converted into nitrate (NO3-) through nitrification. Denitrification returns nitrogen to the atmosphere as N2 gas. Human activities, such as fertilizer use and burning fossil fuels, have significantly impacted the nitrogen cycle, leading to environmental issues like eutrophication and greenhouse gas emissions.";
                            
                            } else if (matchedbiosWord === "Water Cycle") {
                                botResponse = "The water cycle, also known as the hydrological cycle, is the continuous movement of water between the Earth's surface, atmosphere, and hydrosphere. It involves processes such as evaporation, condensation, precipitation, transpiration, and runoff. Solar energy drives the evaporation of water from oceans, lakes, rivers, and land surfaces, forming water vapor in the atmosphere. Condensation occurs when water vapor cools and forms clouds or dew. Precipitation, such as rain, snow, or hail, returns water to the Earth's surface. Plants absorb water from the soil through their roots and release it into the atmosphere through transpiration. Runoff carries water over the land surface into rivers, lakes, and oceans, completing the cycle. The water cycle is essential for replenishing freshwater resources, regulating climate, and supporting terrestrial and aquatic ecosystems.";
                            
                            } else if (matchedbiosWord === "Photosynthesis") {
                                botResponse = `Photosynthesis is the biochemical process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy stored in glucose molecules. It occurs in chloroplasts, specialized organelles containing chlorophyll pigments. Photosynthesis consists of two main stages: the light-dependent reactions and the light-independent reactions (Calvin cycle). During the light-dependent reactions, light energy is absorbed by chlorophyll, leading to the production of ATP and NADPH, which are used to power the synthesis of high-energy molecules like ATP and NADPH. In the light-independent reactions, also known as the Calvin cycle, atmospheric carbon dioxide is fixed and converted into glucose using the ATP and NADPH generated in the light-dependent reactions. Oxygen is released as a byproduct of photosynthesis. The overall chemical equation for photosynthesis is:

                                6𝐶𝑂2+6𝐻2𝑂+light energy →𝐶6𝐻12𝑂6 +6𝑂2 
                                
                                Photosynthesis is fundamental to life on Earth as it provides oxygen for aerobic respiration and serves as the primary source of organic carbon compounds for heterotrophic organisms.` ;
                            } else if (matchedbiosWord === "Metabolic respiration") {
                                botResponse = `Cellular respiration is the biochemical process by which cells generate energy in the form of adenosine triphosphate (ATP) from the breakdown of organic molecules. It occurs in three main stages: glycolysis, the citric acid cycle (Krebs cycle), and oxidative phosphorylation (electron transport chain). Glycolysis takes place in the cytoplasm and involves the conversion of glucose into pyruvate, producing a small amount of ATP and NADH. In aerobic respiration, pyruvate enters the mitochondria, where it is further oxidized in the citric acid cycle, generating more ATP and reducing equivalents (NADH and FADH2). The reduced coenzymes NADH and FADH2 donate electrons to the electron transport chain located in the inner mitochondrial membrane. This electron transfer generates a proton gradient across the membrane, driving ATP synthesis through oxidative phosphorylation. The final electron acceptor is oxygen, which combines with protons to form water. The overall chemical equation for aerobic cellular respiration is: 
                                C6H12O6 + 6O2 => 6CO2 + ^H2O + energy(as ATP).  Anaerobic respiration, such as fermentation, occurs in the absence of oxygen and produces ATP through glycolysis followed by fermentation pathways.`;
                            } else if (matchedbiosWord === "Cell") {
                                botResponse = "A cell is the smallest unit of life that can replicate independently, often called the 'building blocks of life. Cells are the basic structural, functional, and biological units of all living organisms. They come in two main types: prokaryotic cells, which lack a defined nucleus (eg, bacteria), and eukaryotic cells, which have a nucleus (eg, plant and animal cells). Inside a cell, various organelles such as mitochondria (powerhouses of the cell), ribosomes (protein synthesis), and the endoplasmic reticulum (protein and lipid processing) perform specialized functions. For example, in human muscle cells, mitochondria provide the necessary energy for contraction through the production of ATP (adenosine triphosphate).";
                        
                            } else if (matchedbiosWord=== "Virus") {
                                botResponse = "A virus is a microscopic infectious agent that can only replicate inside the living cells of an organism. Viruses infect all life forms, from animals and plants to microorganisms, including bacteria and archaea. They consist of genetic material (DNA or RNA) enclosed in a protein coat, sometimes with a lipid envelope. Viruses are known for causing a range of diseases, such as the flu, HIV/AIDS, and COVID-19. Despite not being considered fully alive, they play crucial roles in genetic exchange and evolution in their hosts.";
                            } else if (matchedbiosWord=== "Fungi") {
                                botResponse = "Fungi are a kingdom of spore-producing organisms that include yeasts, molds, and mushrooms. They play vital roles in decomposing organic matter, recycling nutrients in ecosystems, and forming symbiotic relationships with plants (mycorrhizae) and animals (lichens). Fungi can also be pathogenic, causing diseases in plants, animals, and humans. They are used in various industries for fermentation, antibiotic production (like penicillin), and as food sources (such as edible mushrooms and yeast).";
                            } else if (matchedbiosWord=== "Protist") {
                                botResponse = "Protists are a diverse group of eukaryotic microorganisms, which are not animals, plants, or fungi. They can be unicellular or multicellular and exhibit various modes of nutrition, including photosynthesis (like algae), heterotrophy (like amoebas), and mixotrophy. Protists play essential roles in aquatic ecosystems as primary producers and as part of the microbial food web. Some protists, like Plasmodium (causing malaria) and Giardia (causing giardiasis), are significant pathogens.";
                            } else if (matchedbiosWord=== "Archaea") {
                                botResponse = "Archaea are a domain of single-celled microorganisms that are similar to bacteria but have unique genetic and biochemical characteristics. They are known for living in extreme environments, such as hot springs, salt lakes, and the deep ocean. Archaea play critical roles in biogeochemical cycles, including methanogenesis in anaerobic conditions. They are important for understanding the evolution of life and have applications in biotechnology, such as the production of biofuels.";
                            } else if (matchedbiosWord=== "Biodiversity") {
                                botResponse = "Biodiversity refers to the variety of life on Earth, encompassing the diversity of species, genetic variability within species, and the range of ecosystems. High biodiversity contributes to ecosystem resilience, productivity, and stability. It provides essential services such as pollination, nutrient cycling, and climate regulation. Biodiversity is threatened by human activities, including habitat destruction, pollution, climate change, and overexploitation, making conservation efforts critical.";
                            } else if (matchedbiosWord=== "Symbiosis") {
                                botResponse = "Symbiosis is a close and long-term biological interaction between two different biological organisms. It can be mutualistic (both partners benefit), commensalistic (one benefits and the other is neither helped nor harmed), or parasitic (one benefits at the expense of the other). Examples include the mutualistic relationship between bees and flowers, commensal barnacles on whales, and parasitic tapeworms in mammals. Symbiosis is fundamental to many ecological processes and evolutionary dynamics.";
                            } else if (matchedbiosWord=== "Parasitism") {
                                botResponse = "Parasitism is a type of symbiotic relationship where one organism (the parasite) lives on or in another organism (the host), causing it harm and deriving nutrients at the host's expense. Parasites can be external (ectoparasites like ticks) or internal (endoparasites like tapeworms). They affect their hosts' health and fitness, influencing population dynamics and ecosystems. Parasitism has driven significant evolutionary adaptations in both parasites and their hosts.";
                            } else if (matchedbiosWord=== "Commensalism") {
                                botResponse = "Commensalism is a symbiotic relationship where one organism benefits while the other is neither helped nor harmed. Examples include barnacles that attach to whales, gaining mobility and access to plankton, and epiphytic plants that grow on trees for better access to sunlight without affecting the host tree. Commensal relationships can influence species distribution and community dynamics within ecosystems.";
                            } else if (matchedbiosWord=== "Mutualism") {
                                botResponse = "Mutualism is a type of symbiotic relationship where both organisms involved benefit from the interaction. Classic examples include the relationship between bees and flowering plants, where bees get nectar and pollen for food, while plants get their pollen spread for reproduction. Other examples include the gut microbiota in humans and other animals, where microbes aid in digestion and, in return, get a suitable environment to live. Mutualism is crucial for many ecological processes and evolutionary adaptations.";
                            } else if (matchedbiosWord=== "Predation") {
                                botResponse = "Predation is an ecological interaction where one organism (the predator) hunts, kills, and consumes another organism (the prey). This interaction is a driving force in natural selection, influencing the evolution of adaptations like camouflage, speed, defensive structures, and behaviors in prey, as well as hunting strategies, speed, and sensory abilities in predators. Predation helps regulate population sizes and maintains the balance within ecosystems.";
                            } else if (matchedbiosWord=== "Herbivory") {
                                botResponse = "Herbivory is a form of predation where an organism primarily consumes plants or algae. Herbivores, ranging from small insects to large mammals like elephants, play crucial roles in ecosystems by influencing plant community composition and promoting plant diversity through selective feeding. Herbivory drives evolutionary adaptations in plants, such as the development of physical defenses (thorns, tough leaves) and chemical defenses (toxins, bitter compounds).";
                            } else if (matchedbiosWord=== "Trophic Level") {
                                botResponse = "A trophic level represents a position in a food chain or food web, reflecting the number of steps an organism is from the primary source of energy, typically the sun. Primary producers (plants and algae) form the first trophic level, primary consumers (herbivores) form the second, secondary consumers (carnivores that eat herbivores) form the third, and so on. Understanding trophic levels helps ecologists study energy flow and nutrient cycling in ecosystems.";
                            } else if (matchedbiosWord=== "Food Chain") {
                                botResponse = "A food chain is a linear sequence of organisms where each is eaten by the next member in the chain. It begins with primary producers like plants, followed by primary consumers (herbivores), secondary consumers (carnivores that eat herbivores), and tertiary consumers (top predators). Food chains illustrate the flow of energy and nutrients through an ecosystem but are simplified models; real ecosystems have complex food webs with multiple interconnected food chains.";
                            } else if (matchedbiosWord=== "Food Web") {
                                botResponse = "A food web is a complex network of interconnected food chains within an ecosystem, illustrating how various organisms are linked through feeding relationships. It shows the multiple pathways through which energy and nutrients flow, highlighting the diversity and complexity of trophic interactions. Food webs provide a more accurate representation of ecosystem dynamics compared to simple food chains, as they account for organisms that occupy multiple trophic levels and those with varied diets.";
                            } else if (matchedbiosWord=== "Biomass") {
                                botResponse = "Biomass refers to the total mass of living organisms in a given area or ecosystem at a certain time, including plants, animals, and microorganisms. It is a crucial indicator of the amount of available energy and the health of ecosystems. Biomass can be measured in terms of dry weight or energy content and is used in ecological studies to assess productivity, energy flow, and nutrient cycling. Biomass also plays a significant role in the global carbon cycle.";
                            } else if (matchedbiosWord=== "Biogeochemical Cycle") {
                                botResponse = "A biogeochemical cycle describes the movement of chemical elements and compounds between living organisms and the physical environment. Key cycles include the carbon, nitrogen, and water cycles. These cycles involve processes such as photosynthesis, respiration, decomposition, and nutrient uptake, which transfer elements through the atmosphere, hydrosphere, lithosphere, and biosphere. Understanding these cycles is essential for studying ecosystem function, climate change, and human impacts on the environment.";
                            } else if (matchedbiosWord=== "Carbon Cycle") {
                                botResponse = "The carbon cycle is the process through which carbon atoms cycle through the Earth's ecosystems. It involves the exchange of carbon among the atmosphere, oceans, soil, and living organisms. Key processes include photosynthesis, where plants convert CO2 into organic matter, respiration, where organisms release CO2 back into the atmosphere, and decomposition. Human activities, such as burning fossil fuels and deforestation, significantly impact the carbon cycle, contributing to climate change.";
                            } else if (matchedbiosWord=== "Nitrogen Cycle") {
                                botResponse = "The nitrogen cycle is the series of processes by which nitrogen and its compounds are interconverted in the environment and in living organisms. Key stages include nitrogen fixation (conversion of atmospheric N2 into usable forms by bacteria), nitrification (conversion of ammonia into nitrates by bacteria), assimilation (uptake of nitrates by plants), ammonification (decomposition of organic nitrogen back into ammonia), and denitrification (conversion of nitrates back into N2 by bacteria). This cycle is crucial for building proteins and nucleic acids.";
                            } else if (matchedbiosWord=== "Water Cycle") {
                                botResponse = "The water cycle, or hydrological cycle, describes the continuous movement of water on, above, and below the surface of the Earth. Key processes include evaporation (water turning into vapor), condensation (vapor forming clouds), precipitation (rain, snow, etc.), infiltration (water soaking into the ground), runoff (water flowing over land), and transpiration (water released by plants). This cycle is essential for distributing fresh water across the planet, supporting all life forms and ecosystems.";
                            } else if (matchedbiosWord=== "Cell Theory") {
                                botResponse = "Cell theory is a fundamental principle in biology that states: 1) All living organisms are composed of one or more cells. 2) The cell is the basic unit of life. 3) All cells arise from pre-existing cells. Proposed in the mid-19th century by scientists Matthias Schleiden, Theodor Schwann, and Rudolf Virchow, this theory underpins modern biological research, highlighting the importance of cells in structure, function, and heredity in all living organisms.";
                            } else if (matchedbiosWord=== "Genetic Code") {
                                botResponse = "The genetic code is the set of rules by which information encoded in genetic material (DNA or RNA sequences) is translated into proteins by living cells. It is nearly universal among all organisms and is based on triplet codons, sequences of three nucleotides, each of which corresponds to a specific amino acid or a stop signal during protein synthesis. The genetic code ensures the accurate transfer of genetic information from DNA to functional proteins, essential for all biological processes.";
                            } else if (matchedbiosWord=== "Transcription") {
                                botResponse = "Transcription is the process by which the genetic information in DNA is copied into messenger RNA (mRNA). This occurs in the cell nucleus (in eukaryotes) and is the first step in gene expression. During transcription, RNA polymerase binds to the DNA at a specific sequence called the promoter, unwinds the DNA strands, and synthesizes a complementary RNA strand. The mRNA then carries the genetic information from the DNA to the ribosomes in the cytoplasm, where translation into protein occurs.";
                            } else if (matchedbiosWord=== "Translation") {
                                botResponse = "Translation is the process by which the sequence of nucleotides in messenger RNA (mRNA) is decoded to produce a specific sequence of amino acids, forming a protein. This occurs in the ribosomes, located in the cytoplasm. Transfer RNA (tRNA) molecules bring amino acids to the ribosome, where the mRNA is read in codons (three-nucleotide sequences). Each codon specifies an amino acid or a stop signal. Translation is the second major step in gene expression, following transcription.";
                            } else if (matchedbiosWord=== "RNA (Ribonucleic Acid)") {
                                botResponse = "RNA (Ribonucleic Acid) is a nucleic acid essential for various biological roles, including coding, decoding, regulation, and expression of genes. Unlike DNA, RNA is typically single-stranded and contains the sugar ribose and the nucleotide uracil instead of thymine. Key types of RNA include messenger RNA (mRNA), which carries genetic information; transfer RNA (tRNA), which brings amino acids to ribosomes; and ribosomal RNA (rRNA), which makes up the ribosomes. RNA is central to protein synthesis and gene regulation.";
                            } else if (matchedbiosWord=== "tRNA (Transfer RNA)") {
                                botResponse = "tRNA (Transfer RNA) is a type of RNA molecule that helps decode a messenger RNA (mRNA) sequence into a protein during translation. Each tRNA molecule has an anticodon region that pairs with a complementary codon on the mRNA and an attached specific amino acid corresponding to that codon. The tRNA molecules transport the correct amino acids to the ribosome, facilitating the assembly of the protein chain according to the genetic instructions carried by the mRNA.";
                            } else if (matchedbiosWord=== "mRNA (Messenger RNA)") {
                                botResponse = "mRNA (Messenger RNA) is a type of RNA that carries genetic information from DNA to the ribosome, where proteins are synthesized. mRNA is transcribed from a DNA template in the nucleus and then travels to the cytoplasm in eukaryotic cells. Each mRNA molecule specifies the amino acid sequence of a protein through a series of codons, which are read by the ribosome during translation. mRNA plays a crucial role in the gene expression process, serving as a template for protein synthesis.";
                            } else if (matchedbiosWord=== "rRNA (Ribosomal RNA)") {
                                botResponse = "rRNA (Ribosomal RNA) is a type of RNA that, together with proteins, forms the structure of ribosomes. Ribosomes are the molecular machines that facilitate the translation of mRNA into protein. rRNA plays both a structural and catalytic role in protein synthesis, ensuring the proper alignment of mRNA and tRNAs and catalyzing the formation of peptide bonds between amino acids. rRNA is essential for the function of ribosomes in all living cells.";
                            } else if (matchedbiosWord=== "Genetic Engineering") {
                                botResponse = "Genetic engineering is the direct manipulation of an organism's genome using biotechnology. It involves altering the genetic material of an organism to achieve desired traits, such as disease resistance in crops, production of insulin in bacteria, or creation of genetically modified animals. Techniques include gene cloning, CRISPR-Cas9, and recombinant DNA technology. Genetic engineering has vast applications in medicine, agriculture, and research, raising ethical, environmental, and safety concerns.";
                            } else if (matchedbiosWord=== "CRISPR") {
                                botResponse = "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a revolutionary genetic engineering technology that allows for precise, targeted changes to the DNA of living organisms. It uses a guide RNA to direct the Cas9 enzyme to a specific DNA sequence, where the enzyme makes a cut, enabling the addition or removal of genetic material. CRISPR has transformed research, enabling advancements in gene therapy, agriculture, and disease study, and has potential for treating genetic disorders.";
                            } else if (matchedbiosWord=== "Cloning") {
                                botResponse = "Cloning is the process of creating genetically identical copies of a biological entity. This can occur naturally (as in identical twins) or artificially (using techniques such as somatic cell nuclear transfer). There are different types of cloning, including reproductive cloning (creating a new organism), therapeutic cloning (producing tissues or organs for medical use), and gene cloning (replicating specific genes). Cloning has applications in research, medicine, agriculture, and conservation.";
                            } else if (matchedbiosWord=== "Stem Cell") {
                                botResponse = "Stem cells are undifferentiated cells capable of developing into various cell types in the body. They can divide and renew themselves over long periods, making them essential for growth, development, and tissue repair. There are two main types: embryonic stem cells, which can differentiate into any cell type, and adult stem cells, which are more limited in their potential. Stem cell research holds promise for regenerative medicine, treating conditions such as spinal cord injuries, Parkinson's disease, and diabetes.";
                            } else if (matchedbiosWord=== "Gene Therapy") {
                                botResponse = "Gene therapy is a medical technique that involves modifying or replacing defective genes to treat or prevent genetic disorders. It can be achieved by introducing healthy genes into cells, using vectors like viruses to deliver genetic material, or by directly editing the genome using technologies such as CRISPR-Cas9. Gene therapy has the potential to treat a range of diseases, including inherited disorders, certain types of cancer, and viral infections, although it poses ethical and technical challenges.";
                            } else if (matchedbiosWord=== "Ecology") {
                                botResponse = "Ecology is the branch of biology that studies the interactions between organisms and their environment. It encompasses various levels of organization, including individuals, populations, communities, ecosystems, and the biosphere. Ecologists examine how these interactions influence the distribution and abundance of organisms, the flow of energy and matter through ecosystems, and the impact of human activities on the natural world. Ecology is crucial for understanding and addressing environmental issues such as climate change, habitat destruction, and biodiversity loss.";
                            } else if (matchedbiosWord=== "Population") {
                                botResponse = "A population in biological terms refers to a group of individuals of the same species living in a specific area and capable of interbreeding. Population ecology studies the dynamics of populations, including their size, density, distribution, and growth rates. Factors influencing population dynamics include birth and death rates, immigration and emigration, and environmental conditions. Understanding population ecology is essential for conservation efforts, managing wildlife, and studying human impacts on ecosystems.";
                            } else if (matchedbiosWord=== "Community") {
                                botResponse = "A community in ecology is a group of interacting species living in the same area. Community ecology examines the structure, composition, and dynamics of these assemblages, including species diversity, trophic interactions, and successional changes. Communities are shaped by biotic interactions such as competition, predation, and mutualism, as well as abiotic factors like climate and soil type. Studying ecological communities helps us understand biodiversity patterns, ecosystem functions, and responses to environmental changes.";
                            } else if (matchedbiosWord=== "Biome") {
                                botResponse = "A biome is a large geographical region characterized by its distinct climate, flora, and fauna. Major biomes include deserts, forests, grasslands, tundras, and aquatic ecosystems. Each biome supports specific communities of plants and animals adapted to its particular environmental conditions. Biomes are influenced by factors such as temperature, precipitation, altitude, and latitude. Understanding biomes is crucial for studying global biodiversity, ecosystem services, and the impacts of climate change.";
                            } else if (matchedbiosWord=== "Biosphere") {
                                botResponse = "The biosphere is the global ecological system that encompasses all living organisms and their interactions with the abiotic environment (air, water, and soil). It includes all ecosystems and living beings, extending from the deepest ocean trenches to the upper atmosphere. The biosphere is essential for maintaining life on Earth, supporting biodiversity, and regulating global biogeochemical cycles. Human activities, such as pollution and deforestation, significantly impact the biosphere's health and sustainability.";
                            } else if (matchedbiosWord=== "Autotroph") {
                                botResponse = "Autotrophs are organisms that produce their own food using inorganic substances like carbon dioxide and water, typically through photosynthesis or chemosynthesis. They are primary producers in ecosystems, forming the base of the food chain by converting solar or chemical energy into organic compounds. Examples include plants, algae, and certain bacteria. Autotrophs play a crucial role in sustaining life on Earth by providing energy and nutrients for heterotrophic organisms.";
                            } else if (matchedbiosWord=== "Heterotroph") {
                                botResponse = "Heterotrophs are organisms that obtain their energy and nutrients by consuming other organisms, as they cannot produce their own food. They include animals, fungi, and many bacteria and protists. Heterotrophs play essential roles in ecosystems as consumers and decomposers, breaking down organic matter and recycling nutrients. They rely on autotrophs and other heterotrophs for sustenance, contributing to energy flow and nutrient cycling within ecological communities.";
                            } else if (matchedbiosWord=== "Detritivore") {
                                botResponse = "Detritivores are organisms that feed on dead organic matter (detritus), including decomposing plant and animal parts, as well as feces. They play a crucial role in ecosystems by breaking down and recycling nutrients, contributing to soil formation and fertility. Common detritivores include earthworms, beetles, and certain fungi and bacteria. By decomposing organic material, detritivores help maintain the flow of energy and nutrients through ecosystems, supporting overall ecological balance.";
                            } else if (matchedbiosWord === "Decomposer") {
                                botResponse = "Decomposers are organisms that break down dead or decaying organic material, turning it into simpler inorganic substances. This process is crucial for recycling nutrients in ecosystems, as it allows elements like carbon, nitrogen, and phosphorus to be reused by living organisms. Decomposers include bacteria, fungi, and certain insects and invertebrates. By decomposing organic matter, they help maintain soil health and fertility, contribute to the carbon cycle, and ensure the flow of energy through the ecosystem. Without decomposers, dead material would accumulate, nutrients would become locked in unusable forms, and ecosystems would collapse.";
                            } else if (matchedbiosWord === "Photosystem") {
                                botResponse = "Photosystems are complexes of proteins and pigments located in the thylakoid membranes of chloroplasts in plants, algae, and cyanobacteria. They play a critical role in the light-dependent reactions of photosynthesis. There are two types of photosystems: Photosystem I (PSI) and Photosystem II (PSII). Each photosystem absorbs light energy, which excites electrons to a higher energy level. In PSII, these high-energy electrons are used to split water molecules, releasing oxygen and providing electrons and protons for the formation of ATP and NADPH. In PSI, electrons are re-energized by light absorption and eventually contribute to the production of NADPH. Together, these processes convert light energy into chemical energy, driving the synthesis of organic compounds.";
                            } else if (matchedbiosWord === "Calvin Cycle") {
                                botResponse = "The Calvin Cycle, also known as the C3 cycle or the dark reactions of photosynthesis, occurs in the stroma of chloroplasts. It does not directly require light, but it depends on ATP and NADPH produced by the light-dependent reactions. The Calvin Cycle involves three main stages: carbon fixation, reduction, and regeneration of ribulose-1,5-bisphosphate (RuBP). In carbon fixation, CO₂ is attached to a five-carbon sugar (RuBP) by the enzyme Rubisco, forming a six-carbon compound that splits into two molecules of 3-phosphoglycerate (3-PGA). These molecules are then reduced to glyceraldehyde-3-phosphate (G3P) using ATP and NADPH. Finally, some G3P molecules exit the cycle to form glucose and other carbohydrates, while others are used to regenerate RuBP, enabling the cycle to continue.";
                            } else if (matchedbiosWord === "Krebs Cycle") {
                                botResponse = "The Krebs Cycle, also known as the citric acid cycle or TCA cycle, is a series of chemical reactions used by all aerobic organisms to generate energy through the oxidation of acetyl-CoA derived from carbohydrates, fats, and proteins. This cycle takes place in the mitochondria and is a key component of cellular respiration. It produces ATP, NADH, and FADH₂, which are used in the electron transport chain to generate further ATP. The Krebs Cycle also produces carbon dioxide as a waste product. The cycle begins with the combination of acetyl-CoA and oxaloacetate to form citrate, which is then converted through several steps back to oxaloacetate, ready to start the cycle again.";
                            } else if (matchedbiosWord === "Glycolysis") {
                                botResponse = "Glycolysis is the process of breaking down glucose into pyruvate, yielding ATP and NADH. It is the first step in cellular respiration and occurs in the cytoplasm of cells. Glycolysis does not require oxygen, making it an anaerobic process. It involves a series of ten enzyme-catalyzed reactions that convert glucose (a six-carbon sugar) into two molecules of pyruvate (a three-carbon compound). The net energy yield from glycolysis is two molecules of ATP and two molecules of NADH per molecule of glucose. Glycolysis is a critical metabolic pathway, providing energy and intermediates for other metabolic processes.";
                            } else if (matchedbiosWord === "Fermentation") {
                                botResponse = "Fermentation is a metabolic process that produces chemical changes in organic substrates through the action of enzymes. It occurs in the absence of oxygen (anaerobic conditions) and results in the production of energy in the form of ATP. There are several types of fermentation, including lactic acid fermentation (performed by muscle cells and certain bacteria) and alcoholic fermentation (performed by yeasts and some types of bacteria). For example, lactic acid fermentation converts pyruvate into lactic acid, while alcoholic fermentation converts pyruvate into ethanol and carbon dioxide. Fermentation is crucial for the production of various food and beverages, such as yogurt, beer, and bread.";
                            } else if (matchedbiosWord === "Aerobic Respiration") {
                                botResponse = "Aerobic respiration is the process of producing cellular energy in the presence of oxygen. It involves the complete oxidation of glucose to carbon dioxide and water, yielding a high amount of ATP. The process consists of three main stages: glycolysis, the Krebs Cycle, and the electron transport chain. Glycolysis occurs in the cytoplasm, producing pyruvate, which is then transported into the mitochondria. In the mitochondria, pyruvate undergoes oxidative decarboxylation to form acetyl-CoA, which enters the Krebs Cycle. The high-energy electrons from NADH and FADH₂ produced in the Krebs Cycle are transferred through the electron transport chain, creating a proton gradient that drives the synthesis of ATP via oxidative phosphorylation. Aerobic respiration is much more efficient at generating ATP than anaerobic respiration.";
                            } else if (matchedbiosWord === "Anaerobic Respiration") {
                                botResponse = "Anaerobic respiration is a type of respiration that does not use oxygen. Instead, it uses other electron acceptors, such as sulfate, nitrate, or carbon dioxide, to complete the electron transport chain. This process occurs in environments where oxygen is scarce, such as deep soil, waterlogged conditions, or within certain types of microorganisms. Anaerobic respiration includes processes like denitrification, methanogenesis, and sulfate reduction. It is less efficient than aerobic respiration in terms of ATP yield but is essential for the survival of many organisms in oxygen-depleted environments. For example, some bacteria use nitrate as an electron acceptor to produce nitrogen gas, while methanogens produce methane during the breakdown of organic material.";
                            } else if (matchedbiosWord === "Immune System") {
                                botResponse = "The immune system is the body's defense system against infections and diseases. It consists of a complex network of cells, tissues, and organs that work together to protect the body from harmful invaders like bacteria, viruses, fungi, and parasites. The immune system has two main components: the innate immune system, which provides immediate, non-specific defense against pathogens, and the adaptive immune system, which provides a specific response to pathogens and has the ability to remember them for faster response upon future exposures. Key components of the immune system include white blood cells (such as lymphocytes and phagocytes), antibodies, the complement system, and various organs like the thymus, spleen, and lymph nodes. Proper functioning of the immune system is essential for maintaining health and preventing infections.";
                            } else if (matchedbiosWord === "Antibody") {
                                botResponse = "Antibodies, also known as immunoglobulins, are Y-shaped proteins produced by B cells of the immune system. They are crucial for identifying and neutralizing foreign objects like bacteria, viruses, and toxins. Each antibody has a unique region that binds specifically to an antigen (a molecule that triggers an immune response). Once bound to an antigen, antibodies can neutralize it directly or mark it for destruction by other immune cells. There are several classes of antibodies, including IgA, IgD, IgE, IgG, and IgM, each with distinct functions in the immune response. Antibodies are also used in medical diagnostics and treatments, such as in vaccines and monoclonal antibody therapies.";
                            } else if (matchedbiosWord === "Antigen") {
                                botResponse = "An antigen is any substance that can provoke an immune response in the body. Antigens are typically proteins or polysaccharides found on the surface of pathogens like bacteria, viruses, fungi, and parasites. When the immune system detects an antigen, it responds by producing antibodies and activating various immune cells to neutralize or destroy the pathogen. The specificity of antigens allows the immune system to distinguish between self and non-self, helping to protect the body from infections while avoiding attacks on its own cells. Vaccines work by introducing harmless antigens to the body, training the immune system to recognize and respond to specific pathogens.";
                            } else if (matchedbiosWord === "Vaccine") {
                                botResponse = "A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease. It typically contains an agent resembling a disease-causing microorganism, often made from weakened or killed forms of the microbe, its toxins, or its surface proteins. When administered, a vaccine stimulates the body's immune system to recognize the agent as a threat, destroy it, and remember it, so the immune system can more easily recognize and destroy any future encounters with the microorganism. Vaccines have been instrumental in controlling and eradicating infectious diseases such as smallpox, polio, and measles, and are crucial tools in public health.";
                            } else if (matchedbiosWord === "Pathogen") {
                                botResponse = "A pathogen is any organism that can cause disease. Pathogens include viruses, bacteria, fungi, protozoa, and worms. They can infect hosts through various means, such as ingestion, inhalation, or direct contact. Pathogens can cause a wide range of diseases, from minor illnesses like the common cold to serious conditions like tuberculosis, malaria, and COVID-19. The body's immune system works to defend against pathogens, but some pathogens have evolved mechanisms to evade the immune response. Understanding pathogens and their mechanisms of infection is essential for developing effective treatments and preventive measures.";
                            } else if (matchedbiosWord === "Endocrine System") {
                                botResponse = "The endocrine system is a network of glands that produce and secrete hormones to regulate various bodily functions, such as metabolism, growth, development, tissue function, sexual function, reproduction, sleep, and mood. Major endocrine glands include the hypothalamus, pituitary gland, thyroid, parathyroids, adrenal glands, pineal body, and reproductive organs (ovaries and testes). Hormones are released into the bloodstream and transported to target organs and tissues, where they exert their effects. The endocrine system works in concert with the nervous system to maintain homeostasis and respond to changes in the environment.";
                            } else if (matchedbiosWord === "Hormone") {
                                botResponse = "Hormones are chemical messengers produced by endocrine glands and released into the bloodstream. They regulate various physiological processes, including growth, metabolism, reproduction, and mood. Hormones can have widespread effects throughout the body or act on specific target cells. Examples of hormones include insulin, which regulates blood glucose levels; thyroid hormones, which control metabolism; and estrogen and testosterone, which regulate reproductive functions. Hormonal imbalances can lead to a variety of health issues, such as diabetes, thyroid disorders, and reproductive problems.";
                            } else if (matchedbiosWord === "Nervous System") {
                                botResponse = "The nervous system is a complex network of nerves and cells that transmit signals between different parts of the body. It consists of two main parts: the central nervous system (CNS), which includes the brain and spinal cord, and the peripheral nervous system (PNS), which includes all the nerves outside the CNS. The nervous system controls and coordinates body activities by transmitting electrical signals and processing information from sensory organs. It is responsible for voluntary movements, reflexes, and functions such as heart rate, digestion, and breathing. Disorders of the nervous system can lead to conditions such as epilepsy, multiple sclerosis, and Parkinson's disease.";
                            } else if (matchedbiosWord === "Neuron") {
                                botResponse = "Neurons are specialized cells that transmit nerve impulses in the nervous system. They consist of three main parts: the cell body (soma), dendrites, and an axon. The cell body contains the nucleus and is responsible for maintaining the cell's functions. Dendrites receive signals from other neurons and convey them to the cell body. The axon transmits impulses away from the cell body to other neurons, muscles, or glands. Neurons communicate through synapses, where the release of neurotransmitters allows the transmission of signals across the synaptic gap. Neurons play a crucial role in processing and transmitting information throughout the body.";
                            } else if (matchedbiosWord === "Synapse") {
                                botResponse = "A synapse is a junction between two neurons, where the transfer of information occurs. It consists of a presynaptic ending that contains neurotransmitters, a synaptic cleft, and a postsynaptic ending with receptor sites. When an electrical signal (action potential) reaches the presynaptic ending, it triggers the release of neurotransmitters into the synaptic cleft. These chemicals then bind to receptors on the postsynaptic neuron, causing changes in its membrane potential and allowing the signal to continue. Synapses are essential for neuronal communication, learning, and memory.";
                            } else if (matchedbiosWord === "Axon") {
                                botResponse = "An axon is a long, slender projection of a neuron that conducts electrical impulses away from the neuron's cell body. Axons are critical for transmitting information to different neurons, muscles, and glands. They can vary greatly in length, from a fraction of an inch to several feet in the case of neurons that extend from the spinal cord to the toes. The axon is covered with a myelin sheath in many neurons, which helps increase the speed and efficiency of signal transmission. The end of the axon branches into terminals that release neurotransmitters to communicate with other cells.";
                            } else if (matchedbiosWord === "Dendrite") {
                                botResponse = "Dendrites are branched extensions of a neuron's cell body that receive signals from other neurons and convey this information to the cell body. They are covered with synapses, where they receive neurotransmitter signals released by the axons of other neurons. Dendrites play a crucial role in integrating synaptic inputs and determining the extent to which the neuron will respond to incoming signals. Their complex branching patterns allow them to form connections with a large number of other neurons, facilitating intricate networks of communication within the nervous system.";
                            } else if (matchedbiosWord === "Action Potential") {
                                botResponse = "An action potential is a rapid, temporary change in the electrical membrane potential of a neuron or muscle cell. It is a fundamental process for the conduction of electrical signals along neurons. An action potential occurs when a neuron receives a sufficient stimulus, causing a rapid influx of sodium ions (Na+) into the cell, followed by an efflux of potassium ions (K+). This ion exchange creates a wave of electrical depolarization that travels down the axon to the synaptic terminals. The action potential enables neurons to communicate with each other and with other types of cells, such as muscle cells.";
                            } else if (matchedbiosWord === "Central Nervous System") {
                                botResponse = "The central nervous system (CNS) consists of the brain and spinal cord. It is responsible for processing and integrating sensory information, controlling motor functions, and overseeing cognitive processes such as thinking, memory, and emotion. The brain acts as the control center, interpreting sensory input and initiating responses, while the spinal cord serves as a conduit for signals between the brain and the rest of the body. The CNS is protected by the skull and vertebral column, as well as by the meninges and cerebrospinal fluid. Disorders of the CNS can lead to various neurological conditions, such as stroke, multiple sclerosis, and neurodegenerative diseases.";
                            } else if (matchedbiosWord === "Peripheral Nervous System") {
                                botResponse = "The peripheral nervous system (PNS) includes all the nerves outside the central nervous system. It connects the CNS to the limbs and organs, facilitating communication between the brain and spinal cord and the rest of the body. The PNS is divided into the somatic nervous system, which controls voluntary movements and transmits sensory information, and the autonomic nervous system, which regulates involuntary functions such as heart rate, digestion, and respiratory rate. The autonomic nervous system is further divided into the sympathetic and parasympathetic systems, which work together to maintain homeostasis.";
                            } else if (matchedbiosWord === "Circulatory System") {
                                botResponse = "The circulatory system, also known as the cardiovascular system, is responsible for transporting blood, nutrients, oxygen, carbon dioxide, and hormones throughout the body. It consists of the heart, blood vessels (arteries, veins, and capillaries), and blood. The heart pumps oxygenated blood from the lungs to the body and deoxygenated blood from the body to the lungs. The circulatory system plays a crucial role in maintaining homeostasis, providing cells with essential nutrients, removing waste products, and regulating body temperature. Disorders of the circulatory system, such as heart disease, hypertension, and stroke, are leading causes of morbidity and mortality worldwide.";
                            } else if (matchedbiosWord === "Heart") {
                                botResponse = "The heart is a muscular organ responsible for pumping blood throughout the body. It is located in the chest cavity and is roughly the size of a fist. The heart consists of four chambers: two atria (upper chambers) and two ventricles (lower chambers). The right side of the heart receives deoxygenated blood from the body and pumps it to the lungs for oxygenation, while the left side receives oxygenated blood from the lungs and pumps it to the rest of the body. The heart's pumping action is regulated by electrical impulses that coordinate the contraction and relaxation of the heart muscle. Proper heart function is essential for maintaining circulation and delivering oxygen and nutrients to tissues.";
                            } else if (matchedbiosWord === "Life fluid") {
                                botResponse = "Blood is a specialized bodily fluid that circulates through the cardiovascular system, delivering essential substances such as oxygen and nutrients to cells and removing waste products like carbon dioxide and urea. Blood is composed of red blood cells (which carry oxygen), white blood cells (which fight infection), platelets (which aid in clotting), and plasma (the liquid component that transports various substances). Blood also plays a role in regulating body temperature, pH balance, and immune responses. Blood disorders, such as anemia, leukemia, and hemophilia, can significantly impact health and require medical intervention.";
                            } else if (matchedbiosWord === "Artery") {
                                botResponse = "Arteries are blood vessels that carry oxygen-rich blood away from the heart to the tissues and organs of the body. They have thick, elastic walls that can withstand the high pressure of blood being pumped from the heart. The largest artery in the body is the aorta, which branches into smaller arteries that supply blood to various parts of the body. Arteries play a crucial role in maintaining blood pressure and ensuring that oxygen and nutrients are delivered efficiently. Conditions such as atherosclerosis (narrowing of the arteries due to plaque buildup) can lead to serious cardiovascular diseases, including heart attacks and strokes.";
                            } else if (matchedbiosWord === "Vein") {
                                botResponse = "Veins are blood vessels that carry deoxygenated blood from the tissues and organs back to the heart. Unlike arteries, veins have thinner walls and lower blood pressure. They often contain valves that prevent the backflow of blood, ensuring it moves in the correct direction toward the heart. The largest veins in the body are the superior and inferior vena cavae, which deliver deoxygenated blood from the upper and lower parts of the body, respectively, to the right atrium of the heart. Conditions affecting veins, such as varicose veins and deep vein thrombosis, can impact circulation and overall cardiovascular health.";
                            } else if (matchedbiosWord === "Capillary") {
                                botResponse = "Capillaries are the smallest blood vessels in the body, forming a network that connects arterioles (small arteries) and venules (small veins). They have thin walls, consisting of a single layer of endothelial cells, which allow for the exchange of oxygen, nutrients, waste products, and other substances between the blood and surrounding tissues. Capillaries play a critical role in the circulatory system, facilitating the delivery of oxygen and nutrients to cells and the removal of carbon dioxide and metabolic waste. Proper functioning of capillaries is essential for maintaining tissue health and overall homeostasis.";
                            } else  if (matchedbiosWord === "Lung") {
                                botResponse = "The lungs are vital respiratory organs located in the chest, responsible for gas exchange. They bring oxygen into the body and remove carbon dioxide. Each lung is divided into lobes (three on the right, two on the left) and contains alveoli, where oxygen and carbon dioxide are exchanged. The diaphragm and intercostal muscles facilitate lung expansion and contraction during breathing.";
                            } else if (matchedbiosWord === "Trachea") {
                                botResponse = "The trachea, commonly known as the windpipe, is a tube that connects the larynx to the bronchi of the lungs. It provides a clear airway for air to enter and exit the lungs. The trachea is reinforced with C-shaped cartilage rings that prevent it from collapsing and is lined with cilia and mucus to trap and expel foreign particles.";
                            } else if (matchedbiosWord === "Bronchi") {
                                botResponse = "The bronchi are the main passageways into the lungs that branch off from the trachea. Each bronchus enters a lung and divides into smaller bronchioles, leading to the alveoli where gas exchange occurs. The bronchi are lined with ciliated epithelium and mucus to trap and remove pathogens and debris.";
                            } else if (matchedbiosWord === "Bronchioles") {
                                botResponse = "Bronchioles are the smaller airways in the lungs that branch from the bronchi. They continue to branch into even smaller tubes, ending in clusters of alveoli. Bronchioles play a critical role in directing air to the alveoli, where oxygen and carbon dioxide are exchanged. They lack the cartilage found in the bronchi, making them more flexible but also more susceptible to constriction.";
                            } else if (matchedbiosWord === "Alveoli") {
                                botResponse = "Alveoli are tiny, balloon-like structures within the lungs where gas exchange takes place. Each alveolus is surrounded by a network of capillaries that transport oxygen to the bloodstream and remove carbon dioxide. The large surface area and thin walls of the alveoli facilitate efficient gas exchange.";
                            } else if (matchedbiosWord === "Diaphragm") {
                                botResponse = "The diaphragm is a large, dome-shaped muscle located at the base of the lungs. It plays a crucial role in respiration by contracting and flattening to create a vacuum that allows air to flow into the lungs. During exhalation, the diaphragm relaxes and moves upward, pushing air out of the lungs.";
                            } else if (matchedbiosWord === "Pulmonary") {
                                botResponse = "The term 'pulmonary' refers to anything related to the lungs. Pulmonary circulation, for example, is the movement of blood from the heart to the lungs and back. It involves the exchange of gases (oxygen and carbon dioxide) in the pulmonary capillaries surrounding the alveoli.";
                            } else if (matchedbiosWord === "Digestive System") {
                                botResponse = "The digestive system is a group of organs working together to convert food into energy and basic nutrients to feed the entire body. The process involves ingestion, digestion, absorption, and excretion. Key organs include the mouth, esophagus, stomach, small intestine, large intestine, liver, pancreas, and gallbladder.";
                            } else if (matchedbiosWord === "Mouth") {
                                botResponse = "The mouth is the beginning of the digestive system and serves several functions, including ingestion of food, mechanical breakdown by chewing, and mixing with saliva, which contains enzymes that begin the process of digestion. It also plays a role in speech and breathing.";
                            } else if (matchedbiosWord === "Pharynx") {
                                botResponse = "The pharynx, or throat, is a muscular tube that serves both the respiratory and digestive systems by connecting the nasal and oral cavities to the larynx and esophagus. It plays a role in swallowing and in the passage of air from the nasal cavity to the larynx.";
                            } else if (matchedbiosWord === "Esophagus") {
                                botResponse = "The esophagus is a muscular tube that conveys food and liquids from the mouth to the stomach through peristaltic movements. It lies behind the trachea and passes through the diaphragm before joining the stomach at the gastroesophageal junction.";
                            } else if (matchedbiosWord === "Stomach") {
                                botResponse = "The stomach is a hollow, muscular organ located between the esophagus and the small intestine. It secretes acid and enzymes that digest food, while its muscular walls churn food to enhance digestion. The resulting mixture, called chyme, is then slowly released into the small intestine.";
                            } else if (matchedbiosWord === "Small Intestine") {
                                botResponse = "The small intestine is a long, coiled tube where most digestion and nutrient absorption occur. It consists of three parts: the duodenum, jejunum, and ileum. Enzymes from the pancreas and bile from the liver aid in breaking down food, while villi and microvilli on the intestinal walls absorb nutrients into the bloodstream.";
                            } else if (matchedbiosWord === "Large Intestine") {
                                botResponse = "The large intestine, or colon, absorbs water and salts from the material that has not been digested as food and is thus responsible for forming solid waste (feces) to be excreted. It consists of the cecum, colon, rectum, and anal canal. The large intestine also houses beneficial bacteria that aid in the digestion process.";
                            } else if (matchedbiosWord === "Liver") {
                                botResponse = "The liver is a large, vital organ located in the upper right abdomen. It has multiple functions, including detoxifying chemicals, metabolizing drugs, producing bile (which aids in digestion), and storing glycogen. The liver also plays a key role in metabolism and regulation of blood sugar levels.";
                            } else if (matchedbiosWord === "Pancreas") {
                                botResponse = "The pancreas is a glandular organ located behind the stomach. It has both endocrine functions (releasing insulin and glucagon to regulate blood sugar levels) and exocrine functions (producing digestive enzymes that are secreted into the small intestine).";
                            } else if (matchedbiosWord === "Gallbladder") {
                                botResponse = "The gallbladder is a small, pear-shaped organ located under the liver. It stores and concentrates bile produced by the liver. During digestion, it releases bile into the small intestine to aid in the digestion and absorption of fats.";
                            } else if (matchedbiosWord === "Rectum") {
                                botResponse = "The rectum is the final section of the large intestine, terminating at the anus. It acts as a temporary storage site for feces before they are expelled from the body. Stretch receptors in the rectum signal the need to defecate when filled.";
                            } else if (matchedbiosWord === "Anus") {
                                botResponse = "The anus is the opening at the end of the digestive tract through which feces exit the body. It is surrounded by muscles that control the expulsion of feces, providing voluntary control over defecation.";
                            } else if (matchedbiosWord === "Excretory System") {
                                botResponse = "The excretory system, also known as the urinary system, removes waste products from the body and regulates water and electrolyte balance. It includes the kidneys, ureters, urinary bladder, and urethra. The kidneys filter blood to produce urine, which is then excreted.";
                            } else if (matchedbiosWord === "Kidneys") {
                                botResponse = "The kidneys are two bean-shaped organs located on either side of the spine. They filter blood to remove waste products and excess substances, which are excreted as urine. The kidneys also regulate blood pressure, electrolyte balance, and red blood cell production.";
                            } else if (matchedbiosWord === "Ureters") {
                                botResponse = "Ureters are muscular tubes that transport urine from the kidneys to the urinary bladder. They are approximately 25-30 cm long and use peristaltic contractions to move urine downward.";
                            } else if (matchedbiosWord === "Urinary Bladder") {
                                botResponse = "The urinary bladder is a hollow, muscular organ that stores urine produced by the kidneys until it is ready to be excreted. When the bladder fills, stretch receptors signal the need to urinate.";
                            } else if (matchedbiosWord === "Urethra") {
                                botResponse = "The urethra is a tube that conveys urine from the urinary bladder to the outside of the body. In males, it also carries semen. The length and function of the urethra differ between males and females.";
                            } else if (matchedbiosWord === "Reproductive System") {
                                botResponse = "The reproductive system includes organs and structures involved in producing offspring. In males, it consists of the testes, penis, and associated ducts and glands. In females, it includes the ovaries, fallopian tubes, uterus, and vagina.";
                            } else if (matchedbiosWord === "Male Reproductive System") {
                                botResponse = "The male reproductive system is responsible for producing and delivering sperm. It includes the testes (which produce sperm and hormones), the penis, and a series of ducts (epididymis, vas deferens, ejaculatory ducts, and urethra) that transport sperm.";
                            } else if (matchedbiosWord === "Female Reproductive System") {
                                botResponse = "The female reproductive system is responsible for producing eggs, facilitating fertilization, and nurturing the developing fetus. It includes the ovaries (which produce eggs and hormones), the fallopian tubes, the uterus (where fetal development occurs), the vagina, and external structures such as the clitoris and labia.";
                                } else if (matchedbiosWord === "Ovaries") {
                                botResponse = "The ovaries are the female gonads, located in the pelvis on either side of the uterus. They produce eggs (ova) and hormones, including estrogen and progesterone. Each month, an egg is released from one of the ovaries during ovulation.";
                                } else if (matchedbiosWord === "Fallopian Tubes") {
                                botResponse = "The fallopian tubes, also known as oviducts, are a pair of tubes that transport eggs from the ovaries to the uterus. Fertilization typically occurs in the fallopian tubes when sperm meets an egg released during ovulation.";
                                } else if (matchedbiosWord === "Uterus") {
                                botResponse = "The uterus, or womb, is a hollow, muscular organ where fetal development occurs during pregnancy. It consists of the fundus, body, and cervix. The lining of the uterus, called the endometrium, thickens each month in preparation for potential implantation of a fertilized egg.";
                                } else if (matchedbiosWord === "Vagina") {
                                botResponse = "The vagina is a muscular tube that connects the uterus to the external genitalia. It serves as a passageway for menstrual blood, receives the penis during sexual intercourse, and acts as the birth canal during childbirth. The vagina is lined with mucous membranes and contains numerous nerve endings.";
                                } else if (matchedbiosWord === "Menstruation") {
                                botResponse = "Menstruation is the monthly shedding of the uterine lining (endometrium) in females who have reached reproductive age but have not become pregnant. It typically lasts 3-7 days and is accompanied by hormonal changes, cramping, and bleeding.";
                                } else if (matchedbiosWord === "Pregnancy") {
                                botResponse = "Pregnancy is the period during which a fertilized egg develops into a fetus and ultimately results in childbirth. It typically lasts around 40 weeks, divided into three trimesters. Pregnancy involves significant physiological and hormonal changes in the mother's body to support fetal growth and development.";
                                } else if (matchedbiosWord === "Fertilization") {
                                botResponse = "Fertilization is the process by which a sperm cell fuses with an egg cell to form a zygote. It usually occurs in the fallopian tubes and marks the beginning of embryonic development. Fertilization requires the presence of viable sperm and a mature egg released during ovulation.";
                                } else if (matchedbiosWord === "Embryo") {
                                botResponse = "An embryo is the early stage of development following fertilization, when the zygote begins to divide and differentiate into specialized cells and tissues. During embryonic development, major organ systems and structures begin to form.";
                                } else if (matchedbiosWord === "Fetus") {
                                botResponse = "A fetus is the later stage of prenatal development, beginning around the 9th week after fertilization and continuing until birth. During this stage, the embryo undergoes significant growth and development, with organ systems becoming more complex and functional.";
                                } else if (matchedbiosWord === "Childbirth") {
                                botResponse = "Childbirth, also known as labor and delivery, is the process by which a baby is born from the mother's uterus. It typically occurs in three stages: dilation of the cervix, delivery of the baby, and delivery of the placenta. Childbirth is a natural physiological process but can be assisted by medical interventions if necessary.";
                                } else if (matchedbiosWord === "Menopause") {
                                    botResponse = "Menopause is a natural biological process that marks the end of menstruation and fertility in women. It typically occurs in middle age, around the late 40s to early 50s, and is characterized by hormonal changes, including a decline in estrogen production by the ovaries. Symptoms of menopause may include hot flashes, night sweats, mood changes, vaginal dryness, and changes in sleep patterns. While menopause is a normal part of aging, its symptoms can vary widely among individuals, and various treatments and lifestyle adjustments are available to manage them.";
                                } else if (matchedbiosWord === "Andropause") {
                                    botResponse = "Andropause, also known as male menopause, is a gradual decline in testosterone levels in aging men, typically occurring in middle age, although it can start earlier in some cases. Unlike menopause in women, which involves a sudden cessation of menstruation, andropause is a more gradual process. Symptoms of andropause may include fatigue, decreased libido, erectile dysfunction, mood changes, and loss of muscle mass. While testosterone levels naturally decline with age, lifestyle factors and underlying health conditions can also influence the onset and severity of andropause symptoms.";
                                } else if (matchedbiosWord === "Hormonal Imbalance") {
                                    botResponse = "Hormonal imbalance refers to an abnormality in the levels of hormones in the body, disrupting the body's normal physiological functions. Hormones are chemical messengers produced by various glands and organs in the endocrine system, and they play a crucial role in regulating processes such as metabolism, growth and development, mood, and reproductive function. Imbalances in hormone levels can result from various factors, including stress, inadequate nutrition, hormonal disorders, medications, and underlying health conditions. Symptoms of hormonal imbalance can vary widely depending on the specific hormones involved and may include weight gain or loss, fatigue, mood swings, irregular menstrual cycles, and fertility issues.";
                                } else if (matchedbiosWord === "Adrenal Gland") {
                                    botResponse = "The adrenal glands are small, triangular-shaped glands located on top of each kidney. They produce hormones that regulate various physiological processes, including metabolism, immune function, blood pressure, and the body's response to stress. The adrenal glands produce several hormones, including cortisol (which helps the body respond to stress), aldosterone (which regulates blood pressure and electrolyte balance), and adrenaline (which triggers the body's 'fight or flight' response). Disorders of the adrenal glands, such as Addison's disease and Cushing's syndrome, can lead to hormonal imbalances and various health problems.";
                                } else if (matchedbiosWord === "Pineal Gland") {
                                    botResponse = "The pineal gland is a small, pinecone-shaped gland located deep within the brain, between the two hemispheres. It produces the hormone melatonin, which plays a key role in regulating the sleep-wake cycle (circadian rhythm) and is involved in the body's response to light and darkness. Melatonin levels typically rise in the evening, signaling the body to prepare for sleep, and decline in the morning, signaling wakefulness. The pineal gland also influences other physiological functions, such as reproductive hormone secretion and immune system activity.";
                                } else if (matchedbiosWord === "Thyroid Gland") {
                                    botResponse = "The thyroid gland is a butterfly-shaped gland located in the front of the neck, below the Adam's apple. It produces hormones that regulate metabolism, growth, and development, as well as heart rate, body temperature, and energy levels. The thyroid gland produces two main hormones: thyroxine (T4) and triiodothyronine (T3). Disorders of the thyroid gland, such as hypothyroidism and hyperthyroidism, can lead to hormonal imbalances and a range of symptoms, including fatigue, weight changes, mood swings, and changes in heart rate and body temperature.";
                                } else if (matchedbiosWord === "Pancreatic Islets") {
                                    botResponse = "Pancreatic islets, also known as islets of Langerhans, are clusters of cells within the pancreas that produce and secrete hormones involved in regulating blood sugar levels. The main types of cells in pancreatic islets are alpha cells, which produce glucagon (a hormone that raises blood sugar levels), and beta cells, which produce insulin (a hormone that lowers blood sugar levels). Dysfunction of the pancreatic islets can lead to hormonal imbalances and diabetes mellitus, a condition characterized by high blood sugar levels.";
                                } else if (matchedbiosWord === "Epinephrine") {
                                    botResponse = "Epinephrine, also known as adrenaline, is a hormone and neurotransmitter produced by the adrenal glands in response to stress or danger. It plays a crucial role in the body's 'fight or flight' response, increasing heart rate, dilating airways, and redirecting blood flow to the muscles to prepare the body for physical exertion. Epinephrine also increases alertness and energy levels and can temporarily suppress appetite and pain perception.";
                                } else if (matchedbiosWord === "Norepinephrine") {
                                    botResponse = "Norepinephrine, also known as noradrenaline, is a hormone and neurotransmitter produced by the adrenal glands and certain neurons in the brainstem. Like epinephrine, it plays a key role in the body's 'fight or flight' response, increasing heart rate, constricting blood vessels, and mobilizing energy stores to prepare the body for action. Norepinephrine also influences mood, arousal, and attention and is involved in the body's stress response.";
                                } else if (matchedbiosWord === "Melatonin") {
                                    botResponse = "Melatonin is a hormone produced by the pineal gland in response to darkness, signaling the body to prepare for sleep. It helps regulate the sleep-wake cycle (circadian rhythm) and is involved in other physiological processes, such as immune function, antioxidant activity, and reproductive hormone secretion. Melatonin supplements are sometimes used to treat sleep disorders such as insomnia and jet lag, although their effectiveness varies.";
                                } else if (matchedbiosWord === "Thyroxine") {
                                    botResponse = "Thyroxine, also known as T4, is the primary hormone produced by the thyroid gland and is involved in regulating metabolism, growth, and development. Thyroxine levels are controlled by the hypothalamus and pituitary gland through a feedback mechanism involving thyroid-stimulating hormone (TSH). Abnormal thyroid hormone levels, either too high (hyperthyroidism) or too low (hypothyroidism), can lead to hormonal imbalances and a range of symptoms, including weight changes, fatigue, and changes in heart rate and body temperature.";
                                } else if (matchedbiosWord === "Insulin") {
                                    botResponse = "Insulin is a hormone produced by the beta cells of the pancreas that plays a key role in regulating blood sugar levels. It helps glucose (sugar) from the bloodstream enter cells for use as energy or storage. Insulin facilitates the uptake of glucose by cells, where it can be metabolized to produce ATP, the body's primary energy source. In addition to its role in glucose metabolism, insulin also promotes the storage of excess glucose as glycogen in the liver and muscles, and as fat in adipose tissue. Insulin resistance, a condition in which cells become less responsive to insulin, can lead to elevated blood sugar levels and is a characteristic feature of type 2 diabetes.";
                                } else if (matchedbiosWord === "Glucagon") {
                                    botResponse = "Glucagon is a hormone produced by the alpha cells of the pancreas that plays a key role in regulating blood sugar levels. It acts in opposition to insulin, promoting the release of glucose from the liver into the bloodstream when blood sugar levels are low, such as during fasting or between meals. Glucagon stimulates the breakdown of glycogen (stored glucose) in the liver to release glucose into the bloodstream, helping to maintain blood sugar levels within a narrow range.";
                                } else if (matchedbiosWord === "Calcitonin") {
                                    botResponse = "Calcitonin is a hormone produced by the parafollicular cells (C cells) of the thyroid gland that plays a role in regulating calcium levels in the blood. It acts to lower blood calcium levels by inhibiting the activity of osteoclasts, cells responsible for breaking down bone tissue and releasing calcium into the bloodstream. Calcitonin also stimulates calcium excretion by the kidneys, helping to maintain calcium homeostasis.";
                                } else if (matchedbiosWord === "Parathyroid Hormone") {
                                    botResponse = "Parathyroid hormone (PTH) is a hormone produced by the parathyroid glands, four small glands located behind the thyroid gland in the neck. It plays a key role in regulating calcium and phosphate levels in the blood. PTH acts to increase blood calcium levels by stimulating the release of calcium from bone tissue, enhancing calcium absorption in the intestines, and reducing calcium excretion by the kidneys. PTH also promotes the excretion of phosphate by the kidneys, helping to maintain calcium-phosphate balance.";
                                } else if (matchedbiosWord === "Growth Hormone") {
                                    botResponse = "Growth hormone (GH), also known as somatotropin, is a peptide hormone produced by the anterior pituitary gland that plays a key role in growth, development, and metabolism. It stimulates the growth and proliferation of cells in various tissues and organs, including bone, muscle, and cartilage. Growth hormone also regulates metabolism by promoting the breakdown of fats (lipolysis) and the synthesis of glucose (gluconeogenesis). Disorders of growth hormone production or signaling can lead to growth disorders such as dwarfism or gigantism.";
                                } else if (matchedbiosWord === "Prolactin") {
                                    botResponse = "Prolactin is a peptide hormone produced by the anterior pituitary gland that plays a key role in lactation (milk production) and reproductive function. In women, prolactin levels increase during pregnancy and breastfeeding, stimulating the growth and development of mammary glands and the production of milk. Prolactin also suppresses ovulation during breastfeeding, helping to space out pregnancies. In men, prolactin helps regulate testosterone production and may play a role in reproductive function and behavior.";
                                } else if (matchedbiosWord === "Follicle-Stimulating Hormone") {
                                    botResponse = "Follicle-stimulating hormone (FSH) is a gonadotropic hormone produced by the anterior pituitary gland that plays a key role in reproductive function. In women, FSH stimulates the growth and development of ovarian follicles (clusters of cells containing eggs) during the menstrual cycle. It also promotes the production of estrogen by ovarian follicles and triggers ovulation, the release of a mature egg from the ovary. In men, FSH stimulates the production of sperm (spermatogenesis) by the testes.";
                                } else if (matchedbiosWord === "Luteinizing Hormone") {
                                    botResponse = "Luteinizing hormone (LH) is a gonadotropic hormone produced by the anterior pituitary gland that plays a key role in reproductive function. In women, LH works in conjunction with FSH to regulate the menstrual cycle and ovulation. It triggers the release of a mature egg from the ovary (ovulation) and stimulates the production of progesterone by the corpus luteum, a temporary endocrine structure formed after ovulation. In men, LH stimulates the production of testosterone by the testes.";
                                } else if (matchedbiosWord === "Oxytocin") {
                                    botResponse = "Oxytocin is a peptide hormone and neurotransmitter produced by the hypothalamus and released by the posterior pituitary gland. It plays a key role in social bonding, reproduction, and childbirth. Oxytocin stimulates uterine contractions during childbirth, helping to facilitate labor and delivery, and promotes the ejection of milk from the mammary glands during breastfeeding (milk let-down reflex). It also influences social behavior, trust, empathy, and attachment between individuals.";
                                } else if (matchedbiosWord === "Antidiuretic Hormone") {
                                    botResponse = "Antidiuretic hormone (ADH), also known as vasopressin, is a peptide hormone produced by the hypothalamus and released by the posterior pituitary gland. It plays a key role in regulating water balance and blood pressure in the body. ADH acts on the kidneys to promote water reabsorption, reducing the volume of urine produced and helping to concentrate urine. It also constricts blood vessels, raising blood pressure and increasing blood volume. ADH release is stimulated by factors such as dehydration, low blood pressure, and high blood osmolality (concentration of solutes). Disorders of ADH production or signaling can lead to conditions such as diabetes insipidus (characterized by excessive thirst and urination) or syndrome of inappropriate antidiuretic hormone (SIADH), which causes water retention and low blood sodium levels.";
                                } else if (matchedbiosWord === "Estradiol") {
                                    botResponse = "Estradiol is a type of estrogen hormone and the primary female sex hormone produced by the ovaries. It plays a key role in regulating the menstrual cycle, reproductive function, and secondary sexual characteristics in women. Estradiol levels fluctuate throughout the menstrual cycle, peaking during ovulation, and declining during menstruation. In addition to its reproductive functions, estradiol also influences bone health, cardiovascular function, and cognitive function.";
                                } else if (matchedbiosWord === "Progesterone") {
                                    botResponse = "Progesterone is a female sex hormone produced primarily by the ovaries following ovulation. It plays a key role in regulating the menstrual cycle, preparing the uterus for implantation of a fertilized egg and supporting early pregnancy. Progesterone levels rise during the second half of the menstrual cycle, promoting the growth and maintenance of the uterine lining (endometrium) in preparation for pregnancy. If pregnancy does not occur, progesterone levels decline, triggering menstruation.";
                                } else if (matchedbiosWord === "Testosterone") {
                                    botResponse = "Testosterone is the primary male sex hormone produced by the testes, although small amounts are also produced by the adrenal glands in both sexes. It plays a key role in male reproductive function, including the development of primary and secondary sexual characteristics, sperm production, and libido (sex drive). Testosterone also influences other physiological processes, such as muscle mass and strength, bone density, and mood. In women, testosterone is produced in smaller amounts and is important for libido and overall well-being.";
                                } else if (matchedbiosWord === "Follicle") {
                                    botResponse = "A follicle is a small, fluid-filled sac in the ovary that contains an immature egg (oocyte) surrounded by supportive cells. During the menstrual cycle, follicles undergo a process called folliculogenesis, in which they mature and develop under the influence of hormones such as follicle-stimulating hormone (FSH) and estrogen. Eventually, one dominant follicle will ovulate, releasing a mature egg into the fallopian tube in preparation for fertilization.";
                                } else if (matchedbiosWord === "Ovum") {
                                    botResponse = "An ovum, also known as an egg cell, is the female reproductive cell produced by the ovaries. It is the largest cell in the human body and contains half the genetic material (chromosomes) needed to create a new individual. Ovulation is the process by which a mature egg is released from the ovary into the fallopian tube, where it may be fertilized by sperm.";
                                } else if (matchedbiosWord === "Zygote") {
                                    botResponse = "A zygote is the initial cell formed when two gamete cells (sperm and egg) fuse during fertilization. It contains the full complement of genetic material (chromosomes) necessary to create a new individual. The zygote undergoes a series of cell divisions (cleavage) to form an embryo, which implants in the uterus and continues to develop.";
                                } else if (matchedbiosWord === "Blastocyst") {
                                    botResponse = "A blastocyst is a structure formed in the early stages of embryonic development, typically five to six days after fertilization. It consists of a hollow sphere of cells with an inner cell mass that will give rise to the embryo and an outer layer of cells that will form the placenta. The blastocyst undergoes implantation in the uterine wall, where it continues to develop.";
                                } else if (matchedbiosWord === "Embryo") {
                                    botResponse = "An embryo is the early stage of development of a multicellular organism, following fertilization of an egg by sperm. In humans, the embryo stage begins at fertilization and continues until the end of the eighth week of gestation, after which it is referred to as a fetus. During this time, the embryo undergoes rapid cell division and differentiation, giving rise to the basic structures and tissues of the body.";
                                } else if (matchedbiosWord === "Fetus") {
                                    botResponse = "A fetus is the stage of prenatal development that begins at the end of the eighth week of gestation and continues until birth. During this time, the fetus undergoes further growth and development, with organs and systems becoming more complex and functional. By the end of the fetal period, typically around 38 weeks gestation, the fetus is fully formed and ready for birth.";
                                } else if (matchedbiosWord === "Gestation") {
                                    botResponse = "Gestation is the period of development between conception and birth during which a fetus grows and develops inside the uterus. In humans, gestation typically lasts around 40 weeks, divided into three trimesters. The first trimester encompasses fertilization, implantation, and early embryonic development. The second trimester is characterized by rapid fetal growth and the development of organs and systems. The third trimester involves further growth and maturation in preparation for birth.";
                                } else if (matchedbiosWord === "Placenta") {
                                    botResponse = "The placenta is an organ that develops in the uterus during pregnancy and serves as a lifeline between the mother and fetus. It is formed from maternal and fetal tissues and is connected to the fetus by the umbilical cord. The placenta facilitates the exchange of nutrients, oxygen, and waste products between the maternal and fetal circulatory systems, allowing the fetus to receive the necessary support for growth and development.";
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
