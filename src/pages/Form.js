import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetUsers } from "../state/Actions/actionCreators";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState({ name: "", email: "" });
  // const handleChange = (e) => {
  //   setValue({ ...value[e.terget.name]:e.terget.value });
  // };

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      GetUsers({
        name,
        email,
      }),
    );
    Navigate("/home");
  };

  return (
    <div className="">
      <h2 className=" border border-gray-300 p-4"> Form</h2>
      <div className="p-5">
        <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center justify-center ">
          Name
          <input
            type="text"
            name="name"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full mt-3.5 py-1 px-4 bg-white text-gray-700 
              shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
            style={{ transition: "all .15s ease" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center justify-center ">
          Email
          <input
            type="text"
            name="email"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full mt-3.5 py-1 px-4 bg-white text-gray-700 
              shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
            style={{ transition: "all .15s ease" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <div className="flex justify-around items-center">
          <button
            className="py-1.5 px-8 m-2 text-red-500 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline border border-red-500"
            onClick={() => {
              Navigate("/home");
            }}
          >
            Cancel
          </button>
          <button
            className="py-1.5 px-8 m-2 text-blue-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
//
// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="text" placeholder="Name" {...register("Name", {required: true})} />

//       <input type="submit" />
//     </form>
//   );
// }
