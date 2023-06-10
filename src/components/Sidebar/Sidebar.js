import React from "react";

function Sidebar({ children }){
  return (
    <div className="Sidebar">
      {props.children}
    </div>
  )
}

export default Sidebar;