import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Transacao = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-8">
        <img
          src="/images/em_breve.jpg" // Substitua "sua-imagem.jpg" pelo nome do arquivo da sua imagem
          alt="Imagem transação"
          className="w-full h-full object-contain"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Transacao;
