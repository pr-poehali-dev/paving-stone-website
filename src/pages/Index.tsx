import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const tileTypes = [
    {
      name: "Брусчатка классическая",
      size: "200×100×60 мм",
      strength: "М300",
      frost: "F200",
      price: "от 450 ₽/м²",
      description: "Стандартная прямоугольная плитка для пешеходных зон"
    },
    {
      name: "Тротуарная плитка \"Волна\"",
      size: "240×120×60 мм",
      strength: "М350",
      frost: "F300",
      price: "от 520 ₽/м²",
      description: "Фигурная плитка с волнообразным рисунком"
    },
    {
      name: "Плитка \"Ромб\"",
      size: "170×208×60 мм",
      strength: "М300",
      frost: "F200",
      price: "от 480 ₽/м²",
      description: "Ромбовидная плитка для декоративной укладки"
    },
    {
      name: "Бордюрный камень",
      size: "500×200×60 мм",
      strength: "М400",
      frost: "F300",
      price: "от 180 ₽/шт",
      description: "Для обрамления тротуарных покрытий"
    },
    {
      name: "Плитка \"Паркет\"",
      size: "300×300×30 мм",
      strength: "М350",
      frost: "F250",
      price: "от 590 ₽/м²",
      description: "Имитация деревянного паркета из бетона"
    },
    {
      name: "Плитка \"Кирпич\"",
      size: "200×50×60 мм",
      strength: "М300",
      frost: "F200",
      price: "от 380 ₽/м²",
      description: "Имитация кирпичной кладки"
    }
  ];

  const advantages = [
    {
      icon: "Factory",
      title: "Современное производство",
      description: "Автоматизированные линии с контролем качества на каждом этапе"
    },
    {
      icon: "Shield",
      title: "Долговечность",
      description: "Срок службы более 25 лет при соблюдении технологии укладки"
    },
    {
      icon: "Snowflake",
      title: "Морозостойкость",
      description: "Выдерживает до 300 циклов замораживания-оттаивания"
    },
    {
      icon: "Truck",
      title: "Доставка по региону",
      description: "Собственный автопарк обеспечивает быструю доставку"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-gray-700" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">БетонСтрой</h1>
                <p className="text-sm text-gray-600">Завод тротуарной плитки</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900">Главная</a>
              <a href="#products" className="text-gray-700 hover:text-gray-900">Продукция</a>
              <a href="#production" className="text-gray-700 hover:text-gray-900">Производство</a>
              <a href="#contacts" className="text-gray-700 hover:text-gray-900">Контакты</a>
            </nav>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать звонок
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Выберите способ связи</DialogTitle>
                  <DialogDescription>
                    Как удобнее с вами связаться?
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="flex items-center justify-center gap-2 h-12"
                      onClick={() => window.open('https://wa.me/79788244503', '_blank')}
                    >
                      <Icon name="MessageCircle" size={20} className="text-green-600" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center justify-center gap-2 h-12"
                      onClick={() => window.open('https://t.me/betonstroy', '_blank')}
                    >
                      <Icon name="Send" size={20} className="text-blue-600" />
                      Telegram
                    </Button>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-3">Или заказать обратный звонок:</p>
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        placeholder="Ваше имя" 
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <input 
                        type="tel" 
                        placeholder="Телефон" 
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Удобное время звонка" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="now">Сейчас</SelectItem>
                          <SelectItem value="morning">Утром (9:00-12:00)</SelectItem>
                          <SelectItem value="afternoon">Днем (12:00-15:00)</SelectItem>
                          <SelectItem value="evening">Вечером (15:00-18:00)</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="w-full">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Заказать звонок
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Качественная тротуарная плитка собственного производства
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Более 15 лет производим долговечную тротуарную плитку. 
                Современное оборудование, контроль качества, доставка по региону.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Посмотреть каталог
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/c9b100fd-0667-467b-8cd4-eee40ddf2247.jpg" 
                alt="Производство тротуарной плитки"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={32} className="text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог продукции</h2>
            <p className="text-xl text-gray-600">Полный ассортимент тротуарной плитки с подробными характеристиками</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tileTypes.map((tile, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{tile.name}</CardTitle>
                    <Badge variant="secondary">{tile.price}</Badge>
                  </div>
                  <CardDescription>{tile.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Размер:</span>
                      <span className="text-sm font-medium">{tile.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Прочность:</span>
                      <span className="text-sm font-medium">{tile.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Морозостойкость:</span>
                      <span className="text-sm font-medium">{tile.frost}</span>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить в заказ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production */}
      <section id="production" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Современное производство</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Icon name="Cog" size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Автоматизированные линии</h3>
                    <p className="text-gray-600">Современное немецкое оборудование обеспечивает стабильное качество</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Icon name="TestTube" size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Контроль качества</h3>
                    <p className="text-gray-600">Лабораторный контроль на каждом этапе производства</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Icon name="Recycle" size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Экологичность</h3>
                    <p className="text-gray-600">Используем только сертифицированные материалы</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/634f5d73-9088-437c-b46b-a16260db6421.jpg" 
                alt="Образцы тротуарной плитки"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-gray-300" />
                  <div>
                    <p className="font-semibold">Адрес завода</p>
                    <p className="text-gray-300">Республика Крым, Джанкойский район, пер. Луначарского 1</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-gray-300" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-300">+7 (978) 824-45-03</p>
                    <p className="text-gray-300">+7 (978) 607-63-02</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-gray-300" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">tash-2021@mail.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-gray-300" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-gray-300">Пн-Сб: 8:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Заказать обратный звонок</CardTitle>
                  <CardDescription className="text-gray-300">
                    Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                        Заказать звонок
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-gray-800 border-gray-700">
                      <DialogHeader>
                        <DialogTitle className="text-white">Выберите способ связи</DialogTitle>
                        <DialogDescription className="text-gray-300">
                          Как удобнее с вами связаться?
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <Button 
                            variant="outline" 
                            className="flex items-center justify-center gap-2 h-12 bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                            onClick={() => window.open('https://wa.me/79788244503', '_blank')}
                          >
                            <Icon name="MessageCircle" size={20} className="text-green-400" />
                            WhatsApp
                          </Button>
                          <Button 
                            variant="outline" 
                            className="flex items-center justify-center gap-2 h-12 bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                            onClick={() => window.open('https://t.me/betonstroy', '_blank')}
                          >
                            <Icon name="Send" size={20} className="text-blue-400" />
                            Telegram
                          </Button>
                        </div>
                        
                        <div className="border-t border-gray-600 pt-4">
                          <p className="text-sm text-gray-300 mb-3">Или заказать обратный звонок:</p>
                          <div className="space-y-3">
                            <input 
                              type="text" 
                              placeholder="Ваше имя" 
                              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400"
                            />
                            <input 
                              type="tel" 
                              placeholder="Телефон" 
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
                            <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                              <Icon name="Phone" size={16} className="mr-2" />
                              Заказать звонок
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Как нас найти</h2>
            <p className="text-gray-600">Республика Крым, Джанкойский район, пер. Луначарского 1</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-blue-50 to-gray-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-red-500 w-8 h-8 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div className="bg-white px-6 py-4 rounded-xl shadow-lg border">
                    <h3 className="font-semibold text-gray-900">Завод БетонСтрой</h3>
                    <p className="text-sm text-gray-600">пер. Луначарского 1</p>
                    <p className="text-sm text-gray-600">Джанкойский район</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-green-300 rounded-full opacity-40"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-gray-300 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-blue-200 rounded-full opacity-30"></div>
              
              {/* Roads simulation */}
              <div className="absolute top-20 left-0 w-full h-1 bg-gray-300 opacity-60 transform rotate-12"></div>
              <div className="absolute bottom-20 left-0 w-full h-1 bg-gray-300 opacity-60 transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Icon name="Building2" size={24} />
                <span className="font-bold">БетонСтрой</span>
              </div>
              
              {/* Payment methods icons */}
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Р</span>
                </div>
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">В</span>
                </div>
                <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">С</span>
                </div>
                <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">V</span>
                </div>
                <div className="w-12 h-8 bg-yellow-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Т</span>
                </div>
                <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Ю</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2024 БетонСтрой. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;