"use client";

import { Fragment } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  );
};

export default Base;
