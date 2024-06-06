import React from 'react';
import styles from './trabalhos.module.css';
import Image from 'next/image';

const Trabalhos: React.FC = () => {
  const trabalhosVoluntarios = [
    {
      title: "Limpeza de Praias",
      description: "Organizamos eventos regulares de limpeza de praias, envolvendo voluntários para coletar resíduos plásticos e outros detritos das praias.",
    },
    {
        title: "Educação Ambiental",
        description: "Realizamos palestras e workshops em escolas e comunidades locais para aumentar a conscientização sobre a poluição marinha e promover práticas sustentáveis.",
      },
      {
        title: "Monitoramento de Ecossistemas Costeiros",
        description: "Conduzimos estudos para monitorar a saúde dos ecossistemas costeiros, identificar áreas de alto risco e implementar medidas de conservação.",
      },
      {
        title: "Reciclagem de Resíduos Plásticos",
        description: "Colaboramos com programas de reciclagem locais para coletar e reciclar resíduos plásticos, transformando-os em novos produtos e reduzindo a poluição.",
      },
      {
        title: "Campanhas de Conscientização",
        description: "Promovemos campanhas de mídia social e eventos comunitários para aumentar a conscientização sobre os impactos da poluição marinha e incentivar a mudança de comportamento.",
      },
      {
        title: "Proteção de Espécies Marinhas",
        description: "Conduzimos programas de proteção de espécies marinhas ameaçadas, como tartarugas e golfinhos, monitorando habitats e promovendo medidas de conservação.",
      },
      {
        title: "Restauração de Ecossistemas Marinhos",
        description: "Participamos de projetos de restauração de ecossistemas marinhos, como o replantio de corais e a criação de áreas protegidas para promover a biodiversidade.",
      },
      {
        title: "Advocacia Ambiental",
        description: "Trabalhamos com legisladores e autoridades locais para propor políticas e regulamentações mais rígidas para reduzir a poluição marinha e proteger os ecossistemas costeiros.",
      },
  ];

  return (
    <div className={styles.container}>
      <Image src='/logo.png' width={200} height={200} alt="Logo CleanOcean" className={styles.logo} />
      <h1>Trabalhos Voluntários da CleanOcean</h1>
      <div className={styles.trabalhosGrid}>
        {trabalhosVoluntarios.map((trabalho, index) => (
          <div key={index} className={styles.trabalho}>
            <h2>{trabalho.title}</h2>
            <p>{trabalho.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trabalhos;
