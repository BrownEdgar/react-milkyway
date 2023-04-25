import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe
          dicta laboriosam minima fugit aliquam omnis vero autem debitis
          eligendi!
        </p>
      </footer>
    </>
  );
}
