var HOLD = document.getElementById("holder")
var COOKIES = document.cookie
console.log(COOKiES)
if (COOKIES == "") {
    HOLD.innerHTML = "no cookies, saving your data!"
    document.cookie = "hello=world; expires=Thu, 31 Dec 2025 12:00:00 UTC!"
} else {
    HOLD.innerHTML = COOKIES
}
