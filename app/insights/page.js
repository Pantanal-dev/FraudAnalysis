import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Insights = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-10 mt-20">
        <p className="text-xl font-bold flex justify-center items-center">
          Influência por Atributo{" "}
        </p>

        <div className="bg-white rounded-lg shadow-md p-4 mb-5  flex justify-center items-center">
          <img src="/images/insights/shap_bar_plot.png" alt="Gráfico 5" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="/images/insights/feature_importance_mdi.png"
              alt="Gráfico 1"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="/images/insights/feature_importance_full_model.png"
              alt="Gráfico 2"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-center items-center">
              Enxame de Abelha - Classe 1{" "}
            </p>
            <img src="/images/insights/shap_beeswarm.png" alt="Gráfico 3" />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-center items-center">
              Enxame de Abelha - Classe 0{" "}
            </p>
            <img src="/images/insights/shap_beeswarm_2.png" alt="Gráfico 4" />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-center items-center">
              Dispersão Simples - V14{" "}
            </p>
            <img
              src="/images/insights/shap_scatter_plot_1.png"
              alt="Gráfico 6"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-center items-center">
              Dispersão Simples - V17{" "}
            </p>
            <img
              src="/images/insights/shap_scatter_plot_2.png"
              alt="Gráfico 7"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-center items-center">
              Dispersão Simples - V12{" "}
            </p>
            <img
              src="/images/insights/shap_scatter_plot_3.png"
              alt="Gráfico 8"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-center items-center">
              Dispersão Simples - V10
            </p>
            <img
              src="/images/insights/shap_scatter_plot_4.png"
              alt="Gráfico 9"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-center items-center">
              Gráfico de Decisão - Probabilidade{" "}
            </p>
            <img
              src="/images/insights/shap_decision_plot_2.png"
              alt="Gráfico 11"
              
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-center items-center">
              Gráfico de Decisão - Valor SHAP{" "}
            </p>
            <img
              src="/images/insights/shap_decision_plot_1.png"
              alt="Gráfico 12"
            />
          </div>
        </div>
        <p className="text-xl font-bold flex justify-center items-center mt-5">
          Gráfico de Decisão - Valor SHAP{" "}
        </p>
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center ">
          <img
            src="/images/insights/shap_decision_plot_3.png"
            alt="Gráfico 13"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-left items-center ml-20">
              Correlação de Pearlson{" "}
            </p>
            <img
              src="/images/insights/correlacao_pearlson.png"
              alt="Gráfico 14"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-bold flex justify-left items-center ml-20">
              Correlação de Spearman{" "}
            </p>
            <img
              src="/images/insights/correlacao_spearman.png"
              alt="Gráfico 15"

            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mt-5">
          <p className="text-xl font-bold flex justify-center items-center">
            Gráfico de Decisão{" "}
          </p>

          <img src="/images/insights/shap_force_plot.png" alt="Gráfico 16" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
