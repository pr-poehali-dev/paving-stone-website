import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  strength: string;
  frost: string;
  price: number;
  colors: string[];
  delivery: string;
  description: string;
  image: string;
}

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    { id: "all", name: "Все товары" },
    { id: "new-city", name: "Новый город" },
    { id: "old-city", name: "Старый город" },
    { id: "brick", name: "Кирпич-брусчатка" },
    { id: "borders", name: "Бордюры" }
  ];

  const products: Product[] = [
    {
      id: "1",
      name: "Брусчатка Новый город",
      category: "new-city",
      size: "200×100×60 мм",
      strength: "М300",
      frost: "F200",
      price: 450,
      colors: ["Серый", "Красный", "Желтый"],
      delivery: "1-2 дня",
      description: "Современная брусчатка для городских тротуаров",
      image: "/img/634f5d73-9088-437c-b46b-a16260db6421.jpg"
    },
    {
      id: "2",
      name: "Плитка Старый город",
      category: "old-city",
      size: "180×120×60 мм",
      strength: "М350",
      frost: "F300",
      price: 520,
      colors: ["Серый", "Коричневый", "Бежевый"],
      delivery: "2-3 дня",
      description: "Классическая плитка в стиле старого города",
      image: "/img/634f5d73-9088-437c-b46b-a16260db6421.jpg"
    },
    {
      id: "3",
      name: "Кирпич-брусчатка",
      category: "brick",
      size: "200×50×60 мм",
      strength: "М300",
      frost: "F200",
      price: 380,
      colors: ["Красный", "Коричневый", "Серый"],
      delivery: "1-2 дня",
      description: "Имитация кирпичной кладки",
      image: "/img/634f5d73-9088-437c-b46b-a16260db6421.jpg"
    },
    {
      id: "4",
      name: "Бордюр дорожный",
      category: "borders",
      size: "500×200×60 мм",
      strength: "М400",
      frost: "F300",
      price: 180,
      colors: ["Серый"],
      delivery: "1-2 дня",
      description: "Прочный бордюрный камень для дорог",
      image: "/img/634f5d73-9088-437c-b46b-a16260db6421.jpg"
    },
    {
      id: "5",
      name: "Волна Новый город",
      category: "new-city",
      size: "240×120×60 мм",
      strength: "М350",
      frost: "F300",
      price: 590,
      colors: ["Серый", "Красный", "Желтый", "Зеленый"],
      delivery: "2-3 дня",
      description: "Фигурная плитка с волнообразным рисунком",
      image: "/img/634f5d73-9088-437c-b46b-a16260db6421.jpg"
    },
    {
      id: "6",
      name: "Ромб Старый город",
      category: "old-city",
      size: "170×208×60 мм",
      strength: "М300",
      frost: "F250",
      price: 480,
      colors: ["Серый", "Коричневый"],
      delivery: "1-2 дня",
      description: "Ромбовидная плитка для декоративной укладки",
      image: "/img/634f5d73-9088-437c-b46b-a16260db6421.jpg"
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    if (selectedColor && !product.colors.includes(selectedColor)) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const allColors = Array.from(new Set(products.flatMap(p => p.colors)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-gray-700" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Каталог продукции</h1>
                <p className="text-sm text-gray-600">БетонСтрой</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-lg font-semibold mb-4">Фильтры</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Категория</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Цвет</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Любой цвет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Любой цвет</SelectItem>
                  {allColors.map(color => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Сортировка</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedColor("");
                  setSortBy("name");
                }}
              >
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge variant="secondary">{product.price} ₽/м²</Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Размер:</span>
                    <span className="font-medium">{product.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Прочность:</span>
                    <span className="font-medium">{product.strength}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Доставка:</span>
                    <span className="font-medium">{product.delivery}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Цвета:</span>
                    <span className="font-medium">{product.colors.join(", ")}</span>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{product.name}</DialogTitle>
                      <DialogDescription>
                        Подробная информация о товаре
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Характеристики</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Размер:</span>
                              <span>{product.size}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Прочность:</span>
                              <span>{product.strength}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Морозостойкость:</span>
                              <span>{product.frost}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Срок доставки:</span>
                              <span>{product.delivery}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Доступные цвета</h3>
                          <div className="flex flex-wrap gap-2">
                            {product.colors.map(color => (
                              <Badge key={color} variant="outline">{color}</Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Заказ</h3>
                          <div className="space-y-3">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите цвет" />
                              </SelectTrigger>
                              <SelectContent>
                                {product.colors.map(color => (
                                  <SelectItem key={color} value={color}>
                                    {color}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            
                            <input 
                              type="number" 
                              placeholder="Количество м²" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                            />
                            
                            <input 
                              type="text" 
                              placeholder="Адрес доставки" 
                              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                            />
                            
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex justify-between font-semibold">
                                <span>Цена:</span>
                                <span>{product.price} ₽/м²</span>
                              </div>
                            </div>
                            
                            <Button className="w-full">
                              <Icon name="ShoppingCart" size={16} className="mr-2" />
                              Добавить в заказ
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Товары не найдены</h3>
            <p className="text-gray-600">Попробуйте изменить параметры фильтра</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;