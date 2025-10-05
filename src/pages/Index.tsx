import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">PREMIUM REAL ESTATE</h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-sm hover:text-accent transition-colors">Главная</a>
              <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
              <a href="#about" className="text-sm hover:text-accent transition-colors">Обо мне</a>
              <a href="#reviews" className="text-sm hover:text-accent transition-colors">Отзывы</a>
              <a href="#contact" className="text-sm hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary-foreground">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-sm font-medium text-accent">Премиальная недвижимость</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Проверенные объекты<br />
                <span className="text-accent">вторичного рынка</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Профессиональное сопровождение сделок с недвижимостью. 
                Каждый объект тщательно проверен и одобрен экспертами.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                  Подобрать квартиру
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-transparent rounded-lg blur-2xl"></div>
              <img 
                src="/img/f4e92923-77df-4776-9fc2-559c6f097f8b.jpg" 
                alt="Премиальная недвижимость" 
                className="relative rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для безопасной покупки недвижимости
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Key',
                title: 'Подбор объектов',
                description: 'Индивидуальный подбор квартир вторичного рынка с учетом ваших требований и бюджета'
              },
              {
                icon: 'FileCheck',
                title: 'Проверка документов',
                description: 'Тщательная юридическая проверка всех документов на недвижимость'
              },
              {
                icon: 'Shield',
                title: 'Безопасность сделки',
                description: 'Полное сопровождение сделки от осмотра до получения ключей'
              },
              {
                icon: 'TrendingUp',
                title: 'Оценка стоимости',
                description: 'Профессиональная оценка рыночной стоимости объекта'
              },
              {
                icon: 'Users',
                title: 'Консультации',
                description: 'Экспертные консультации по всем вопросам покупки недвижимости'
              },
              {
                icon: 'Handshake',
                title: 'Сопровождение',
                description: 'Полное сопровождение на всех этапах оформления сделки'
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg blur-3xl"></div>
              <img 
                src="/img/de12dba2-6f7c-4d18-bfdf-cf17e886e53b.jpg" 
                alt="О риэлторе" 
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Обо мне</h2>
              <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
                <p>
                  Я специализируюсь на работе с проверенными объектами вторичного рынка недвижимости. 
                  Моя цель — обеспечить безопасность и комфорт каждой сделки.
                </p>
                <p>
                  За годы работы я помогла десяткам семей найти идеальное жилье. 
                  Каждый объект проходит тщательную проверку на юридическую чистоту.
                </p>
                <p>
                  Доверие клиентов — моя главная ценность. Я всегда на связи и готова 
                  ответить на любые вопросы на каждом этапе сделки.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Сделок</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Надежность</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят те, кто уже нашёл свою идеальную квартиру
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Смирнова',
                text: 'Профессиональный подход к работе! Помогла найти отличную квартиру в нужном районе. Все документы проверены досконально.',
                rating: 5
              },
              {
                name: 'Михаил Петров',
                text: 'Очень доволен сотрудничеством. Сделка прошла быстро и безопасно. Рекомендую всем, кто ищет надежного риэлтора.',
                rating: 5
              },
              {
                name: 'Елена Волкова',
                text: 'Спасибо за помощь в покупке квартиры! Внимательное отношение к деталям и честность на всех этапах сделки.',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="font-medium">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Свяжитесь со мной</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и я свяжусь с вами в ближайшее время
            </p>
          </div>

          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, какую квартиру вы ищете..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Phone" className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Телефон</div>
                      <div className="font-medium">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Mail" className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="font-medium">info@realestate.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="MapPin" className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Офис</div>
                      <div className="font-medium">Москва, центр</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PREMIUM REAL ESTATE</h3>
              <p className="text-sm text-primary-foreground/80">
                Проверенные объекты вторичного рынка недвижимости
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <a href="#home" className="block hover:text-accent transition-colors">Главная</a>
                <a href="#services" className="block hover:text-accent transition-colors">Услуги</a>
                <a href="#about" className="block hover:text-accent transition-colors">Обо мне</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>+7 (999) 123-45-67</p>
                <p>info@realestate.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Icon name="Phone" size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Icon name="Mail" size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 Premium Real Estate. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
