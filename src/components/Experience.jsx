import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';

import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-white',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-white',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-white',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-white',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-white',
    },

    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-white',
    },
  ];

  return (
    <div
      name="experience"
      className="h-screen w-full bg-gradient-to-b from-gray-900 to-black "
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  p-6 text-white md:text-center md:text-lg">
        <div>
          <p className="inline  p-2 text-4xl font-bold">Experience</p>
          <p className="md:text-md py-6">
            Here are the tech tools I`m familiar with
          </p>
        </div>

        <div className="grid w-full  grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
            >
              <img src={src} alt="tech" className="mx-auto w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
