import Link from 'next/link';
import ThemeSwitcher from '../components/toggle';

export function Navbar(){


    return(
      <div className="fixed left-0 top-5 z-50 w-full dark:text-white">
      <nav className="border border-box border-black border-t-4 border-l-4 border-b-8 border-r-8 rounded-lg bg-emerald-400 mx-auto flex w-max gap-5 p-3 px-5 text-2xl font-semibold dark:border-emerald-400 dark:bg-gray-900">
      <button 
      type="button" 
      className="border-transparent hover:border-black border-4 rounded-lg text-center p-2 px-3 transition-all duration-300 ease-in-out hover:dark:border-emerald-400"
      >
      <Link href='/'>
        Home
      </Link>
      </button>
      <button 
      type="button" 
      className="border-transparent hover:border-black border-4 rounded-lg text-center p-2 px-3 transition-all duration-300 ease-in-out hover:dark:border-emerald-400">
      <Link href='/about'>
        About
      </Link>
      </button>
      <button 
      type="button" 
      className="border-transparent hover:border-black border-4 rounded-lg text-center p-2 px-3 transition-all duration-300 ease-in-out hover:dark:border-emerald-400">
      <Link href='/work'>
        Work
      </Link>
      </button>
      <button 
      type="button" 
      className="border-transparent  text-center p-2 px-3 transition-all duration-300 ease-in-out">
        <ThemeSwitcher />
      </button>
      </nav>
    </div>
    )
}