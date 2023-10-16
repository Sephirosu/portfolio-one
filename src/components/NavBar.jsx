import { useState } from 'react';
import artx from '../assets/artx.jpg';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'projects' },
    { id: 3, link: 'experience' },
    { id: 4, link: 'about' },
    { id: 5, link: 'contact' },
  ];

  return (
    <>
      <div className=" flex h-20 w-full items-center justify-between bg-black px-4 text-white ">
        <h1 className="ml-2 flex    text-3xl">
          <img src={artx} alt="artx" width={70} />
        </h1>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="    flex  cursor-pointer px-4 font-medium capitalize duration-200 hover:scale-105"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="z-20 cursor-pointer md:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className=" absolute left-0 top-0 z-10   flex h-screen w-full flex-col items-center justify-center  bg-gradient-to-b from-black to-gray-800 text-white">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="  flex  cursor-pointer  py-4 text-4xl font-medium capitalize duration-200 hover:scale-105"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default NavBar;
