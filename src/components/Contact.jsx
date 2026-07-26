import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";


function Contact() {

  return (
    <section
      id="contato"
      className="py-24 px-6"
    >

      <div className="max-w-5xl mx-auto text-center">


        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vamos conversar?
        </h2>


        <p className="text-slate-400 max-w-2xl mx-auto leading-8 text-justify">

          Estou aberto a oportunidades, projetos e conexões
          na área de desenvolvimento. Se quiser conversar
          sobre tecnologia ou conhecer meus projetos,
          fique à vontade para entrar em contato.

        </p>



        <div className="flex justify-center gap-8 mt-10">


          <a
            href="https://github.com/Thiago-R0drigues?tab=repositories"
            target="_blank"
            className="text-3xl text-slate-400 hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>



          <a
            href="https://www.linkedin.com/in/thiagorodrigues361/"
            target="_blank"
            className="text-3xl text-slate-400 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>



          <a
            className="text-3xl text-slate-400 hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>


        </div>


      </div>

    </section>
  );
}


export default Contact;