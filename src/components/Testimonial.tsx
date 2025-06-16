import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const Testimonial = ({ quote, author, role, avatar }: TestimonialProps) => {
  return (
    <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-xl mr-3">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;