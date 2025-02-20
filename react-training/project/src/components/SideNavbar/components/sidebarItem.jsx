import React from "react";

const SidebarItem = ({ item }) => (
    
  <li>
    <a href={item.path}><img src={item.icon} className="bg-white rounded-full"/></a>
  </li>
);

export default SidebarItem;