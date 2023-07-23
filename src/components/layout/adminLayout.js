import React from "react";
import { Outlet } from "react-router-dom";

import { useParams } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminSidebar from "../sidebar/adminSidebar";
import Navbar from "../navbar/navbar";

import { useDispatch } from "react-redux";

const AdminLayout = () => {
  const dispatch = useDispatch();
  useParams();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  // Handling Login Logics

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/student/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/authority/me",
        {},
        { withCredentials: true }
      );
      const { status, name } = data;
      dispatch({ type: "admin/add", payload: data });
      status
        ? toast(`Welcome back ! ${name}`, {
          position: "top-right",
        })
        : removeCookie("token") && navigate("/admin/login");

    };
    verifyCookie();

  }, [cookies, navigate, removeCookie,dispatch]);

  const Logout = () => {
    removeCookie("token");
    navigate("/admin/login");
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <AdminSidebar />
          <div className="main">
            <Navbar logout={Logout} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
