import React, { Component } from "react";
import axios from "axios";

export default class CreateReview extends Component {

    constructor(props) {
        super(props);
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

    onSubmit(e) {
        e.preventDefault();
    }


    render() {
        return(
            <div>
                <h3>Create Review</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Review Name: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value=""                            
                        />
                    </div>
                    <div className="form-group q-default"> 
                        <label>Review Question: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value=""                            
                        />
                        <br/>
                        <button type="button" class="btn btn-primary btn-sm float-right">+</button>
                    </div>
                    <div className="form-group"> 
                        <label>Target Employees: All active Employees </label>                                              
                    </div>
                    <div className="form-group"> 
                        <label>Participant Employees: All active Employees</label>                                              
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Review" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}