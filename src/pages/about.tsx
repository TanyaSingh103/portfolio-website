import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-left justify-center bg-gray-100 dark:bg-gray-900 p-60 pt-40 text-black dark:text-white">
      <h1 className="text-5xl font-bold pb-6">About Me</h1>
      <p className="mt-4 text-xl pb-7 text-justify">
        Hi, I'm Tanya Singh, a software developer with a passion for building user-friendly applications.
        With a background in machine learning and full-stack development, I specialize in crafting solutions
        that solve complex problems and deliver value to users.
      </p> 

      <p className="mt-4 text-xl pb-7 text-justify">
        Currently, I'm a pre-final year student at Jaypee Institute of Information Technology, Noida. I'm 
        pursuing a B.Tech in Computer Science Engineering. I'm also a Cohort 5 scholar at the Women Engineers 
        Program offered by TalentSprint and supported by Google.
      </p>

      <p className="mt-4 text-xl pb-7 text-justify">
        I'm passionate about creating impactful projects and contributing to open-source communities. When I'm not coding,
        you'll find me exploring crafty hobbies like crochet or digital art.
      </p>          
    </div>
  );
}
