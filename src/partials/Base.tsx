"use client";

import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Base;
