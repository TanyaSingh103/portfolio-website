import Link from 'next/link';
import { MailIcon } from '@heroicons/react/outline';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';

export function Iconbar(){

    return(
        <div className="divide-y divide-slate-100">
            <nav>
            <ul className="flex space-x-20">
                <button>
                    <a href="mailto:tanya.103.singh@gmail.com">
                    <MailIcon className="h-10 w-10 dark:text-emerald-400"></MailIcon>
                    </a>
                </button>
                <button>
                    <a 
                    href="https://github.com/TanyaSingh103"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub className="h-8 w-10 dark:text-emerald-400"></FaGithub>
                    </a>
                </button>
                <button>
                    <a 
                    href="https://www.linkedin.com/in/tanya-singh-0952b0271/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin className="h-8 w-10 dark:text-emerald-400"></FaLinkedin>
                    </a>
                </button>
            </ul>
            </nav>
        </div>
    )
}