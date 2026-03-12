import './index.css'


//NAVIGATION COMPONENT
const Nav = () => {

    return (
        <div>
            <ul className="flex flex-row gap-30 text-xl font-mono">
                <li className="cursor-pointer border-b-2 border-b-gray-400" id="#"><span className="text-green-600">01.</span> <span className="text-gray-300">About</span></li>
                <li className="cursor-pointer" id="#"><span className="text-green-600">02.</span> <span className="text-gray-300">Projects</span></li>
                <li className="cursor-pointer" id="#"><span className="text-green-600">03.</span> <span className="text-gray-300">Contact</span></li>
                
            </ul>
        </div>
    )
}

//ABOUT COMPONENT
const About = () => {

  return (
    <div className='font-mono flex flex-col gap-8 pt-50 '>
      <p className='text-3xl font-black text-gray-300 hover:cursor-default max-[480px]:text-center '>Hi, I'm</p>
      <p className='text-5xl font-black text-gray-500 hover:cursor-default max-[480px]:text-center max-[480px]:text-3xl'><a href="https://www.linkedin.com/in/thiagorodrigues361/" target="_blank">Thiago Oliveira</a></p>
      <p className='text-2xl text-gray-400  w-250 text-justify font-mono hover:cursor-default max-[480px]:w-90 max-[480px]:text-center max-[480px]:tracking-tighter max-[480px]:p-8'>Front-end Developer focused on building <span className='underline'>modern and responsive user interfaces.</span> I enjoy turning <span className='font-black'>ideas</span> into <span className='font-black'>real-world applications</span> using <span className='text-blue-400 hover:text-blue-500 duration-400 ease-in-out'>React</span> and <span className='text-pink-400 hover:text-pink-500 duration-400 ease-in-out'>Tailwind</span>.</p>
      <button className="border-2 border-green-600 text-green-600 w-60 p-5 mt-5 hover:border-green-400 hover:text-green-400 transition duration-50 ease-in-out hover:cursor-pointer">Projects</button>
    </div>
  )
}

//CONTACT COMPONENT
const Contact = () => {
  return (
    <div>
      <p>linkedin logo</p>
      <p>github logo</p>
      <p>gmail logo</p>
    </div>
  )
}


function App() {

  return (
      <div className='font-mono flex flex-col bg-[#09182E] fixed h-full w-full'>
        <div className="flex justify-center pt-8"><Nav/></div>  
        <div className='flex justify-center'><About/></div>

      </div>
  )
}

export default App
