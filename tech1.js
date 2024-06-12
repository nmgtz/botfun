
function techWords(matchedtechWord) {
    let botResponse = "";
    if(matchedtechWord ==="gpt" || matchedtechWord ==="chat gpt" ){ 
    botResponse = " ChatGPT is like a super-smart version of a computer program called GPT. It's made to chat with people and understand what they're saying. Think of it as having a conversation with a really clever friend!While GPT is already pretty smart, ChatGPT takes it a step further by being specifically trained to talk like a human in conversations. It's great at understanding what you say and responding in a way that makes sense, just like a real person would.It can chat about all sorts of things, answer questions, give advice, and more. Its secret sauce comes from learning lots of stuff from the internet, so it knows a ton of things to talk about.verall, ChatGPT is a powerful tool for making chatbots and virtual assistants that can have realistic conversations with people. It makes talking to computers feel more like talking to a friend, which makes the experience more fun and engaging for users.";
     }
    return botResponse;
}

function botWords(matchedbotWord) {
    let botResponse = "";
    if (matchedbotWord === 'nmg') {
    botResponse = `NMG stands for "Next Modular Generation". We're a tech company focused on creating smart, adaptable systems, especially in artificial intelligence. Our goal is to make technology that can easily change and grow with your needs.

    Founded by Nurdin Mohamed, NMG made a cool AI program called NMG AI. It's all about making computers understand people better. NMGAI is the brain behind ChatNMG, a smart chatbot NMG's team created.
    
    ChatNMG is like having a smart friend to talk to, It's super handy for getting info and help, With projects like ChatNMG, NMG wants to make tech that makes life easier for everyone.`;
    } else if (matchedbotWord === 'nmgai') {
    botResponse = `NMG AI,Developed in 2024, NMG AI (Next Modular Generation AI) represents a cutting-edge artificial intelligence system. NMG AI was engineered to enhance human-computer interaction through advanced chatbot functionalities, culminating in the creation of the intelligent assistant entity, ChatNMG. This sophisticated AI is designed to assist users by providing insightful responses, engaging in meaningful conversations, and addressing various queries across multiple domains, thus setting a new standard for AI-driven communication.`;
    } else if (matchedbotWord === 'chatnmg') {
        botResponse = `ChatNMG is like a super-smart assistant designed to help you by chatting with you and answering your questions. Imagine talking to a really clever friend who knows a lot about many topics. While regular chatbots can be helpful, ChatNMG is specially trained to have natural, human-like conversations, making it great at understanding what you say and responding in a way that makes sense. It can chat about anything, answer your questions, and offer advice. It learns from a vast amount of information, so it’s knowledgeable on many subjects. Overall, ChatNMG makes interacting with computers feel more like talking to a friend, making the experience more enjoyable and engaging.`;
        } else if (matchedbotWord === 'nurdin mohamed') {
            botResponse =`Nurdin Mohamed is the founder of ChatNMG, a sophisticated chatbot developed as part of his company, NMG & TechCity, under the NMG AI program. As an innovator in the field of technology, Nurdin Mohamed created ChatNMG to enhance user interactions by providing intelligent, human-like responses to inquiries. His goal was to develop a tool that could engage in natural conversations, making it easier for people to get the information and assistance they need. Through the NMG AI program at NMG & TechCity, he has utilized advanced technology to bring this vision to life, offering a powerful and intuitive chatbot solution for various applications.`;
        } else if (matchedbotWord === 'aim of chatnmg'){
            botResponse =`ChatNMG aims to revolutionize user interactions by providing a seamless and intelligent conversational experience, making information easily accessible and assistance readily available.here are some of them;.Enhance User Experience: ChatNMG aims to provide users with a seamless and intuitive conversational interface, making interactions with digital systems more engaging and efficient.

            Accessible Information: The chatbot aims to facilitate easy access to information by swiftly answering user inquiries and providing relevant details on a wide range of topics.
            
            Intelligent Assistance: ChatNMG strives to offer intelligent assistance by understanding user intents and providing personalized responses, guidance, and support as needed.
            
            Natural Conversations: Through natural language processing, ChatNMG aims to simulate human-like conversations, enabling users to interact with the chatbot in a manner that feels natural and familiar.
            
            Improving Efficiency: By automating responses to common queries and tasks, ChatNMG aims to streamline processes and improve efficiency, saving users time and effort.
            
            Continuous Improvement: ChatNMG is designed to learn and adapt over time, continuously improving its performance and capabilities through machine learning algorithms and user feedback.`
        }
    return botResponse;
}
