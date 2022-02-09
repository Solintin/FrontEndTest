import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import * as types from "../state/Actions/actionCreators";

function DashboardFetch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(types.fetchUser());
  }, []);
  const { users, loading } = useSelector((state) => state.user);

  if (loading) {
    return (
      <div className="loading">
        <div className="animate-spin rounded-2xl h-20 w-20 bg-purple-900"></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex justify-between items-center border-b-2 m-3">
          <div className="font-semibold">Use list</div>
          <button className="py-1.5 px-8 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
            Add New
          </button>
        </div>
        <div className="flex flex-col  border border-gray-400">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="pt-2  inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b border-gray-400">
                    <tr>
                      <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Id
                      </th>
                      <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Name
                      </th>
                      <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Username
                      </th>
                      <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Email
                      </th>
                      <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        City
                      </th>
                      <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Edit
                      </th>

                      <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {users.map((user) => {
                      return (
                        <tr
                          className="border-b border-gray-400 font-medium"
                          key={user.id}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {user.id}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                            {user.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                            {user.username}
                          </td>

                          <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                            {user.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                            {user.address.city}
                          </td>

                          <td className="text-sm text-gray-900 font-light  ">
                            <button className="py-1.5 px-8 m-2 text-white transition-colors duration-150 bg-yellow-600 rounded-lg focus:shadow-outline hover:bg-yellow-700">
                              edit
                            </button>
                          </td>

                          <td className="text-sm text-gray-900 font-light  ">
                            <button className="py-1.5 px-8 m-2 text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700">
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardFetch;
