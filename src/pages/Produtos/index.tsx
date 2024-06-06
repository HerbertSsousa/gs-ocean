import React from 'react';
import styles from './Produto.module.css'
import Image from 'next/image';


const Produtos = () => {
  return (
    
    <div className={styles.container}>
      
      <div className={styles.card}>
        <Image src='/bfi.png' width={500} height={500} alt="Barreira Flutuante Inteligente" className={styles.image} />
        <h2 className={styles.title}>Barreira Flutuante Inteligente (BFI)</h2>
        <p className={styles.description}>
          Uma barreira flutuante equipada com sensores e inteligência artificial para detectar e coletar resíduos marinhos automaticamente. Além de recolher os resíduos, a BFI é capaz de separar e reciclar os materiais coletados, reduzindo ainda mais a poluição.
        </p>
      </div>
      <div className={styles.card}>
        <Image src='/Prod2.png' width={500} height={500} alt="Sistema de Filtragem Marinha Biomimético" className={styles.image} />
        <h2 className={styles.title}>Sistema de Filtragem Marinha Biomimético</h2>
        <p className={styles.description}>
          Inspirado na natureza, esse sistema utiliza princípios biomiméticos para filtrar água do mar, removendo eficientemente microplásticos e outras partículas poluentes. Seu design inovador imita estruturas naturais, como corais e esponjas, para uma filtragem altamente eficaz.
        </p>
      </div>
      <div className={styles.card}>
        <Image src='/Prod3.png' width={500} height={500} alt="Rede de Pesca Sustentável com RFID" className={styles.image} />
        <h2 className={styles.title}>Rede de Pesca Sustentável com RFID</h2>
        <p className={styles.description}>
          Uma rede de pesca sustentável equipada com tecnologia RFID (Identificação por Radiofrequência) para rastrear a atividade pesqueira e evitar a captura acidental de espécies protegidas e a perda de equipamentos. Além disso, a rede é fabricada com materiais biodegradáveis para minimizar seu impacto ambiental.
        </p>
      </div>
      <div className={styles.card}>
        <Image src='/Prod4.png' width={500} height={500} alt="Biópsias Robóticas para Limpeza de Recifes" className={styles.image} />
        <h2 className={styles.title}>Biópsias Robóticas para Limpeza de Recifes</h2>
        <p className={styles.description}>
          Pequenos robôs autônomos projetados para realizar biópsias em recifes de corais, removendo algas invasoras e detritos que prejudicam o ecossistema marinho. Esses robôs utilizam algoritmos avançados para identificar e remover seletivamente os organismos indesejados, promovendo a saúde dos recifes.
        </p>
      </div>
      <div className={styles.card}>
        <Image src='/Prod5.png' width={500} height={500} alt="Sistema de Digestão Anaeróbica de Resíduos Marinhos" className={styles.image} />
        <h2 className={styles.title}>Sistema de Digestão Anaeróbica de Resíduos Marinhos</h2>
        <p className={styles.description}>
          Um sistema inovador que utiliza processos de digestão anaeróbica para decompor resíduos orgânicos coletados nos oceanos, como algas e restos de comida. Esse processo gera biogás que pode ser aproveitado como fonte de energia renovável, tornando-o uma solução ambientalmente amigável e economicamente viável.
        </p>
      </div>
    </div>
  );
};

export default Produtos;
