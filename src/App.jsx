import { useState } from 'react'
import './index.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import colorGeneratorImg from './assets/color-generator.png';
import portfolioImg from './assets/portfolio.png';

//NAVIGATION COMPONENT
const Nav = ({ About, Projects, Contact, activeSection}) => {

  return (
    <div>
      <ul className="flex flex-row gap-30 text-2xl font-mono max-[480px]:text-sm max-[480px]:gap-10">
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
    <div className='font-mono flex flex-col gap-8 pt-30 '>
      <p className='text-3xl font-black text-gray-300 hover:cursor-default max-[480px]:text-center '>Hi, I'm</p>
      <p className='text-5xl font-black text-gray-500 hover:cursor-default max-[480px]:text-center max-[480px]:text-3xl'><a href="https://www.linkedin.com/in/thiagorodrigues361/" target="_blank">Thiago Oliveira</a></p>
      <p className='text-2xl text-gray-400  w-250 text-justify font-mono hover:cursor-default max-[480px]:w-90 max-[480px]:text-center max-[480px]:tracking-tighter max-[480px]:p-8'>Front-end Developer focused on building <span className='underline'>modern</span> and <span className='underline'>responsive</span> <span className="underline">user</span> <span className="underline">interfaces</span>. I enjoy turning <span className='font-black'>ideas</span> into <span className='font-black'>real-world applications</span> using <span className='text-blue-400 hover:text-blue-500 duration-400 ease-in-out'>React</span> and <span className='text-pink-400 hover:text-pink-500 duration-400 ease-in-out'>Tailwind</span>.</p>
      <button className="border-2 border-green-600 text-green-600 w-60 p-5 mt-5 hover:border-green-400 hover:text-green-400 transition hover:cursor-pointer max-[480px]:ml-15" onClick={onClick}>Projects</button>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='mt-60'>
      <ul className='flex gap-30 items-baseline max-[480px]:flex-col max-[480px]:gap-40'>
        <li>
          <Card 
            title={'Portfolio'} 
            src={portfolioImg} 
            alt={'Portfolio'}   
            gitHub={'https://github.com/Thiago-R0drigues/portfolio'}
            url={'https://portfolio-iota-ruby-35.vercel.app/'}/>
        </li>

        <li>
          <Card 
            title={'Basic Color Generator'} 
            src={colorGeneratorImg} 
            alt={'COLOR GENERATOR'}   
            gitHub={'https://github.com/Thiago-R0drigues/color-generator'}
            url={'https://color-generator000.vercel.app/'}/>
        </li>
      </ul>
    </div>
  )
}

const Card = ({title, src, alt, gitHub, url}) => {

    return (

      
      <div className='flex flex-col items-center hover:scale-120 transition max-[480px]:-mt-25'>
          <a href={url} target='_blank'><img src={src} alt={alt} className='w-60 cursor-pointer'/></a>
          <p className='text-gray-300 font-bold text-xl'>{title}</p>
          <div className='flex gap-5 pt-2'> 
            <a href={gitHub} target='_blank'><FaGithub size={40} className='text-gray-300 hover:text-gray-400'/></a>
            <a href={url} target='_blank'><TbWorldWww size={40} className='text-gray-300 hover:text-gray-400'/></a>
          </div>
      </div>          

    )
  }
//CONTACT COMPONENT
const Contact = () => {

  return (
    <div className='text-white border-none pt-70'>
      <ul className='flex flex-row gap-30 max-[480px]:flex-col max-[480px]:-mt-25'>
        <li><a href="https://github.com/Thiago-R0drigues" target='_blank'><FaGithub size={100} className='cursor-pointer text-gray-300 hover:text-gray-100 transition'/></a></li>
        <li><a href="https://www.linkedin.com/in/thiagorodrigues361/" target='_blank'><FaLinkedinIn size={100} className='cursor-pointer text-gray-300 hover:text-gray-100 transition'/></a></li>
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
