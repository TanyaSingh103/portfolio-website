import React from 'react';
import { Navbar } from '../components/navbar';
import { Iconbar } from '../components/iconbar';
import Lottie from 'react-lottie-player';
import mascotAnimation from '../animation/robo.json'; 

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-left justify-center bg-gray-100 dark:bg-gray-900 p-60 pt-40 text-black dark:text-white relative">
      <p className="mt-4 text-xl pb-4">Hi, my name is</p>
      <h1 className="text-6xl font-bold pb-6">Tanya Singh</h1>
      <p className="mt-4 text-2xl">I'm a software developer</p>
      <p className="mt-4 text-xl pb-10">
        also involved with data engineering and a ton of crafty hobbies
      </p>

      <Navbar />
      <Iconbar />

      {/* Animated Mascot */}
      <div className="absolute right-40 bottom-40 w-80 h-200">
        <Lottie
          loop
          animationData={mascotAnimation}
          play
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
