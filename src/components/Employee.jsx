import React, {Fragment} from 'react'

const Employee = (props) => {
  let {name, emp_id, pic, company, salary, location, emp_education, emp_desingnation}=props.emp
  return (
    <Fragment>
      <main className="col-md-4 my-2 b ">
<div className="card a " >
        <img src={pic} className="card-img-top" alt="" />
        <div className="card-body body ">
          <h5 className="card-title">Employee</h5>
          <p className="card-text">{name}</p>
          <p className="card-text">{emp_id}</p>
          <p className="card-text">{company}</p>
          <p className="card-text">{salary}</p>
          <p className="card-text">{location}</p>
          <p className="card-text">{emp_education}</p>
          <p className="card-text">{emp_desingnation}</p>
          <a href="#" className="btn btn-primary">join</a>
          
        </div>
      </div>
      </main>
    );

    </Fragment>
  )
}

export default Employee

