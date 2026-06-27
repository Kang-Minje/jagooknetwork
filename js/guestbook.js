document.addEventListener('DOMContentLoaded', function() {
    loadMessages();
});

document.getElementById('guestBookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        addMessage(name, message);
        saveMessage(name, message);

        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    }
});

function addMessage(name, message) {
    const messageListItem = document.createElement('li');
    messageListItem.textContent = `${name}: ${message}`;
    document.getElementById('messagesList').appendChild(messageListItem);
}

function saveMessage(name, message) {
    let messages = JSON.parse(localStorage.getItem('guestBookMessages')) || [];
    messages.push({ name, message });
    localStorage.setItem('guestBookMessages', JSON.stringify(messages));
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('guestBookMessages')) || [];
    messages.forEach(messageObj => {
        addMessage(messageObj.name, messageObj.message);
    });
}

// 초기화 함수 추가
function clearMessages() {
    localStorage.removeItem('guestBookMessages');
    document.getElementById('messagesList').innerHTML = '';
}

// 개발자 도구 콘솔에서 초기화 함수를 실행할 수 있도록 window 객체에 추가
window.clearMessages = clearMessages;
