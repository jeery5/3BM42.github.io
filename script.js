const body = document.querySelector("body")
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light Mode"
        localStorage.setItem("theme", "dark");
        console.log(1)
    }else{
        modeText.innerText = "Dark Mode"
        localStorage.setItem("theme", "light")
    }
});

