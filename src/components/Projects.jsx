import React from 'react'

const projects = [{title:'Portfolio',description:'My portfolio'}, ]


const Card = () => {
    return (
        <>
            <ul><li>{projects[0].title + projects[0].description}</li></ul>
        </>
    )
}


const Projects = () => {
  return (
            <>
            <div className="main">
                <h1 className='text-3xl font-mono flex justify-center pt-5'>Projects</h1>
                <Card/>
            </div>
            </>
    
  )
}

export default Projects