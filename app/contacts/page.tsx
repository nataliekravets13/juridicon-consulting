'use client';

import { useState } from 'react';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', topic: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <div className="pt-32 pb-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Свяжитесь с нами удобным способом. Для первичной оценки вопроса лучше кратко описать ситуацию и приложить документы, если они уже есть.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Телефон / WhatsApp</h3>
              <a href="tel:+77082106003" className="text-blue-700 font-bold text-lg hover:text-blue-800">
                +7 708 210 6003
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:juridicon.kz@gmail.com" className="text-blue-700 font-bold text-lg hover:text-blue-800">
                juridicon.kz@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
              <a href="https://instagram.com/juridicon.kz" target="_blank" className="text-pink-700 font-bold text-lg hover:text-pink-800">
                @juridicon.kz
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Адрес офиса</h2>
              <p className="text-xl text-gray-700 mb-4">ул. Ауэзова 104 Б, офис 28</p>
              <p className="text-xl text-gray-700 mb-8">уг. ул. Джандосова</p>
              <p className="text-xl text-gray-700 font-bold">Алматы, Казахстан</p>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Время работы</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900">Пн–Пт</p>
                  <p className="text-gray-700">09:00 – 18:00</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Сб</p>
                  <p className="text-gray-700">10:00 – 14:00 (по предварительной записи)</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Вс</p>
                  <p className="text-gray-700">Выходной</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Отправить сообщение</h2>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6">
                  ✓ Спасибо! Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                />

                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                >
                  <option value="">Выберите тему</option>
                  <option value="семейное">Семейное право</option>
                  <option value="долги">Долги и взыскание</option>
                  <option value="договоры">Договоры</option>
                  <option value="суд">Судебная защита</option>
                  <option value="наследство">Наследство</option>
                  <option value="недвижимость">Недвижимость</option>
                  <option value="бизнес">Бизнес</option>
                  <option value="другое">Другое</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Описание вашей ситуации"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white px-8 py-4 rounded font-bold hover:bg-blue-800"
                >
                  Отправить сообщение
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4">
                Нажимая кнопку, я соглашаюсь на обработку персональных данных и понимаю, что отправка формы не является заключением договора на юридические услуги.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
