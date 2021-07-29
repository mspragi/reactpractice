
import React, { Component, Fragment } from 'react';
import Employee from './components/Employee';
import Employeetable from './components/Employeetable';


class App extends Component {
  state = {
    employee:[
      {name:"A", emp_id:"typ1",    pic:"https://images.unsplash.com/photo-1612870963422-b5cab65a0547?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", company:"CGI", salary:300000, location:"Bangalore", emp_education:"BE", emp_designation:"Developer"},
      {name:"B", emp_id:"typ2",    pic:"https://images.unsplash.com/photo-1612870963422-b5cab65a0547?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", company:"jsp", salary:300000, location:"Bangalore", emp_education:"BE", emp_designation:"support"},
      {name:"C", emp_id:"typ3",    pic:"https://images.unsplash.com/photo-1612870963422-b5cab65a0547?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", company:"CGI", salary:300000, location:"Bangalore", emp_education:"BE", emp_designation:"BPO"}

    ]}
  render() { 
    return( <Fragment>
     {this.state.employee.map((emp)=>(
       <Employeetable emp={emp} key={emp.emp_id}/>
     ))}
         </Fragment>)
 
}
}
 
export default App;





























//  <Employee user={{name:"A", empid:20,  pic:"https://images.unsplash.com/photo-1612870963422-b5cab65a0547?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", company:"jsp", salary:300000, location:"Bangalore"}} />
// <Employee user={{name:"b", empid:223, pic:"https://images.unsplash.com/photo-1612870963422-b5cab65a0547?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", company:"jsp", salary:300000, location:"Bangalore"}} />
// <Employee user={{name:"c", empid:343, pic:"https://images.unsplash.com/photo-1612870963422-b5cab65a0547?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", company:"jsp", salary:300000, location:"Bangalore"}} /> */
