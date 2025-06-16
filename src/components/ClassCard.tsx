import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ClassCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  path: string;
  emoji: string;
}

const ClassCard = ({ title, description, icon, color, path, emoji }: ClassCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 border-blue-200 hover:bg-blue-50';
      case 'green':
        return 'bg-green-100 border-green-200 hover:bg-green-50';
      case 'purple':
        return 'bg-purple-100 border-purple-200 hover:bg-purple-50';
      case 'orange':
        return 'bg-orange-100 border-orange-200 hover:bg-orange-50';
      default:
        return 'bg-blue-100 border-blue-200 hover:bg-blue-50';
    }
  };

  return (
    <Link
      to={path}
      className={`${getColorClasses()} rounded-xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-2xl">
          {emoji}
        </div>
        <div>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="flex items-center justify-end text-sm font-medium mt-2">
        <span className={`text-${color}-700`}>Start Learning</span>
        <ArrowRight
          size={16}
          className={`ml-1 text-${color}-700`}
        />
      </div>
    </Link>
  );
};

export default ClassCard;