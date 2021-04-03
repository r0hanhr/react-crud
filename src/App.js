import React, { Fragment } from "react";
import HeaderComponent from "./Components/HeaderComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreateEmployee from "./Components/CreateEmployee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllEmployee from "./Components/AllEmployee";
import EditEmployee from "./Components/EditEmployee";
import DeleteEmployee from "./Components/DeleteEmployee";

const App = () => {
  return (
    <Fragment>
      <Router>
        <header>
          <HeaderComponent />
        </header>
        <main>
          <ToastContainer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-employee" exact component={CreateEmployee} />
            <Route path="/all-employee" exact component={AllEmployee} />
            <Route path="/edit-employee/:id" exact component={EditEmployee} />
            <Route
              path="/delete-employee/:id"
              exact
              component={DeleteEmployee}
            />
          </Switch>
        </main>
      </Router>
    </Fragment>
  );
};

export default App;
