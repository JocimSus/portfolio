import React from "react";

interface MDBlockProps {
  className?: string;
  children: React.ReactNode;
}

interface HeadingProps {
  children: React.ReactNode;
}

function getId(children : React.ReactNode) {
  return React.Children.toArray(children)
    .map(c => (typeof c === "string" || typeof c === "number" ? c : ""))
    .join("")
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function MDBlock({ className, children }: MDBlockProps) {
  return (
    <section className={className}>
      <div>{children}</div>
    </section>
  );
}

export function H1({ children }: HeadingProps) {
  const id = getId(children)
  return (
    <h1 
      id={id} 
      className="font-bold text-xl mb-3"
    >
      <a href={`#${id}`}># {children}</a>
    </h1>
  );
}

export function H2({ children }: HeadingProps) {
  const id = getId(children)
  return (
    <h1 
      id={id} 
      className="font-semibold text-lg mb-3"
    >
      <a href={`#${id}`}># {children}</a>
    </h1>
  );
}
