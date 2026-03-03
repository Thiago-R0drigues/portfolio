import { useState } from 'react'
import './index.css'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  const [hidden, setHidden] = useState(false);



  return (
    <>
      <div className='h-screen font-mono flex justify-between p-3 px-10 bg-[#09182E] pt-5'>
        <div>
          <h1 className='text-green-600 text-xl hover:border-green-400 hover:text-green-400 transition duration-50 ease-in-out hover:cursor-pointer'><a href="https://www.linkedin.com/in/thiagorodrigues361/" target="_blank">Thiago Oliveira</a></h1>
          <Nav/>
        </div>
        <About/>
      </div>

    </>
  )
}

export default App
