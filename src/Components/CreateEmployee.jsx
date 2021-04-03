import React, { Fragment, useState } from "react";
import faker from "faker/locale/en_IND";
import server from "../server";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
const CreateEmployee = ({ history }) => {
  let [employee, setEmployee] = useState({
    emp_photo: faker.random.image(),
    emp_name: "",
    emp_education: "",
    emp_designation: "",
  });
  let handleChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      await server.post(server.baseURL, employee);
      toast.success(`SUCCESSFULLY EMPLOYEE CREATED`);
      history.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };
  let { emp_name, emp_education, emp_designation } = employee;
  return (
    <Fragment>
      <section id="employeeBlock">
        <article>
          <h3>Create Employee</h3>
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
              <button>Create Employee</button>
            </div>
          </form>
        </article>
      </section>
    </Fragment>
  );
};

export default withRouter(CreateEmployee);
