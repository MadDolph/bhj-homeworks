const chatWidget = document.querySelector(".chat-widget")
const chatInput = document.getElementById('chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages-container');
const messages = document.querySelector( '.chat-widget__messages');
let date;
let randomMessage = ['меня будить????', 
'а ещё что ты хочешь?', 'приветствую тебя идущий на смерть', 
'нет вобле', 'груминг хор', 'Люк! Я твой отец!', 'Я хоть и не Алиса, но могу поддержкать разговор!',
'гуляла бы ты девочка отседа...', 'а в тюрьме сейчас ужин - макароны...'];

chatWidget.addEventListener('click', (e) => {
    if(e.target.classList == 'chat-widget__side-text') {
        chatWidget.classList.toggle('chat-widget_active');        
    }
})

chatInput.addEventListener('keypress', (e) => {
    if(e.keyCode == 13 && chatInput.value != '') {
        console.log(chatInput.value);
        date = new Date();
        messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}</div>
            <div class="message__text">${chatInput.value}</div>
            </div>
        `;
        messages.innerHTML += `
            <div class="message">
            <div class="message__time">${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}</div>
            <div class="message__text">${randomMessage[Math.round(Math.random() * (randomMessage.length - 0) + 0)]}</div>
            </div>
        `;
        chatInput.value = null;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
})

