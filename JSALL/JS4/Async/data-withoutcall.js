let employees = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
{ id: 102, name: "Sonia Gandhi", sal: 55000 }]

let createEmployee = (emp) => {
    setTimeout(() => {
        employees.push(emp)
    }, 4000)
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((emp) => {
            rows = rows + `<tr>
                            <td>${emp.id}</td>  
                            <td>${emp.name}</td>  
                            <td>${emp.sal}</td>  
                          </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = rows

    }, 1000)
}
createEmployee({ id: 103, name: 'Priyank', sal: 65000 })
getEmployees()