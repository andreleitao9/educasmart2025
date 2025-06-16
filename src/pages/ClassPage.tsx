import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, Award, Sparkles, Zap } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

const ClassPage = () => {
  const { mascot } = useMascot();
  const mascotEmoji = mascot === 'penny' ? '🦉' : mascot === 'coiny' ? '🐷' : '🦊';
  const mascotName = mascot === 'penny' ? 'Penny a Coruja' : mascot === 'coiny' ? 'Coiny o Porquinho' : 'Foxy a Raposa';

  return (
    <div className="bg-blue-50 min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Aulas de Literacia Financeira</h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Junta-te a {mascotName} numa aventura emocionante para aprenderes tudo sobre dinheiro através das nossas aulas interativas!
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-5xl md:text-6xl">{mascotEmoji}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Class Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <BookOpen size={28} className="text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">A Nossa Jornada de Aprendizagem</h2>
          </div>
          <p className="text-gray-700 mb-6">
            O nosso programa de literacia financeira foi desenvolvido especificamente para alunos do ensino básico. Através destas quatro aulas, as crianças irão construir uma base sólida na compreensão de conceitos financeiros de forma divertida e envolvente.
          </p>
          <p className="text-gray-700 mb-6">
            Cada aula contém atividades interativas, jogos e questionários para reforçar a aprendizagem. Os alunos podem acompanhar o seu progresso e ganhar certificados após a conclusão.
          </p>
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 px-4 rounded-r-md">
            <p className="text-blue-800 italic">
              "A melhor forma de ensinar as crianças sobre dinheiro é tornar a aprendizagem divertida e relevante para as suas vidas."
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8">Escolhe a Tua Aula</h3>

        <div className="space-y-8">
          <ClassModule
            number="1"
            title="Introdução ao Dinheiro"
            description="Nesta primeira aula, os alunos vão aprender o básico sobre o que é o dinheiro, como funciona e porque é importante no nosso dia a dia. Através de jogos e atividades interativas, as crianças vão compreender o conceito de moeda, a diferença entre necessidades e desejos, e o valor do dinheiro."
            skills={["Compreender o que é o dinheiro", "Reconhecer diferentes moedas", "Diferenciar necessidades de desejos", "Contagem básica e troco"]}
            color="blue"
            icon={<Star className="text-yellow-500" size={20} />}
            emoji="💰"
            path="/classes/introduction"
          />

          <ClassModule
            number="2"
            title="Poupar & Objetivos"
            description="Esta aula foca-se na importância de poupar dinheiro e definir objetivos financeiros. Os alunos vão aprender estratégias práticas de poupança, como definir objetivos alcançáveis e o conceito de paciência e gratificação adiada quando se trata de gerir dinheiro."
            skills={["Criar objetivos de poupança", "Compreender a importância de poupar", "Fazer um plano simples de poupança", "Acompanhar o progresso dos objetivos"]}
            color="green"
            icon={<Award className="text-green-500" size={20} />}
            emoji="🏦"
            path="/classes/saving"
          />

          <ClassModule
            number="3"
            title="Gastar com Inteligência"
            description="Os alunos vão aprender a tomar decisões inteligentes ao gastar dinheiro. Esta aula aborda a comparação de preços, compreensão do valor, criação de um orçamento simples e a diferença entre coisas que precisamos e coisas que queremos."
            skills={["Tomar decisões inteligentes de compra", "Comparar preços e valor", "Criar um orçamento simples", "Resistir a compras por impulso"]}
            color="purple"
            icon={<Sparkles className="text-purple-500" size={20} />}
            emoji="🛍️"
            path="/classes/spending"
          />

          <ClassModule
            number="4"
            title="Ganhar & Empreendedorismo"
            description="A última aula explora as várias formas como as crianças podem ganhar dinheiro e desenvolver uma mentalidade empreendedora. Os alunos vão aprender sobre diferentes trabalhos, formas criativas de ganhar dinheiro e conceitos básicos de negócios."
            skills={["Identificar formas de ganhar dinheiro", "Planear um negócio simples", "Compreender trabalho e valor", "Competências básicas de marketing e vendas"]}
            color="orange"
            icon={<Zap className="text-orange-500" size={20} />}
            emoji="💼"
            path="/classes/earning"
          />
        </div>
      </div>
    </div>
  );
};

interface ClassModuleProps {
  number: string;
  title: string;
  description: string;
  skills: string[];
  color: string;
  icon: React.ReactNode;
  emoji: string;
  path: string;
}

const ClassModule = ({
  number,
  title,
  description,
  skills,
  color,
  icon,
  emoji,
  path,
}: ClassModuleProps) => {
  const getBgColor = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 border-blue-200';
      case 'green':
        return 'bg-green-50 border-green-200';
      case 'purple':
        return 'bg-purple-50 border-purple-200';
      case 'orange':
        return 'bg-orange-50 border-orange-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const getBtnColor = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'green':
        return 'bg-green-600 hover:bg-green-700';
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-700';
      case 'orange':
        return 'bg-orange-600 hover:bg-orange-700';
      default:
        return 'bg-blue-600 hover:bg-blue-700';
    }
  };

  return (
    <div className={`${getBgColor()} rounded-xl border p-6 shadow-sm`}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4 pr-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm mr-3 text-lg">
              {emoji}
            </div>
            <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 shadow-sm flex items-center">
              Aula {number} {icon}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-700 mb-6">{description}</p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Competências que Vais Aprender:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="md:w-1/4 flex flex-col items-center justify-center space-y-4">
          <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-md">
            <span className="text-4xl">{emoji}</span>
          </div>
          <Link
            to={path}
            className={`${getBtnColor()} text-white font-medium py-2 px-4 rounded-full shadow-md transition-colors flex items-center justify-center w-full`}
          >
            Começar Aula <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;