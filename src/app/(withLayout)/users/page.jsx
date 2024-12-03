import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl p-2">User Management</h1>
        <button>
          <Link
            href={"/users/add"}
            className="p-3 m-1 rounded-md bg-blue-500 text-gray-50 hover:bg-blue-200 hover:text-blue-900 hover:shadow-md"
          >
            Add User
          </Link>
        </button>
      </div>
      <hr className="my-5" />
      <div className="mt-20">
        <table className="custom-table">
          <thead className="border-y-2 border-gray-200">
            <tr>
              <th>Sr. No.</th>
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default page;
