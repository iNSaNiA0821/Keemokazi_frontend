import React from "react";
// @import styles
import { LoaderContainer, LoaderContent } from "./loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderContent>
        <div>{"L"}</div>
        <div>{"o"}</div>
        <div>{"a"}</div>
        <div>{"d"}</div>
        <div>{"i"}</div>
        <div>{"n"}</div>
        <div>{"g"}</div>
        <div>{"."}</div>
        <div>{"."}</div>
        <div>{"."}</div>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default Loader;
