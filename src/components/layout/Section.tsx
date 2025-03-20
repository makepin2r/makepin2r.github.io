import React from "react";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ children, title, subtitle }) => {
  return (
    <section>
      {title && <h3 className="prose-heading-18-bold">{title}</h3>}
      {subtitle && <p className="prose-body-14-regular">{subtitle}</p>}
      {children}
    </section>
  );
};

export default Section;
