const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500"> Op /&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              HOME
            </a>
            <a className="hover:font-bold" href="/">
              ABOUT
            </a>
            <a className="hover:font-bold" href="/">
              CONTACT US
            </a>
          </li>
        </ul> */}
        <button className="text-white bg-green-700 my-5 rounded-full flex items-center justify-center ring-white ring-1">
          <img
            className="invert p-1 w-10 "
            // src="icons/github.png"
            src=""
            alt="github logo"
          />
          <span className="font-bold px-2">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
