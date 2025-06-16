import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useMascot } from '../../context/MascotContext';

const ClassEarning = () => {
  const { mascot } = useMascot();
  const mascotEmoji = mascot === 'penny' ? '🦉' : mascot === 'coiny' ? '🐷' : '🦊';
  const mascotName = mascot === 'penny' ? 'Penny a Coruja' : mascot === 'coiny' ? 'Coiny o Porquinho' : 'Foxy a Raposa';
  
  const [currentSection, setCurrentSection] = useState(1);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const totalSections = 3;
  
  const handleSectionComplete = (sectionNumber: number) => {
    if (!completedSections.includes(sectionNumber)) {
      setCompletedSections([...completedSections, sectionNumber]);
    }
  };
  
  const goToNextSection = () => {
    if (currentSection < totalSections) {
      handleSectionComplete(currentSection);
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const goToPreviousSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-orange-50 min-h-screen pb-16">
      {/* Class Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link 
              to="/classes" 
              className="mr-3 bg-orange-700 hover:bg-orange-800 p-2 rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Aula 4: Ganhar & Empreendedorismo</h1>
          </div>
          
          <div className="bg-orange-700 bg-opacity-30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
                <span className="text-3xl">💼</span>
              </div>
              <div>
                <p className="text-lg text-orange-100">O teu guia:</p>
                <p className="text-xl font-medium">{mascotName}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:items-end">
              <div className="flex items-center mb-2">
                <span className="text-orange-100 mr-2">Progresso:</span>
                <div className="bg-orange-200 bg-opacity-30 h-2 w-32 rounded-full overflow-hidden">
                  <div 
                    className="bg-yellow-400 h-full transition-all duration-500" 
                    style={{ 
                      width: `${(completedSections.length / totalSections) * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="text-orange-100 ml-2">
                  {completedSections.length}/{totalSections}
                </span>
              </div>
              <p className="text-sm text-orange-200">
                {completedSections.length === totalSections 
                  ? "Aula completa! Excelente trabalho!" 
                  : "Completa todas as secções para receberes o teu certificado!"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4 mb-8">
          <button
            onClick={goToPreviousSection}
            disabled={currentSection === 1}
            className={`flex items-center ${
              currentSection === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-orange-600 hover:text-orange-800'
            }`}
          >
            <ArrowLeft size={16} className="mr-1" />
            Anterior
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalSections }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index + 1)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  currentSection === index + 1
                    ? 'bg-orange-600 text-white'
                    : completedSections.includes(index + 1)
                    ? 'bg-green-100 text-green-600 border border-green-300'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {completedSections.includes(index + 1) ? (
                  <CheckCircle size={16} />
                ) : (
                  index + 1
                )}
              </button>
            ))}
          </div>
          
          <button
            onClick={goToNextSection}
            disabled={currentSection === totalSections}
            className={`flex items-center ${
              currentSection === totalSections
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-orange-600 hover:text-orange-800'
            }`}
          >
            Próximo
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Class Content */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          {currentSection === 1 && (
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                    {mascotEmoji}
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 rounded-tl-none">
                  <p className="text-gray-800">
                    Bem-vindos à nossa aula final! Hoje vamos aprender sobre diferentes formas de as crianças ganharem dinheiro e desenvolver uma mentalidade empreendedora. Estás pronto para explorar como podes começar a ganhar?
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Formas de as Crianças Ganharem Dinheiro</h2>
              
              <p className="text-gray-700">
                Há muitas formas de as crianças ganharem dinheiro, mesmo numa idade jovem. Ganhar o teu próprio dinheiro é emocionante e ensina-te competências importantes como responsabilidade e trabalho árduo.
              </p>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Oportunidades de Ganhar para Crianças</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl mr-3">
                        🧹
                      </div>
                      <h4 className="font-semibold text-gray-800">Tarefas em Casa</h4>
                    </div>
                    <p className="text-gray-700 mb-2">
                      Muitas famílias dão mesadas por completar tarefas domésticas. Isto pode incluir:
                    </p>
                    <ul className="space-y-1 pl-5 list-disc text-gray-700">
                      <li>Fazer a cama</li>
                      <li>Arrumar o quarto</li>
                      <li>Pôr a mesa</li>
                      <li>Ajudar com a louça</li>
                      <li>Tirar o lixo</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-3">
                        🐈
                      </div>
                      <h4 className="font-semibold text-gray-800">Ajudar Vizinhos</h4>
                    </div>
                    <p className="text-gray-700 mb-2">
                      Com permissão e supervisão de adultos, podes:
                    </p>
                    <ul className="space-y-1 pl-5 list-disc text-gray-700">
                      <li>Regar plantas para vizinhos de férias</li>
                      <li>Passear cães (com supervisão de adultos)</li>
                      <li>Alimentar animais enquanto os donos estão fora</li>
                      <li>Ajudar a apanhar folhas ou limpar neve</li>
                      <li>Entregar jornais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mr-3">
                        📚
                      </div>
                      <h4 className="font-semibold text-gray-800">Conquistas Académicas</h4>
                    </div>
                    <p className="text-gray-700 mb-2">
                      Algumas famílias recompensam o esforço ou sucesso académico:
                    </p>
                    <ul className="space-y-1 pl-5 list-disc text-gray-700">
                      <li>Boas notas nos relatórios</li>
                      <li>Ler um certo número de livros</li>
                      <li>Aprender novas competências</li>
                      <li>Completar projetos especiais</li>
                      <li>Praticar instrumentos musicais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl mr-3">
                        🎁
                      </div>
                      <h4 className="font-semibold text-gray-800">Ocasiões Especiais</h4>
                    </div>
                    <p className="text-gray-700 mb-2">
                      O dinheiro também pode vir de:
                    </p>
                    <ul className="space-y-1 pl-5 list-disc text-gray-700">
                      <li>Presentes de aniversário</li>
                      <li>Dinheiro de feriados de familiares</li>
                      <li>Visitas da Fada dos Dentes</li>
                      <li>Celebrações religiosas (como Primeira Comunhão)</li>
                      <li>Presentes de formatura</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                    {mascotEmoji}
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 rounded-tl-none">
                  <p className="text-gray-800">
                    Lembra-te sempre de falar com os teus pais ou responsáveis sobre formas de ganhar dinheiro. Eles podem ajudar a orientar-te e certificar-se de que as tuas atividades de ganhar dinheiro são seguras e apropriadas para a tua idade.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">Nota Importante:</h3>
                <p className="text-gray-700">
                  Famílias diferentes têm abordagens diferentes para mesadas e tarefas. Algumas dão mesadas independentemente das tarefas (para ensinar orçamentação), enquanto outras ligam as mesadas diretamente ao trabalho completado. Não há forma certa ou errada!
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">O Valor do Trabalho</h3>
                <p className="text-gray-700 mb-4">
                  Ganhar dinheiro através do teu próprio esforço ensina lições importantes de vida:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-800 font-medium">Responsabilidade</span>
                    </div>
                    <p className="text-gray-700">
                      Quando ganhas dinheiro, aprendes a completar tarefas de forma fiável e a tempo.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-800 font-medium">Ética de Trabalho</span>
                    </div>
                    <p className="text-gray-700">
                      Desenvolves o hábito de trabalhar arduamente e fazer o teu melhor trabalho.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-800 font-medium">Apreciação do Valor</span>
                    </div>
                    <p className="text-gray-700">
                      Quando trabalhas pelo dinheiro, compreendes melhor o seu valor e fazes escolhas de gastos mais sábias.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-800 font-medium">Confiança</span>
                    </div>
                    <p className="text-gray-700">
                      Ganhar dinheiro com sucesso constrói autoconfiança e independência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentSection === 2 && (
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                    {mascotEmoji}
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 rounded-tl-none">
                  <p className="text-gray-800">
                    Agora vamos aprender sobre empreendedorismo - começar o teu próprio pequeno negócio! Esta é uma forma emocionante de ganhar dinheiro e aprender competências importantes.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Jovens Empreendedores</h2>
              
              <p className="text-gray-700">
                Um empreendedor é alguém que inicia o seu próprio negócio. Até as crianças podem ser empreendedoras! Começar um negócio simples é uma forma divertida de ganhar dinheiro enquanto aprendes competências valiosas.
              </p>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ideias de Negócio Adequadas para Crianças</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-3xl">
                        🍋
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Banca de Limonada</h4>
                    </div>
                    <p className="text-gray-700">
                      Um primeiro negócio clássico! Monta uma banca vendendo limonada ou outras bebidas num dia quente.
                    </p>
                    <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700 text-sm">
                      <li>Faz cartazes para atrair clientes</li>
                      <li>Define preços justos</li>
                      <li>Mantém a tua banca limpa e atrativa</li>
                      <li>Acompanha as tuas despesas e lucros</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-3xl">
                        🧁
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Venda de Bolos</h4>
                    </div>
                    <p className="text-gray-700">
                      Faz bolachas, cupcakes ou outras guloseimas para vender a vizinhos ou em eventos comunitários.
                    </p>
                    <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700 text-sm">
                      <li>Cozinha com supervisão de adultos</li>
                      <li>Cria embalagens atrativas</li>
                      <li>Considera necessidades dietéticas especiais</li>
                      <li>Calcula custos para definir preços justos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                        🎨
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Negócio de Artesanato</h4>
                    </div>
                    <p className="text-gray-700">
                      Faz e vende artesanato feito à mão como pulseiras, pedras pintadas ou cartões de felicitações.
                    </p>
                    <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700 text-sm">
                      <li>Foca-te na qualidade do artesanato</li>
                      <li>Cria uma variedade de designs</li>
                      <li>Aceita encomendas personalizadas</li>
                      <li>Considera itens sazonais para feriados</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                        🌱
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Negócio de Plantas</h4>
                    </div>
                    <p className="text-gray-700">
                      Cultiva e vende plantas, flores ou vegetais a partir de sementes.
                    </p>
                    <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700 text-sm">
                      <li>Começa sementes em vasos pequenos</li>
                      <li>Cria cartões de instruções de cuidado</li>
                      <li>Decora vasos para valor acrescentado</li>
                      <li>Considera vegetais sazonais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-3xl">
                        🧽
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Lavagem de Carros</h4>
                    </div>
                    <p className="text-gray-700">
                      Oferece-te para lavar carros para vizinhos e amigos da família.
                    </p>
                    <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700 text-sm">
                      <li>Usa produtos de limpeza apropriados</li>
                      <li>Sê minucioso e cuidadoso</li>
                      <li>Oferece limpeza interior como extra</li>
                      <li>Considera um programa de fidelidade</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center text-3xl">
                        📚
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Venda de Livros Usados</h4>
                    </div>
                    <p className="text-gray-700">
                      Vende livros que já não precisas a outras crianças ou famílias.
                    </p>
                    <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700 text-sm">
                      <li>Organiza livros por categorias</li>
                      <li>Certifica-te de que os livros estão em bom estado</li>
                      <li>Define preços justos baseados no estado</li>
                      <li>Cria uma área acolhedora para navegar</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">O Plano de Negócios da Banca de Limonada</h3>
                <p className="text-gray-700 mb-4">
                  Vamos ver como podes planear um negócio simples de banca de limonada:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <h4 className="font-semibold text-gray-800">Custos Iniciais</h4>
                    </div>
                    <div className="pl-11">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-1 text-gray-700">Limões (12)</td>
                            <td className="py-1 text-right text-gray-800">3,00€</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-1 text-gray-700">Açúcar</td>
                            <td className="py-1 text-right text-gray-800">1,50€</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-1 text-gray-700">Copos de papel (25)</td>
                            <td className="py-1 text-right text-gray-800">2,50€</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-1 text-gray-700">Gelo</td>
                            <td className="py-1 text-right text-gray-800">1,00€</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-1 text-gray-700">Cartolina para cartaz</td>
                            <td className="py-1 text-right text-gray-800">2,00€</td>
                          </tr>
                          <tr className="font-medium">
                            <td className="py-1 text-gray-800">Investimento Total</td>
                            <td className="py-1 text-right text-gray-800">10,00€</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <h4 className="font-semibold text-gray-800">Preços</h4>
                    </div>
                    <p className="pl-11 text-gray-700">
                      Cada copo de limonada custa cerca de 0,40€ para fazer (ingredientes + copo). Se venderes cada copo por 1,00€, ganhas 0,60€ de lucro por copo.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <h4 className="font-semibold text-gray-800">Previsão de Vendas</h4>
                    </div>
                    <p className="pl-11 text-gray-700 mb-2">
                      Se venderes 25 copos de limonada:
                    </p>
                    <div className="pl-11">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-1 text-gray-700">Vendas Totais (25 copos a 1,00€)</td>
                            <td className="py-1 text-right text-gray-800">25,00€</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-1 text-gray-700">Custos Totais</td>
                            <td className="py-1 text-right text-gray-800">10,00€</td>
                          </tr>
                          <tr className="font-medium text-green-600">
                            <td className="py-1">Lucro</td>
                            <td className="py-1 text-right">15,00€</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <h4 className="font-semibold text-gray-800">Marketing</h4>
                    </div>
                    <div className="pl-11 space-y-2">
                      <p className="text-gray-700">
                        Para atrair clientes:
                      </p>
                      <ul className="space-y-1 pl-5 list-disc text-gray-700">
                        <li>Faz um cartaz colorido</li>
                        <li>Instala-te numa área movimentada mas segura</li>
                        <li>Pede a um adulto para ajudar a contar aos vizinhos sobre a tua banca</li>
                        <li>Oferece um negócio "compra 3, leva 1 grátis" para famílias</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                    {mascotEmoji}
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 rounded-tl-none">
                  <p className="text-gray-800">
                    Lembra-te sempre de obter permissão dos teus pais ou responsáveis antes de começar qualquer negócio. Eles podem ajudar-te a certificar que o teu negócio é seguro e segue quaisquer regras locais.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {currentSection === 3 && (
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                    {mascotEmoji}
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 rounded-tl-none">
                  <p className="text-gray-800">
                    Vamos terminar a nossa aula aprendendo sobre competências empreendedoras - as habilidades especiais que ajudam as pessoas a ter sucesso nos negócios!
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Competências Empreendedoras</h2>
              
              <p className="text-gray-700">
                Os empreendedores precisam de certas competências para gerir negócios bem-sucedidos. A boa notícia é que podes começar a desenvolver estas competências agora, mesmo sendo criança!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mr-3">
                      🔍
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Resolução de Problemas</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Os empreendedores procuram problemas que possam resolver com os seus produtos ou serviços.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Como desenvolver esta competência:</h4>
                    <ul className="space-y-2 pl-5 list-disc text-gray-700">
                      <li>Procura problemas para resolver na vida quotidiana</li>
                      <li>Pratica encontrar múltiplas soluções para um problema</li>
                      <li>Pergunta "Como posso melhorar isto?"</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-3">
                      💭
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Criatividade</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Ter novas ideias e encontrar soluções únicas ajuda os empreendedores a destacarem-se.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Como desenvolver esta competência:</h4>
                    <ul className="space-y-2 pl-5 list-disc text-gray-700">
                      <li>Experimenta novas atividades e hobbies</li>
                      <li>Pratica brainstorming sem julgar ideias</li>
                      <li>Junta ideias diferentes de formas novas</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl mr-3">
                      🗣️
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Comunicação</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Os empreendedores precisam de explicar as suas ideias claramente e ouvir clientes e parceiros.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Como desenvolver esta competência:</h4>
                    <ul className="space-y-2 pl-5 list-disc text-gray-700">
                      <li>Pratica explicar ideias de forma simples</li>
                      <li>Aprende a ser um bom ouvinte</li>
                      <li>Pede feedback e responde positivamente</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl mr-3">
                      ⏱️
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Perseverança</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Os empreendedores continuam a tentar mesmo quando as coisas ficam difíceis ou não funcionam à primeira.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Como desenvolver esta competência:</h4>
                    <ul className="space-y-2 pl-5 list-disc text-gray-700">
                      <li>Define objetivos e trabalha para os alcançar</li>
                      <li>Aprende com os erros em vez de desistir</li>
                      <li>Celebra pequenas conquistas pelo caminho</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Jovens Empreendedores Famosos</h3>
                <p className="text-gray-700 mb-6">
                  Sabias que muitas crianças começaram negócios bem-sucedidos? Aqui estão alguns exemplos inspiradores:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl mr-3 mt-1">
                        👧
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Mikaila Ulmer</h4>
                        <p className="text-sm text-gray-500 mb-2">Começou aos 4 anos</p>
                        <p className="text-gray-700">
                          Começou "Me & the Bees Lemonade" depois de ser picada por abelhas. Criou uma receita de limonada com mel e doa parte dos lucros para salvar as abelhas.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl mr-3 mt-1">
                        👦
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Moziah Bridges</h4>
                        <p className="text-sm text-gray-500 mb-2">Começou aos 9 anos</p>
                        <p className="text-gray-700">
                          Fundou "Mo's Bows" para vender gravatas-borboleta feitas à mão. Queria parecer elegante mas não conseguia encontrar gravatas-borboleta divertidas para crianças, então começou a fazer as suas próprias.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm md:col-span-2">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl mr-3 mt-1">
                        👧
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Alina Morse</h4>
                        <p className="text-sm text-gray-500 mb-2">Começou aos 7 anos</p>
                        <p className="text-gray-700">
                          Criou "Zollipops" - chupa-chupas sem açúcar que fazem bem aos dentes. Teve a ideia depois de uma ida ao banco onde lhe ofereceram um chupa-chupa mas disseram que fazia mal aos dentes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                    {mascotEmoji}
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 rounded-tl-none">
                  <p className="text-gray-800">
                    Não precisas de criar um negócio enorme para ser empreendedor. Até uma pequena banca de limonada ou venda de artesanato pode ensinar-te competências importantes que te vão ajudar durante toda a vida!
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Questionário da Aula 4</h3>
                <p className="text-gray-700 mb-6">
                  Vamos ver o que aprendeste sobre ganhar e empreendedorismo!
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">1. O que é um empreendedor?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q1a" name="q1" className="mr-2" />
                        <label htmlFor="q1a" className="text-gray-700">Alguém que trabalha para uma grande empresa</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1b" name="q1" className="mr-2" />
                        <label htmlFor="q1b" className="text-gray-700">Alguém que inicia o seu próprio negócio</label>
                
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1c" name="q1" className="mr-2" />
                        <label htmlFor="q1c" className="text-gray-700">Alguém que poupa muito dinheiro</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">2. Qual destas NÃO é uma forma típica de as crianças ganharem dinheiro?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q2a" name="q2" className="mr-2" />
                        <label htmlFor="q2a" className="text-gray-700">Gerir um negócio a tempo inteiro</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2b" name="q2" className="mr-2" />
                        <label htmlFor="q2b" className="text-gray-700">Fazer tarefas em casa</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2c" name="q2" className="mr-2" />
                        <label htmlFor="q2c" className="text-gray-700">Vender artesanato feito à mão</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">3. Qual é uma competência importante para empreendedores?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q3a" name="q3" className="mr-2" />
                        <label htmlFor="q3a" className="text-gray-700">Ser capaz de dançar bem</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3b" name="q3" className="mr-2" />
                        <label htmlFor="q3b" className="text-gray-700">Resolução de problemas</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3c" name="q3" className="mr-2" />
                        <label htmlFor="q3c" className="text-gray-700">Ser o corredor mais rápido</label>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleSectionComplete(3)} 
                    className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors w-full"
                  >
                    Verificar Respostas
                  </button>
                </div>
              </div>
              
              {completedSections.length === totalSections && (
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 animate-fadeIn">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-4xl mb-4">
                      🏆
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Parabéns!</h3>
                    <p className="text-gray-700 mb-4">
                      Completaste a Aula 4: Ganhar & Empreendedorismo!
                    </p>
                    <div className="bg-white rounded-lg p-6 shadow-md inline-block">
                      <p className="text-lg font-medium text-orange-800 mb-2">Certificado de Conclusão</p>
                      <p className="text-gray-700">
                        Este certificado comprova que aprendeste com sucesso sobre formas de ganhar dinheiro, empreendedorismo jovem e competências importantes de negócios.
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        Apresentado por: {mascotName}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="mt-8 flex justify-between">
          <button
            onClick={goToPreviousSection}
            disabled={currentSection === 1}
            className={`py-2 px-4 rounded-lg flex items-center ${
              currentSection === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
            }`}
          >
            <ArrowLeft size={16} className="mr-2" /> Secção Anterior
          </button>
          
          {currentSection < totalSections ? (
            <button
              onClick={goToNextSection}
              className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg flex items-center"
            >
              Próxima Secção <ArrowRight size={16} className="ml-2" />
            </button>
          ) : (
            <Link
              to="/classes"
              className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg flex items-center"
            >
              Terminar Aula <CheckCircle size={16} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassEarning;