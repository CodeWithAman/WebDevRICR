const Login = () => {
  return (
    <>
      <div>
        <div>
          <h1>Welcome Back</h1>
          <p>Login to your Cravings account</p>
          <form>
            <div>
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  name="paasword"
                  placeholder="Enter your password"
                />
                <button></button>
              </div>
            </div>
            <div>
              <label>
                <input type="checkbox" name="rememberMe" />
                <span>Remember me</span>
              </label>
              <a href="/">Forgot Password?</a>
            </div>
            <button>Login</button>
          </form>
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <span>Don't have an account?</span>
            </div>
          </div>
          <p>
            <a href="/register">Create an account</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
