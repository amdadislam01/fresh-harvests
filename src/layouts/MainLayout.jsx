import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
