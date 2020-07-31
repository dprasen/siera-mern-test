import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = props => (
    <tr>
        <td>{props.employee.employeeid}</td>
        <td>{props.employee.firstname}</td>
        <td>{props.employee.lastname}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.department}</td>
        <td>{String(props.employee.isactive)}</td>
        <td>
      <Link to={"/edit/"+props.employee._id}>edit</Link> | <a href="#" onClick={() => { props.deleteEmployee(props.employee._id) }}>delete</a>
    </td>
    </tr>
)

export default class EmployeesList extends Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this)        
        this.state = {employees: []};
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/employees/')
        .then(response => {            
            this.setState({ employees: response.data })
          })
          .catch((error) => {
            console.log(error);
        })
    }

    deleteEmployee(id) {
        axios.delete('http://localhost:5000/employees/'+ id)
          .then(response => { console.log(response.data)}).then(this.componentDidMount)    
        /*this.setState({
          employees: this.state.employees.filter(el => el._id !== id)
        })*/
      }

    employeesList() {
        return this.state.employees.map(currentemployee => {
          return <Employee employee={currentemployee} deleteEmployee={this.deleteEmployee}  key={currentemployee._id}/>;
        })
    }

    render() {
        return (
          <div>
            <h3>Employees</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>EMP ID</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.employeesList() }
              </tbody>
            </table>
          </div>
        )
      }

}