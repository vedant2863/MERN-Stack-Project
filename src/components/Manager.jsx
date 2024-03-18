export const Manager = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      <div className="mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500"> Op /&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your Own password Manager
        </p>
        <div className=" flex flex-col p-4 text-black gap-8 items-center ">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-1"
            placeholder="Enter website URL"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between ">
            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter Username"
              type="text"
              name=""
              id=""
            />
            <div className="relative">

            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter Password"
              type="text"
              name=""
              id=""
            />
            <span className="absolute right-0 top-1"> 
            <img src="" alt="eye"/>
            </span>
            </div>

          </div>
          <button className=" flex justify-center items-center gap-2 bg-green-300 hover:bg-green-500  rounded-full px-4 w-fit border border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};
