import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditUsers } from "../state/Actions/actionCreators";

function EditForm() {
  const params = useParams();
  const { localUsers } = useSelector((state) => state.user);
  const getUser = localUsers.find((user) => user.id === parseInt(params.id));

  const [name, setName] = useState(getUser.name);
  console.log(getUser);
  const [email, setEmail] = useState(getUser.email);
  const [value, setValue] = useState({ name: "", email: "", id: getUser.id });
  // const handleChange = (e) => {
  //   setValue({ ...value[e.terget.name]:e.terget.value });
  // };

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(EditUsers({ name, email, id: getUser.id }));
    Navigate("/");
  };

  return (
    <div>
      <label className="block  text-gray-700 text-sm font-medium mb-2">
        Name
        <input
          type="text"
          value={name}
          name="name"
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full mt-3.5 py-2 px-4 bg-white text-gray-700 
              shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
          style={{ transition: "all .15s ease" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label className="block  text-gray-700 text-sm font-medium mb-2">
        Email
        <input
          type="text"
          name="email"
          value={email}
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full mt-3.5 py-2 px-4 bg-white text-gray-700 
              shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
          style={{ transition: "all .15s ease" }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>

      <div className="flex justify-around items-center">
        <button
          className=""
          onClick={() => {
            Navigate("/");
          }}
        >
          Cancel
        </button>
        <button className="" onClick={handleEdit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditForm;
