let goToMovie = (success, failure) => {
    let money = 400
    money > 500 ? success("Buy Tickets and Enjoy") : failure("Go To PG, Sleep")
}
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})