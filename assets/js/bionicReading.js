function bionicReading() {
    const content = document.getElementById("main_content");
    bionifyContent(content)
}

function bionifyContent(element) {
    if (element.children.length > 0) {

        for (var i = 0; i < element.children.length; i++) {
            bionifyContent(element.children[i])
        }
    } else {
        console.log(element)
        element.innerHTML = bionifyTextContent(element.innerText)
    }
}

function bionifyTextContent(text) {
    const words = text.split(" ");
    let html = "";
    for (var w = 0; w < words.length; w++) {
        html += " " + bionifyWord(words[w])
    }
    return html;
}

function bionifyWord(word) {
    const mid = Math.ceil(word.length / 2)
    const first = word.substr(0, mid)
    const seccond = word.substr(mid)
    return `<b>${first}</b>${seccond}`;
}
// TODO
// strip spechial characters from words
// add button to turn it on / reload
// move into seperate file
//bionicReading();