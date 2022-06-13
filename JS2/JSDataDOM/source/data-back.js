let employees = [{ "id": 1, "name": "Kevina", "email": "ktattam0@uol.com.br" },
{ "id": 2, "name": "Danielle", "email": "dfarnall1@miitbeian.gov.cn" },
{ "id": 3, "name": "Colleen", "email": "cblyth2@wisc.edu" },
{ "id": 4, "name": "Hakim", "email": "hspurge3@usnews.com" },
{ "id": 5, "name": "Zora", "email": "zcouzens4@washingtonpost.com" }]

function displayDataHandler() {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr> 
                           <td> ${emp.id} </td>
                           <td> ${emp.name} </td>
                           <td> ${emp.email} </td>
                       </tr > `
    }
    document.getElementById('tbody_Data').innerHTML = rows
}