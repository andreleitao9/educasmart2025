import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useMascot } from '../../context/MascotContext';

const ClassIntroduction = () => {
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
    <div className="bg-blue-50 min-h-screen pb-16">
      {/* Class Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link 
              to="/classes" 
              className="mr-3 bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Aula 1: Introdução ao Dinheiro</h1>
          </div>
          
          <div className="bg-blue-700 bg-opacity-30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mr-4">
                <span className="text-3xl">💰</span>
              </div>
              <div>
                <p className="text-lg text-blue-100">O teu guia:</p>
                <p className="text-xl font-medium">{mascotName}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:items-end">
              <div className="flex items-center mb-2">
                <span className="text-blue-100 mr-2">Progresso:</span>
                <div className="bg-blue-200 bg-opacity-30 h-2 w-32 rounded-full overflow-hidden">
                  <div 
                    className="bg-yellow-400 h-full transition-all duration-500" 
                    style={{ 
                      width: `${(completedSections.length / totalSections) * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="text-blue-100 ml-2">
                  {completedSections.length}/{totalSections}
                </span>
              </div>
              <p className="text-sm text-blue-200">
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
                : 'text-blue-600 hover:text-blue-800'
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
                    ? 'bg-blue-600 text-white'
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
                : 'text-blue-600 hover:text-blue-800'
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
                    Olá! Eu sou {mascotName} e vou ser o teu guia para aprenderes tudo sobre dinheiro. Estás pronto para começar a nossa aventura?
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">O que é o Dinheiro?</h2>
              
              <p className="text-gray-700">
                O dinheiro é uma ferramenta especial que as pessoas usam para comprar coisas de que precisam e que querem. É como um bilhete que podes trocar por comida, brinquedos, livros e muitas outras coisas!
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Diferentes Tipos de Dinheiro</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl mr-4">
                      💵
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Notas</h4>
                      <p className="text-gray-700">São feitas de papel especial. Têm diferentes valores.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl mr-4">
                      💰
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Moedas</h4>
                      <p className="text-gray-700">São redondas e feitas de metal. Normalmente têm valores mais pequenos que as notas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mr-4">
                      💳
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cartões</h4>
                      <p className="text-gray-700">Estes cartões de plástico permitem que os adultos gastem dinheiro sem ter de andar com dinheiro físico. O dinheiro está guardado num banco.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl mr-4">
                      📱
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Dinheiro Digital</h4>
                      <p className="text-gray-700">Dinheiro que existe em computadores e telemóveis. É usado para comprar coisas online.</p>
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
                    Sabias que diferentes países têm diferentes tipos de dinheiro? Nos Estados Unidos, usam dólares. Na Europa, usamos euros. E no Reino Unido, usam libras!
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">Atividade Divertida:</h3>
                <p className="text-gray-700">
                  Observa algumas moedas ou notas com um adulto. Que imagens e números vês nelas? Consegues encontrar o valor de cada moeda ou nota?
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
                    Excelente trabalho a aprender o que é o dinheiro! Agora vamos falar sobre como usamos o dinheiro no nosso dia a dia.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">Necessidades vs. Desejos</h2>
              
              <p className="text-gray-700">
                Quando usamos dinheiro, precisamos de fazer escolhas inteligentes. Uma coisa importante para entender é a diferença entre as coisas de que precisamos e as coisas que queremos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mr-4">
                      🍎
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Necessidades</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Necessidades são coisas de que precisamos para viver em segurança e com saúde. Devemos sempre garantir que temos dinheiro suficiente para as nossas necessidades primeiro.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center bg-white p-2 rounded-lg">
                      <span className="mr-2">🏠</span>
                      <span className="text-gray-800">Um lugar para viver</span>
                    </div>
                    <div className="flex items-center bg-white p-2 rounded-lg">
                      <span className="mr-2">🍎</span>
                      <span className="text-gray-800">Comida saudável</span>
                    </div>
                    <div className="flex items-center bg-white p-2 rounded-lg">
                      <span className="mr-2">💧</span>
                      <span className="text-gray-800">Água potável</span>
                    </div>
                    <div className="flex items-center bg-white p-2 rounded-lg">
                      <span className="mr-2">👕</span>
                      <span className="text-gray-800">Roupa para vestir</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl mr-4">
                      🎮
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Desejos</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Desejos são coisas que tornam a vida mais divertida ou agradável, mas não precisamos delas para viver. Não há problema em gastar dinheiro em desejos, mas só depois de cuidar das nossas necessidades.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center bg-white p-2 rounded-lg">
                      <span className="mr-2">🎮</span>
                      <span className="text-gray-800">Videojogos</span>
                    </div>
                    <div className="flex items-center bg-white p-2 rounded-lg">
                      <span className="mr-2">🍦</span>
                      <span className="text-gray-800">Gelados</span>
                    </div>
                    <div className="flex items-center bg-white p-2 rounded-lg">
                      <span className="mr-2">🎬</span>
                      <span className="text-gray-800">Filmes</span>
                    </div>
                    <div className="flex items-center bg-white p-2 rounded-lg">
                      <span className="mr-2">🧸</span>
                      <span className="text-gray-800">Brinquedos</span>
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
                    Às vezes pode ser difícil dizer se algo é uma necessidade ou um desejo. Se não tiveres a certeza, pergunta a ti mesmo: "Poderia viver uma vida saudável sem isto?" Se a resposta for sim, provavelmente é um desejo!
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Vamos Praticar!</h3>
                <p className="text-gray-700 mb-4">
                  Olha para cada item abaixo. É uma necessidade ou um desejo? Pensa sobre isso!
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-3xl mb-2">📱</div>
                    <p className="text-gray-800 font-medium">Telemóvel</p>
                    <p className="text-sm text-gray-500">(Desejo)</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-3xl mb-2">🧥</div>
                    <p className="text-gray-800 font-medium">Casaco de Inverno</p>
                    <p className="text-sm text-gray-500">(Necessidade em lugares frios)</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-3xl mb-2">🍌</div>
                    <p className="text-gray-800 font-medium">Banana</p>
                    <p className="text-sm text-gray-500">(Necessidade - comida)</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-3xl mb-2">🎸</div>
                    <p className="text-gray-800 font-medium">Guitarra</p>
                    <p className="text-sm text-gray-500">(Desejo)</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-3xl mb-2">📚</div>
                    <p className="text-gray-800 font-medium">Livros Escolares</p>
                    <p className="text-sm text-gray-500">(Necessidade para a educação)</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-3xl mb-2">🍫</div>
                    <p className="text-gray-800 font-medium">Chocolate</p>
                    <p className="text-sm text-gray-500">(Desejo)</p>
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
                    Estás a ir muito bem! Agora vamos aprender sobre de onde vem o dinheiro e como o conseguimos.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800">De Onde Vem o Dinheiro?</h2>
              
              <p className="text-gray-700">
                O dinheiro não cresce nas árvores (não seria bom?)! As pessoas trabalham para ganhar dinheiro, que depois podem usar para comprar as coisas de que precisam e querem.
              </p>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Formas de Ganhar Dinheiro</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl mr-3">
                        👩‍⚕️
                      </div>
                      <h4 className="font-semibold text-gray-800">Empregos</h4>
                    </div>
                    <p className="text-gray-700">
                      Os adultos trabalham em diferentes empregos para ganhar dinheiro. Podem ser médicos, professores, vendedores, motoristas de autocarro, ou ter muitos outros empregos!
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl mr-3">
                        🏪
                      </div>
                      <h4 className="font-semibold text-gray-800">Negócios</h4>
                    </div>
                    <p className="text-gray-700">
                      Algumas pessoas criam os seus próprios negócios, como uma padaria ou uma loja de brinquedos, e ganham dinheiro vendendo coisas aos clientes.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl mr-3">
                        🧹
                      </div>
                      <h4 className="font-semibold text-gray-800">Tarefas</h4>
                    </div>
                    <p className="text-gray-700">
                      As crianças também podem ganhar dinheiro! Podes receber uma mesada por fazer tarefas como arrumar o teu quarto ou ajudar no jardim.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl mr-3">
                        🎁
                      </div>
                      <h4 className="font-semibold text-gray-800">Presentes</h4>
                    </div>
                    <p className="text-gray-700">
                      Às vezes as pessoas recebem dinheiro como presente em aniversários ou festas de familiares ou amigos.
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
                    Quando recebes dinheiro, tens três opções principais: podes gastá-lo, poupá-lo ou partilhá-lo dando a outros. Nas nossas próximas aulas, vamos aprender mais sobre poupar e gastar de forma inteligente!
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Questionário da Aula 1</h3>
                <p className="text-gray-700 mb-6">
                  Vamos ver o que aprendeste! Tenta responder a estas perguntas:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">1. Para que serve o dinheiro?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q1a" name="q1" className="mr-2" />
                        <label htmlFor="q1a" className="text-gray-700">Jogar jogos</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1b" name="q1" className="mr-2" />
                        <label htmlFor="q1b" className="text-gray-700">Comprar coisas de que precisamos e queremos</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1c" name="q1" className="mr-2" />
                        <label htmlFor="q1c" className="text-gray-700">Fazer projetos artísticos</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">2. Qual destas é uma NECESSIDADE?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q2a" name="q2" className="mr-2" />
                        <label htmlFor="q2a" className="text-gray-700">Um novo videojogo</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2b" name="q2" className="mr-2" />
                        <label htmlFor="q2b" className="text-gray-700">Uma tablete de chocolate</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2c" name="q2" className="mr-2" />
                        <label htmlFor="q2c" className="text-gray-700">Comida saudável para comer</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-2">3. Como é que a maioria dos adultos consegue dinheiro?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q3a" name="q3" className="mr-2" />
                        <label htmlFor="q3a" className="text-gray-700">Trabalhando num emprego</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3b" name="q3" className="mr-2" />
                        <label htmlFor="q3b" className="text-gray-700">Encontrando-o no chão</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3c" name="q3" className="mr-2" />
                        <label htmlFor="q3c" className="text-gray-700">Apanhando-o de uma árvore do dinheiro</label>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleSectionComplete} 
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors w-full"
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
                      Completaste a Aula 1: Introdução ao Dinheiro!
                    </p>
                    <div className="bg-white rounded-lg p-6 shadow-md inline-block">
                      <p className="text-lg font-medium text-blue-800 mb-2">Certificado de Conclusão</p>
                      <p className="text-gray-700">
                        Este certificado comprova que aprendeste com sucesso sobre o que é o dinheiro, necessidades vs. desejos, e de onde vem o dinheiro.
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
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            <ArrowLeft size={16} className="mr-2" /> Secção Anterior
          </button>
          
          {currentSection < totalSections ? (
            <button
              onClick={goToNextSection}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center"
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

interface SectionProps {
  mascotEmoji: string;
  mascotName: string;
}

interface Section3Props extends SectionProps {
  completedSections: number[];
  totalSections: number;
  handleSectionComplete: () => void;
}

export default ClassIntroduction;