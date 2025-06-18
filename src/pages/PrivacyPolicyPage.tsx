import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, Calendar } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link 
              to="/" 
              className="mr-3 bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            A sua privacidade é importante para nós. Esta política explica como recolhemos, usamos e protegemos as suas informações.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Shield size={28} className="text-blue-600 mr-3" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Política de Privacidade do Educa$mart</h2>
              <p className="text-gray-600">Última atualização: Janeiro de 2025</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introdução</h3>
              <p className="text-gray-700 mb-4">
                O Educa$mart está comprometido em proteger a privacidade dos utilizadores da nossa plataforma de literacia financeira. 
                Esta Política de Privacidade descreve como recolhemos, utilizamos, armazenamos e protegemos as suas informações pessoais 
                quando utiliza o nosso website e serviços.
              </p>
              <p className="text-gray-700">
                Ao utilizar os nossos serviços, concorda com as práticas descritas nesta política. Se não concordar com esta política, 
                por favor não utilize os nossos serviços.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-4">
                <Eye size={20} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">2. Informações que Recolhemos</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">2.1 Informações Fornecidas Diretamente</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nome e informações de contacto quando se regista ou nos contacta</li>
                    <li>• Informações educacionais (escola, ano letivo) para personalizar a experiência</li>
                    <li>• Progresso nas aulas e resultados de questionários</li>
                    <li>• Feedback e comentários que nos envie</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">2.2 Informações Recolhidas Automaticamente</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dados de utilização (páginas visitadas, tempo gasto, cliques)</li>
                    <li>• Informações do dispositivo (tipo de dispositivo, sistema operativo, navegador)</li>
                    <li>• Endereço IP e localização geral</li>
                    <li>• Cookies e tecnologias similares</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center mb-4">
                <Users size={20} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">3. Como Utilizamos as Suas Informações</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Finalidades Principais:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Fornecer e melhorar os nossos serviços educacionais</li>
                    <li>• Personalizar a experiência de aprendizagem</li>
                    <li>• Acompanhar o progresso educacional</li>
                    <li>• Comunicar sobre atualizações e novos conteúdos</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Finalidades Secundárias:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Análise e melhoria da plataforma</li>
                    <li>• Prevenção de fraude e segurança</li>
                    <li>• Cumprimento de obrigações legais</li>
                    <li>• Investigação e desenvolvimento</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <div className="flex items-center mb-4">
                <Lock size={20} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">4. Proteção de Dados</h3>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger as suas informações pessoais 
                  contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      🔒
                    </div>
                    <h5 className="font-semibold text-gray-800">Encriptação</h5>
                    <p className="text-sm text-gray-600">Dados encriptados em trânsito e em repouso</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      🛡️
                    </div>
                    <h5 className="font-semibold text-gray-800">Acesso Controlado</h5>
                    <p className="text-sm text-gray-600">Acesso limitado apenas a pessoal autorizado</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      📊
                    </div>
                    <h5 className="font-semibold text-gray-800">Monitorização</h5>
                    <p className="text-sm text-gray-600">Monitorização contínua de segurança</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Privacidade de Menores</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Proteção Especial para Crianças:</strong> Reconhecemos que a nossa plataforma é utilizada por crianças. 
                  Tomamos medidas especiais para proteger a privacidade dos menores de 13 anos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Requeremos consentimento parental para crianças menores de 13 anos</li>
                  <li>• Limitamos a recolha de dados pessoais de menores</li>
                  <li>• Não partilhamos informações de menores com terceiros para marketing</li>
                  <li>• Os pais podem rever, modificar ou eliminar os dados dos seus filhos</li>
                </ul>
              </div>
            </section>

            {/* Sharing Information */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Partilha de Informações</h3>
              <p className="text-gray-700 mb-4">
                Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros para fins comerciais. 
                Podemos partilhar informações apenas nas seguintes circunstâncias:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-gray-800">Prestadores de Serviços:</strong>
                    <span className="text-gray-700"> Com fornecedores que nos ajudam a operar a plataforma (hosting, análise, suporte)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-gray-800">Obrigações Legais:</strong>
                    <span className="text-gray-700"> Quando exigido por lei ou para proteger direitos legais</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-gray-800">Consentimento:</strong>
                    <span className="text-gray-700"> Com o seu consentimento explícito</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Os Seus Direitos</h3>
              <p className="text-gray-700 mb-4">
                Tem os seguintes direitos relativamente aos seus dados pessoais:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Direitos de Acesso e Controlo</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Aceder aos seus dados pessoais</li>
                    <li>• Corrigir informações incorretas</li>
                    <li>• Eliminar os seus dados</li>
                    <li>• Limitar o processamento</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Direitos de Portabilidade</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Exportar os seus dados</li>
                    <li>• Transferir para outro serviço</li>
                    <li>• Retirar consentimento</li>
                    <li>• Apresentar reclamações</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Cookies e Tecnologias Similares</h3>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies e tecnologias similares para melhorar a sua experiência na nossa plataforma:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Cookies Essenciais</h4>
                  <p className="text-gray-700 text-sm">Necessários para o funcionamento básico da plataforma</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Cookies de Funcionalidade</h4>
                  <p className="text-gray-700 text-sm">Lembram as suas preferências e melhoram a experiência</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Cookies de Análise</h4>
                  <p className="text-gray-700 text-sm">Ajudam-nos a compreender como utiliza a plataforma</p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <div className="flex items-center mb-4">
                <Calendar size={20} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">9. Retenção de Dados</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Mantemos as suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Dados de conta:</strong> Enquanto a conta estiver ativa</li>
                  <li>• <strong>Progresso educacional:</strong> 3 anos após a última atividade</li>
                  <li>• <strong>Dados de contacto:</strong> Até retirar o consentimento</li>
                  <li>• <strong>Dados de análise:</strong> Agregados e anonimizados permanentemente</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <div className="flex items-center mb-4">
                <Mail size={20} className="text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">10. Contacte-nos</h3>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Se tiver questões sobre esta Política de Privacidade ou sobre como tratamos os seus dados pessoais, 
                  pode contactar-nos através de:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      📧
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-gray-800">privacidade@educasmart.exemplo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      📍
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Morada</p>
                      <p className="text-gray-800">Educa$mart, Rua da Educação, 123, 1000-001 Lisboa, Portugal</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">11. Atualizações desta Política</h3>
              <p className="text-gray-700">
                Podemos atualizar esta Política de Privacidade periodicamente. Quando o fizermos, iremos notificá-lo através 
                da nossa plataforma ou por email. A data da última atualização será sempre indicada no topo desta página. 
                Recomendamos que reveja esta política regularmente para se manter informado sobre como protegemos as suas informações.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;