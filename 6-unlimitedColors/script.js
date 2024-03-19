const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let setIntervalRef;
const startChangingColor = function () {

    const changeBgColor = function () {
        const body = document.querySelector('body');
        body.style.backgroundColor = randomColor();
    }

    if (!setIntervalRef) {
        setIntervalRef = setInterval(changeBgColor, 1000)
    }

}

const stopChangingColor = function () {
    clearInterval(setIntervalRef);
    setIntervalRef = null;
}

document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);
