function showMsg() {
    let msgDiv = document.querySelector('.msg')
    msgDiv.style.animation = 'alert 5s linear 1 forwards'
    setTimeout(() => {
        msgDiv.style.animation = 'none'
    }, 2000);
}

function displayMsg() {
    let msgDiv = document.querySelector('.msg')
    msgDiv.style.visibility = 'visible'
}

function hideMsg() {
    let msgDiv = document.querySelector('.msg')
    msgDiv.style.visibility = 'hidden'
    showMsg()
}