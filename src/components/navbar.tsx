import Link from 'next/link';

export function Navbar(){
    return(
      <div className="fixed left-0 top-5 z-50 w-full">
      <nav className="border border-box border-black border-t-4 border-l-4 border-b-8 border-r-8 rounded-lg bg-emerald-400 mx-auto flex w-max gap-5 p-3 px-5 text-2xl font-semibold">
      <button type="button" className="border-transparent hover:border-black border-4 rounded-lg text-center p-2 px-3">Home</button>
      <button type="button" className="border-transparent hover:border-black border-4 rounded-lg text-center p-2 px-3">About</button>
      <button type="button" className="border-transparent hover:border-black border-4 rounded-lg text-center p-2 px-3">Experience</button>
      <button type="button" className="border-transparent hover:border-black border-4 rounded-lg text-center p-2 px-3">Projects</button>
      </nav>
    </div>
    )
}