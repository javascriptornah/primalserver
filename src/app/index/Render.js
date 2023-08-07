"use client";
import { useState } from "react";
import styled from "styled-components";
import FoodSelector from "./FoodSelector";
import Search from "./Search";

const Cont = styled.div``;

const Render = ({ foods }) => {
  return (
    <Cont>
      {/* <FoodSelector /> */} <Search foods={foods} />
    </Cont>
  );
};

export default Render;
