import React, { Fragment, useEffect, useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteEmployee = ({ history }) => {
  let { id } = useParams();
  let [employee, setEmployee] = useState({
    emp_photo: "",
    emp_name: "",
    emp_education: "",
    emp_designation: "",
  });
  let { emp_name, emp_designation, emp_education } = employee;
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
      .delete(`http://localhost:5000/employees/${id}`)
      .then(() => {
        toast.success("SUCCSSFULLY EMPLOYEE DELETED");
        history.push("/all-employee");
      })
      .catch(err => {
        toast.error(err.message);
      });
  };
  return (
    <Fragment>
      <section id="employeeBlock">
        <article>
          <h3>Delete Employee</h3>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="emp_name">Employee Name</label>
              <input
                type="text"
                name="emp_name"
                placeholder="ENTER EMPLOYEE NAME"
                value={emp_name}
              />
            </div>
            <div>
              <label htmlFor="emp_education">Employee Education</label>
              <input
                type="text"
                name="emp_education"
                placeholder="ENTER EMPLOYEE EDUCATION"
                value={emp_education}
              />
            </div>
            <div>
              <label htmlFor="emp_designation">Employee Designation</label>
              <input
                type="text"
                name="emp_designation"
                placeholder="ENTER EMPLOYEE DESIGNATION"
                value={emp_designation}
              />
            </div>
            <div>
              <button>Delete</button>
            </div>
          </form>
        </article>
      </section>
    </Fragment>
  );
};

export default withRouter(DeleteEmployee);
