import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
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
            <p className="text-gray-600">Доставляем по всей России и в новые регионы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;