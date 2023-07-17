import { Link, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { useRef } from "react";

function Register() {
  const history = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userData = {
      username: enteredUsername,
      password: enteredPassword,
    };

    axios
      .post(
        `http://localhost/first_year_group_project_y8/getflix_app/src/php/register.php`,
        userData
      )
      .then((result) => {
        let response = result.data;
        console.log(result);
        console.log(response);
        if (response.status === "valid") {
          history("/login");
        } else {
          alert(response.message);
        }
      })
      .catch(console.error);
  }

  let routerLinkStyle = {
    fontSize: "1.2em",
    verticalAlign: "middle",
    color: "#ffb800",
    textDecoration: "none",
  };

  return (
    <div className="container-fullwidth" style={{ overflow: "none" }}>
      <div className="background" style={{ overflow: "none" }}>
        <div className="form-div" style={{ overflow: "none" }}>
          <div className="form-title">
            <p className="form-title-text">SIGN UP</p>
          </div>
          <form className="input-form" onSubmit={submitHandler}>
            <input
              className="input-box"
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              required
              ref={usernameRef}
            ></input>
            <input
              className="input-box"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              ref={passwordRef}
            ></input>
            <input
              type="submit"
              className="primary-button"
              value="Sign Up"
            ></input>
          </form>
          <div className="switch-form">
            <p className="form-text">Already have an account?</p>
            <Nav.Link href="/login" className="alt-button">
              <Link style={routerLinkStyle} to="/login">
                Switch to login
              </Link>
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
