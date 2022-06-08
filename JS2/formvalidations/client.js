function validateHandler() {
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile').value
    let password = document.getElementById('password').value
    if (email == "") {
        document.getElementById('email_Message').innerHTML = "Please Enter Email Id"
    }
    if (mobile.length <= 9) {
        alert("Please Enter 10 Digit Mobile ")
    }
    return false
}