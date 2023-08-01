import React from "react";
import Dashside from "./Dashside";
import Adminheader from "../../Compoments/Adminheader";
import AdminMenu from "../../Compoments/AdminMenu";

function Adminpanel() {
  return (
    <div>
      <Adminheader />
      <div class="grid grid-cols-6 ">
        <div className="col-span-1  ">
        <Dashside />
        </div>
        <div className="col-span-5">
          <AdminMenu />
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
