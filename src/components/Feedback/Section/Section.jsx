import React, { Component } from "react";
import {Wrapper}  from "./Section.styled"



const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {children}
    </Wrapper>
  );
};
export default Section;