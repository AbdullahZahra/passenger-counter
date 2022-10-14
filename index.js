let count = 0
let message = "You counted "

function increment() {
    count++
    document.getElementById("count-el").innerText = count
}

function save() {
    if (message == "You counted ") {
        message += count
    }
    else {
        message += ", " + count
    }

    document.getElementById("message").innerText = message

    count = 0
    document.getElementById("count-el").innerText = count
}
