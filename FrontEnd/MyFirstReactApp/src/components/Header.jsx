import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center p-3 shadow-sm">
        <div className="text-primary fs-4 fw-bold d-flex align-items-center gap-2">
          <FaApple className="fs-4 text-black" />
          My Company
        </div>

        <div className="d-flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/product"}>Products</Link>
          <Link to={"/contactUs"}>ContactUs</Link>
        </div>

        <div className="d-flex gap-3">
          <Link to={"/login"}>
            <button className="btn btn-outline-primary">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
