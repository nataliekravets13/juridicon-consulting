'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение. Мы свяжемся с вами в течение 2 часов.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-black">Ю</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-gray-900">ЮРИДИКОН</h1>
              <p className="text-xs text-blue-600 font-semibold">CONSULTING</p>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className={`md:flex gap-12 text-gray-700 font-semibold ${menuOpen ? 'flex flex-col absolute top-20 left-0 right-0 bg-white p-6 border-b' : 'hidden'}`}>
            <li><a href="#services" className="hover:text-blue-600 transition">Услуги</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition">О нас</a></li>
            <li><a href="#team" className="hover:text-blue-600 transition">Команда</a></li>
            <li><a href="#faq" className="hover:text-blue-600 transition">Вопросы</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">Контакты</a></li>
          </ul>

          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition">
            Консультация
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-bold mb-4 text-lg">Добро пожаловать в ЮРИДИКОН</p>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                Профессиональная юридическая поддержка высочайшего уровня
              </h2>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                С 2009 года мы помогаем корпорациям, малому и среднему бизнесу, а также физическим лицам в решении их юридических проблем. Наша команда состоит из опытных адвокатов и юристов с безупречной репутацией.
              </p>
              <p className="text-lg text-gray-700 mb-8 font-semibold">
                ✓ Бесплатная консультация для всех новых клиентов
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
                  Получить консультацию
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                  Узнать больше
                </button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554821552-7a917ef2e22f?w=800&q=90"
                alt="Профессиональный офис"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold mb-4">НАША СПЕЦИАЛИЗАЦИЯ</p>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Спектр юридических услуг</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От стартапов до крупных корпораций — мы обеспечиваем комплексное юридическое сопровождение на всех этапах развития бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Корпоративное право",
                desc: "Регистрация компаний, слияния и поглощения, реструктуризация, контрактация. Полное юридическое сопровождение корпоративных процессов."
              },
              {
                icon: "👔",
                title: "Трудовое право",
                desc: "Защита прав работников и работодателей. Разрешение трудовых споров, оформление кадровых документов, работа с инспекциями."
              },
              {
                icon: "⚖️",
                title: "Уголовное право",
                desc: "Защита в уголовных производствах. Представительство в суде, работа с органами следствия, защита прав подозреваемых и обвиняемых."
              },
              {
                icon: "👨‍👩‍👧",
                title: "Семейное право",
                desc: "Разводы, разделы имущества, установление опеки, наследственные споры. Решение семейных конфликтов с минимальными издержками."
              },
              {
                icon: "🏠",
                title: "Недвижимость & ЗК",
                desc: "Сделки с недвижимостью, регистрация прав, разрешение земельных споров, оформление права собственности и аренды."
              },
              {
                icon: "🛡️",
                title: "Арбитраж & Суд",
                desc: "Представительство в судах всех уровней, коммерческий арбитраж, альтернативное разрешение споров, медиация и переговоры."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition group">
                <div className="text-5xl mb-4 group-hover:scale-125 transition duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=90"
                alt="Офис компании"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-blue-600 font-bold mb-4">О КОМПАНИИ</p>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Лидеры казахстанского юридического рынка</h2>

              <div className="space-y-4 mb-8 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <span className="font-bold text-gray-900">ЮРИДИКОН</span> — это команда высокопрофессиональных адвокатов и юристов с более чем 15 годами практики в казахстанской и международной правовой системе.
                </p>
                <p>
                  С момента основания в 2009 году мы успешно разрешили более <span className="font-bold">2,500 юридических дел</span>, помогли сотням компаний в стратегическом развитии и получили доверие десятков тысяч клиентов.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Почему выбирают ЮРИДИКОН:</h3>
              <ul className="space-y-3">
                {[
                  "15+ лет опыта в национальном и международном праве",
                  "Команда из 12+ высокопрофессиональных специалистов",
                  "Успешное разрешение более 2,500 сложных дел",
                  "Членство в международных ассоциациях адвокатов",
                  "Доступные цены без снижения качества",
                  "Гарантированная конфиденциальность и защита интересов"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold mb-4">НАША КОМАНДА</p>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Профессионалы высочайшего уровня</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый член нашей команды — это адвокат первой категории с проверенной репутацией и успешной судебной практикой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Соколов",
                position: "Основатель, главный партнер",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=90",
                bio: "Адвокат высшей категории. Специалист в области корпоративного и коммерческого права. Опыт работы с Fortune 500 компаниями.",
                certs: ["Адвокат высшей категории", "Член МАА", "15+ лет практики"]
              },
              {
                name: "Айжан Сатова",
                position: "Старший партнер",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=90",
                bio: "Специалист в семейном и наследственном праве. Разрешила более 800 дел в этой сфере. Автор научных статей.",
                certs: ["Адвокат 1-й категории", "Магистр юридических наук", "12+ лет практики"]
              },
              {
                name: "Максат Ережепов",
                position: "Старший юрист",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=90",
                bio: "Квалифицированный специалист в уголовном праве. Защитник прав граждан. Многолетний опыт в судебной защите.",
                certs: ["Адвокат 1-й категории", "Специалист уголовного права", "10+ лет практики"]
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition group">
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-200 to-blue-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-bold mb-4 text-sm">{member.position}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.certs.map((cert, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold mb-4">ВОПРОСЫ И ОТВЕТЫ</p>
            <h2 className="text-4xl font-black text-gray-900">Часто задаваемые вопросы</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Какая стоимость первичной консультации?",
                a: "Первичная консультация (до 1 часа) предоставляется бесплатно всем новым клиентам. После консультации обсуждаются условия дальнейшей работы."
              },
              {
                q: "Как быстро можно получить консультацию?",
                a: "Срочные консультации доступны в день обращения. Обычно запись на консультацию занимает 1-2 дня. В выходные возможны консультации по предварительной договоренности."
              },
              {
                q: "Работаете ли вы с иностранными клиентами?",
                a: "Да, у нас есть опыт работы с иностранными юридическими и физическими лицами. Консультации проводятся на казахском, русском и английском языках."
              },
              {
                q: "Каковы методы оплаты и сроки платежей?",
                a: "Мы принимаем банковские переводы, наличные платежи и расчеты через электронные системы. Возможна рассрочка платежей для крупных проектов и долгосрочных контрактов."
              },
              {
                q: "Гарантируете ли вы победу в суде?",
                a: "Мы не гарантируем конкретный исход, но гарантируем профессиональную защиту, максимальное использование всех возможностей закона и полную конфиденциальность."
              },
              {
                q: "Есть ли опыт в международных делах?",
                a: "Да, наша команда имеет опыт работы с международными контрактами, трансграничными спорами и взаимодействием с иностранными партнерами."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-16">Свяжитесь с нами</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
              <p className="text-2xl mb-4">📞</p>
              <h3 className="text-xl font-bold mb-3">Телефон</h3>
              <a href="tel:+77082106003" className="text-blue-100 hover:text-white text-lg font-semibold">
                +7 (708) 210-60-03
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
              <p className="text-2xl mb-4">📧</p>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a href="mailto:juridicon.kz@gmail.com" className="text-blue-100 hover:text-white text-lg font-semibold">
                juridicon.kz@gmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
              <p className="text-2xl mb-4">📍</p>
              <h3 className="text-xl font-bold mb-3">Адрес</h3>
              <p className="text-blue-100 font-semibold">
                ул. Аузова 104б, офис 28<br/>
                Алматы, Казахстан
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Время работы</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg mb-2">Пн–Пт</p>
                  <p className="text-blue-100">09:00 – 18:00</p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">Сб</p>
                  <p className="text-blue-100">10:00 – 14:00 (по предварительной записи)</p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2">Вс</p>
                  <p className="text-blue-100">Выходной (экстренные консультации по согласованию)</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={contactForm.name}
                onChange={handleFormChange}
                required
                className="w-full px-6 py-4 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={handleFormChange}
                required
                className="w-full px-6 py-4 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={contactForm.phone}
                onChange={handleFormChange}
                className="w-full px-6 py-4 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <textarea
                name="message"
                placeholder="Расскажите о вашей проблеме"
                value={contactForm.message}
                onChange={handleFormChange}
                required
                rows={5}
                className="w-full px-6 py-4 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                Отправить запрос
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl">Ю</span>
                </div>
                <h3 className="font-black text-lg">ЮРИДИКОН</h3>
              </div>
              <p className="text-gray-400 text-sm">Профессиональные юридические услуги в Казахстане с 2009 года</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">Корпоративное право</a></li>
                <li><a href="#services" className="hover:text-white transition">Трудовое право</a></li>
                <li><a href="#services" className="hover:text-white transition">Уголовное право</a></li>
                <li><a href="#services" className="hover:text-white transition">Семейное право</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition">О нас</a></li>
                <li><a href="#team" className="hover:text-white transition">Наша команда</a></li>
                <li><a href="#faq" className="hover:text-white transition">Вопросы</a></li>
                <li><a href="#contact" className="hover:text-white transition">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <p className="text-gray-400 text-sm mb-3">
                <a href="tel:+77082106003" className="hover:text-white">+7 (708) 210-60-03</a>
              </p>
              <p className="text-gray-400 text-sm">
                <a href="mailto:juridicon.kz@gmail.com" className="hover:text-white">juridicon.kz@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ЮРИДИКОН Consulting. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
