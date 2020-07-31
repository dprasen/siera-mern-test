import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EditExercise extends Component {
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
    

    componentDidMount() {
        axios.get('http://localhost:5000/employees/'+this.props.match.params.id)
          .then(response => {
            this.setState({
                employeeid:response.data.employeeid,
                firstname:response.data.firstname,
                lastname:response.data.lastname,
                email:response.data.email,
                department:response.data.department,
                isactive:response.data.isactive
            })   
          })
          .catch(function (error) {
            console.log(error);
          });
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
    
            
        axios.post('http://localhost:5000/employees/update/' + this.props.match.params.id, employee)
          .then(res => console.log(res.data));
    
        window.location = '/employeeslist';
      }

    render() {
        return(
            <div>
                <h3>Edit Employee</h3>
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
                    <input type="submit" value="Update Employee" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }

}