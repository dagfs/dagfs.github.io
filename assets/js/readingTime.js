function readingTime() {
    const text = document.getElementById("main_content").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    const wpp = 476;
    const pages = Math.ceil(words / wpp);
    document.getElementById("stats").innerHTML = `
Reading time: ${time} minutes <br>
Words: ${words} <br>
Pages: ${pages} <br>
`;
}
readingTime();