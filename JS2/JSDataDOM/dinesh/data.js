let employees = [{ "id": "Alphazap", "first_name": "Fernando", "last_name": "Sandbach", "email": "fsandbach9@businessinsider.com", "gender": "Male" },
{ "id": "Holdlamis", "first_name": "Carie", "last_name": "Bloy", "email": "cbloya@dailymotion.com", "gender": "Female" },
{ "id": "Gembucket", "first_name": "Asa", "last_name": "Bartosek", "email": "abartosekb@huffingtonpost.com", "gender": "Male" },
{ "id": "Bitchip", "first_name": "Gregoor", "last_name": "Danilchev", "email": "gdanilchevc@forbes.com", "gender": "Male" },
{ "id": "Bitchip", "first_name": "Penrod", "last_name": "Eggleston", "email": "pegglestond@dedecms.com", "gender": "Male" },
{ "id": "Bigtax", "first_name": "Meir", "last_name": "O'Teague", "email": "moteaguee@reverbnation.com", "gender": "Male" },
{ "id": "Bigtax", "first_name": "Nathalie", "last_name": "Jaskiewicz", "email": "njaskiewiczf@unicef.org", "gender": "Female" },
{ "id": "Konklab", "first_name": "Codie", "last_name": "Offell", "email": "coffellg@miibeian.gov.cn", "gender": "Female" },
{ "id": "Subin", "first_name": "Anna", "last_name": "Curcher", "email": "acurcherh@squarespace.com", "gender": "Genderqueer" },
{ "id": "Bitwolf", "first_name": "Hadley", "last_name": "Ginger", "email": "hgingeri@gov.uk", "gender": "Male" },
{ "id": "Asoka", "first_name": "Harley", "last_name": "Noteyoung", "email": "hnoteyoungj@wikipedia.org", "gender": "Male" },
{ "id": "Toughjoyfax", "first_name": "Nappie", "last_name": "Falcus", "email": "nfalcusk@dailymotion.com", "gender": "Male" },
{ "id": "Hatity", "first_name": "Staci", "last_name": "Cantor", "email": "scantorl@163.com", "gender": "Female" }]


function displayDataHandler() {
    let rows = ""
    let id = 1
    for (emp of employees) {
        rows = rows + `<tr> 

                           <td> ${id++} </td>
                           <td> ${emp.id} </td>
                           <td> ${emp.first_name} </td>
                           <td> ${emp.last_name} </td>
                           <td> ${emp.email}</td>
                           <td> ${emp.gender}</td>
                       </tr > `
    }
    document.getElementById('tbody_Data').innerHTML = rows
}