import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
              className="border-white text-white bg-white/10 hover:bg-white hover:text-blue-700 text-lg px-8 py-3 backdrop-blur-sm"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;