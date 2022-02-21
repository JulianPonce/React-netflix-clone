import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [isScroll, setScroll] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://storage.googleapis.com/www-paredro-com/uploads/2019/01/Netflix.jpg"
            alt=""
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />
          <img
            alt=""
            src="data:image/png;base64,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"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
