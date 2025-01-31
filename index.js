var HOLD = document.getElementById("holder")
var COOKIES = document.cookie
console.log(COOKiES)
if (COOKIES == "") {
    HOLD.innerHTML = "no cookies, saving your data!"
    document.cookie = "hello, world!"
} else {
    HOLD.innerHTML = COOKIES
}
