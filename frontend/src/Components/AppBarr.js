import React from "react";
import { PageLabel } from "./PageLable.style";

export default function AppBarr({ className, props }) {
  return (
    <div className={className}>
      <PageLabel> My Dashboard</PageLabel>
      <div className="utility">
        <button onClick={props.onClick}>Add Employee</button>
      </div>
    </div>
  );
}
