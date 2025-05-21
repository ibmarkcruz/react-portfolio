import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projectsData";

export default function ProjectDetails() {
  const { projectId } = useParams();

  // Find project by slug instead of index/key:
  const project = projectsData.find((p) => p.slug === projectId);

  if (!project) {
    return (
      <div className="p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-blue-400 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="p-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold my-8">{project.title}</h1>
      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Left column - Image */}
        {project.image && (
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img
              src={project.image}
              alt={`${project.title} logo`}
              className="object-contain max-h-64"
            />
          </div>
        )}

        {/* Right column - Info */}
        <div className="md:w-2/3 text-left">
            <h3 className="text-2xl font-semibold mb-2">Project Overview</h3>
             <p className="mb-6">{project.projectOverview}</p>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

            {project.tools && (
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Tools & Technologies:</h3>
                <p>{project.tools}</p>
            </div>
            )}

          {project.outcome && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Outcome:</h3>
              <p>{project.outcome}</p>
            </div>
          )}

          <div className="mt-8">
            <Link to="/projects" className="text-blue-400 hover:underline">
              &larr; Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
