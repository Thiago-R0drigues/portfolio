import './index.css'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
      <div className='font-mono flex flex-col bg-[#09182E] absolute h-full w-full'>
  
        <div className="flex justify-center pt-8"><Nav/></div>  
        <div className='flex justify-center'><About/></div>

      </div>
  )
}

export default App
