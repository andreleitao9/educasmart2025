import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Educa$mart</h3>
            <p className="text-blue-100">
              Tornando a literacia financeira divertida e acessível para alunos do ensino básico.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon="🔵" label="Twitter" />
              <SocialIcon icon="🟣" label="Instagram" />
              <SocialIcon icon="🔴" label="YouTube" />
              <SocialIcon icon="🟦" label="Facebook" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterLink to="/" text="Início" />
              <FooterLink to="/classes" text="Aulas" />
              <FooterLink to="/resources" text="Recursos" />
              <FooterLink to="#help" text="Ajuda" />
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Aulas</h4>
            <ul className="space-y-2">
              <FooterLink to="/classes/introduction" text="Introdução ao Dinheiro" />
              <FooterLink to="/classes/saving" text="Poupar & Objetivos" />
              <FooterLink to="/classes/spending" text="Gastar com Inteligência" />
              <FooterLink to="/classes/earning" text="Ganhar & Empreendedorismo" />
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Para Pais & Professores</h4>
            <ul className="space-y-2">
              <FooterLink to="#teaching-materials" text="Materiais de Ensino" />
              <FooterLink to="#lesson-plans" text="Planos de Aula" />
              <FooterLink to="#progress-tracking" text="Acompanhamento do Progresso" />
              <FooterLink to="#contact" text="Contacte-nos" />
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-blue-600 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>&copy; {currentYear} Educa$mart. Todos os direitos reservados.</p>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 items-center">
            <p>
              Feito com <Heart size={14} className="inline text-red-400" /> para jovens aprendizes
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="#privacy" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link to="#terms" className="hover:text-white transition-colors">
                Termos de Utilização
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  text: string;
}

const FooterLink = ({ to, text }: FooterLinkProps) => (
  <li>
    <Link
      to={to}
      className="text-blue-200 hover:text-white transition-colors"
    >
      {text}
    </Link>
  </li>
);

interface SocialIconProps {
  icon: string;
  label: string;
}

const SocialIcon = ({ icon, label }: SocialIconProps) => (
  <a
    href="#"
    aria-label={label}
    className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;