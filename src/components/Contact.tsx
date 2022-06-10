import React, { FC } from "react";
import { emptyProps } from "../App";

const Contact: FC<emptyProps> = () => {
  return (
    <section className="contact">
      <h1>Contact</h1>
        <p>Email</p>
        <p>LinkedIn</p>
        <p>Github</p>
    </section>
  );
};

export default Contact;