import React from 'react';
export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return <div className={`section-heading ${light ? "heading-light" : ""}`}>
    <span className="eyebrow"><i />{eyebrow}<i /></span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}