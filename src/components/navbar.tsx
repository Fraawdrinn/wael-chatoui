import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav 
    className="flex justify-between border-b border-white min-h-12 lg:min-h-12">
      <h1 className="relative left-8 top-1 text-3xl font-bold">
        Wael
      </h1>
      <ul className="">
        <li>
          <Link href="/contact-me">
            Contact&nbsp;Me
          </Link>
        </li>
        <li>
          <Link href="/about-me">
            About&nbsp;Me
          </Link>
        </li>
        <li>
          <Link href="/my-projects">
            My&nbsp;Projects
          </Link>
        </li>
        <li className="">
          <Link href="/" className="">
            Home
          </Link>
        </li>
      </ul>
      <div className="lg:hidden absolute right-0 py-[-50%] translate-y-[40%]">
        <input type="checkbox" role="button" aria-label="Display the menu" className="menu" />
      </div>
    </nav>
  );
}

export default Navbar;
