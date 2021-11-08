var win = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            win.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            win.value = screenValue;
        }
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            win.value = screenValue;
        }
        else {
            screenValue += buttonText;
            win.value = screenValue;
        }

    })
}
