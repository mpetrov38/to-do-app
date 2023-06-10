import React from "react";
import logo from "../../logo.png"

function User(){
  return (
    <div className="User">
      <div className="logo"><img src={logo} width="60" border="1px solid black"></img></div>
      <div className="info">
        <a href="#">Logout</a>
      </div>
    </div>
  )
}

export default User;