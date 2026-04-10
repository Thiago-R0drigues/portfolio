import { useState } from 'react'
import './index.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

//NAVIGATION COMPONENT
const Nav = ({ About, Projects, Contact, activeSection}) => {

  return (
    <div>
      <ul className="flex flex-row gap-30 text-xl font-mono">
        <li 
        className={activeSection === 'about' ? 
          'cursor-pointer border-b-2 border-b-gray-400' : 'cursor-pointer'} 
        onClick={()=> {
          About();
        }}><span className="text-green-600">01.</span> <span className="text-gray-300">About</span>
        </li>

        <li 
        className={activeSection === 'projects' ? 
          'cursor-pointer border-b-2 border-b-gray-400' : 'cursor-pointer'}
        onClick={()=> {
          Projects();
          
          }}><span className="text-green-600">02.</span> <span className="text-gray-300">Projects</span>
        </li>

        <li 
        className={activeSection === 'contact' ?
          'cursor-pointer border-b-2 border-b-gray-400' : 'cursor-pointer'}
        onClick={()=> {
          Contact();
        }}><span className="text-green-600">03.</span> <span className="text-gray-300">Contact</span>
        </li>
      </ul>
    </div>
  )
}

//ABOUT COMPONENT
const About = ({onClick}) => {

  return (
    <div className='font-mono flex flex-col gap-8 pt-50 '>
      <p className='text-3xl font-black text-gray-300 hover:cursor-default max-[480px]:text-center '>Hi, I'm</p>
      <p className='text-5xl font-black text-gray-500 hover:cursor-default max-[480px]:text-center max-[480px]:text-3xl'><a href="https://www.linkedin.com/in/thiagorodrigues361/" target="_blank">Thiago Oliveira</a></p>
      <p className='text-2xl text-gray-400  w-250 text-justify font-mono hover:cursor-default max-[480px]:w-90 max-[480px]:text-center max-[480px]:tracking-tighter max-[480px]:p-8'>Front-end Developer focused on building <span className='underline'>modern</span> and <span className='underline'>responsive</span> <span className="underline">user</span> <span className="underline">interfaces</span>. I enjoy turning <span className='font-black'>ideas</span> into <span className='font-black'>real-world applications</span> using <span className='text-blue-400 hover:text-blue-500 duration-400 ease-in-out'>React</span> and <span className='text-pink-400 hover:text-pink-500 duration-400 ease-in-out'>Tailwind</span>.</p>
      <button className="border-2 border-green-600 text-green-600 w-60 p-5 mt-5 hover:border-green-400 hover:text-green-400 transition hover:cursor-pointer" onClick={onClick}>Projects</button>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <h1 className='text-white'>PROJECTS</h1>
    </div>
  )
}

const cardList = [
  {title: 'Card1', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/960px-GitHub_Invertocat_Logo.svg.png', alt: 'Github image'}, 
  {title: 'Card2', src: 'https://images.icon-icons.com/3042/PNG/512/linkedin_logo_icon_189254.png', alt: 'Linkedin image'}, 
  {title: 'Card2', src: '', alt: 'Gmail image'},
];

const Card = ({title, src, alt}) => {

    return (
      <div className='px-10 py-3'>
          <img src={src} alt={alt} className='w-30 cursor-pointer'/>
          {/* <p>{title}</p> */}
      </div>          

    )
  }
//CONTACT COMPONENT
const Contact = () => {

  return (
    <div className='text-white border-none pt-70'>
      <ul className='flex flex-row gap-30'>
        <li><a href="https://github.com/Thiago-R0drigues" target='_blank'><FaGithub size={100} className='cursor-pointer text-gray-300 hover:text-gray-200 transition'/></a></li>
        <li><a href="https://www.linkedin.com/in/thiagorodrigues361/" target='_blank'><FaLinkedinIn size={100} className='cursor-pointer text-gray-300 hover:text-gray-200 transition'/></a></li>
      </ul>
    </div>
  )
}



function App() {

  const [activeSection, setActiveSection] = useState('about');

  function activateAbout() {
    setActiveSection('about');
  }
  function activateProjects() {
    setActiveSection('projects');
  }
  function activateContact() {
    setActiveSection('contact');
  }

  return (
    <div className='font-mono flex flex-col bg-[#09182E] fixed h-full w-full'>
      <div className="flex justify-center pt-8">
        <Nav About={activateAbout} Projects={activateProjects} Contact={activateContact} activeSection={activeSection} />
      </div>

      <div className='flex justify-center'>
        {activeSection === 'about' && <About onClick={activateProjects}/>}
        {activeSection === 'projects' && <Projects/>}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>)}

      export default App;
