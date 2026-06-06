import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [passWord, setpassWord] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    console.log("UserName :" , userName);
    console.log("Password :" , passWord);
    
    
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="p-3 mt-5 bg-white shadow rounded" id="login-card">
          <h1 className="text-center">Welcome Back !!</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="UserName" className="fw-bold">
              Username
            </label>
            <input
              type="text"
              name="UserName"
              placeholder="Enter your username"
              className="form-control"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <br />
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
            Don't have an account ? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
