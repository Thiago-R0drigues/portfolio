function Projects() {

  const projects = [
    {
      title: "Sistema Biblioteca",
      description:
        "Aplicação desenvolvida em Python para gerenciamento de livros. Projeto criado para praticar lógica de programação, organização de código, funções e manipulação de arquivos.",

      technologies: [
        "Python",
        "POO",
        "Arquivos"
      ],

      github:
        "https://github.com/Thiago-R0drigues/biblioteca"
    },


    {
      title: "Estoque API",
      description:
        "API REST em desenvolvimento utilizando FastAPI. Projeto para praticar criação de endpoints, integração com banco de dados e estruturação de backend.",

      technologies: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "Postgresql"
      ],

      github:
        "https://github.com/Thiago-R0drigues/api_estoque"
    },


    {
      title: "Projetos Frontend",
      description:
        "Projetos desenvolvidos utilizando React e Tailwind CSS, criando interfaces responsivas e componentes reutilizáveis.",

      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript"
      ],

      github:
        "https://github.com/Thiago-R0drigues?tab=repositories"
    }

  ];


  return (
    <section
      id="projetos"
      className="py-24 px-6"
    >

      <div className="max-w-5xl mx-auto">


        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Projetos
        </h2>


        <p className="text-slate-400 mb-12 max-w-2xl text-justify">
          Alguns projetos que desenvolvi durante meus estudos,
          aplicando na prática conceitos de programação e
          desenvolvimento web.
        </p>



        <div className="grid md:grid-cols-2 gap-6">


          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
            >


              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>


              <p className="text-slate-400 leading-7 mb-6 text-justify">
                {project.description}
              </p>



              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="bg-slate-800 text-sm px-3 py-1 rounded-full text-slate-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>



              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Ver código →
              </a>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default Projects;