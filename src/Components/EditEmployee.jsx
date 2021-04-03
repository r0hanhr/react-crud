import React, { Fragment, useEffect, useState } from "react";
import faker from "faker/locale/en_IND";
import { toast } from "react-toastify";
import { useParams, withRouter } from "react-router-dom";
import axios from "axios";

const EditEmployee = ({ history }) => {
  let { id } = useParams();
  let [employee, setEmployee] = useState({
    emp_photo: faker.random.image(),
    emp_name: "",
    emp_education: "",
    emp_designation: "",
  });
  let handleChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then(response => {
        setEmployee({
          id: response.data.id,
          emp_photo: response.data.emp_photo,
          emp_name: response.data.emp_name,
          emp_education: response.data.emp_education,
          emp_designation: response.data.emp_designation,
        });
      })
      .catch(err => console.log(err));
  }, [id]);
  let handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/employees/${id}`, employee)
      .then(() => {
        toast.success("SUCCESSFULLY EMPLOYEE UPDATED");
        history.push("/all-employee");
      })
      .catch(err => toast.error(err.message));
  };
  let { emp_name, emp_education, emp_designation } = employee;
  return (
    <Fragment>
      <section id="employeeBlock">
        <article>
          <h3>Edit Employee</h3>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="emp_name">Employee Name</label>
              <input
                type="text"
                name="emp_name"
                placeholder="ENTER EMPLOYEE NAME"
                value={emp_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="emp_education">Employee Education</label>
              <input
                type="text"
                name="emp_education"
                placeholder="ENTER EMPLOYEE EDUCATION"
                value={emp_education}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="emp_designation">Employee Designation</label>
              <input
                type="text"
                name="emp_designation"
                placeholder="ENTER EMPLOYEE DESIGNATION"
                value={emp_designation}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>Edit Employee</button>
            </div>
          </form>
        </article>
      </section>
    </Fragment>
  );
};

export default withRouter(EditEmployee);
