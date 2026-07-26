function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950 border-b border-slate-800">

      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold hover:pointer">
          <a href="#hero">Thiago Rodrigues</a>
        </h1>


        <div className="hidden md:flex gap-6 text-slate-300">

          <a href="#sobre" className="hover:text-blue-400">
            Sobre
          </a>

          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>

          <a href="#projetos" className="hover:text-blue-400">
            Projetos
          </a>

          <a href="#contato" className="hover:text-blue-400">
            Contato
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;