"use client";

import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Base;
