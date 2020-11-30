import React from 'react'

const EmployeeDetails = (props) => {
    const { getEmpDetails, handleClear, empDetails } = props

    return (
        <div>
            <button onClick={getEmpDetails} > GetDetails </button>
            <button onClick={handleClear} > Clear </button>

            {
                ( Object.keys(empDetails).length !== 0 
                ) ? (
                    <div>
                        <br /> <br/>
                        <input type="radio" /> loading....  <br />

                        <img src={empDetails.avatar} />
                        <h3>  ID : {empDetails.id}   Name : {empDetails.first_name} {empDetails.last_name} </h3>
                    </div>
                ) : ('')
            }
        </div>
    )
}

export default EmployeeDetails
