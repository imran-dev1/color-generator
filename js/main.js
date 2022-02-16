document.getElementById('change-color-btn').addEventListener('click', function () {
    const bgColor = generateHexColor();
   
    document.body.style.backgroundColor = bgColor;
    const inputForm = document.getElementById('color-code');
    inputForm.value = bgColor;
    
})

function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    if (color.length == 7) {
        return color;
    } else {
        return generateHexColor();
    }
    
}

// Copy to Clipboard 
document.getElementById('copy-btn').addEventListener('mouseover', function () { 
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.innerText = 'Copy to clipboard';
})
document.getElementById('copy-btn').addEventListener('mouseout', function () { 
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.innerText = 'Copy';
})
let div = null;
document.getElementById('copy-btn').addEventListener('click', function () {
    const inputField = document.getElementById('color-code');
    navigator.clipboard.writeText(inputField.value);
    if (div != null) {
        div.remove();
        div = null;
    }
    div = document.createElement('div');
    div.classList.add('notification','bg-success','shadow-lg','toast-message-slide-in');
    div.innerText = inputField.value + ' ' + 'Copied';
    document.body.appendChild(div);

    div.addEventListener('click', function () {
        div.classList.remove = 'toast-message-slide-in';
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function () {
            div.remove();
        })
    })
})
