const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const questionSection = document.querySelector('.question-section');

// ChatBot 
const chatbot = document.querySelector('.chatbot');
const exitChatBtn = document.querySelector('.exit-chat-btn');
const chatInput = document.querySelector('.chat-input textarea')
const sendChatBtn = document.querySelector('.chat-input span')
const chatbox = document.querySelector('.chatbox')
const bubblesContainer = document.getElementById('bubbles-container');


// const quizBox = document.querySelector('.quiz-box');
// const resultBox = document.querySelector('.result-box');
// const tryAgainBtn = document.querySelector('.tryAgain-btn');
// const goHomeBtn = document.querySelector('.goHome-btn');

// Function to hide bubbles
function hideBubbles() {
    bubblesContainer.style.display = 'none';
}
  
  // Function to show bubbles
function showBubbles() {
    bubblesContainer.style.display = 'flex';
}

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
    hideBubbles();
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    showBubbles(); 
}

continueBtn.onclick = () => {
    // questionSection.classList.add('active');
    chatbot.classList.add('active');
    popupInfo.classList.remove('active');
    // main.classList.remove('active');
    hideBubbles();
}

exitChatBtn.onclick = () => {
    chatbot.classList.remove('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    showBubbles(); 
}

let userMessage;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = ()  => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        chatbox.appendChild(createChatLi("Thinking...", "incoming"));
    }, 600);
}

sendChatBtn.addEventListener("click", handleChat);


