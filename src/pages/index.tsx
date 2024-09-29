import React from 'react';
import { Navbar } from '../components/navbar';
import { Iconbar } from '../components/iconbar';
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-left justify-center bg-gray-100 p-60 pt-40">
      <p className="mt-4 text-xl pb-4">Hi, my name is</p>
      <h1 className="text-7xl font-bold pb-6">Tanya Singh</h1>
      <p className="mt-4 text-3xl">I'm a software developer </p>
      <p className="mt-4 text-2xl pb-20">also involved with machine learning and a ton of crafty hobbies</p>   
      <Navbar />
      <Iconbar />       
    </div>
  )
}
