import React, { useState } from 'react'
let employees = [{ "id": 1, "name": "Abhishek", "email": "mkitcher0@loc.gov", "gender": "Female" },
{ "id": 2, "name": "Padraic", "email": "pmcgarel1@jimdo.com", "gender": "Male" },
{ "id": 3, "name": "Tymothy", "email": "tspeke2@delicious.com", "gender": "Male" },
{ "id": 4, "name": "Melisent", "email": "mleneve3@comcast.net", "gender": "Female" },
{ "id": 5, "name": "Kevyn", "email": "kmanna4@ameblo.jp", "gender": "Female" },
{ "id": 6, "name": "Lilas", "email": "lnickels5@purevolume.com", "gender": "Female" },
{ "id": 7, "name": "Archibald", "email": "amacgiollapheadair6@cyberchimps.com", "gender": "Male" },
{ "id": 8, "name": "Fleur", "email": "frue7@tumblr.com", "gender": "Female" },
{ "id": 9, "name": "Salvador", "email": "sgoeff8@feedburner.com", "gender": "Male" },
{ "id": 10, "name": "Norbert", "email": "npindred9@free.fr", "gender": "Male" },
{ "id": 11, "name": "Brantley", "email": "bvidelera@trellian.com", "gender": "Male" },
{ "id": 12, "name": "Wendell", "email": "wdaddab@canalblog.com", "gender": "Male" },
{ "id": 13, "name": "Lian", "email": "lsuttlingc@boston.com", "gender": "Female" },
{ "id": 14, "name": "Vin", "email": "vdurdyd@qq.com", "gender": "Bigender" },
{ "id": 15, "name": "Briny", "email": "bpossele@ucla.edu", "gender": "Female" },
{ "id": 16, "name": "Ulberto", "email": "udennef@hhs.gov", "gender": "Male" },
{ "id": 17, "name": "Alonso", "email": "abloggettg@livejournal.com", "gender": "Male" },
{ "id": 18, "name": "Brena", "email": "bchedzoyh@java.com", "gender": "Female" },
{ "id": 19, "name": "Monro", "email": "mgarricki@si.edu", "gender": "Male" },
{ "id": 20, "name": "Abiram", "email": "hkeppyj@unblog.fr", "gender": "Female" }]
const Users = () => {
    let [name, setName] = useState('')
    let [foundEmp, setFoundEmp] = useState([])
    let fitlerEmployeeHandler = (event) => {
        let keyword = event.target.value
        if (keyword !== '') {
            let results = employees.filter((emp) => {
                return emp.name.toLowerCase().startsWith(keyword.toLowerCase());
            })
            setFoundEmp(results)
        }
        else {
            setFoundEmp(employees)
        }
        setName(keyword)
    }
    return <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <form >
                    <div className="form-group">
                        <input className="form-control" type="search" value={name} onChange={fitlerEmployeeHandler} />
                    </div>
                </form>
                <pre>{JSON.stringify(name)}</pre>
                <pre>{JSON.stringify(foundEmp)}</pre>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foundEmp && foundEmp.length > 0 ? <>
                                    {
                                        foundEmp.map((emp) => {
                                            return <tr>
                                                <td>{emp.id}</td>
                                                <td>{emp.name}</td>
                                                <td>{emp.gender}</td>
                                                <td>{emp.email}</td>
                                            </tr>
                                        })
                                    }
                                </> : <h2> No Employee Found</h2>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div >
}

export default Users
