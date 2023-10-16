import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <div className="">
      <div className=" h-screen justify-center  bg-gradient-to-b  from-black  to-gray-900 text-center   text-2xl text-white ">
        <div className=" p-[25px]  text-3xl font-medium text-white">
          I am Irfan Sahman
        </div>
        <div>
          <TypeAnimation
            sequence={[
              'Front-end Web Developer...',
              1000,
              'Fitness coach...',
              1000,
              'Nutritionist...',
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: '25px',
              display: 'inline-block',
              cursor: 'transparent',
            }}
            repeat={Infinity}
          />
        </div>

        <div>
          <img
            src="src/assets/shilja.jpeg"
            className="mx-auto w-60 rounded py-4 "
          />
        </div>
        <p className="text-x flex justify-center  px-6 text-center font-bold text-white ">
          Freelancer specializing in programming and fitness coaching
        </p>

        <div className=" mt-8 ">
          <Link
            to="projects"
            className="group relative  inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md p-0.5 font-bold "
          >
            <span className="absolute h-full w-full bg-gradient-to-br from-[#ffffff83] via-[#c60404] to-[#00000000] group-hover:from-[white] group-hover:via-[red] group-hover:to-[black]"></span>
            <span className="duration-400 relative  rounded-md bg-gray-900 px-6 py-3 transition-all ease-out group-hover:bg-opacity-0">
              <span className=" text-white">Portfolio</span>
            </span>
          </Link>
        </div>
        <ul
          className="mt-8 flex cursor-pointer items-center justify-center
            "
        >
          <li className="px-4 duration-200 hover:scale-105">
            <a
              href="https://instagram.com/sandzak_genetics"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={40} />
            </a>
          </li>
          <li className="px-4 duration-200 hover:scale-105">
            <a
              href="https://github.com/sephirosu"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={40} />
            </a>
          </li>
          <li className="px-4 duration-200 hover:scale-105">
            <a
              href="https://ba.linkedin.com/in/irfan-sahman-5211b624b"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
          </li>
          <li className="px-4 duration-200 hover:scale-105">
            <a href="mailto:irfansahman88@gmail.com ">
              <HiOutlineMail size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
