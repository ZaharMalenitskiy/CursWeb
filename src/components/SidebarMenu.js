// SidebarMenu.js
import React from 'react';

const SidebarMenu = ({ isOpen }) => {
  return (
    <ul className="sidebar-menu">
      {isOpen ? (
        <>
          <li>Главная</li>
          <li>Поиск</li>
          <li>Избранное</li>
          <li>Плейлисты</li>
          <li>Исполнители</li>
        </>
      ) : (
        <>
          <li>Скрытое содержимое</li>
          <li>Другой пункт</li>
          <li>Еще один пункт</li>
        </>
      )}
    </ul>
  );
};

export default SidebarMenu;
