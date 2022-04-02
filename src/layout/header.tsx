import React from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../links';
import { title } from '../config';
const style = {
  borderTop: '1px solid #e5e5e5',
  borderBottom: '1px solid #e5e5e5',
  boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .05)'
};

export default () => (
  <header>
    <div
      style={style}
      className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"
    >
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link className="nav-link" to={'/'}>
          {title}
        </Link>
      </h5>
      <ul className="nav justify-content-end">
        {menus.map((menu, i) => (
          <li className="nav-item" key={i}>
            <Link className="nav-link" key={i} to={menu.link}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
);
