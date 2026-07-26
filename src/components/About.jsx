function About() {
  return (
    <section 
      id="sobre"
      className="py-24 px-6"
    >

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Sobre mim
        </h2>


        <div className="text-slate-400 text-lg leading-8 space-y-5">

          <p>
            Sou formando em Análise e Desenvolvimento de Sistemas
            e estou construindo minha carreira como desenvolvedor.
          </p>


          <p>
            Minha trajetória começou com desenvolvimento frontend,
            utilizando tecnologias como React e Tailwind CSS,
            onde desenvolvi meus primeiros projetos e tive contato
            com a construção de interfaces web.
          </p>


          <p>
            Atualmente estou direcionando meus estudos para Backend,
            utilizando Python, FastAPI, SQLAlchemy e bancos de dados
            relacionais para desenvolver APIs e entender melhor
            como as aplicações funcionam por trás das interfaces.
          </p>


          <p>
            Meu objetivo é conquistar minha primeira oportunidade
            como Desenvolvedor Backend Python, continuando a evoluir
            através de projetos práticos e novos desafios.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-5 mt-12">


          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-2">
              Formação
            </h3>

            <p className="text-slate-400">
              Análise e Desenvolvimento de Sistemas
            </p>

          </div>



          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-2">
              Foco atual
            </h3>

            <p className="text-slate-400">
              Backend com Python e APIs REST
            </p>

          </div>



          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-2">
              Objetivo
            </h3>

            <p className="text-slate-400">
              Primeira oportunidade como dev backend
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}

export default About;