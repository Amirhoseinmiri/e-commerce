import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", url: "/" },
    { text: "Users", url: "/users" },
    { text: "Product Type", url: "/product-type" },
    { text: "Products", url: "/products" },
  ];
  return (
    <div className="top-0 left-0 h-screen w-64 flex flex-col shadow-xl rounded-e-lg text-gray-800">
      <div className="">
        <h1>eStore</h1>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.url}>
            <Link href={item.url}>
              <div className="">{item.text}</div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="">
        <div className="">
          <Image height={50} width={50} alt="users avatar" src="/user.svg" />
          <div className="">John Doe</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
