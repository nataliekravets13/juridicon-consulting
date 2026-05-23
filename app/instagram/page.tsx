'use client';

export default function Instagram() {
  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Вы пришли из Instagram?
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Отлично! Если вы увидели пост, Reels или сторис @juridicon.kz и хотите обсудить свою ситуацию, напишите нам в WhatsApp или оставьте заявку.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Что можно отправить</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Тему вашего вопроса</li>
                <li>✓ Город проживания</li>
                <li>✓ Документы (фото или скан)</li>
                <li>✓ Переписку по вопросу</li>
                <li>✓ Информацию о сроках</li>
                <li>✓ Описание уже предпринятых действий</li>
              </ul>
            </div>

            <div className="p-8 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">С чем часто обращаются</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Развод и семейные споры</li>
                <li>• Алименты и раздел имущества</li>
                <li>• Долги и взыскание</li>
                <li>• Договоры и сделки</li>
                <li>• Проблемы с МФО и коллекторами</li>
                <li>• Наследство</li>
                <li>• Судебная защита</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-700 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Как связаться</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Напишите подробнее о вашей ситуации в WhatsApp или позвоните:
              </p>
              <a href="https://wa.me/77082106003" className="inline-block bg-white text-green-700 px-6 py-3 rounded font-bold hover:bg-blue-50 w-full text-center mb-4">
                WhatsApp
              </a>
              <a href="tel:+77082106003" className="inline-block border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-blue-700 w-full text-center">
                Позвонить
              </a>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <ol className="space-y-4 text-gray-700 text-lg">
              <li>
                <span className="font-bold">1. Отправьте информацию</span> - напишите в WhatsApp краткое описание ситуации и документы
              </li>
              <li>
                <span className="font-bold">2. Первичная оценка</span> - мы изучим документы и скажем, какая информация нужна
              </li>
              <li>
                <span className="font-bold">3. Консультация</span> - обсудим варианты действий и следующие шаги
              </li>
              <li>
                <span className="font-bold">4. Помощь</span> - подготовим документы, представим интересы в суде или переговорах
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">❌ Не пишите</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Слишком кратко ("помогите")</li>
                <li>• Без документов</li>
                <li>• Без описания сроков</li>
                <li>• Личные данные в открытом виде</li>
              </ul>
            </div>

            <div className="border border-blue-200 bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✓ Пишите</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Четкое описание ситуации</li>
                <li>• Все релевантные документы</li>
                <li>• Когда все произошло</li>
                <li>• Что уже предпринимали</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Готовы обсудить вашу ситуацию?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/77082106003" className="bg-white text-pink-600 px-8 py-4 rounded font-bold hover:bg-pink-50">
              Написать в WhatsApp
            </a>
            <a href="tel:+77082106003" className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-pink-600">
              Позвонить
            </a>
            <a href="https://instagram.com/juridicon.kz" target="_blank" className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-pink-600">
              Смотреть Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
