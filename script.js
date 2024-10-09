// let response = {
//     "hi": "Hello! How can I help you?",
//     "bye": "Goodbye! Take care!",
//     "how are you": "I'm just a bot, but I'm doing great!"
// };

let response = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! What can I do for you?",
    "good morning": "Good morning! How are you?",
    "good night": "Good night! Sweet dreams!",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what's your name": "I'm your friendly chatbot, here to assist you.",
    "bye": "Goodbye! Take care!",
    "see you": "See you later! Have a great day!",
    "thank you": "You're welcome! Anything else I can help with?",
    "thanks": "No problem! Happy to help!",
    "what's the time": "Sorry, I can't tell the time, but you can check your device!",
    "what's the date": "I'm not sure, but your device should have the current date.",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "what's the weather like": "I'm not connected to the internet, so I can't check the weather.",
    "who created you": "I was created by a team of developers!",
    "what's your favorite color": "I like all colors equally, but blue is often a favorite.",
    "can you help me": "Of course! What do you need help with?",
    "what's the capital of france": "The capital of France is Paris.",
    "what's 2 + 2": "2 + 2 is 4!",
    "tell me a fun fact": "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
    "what's your purpose": "My purpose is to assist you with your queries and make your day easier!",
    "do you like music": "I don't have ears, but I know that music is loved by many!",
    "can you dance": "I can't dance, but I can imagine you dancing!",
    "tell me something interesting": "Did you know? The Eiffel Tower can be 15 cm taller during the summer, due to the expansion of iron in the heat.",
    "what's the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
    "how old are you": "I'm ageless! I exist in the digital world.",
    "do you have friends": "I'm just a bot, but I consider everyone who interacts with me as a friend!",
    "where do you live": "I live in the cloud, accessible from anywhere in the world!",
    "can you speak other languages": "I can understand and respond in many languages, but I'm most fluent in English.",
    "what's the meaning of life": "The meaning of life is a deep question, but many believe it's to find happiness and make a difference!",
    "who's the president of the USA": "As of the latest information, the President of the USA is Joe Biden.",
    "what's your favorite food": "I don't eat, but I hear pizza is a favorite among many!",
    "do you sleep": "I don't need sleep, so I'm always here to help!",
    "what's your hobby": "My hobby is learning and getting better at helping you!",
    "can you tell a story": "Once upon a time, in a digital land, there was a chatbot who loved helping people. The end!",
    "do you like movies": "I can't watch movies, but I know they're a popular form of entertainment!",
    "what's 10 x 10": "10 x 10 is 100!",
    "how's the stock market today": "I'm not connected to live data, so I can't check the stock"
}


function fetchMessage(userInput) {
    userInput = userInput.toLowerCase();
    userInput=userInput.trim();
    console.log("User input in fetchMessage is:", userInput);
    let message;
    for (let userInp in response) {
        if (userInput === userInp) {
            message = `${response[userInp]}`;
            return message;
        }
    }
    message = "Sorry, I can't understand your query.";
    return message;
}

document.getElementById("btn").addEventListener("click", function () {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        // Display user input in the chat
        addMessageToChat(userInput, 'userInput');

        // Get and display the bot's response
        let botResponse = fetchMessage(userInput);
        setTimeout(() => {
            addMessageToChat(botResponse, 'output');
        }, 500); 

        document.getElementById("userInput").value = "";
    }
});

function addMessageToChat(message, type) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    const messageContent = document.createElement("div");
    messageContent.classList.add(type === 'userInput' ? 'userInput' : 'output');
    messageContent.innerText = message;

    messageDiv.appendChild(messageContent);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom to see the latest message
}
document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});