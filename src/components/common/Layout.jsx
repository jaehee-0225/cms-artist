import React, { Fragment } from "react";
import '../../assets/css/common.css';

import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";

import LanguageList from "../../pages/LanguageList.jsx";
// import LangTable from "../../pages/LangTable.jsx";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {/* <div>{children}</div> */}
      <div className="contents_wrap">
        <LanguageList />
        {/* <LangTable /> */}
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
