import React from 'react';
import { Download, Book, Users, FileText, Printer, Calendar, Award, Mail } from 'lucide-react';

const ResourcesPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Recursos para Pais e Professores</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Materiais de apoio para melhorar a jornada de literacia financeira em casa e na sala de aula.
          </p>
        </div>
      </div>

      {/* Resources Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ResourceCard
            title="Guias para Professores"
            description="Guias completos para implementar o programa de literacia financeira na sala de aula."
            icon={<Book size={24} className="text-blue-600" />}
            color="blue"
          />
          <ResourceCard
            title="Recursos para Pais"
            description="Ajude a reforçar conceitos financeiros em casa com estas atividades para toda a família."
            icon={<Users size={24} className="text-green-600" />}
            color="green"
          />
          <ResourceCard
            title="Fichas de Trabalho"
            description="Imprima estas fichas para proporcionar prática adicional aos alunos."
            icon={<Printer size={24} className="text-purple-600" />}
            color="purple"
          />
        </div>

        {/* Downloadable Materials */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Download size={24} className="text-blue-600 mr-2" />
            Materiais para Download
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Aula 1: Introdução ao Dinheiro</h3>
              <DownloadItem 
                title="Plano de Aula: Introdução ao Dinheiro" 
                type="PDF" 
                size="1.2 MB" 
              />
              <DownloadItem 
                title="Ficha de Reconhecimento de Moedas" 
                type="PDF" 
                size="0.8 MB" 
              />
              <DownloadItem 
                title="Atividade Necessidades vs. Desejos" 
                type="PDF" 
                size="1.0 MB" 
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Aula 2: Poupar & Objetivos</h3>
              <DownloadItem 
                title="Plano de Aula: Poupar & Objetivos" 
                type="PDF" 
                size="1.3 MB" 
              />
              <DownloadItem 
                title="Registo de Objetivos de Poupança" 
                type="PDF" 
                size="0.7 MB" 
              />
              <DownloadItem 
                title="Atividade Mealheiro para Recortar" 
                type="PDF" 
                size="1.5 MB" 
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Aula 3: Gastar com Inteligência</h3>
              <DownloadItem 
                title="Plano de Aula: Gastar com Inteligência" 
                type="PDF" 
                size="1.2 MB" 
              />
              <DownloadItem 
                title="Ficha de Orçamento" 
                type="PDF" 
                size="0.9 MB" 
              />
              <DownloadItem 
                title="Cartões do Jogo das Compras" 
                type="PDF" 
                size="1.1 MB" 
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Aula 4: Ganhar & Empreendedorismo</h3>
              <DownloadItem 
                title="Plano de Aula: Ganhar & Empreendedorismo" 
                type="PDF" 
                size="1.3 MB" 
              />
              <DownloadItem 
                title="Modelo de Plano de Negócios" 
                type="PDF" 
                size="0.8 MB" 
              />
              <DownloadItem 
                title="Atividade da Banca de Limonada" 
                type="PDF" 
                size="1.2 MB" 
              />
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Calendar size={20} className="text-blue-600 mr-2" />
              Workshops Futuros
            </h3>
            <div className="space-y-4">
              <WorkshopItem
                title="Ensinar Conceitos Financeiros a Jovens Alunos"
                date="15 de Outubro de 2025"
                time="16:00 - 17:30"
                location="Webinar Virtual"
              />
              <WorkshopItem
                title="Integrar a Literacia Financeira na Sala de Aula"
                date="8 de Novembro de 2025"
                time="15:30 - 17:00"
                location="Webinar Virtual"
              />
              <WorkshopItem
                title="Noite de Literacia Financeira em Família"
                date="3 de Dezembro de 2025"
                time="18:00 - 19:30"
                location="Webinar Virtual"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Award size={20} className="text-blue-600 mr-2" />
              Programa de Certificação
            </h3>
            <p className="text-gray-700 mb-4">
              Os professores podem tornar-se educadores certificados Educa$mart através do nosso programa de certificação abrangente.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Completar 4 módulos de formação online</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Implementar as aulas na sua sala</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Submeter portfólio de trabalhos dos alunos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Receber certificação oficial de Educador Educa$mart</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Mail size={24} className="text-blue-600 mr-2" />
            Contacte-nos
          </h2>
          <p className="text-gray-700 mb-6">
            Tem dúvidas sobre os nossos recursos ou precisa de apoio adicional? A nossa equipa de educação está aqui para ajudar!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Equipa de Apoio Educativo</h3>
              <p className="text-gray-700 mb-4">
                A nossa dedicada equipa de especialistas em educação está disponível de segunda a sexta-feira, das 9h às 17h.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    📧
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800">educacao@educa$mart.exemplo.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <p className="text-gray-800">+351 210 123 456</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    🗓️
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Horário de Atendimento</p>
                    <p className="text-gray-800">Segunda a Sexta, 9h - 17h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ResourceCard = ({ title, description, icon, color }: ResourceCardProps) => {
  const getBgColor = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 border-blue-200';
      case 'green':
        return 'bg-green-50 border-green-200';
      case 'purple':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className={`${getBgColor()} rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

interface DownloadItemProps {
  title: string;
  type: string;
  size: string;
}

const DownloadItem = ({ title, type, size }: DownloadItemProps) => (
  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
    <div className="flex items-center">
      <FileText size={20} className="text-blue-600 mr-3" />
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">
          {type} • {size}
        </p>
      </div>
    </div>
    <button className="text-blue-600 hover:text-blue-800 transition-colors">
      <Download size={20} />
    </button>
  </div>
);

interface WorkshopItemProps {
  title: string;
  date: string;
  time: string;
  location: string;
}

const WorkshopItem = ({ title, date, time, location }: WorkshopItemProps) => (
  <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-md">
    <h4 className="font-semibold text-gray-800">{title}</h4>
    <div className="text-sm text-gray-600 mt-1">
      <p>📅 {date}</p>
      <p>🕒 {time}</p>
      <p>📍 {location}</p>
    </div>
  </div>
);

export default ResourcesPage;