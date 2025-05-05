import React from 'react';

// const techStack = [
//   { name: 'Next.js', icon: '/icons/nextjs.svg' },
//   { name: 'React', icon: '/icons/react.svg' },
//   { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
//   { name: 'TypeScript', icon: '/icons/typescript.svg' },
//   { name: 'Framer Motion', icon: '/icons/framer-motion.svg' },
//   { name: 'Sanity cms', icon: '/icons/sanity.svg' },
//   { name: 'Auth.js', icon: '/icons/authjs.svg' },
//   { name: 'markdown', icon: '/icons/markdown.svg' },
//   { name: 'GROQ', icon: '/icons/groq.svg' },
//   { name: 'Sentry', icon: '/icons/sentry.svg' },
// ];

const Project1 = () => {
  return (
    <section className=" text-white px-6 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-white mb-4">
        <span className="text-pink-500">—</span> Next Ventures
      </h2>
      <p className="text-gray-300 mb-6">
        A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It’s built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.
      </p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start space-x-3">
          <span className="text-pink-500 text-lg">✦</span>
          <p className="text-white">
            <span className="font-semibold">Leveraged Partial Prerendering and After</span> for faster loading.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-pink-500 text-lg">✦</span>
          <p className="text-white">
            Simplified idea submission with a clean, intuitive design.
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-pink-500 text-lg">✦</span>
          <p className="text-white">
            Enhanced browsing with seamless performance optimization.
          </p>
        </li>
      </ul>

      {/* <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center bg-gray-800 text-white px-3 py-1.5 rounded-full space-x-2"
          >
            <Image src={tech.icon} alt={tech.name} width={20} height={20} />
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Project1;