import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/supabase';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const handlePhoneReveal = (phone: string) => {
    trackEvent('phone_reveal', { phone });
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Icon name="Building2" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ПлиткаСтрой</h1>
              <p className="text-xs text-gray-500">Тротуарная плитка премиум класса</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Продукция
            </button>
            <button 
              onClick={() => scrollToSection('advantages')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span className="hidden md:inline">Узнать номер</span>
                  <Icon name="ChevronDown" size={14} className="ml-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Выберите способ связи</DialogTitle>
                  <DialogDescription>
                    Звонки принимаются с 8:00 до 17:00, с понедельника по субботу
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-gray-700">Телефоны для звонков:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon name="Phone" size={18} className="text-blue-600" />
                          <span className="font-medium">+7 (978) 237-71-00</span>
                        </div>
                        <Button size="sm" onClick={() => {
                          handlePhoneReveal('+79782377100');
                          window.open('tel:+79782377100');
                        }}>
                          Позвонить
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon name="Phone" size={18} className="text-blue-600" />
                          <span className="font-medium">+7 (978) 237-74-00</span>
                        </div>
                        <Button size="sm" onClick={() => {
                          handlePhoneReveal('+79782377400');
                          window.open('tel:+79782377400');
                        }}>
                          Позвонить
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-sm text-gray-700 mb-3">Мессенджеры:</h4>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-green-600 border-green-200 hover:bg-green-50"
                        onClick={() => window.open('https://wa.me/79782377100', '_blank')}
                      >
                        <Icon name="MessageCircle" size={18} className="mr-3" />
                        WhatsApp: +7 (978) 237-71-00
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-blue-600 border-blue-200 hover:bg-blue-50"
                        onClick={() => window.open('https://t.me/tashcrimea', '_blank')}
                      >
                        <Icon name="Send" size={18} className="mr-3" />
                        Telegram канал
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Link to="/catalog">
              <Button variant="outline" size="sm">
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Каталог
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;