import { employee_Reducer } from './Employee/employee.reducer'
import { combineReducers } from 'redux'

let rootReducer = combineReducers({ employee: employee_Reducer })
export { rootReducer }