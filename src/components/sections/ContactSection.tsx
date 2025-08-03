import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface CallRequest {
  id: string;
  name: string;
  phone: string;
  time: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'completed';
}

const ContactSection = () => {
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

  return (
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
                  <div className="space-y-1">
                    <p className="text-gray-300">+7 (978) 237-71-00</p>
                    <p className="text-gray-300">+7 (978) 237-74-00</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">tash-2021@mail.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-gray-300">Республика Крым, г. Джанкой, с. Днепровка, пер. Луначарского 1</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Icon name="Clock" size={24} />
                </div>
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
  );
};

export default ContactSection;