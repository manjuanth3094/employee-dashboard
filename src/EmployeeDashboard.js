import React, { useState } from 'react'
import axios from 'axios'

import EmployeeDetails from './EmployeeDetails'

const EmployeeDashboard = (props) => {
    const [department, setDepartment] = useState('')
    const [empId, setEmpId] = useState('')
    const [dropDownIds, setDropDownIds] = useState([])
    const [empDetails, setEmpDetails] = useState({})

    const handleDepartment = (e) => {
        setDepartment(e.target.value)

        if(e.target.value === 'HR') {
            setDropDownIds([1, 2, 3, 4, 5])
        } else {
            setDropDownIds([6, 7, 8 ,9 , 10])
        }
    }

    const handleEmpId = (e) => {
        setEmpId(e.target.value)
    }

    const getEmpDetails = () => {
        if(empId) {
            axios.get( ` https://reqres.in/api/users/${empId} `)
            .then(response => {
                console.log(response.data.data)
                setEmpDetails(response.data.data)
            })
            .catch(err => {
                alert(err.message)
            })
        }
    }

    const handleClear = () => {
        setDepartment('')
        setEmpId('')
        setEmpDetails({})
    }
    
    

    return (
        <div>
            <label> Department : </label> &emsp; &emsp; &emsp;<label> Employee Id : </label> <br /> <br />

            <select value={department} onChange={handleDepartment} >
                <option> select </option>
                <option value="HR"> HR </option>
                <option value="ENGINEERING"> ENGINEERING </option>
            </select>  &emsp; &emsp;

            <select value={empId} onChange={handleEmpId} >
                <option> select </option>
                { dropDownIds.map(id => <option key={id}> {id} </option>)}
            </select> &emsp; &emsp;  
            
            <EmployeeDetails 
                getEmpDetails={getEmpDetails}
                handleClear={handleClear}
                empDetails={empDetails}
            />
        </div>
    )
}

export default EmployeeDashboard
