import React from 'react';
import { Navbar } from '../components/navbar';
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">I am trying to be a web developer specializing in React and Next.js.</p>
      
    
          
      <Navbar />
               
    </div>
  )
}
