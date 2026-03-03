import React from 'react'

const About = () => {
  return (
    <div className='font-mono flex flex-col gap-8 h-screen pt-50 '>
      <p className='text-3xl font-black text-gray-300'>Hi, I'm</p>
      <p className='text-5xl font-black text-gray-500'>Thiago Oliveira</p>
      <p className='text-2xl text-gray-400  w-250 text-justify font-mono'>Front-end Developer focused on building <span className='underline'>modern and responsive user interfaces.</span> I enjoy turning <span className='font-black'>ideas</span> into <span className='font-black'>real-world applications</span> using <span className='text-blue-400'>React</span> and <span className='text-pink-400'>Tailwind</span>.</p>
      <button className="border-2 border-green-600 text-green-600 w-60 p-5 mt-5 hover:border-green-400 hover:text-green-400 transition duration-50 ease-in-out hover:cursor-pointer">Projects</button>
    </div>
  )
}

export default About