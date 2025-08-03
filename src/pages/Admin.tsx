import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface CallOrder {
  id: string;
  name: string;
  phone: string;
  time: string;
  date: string;
  status: "new" | "processed" | "completed";
}

const Admin = () => {
  const [callOrders] = useState<CallOrder[]>([
    {
      id: "1",
      name: "Иван Петров",
      phone: "+7 (978) 123-45-67",
      time: "Утром (9:00-12:00)",
      date: "2024-07-26 14:30",
      status: "new"
    },
    {
      id: "2", 
      name: "Мария Сидорова",
      phone: "+7 (978) 987-65-43",
      time: "Днем (12:00-15:00)",
      date: "2024-07-26 13:15",
      status: "processed"
    },
    {
      id: "3",
      name: "Алексей Иванов",
      phone: "+7 (978) 555-44-33",
      time: "Сейчас",
      date: "2024-07-26 12:45",
      status: "completed"
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-red-100 text-red-800">Новый</Badge>;
      case "processed":
        return <Badge className="bg-yellow-100 text-yellow-800">В работе</Badge>;
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Завершен</Badge>;
      default:
        return <Badge>Неизвестно</Badge>;
    }
  };

  const stats = {
    totalOrders: 156,
    newOrders: 12,
    todayOrders: 8,
    conversionRate: "24%"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={32} className="text-gray-700" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Админ панель</h1>
                <p className="text-sm text-gray-600">Таш Крым</p>
              </div>
            </div>
            <Button variant="outline">
              <Icon name="LogOut" size={16} className="mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Всего заказов</CardDescription>
              <CardTitle className="text-2xl">{stats.totalOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-sm text-green-600">
                <Icon name="TrendingUp" size={16} />
                <span>+12% за месяц</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Новые заказы</CardDescription>
              <CardTitle className="text-2xl">{stats.newOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-sm text-red-600">
                <Icon name="AlertCircle" size={16} />
                <span>Требуют внимания</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Сегодня</CardDescription>
              <CardTitle className="text-2xl">{stats.todayOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Icon name="Calendar" size={16} />
                <span>За сутки</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Конверсия</CardDescription>
              <CardTitle className="text-2xl">{stats.conversionRate}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-sm text-blue-600">
                <Icon name="Target" size={16} />
                <span>Звонок → Заказ</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Заказы звонков</TabsTrigger>
            <TabsTrigger value="content">Редактор сайта</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Заказы на обратный звонок</CardTitle>
                <CardDescription>
                  Список всех заявок на обратный звонок
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Имя</TableHead>
                      <TableHead>Телефон</TableHead>
                      <TableHead>Время звонка</TableHead>
                      <TableHead>Дата заявки</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {callOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.name}</TableCell>
                        <TableCell>{order.phone}</TableCell>
                        <TableCell>{order.time}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Icon name="Phone" size={14} className="mr-1" />
                              Позвонить
                            </Button>
                            <Button size="sm" variant="outline">
                              <Icon name="Check" size={14} className="mr-1" />
                              Закрыть
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Editor Tab */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Редактор контента</CardTitle>
                  <CardDescription>Изменение текстов и настроек сайта</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Заголовок главной страницы</label>
                    <input 
                      type="text" 
                      defaultValue="Качественная тротуарная плитка собственного производства"
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Описание компании</label>
                    <textarea 
                      defaultValue="Более 8 лет производим долговечную тротуарную плитку. Современное оборудование, контроль качества, доставка по региону."
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm mt-1 h-20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Телефоны</label>
                    <input 
                      type="text" 
                      defaultValue="+7 (978) 824-45-03, +7 (978) 607-63-02"
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      defaultValue="tash-2021@mail.ru"
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm mt-1"
                    />
                  </div>
                  <Button className="w-full">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Управление каталогом</CardTitle>
                  <CardDescription>Добавление и редактирование товаров</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить новый товар
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Icon name="Edit" size={16} className="mr-2" />
                    Редактировать категории
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Icon name="Image" size={16} className="mr-2" />
                    Управление изображениями
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Icon name="DollarSign" size={16} className="mr-2" />
                    Обновить цены
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Популярные товары</CardTitle>
                  <CardDescription>Топ-5 товаров по просмотрам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Брусчатка классическая", "Плитка \"Волна\"", "Плитка \"Ромб\"", "Бордюрный камень", "Плитка \"Паркет\""].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item}</span>
                        <span className="text-sm text-gray-500">{Math.floor(Math.random() * 100) + 50} просмотров</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Источники трафика</CardTitle>
                  <CardDescription>Откуда приходят посетители</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Прямой переход</span>
                      <span className="text-sm text-gray-500">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Поисковые системы</span>
                      <span className="text-sm text-gray-500">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Социальные сети</span>
                      <span className="text-sm text-gray-500">12%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Реклама</span>
                      <span className="text-sm text-gray-500">8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;