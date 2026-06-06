import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("UserName :", userName);
    console.log("Email :", email);
    console.log("Password :", passWord);
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="p-3 mt-5 bg-white shadow rounded" id="login-card">
          <h1 className="text-center">Welcome Back !!</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="FullName" className="fw-bold">
              Fullname
            </label>
            <input
              type="text"
              name="FullName"
              placeholder="Enter your fullname"
              className="form-control"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <br />
            <label htmlFor="Email" className="fw-bold">
              Email
            </label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              className="form-control"
              value={userName}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br/>
            <label htmlFor="PassWord" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              name="UserName"
              placeholder="Enter your password"
              className="form-control"
              value={passWord}
              onChange={(e) => {
                setpassWord(e.target.value);
              }}
            />
            <br />
            <div className=" text-end">
              <button className=" btn btn-primary">Login</button>
            </div>
          </form>
          <hr />
          <div className="text-center">
            Don't have an account ? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
