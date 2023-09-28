let main = document.querySelector("main")
let body = document.querySelector("body")
let myCount = document.querySelector("#count")
let btns = document.querySelectorAll("header button")
let count = 0

const increase = () => {
    count += 1
    myCount.innerHTML = count
}

const decrease = () => {
    count -= 1
    myCount.innerHTML = count
}

const reset = () => {
    count = 0
    myCount.innerHTML = count
}

const selectTheme = (theme) => {
    main.className = theme
    body.className = theme
}

btns.forEach((button) => {
    button.addEventListener(`click`, (event) => {
        let theme = event.target.innerHTML.toLowerCase()
        selectTheme(theme)
    })
})