import React from "react";

const SectionDivider: React.FC = () => (
  <div aria-hidden="true" className="border-t-2 border-[#ffffffd5] w-1/5 mx-auto my-20" />
);

const Introduction: React.FC = () => {
  return (
    <section className="mt-8 md:mt-30 md:text-center" aria-label="Introduction">
      <SectionDivider />
      {/* Use a semantic heading appropriate to the document structure */}
      <h2 className="text-2xl md:text-4xl font-bold">
        <span className="text-[var(--light-color)]">WHO</span> I AM?
      </h2>

      {/* A single paragraph with responsive spacing; avoid manual <br/> when possible */}
      <p className="capitalize text-lg md:text-xl mt-4 md:w-[80%] mx-auto leading-relaxed">
        A frontend developer focused on turning design systems into delightful,
        performant web experiences. I’ve built scalable UIs with{" "}
        <span className="text-[var(--light-color)] font-semibold">
          React, Redux, and TypeScript
        </span>
        , implemented accessible components, and collaborated closely with designers,
        product managers, and backend engineers to deliver end-to-end features.
        My strengths include{" "}
        <span className="text-[var(--light-color)] font-semibold">
          crafting responsive layouts, writing clean, maintainable code, and
          measuring performance with budgets and metrics
        </span>.
        I’m always curious about new technologies, from modern CSS techniques to
        component-driven development and progressive enhancement.
      </p>
    </section>
  );
};

export default Introduction;