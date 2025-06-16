import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useMascot } from '../../context/MascotContext';

const ClassSaving = () => {
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
    <div className="bg-green-50 min-h-screen pb-16">
      {/* Class Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link 
              to="/classes" 
              className="mr-3 bg-green-700 hover:bg-green-800 p-2 rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Aula 2: Poupar & Objetivos</h1>
          </div>
          
          <div className="bg-green-700 bg-opacity-30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
                <span className="text-3xl">🏦</span>
              </div>
              <div>
                <p className="text-lg text-green-100">O teu guia:</p>
                <p className="text-xl font-medium">{mascotName}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:items-end">
              <div className="flex items-center mb-2">
                <span className="text-green-100 mr-2">Progresso:</span>
                <div className="bg-green-200 bg-opacity-30 h-2 w-32 rounded-full overflow-hidden">
                  <div 
                    className="bg-yellow-400 h-full transition-all duration-500" 
                    style={{ 
                      width: `${(completedSections.length / totalSections) * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="text-green-100 ml-2">
                  {completedSections.length}/{totalSections}
                </span>
              </div>
              <p className="text-sm text-green-200">
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
                : 'text-green-600 hover:text-green-800'
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
                    ? 'bg-green-600 text-white'
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
                : 'text-green-600 hover:text-green-800'
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
                    Bem-vindos à nossa segunda aula! Hoje vamos aprender tudo sobre poupar dinheiro e definir objetivos financeiros. Estás pronto?
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Porque Poupar Dinheiro?</h2>
              
              <p className="text-gray-700">
                Poupar significa guardar algum do teu dinheiro em vez de o gastares imediatamente. É como pôr dinheiro de lado para algo especial no futuro!
              </p>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Os Benefícios de Poupar</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl mr-3">
                        🎮
                      </div>
                      <h4 className="font-semibold text-gray-800">Comprar Coisas Maiores</h4>
                    </div>
                    <p className="text-gray-700">
                      Quando poupas dinheiro, podes comprar coisas maiores ou mais caras que não conseguirias comprar imediatamente, como uma bicicleta nova ou um videojogo.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl mr-3">
                        🆘
                      </div>
                      <h4 className="font-semibold text-gray-800">Emergências</h4>
                    </div>
                    <p className="text-gray-700">
                      O dinheiro poupado pode ajudar se algo inesperado acontecer, como se o teu brinquedo se partir e precisar de ser substituído.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl mr-3">
                        🎓
                      </div>
                      <h4 className="font-semibold text-gray-800">Planos Futuros</h4>
                    </div>
                    <p className="text-gray-700">
                      Algumas coisas custam muito dinheiro, como ir para a universidade quando fores mais velho. Poupar ajuda a preparar para grandes despesas futuras.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl mr-3">
                        😌
                      </div>
                      <h4 className="font-semibold text-gray-800">Tranquilidade</h4>
                    </div>
                    <p className="text-gray-700">
                      É bom ter algum dinheiro poupado! Dá-te opções e faz-te sentir seguro.
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
                    Poupar dinheiro é como dar um presente ao teu futuro! Pode ser um pouco difícil não gastar tudo agora, mas vais ficar muito feliz mais tarde quando puderes comprar algo que realmente queres.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">Facto Interessante:</h3>
                <p className="text-gray-700">
                  Em alguns países, os bancos dão mealheiros especiais às crianças para as encorajar a poupar dinheiro!
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
                    Agora que compreendemos porque é importante poupar, vamos aprender como definir objetivos financeiros!
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Definir Objetivos Financeiros</h2>
              
              <p className="text-gray-700">
                Um objetivo financeiro é algo específico para o qual queres poupar. Ter um objetivo claro torna a poupança mais divertida e ajuda-te a manter a motivação!
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Como Definir um Bom Objetivo Financeiro</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <h4 className="font-semibold text-gray-800">Escolhe Algo Específico</h4>
                    </div>
                    <p className="text-gray-700">
                      Em vez de "poupar para um brinquedo", escolhe "poupar para o conjunto LEGO da estação espacial" ou "poupar para o peluche do unicórnio arco-íris".
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <h4 className="font-semibold text-gray-800">Descobre o Custo</h4>
                    </div>
                    <p className="text-gray-700">
                      Pede a um adulto para te ajudar a descobrir exatamente quanto dinheiro vais precisar de poupar. Este é o teu valor objetivo.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <h4 className="font-semibold text-gray-800">Divide em Partes</h4>
                    </div>
                    <p className="text-gray-700">
                      Se recebes 5€ de mesada por semana e queres poupar 20€, vais precisar de poupar durante 4 semanas.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <h4 className="font-semibold text-gray-800">Acompanha o Teu Progresso</h4>
                    </div>
                    <p className="text-gray-700">
                      Mantém a conta de quanto já poupaste. Podes usar um gráfico, um frasco onde possas ver o dinheiro a crescer, ou um caderno especial.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3">
                        5
                      </div>
                      <h4 className="font-semibold text-gray-800">Celebra o Sucesso!</h4>
                    </div>
                    <p className="text-gray-700">
                      Quando atingires o teu objetivo, celebra a tua conquista! Depois podes começar a planear o teu próximo objetivo.
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
                    Lembra-te, a paciência é uma parte importante da poupança! Às vezes temos de esperar um pouco para conseguir as coisas que queremos, mas isso torna-as ainda mais especiais quando finalmente as conseguimos.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Exemplo de Gráfico de Objetivos</h3>
                <p className="text-gray-700 mb-4">
                  Aqui está um exemplo de como podes acompanhar o teu progresso para um brinquedo de 20€:
                </p>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">Brinquedo Nave Espacial: 20€</h4>
                  <div className="space-y-3">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            Semana 1
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-green-600">
                            5€ / 20€
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                        <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                      </div>
                    </div>
                    
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            Semana 2
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-green-600">
                            10€ / 20€
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                        <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                      </div>
                    </div>
                    
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            Semana 3
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-green-600">
                            15€ / 20€
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                        <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                      </div>
                    </div>
                    
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            Semana 4
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-green-600">
                            20€ / 20€
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                        <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                      </div>
                    </div>
                    
                    <div className="text-center bg-yellow-100 p-2 rounded-lg">
                      <p className="font-semibold text-green-800">Objetivo alcançado! 🎉</p>
                    </div>
                  </div>
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
                    Excelente trabalho a aprender sobre poupar e objetivos! Vamos explorar diferentes lugares para guardar o teu dinheiro em segurança.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Onde Guardar as Tuas Poupanças</h2>
              
              <p className="text-gray-700">
                Quando começares a poupar dinheiro, precisas de um lugar seguro para o guardar. Aqui estão algumas opções:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-sm">
                      🐷
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Mealheiro</h3>
                  <p className="text-gray-700">
                    Uma escolha clássica! Os mealheiros são divertidos e permitem-te ver e ouvir as tuas moedas a acumular.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Fácil de usar</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Divertido pôr moedas lá dentro</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">O dinheiro não está muito seguro</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Difícil contar o total</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-sm">
                      🏦
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Conta Bancária para Crianças</h3>
                  <p className="text-gray-700">
                    Uma conta bancária especial para crianças que um adulto te ajuda a abrir.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Muito seguro e protegido</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Fácil acompanhar o teu dinheiro</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Os pais podem ajudar a gerir</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Não podes ver o dinheiro físico</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-sm">
                      📒
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Frasco de Poupanças</h3>
                  <p className="text-gray-700">
                    Um frasco transparente permite-te ver o teu dinheiro a crescer e é fácil de aceder.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Podes ver o dinheiro a crescer</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Fácil contar as poupanças</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">O dinheiro não está muito seguro</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-700">Tentador tirar dinheiro</span>
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
                    Podes usar métodos diferentes para objetivos diferentes! Talvez guardar pequenas quantias num mealheiro para objetivos a curto prazo, e usar uma conta bancária para poupanças maiores e a longo prazo.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Questionário da Aula 2</h3>
                <p className="text-gray-700 mb-6">
                  Vamos ver o que aprendeste sobre poupar e objetivos!
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">1. Porque é bom poupar dinheiro?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q1a" name="q1" className="mr-2" />
                        <label htmlFor="q1a" className="text-gray-700">Para o esconder dos outros</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1b" name="q1" className="mr-2" />
                        <label htmlFor="q1b" className="text-gray-700">Para poderes comprar coisas maiores no futuro</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1c" name="q1" className="mr-2" />
                        <label htmlFor="q1c" className="text-gray-700">Para fazer o dinheiro crescer</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">2. O que é um objetivo financeiro?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q2a" name="q2" className="mr-2" />
                        <label htmlFor="q2a" className="text-gray-700">Um jogo que jogas com moedas</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2b" name="q2" className="mr-2" />
                        <label htmlFor="q2b" className="text-gray-700">Uma coisa especial para a qual estás a poupar</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2c" name="q2" className="mr-2" />
                        <label htmlFor="q2c" className="text-gray-700">Um tipo de conta bancária</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">3. Qual é o lugar MAIS seguro para guardar as tuas poupanças?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q3a" name="q3" className="mr-2" />
                        <label htmlFor="q3a" className="text-gray-700">Debaixo da almofada</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3b" name="q3" className="mr-2" />
                        <label htmlFor="q3b" className="text-gray-700">Num mealheiro</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3c" name="q3" className="mr-2" />
                        <label htmlFor="q3c" className="text-gray-700">Numa conta bancária para crianças</label>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleSectionComplete(3)} 
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors w-full"
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
                      Completaste a Aula 2: Poupar & Objetivos!
                    </p>
                    <div className="bg-white rounded-lg p-6 shadow-md inline-block">
                      <p className="text-lg font-medium text-green-800 mb-2">Certificado de Conclusão</p>
                      <p className="text-gray-700">
                        Este certificado comprova que aprendeste com sucesso sobre poupar dinheiro, definir objetivos financeiros e onde guardar as tuas poupanças.
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
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            <ArrowLeft size={16} className="mr-2" /> Secção Anterior
          </button>
          
          {currentSection < totalSections ? (
            <button
              onClick={goToNextSection}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center"
            >
              Próxima Secção <ArrowRight size={16} className="ml-2" />
            </button>
          ) : (
            <Link
              to="/classes"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center"
            >
              Terminar Aula <CheckCircle size={16} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassSaving;