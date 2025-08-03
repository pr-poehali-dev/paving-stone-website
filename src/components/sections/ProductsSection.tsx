import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  return (
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
  );
};

export default ProductsSection;