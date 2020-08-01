import React, { Component } from "react";
import axios from "axios";

export default class CreateEmployee extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmployeeid = this.onChangeEmployeeid.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeActive = this.onChangeActive.bind(this);        
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            employeeid:'',
            firstname:'',
            lastname:'',
            email:'',
            department:'',
            isactive:true
        }
    }
        
    onChangeFirstname(e) {
        this.setState({
          firstname: e.target.value
        })
    }

    onChangeLastname(e) {
        this.setState({
          lastname: e.target.value
        })
    }

    onChangeEmployeeid(e) {
        this.setState({
          employeeid: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
    }

    onChangeDepartment(e) {
        this.setState({
          department: e.target.value
        })
    }

    onChangeActive(e) {
        const target = e.target;
        const value = target.checked ? true:false;                
        this.setState({
            isactive: value
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
        const employee = {
            employeeid:this.state.employeeid,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            department:this.state.department,
            isactive:this.state.isactive,
        }
    
            
        axios.post('http://localhost:5000/employees/add/',employee)
          .then(res => console.log(res.data));

          this.setState({
                employeeid:'',
                firstname:'',
                lastname:'',
                email:'',
                department:'',
                isactive:true
          })
    
        window.location = '/employeeslist';
      }

    render() {
        return(
            <div>
                <h3>Create Employee</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Employee ID: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.employeeid}
                        onChange={this.onChangeEmployeeid}
                    />
                </div>
                <div className="form-group"> 
                    <label>Firstname: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.firstname}
                        onChange={this.onChangeFirstname}
                    />
                </div>
                <div className="form-group"> 
                    <label>Lastname: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.lastname}
                        onChange={this.onChangeLastname}
                    />
                </div>
                <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>
                <div className="form-group"> 
                    <label>Department: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.department}
                        onChange={this.onChangeDepartment}
                    />
                </div>
                <div className="form-group"> 
                    <label>Active: </label>
                    <input  type="checkbox"                        
                        className="form-control-none"
                        checked={this.state.isactive}
                        onChange={this.onChangeActive}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Employee" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }

}

