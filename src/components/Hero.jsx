function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6">

      <div className="max-w-5xl mx-auto w-full">

        <p className="text-blue-400 mb-4">
          Olá, eu sou
        </p>

        <h1 className="text-5xl md:text-6xl font-bold">
          Thiago Rodrigues
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
          Desenvolvedor Backend Python em formação
        </h2>


        <p className="text-slate-400 max-w-2xl mt-6 text-lg leading-8 text-justify">

          Sou formado em Análise e Desenvolvimento de Sistemas
          e atualmente estou focado em desenvolvimento backend
          utilizando Python, FastAPI e bancos de dados relacionais.

        </p>


        <div className="flex gap-4 mt-8">

          <a
            href="#projetos"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Ver projetos
          </a>


          <a
            href="https://github.com/Thiago-R0drigues"
            target="_blank"
            className="border border-slate-700 px-6 py-3 rounded-lg hover:border-blue-500 transition"
          >
            GitHub
          </a>

        </div>


      </div>

    </section>
  );
}

export default Hero;