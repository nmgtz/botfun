function tanzaniaDescribes(tzDescriptions) {
    let botResponse = "";

    if (tzDescriptions === "Arusha") {
        botResponse = `
        **Arusha Region**
        - **Location**: Northern Tanzania
        - **Districts**: Arusha, Meru, Longido, Karatu, Monduli, Ngorongoro
        - **Characteristics**:
          - **Temperature**: Moderate temperatures ranging from 13°C to 30°C
          - **Rainfall**: Bimodal rainfall pattern with long rains (March-May) and short rains (October-December)
          - **Food**: Maize, beans, coffee, and various fruits
          - **Economy**: Agriculture, tourism (especially due to proximity to Serengeti and Mount Kilimanjaro), and mining
          - **Population**: Approximately 1.69 million people
        `;
    } else if (tzDescriptions === "Dar es Salaam") {
        botResponse = `
        **Dar es Salaam Region**
        - **Location**: Eastern Tanzania along the Indian Ocean coast
        - **Districts**: Ilala, Kinondoni, Temeke, Ubungo, Kigamboni
        - **Characteristics**:
          - **Temperature**: Hot and humid with temperatures ranging from 20°C to 35°C
          - **Rainfall**: Bimodal rainfall with a peak in April and another in November
          - **Food**: Seafood, rice, maize, and cassava
          - **Economy**: Major economic hub with industries, port activities, and commerce
          - **Population**: Approximately 4.36 million people
        `;
    } else if (tzDescriptions === "Dodoma") {
        botResponse = `
        **Dodoma Region**
        - **Location**: Central Tanzania
        - **Districts**: Dodoma, Bahi, Chamwino, Chemba, Kondoa, Kongwa, Mpwapwa
        - **Characteristics**:
          - **Temperature**: Semi-arid climate with temperatures ranging from 16°C to 31°C
          - **Rainfall**: Low and erratic rainfall, mostly between November and April
          - **Food**: Sorghum, millet, maize, and groundnuts
          - **Economy**: Agriculture, government services (being the capital city), and small-scale industries
          - **Population**: Approximately 2.08 million people
        `;
    } else if (tzDescriptions === "Geita") {
        botResponse = `
        **Geita Region**
        - **Location**: Northwestern Tanzania
        - **Districts**: Geita, Bukombe, Chato, Mbogwe, Nyang'hwale
        - **Characteristics**:
          - **Temperature**: Tropical climate with temperatures ranging from 20°C to 30°C
          - **Rainfall**: Receives significant rainfall from October to May
          - **Food**: Maize, cassava, sweet potatoes, and rice
          - **Economy**: Predominantly mining (gold), agriculture, and fishing
          - **Population**: Approximately 1.74 million people
        `;
    } else if (tzDescriptions === "Iringa") {
        botResponse = `
        **Iringa Region**
        - **Location**: Southern Highlands of Tanzania
        - **Districts**: Iringa, Kilolo, Mufindi
        - **Characteristics**:
          - **Temperature**: Cooler highland climate with temperatures ranging from 15°C to 25°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Maize, beans, potatoes, and vegetables
          - **Economy**: Agriculture, timber, and small-scale industries
          - **Population**: Approximately 941,238 people
        `;
    } else if (tzDescriptions === "Kagera") {
        botResponse = `
        **Kagera Region**
        - **Location**: Northwestern Tanzania along the shores of Lake Victoria
        - **Districts**: Bukoba, Biharamulo, Muleba, Ngara, Karagwe, Kyerwa, Missenyi
        - **Characteristics**:
          - **Temperature**: Mild to warm temperatures ranging from 15°C to 28°C
          - **Rainfall**: Receives high rainfall, especially during the long rains (March-May)
          - **Food**: Bananas, coffee, tea, and fish from Lake Victoria
          - **Economy**: Agriculture, fishing, and trade
          - **Population**: Approximately 2.5 million people
        `;
    } else if (tzDescriptions === "Katavi") {
        botResponse = `
        **Katavi Region**
        - **Location**: Western Tanzania
        - **Districts**: Mpanda, Mlele, Tanganyika
        - **Characteristics**:
          - **Temperature**: Tropical climate with temperatures ranging from 20°C to 30°C
          - **Rainfall**: Significant rainfall during the wet season (November to April)
          - **Food**: Maize, rice, and cassava
          - **Economy**: Agriculture and wildlife tourism (Katavi National Park)
          - **Population**: Approximately 564,604 people
        `;
    } else if (tzDescriptions === "Kigoma") {
        botResponse = `
        **Kigoma Region**
        - **Location**: Western Tanzania along the shores of Lake Tanganyika
        - **Districts**: Kigoma, Kasulu, Kibondo, Kakonko, Buhigwe, Uvinza
        - **Characteristics**:
          - **Temperature**: Warm temperatures ranging from 20°C to 30°C
          - **Rainfall**: Receives significant rainfall from October to May
          - **Food**: Maize, cassava, bananas, and fish from Lake Tanganyika
          - **Economy**: Fishing, agriculture, and trade
          - **Population**: Approximately 2.1 million people
        `;
    } else if (tzDescriptions === "Kilimanjaro") {
        botResponse = `
        **Kilimanjaro Region**
        - **Location**: Northeastern Tanzania
        - **Districts**: Moshi, Hai, Siha, Rombo, Same, Mwanga
        - **Characteristics**:
          - **Temperature**: Varies with altitude, ranging from 10°C to 30°C
          - **Rainfall**: Bimodal rainfall pattern with long rains (March-May) and short rains (October-December)
          - **Food**: Coffee, bananas, maize, and vegetables
          - **Economy**: Agriculture (coffee), tourism (Mount Kilimanjaro), and trade
          - **Population**: Approximately 1.64 million people
        `;
    } else if (tzDescriptions === "Lindi") {
        botResponse = `
        **Lindi Region**
        - **Location**: Southeastern Tanzania
        - **Districts**: Lindi, Kilwa, Ruangwa, Nachingwea, Liwale
        - **Characteristics**:
          - **Temperature**: Hot and humid with temperatures ranging from 20°C to 35°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Cashew nuts, sesame, maize, and cassava
          - **Economy**: Agriculture (cashew nuts, sesame), fishing, and trade
          - **Population**: Approximately 864,652 people
        `;
    } else if (tzDescriptions === "Manyara") {
        botResponse = `
        **Manyara Region**
        - **Location**: Northern Tanzania
        - **Districts**: Babati, Hanang, Kiteto, Mbulu, Simanjiro
        - **Characteristics**:
          - **Temperature**: Moderate temperatures ranging from 15°C to 30°C
          - **Rainfall**: Bimodal rainfall pattern with long rains (March-May) and short rains (October-December)
          - **Food**: Maize, beans, pigeon peas, and vegetables
          - **Economy**: Agriculture and tourism (Lake Manyara National Park)
          - **Population**: Approximately 1.42 million people
        `;
    } else if (tzDescriptions === "Mara") {
        botResponse = `
        **Mara Region**
        - **Location**: Northern Tanzania along the shores of Lake Victoria
        - **Districts**: Musoma, Bunda, Tarime, Serengeti, Rorya, Butiama
        - **Characteristics**:
          - **Temperature**: Mild to warm temperatures ranging from 15°C to 30°C
          - **Rainfall**: Receives substantial rainfall, especially during the long rains (March-May)
          - **Food**: Maize, cassava, sorghum, and fish from Lake Victoria
          - **Economy**: Agriculture, fishing, and tourism (Serengeti National Park)
          - **Population**: Approximately 1.74 million people
        `;
    } else if (tzDescriptions === "Mbeya") {
        botResponse = `
        **Mbeya Region**
        - **Location**: Southern Highlands of Tanzania
        - **Districts**: Mbeya, Mbarali, Rungwe, Kyela, Chunya, Ileje, Mbozi
        - **Characteristics**:
          - **Temperature**: Cool highland climate with temperatures ranging from 10°C to 25°C
          - **Rainfall**: Receives significant rainfall from November to April
          - **Food**: Maize, beans, potatoes, and tea
          - **Economy**: Agriculture, mining, and trade
          - **Population**: Approximately 2.7 million people
        `;
    } else if (tzDescriptions === "Morogoro") {
        botResponse = `
        **Morogoro Region**
        - **Location**: Eastern Tanzania
        - **Districts**: Morogoro, Kilosa, Kilombero, Ulanga, Mvomero, Malinyi, Gairo
        - **Characteristics**:
          - **Temperature**: Warm temperatures ranging from 20°C to 30°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Rice, maize, sugarcane, and fruits
          - **Economy**: Agriculture, forestry, and trade
          - **Population**: Approximately 2.2 million people
        `;
    } else if (tzDescriptions === "Mtwara") {
        botResponse = `
        **Mtwara Region**
        - **Location**: Southeastern Tanzania along the Indian Ocean coast
        - **Districts**: Mtwara, Masasi, Nanyumbu, Newala, Tandahimba
        - **Characteristics**:
          - **Temperature**: Hot and humid with temperatures ranging from 20°C to 35°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Cashew nuts, maize, cassava, and coconuts
          - **Economy**: Agriculture (cashew nuts), fishing, and trade
          - **Population**: Approximately 1.27 million people
        `;
    } else if (tzDescriptions === "Mwanza") {
        botResponse = `
        **Mwanza Region**
        - **Location**: Northern Tanzania along the shores of Lake Victoria
        - **Districts**: Nyamagana, Ilemela, Magu, Misungwi, Sengerema, Ukerewe, Kwimba, Buchosa
        - **Characteristics**:
          - **Temperature**: Warm temperatures ranging from 20°C to 30°C
          - **Rainfall**: Receives significant rainfall from October to May
          - **Food**: Fish from Lake Victoria, maize, cassava, and vegetables
          - **Economy**: Fishing, agriculture, and trade
          - **Population**: Approximately 3.1 million people
        `;
    } else if (tzDescriptions === "Njombe") {
        botResponse = `
        **Njombe Region**
        - **Location**: Southern Highlands of Tanzania
        - **Districts**: Njombe, Ludewa, Makete, Wanging'ombe, Njombe Town
        - **Characteristics**:
          - **Temperature**: Cool highland climate with temperatures ranging from 10°C to 25°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Maize, potatoes, beans, and tea
          - **Economy**: Agriculture, forestry, and small-scale industries
          - **Population**: Approximately 702,097 people
        `;
    } else if (tzDescriptions === "Pemba North") {
        botResponse = `
        **Pemba North Region**
        - **Location**: Part of the Zanzibar Archipelago
        - **Districts**: Wete, Micheweni
        - **Characteristics**:
          - **Temperature**: Warm and humid with temperatures ranging from 23°C to 30°C
          - **Rainfall**: Receives significant rainfall from March to May and from October to December
          - **Food**: Cloves, coconuts, bananas, and fish
          - **Economy**: Agriculture (cloves), fishing, and tourism
          - **Population**: Approximately 211,732 people
        `;
    } else if (tzDescriptions === "Pemba South") {
        botResponse = `
        **Pemba South Region**
        - **Location**: Part of the Zanzibar Archipelago
        - **Districts**: Chake Chake, Mkoani
        - **Characteristics**:
          - **Temperature**: Warm and humid with temperatures ranging from 23°C to 30°C
          - **Rainfall**: Receives significant rainfall from March to May and from October to December
          - **Food**: Cloves, coconuts, bananas, and fish
          - **Economy**: Agriculture (cloves), fishing, and tourism
          - **Population**: Approximately 195,116 people
        `;
    } else if (tzDescriptions === "Pwani") {
        botResponse = `
        **Pwani Region**
        - **Location**: Eastern Tanzania along the Indian Ocean coast
        - **Districts**: Kibaha, Kisarawe, Mkuranga, Bagamoyo, Rufiji, Mafia
        - **Characteristics**:
          - **Temperature**: Hot and humid with temperatures ranging from 20°C to 35°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Cashew nuts, coconuts, rice, and maize
          - **Economy**: Agriculture, fishing, and trade
          - **Population**: Approximately 1.1 million people
        `;
    } else if (tzDescriptions === "Rukwa") {
        botResponse = `
        **Rukwa Region**
        - **Location**: Southwestern Tanzania
        - **Districts**: Sumbawanga, Kalambo, Nkasi
        - **Characteristics**:
          - **Temperature**: Moderate to cool temperatures ranging from 15°C to 25°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Maize, beans, and millet
          - **Economy**: Agriculture, fishing, and trade
          - **Population**: Approximately 1.0 million people
        `;
    } else if (tzDescriptions === "Ruvuma") {
        botResponse = `
        **Ruvuma Region**
        - **Location**: Southern Tanzania
        - **Districts**: Songea, Namtumbo, Nyasa, Tunduru, Mbinga
        - **Characteristics**:
          - **Temperature**: Moderate temperatures ranging from 15°C to 30°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Maize, cassava, and beans
          - **Economy**: Agriculture, fishing, and trade
          - **Population**: Approximately 1.5 million people
        `;
    } else if (tzDescriptions === "Shinyanga") {
        botResponse = `
        **Shinyanga Region**
        - **Location**: Northwestern Tanzania
        - **Districts**: Shinyanga, Kahama, Kishapu
        - **Characteristics**:
          - **Temperature**: Warm temperatures ranging from 20°C to 30°C
          - **Rainfall**: Receives significant rainfall from October to May
          - **Food**: Maize, millet, and sorghum
          - **Economy**: Agriculture, mining, and trade
          - **Population**: Approximately 1.5 million people
        `;
    } else if (tzDescriptions === "Simiyu") {
        botResponse = `
        **Simiyu Region**
        - **Location**: Northwestern Tanzania
        - **Districts**: Bariadi, Itilima, Maswa, Meatu, Busega
        - **Characteristics**:
          - **Temperature**: Warm temperatures ranging from 20°C to 30°C
          - **Rainfall**: Receives significant rainfall from October to May
          - **Food**: Maize, millet, and sorghum
          - **Economy**: Agriculture and livestock keeping
          - **Population**: Approximately 1.6 million people
        `;
    } else if (tzDescriptions === "Singida") {
        botResponse = `
        **Singida Region**
        - **Location**: Central Tanzania
        - **Districts**: Singida, Manyoni, Iramba, Ikungi, Mkalama
        - **Characteristics**:
          - **Temperature**: Semi-arid climate with temperatures ranging from 15°C to 30°C
          - **Rainfall**: Low and erratic rainfall, mostly between November and April
          - **Food**: Sorghum, millet, maize, and sunflower
          - **Economy**: Agriculture and small-scale industries
          - **Population**: Approximately 1.4 million people
        `;
    } else if (tzDescriptions === "Songwe") {
        botResponse = `
        **Songwe Region**
        - **Location**: Southern Highlands of Tanzania
        - **Districts**: Songwe, Ileje, Mbozi, Momba
        - **Characteristics**:
          - **Temperature**: Cool highland climate with temperatures ranging from 10°C to 25°C
          - **Rainfall**: Receives substantial rainfall from November to April
          - **Food**: Maize, beans, and potatoes
          - **Economy**: Agriculture, mining, and trade
          - **Population**: Approximately 1.1 million people
        `;
    } else if (tzDescriptions === "Tabora") {
        botResponse = `
        **Tabora Region**
        - **Location**: Western Tanzania
        - **Districts**: Tabora, Igunga, Nzega, Sikonge, Urambo, Kaliua
        - **Characteristics**:
          - **Temperature**: Warm temperatures ranging from 20°C to 30°C
          - **Rainfall**: Receives significant rainfall from November to April
          - **Food**: Maize, millet, and sorghum
          - **Economy**: Agriculture, tobacco farming, and trade
          - **Population**: Approximately 2.3 million people
        `;
    } else if (tzDescriptions === "Tanga") {
        botResponse = `
        **Tanga Region**
        - **Location**: Northeastern Tanzania along the Indian Ocean coast
        - **Districts**: Tanga, Muheza, Pangani, Korogwe, Handeni, Lushoto, Kilindi, Mkinga
        - **Characteristics**:
          - **Temperature**: Warm and humid with temperatures ranging from 20°C to 35°C
          - **Rainfall**: Receives substantial rainfall from October to May
          - **Food**: Coconuts, sisal, maize, and cassava
          - **Economy**: Agriculture, fishing, and trade
          - **Population**: Approximately 2.0 million people
        `;
    } else if (tzDescriptions === "Zanzibar North") {
        botResponse = `
        **Zanzibar North Region**
        - **Location**: Part of the Zanzibar Archipelago
        - **Districts**: Kaskazini A, Kaskazini B
        - **Characteristics**:
          - **Temperature**: Warm and humid with temperatures ranging from 23°C to 30°C
          - **Rainfall**: Receives significant rainfall from March to May and from October to December
          - **Food**: Cloves, coconuts, bananas, and fish
          - **Economy**: Agriculture (cloves), fishing, and tourism
          - **Population**: Approximately 187,455 people
        `;
    } else if (tzDescriptions === "Zanzibar South and Central") {
        botResponse = `
        **Zanzibar South and Central Region**
        - **Location**: Part of the Zanzibar Archipelago
        - **Districts**: Kati, Kusini
        - **Characteristics**:
          - **Temperature**: Warm and humid with temperatures ranging from 23°C to 30°C
          - **Rainfall**: Receives significant rainfall from March to May and from October to December
          - **Food**: Cloves, coconuts, bananas, and fish
          - **Economy**: Agriculture (cloves), fishing, and tourism
          - **Population**: Approximately 115,588 people
        `;
    } else if (tzDescriptions === "Zanzibar Urban/West") {
        botResponse = `
        **Zanzibar Urban/West Region**
        - **Location**: Part of the Zanzibar Archipelago
        - **Districts**: Magharibi, Mjini
        - **Characteristics**:
          - **Temperature**: Warm and humid with temperatures ranging from 23°C to 30°C
          - **Rainfall**: Receives significant rainfall from March to May and from October to December
          - **Food**: Cloves, coconuts, bananas, and fish
          - **Economy**: Agriculture (cloves), fishing, and tourism
          - **Population**: Approximately 593,678 people
        `;
    }

    return botResponse;
}
