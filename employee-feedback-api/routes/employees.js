const router = require('express').Router();
let Employee = require('../models/employee.model');

/* API list all employees */
router.route('/').get((req, res) => {
    Employee.find()
      .then(employees => res.json(employees))
      .catch(err => res.status(400).json('Error: ' + err));
  });

/* API to add a new employee*/
router.route('/add').post((req,res) => {
    const employeeid = req.body.employeeid;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email =  req.body.email;
    const department = req.body.department;

    const newEmployee = new Employee({
        employeeid,firstname,lastname,email,department
    });

    newEmployee.save()
    .then(() => res.json('Employee added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*API Get employee details by id(system id)*/
router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
      .then(employee => res.json(employee))
      .catch(err => res.status(400).json('Error: ' + err));
  });

/* API Update employee details, UPDATE method */
router.route('/update/:id').post((req,res) => {
    Employee.findById(req.params.id)
      .then(employee => {
          employee.employeeid = req.body.employeeid;
          employee.firstname = req.body.firstname;
          employee.lastname = req.body.lastname;
          employee.department =  req.body.department;
          employee.email = req.body.email;
          employee.isactive =  req.body.isactive;
          employee.save()
          .then(() => res.json('Employee details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));

});

/* API : Delete an employee, soft delete, we change the active status to false to avoid data redundancy */
router.route('/:id').delete((req, res) => {
    Employee.findById(req.params.id)
    .then(employee => {
        employee.isactive = false;

        employee.save() /* TODO: remove login */
        .then(() => res.json('Employee deactivated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

/* API : create login credentials for Employee */



module.exports = router;



