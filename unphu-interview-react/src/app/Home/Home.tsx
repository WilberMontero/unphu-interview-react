import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Common/SideBar";
import Navar from "../Common/NavBar";

const Home = () => {
  return (
    <>
      <div className="row">
      <Navar/>
        <div className="col-md-2 bg-dark sidebar">
          <SideBar/>
        </div>
        <div className="col-md-10" style={{marginLeft:'16.5%',marginTop:'50px'}}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
