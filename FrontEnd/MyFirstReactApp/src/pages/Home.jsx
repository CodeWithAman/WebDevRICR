import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className=" border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Welcome to Home Page</h1>
          <p className="text-center">
            we have wide range of Clothings, Footwear and Accessories for you.
            Please check our products and enjoy shopping with us.
          </p>

          <div className=" d-flex justify-content-center mt-4">
            <button
              className=" btn  btn-success me-2"
              onClick={() => navigate("/Product")}
            >
              Check our Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
