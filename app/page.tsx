'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white font-black text-xl">Ю</span>
            </div>
            <div>
              <h1 className="font-black text-lg text-gray-900">Юридикон</h1>
              <p className="text-xs text-gray-600">consulting</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-700">Главная</Link>
            <Link href="/services" className="hover:text-blue-700">Услуги</Link>
            <Link href="/knowledge" className="hover:text-blue-700">Право РК</Link>
            <Link href="/about" className="hover:text-blue-700">О компании</Link>
            <Link href="/sokolov" className="hover:text-blue-700">Соколов</Link>
            <Link href="/contacts" className="hover:text-blue-700">Контакты</Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <a href="tel:+77082106003" className="text-gray-700 font-medium hover:text-blue-700">
              +7 708 210 6003
            </a>
            <button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800">
              Консультация
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-3">
            <Link href="/" className="block text-gray-700 font-medium hover:text-blue-700">Главная</Link>
            <Link href="/services" className="block text-gray-700 font-medium hover:text-blue-700">Услуги</Link>
            <Link href="/knowledge" className="block text-gray-700 font-medium hover:text-blue-700">Право РК</Link>
            <Link href="/about" className="block text-gray-700 font-medium hover:text-blue-700">О компании</Link>
            <a href="https://wa.me/77082106003" className="block text-green-700 font-medium">WhatsApp</a>
            <a href="https://instagram.com/juridicon.kz" className="block text-pink-700 font-medium">Instagram</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-700 font-bold mb-4">ЮРИДИЧЕСКАЯ КОМПАНИЯ В АЛМАТЫ</p>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Юридическая помощь по законодательству Республики Казахстан
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
            «Юридикон consulting» помогает гражданам и бизнесу разбираться в сложных правовых ситуациях: от консультации и подготовки документов до переговоров, претензий, исков и представительства в суде.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <button className="bg-blue-700 text-white px-8 py-4 rounded font-bold hover:bg-blue-800">
              Получить консультацию
            </button>
            <a href="https://wa.me/77082106003" className="bg-green-500 text-white px-8 py-4 rounded font-bold hover:bg-green-600">
              Написать в WhatsApp
            </a>
            <a href="tel:+77082106003" className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded font-bold hover:bg-blue-50">
              Позвонить
            </a>
          </div>

          <p className="text-gray-600 text-sm max-w-2xl">
            <strong>Ответим, какие документы нужны для первичной оценки вопроса.</strong> Итоговая стратегия зависит от фактов, документов и применимого законодательства.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 mb-4">С чем можно обратиться</h2>
          <p className="text-lg text-gray-700 mb-12">
            Мы работаем с вопросами, где важны документы, сроки, доказательства и точная правовая позиция.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👨‍👩‍👧', title: 'Семейные споры', desc: 'Развод, алименты, раздел имущества, споры о детях, брачные и имущественные вопросы.' },
              { icon: '⚖️', title: 'Судебная защита', desc: 'Иски, отзывы, ходатайства, подготовка доказательств, представительство и сопровождение дела.' },
              { icon: '💰', title: 'Долги и взыскание', desc: 'Расписки, договоры займа, претензии, судебное взыскание, исполнительное производство.' },
              { icon: '🏦', title: 'Банки, МФО, коллекторы', desc: 'Анализ задолженности, споры по начислениям, защита от незаконного давления, переговоры.' },
              { icon: '📄', title: 'Договоры и сделки', desc: 'Проверка, составление и сопровождение договоров для граждан, ИП и ТОО.' },
              { icon: '🏠', title: 'Недвижимость', desc: 'Проверка сделки, споры по жилью, доли, регистрация, договоры, риски покупки и продажи.' },
              { icon: '📜', title: 'Наследство', desc: 'Принятие наследства, споры между наследниками, восстановление сроков, оспаривание завещаний.' },
              { icon: '💼', title: 'Бизнес', desc: 'Договорная работа, претензии, взыскание задолженности, сопровождение предпринимателей.' }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 mb-12">Юридическая работа начинается с точного анализа</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Мы не даем универсальных обещаний. Сначала изучаем документы, сроки, доказательства и позицию другой стороны. После этого объясняем возможные варианты действий, риски и следующий практический шаг.
              </p>

              <ul className="space-y-4">
                {[
                  'Понятно объясняем правовую ситуацию и возможные сценарии.',
                  'Готовим документы под конкретные обстоятельства, а не по шаблону.',
                  'Помогаем выстроить позицию до переговоров или суда.',
                  'Работаем с вопросами по законодательству Республики Казахстан.',
                  'Соблюдаем конфиденциальность и аккуратно относимся к данным.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-700 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Соколов Александр</h3>
              <p className="text-blue-100 mb-4">
                Юрист, ключевой эксперт «Юридикон consulting»
              </p>
              <p className="text-blue-50 mb-6">
                Александр Соколов консультирует клиентов по правовым вопросам, помогает оценить перспективы, подготовить документы и выбрать стратегию защиты интересов. В публичных отзывах клиенты отмечают понятные объяснения, оперативность и внимательное отношение к деталям.
              </p>
              <Link href="/sokolov" className="inline-block bg-white text-blue-700 px-6 py-2 rounded font-bold hover:bg-blue-50">
                Подробнее о специалисте →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Полезные материалы по праву РК</h2>
          <p className="text-lg text-gray-700 mb-12">
            Мы развиваем базу знаний для тех, кто хочет заранее понять порядок действий: как подать иск, какие документы нужны, что делать при долге, разводе, наследстве, трудовом споре или проблеме с договором.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Семейное право',
              'Суды и документы',
              'Долги и МФО',
              'Недвижимость',
              'Наследство',
              'Трудовые вопросы',
              'Бизнес и договоры',
              'Образцы документов'
            ].map((cat, i) => (
              <Link key={i} href="/knowledge" className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 text-center font-semibold text-gray-900 transition">
                {cat}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/knowledge" className="inline-block bg-blue-700 text-white px-8 py-3 rounded font-bold hover:bg-blue-800">
              Перейти в базу знаний →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-gray-700 mb-12">
            На публичных площадках клиенты отмечают профессионализм, оперативность, понятные объяснения и помощь Александра Соколова в юридических вопросах. Результат каждого дела зависит от документов, доказательств, сроков и обстоятельств.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { name: 'Дильназ Пазыл', text: 'Александр отличный юрист! Все понятно объяснил, помог решить вопрос быстро и без лишних сложностей. Рекомендую!' },
              { name: 'Тогжан Керимхан', text: 'Спасибо за профессионализм и быстрое решение вопроса. Действительно в своем деле профи!' },
              { name: 'Эльвира Риттингер', text: 'Если кому-то нужна помощь грамотного юриста, советую обратиться к Александру Соколову!' },
              { name: 'Lia 2206', text: 'Профессионально и оперативно решили все мои вопросы с бракоразводным процессом. Очень грамотный специалист!' }
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-gray-900">— {review.name}</p>
                <p className="text-sm text-gray-600">2ГИС</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="https://2gis.kz/almaty/firm/70000001076241645/tab/reviews" target="_blank" className="bg-blue-700 text-white px-8 py-3 rounded font-bold hover:bg-blue-800">
              Посмотреть отзывы в 2ГИС
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-4">Нужна юридическая консультация?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Опишите ситуацию в WhatsApp или позвоните. Мы подскажем, какие документы нужны для первичного анализа и какой следующий шаг может быть разумным.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/77082106003" className="bg-white text-blue-700 px-8 py-4 rounded font-bold hover:bg-blue-50">
              Написать в WhatsApp
            </a>
            <a href="tel:+77082106003" className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-blue-700">
              Позвонить
            </a>
            <Link href="/contacts" className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-blue-700">
              Отправить вопрос
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-black text-white mb-4">Юридикон consulting</h3>
              <p className="text-sm">
                Юридическая компания в Алматы. Консультации, документы, судебное сопровождение и защита интересов по законодательству Республики Казахстан.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-white">Консультация</Link></li>
                <li><Link href="/services" className="hover:text-white">Суд</Link></li>
                <li><Link href="/services" className="hover:text-white">Семейные споры</Link></li>
                <li><Link href="/services" className="hover:text-white">Долги</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">О компании</Link></li>
                <li><Link href="/sokolov" className="hover:text-white">Соколов</Link></li>
                <li><Link href="/knowledge" className="hover:text-white">Право РК</Link></li>
                <li><Link href="/contacts" className="hover:text-white">Контакты</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Контакты</h4>
              <p className="text-sm mb-2">
                <a href="tel:+77082106003" className="hover:text-white">+7 708 210 6003</a>
              </p>
              <p className="text-sm mb-2">
                <a href="mailto:juridicon.kz@gmail.com" className="hover:text-white">juridicon.kz@gmail.com</a>
              </p>
              <p className="text-sm">
                <a href="https://instagram.com/juridicon.kz" className="hover:text-white">@juridicon.kz</a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Юридикон consulting. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
