var presenterWindow = null;
function asHTML(node) {
    var wrap = document.createElement("div");
    wrap.appendChild(node.cloneNode(true));
    return wrap.innerHTML;
}
var currentSlide = 0;
var slideCount = 0;
var currentChapter = 0;
var chapters = document.getElementsByTagName("H2")

var numberOfPages = [...document.getElementsByTagName("h1"), ...document.getElementsByTagName("h2"), ...document.getElementsByTagName("h3")].length 
var currentPage = 0;
var content = document.getElementById("main_content");
var newContent = "";
var currentSection = "";
for (var i = 0; i < content.children.length; i++) {
    const child = content.children[i];

    if (["H1", "H2", "H3"].includes(content.children[i].nodeName)) {

        if (child.innerHTML.indexOf("[presentation-only]") > -1) {

            child.classList.add("presentation-only");
            child.innerHTML = child.innerHTML.replace(
                "[presentation-only]",
                ""
            );
        }
        if (currentSection) {
            newContent +=
                "\n</div>\n<div id='slide" +
                slideCount +
                "' class='slide'>\n" +
                currentSection
            newContent += "<div class='page-number'>" + currentPage + "/" + numberOfPages + "</div>"

            newContent += "\n</div>\n";
            slideCount++;
            currentPage++;
        }
        currentSection = asHTML(child) + '\n<div class="slide-body">\n';
        
    } else {
        currentSection += asHTML(child);
    }
    if (content.children[i].nodeName === "H2" && currentChapter === 0) {

        newContent += "</div><div id='slide" +
            slideCount +
            "' class='slide presentation-only'>\n"
        newContent += '\n<div class="slide-body">\n'
        newContent += "<ol class='chapter-list'>"
        for (var j = 0; j < chapters.length; j++) {

            newContent += "<li class='" + (j < currentChapter ? "seen" : "") + "'>" + chapters[j].innerHTML + "</li>"
        }
        newContent += "</ol>"
        newContent += "</div>"
        newContent += "<div class='page-number'>" + currentPage + "/" + numberOfPages + "</div>"
        newContent += "</div>"
        slideCount++;
        currentPage++;
        currentChapter++;
    }
}
newContent +=
    "\n</div>\n<div id='slide" +
    slideCount +
    "' class='slide'>\n" +
    currentSection
newContent += "<div class='page-number'>" + currentPage + "/" + numberOfPages + "</div>"

newContent += "\n</div>\n";

content.innerHTML = newContent;

document.addEventListener("keydown", keyDownTextField, false);

var presentation = false;
var presenterMode = false;

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 33 || keyCode == 37) {
        e.preventDefault();
        prev();
    }
    if (keyCode == 34 || keyCode == 39) {
        e.preventDefault();
        next();
    }

    if (keyCode == 80) {
        togglePresentation();
    }

    if (keyCode == 116) {
        presentation = false;
        togglePresentation();
    }

    if (keyCode == 27) {
        presentation = true;
        togglePresentation();
    }

    if (keyCode == 75 || keyCode == 190) {
        togglePC();
    }
}

document.onfullscreenchange = togglePresentation;

function togglePresentation() {
    presentation = !presentation;
    if (presentation) {
        document.body.classList.add("presentation");
        if (confirm("Open presenter window?")) {
            openPresenterWindow();
        }
    } else {
        document.body.classList.remove("presentation");
    }
}

function prev() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = 0;
    gotoSlide(currentSlide);
}

function next() {
    currentSlide++;
    if (currentSlide > slideCount) currentSlide = slideCount;
    gotoSlide(currentSlide);
}

function gotoSlide(slide) {
    if (presenterWindow) presenterWindow.location.hash = "slide" + slide;
    setTimeout(() => {
        window.location.hash = "slide" + slide;
    }, 100);
}
var secondsLeft = 20;
var pcTimeout;
function togglePC() {
    toggleTimerVisability();
    if (!pcTimeout) {
        runPC();
    } else {
        clearTimeout(pcTimeout);
        pcTimeout = undefined;
    }
}

function runPC() {
    pcTimeout = setTimeout(() => {
        if (secondsLeft > 1) {
            secondsLeft--;
            updateTimer();
            runPC();
        } else {
            secondsLeft = 20;
            updateTimer();
            if (currentSlide < slideCount) {
                next();
                runPC();
            }
        }
    }, 1000);
}

function updateTimer() {
    document.getElementById("timer").innerHTML = secondsLeft;
}

function toggleTimerVisability() {
    if (document.body.classList.contains("show-timer")) {
        document.body.classList.remove("show-timer");
    } else {
        document.body.classList.add("show-timer");
    }
}

function openPresenterWindow() {
    if (presenterWindow == null || presenterWindow.closed) {
        presenterWindow = open(
            window.location.href,
            "_blank",
            "width=200,height=100"
        );
        console.log(presenterWindow);
        setTimeout(startPresenterMode, 5000);
    } else {
        presenterWindow.focus();
    }
}

function startPresenterMode() {
    presenterWindow.document.body.classList.add("presentation");
    presenterWindow.document.body.classList.add("presenter-mode");
}

// TODO
// legg til qr kode og lenke til presentasjonen som siste slide