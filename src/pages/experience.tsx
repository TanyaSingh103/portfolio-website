import React from 'react';
import EXPERIENCE from '../data/experience'; // Update the path and filename as needed

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col items-left justify-center bg-gray-100 dark:bg-gray-900 p-60 pt-40 text-gray-900 dark:text-white">
      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((exp, id) => {
          return (
            <div
              className="border-gray-900 dark:border-emerald-400 shadow-lg rounded-lg border-t-4 border-l-4 border-b-8 border-r-8 bg-emerald-400 dark:bg-gray-900 p-6"
              key={id}
            >

              {/* No AspectRatio or <img> here */}

              <div>
                <h2 className="text-4xl font-bold mb-4">
                  {exp.title} {/* Job Title or Role */}
                </h2>
                <h3 className="text-2xl mb-2 font-semibold">
                  {exp.company} {/* Company Name */}
                </h3>
                <p className="text-xl mt-2 font-semibold">
                  {exp.duration} {/* Duration String: e.g., Jan 2021 - Present */}
                </p>
                <p className="text-xl mt-2">{exp.description}</p>
                <p className="text-xl mt-2 font-semibold">
                  TechStack: {exp.techStack} {/* Optional: tools/tech used */}
                </p>
              </div>
              {/* You can include a details button or an external link if relevant */}
              {exp.link &&
                <div className="mt-8 rounded-lg cursor-pointer px-4 py-2 text-center font-semibold bg-gray-900 dark:bg-emerald-400">
                  <a
                    className="text-white dark:text-gray-900"
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
