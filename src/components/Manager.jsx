import React from "react";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4} from "uuid";

export const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();

  const [form, setform] = useState({ site: "", username: "", password: "" });
  // console.log(form);
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("password");
    let passwordsArray;
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/eyeCross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
      ref.current.src === "icons/eyeCross.png";
    }
  };

  const deletePassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/eyeCross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
      ref.current.src === "icons/eyeCross.png";
    }
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, {...form,id:uuidv4()}]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    // console.log(form);
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("🦄 Copy To Clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

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
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-4 py-1"
            placeholder="Enter website URL"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between ">
            <input
              onChange={handleChange}
              value={form.username}
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter Username"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                ref={passwordRef}
                onChange={handleChange}
                value={form.password}
                className="rounded-full border border-green-500 w-full p-4 py-1"
                placeholder="Enter Password"
                type="password"
                name="password"
                id=""
              />
              <span
                className="absolute right-[1px] top-[1px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={30}
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className=" flex justify-center items-center gap-2 bg-green-300 hover:bg-green-500  rounded-full px-4 w-fit border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h1 className="font-bold text-2xl py-4" c>
            Your Passwords
          </h1>
          {passwordArray.length === 0 && <div>No password to show</div>}

          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">UserName</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 border border-white text-center w-32">
                      <a href="{item.site}" target="_blank">
                        {item.site}
                      </a>
                      <div
                        className="copyIcons size-7 cursor-pointer "
                        onClick={() => copyText(item.site)}
                      >
                        <img
                          src="icons/copy.gif"
                          alt="copy"
                          className="right-0"
                        />
                        {/* <lord-icons
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                          // style="width:250px;height:250px"
                        ></lord-icons> */}
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      {item.username}
                      <div
                        className="copyIcons size-7 cursor-pointer"
                        onClick={() => copyText(item.username)}
                      >
                        <img src="icons/copy.gif" alt="copy" />
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      {item.password}
                      <div
                        className="copyIcons size-7 cursor-pointer"
                        onClick={() => copyText(item.password)}
                      >
                        <img src="icons/copy.gif" alt="copy" />
                      </div>
                    </td>
                    <td className="py-2 border border-white text-center w-32">
                      <span>
                        <img
                          className="cursor-pointer"
                          src="icons/delete.gif"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          className="cursor-pointer"
                          src="icons/edit.svg"
                          alt=""
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
