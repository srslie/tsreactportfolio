import React, { FC } from "react";
import { emptyProps } from "../App";

const Personal: FC<emptyProps> = (props) => {
  return (
    <section className="personal"> 
      <h1>Personal: Alice Ruppert</h1>
        <article>
          <h2>Mission</h2>
        </article>
        <article>
          <h2>Lifestyle</h2>
        </article>
    </section>
  );
};

export default Personal;