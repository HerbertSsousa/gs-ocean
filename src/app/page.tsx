import Image from 'next/image';
import styles from "../pages/Produtos/Produto.module.css"
export default function Home() {
  return (
    <div className="bg-blue-50">
      <header className="py-4 bg-gray-100">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="CleanOcean" width={100} height={40} />
            <h1 className="ml-4 text-xl font-bold text-gray-800">CleanOcean</h1>
          </div>
          <nav>
            <ul className="flex space-x-6 text-black-600">
              <li>
                
                <a href="/Produtos" className="hover:text-blue-500">
                <button>Produtos</button>  
                </a>
              </li>
              <li>
                <a href="/trabalhos" className="hover:text-blue-500">
                Trabalhos
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500">
                  Doar
                </a>
              </li>
            
              <li>
                <a href="/Cadastro" className="hover:text-blue-500">
                Cadastro
                </a>
              </li>
              <li>
                <a href="/Login" className="hover:text-blue-500">
                Login
                </a>
              </li>
              <li>
                <a href="/Institucional" className="hover:text-blue-500">
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
    <h2 className="text-3xl font-bold text-black-800 text-center mb-8">Objetivos do Projeto</h2>
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-black">Desenvolver e Implementar</h3>
        <p className="text-black mt-4">
          Desenvolver e implementar o CleanSea como uma solução eficaz para reduzir a poluição marinha.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-black">Coleta de Resíduos</h3>
        <p className="text-black mt-4">
          Coletar resíduos plásticos e outros detritos dos oceanos de forma eficiente e sustentável.
        </p>
      </div>
      <div className="bg-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-black">Preservação da Vida Marinha</h3>
        <p className="text-black mt-4">
          Contribuir para a preservação da vida marinha e dos ecossistemas costeiros.
        </p>
      </div>
    </div>
  </div>
</section>




<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Produtos mais utilizados</h2>

<div className={styles.container}>
      
      <div className={styles.card}>
        <img src='./bfi.png' alt="Barreira Flutuante Inteligente" className={styles.image} />
        <h2 className={styles.title}>Barreira Flutuante Inteligente (BFI)</h2>
        <p className={styles.description}>
          Uma barreira flutuante equipada com sensores e inteligência artificial para detectar e coletar resíduos marinhos automaticamente. Além de recolher os resíduos, a BFI é capaz de separar e reciclar os materiais coletados, reduzindo ainda mais a poluição.
        </p>
      </div>
      <div className={styles.card}>
        <img src='./Prod2.png' alt="Sistema de Filtragem Marinha Biomimético" className={styles.image} />
        <h2 className={styles.title}>Sistema de Filtragem Marinha Biomimético</h2>
        <p className={styles.description}>
          Inspirado na natureza, esse sistema utiliza princípios biomiméticos para filtrar água do mar, removendo eficientemente microplásticos e outras partículas poluentes. Seu design inovador imita estruturas naturais, como corais e esponjas, para uma filtragem altamente eficaz.
        </p>
      </div>
      <div className={styles.card}>
        <img src='./Prod3.png' alt="Rede de Pesca Sustentável com RFID" className={styles.image} />
        <h2 className={styles.title}>Rede de Pesca Sustentável com RFID</h2>
        <p className={styles.description}>
          Uma rede de pesca sustentável equipada com tecnologia RFID (Identificação por Radiofrequência) para rastrear a atividade pesqueira e evitar a captura acidental de espécies protegidas e a perda de equipamentos. Além disso, a rede é fabricada com materiais biodegradáveis para minimizar seu impacto ambiental.
        </p>
      </div>
      <div className={styles.card}>
        <img src='./Prod4.png' alt="Biópsias Robóticas para Limpeza de Recifes" className={styles.image} />
        <h2 className={styles.title}>Biópsias Robóticas para Limpeza de Recifes</h2>
        <p className={styles.description}>
          Pequenos robôs autônomos projetados para realizar biópsias em recifes de corais, removendo algas invasoras e detritos que prejudicam o ecossistema marinho. Esses robôs utilizam algoritmos avançados para identificar e remover seletivamente os organismos indesejados, promovendo a saúde dos recifes.
        </p>
      </div>
      
    </div>

    <section className="py-24 bg-blue-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vantagens Competitivas</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-lg text-center shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Eficiência</h3>
        <p className="text-gray-700">
          Utiliza tecnologia avançada de sensoriamento para identificar e coletar resíduos marinhos de forma mais precisa e eficiente.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg text-center shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustentabilidade</h3>
        <p className="text-gray-700">
          Opera de forma autônoma e sustentável, minimizando o impacto ambiental durante o processo de limpeza.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg text-center shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Adaptabilidade</h3>
        <p className="text-gray-700">
          Pode ser implantado em diferentes áreas costeiras e oceânicas, se ajustando às necessidades específicas de cada região.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg text-center shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Custo-efetividade</h3>
        <p className="text-gray-700">
          Oferece uma solução acessível e de baixo custo em comparação com outras tecnologias de limpeza de oceanos.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg text-center shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Impacto Social</h3>
        <p className="text-gray-700">
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
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-gray-800">Herbert Santos de Sousa</h3>
              <p className="text-gray-600">RM: 553227</p>
              <p className="text-gray-600">Turma: 1TDSPA</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-gray-800">Isabelle Cristina Santos Queiroz</h3>
              <p className="text-gray-600">RM: 554073</p>
              <p className="text-gray-600">Turma: 1TDSPA</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-lg font-bold text-gray-800">João Pedro Pereira</h3>
              <p className="text-gray-600">RM: 553698</p>
              <p className="text-gray-600">Turma: 1TDSPT</p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}