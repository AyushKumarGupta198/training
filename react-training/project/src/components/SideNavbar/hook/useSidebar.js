import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return { isOpen, toggleSidebar };
};

export default useSidebar;
