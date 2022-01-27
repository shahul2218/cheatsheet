import Styles from "../styles/style.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 bg-[#E0E5EC]">
      <nav className="flex justify-between items-center h-16 md:w-9/12 sm:w-10/12 w-11/12 mx-auto">
        <Image
          src="/vercel.svg"
          alt="brand logi"
          width={75}
          height={75}
          blurDataURL="data:..."
          automatically
          provided
          placeholder="blur"
        />
        <section className="w-24 flex justify-between">
          <button className="p-2 outer-morphic-btn-before">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <button className="p-2 outer-morphic-btn-after">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
