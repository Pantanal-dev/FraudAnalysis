// pages/insights.js

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Insights = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Div para o gráfico 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* Coloque aqui o componente do gráfico 1 */}
            <p>Gráfico 1</p>
          </div>

          {/* Div para o gráfico 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* Coloque aqui o componente do gráfico 2 */}
            <p>Gráfico 2</p>
          </div>

          {/* Você pode adicionar mais divs para mais gráficos */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
