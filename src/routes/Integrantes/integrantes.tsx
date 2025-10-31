
import FotoSamyr from '../../img/01.png'
import FotoBosak from '../../img/02.png'
import FotoRyan from '../../img/03.png'
import FotoFurlanetto from '../../img/04.png'
import FotoFerrete from '../../img/05.png'
import FotoDonella from '../../img/06.png'
import FotoNikolas from '../../img/07.png'
import FotoFukuda from '../../img/08.png'
import FotoEnzo from '../../img/09.png'
import FotoPedroHen from '../../img/10.png'
import FotoSola from '../../img/11.png'
import FotoCaetano from '../../img/12.png'
import FotoClayton from '../../img/13.png'
import FotoHenriqueMartins from '../../img/14.png'
import FotoRaul from '../../img/155.png'
import FotoBueno from '../../img/16.png'
import FotoMacedo from '../../img/17.png'
import FotoLucas from '../../img/15.png'
import FotoKauan from '../../img/18.png'
import FotoPedroP from '../../img/20.png'
import FotoPedroS from '../../img/21.png'
import FotoNicolly from '../../img/23.png'
import FotoCleo from '../../img/22.png'
import FotoHenriqueC from '../../img/24.png'

export default function Integrantes() {
  const integrantes = [
    {
      nome: "Gustavo-Bosak",
      rm: "566315",
      github: "https://github.com/Gustavo-Bosak",
      linkedin: "https://www.linkedin.com/in/gustavo-bosak-santos/",
      foto: FotoBosak,
    },
    {
      nome: "Ryan Vetoriano",
      rm: "565667",
      github: "https://github.com/ryanvetoriano",
      linkedin: "https://www.linkedin.com/in/felipe-furlanetto-a64671364/",
      foto: FotoRyan,
    },
    {
      nome: "Felipe Furlanetto",
      rm: "562766",
      github: "https://github.com/Felipe-Furlanetto0504",
      linkedin: "felipe-furlanetto-a64671364",
      foto: FotoFurlanetto,
    },
    {
      nome: "Felipe Ferrete",
      rm: "562999",
      github: "https://github.com/FelipeFerrete",
      linkedin: "https://www.linkedin.com/in/felipe-ferrete-ab63a318a/",
      foto: FotoFerrete,
    },
    {
      nome: "Pietro Donella",
      rm: "561722",
      github: "https://github.com/PietroDonella",
      linkedin: "",
      foto: FotoDonella ,
    },
    {
      nome: "Nikolas Brisola",
      rm: "564371",
      github: "https://github.com/NikolasBrisola",
      linkedin: "",
      foto: FotoNikolas ,
    },
    {
      nome: "Lucas Fukuda",
      rm: "562152",
      github: "https://github.com/LucasFukuda2408",
      linkedin: "",
      foto: FotoFukuda,
    },
    {
      nome: "Enzo Vaz",
      rm: "561702",
      github: "https://github.com/EnzoVazz",
      linkedin: "",
      foto: FotoEnzo,
    },
    {
      nome: "Pedro Henique",
      rm: "563405",
      github: "https://github.com/pedrohenrique116",
      linkedin: "",
      foto: FotoPedroHen,
    },
    {
      nome: "Guilherme Sola Garcia",
      rm: "563674",
      github: "https://github.com/guilhermesolagarcia",
      linkedin: "",
      foto: FotoSola,
    },
    {
      nome: "João Caetano",
      rm: "562074",
      github: "https://github.com/joaocaetano1310",
      linkedin: "",
      foto: FotoCaetano,
    },
    {
      nome: "Clayton Santos",
      rm: "562285",
      github: "https://github.com/Claytonasantos",
      linkedin: "",
      foto: FotoClayton,
    },
    {
      nome: "Henrique Martins",
      rm: "563620",
      github: "https://github.com/hrqmartins",
      linkedin: "",
      foto: FotoHenriqueMartins,
    },
    {
      nome: "Raul Rezende",
      rm: "566666",
      github: "https://github.com/Raul-Rezende",
      linkedin: "",
      foto: FotoRaul,
    },
    {
      nome: "João Victor Bueno",
      rm: "564115",
      github: "https://github.com/Buenozw",
      linkedin: "",
      foto: FotoBueno,
    },
    {
      nome: "Guilherme Macedo",
      rm: "562396",
      github: "https://github.com/GuilhermeMacedoMartins",
      linkedin: "",
      foto: FotoMacedo,
    },
    {
      nome: "Lucas Rafael",
      rm: "565194",
      github: "https://github.com/LucasRafa22",
      linkedin: "",
      foto: FotoLucas,
    },
    {
      nome: "Kauan Lima",
      rm: "565403",
      github: "https://github.com/KauanVLima",
      linkedin: "",
      foto: FotoKauan,
    },
    {
      nome: "Samyr Couto",
      rm: "565562",
      github: "https://github.com/samyrcouto",
      linkedin: "https://www.linkedin.com/in/samyr-couto-12932834b/",
      foto: FotoSamyr,
    },
    {
      nome: "Pedro Pequini",
      rm: "561842",
      github: "https://github.com/PedroSPequini",
      linkedin: "",
      foto: FotoPedroP,
    },
    {
      nome: "Pedro Sakai",
      rm: "565956",
      github: "https://github.com/sakaipedro",
      linkedin: "",
      foto: FotoPedroS,
    },
    {
      nome: "Cleo Sales",
      rm: "566666",
      github: "https://github.com/cleosales",
      linkedin: "",
      foto: FotoCleo,
    },
    {
      nome: "Nicolly Martins",
      rm: "563221",
      github: "https://github.com/Martinicolly",
      linkedin: "",
      foto: FotoNicolly,
    },
    {
      nome: "Henrique Cesar",
      rm: "563088",
      github: "https://github.com/HenriqueTCesar",
      linkedin: "",
      foto: FotoHenriqueC,
    },
   
    

  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-6 mt-16 mb-16">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Integrantes</h1>

      <div
        className="grid gap-6 w-full max-w-6xl justify-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {integrantes.map((integrante, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200 mx-auto"
          >
            <img
              src={integrante.foto}
              alt={integrante.nome}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 break-words">
              {integrante.nome}
            </h2>
            <p className="text-gray-500 mb-4 truncate">RM: {integrante.rm}</p>

            <div className="flex justify-center gap-3 flex-wrap">
              {integrante.github ? (
                <a
                  href={integrante.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  Ver GitHub
                </a>
              ) : (
                <span className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">
                  Sem GitHub
                </span>
              )}

              {integrante.linkedin ? (
                <a
                  href={integrante.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Ver LinkedIn
                </a>
              ) : (
                <span className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg">
                  Sem LinkedIn
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

