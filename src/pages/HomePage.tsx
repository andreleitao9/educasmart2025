import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Sparkles, Zap } from 'lucide-react';
import { useMascot } from '../context/MascotContext';
import ClassCard from '../components/ClassCard';
import Testimonial from '../components/Testimonial';

const HomePage = () => {
  const { mascot, setMascot } = useMascot();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMascotChange = (newMascot: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setMascot(newMascot);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fadeIn">
                Aprender sobre Dinheiro é Divertido!
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg animate-fadeInDelay">
                Participa nas nossas aulas interativas de literacia financeira desenvolvidas
                especialmente para alunos do ensino básico.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/classes"
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Começar a Aprender <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/resources"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-full inline-flex items-center justify-center transition-colors duration-300"
                >
                  Recursos para Pais
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className={`w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                    isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                  }`}
                >
                  <span className="text-8xl md:text-9xl">
                    {mascot === 'penny' ? '🦉' : mascot === 'coiny' ? '🐷' : '🦊'}
                  </span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-800 rounded-full py-2 px-6 shadow-lg">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleMascotChange('penny')}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        mascot === 'penny'
                          ? 'bg-yellow-400 scale-110'
                          : 'bg-blue-700 hover:bg-blue-600'
                      }`}
                      aria-label="Escolher Penny a Coruja"
                    >
                      🦉
                    </button>
                    <button
                      onClick={() => handleMascotChange('coiny')}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        mascot === 'coiny'
                          ? 'bg-yellow-400 scale-110'
                          : 'bg-blue-700 hover:bg-blue-600'
                      }`}
                      aria-label="Escolher Coiny o Porquinho"
                    >
                      🐷
                    </button>
                    <button
                      onClick={() => handleMascotChange('foxy')}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        mascot === 'foxy'
                          ? 'bg-yellow-400 scale-110'
                          : 'bg-blue-700 hover:bg-blue-600'
                      }`}
                      aria-label="Escolher Foxy a Raposa"
                    >
                      🦊
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">As Nossas Aulas de Finanças</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aprende competências essenciais sobre dinheiro através das nossas aulas divertidas e interativas, desenvolvidas para alunos do ensino básico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ClassCard
              title="Introdução ao Dinheiro"
              description="Aprende o que é o dinheiro, como funciona e porque é importante."
              icon={<Star className="text-yellow-500" size={24} />}
              color="blue"
              path="/classes/introduction"
              emoji="💰"
            />
            <ClassCard
              title="Poupar & Objetivos"
              description="Descobre a importância de poupar e como definir objetivos financeiros."
              icon={<Award className="text-green-500" size={24} />}
              color="green"
              path="/classes/saving"
              emoji="🏦"
            />
            <ClassCard
              title="Gastar com Inteligência"
              description="Aprende a fazer escolhas inteligentes ao gastar o teu dinheiro."
              icon={<Sparkles className="text-purple-500" size={24} />}
              color="purple"
              path="/classes/spending"
              emoji="🛍️"
            />
            <ClassCard
              title="Ganhar & Empreendedorismo"
              description="Explora formas de ganhar dinheiro e iniciar pequenos negócios."
              icon={<Zap className="text-orange-500" size={24} />}
              color="orange"
              path="/classes/earning"
              emoji="💼"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/classes"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver todas as aulas <ArrowRight className="ml-1" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Porque as Crianças Adoram as Nossas Aulas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A nossa abordagem envolvente torna a aprendizagem sobre dinheiro divertida e eficaz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Aprendizagem Interativa"
              description="Atividades e jogos envolventes que tornam a aprendizagem sobre dinheiro divertida e memorável."
              emoji="🎮"
            />
            <FeatureCard
              title="Conteúdo Adequado"
              description="Lições apropriadas à idade, desenvolvidas especificamente para alunos do ensino básico."
              emoji="📚"
            />
            <FeatureCard
              title="Acompanhamento do Progresso"
              description="Acompanha o teu percurso de aprendizagem e ganha certificados ao completar as aulas."
              emoji="🏆"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">O que Dizem os Alunos e Professores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ouve o que os alunos e professores têm a dizer sobre as nossas aulas de literacia financeira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="Adoro aprender sobre dinheiro com a Penny a Coruja! Já comecei a poupar a minha mesada para uma bicicleta nova."
              author="Maria, 9 anos"
              role="Aluna"
              avatar="👧"
            />
            <Testimonial
              quote="Os jogos interativos tornam o ensino de conceitos financeiros muito mais fácil. Os meus alunos adoram estas aulas!"
              author="Prof. Silva"
              role="Professor do 4º ano"
              avatar="👨‍🏫"
            />
            <Testimonial
              quote="Aprendi a montar a minha própria banca de limonada! Foi super divertido e ganhei 15€!"
              author="João, 10 anos"
              role="Aluno"
              avatar="👦"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Aprender sobre Dinheiro?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junta-te a {mascot === 'penny' ? 'Penny a Coruja' : mascot === 'coiny' ? 'Coiny o Porquinho' : 'Foxy a Raposa'} numa aventura emocionante para te tornares esperto com o dinheiro!
          </p>
          <Link
            to="/classes"
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Começar a Aventura <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  emoji: string;
}

const FeatureCard = ({ title, description, emoji }: FeatureCardProps) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4">
      {emoji}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default HomePage;