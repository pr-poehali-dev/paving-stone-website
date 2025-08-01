import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from 'react-router-dom';

interface CallRequest {
  id: string;
  name: string;
  phone: string;
  time: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'completed';
}

const Index = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [callRequest, setCallRequest] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCallRequest = () => {
    if (!callRequest.name || !callRequest.phone || !selectedTime) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      const newRequest: CallRequest = {
        id: Date.now().toString(),
        name: callRequest.name,
        phone: callRequest.phone,
        time: selectedTime,
        timestamp: new Date().toLocaleString('ru-RU'),
        status: 'new'
      };

      const existingRequests = JSON.parse(localStorage.getItem('callRequests') || '[]');
      localStorage.setItem('callRequests', JSON.stringify([...existingRequests, newRequest]));

      setIsSubmitting(false);
      setShowSuccess(true);
      setCallRequest({ name: "", phone: "" });
      setSelectedTime("");

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
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
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              🏆 8 лет успешной работы
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Тротуарная плитка
              <span className="block text-blue-200">премиум качества</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Создаем красивые и долговечные покрытия для вашего участка. 
              Собственное производство, гарантия качества, быстрая доставка по Москве и области.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/catalog">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-3">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Посмотреть каталог
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">О нашей компании</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Уже 8 лет мы производим качественную тротуарную плитку и помогаем создавать 
              красивые и функциональные покрытия для частных домов и коммерческих объектов.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Собственное производство</h3>
              <p className="text-gray-600">Контролируем качество на каждом этапе производства</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">8 лет гарантии</h3>
              <p className="text-gray-600">Уверены в качестве нашей продукции</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем по Москве и области в кратчайшие сроки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша продукция</h2>
            <p className="text-lg text-gray-600">
              Широкий ассортимент тротуарной плитки для любых задач
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-3 flex items-center justify-center">
                  <Icon name="Square" size={48} className="text-gray-600" />
                </div>
                <CardTitle className="text-lg">Новый город</CardTitle>
                <CardDescription>Классическая форма для городских проектов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">от 1200 ₽/м²</span>
                  <Badge variant="secondary">Хит продаж</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg mb-3 flex items-center justify-center">
                  <Icon name="Hexagon" size={48} className="text-amber-700" />
                </div>
                <CardTitle className="text-lg">Старый город</CardTitle>
                <CardDescription>Традиционный дизайн с эффектом старины</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">от 1350 ₽/м²</span>
                  <Badge variant="outline">Премиум</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gradient-to-br from-red-300 to-red-400 rounded-lg mb-3 flex items-center justify-center">
                  <Icon name="Grid3x3" size={48} className="text-red-700" />
                </div>
                <CardTitle className="text-lg">Кирпич-брусчатка</CardTitle>
                <CardDescription>Имитация натурального кирпича</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">от 1400 ₽/м²</span>
                  <Badge variant="outline">Эксклюзив</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg mb-3 flex items-center justify-center">
                  <Icon name="Minus" size={48} className="text-slate-700" />
                </div>
                <CardTitle className="text-lg">Бордюры</CardTitle>
                <CardDescription>Для оформления краев и переходов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">от 150 ₽/п.м</span>
                  <Badge variant="secondary">Необходимо</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/catalog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Смотреть весь каталог
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600">
              Наши конкурентные преимущества говорят сами за себя
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="Award" size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Высокое качество</h3>
                <p className="text-gray-600">Используем только качественные материалы и современные технологии производства</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="Clock" size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Быстрое производство</h3>
                <p className="text-gray-600">Собственная производственная база позволяет выполнять заказы в кратчайшие сроки</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="Palette" size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Большой выбор</h3>
                <p className="text-gray-600">Более 50 видов плитки различных форм, размеров и цветов</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="DollarSign" size={24} className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Выгодные цены</h3>
                <p className="text-gray-600">Прямые поставки с производства без наценок посредников</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="HeadphonesIcon" size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Поддержка 24/7</h3>
                <p className="text-gray-600">Наши специалисты всегда готовы помочь с выбором и консультацией</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Укладка под ключ</h3>
                <p className="text-gray-600">Предоставляем услуги профессиональной укладки с гарантией</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-gray-300 mb-8">
                Готовы ответить на все ваши вопросы и помочь с выбором идеального решения для вашего проекта.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">info@plitkastroy.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-300">г. Москва, ул. Производственная, д. 15</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-gray-300">Пн-Пт: 8:00-18:00, Сб: 9:00-15:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Рассчитать стоимость</CardTitle>
                  <CardDescription className="text-gray-300">
                    Оставьте заявку и получите персональный расчет
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Площадь (м²)" 
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                    />
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Тип плитки" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="new-city" className="text-white">Новый город</SelectItem>
                        <SelectItem value="old-city" className="text-white">Старый город</SelectItem>
                        <SelectItem value="brick" className="text-white">Кирпич-брусчатка</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator className="bg-gray-600" />
                  
                  <div>
                    <p className="text-sm text-gray-300 mb-3">Или заказать обратный звонок:</p>
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        placeholder="Ваше имя" 
                        value={callRequest.name}
                        onChange={(e) => setCallRequest({...callRequest, name: e.target.value})}
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400"
                      />
                      <input 
                        type="tel" 
                        placeholder="Телефон" 
                        value={callRequest.phone}
                        onChange={(e) => setCallRequest({...callRequest, phone: e.target.value})}
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400"
                      />
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Удобное время звонка" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="now" className="text-white">Сейчас</SelectItem>
                          <SelectItem value="morning" className="text-white">Утром (9:00-12:00)</SelectItem>
                          <SelectItem value="afternoon" className="text-white">Днем (12:00-15:00)</SelectItem>
                          <SelectItem value="evening" className="text-white">Вечером (15:00-18:00)</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      {showSuccess ? (
                        <div className="flex items-center justify-center p-4 bg-green-100 rounded-lg">
                          <div className="flex items-center space-x-2 text-green-800">
                            <div className="animate-scale-in">
                              <Icon name="CheckCircle" size={24} className="text-green-600" />
                            </div>
                            <span className="font-medium">Заказ принят! Ожидайте звонка</span>
                          </div>
                        </div>
                      ) : (
                        <Button 
                          className="w-full bg-white text-gray-900 hover:bg-gray-100"
                          onClick={handleCallRequest}
                          disabled={isSubmitting || !callRequest.name || !callRequest.phone || !selectedTime}
                        >
                          {isSubmitting ? (
                            <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                          ) : (
                            <Icon name="Phone" size={16} className="mr-2" />
                          )}
                          {isSubmitting ? "Отправка..." : "Заказать звонок"}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                Ведущий производитель тротуарной плитки в Москве и области. 
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
                <p>+7 (495) 123-45-67</p>
                <p>info@plitkastroy.ru</p>
                <p>г. Москва, ул. Производственная, д. 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
            <p>&copy; 2024 ПлиткаСтрою. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;