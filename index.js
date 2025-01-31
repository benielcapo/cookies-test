var HOLD = document.getElementById("holder")
var COOKIES = document.cookie
if (COOKIES == "") {
    HOLD.innerHTML = "no cookies, saving your data!"
    document.cookie = "hello, world!"
} else {
    HOLD.innerHTML = COOKIES
}
