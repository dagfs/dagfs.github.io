const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    switch (theme) {
        case State.Dark:
            return document.body.classList.add("dark");
        case State.Light:
            return document.body.classList.add("light");
    }
};

const State = {
    Auto: "auto",
    Light: "light",
    Dark: "dark",
};

const getNextState = (currentState) => {
    let systemColorScheme = State.Auto;
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        let systemColorScheme = State.Dark;
    }

    if (systemColorScheme === State.Dark) {
        switch (currentState) {
            case State.Dark:
                return State.Light;
            case State.Light:
                return State.Auto;
            default:
                return State.Dark;
        }
    }

    switch (currentState) {
        case State.Light:
            return State.Dark;
        case State.Dark:
            return State.Auto;
        default:
            return State.Light;
    }
};

const themeToggle = document.getElementById("theme-toggle");
themeToggle.onclick = function () {
    const theme = localStorage.getItem("theme");
    setTheme(getNextState(theme));
};

const theme = localStorage.getItem("theme");
setTheme(theme);