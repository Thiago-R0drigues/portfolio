import {
  FaPython,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";


function Skills() {

  const skills = [
    {
      categoria: "Backend",
      tecnologias: [
        {
          nome: "Python",
          icon: <FaPython />
        },
        {
          nome: "FastAPI",
          icon: <SiFastapi />
        },
        {
          nome: "SQLAlchemy",
          icon: "🗄️"
        },
        {
          nome: "PostgreSQL",
          icon: <SiPostgresql />
        }
      ]
    },

    {
      categoria: "Frontend",
      tecnologias: [
        {
          nome: "React",
          icon: <FaReact />
        },
        {
          nome: "Tailwind CSS",
          icon: <SiTailwindcss />
        }
      ]
    },


    {
      categoria: "Ferramentas",
      tecnologias: [
        {
          nome: "Git",
          icon: <FaGitAlt />
        },
        {
          nome: "GitHub",
          icon: "🐙"
        },
        {
          nome: "VS Code",
          icon: "💻"
        }
      ]
    }
  ];


  return (
    <section
      id="skills"
      className="py-24 px-6"
    >

      <div className="max-w-5xl mx-auto">


        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tecnologias
        </h2>


        <p className="text-slate-400 mb-12 max-w-2xl">
          Tecnologias que utilizo nos meus estudos e projetos
          pessoais. Estou sempre buscando evoluir e aprender
          novas ferramentas.
        </p>



        <div className="grid md:grid-cols-3 gap-6">


          {skills.map((grupo) => (

            <div
              key={grupo.categoria}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >


              <h3 className="text-xl font-semibold mb-6">
                {grupo.categoria}
              </h3>



              <div className="space-y-4">


                {grupo.tecnologias.map((tech) => (

                  <div
                    key={tech.nome}
                    className="flex items-center gap-3 text-slate-300"
                  >

                    <span className="text-blue-400 text-xl">
                      {tech.icon}
                    </span>


                    <span>
                      {tech.nome}
                    </span>


                  </div>

                ))}


              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}


export default Skills;