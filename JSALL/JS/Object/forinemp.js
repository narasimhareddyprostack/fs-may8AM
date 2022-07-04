let emp = {
    id: 101,
    name: "Rahul Gandhi",
    sal: 45000,
    loc: ['Bangalore', 'Noida'],
    details: {},
    getInfo: function () {
        return "GM"
    }
}
for (x in emp) {
    console.log(emp[x])
}
