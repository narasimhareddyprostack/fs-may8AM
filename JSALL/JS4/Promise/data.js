let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
{ id: 102, name: "Sonia Gandhi", sal: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.push(emp)
            let flag = false
            flag ? resolve("Successfully inserted records") : reject("Failed")
        }, 4000)
    });
}
let getEmployee = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((emp) => {
            rows = rows + `<tr>
                            <td> ${emp.id}</td>
                            <td> ${emp.name}</td>
                            <td> ${emp.sal}</td>
                            </tr>`
        })
        document.getElementById("tbody_Data").innerHTML = rows
    }, 1000)
}

createEmployee({ id: 103, name: "Priyanka Gandhi", sal: 65000 })
    .then((msg) => {
        getEmployee()
        console.log(msg)
    })
    .catch((err) => {
        console.log(err)
    })