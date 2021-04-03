import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Fragment>
      <section id="headerBlock">
        <nav>
          <div className="logoBlock">JSPIDERS</div>
          <div className="menuBlock">
            <ul>
              <li>
                <Link to="/create-employee">CREATE EMPLOYEE</Link>
              </li>
              <li>
                <Link to="/all-employee">ALL EMPLOYEE</Link>
              </li>
              {/* <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/"></a>
              </li> */}
            </ul>
          </div>
        </nav>
      </section>
    </Fragment>
  );
};

export default HeaderComponent;
