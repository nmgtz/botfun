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
