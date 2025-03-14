import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Contact as ContactType } from '../types';

interface ContactProps {
  contact: ContactType;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // 実際のフォーム送信ロジックをここに追加
    alert('メッセージが送信されました！（デモンストレーションのみ）');
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">
          {contact.headline}
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          {contact.description}
        </p>
        
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 max-w-4xl mx-auto">
          <div className="md:w-1/3" data-aos="fade-up">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
                <FaEnvelope className="text-blue-500 text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">メール</h3>
                <p className="text-gray-600 text-center">
                  <a href={`mailto:${contact.email}`} className="hover:text-blue-600 transition-colors">
                    {contact.email}
                  </a>
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
                <FaPhone className="text-blue-500 text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">電話</h3>
                <p className="text-gray-600 text-center">
                  <a href={`tel:${contact.phone}`} className="hover:text-blue-600 transition-colors">
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3" data-aos="fade-up" data-aos-delay="200">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 rounded-lg shadow-md p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">お名前</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="お名前"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">メールアドレス</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="メールアドレス"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">件名</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="件名"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">メッセージ</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="メッセージ内容"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 w-full"
              >
                送信
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;