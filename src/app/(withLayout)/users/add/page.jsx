import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Add User</h1>
      <form className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2">
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <label htmlFor="username">Username</label>
          </div>
          <input
            type="text"
            id="username"
            className="custom-input"
            placeholder="Enter Username"
          />
        </div>
      </form>
    </div>
  );
};

export default page;
