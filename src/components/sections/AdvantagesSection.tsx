import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  return (
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
              <h3 className="text-lg font-semibold mb-2">Консультации</h3>
              <p className="text-gray-600">Консультируем по выбору плитки с 8:00 до 17:00, пн-сб</p>
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
  );
};

export default AdvantagesSection;