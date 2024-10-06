// Layout.js
import React from "react";
import { Helmet } from "react-helmet";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const Layout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Ems` : "Employee Management System"}</title>
      </Helmet>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
