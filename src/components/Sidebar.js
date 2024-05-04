// Sidebar.js
import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        Меню
      </button>
      <SidebarMenu isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
