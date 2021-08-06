import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './Banner.css';


const Banner: FC = () => {
    return (
        <header className="components-banner ">
        <div className="header-box-bg"></div>
        <div className="header-box layout-container">
          <img
            src={require("@assets/images/logo3.png")}
            className="logo"
            alt=""
          />
          <nav className="nav-list">
            <NavLink
              className="nav-item"
              exact
              activeClassName="nav-item_act"
              to="/"
            >
              🏠&nbsp;&nbsp;一灯大家庭
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/ques"
            >
              💎&nbsp;&nbsp;面试题库
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/interview"
            >
              ✍🏻&nbsp;&nbsp;面试经验
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/pratice"
            >
              📚&nbsp;&nbsp;藏经阁
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/job"
            >
              🎯 &nbsp;&nbsp;内推资源
            </NavLink>
          </nav>
          {/* 右边的登录状态判断 */}
        </div>
      </header>
    );
}

export default React.memo(Banner);
