import React from "react";
import Sidebar from "@/components/Sidebar";
export const metadata = {
  title: "eStore layout",
  description: "The eStore Admin Section",
};

const WithLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 p-6 my-6 mr-8 border border-green-300 rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default WithLayout;
