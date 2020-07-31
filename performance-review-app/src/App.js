import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import EmployeesList from "./components/employees-list.component";
import EditEmployee from "./components/edit-employee.component";
import CreateEmployee from "./components/create-employee.component";
//import ExercisesList from "./components/exercises-list.component";
//import EditExercise from "./components/edit-exercise.component";
//import CreateExercise from "./components/create-exercise.component";
//import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/employeeslist" exact component={EmployeesList} />  
      <Route path="/edit/:id" component={EditEmployee} />  
      <Route path="/createemployee" component={CreateEmployee} />  
      </div>
    </Router>
  );
}

export default App;
