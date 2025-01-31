var HOLD = document.getElementById("holder")
var STORAGE = localStorage.getItem("test") || ""

if (STORAGE == "") {
    HOLD.innerHTML = "this text will be different when you enter again!"
    localStorage.setItem("test", "hello, world!")
} else {
    HOLD.innerHTML = STORAGE
}
