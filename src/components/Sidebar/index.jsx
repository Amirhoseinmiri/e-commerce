import {
  FolderKanban,
  House,
  ShoppingCart,
  TypeIcon,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", url: "/", icon: <House /> },
    { text: "Users", url: "/users", icon: <Users /> },
    { text: "Product Type", url: "/product-type", icon: <FolderKanban /> },
    { text: "Products", url: "/products", icon: <ShoppingCart /> },
  ];
  return (
    <div className="sidebar-main">
      <div className="p-4 m-4">
        <h1 className="text-3xl font-semibold">eStore</h1>
      </div>
      <ul className="mx-auto text-lg flex flex-col">
        {menuItems.map((item) => (
          <li key={item.url}>
            <Link href={item.url}>
              <div className="sidebar-list-item">
                <span className="mx-2">{item.icon}</span>
                {item.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sidebar-usercard">
        <div className="flex items-center justify-between">
          <Image
            height={50}
            width={50}
            alt="users avatar"
            src="/user.svg"
            className="border-gray-600 rounded-full border-2"
          />
          <div className="">John Doe</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
