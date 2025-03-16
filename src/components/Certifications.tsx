import React from 'react';
import { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">取得資格</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            これまでに取得したスキルや知識を証明する資格の一覧です。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                {cert.icon && <div className="mr-4">{cert.icon}</div>}
                <h3 className="text-xl font-semibold text-gray-800">{cert.name}</h3>
              </div>
              <p className="text-gray-600 mb-3">{cert.issuer}</p>
              <div className="text-sm text-gray-500">取得日: {cert.date}</div>
              {cert.description && (
                <p className="mt-4 text-gray-700">{cert.description}</p>
              )}
              {cert.credentialId && (
                <div className="mt-2 text-sm text-gray-500">
                  資格ID: {cert.credentialId}
                </div>
              )}
              {cert.url && (
                <a 
                  href={cert.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-navy-700 hover:text-navy-900 transition-colors"
                >
                  資格を確認する →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;