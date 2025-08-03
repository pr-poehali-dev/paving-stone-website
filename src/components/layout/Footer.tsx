import Icon from "@/components/ui/icon";
import { Link } from 'react-router-dom';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Icon name="Building2" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">ПлиткаСтрой</span>
            </div>
            <p className="text-sm">
              Ведущий производитель тротуарной плитки в Крыму. 
              8 лет опыта, тысячи довольных клиентов.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link></li>
              <li><button onClick={() => scrollToSection('advantages')} className="hover:text-white transition-colors">Преимущества</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Контакты</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm">
              <p>+7 (978) 237-71-00</p>
              <p>+7 (978) 237-74-00</p>
              <p>tash-2021@mail.ru</p>
              <p>Республика Крым, г. Джанкой, с. Днепровка, пер. Луначарского 1</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Таш Крым. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;