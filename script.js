const messages = [
    "Em chắc chứ?",
    "Thật sự chắc chắn??",
    "Thật luôn hả?",
    "Em iu à làm ơn...",
    "Hãy suy nghĩ lại đi!",
    "Nếu em nói không, anh sẽ buồn lắm...",
    "Anh sẽ rất buồn...",
    "Anh thật sự sẽ rất rất rất buồn...",
    "Được rồi, anh sẽ ngừng hỏi.",
    "Đùa thôi, đồng ý đi nàooo! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}