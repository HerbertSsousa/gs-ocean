import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      <header className="py-4 bg-gray-100">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="CleanOcean" width={100} height={40} />
            <h1 className="ml-4 text-xl font-bold text-gray-800">CleanOcean</h1>
          </div>
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Métodos
                </a>
              </li>
            
              <li>
                <a href="#" className="hover:text-blue-500">
                Cadastro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Institucional
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative py-24 bg-blue-50">
  <div className="container mx-auto px-4 flex items-center justify-between">
    <div className="w-1/2">
      <h2 className="text-5xl font-bold text-gray-800">
        CleanOcean Solutions
        <br />
        CleanSea Project
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        CleanOcean Solutions é uma startup dedicada a desenvolver soluções inovadoras para reduzir a poluição marinha e preservar a saúde dos oceanos.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        Nosso primeiro projeto, o "CleanSea", é um sistema de coleta de resíduos marinhos baseado em tecnologia avançada, que visa mitigar os impactos negativos da poluição nos ecossistemas marinhos.
      </p>
    </div>
    <div className="w-1/2">
      <img src="/logo.png"  alt="CleanOcean Logo" width={600} height={400} className="rounded-lg" />
    </div>
  </div>
</section>

<section className="py-24">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Objetivos do Projeto</h2>
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Desenvolver e Implementar</h3>
        <p className="text-white mt-4">
          Desenvolver e implementar o CleanSea como uma solução eficaz para reduzir a poluição marinha.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Coleta de Resíduos</h3>
        <p className="text-white mt-4">
          Coletar resíduos plásticos e outros detritos dos oceanos de forma eficiente e sustentável.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Preservação da Vida Marinha</h3>
        <p className="text-white mt-4">
          Contribuir para a preservação da vida marinha e dos ecossistemas costeiros.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-24">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Estudos de Mercado</h2>
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">The Ocean Cleanup</h3>
        <img src="/the-ocean-cleanup.svg" alt="The Ocean Cleanup" width={100} height={100} className="mx-auto my-4" />
        <p className="text-white">
          Uma organização que desenvolve sistemas passivos de limpeza de plástico nos oceanos, utilizando barreiras flutuantes.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Seabin</h3>
        <img src="/seabin.svg" alt="Seabin" width={100} height={100} className="mx-auto my-4" />
        <p className="text-white">
          Um dispositivo de coleta de lixo flutuante que pode ser instalado em portos e marinas para capturar detritos flutuantes.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Manta Ray</h3>
        <img src="/manta-ray.svg" alt="Manta Ray" width={100} height={100} className="mx-auto my-4" />
        <p className="text-white">
          Um barco autônomo que utiliza tecnologia de inteligência artificial para identificar e coletar resíduos marinhos.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-24 bg-blue-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Vantagens Competitivas</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Eficiência</h3>
        <p className="text-white mt-4">
          Utiliza tecnologia avançada de sensoriamento para identificar e coletar resíduos marinhos de forma mais precisa e eficiente.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Sustentabilidade</h3>
        <p className="text-white mt-4">
          Opera de forma autônoma e sustentável, minimizando o impacto ambiental durante o processo de limpeza.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Adaptabilidade</h3>
        <p className="text-white mt-4">
          Pode ser implantado em diferentes áreas costeiras e oceânicas, se ajustando às necessidades específicas de cada região.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Custo-efetividade</h3>
        <p className="text-white mt-4">
          Oferece uma solução acessível e de baixo custo em comparação com outras tecnologias de limpeza de oceanos.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-white">Impacto Social</h3>
        <p className="text-white mt-4">
          Além de mitigar a poluição marinha, o CleanSea promove a conscientização e engajamento da comunidade local na preservação dos oceanos.
        </p>
      </div>
    </div>
  </div>
</section>


<footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-bold text-gray-800 mb-4">Equipe</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-gray-800">Herbert Santos de Sousa</h3>
              <p className="text-gray-600">RM: 553227</p>
              <p className="text-gray-600">Turma: 1TDSPA-2023</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-gray-800">Isabelle Cristina Santos Queiroz</h3>
              <p className="text-gray-600">RM: 554073</p>
              <p className="text-gray-600">Turma: 1TDSPA-2023</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-gray-800">João Pedro Pereira</h3>
              <p className="text-gray-600">RM: 553698</p>
              <p className="text-gray-600">Turma: </p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}