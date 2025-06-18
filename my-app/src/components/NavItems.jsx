import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ icon: Icon, label, to = "#", active = false }) => {
  return (
    <Link to={to}>
      <div
        className={`flex items-center gap-3 px-3 py-2 ${
          active ? "rounded-full bg-[#f0f2f5]" : ""
        }`}
      >
        <div className="text-[#111518]">{Icon && <Icon />}</div>
        <p className="text-[#111518] text-sm font-medium leading-normal">
          {label}
        </p>
      </div>
    </Link>
  );
};

export default NavItem;
