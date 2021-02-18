function styleNewTaks(message, newBox, newTask) {
    message.style.display = 'none';

    newBox.style.display = 'block'

    newBox.style.textAlign = 'initial';
    newBox.style.fontSize = "30px";

};

function hideElement(element) {
    element.style.display = "none"
}

function showElement(element, property) {
    if(property){
        element.style.display=property;
        return;
    }

    element.style.display="block";
}