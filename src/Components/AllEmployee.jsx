import React, { Fragment, useState, useEffect } from "react";
import server from "../server";
import { withRouter, Link } from "react-router-dom";

const AllEmployee = ({ history }) => {
  let [employee, setEmployee] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await server.get(server.baseURL);
        setEmployee(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [employee]);

  let RenderedEmployees = employee.map(emp => (
    <tr key={emp.id}>
      <td>
        <img src={emp.emp_photo} alt={emp.emp_name} />
      </td>
      <td>{emp.id}</td>
      <td>{emp.emp_name}</td>
      <td>{emp.emp_education}</td>
      <td>{emp.emp_designation}</td>
      <td>
        <Link to={`/edit-employee/${emp.id}`}>EDIT</Link>
      </td>
      <td>
        <Link to={`/delete-employee/${emp.id}`}>DELETE</Link>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>PHOTO</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EDUCATION</th>
            <th>DESIGNATION</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>{RenderedEmployees}</tbody>
      </table>
    </Fragment>
  );
};

export default withRouter(AllEmployee);
