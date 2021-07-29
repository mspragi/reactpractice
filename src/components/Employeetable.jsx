import React, { Fragment } from 'react'

const Employeetable = (props) => {
    let {name, emp_id,  company, salary, location, emp_education, emp_designation}=props.emp

    return (
        <Fragment>
<table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th >Name</th>
            <th >company</th>
            <th >salary</th>
            <th >location</th>
            <th >Education</th>
            <th >designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{emp_id}</th>
            <td>{name}</td>
            <td>{company}</td>
            <td>{salary}</td>
            <td>{location}</td>
            <td>{emp_education}</td>
            <td>{emp_designation}</td>
          </tr>
        </tbody>
      </table>
            
        </Fragment>
    )
}

export default Employeetable;











    