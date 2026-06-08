const Header = () => {
  return (
    <>
      <div className=" sticky top-0 z-99 flex items-center justify-between px-12 py-1 bg-amber-700 text-white w-full h-16  shadow-md">
        <div className="h-full">
          <a href="/">
            <img
              src="/src/assets/transprentLogo.png"
              alt="Logo"
              className="w-fit h-full"
            />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="text-white  border border-transparent  hover:border-white px-3 py-1 rounded"
            href="/login"
          >
            Login
          </a>
          <a
            className="bg-white text-amber-700  hover:bg-amber-700  hover:text-white  border px-3 py-1 rounded"
            href="/register"
          >
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
