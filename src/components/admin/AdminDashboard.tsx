import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { getAnalytics } from '@/lib/supabase';

interface AnalyticsData {
  id: string;
  event_type: string;
  event_data: any;
  timestamp: string;
  user_agent: string;
}

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const loadAnalytics = async () => {
    setLoading(true);
    const data = await getAnalytics();
    setAnalytics(data as AnalyticsData[]);
    setLastUpdate(new Date());
    setLoading(false);
  };

  useEffect(() => {
    loadAnalytics();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    window.location.reload();
  };

  const totalVisits = analytics.filter(item => item.event_type === 'page_visit').length;
  const phoneClicks = analytics.filter(item => item.event_type === 'phone_reveal').length;
  const uniqueVisitors = new Set(analytics.map(item => item.user_agent)).size;

  const todayVisits = analytics.filter(item => {
    const itemDate = new Date(item.timestamp).toDateString();
    const today = new Date().toDateString();
    return itemDate === today && item.event_type === 'page_visit';
  }).length;

  const todayPhoneClicks = analytics.filter(item => {
    const itemDate = new Date(item.timestamp).toDateString();
    const today = new Date().toDateString();
    return itemDate === today && item.event_type === 'phone_reveal';
  }).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Админ панель</h1>
            <p className="text-gray-600">Последнее обновление: {lastUpdate.toLocaleString('ru-RU')}</p>
          </div>
          <div className="flex space-x-4">
            <Button onClick={loadAnalytics} variant="outline" disabled={loading}>
              <Icon name={loading ? "Loader" : "RefreshCw"} size={16} className={loading ? "animate-spin" : ""} />
              Обновить
            </Button>
            <Button onClick={handleLogout} variant="destructive">
              <Icon name="LogOut" size={16} />
              Выйти
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Всего визитов</CardTitle>
              <Icon name="Eye" size={16} className="text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalVisits}</div>
              <p className="text-xs text-gray-600">За все время</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Показы номера</CardTitle>
              <Icon name="Phone" size={16} className="text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{phoneClicks}</div>
              <p className="text-xs text-gray-600">Всего кликов</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Сегодня визитов</CardTitle>
              <Icon name="Calendar" size={16} className="text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayVisits}</div>
              <p className="text-xs text-gray-600">За сегодня</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Сегодня кликов</CardTitle>
              <Icon name="MousePointer" size={16} className="text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayPhoneClicks}</div>
              <p className="text-xs text-gray-600">Показы номера</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Конверсия</CardTitle>
              <CardDescription>Отношение кликов к визитам</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {totalVisits > 0 ? ((phoneClicks / totalVisits) * 100).toFixed(1) : 0}%
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {phoneClicks} из {totalVisits} посетителей узнали номер телефона
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Уникальные посетители</CardTitle>
              <CardDescription>По User-Agent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{uniqueVisitors}</div>
              <p className="text-sm text-gray-600 mt-2">
                Уникальных устройств/браузеров
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Последние события</CardTitle>
            <CardDescription>10 последних действий пользователей</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <Icon name="Loader" size={24} className="animate-spin" />
                <span className="ml-2">Загрузка...</span>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {analytics.slice(0, 10).map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={event.event_type === 'phone_reveal' ? 'Phone' : 'Eye'} 
                        size={16} 
                        className={event.event_type === 'phone_reveal' ? 'text-green-600' : 'text-blue-600'}
                      />
                      <div>
                        <p className="font-medium">
                          {event.event_type === 'phone_reveal' ? 'Показ номера телефона' : 'Посещение сайта'}
                        </p>
                        <p className="text-sm text-gray-600">
                          {new Date(event.timestamp).toLocaleString('ru-RU')}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 max-w-xs truncate">
                      {event.user_agent.split(' ')[0]}
                    </div>
                  </div>
                ))}
                {analytics.length === 0 && (
                  <p className="text-center text-gray-500 py-8">
                    Пока нет данных для отображения
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;