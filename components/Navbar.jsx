// import Styles from "../styles/style.module.css";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {menuLinks} from "../src/Links"

const Navbar = () => {
  const router = useRouter();
	const [ isMobile, setIsMobile ] = useState(false);
  return (
    <header className="shadow-md sticky top-0 z-50 bg-[#E0E5EC]">
      <nav className="flex justify-between items-center h-16 container mx-auto px-3 sm:px-0">
        <Image src="/vercel.svg" alt="site brand logo" width={ 75 } height={ 75 } />
        <ul
					className={

							isMobile ? 'absolute block top-16 bg-[#E0E5EC] w-full left-0 shadow-lg z-50' :
							'sm:flex items-center justify-between w-auto hidden'
					}
					onClick={() => setIsMobile(false)}
				>
					{menuLinks.map((data, key) => {
						return (
							<li
								className={

										router.pathname ==
										data.url ? 'px-4 py-3 text-emerald-500 capitalize font-semibold outer-morphic-btn-after' :
										'px-4 py-3 text-red-500 capitalize font-semibold'
								}
								key={key}
							>
								<Link href={data.url}>
									<a className="py-4">{data.title}</a>
								</Link>
							</li>
						);
					})}
        </ul>
        <button
					className="sm:hidden block p-2 "
					arial-aria-label="hamberger-menu"
					onClick={() => setIsMobile(!isMobile)}
				>
          {
            isMobile ? 
            <div className="p-2 outer-morphic-btn-after">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={ 2 }
                d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>:<div className="p-2 outer-morphic-btn-before">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={ 2 }
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
              
          }
				</button>
      </nav>
    </header>
  );
};

export default Navbar;
