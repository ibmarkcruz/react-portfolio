import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ logo, title, description, detailLink }) {
  return (
    <div className="project-card border rounded p-4 bg-gray-800 text-white cursor-pointer hover:shadow-lg transition">
      <Link to={detailLink}>
        <img
          src={logo}
          alt={`${title} logo`}
          className="mb-4 w-full h-48 object-contain"
        />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}
