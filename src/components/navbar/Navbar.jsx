import React from "react";
import TopNavbar from "./top/TopNavbar";
import MiddleNavbar from "./middle/MiddleNavbar";
import BottomNavbar from "./bottom/BottomNavbar";

function Navbar({ cartQuantity }) {
  return (
    <div>
      <TopNavbar />
      <MiddleNavbar cartQuantity={cartQuantity} />
      <BottomNavbar />
    </div>
  );
}

export default Navbar;
