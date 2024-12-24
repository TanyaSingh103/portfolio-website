import React from 'react';
import PROJECTS from '../data/projects';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

export default function WorkPage() {
  const AspectRatio = AspectRatioPrimitive.Root;

  return (
    <div className="min-h-screen flex flex-col items-left justify-center bg-gray-100 dark:bg-gray-900 p-60 pt-40 text-gray-900 dark:text-white">
      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-gray-900 dark:border-emerald-400 shadow-lg rounded-lg border-t-4 border-l-4 border-b-8 border-r-8 bg-emerald-400 dark:bg-gray-900 p-6"
              key={id}
            >
              <AspectRatio
                className="border-gray-900 dark:border-emerald-400 shadow-lg rounded-lg border-2 bg-white dark:bg-gray-800"
                ratio={71 / 26}
              >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="mt-5">
                <h2 className="text-4xl font-bold mb-4">
                  {project.name}
                </h2>

                <p className="text-xl mt-2 font-semibold">{project.description}</p>
                <p className="text-xl mt-2 font-semibold">TechStack: {project.techStack}</p>

              </div>
              <div className="mt-8 rounded-lg cursor-pointer px-4 py-2 text-center font-semibold bg-gray-900 dark:bg-emerald-400">
                  <a
                    className="text-white dark:text-gray-900"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    GitHub
                  </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
