'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="container-custom flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xl font-bold">Ю</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-blue-600">Юридикон</h1>
              <p className="text-xs text-gray-600">Consulting</p>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className={`md:flex gap-8 text-gray-700 font-medium ${menuOpen ? 'flex flex-col absolute top-20 left-0 right-0 bg-white p-4' : 'hidden'}`}>
            <li><a href="#services" className="hover:text-blue-600">Услуги</a></li>
            <li><a href="#about" className="hover:text-blue-600">О нас</a></li>
            <li><a href="#team" className="hover:text-blue-600">Команда</a></li>
            <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Контакты</a></li>
          </ul>

          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Консультация
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section-padding gradient-blue text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Профессиональная юридическая поддержка
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Решение юридических вопросов любого уровня сложности. Опытная команда адвокатов с более чем 15 годами практики на благо ваших интересов.
              </p>
              <p className="text-lg mb-8 opacity-80">
                ✅ Бесплатная первичная консультация для всех клиентов
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded font-bold text-lg hover:bg-blue-50">
                Запросить консультацию
              </button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589829085787-46c083bb8b0f?w=600&q=80"
                alt="Консультация"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Корпоративное право",
                desc: "Регистрация и ликвидация ООО, АО, СП. Подготовка и анализ контрактов, слияния и поглощения, реструктуризация."
              },
              {
                title: "Трудовое право",
                desc: "Консультации по трудовому кодексу, защита прав работников и работодателей, оформление кадровых документов."
              },
              {
                title: "Уголовное право",
                desc: "Представительство в уголовном судопроизводстве, защита прав обвиняемых и потерпевших на всех стадиях."
              },
              {
                title: "Семейное право",
                desc: "Разводы, раздел имущества, установление опеки, наследственные споры и договоры."
              },
              {
                title: "Земельное право",
                desc: "Сделки с недвижимостью, разрешение земельных споров, оформление собственности и аренды."
              },
              {
                title: "Арбитраж и судебные споры",
                desc: "Представительство в судах всех уровней, альтернативное разрешение споров, медиация."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Офис"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании "Юридикон"</h2>
              <p className="text-lg text-gray-600 mb-4">
                Мы — команда высокопрофессиональных адвокатов и юристов с более чем 15 годами практики в казахстанской правовой системе. Наша миссия — обеспечить качественную и доступную юридическую помощь всем нуждающимся.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                За годы работы мы успешно разрешили более 2000 сложных юридических дел, помогли сотням компаний с корпоративными вопросами и получили доверие десятков тысяч клиентов.
              </p>
              <h3 className="text-2xl font-bold mb-4">Почему выбирают нас:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Опыт более 15 лет в казахстанской и международной правовой практике</li>
                <li>✓ Команда квалифицированных специалистов с высшим юридическим образованием</li>
                <li>✓ Комплексный подход к решению всех юридических проблем</li>
                <li>✓ Конфиденциальность и защита интересов клиента</li>
                <li>✓ Доступные цены и прозрачная система оплаты</li>
                <li>✓ Бесплатная первичная консультация для всех клиентов</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Наша команда</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Соколов",
                position: "Основатель и главный партнер",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                bio: "Адвокат высшей категории с 15-летним опытом. Специализируется на корпоративном и коммерческом праве."
              },
              {
                name: "Айжан Сатова",
                position: "Старший адвокат",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
                bio: "Специалист в области семейного и наследственного права. Опыт работы 10 лет."
              },
              {
                name: "Максат Ережепов",
                position: "Адвокат",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
                bio: "Квалифицированный юрист в уголовном праве. Защитник прав граждан в судебном процессе."
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>

          <div className="space-y-6">
            {[
              {
                q: "Какова стоимость консультации?",
                a: "Первичная консультация полностью бесплатна. Стоимость дальнейшей работы зависит от сложности дела и обсуждается индивидуально с каждым клиентом."
              },
              {
                q: "Как быстро можно получить консультацию?",
                a: "Мы принимаем клиентов по предварительной записи в течение 1-2 дней. Срочные консультации возможны в день обращения."
              },
              {
                q: "Вы работаете с иностранными клиентами?",
                a: "Да, мы имеем опыт работы с иностранными юридическими и физическими лицами. Консультации проводятся на казахском, русском и английском языках."
              },
              {
                q: "Какие методы оплаты вы принимаете?",
                a: "Мы принимаем банковские переводы, наличные платежи и расчеты через электронные платежные системы. Возможна рассрочка платежей для крупных дел."
              },
              {
                q: "Гарантируете ли вы победу в суде?",
                a: "Мы не можем гарантировать исход судебного разбирательства, но гарантируем профессиональное представительство, наилучшее использование всех возможностей закона и конфиденциальность ваших интересов."
              },
              {
                q: "Есть ли у вас опыт в международном праве?",
                a: "Да, наша команда имеет опыт работы с международными контрактами, трансграничными спорами и взаимодействием с зарубежными партнерами."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-b pb-6">
                <h3 className="text-lg font-bold mb-2 text-blue-600">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-blue-600 text-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Связаться с нами</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>

              <div className="mb-6">
                <p className="font-bold text-lg mb-2">📞 Телефон</p>
                <a href="tel:+77082106003" className="text-blue-100 hover:text-white">+7 (708) 210-60-03</a>
              </div>

              <div className="mb-6">
                <p className="font-bold text-lg mb-2">📧 Email</p>
                <a href="mailto:juridicon.kz@gmail.com" className="text-blue-100 hover:text-white">juridicon.kz@gmail.com</a>
              </div>

              <div className="mb-6">
                <p className="font-bold text-lg mb-2">📍 Адрес</p>
                <p className="text-blue-100">
                  ул. Аузова 104б, офис 28<br/>
                  ул. Джандосова<br/>
                  Алматы, Казахстан
                </p>
              </div>

              <div>
                <p className="font-bold text-lg mb-2">🕐 Время работы</p>
                <p className="text-blue-100">
                  Пн-Пт: 09:00 - 18:00<br/>
                  Сб: 10:00 - 14:00<br/>
                  Вс: Выходной
                </p>
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
                className="w-full px-4 py-3 rounded bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={contactForm.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 rounded bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <textarea
                name="message"
                placeholder="Ваше сообщение"
                value={contactForm.message}
                onChange={handleFormChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-blue-50 transition"
              >
                Отправить запрос
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">Ю</span>
                </div>
                <h3 className="font-bold">Юридикон</h3>
              </div>
              <p className="text-gray-400 text-sm">Профессиональные юридические услуги в Казахстане</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white">Корпоративное право</a></li>
                <li><a href="#services" className="hover:text-white">Трудовое право</a></li>
                <li><a href="#services" className="hover:text-white">Уголовное право</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white">О компании</a></li>
                <li><a href="#team" className="hover:text-white">Наша команда</a></li>
                <li><a href="#contact" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <p className="text-gray-400 text-sm mb-2">📞 +7 (708) 210-60-03</p>
              <p className="text-gray-400 text-sm">📧 juridicon.kz@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Юридикон Consulting. Все права защищены. | Политика конфиденциальности</p>
          </div>
        </div>
      </footer>
    </>
  );
}
