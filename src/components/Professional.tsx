import React, { FC } from 'react'
import { emptyProps } from "../App";

const Professional: FC<emptyProps> = (props) => {
  return (
    <section className="professional">
      <h1>Professional Experience</h1>
        <article>
          <h2>Tech Stack</h2>
        </article>
        <article>
          <h2>Skills</h2>
        </article>
        <article>
          <h2>Job History</h2>
        </article>
        <article>
          <h2>Education</h2>
        </article>
    </section>
  );
};

export default Professional;