function fade(element) {
    let op = 1;  // initial opacity
    let timer = setInterval(function () {

        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 20);
}

function unfade(element, displayProperty, time = 10) {
    let op = 0.1;  // initial opacity

    if (displayProperty) {
        element.style.display = displayProperty;
    } else {
        element.style.display = 'block';
    }

    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, time);
}