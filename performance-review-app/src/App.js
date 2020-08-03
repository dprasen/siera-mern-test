import React, { Component } from 'react';
import {observer} from 'mobx-react';
import UserStore from './middleware/UserStore';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import EmployeesList from "./components/employees-list.component";
import EditEmployee from "./components/edit-employee.component";
import CreateEmployee from "./components/create-employee.component";
import CreateReview from "./components/create-review.component";
import ReviewsList from "./components/reviews-list.component"

class App extends Component{

  async componentDidMount(){
    try{
        let res = await fetch('isLoggedIn',{
            method : 'post',
            headers : {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        });

        let result = await res.json();
        if(result && result.success){
          UserStore.loading=false;
          UserStore.isLoggedIn=true;
          UserStore.username = result.username;
        }
        else{
          UserStore.loading=false;
          UserStore.isLoggedIn=true;
        }
    }
    catch(e){
      UserStore.loading=false;
      UserStore.isLoggedIn=true;
    }
  }

  async doLogout(){
    try{
        let res = await fetch('/logout',{
            method : 'post',
            headers : {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        });

        let result = await res.json();
        if(result && result.success){          
          UserStore.isLoggedIn=true;//bypass auth for now
          UserStore.username = '';
        }        
    }
    catch(e){
      console.log(e);
      UserStore.isLoggedIn=true;//bypass auth
          UserStore.username = '';
    }
  }

  render(){

    if(UserStore.loading){
      return(
        <div>
           Loading...., please wait!
        </div>
      );
    }
    else{
      if(UserStore.isLoggedIn){
        return(
          <div>
              Welcome {UserStore.username}
              <SubmitButton 
                  text={'Logout'}
                  disabled = {false}
                  onClick = { ()=> this.doLogout()}
              />
              <Router>
                <div className="container">
                <Navbar />
                <br/>
                <Route path="/employeeslist" exact component={EmployeesList} />  
                <Route path="/edit/:id" component={EditEmployee} />  
                <Route path="/createemployee" component={CreateEmployee} />  
                <Route path="/createreview" component={CreateReview} />  
                <Route path="/listreview" component={ReviewsList} /> 
                </div>
              </Router>
          </div>
        );
      }
      return(
        <div className="app">
          <div className="container">
              <SubmitButton 
                  text={'Logout'}
                  disabled = {false}
                  onClick = { ()=> this.doLogout()}
              />
             <LoginForm/>
          </div>
        </div>
      );
    }
  }
}

export default observer(App);
