import { FaEye } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="h-[90vh] bg-[url('/foodTable.webp')] flex items-center justify-start bg-cover bg-center p-10 md:ps-30">
        <div className="bg-white rounded-lg shadow-md px-10 py-6 max-w-md w-full">
          <h1 className=" text-3xl font-bold text-amber-700 mb-2 text-center">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Login to your Cravings account
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-black font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700  border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-semibold mb-2">
                Password
              </label>
              <div className=" relative">
                <input
                  type="password"
                  name="paasword"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-700  border-gray-300"
                />
                <button
                  type="button"
                  className=" absolute right-3 top-2.5 text-gray-500 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <FaEye />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer text-gray-500">
                <input className=" cursor-pointer" type="checkbox" name="rememberMe" />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="/" className=" text-sm text-amber-700 hover:underline transition-colors">Forgot Password?</a>
            </div>
            <button type="submit" className=" w-full py-3 bg-amber-700 text-white font-semibold rounded-md  hover:bg-orange-700 transition-colors duration-300 mb-4 disabled:opacity-50 disabled:cursor-not-allowed">Login</button>
          </form>
          <div className=" relative mb-6">
            <diiv className=" absolute flex items-center inset-0 text-sm">
              <div className="w-full border-t border-gray-300"></div>
            </diiv>
            <div className=" relative text-sm flex justify-center">
              <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-300">
            <a href="/register" className="text-amber-700 font-semibold hover:underline transition-colors">Create an account</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
