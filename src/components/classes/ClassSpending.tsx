import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useMascot } from '../../context/MascotContext';

const ClassSpending = () => {
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
    <div className="bg-purple-50 min-h-screen pb-16">
      {/* Class Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link 
              to="/classes" 
              className="mr-3 bg-purple-700 hover:bg-purple-800 p-2 rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Aula 3: Gastar com Inteligência</h1>
          </div>
          
          <div className="bg-purple-700 bg-opacity-30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
                <span className="text-3xl">🛍️</span>
              </div>
              <div>
                <p className="text-lg text-purple-100">O teu guia:</p>
                <p className="text-xl font-medium">{mascotName}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:items-end">
              <div className="flex items-center mb-2">
                <span className="text-purple-100 mr-2">Progresso:</span>
                <div className="bg-purple-200 bg-opacity-30 h-2 w-32 rounded-full overflow-hidden">
                  <div 
                    className="bg-yellow-400 h-full transition-all duration-500" 
                    style={{ 
                      width: `${(completedSections.length / totalSections) * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="text-purple-100 ml-2">
                  {completedSections.length}/{totalSections}
                </span>
              </div>
              <p className="text-sm text-purple-200">
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
                : 'text-purple-600 hover:text-purple-800'
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
                    ? 'bg-purple-600 text-white'
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
                : 'text-purple-600 hover:text-purple-800'
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
                    Bem-vindos à nossa terceira aula sobre Gastar com Inteligência! Hoje vamos aprender como fazer boas escolhas quando gastamos dinheiro. Prontos para se tornarem compradores inteligentes?
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Decisões Inteligentes ao Gastar</h2>
              
              <p className="text-gray-700">
                Gastar dinheiro com sabedoria significa pensar cuidadosamente antes de comprar coisas. Quando gastamos dinheiro de forma inteligente, obtemos mais valor e evitamos desperdiçar dinheiro em coisas de que não precisamos ou que não vamos usar.
              </p>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Perguntas a Fazer Antes de Comprar</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl mr-3">
                        ❓
                      </div>
                      <h4 className="font-semibold text-gray-800">Preciso Mesmo Disto?</h4>
                    </div>
                    <p className="text-gray-700">
                      É algo de que realmente preciso, ou apenas algo que quero? Lembra-te do que aprendemos sobre necessidades vs. desejos!
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl mr-3">
                        🤔
                      </div>
                      <h4 className="font-semibold text-gray-800">Vou Usar Isto?</h4>
                    </div>
                    <p className="text-gray-700">
                      Vou usar este item muito, ou vai ficar apenas no meu quarto? Coisas que são usadas frequentemente são normalmente melhores compras.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl mr-3">
                        💭
                      </div>
                      <h4 className="font-semibold text-gray-800">Isto Tem Boa Qualidade?</h4>
                    </div>
                    <p className="text-gray-700">
                      Vai durar muito tempo, ou vai partir-se rapidamente? Às vezes é melhor gastar um pouco mais numa coisa que vai durar mais tempo.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl mr-3">
                        💰
                      </div>
                      <h4 className="font-semibold text-gray-800">Posso Pagar Isto?</h4>
                    </div>
                    <p className="text-gray-700">
                      Tenho dinheiro suficiente? Se gastar nisto, ainda vou ter suficiente para coisas de que preciso ou para as quais tenho estado a poupar?
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl mr-3">
                        ⏱️
                      </div>
                      <h4 className="font-semibold text-gray-800">Devo Esperar?</h4>
                    </div>
                    <p className="text-gray-700">
                      É uma boa altura para comprar, ou devo esperar? Às vezes as coisas ficam em promoção, ou podemos mudar de ideias se esperarmos.
                    </p>
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
                    Um truque útil é a regra "dormir sobre o assunto". Se queres comprar algo que custa mais do que a tua idade em euros, espera um dia por cada euro. Por exemplo, se tens 8 anos e queres comprar um brinquedo de 12€, espera 4 dias antes de decidir.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">Facto Interessante:</h3>
                <p className="text-gray-700">
                  Estudos mostram que as pessoas que esperam antes de fazer compras ficam mais felizes com o que compram e têm menos probabilidade de se arrepender das suas escolhas!
                </p>
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
                    Agora vamos aprender sobre comparar preços para obter o melhor valor pelo nosso dinheiro!
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Comparar Preços</h2>
              
              <p className="text-gray-700">
                Uma das competências mais importantes para gastar com inteligência é comparar preços. Isto ajuda-nos a encontrar o melhor negócio e a poupar dinheiro.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Como Comparar Preços</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <h4 className="font-semibold text-gray-800">Verificar Lojas Diferentes</h4>
                    </div>
                    <p className="text-gray-700">
                      Olha os preços em lojas diferentes antes de comprares. O mesmo item pode custar quantias diferentes em lugares diferentes.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <h4 className="font-semibold text-gray-800">Procurar Promoções</h4>
                    </div>
                    <p className="text-gray-700">
                      Fica atento a descontos e ofertas especiais. Às vezes esperar por uma promoção pode poupar-te dinheiro.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <h4 className="font-semibold text-gray-800">Comparar Itens Semelhantes</h4>
                    </div>
                    <p className="text-gray-700">
                      Às vezes há versões diferentes do que queres. Compara-as para ver qual te dá mais pelo teu dinheiro.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <h4 className="font-semibold text-gray-800">Pedir Ajuda</h4>
                    </div>
                    <p className="text-gray-700">
                      Os adultos são bons a comparar preços e a encontrar negócios. Pede a um pai ou adulto de confiança para te ajudar a fazer comparações.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Exemplo de Comparação de Preços</h3>
                <p className="text-gray-700 mb-4">
                  Vamos ver um exemplo de comparação de preços para um robô de brincar:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-transparent hover:border-purple-300 transition-colors">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-3xl">
                        🤖
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Loja de Brinquedos A</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Preço:</span>
                        <span className="font-medium text-gray-800">15,99€</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Qualidade:</span>
                        <span className="text-yellow-500">★★★☆☆</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Características:</span>
                        <span className="text-gray-800">Básicas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Promoção:</span>
                        <span className="text-red-500">Nenhuma</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-300 hover:border-purple-300 transition-colors">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                        🤖
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Loja de Brinquedos B</h4>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded inline-block mt-1">
                        Melhor Valor!
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Preço:</span>
                        <span className="font-medium text-gray-800">12,99€</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Qualidade:</span>
                        <span className="text-yellow-500">★★★★☆</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Características:</span>
                        <span className="text-gray-800">Braços extra</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Promoção:</span>
                        <span className="text-green-500">25% desconto</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-transparent hover:border-purple-300 transition-colors">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-3xl">
                        🤖
                      </div>
                      <h4 className="font-semibold text-gray-800 mt-2">Loja de Brinquedos C</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Preço:</span>
                        <span className="font-medium text-gray-800">19,99€</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Qualidade:</span>
                        <span className="text-yellow-500">★★★★★</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Características:</span>
                        <span className="text-gray-800">Acende luzes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Promoção:</span>
                        <span className="text-red-500">Nenhuma</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Neste exemplo, a <strong>Loja de Brinquedos B</strong> oferece o melhor valor porque tem um robô de boa qualidade com características extra a um preço mais baixo porque está em promoção. Esta é uma compra inteligente!
                  </p>
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
                    Lembra-te, a opção mais barata nem sempre é o melhor valor. Pensa também na qualidade e características. Às vezes gastar um pouco mais dá-te algo que dura muito mais tempo!
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
                    Na nossa secção final, vamos aprender sobre fazer um orçamento simples para planear os nossos gastos!
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Criar um Orçamento Simples</h2>
              
              <p className="text-gray-700">
                Um orçamento é um plano que te ajuda a decidir como usar o teu dinheiro. Mostra quanto dinheiro tens, quanto queres poupar e quanto podes gastar em coisas diferentes.
              </p>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Passos para Criar um Orçamento Simples</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <h4 className="font-semibold text-gray-800">Conta o Teu Dinheiro</h4>
                    </div>
                    <p className="text-gray-700">
                      Primeiro, descobre quanto dinheiro tens ou recebes regularmente (como mesada ou dinheiro de aniversário).
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <h4 className="font-semibold text-gray-800">Decide o que Poupar</h4>
                    </div>
                    <p className="text-gray-700">
                      Escolhe quanto queres poupar. Uma boa regra é poupar pelo menos 20% (ou 1/5) do teu dinheiro.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <h4 className="font-semibold text-gray-800">Planeia os Teus Gastos</h4>
                    </div>
                    <p className="text-gray-700">
                      Divide o dinheiro restante em categorias para coisas diferentes que queres comprar ou atividades que queres fazer.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <h4 className="font-semibold text-gray-800">Acompanha o Teu Dinheiro</h4>
                    </div>
                    <p className="text-gray-700">
                      Mantém registo do que gastas para te certificares de que estás a seguir o teu orçamento. Podes usar um caderno ou pedir a um adulto para te ajudar a fazer um gráfico simples.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Exemplo de Orçamento para uma Criança</h3>
                <p className="text-gray-700 mb-4">
                  Aqui está um exemplo de como uma criança pode fazer o orçamento da sua mesada semanal de 10€:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-3">
                      💰
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800">Dinheiro Total: 10,00€</h4>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl mr-3">
                          🏦
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Poupanças</h5>
                          <p className="text-sm text-gray-600">20% do total</p>
                        </div>
                      </div>
                      <div className="text-right font-bold text-green-600">2,00€</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl mr-3">
                          🎮
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Diversão & Jogos</h5>
                          <p className="text-sm text-gray-600">30% do total</p>
                        </div>
                      </div>
                      <div className="text-right font-bold text-blue-600">3,00€</div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl mr-3">
                          🍦
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Guloseimas</h5>
                          <p className="text-sm text-gray-600">20% do total</p>
                        </div>
                      </div>
                      <div className="text-right font-bold text-purple-600">2,00€</div>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl mr-3">
                          🎁
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Presentes para Outros</h5>
                          <p className="text-sm text-gray-600">10% do total</p>
                        </div>
                      </div>
                      <div className="text-right font-bold text-yellow-600">1,00€</div>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-4 md:col-span-2">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl mr-3">
                          🧩
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">Objetivo Grande: Novo Jogo de Tabuleiro</h5>
                          <p className="text-sm text-gray-600">20% do total</p>
                        </div>
                      </div>
                      <div className="text-right font-bold text-red-600">2,00€</div>
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
                    Fazer um orçamento ajuda-te a ter controlo sobre o teu dinheiro em vez de deixar o dinheiro controlar-te! É uma competência que te vai ajudar durante toda a vida.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Questionário da Aula 3</h3>
                <p className="text-gray-700 mb-6">
                  Vamos ver o que aprendeste sobre gastar com inteligência!
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">1. O que deves fazer antes de comprar algo caro?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q1a" name="q1" className="mr-2" />
                        <label htmlFor="q1a" className="text-gray-700">Comprá-lo imediatamente antes que outra pessoa o faça</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1b" name="q1" className="mr-2" />
                        <label htmlFor="q1b" className="text-gray-700">Pedi-lo como presente</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1c" name="q1" className="mr-2" />
                        <label htmlFor="q1c" className="text-gray-700">Comparar preços e pensar se realmente precisas</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">2. O que é um orçamento?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q2a" name="q2" className="mr-2" />
                        <label htmlFor="q2a" className="text-gray-700">Uma lista de coisas que queres comprar</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2b" name="q2" className="mr-2" />
                        <label htmlFor="q2b" className="text-gray-700">Um plano que te ajuda a decidir como usar o teu dinheiro</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2c" name="q2" className="mr-2" />
                        <label htmlFor="q2c" className="text-gray-700">Um tipo especial de carteira</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">3. Ao comparar preços, o que deves considerar além do custo?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q3a" name="q3" className="mr-2" />
                        <label htmlFor="q3a" className="text-gray-700">Apenas a cor do item</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3b" name="q3" className="mr-2" />
                        <label htmlFor="q3b" className="text-gray-700">Qualidade, características e se está em promoção</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3c" name="q3" className="mr-2" />
                        <label htmlFor="q3c" className="text-gray-700">Quão longe fica a loja</label>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleSectionComplete(3)} 
                    className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors w-full"
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
                      Completaste a Aula 3: Gastar com Inteligência!
                    </p>
                    <div className="bg-white rounded-lg p-6 shadow-md inline-block">
                      <p className="text-lg font-medium text-purple-800 mb-2">Certificado de Conclusão</p>
                      <p className="text-gray-700">
                        Este certificado comprova que aprendeste com sucesso sobre tomar decisões inteligentes ao gastar, comparar preços e criar um orçamento simples.
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
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            <ArrowLeft size={16} className="mr-2" /> Secção Anterior
          </button>
          
          {currentSection < totalSections ? (
            <button
              onClick={goToNextSection}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center"
            >
              Próxima Secção <ArrowRight size={16} className="ml-2" />
            </button>
          ) : (
            <Link
              to="/classes"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg flex items-center"
            >
              Terminar Aula <CheckCircle size={16} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassSpending;