import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
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
            <Button variant="outline">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
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
                    <p className="text-gray-300">г. Москва, Промышленная ул., 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-gray-300" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-gray-300" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">info@betonstroy.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-gray-300" />
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
                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                    Заказать звонок
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Building2" size={24} />
              <span className="font-bold">БетонСтрой</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 БетонСтрой. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;