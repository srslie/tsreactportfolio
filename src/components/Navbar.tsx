import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { emptyProps } from "../App";

const Navbar: FC<emptyProps> = (props) => {
  const nav = useNavigate();
  return (
    <section className="navbar">
      <h1>Alice Ruppert</h1>
      <button onClick={() => nav('/personal')}>Personal</button>
      <button onClick={() => nav('/professional')}>Professional</button>
      <button onClick={() => nav('/contact')}>Contact</button>
    </section>
  );
};

export default Navbar;