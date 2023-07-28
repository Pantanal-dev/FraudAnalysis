import React from "react";

const Body = () => {
  return (
    <div className="bg-white mt-20 min-h-screen">
      <div className="flex justify-center items-center pt-12">
        <img
          src="/images/Logo_com_nome_verde.png"
          alt="Logo"
          className="h-48"
        />
      </div>
      <div className="relative mt-5 mb-12">
        <div className="w-full h-90 bg-white rounded-md overflow-hidden">
          <img
            src="/images/backgroud_pantanal.png"
            alt="Imagem de Fundo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-y-[50%] inset-x-1/4 -translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-white rounded-full flex items-center justify-center">
          <img
            src="/images/logo_pantanal.png"
            alt="Imagem Pequena"
            className="w-56"
          />
        </div>
        <div className="absolute right-[12%] left-[50%] top-[50%] transform -translate-y-1/2 bg-white rounded-3xl p-12 w-126">
          <h1 className="text-2xl font-bold mb-4 text-[#2FBEAB]">
            Sobre a iniciativa:
          </h1>
          <p className="text-lg font-bold text-justify">
            {" "}
            {/* Add "text-justify" class */}
            Fraud Analysis é um sistema de análise de fraudes cartão de crédito.
            Além de classificar uma transação, a API também apresentar insights
            que justifiquem seu processo decisório. <br></br> <br /> Sua ideia
            surgiu de {/* Add <br> for line break */}
            um desafio proposto no projeto Pantanal.dev, um projeto que busca
            valorizar desenvolvedores talentosos da região do Pantanal.{" "}
            <a
              href="https://pantanal.dev/"
              className="text-[#5796d5] font-bold underline"
            >
              Saiba mais
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
