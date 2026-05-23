'use client';

export default function Sokolov() {
  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-700 font-bold mb-4">ЮРИСТ ЮРИДИКОН CONSULTING</p>
          <h1 className="text-5xl font-black text-gray-900 mb-6">Соколов Александр</h1>
          <p className="text-xl text-gray-700 max-w-2xl mb-8">
            Юрист в Алматы, который помогает клиентам разобраться в правовой ситуации, оценить риски, подготовить документы и выбрать стратегию защиты интересов по законодательству Республики Казахстан.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/77082106003" className="bg-green-500 text-white px-8 py-4 rounded font-bold hover:bg-green-600">
              Записаться на консультацию
            </a>
            <a href="tel:+77082106003" className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded font-bold hover:bg-blue-50">
              Позвонить
            </a>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">О специалисте</h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Александр Соколов работает с обращениями граждан и бизнеса, где важны внимательный анализ документов, правильная правовая позиция и понятное объяснение дальнейших действий.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Клиенты в публичных отзывах отмечают, что Александр подробно объясняет ситуацию, помогает быстро разобраться в юридическом вопросе и профессионально подходит к решению задач.
          </p>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <p className="text-gray-700 italic">
              Сведения об образовании, стаже, лицензиях, адвокатском статусе, членстве в профессиональных организациях и наградах добавляются на сайт только после подтверждения документами.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Направления работы</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Семейное право</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Семейные споры</li>
                <li>• Бракоразводные процессы</li>
                <li>• Алименты</li>
                <li>• Раздел имущества</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Судебная защита</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Долговые споры</li>
                <li>• Подготовка исков и претензий</li>
                <li>• Договорные споры</li>
                <li>• Судебное сопровождение</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Имущественные вопросы</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Недвижимость</li>
                <li>• Наследство</li>
                <li>• Договоры</li>
                <li>• Сделки</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Бизнес</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Консультации для ИП и ТОО</li>
                <li>• Договорная работа</li>
                <li>• Взыскание задолженности</li>
                <li>• Сопровождение сделок</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Подход к работе</h2>

          {[
            {
              step: 1,
              title: 'Выяснить факты',
              desc: 'Кто участвует в споре, какие документы есть, какие сроки уже идут, какие действия предпринимались.'
            },
            {
              step: 2,
              title: 'Изучить документы',
              desc: 'Договоры, переписку, расписки, судебные документы, квитанции, уведомления, постановления и другие доказательства.'
            },
            {
              step: 3,
              title: 'Оценить перспективы',
              desc: 'Объяснить сильные и слабые стороны позиции, возможные риски и варианты действий.'
            },
            {
              step: 4,
              title: 'Подготовить следующий шаг',
              desc: 'Консультация, претензия, иск, переговоры, жалоба, ходатайство или сопровождение дела.'
            }
          ].map((item) => (
            <div key={item.step} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.step}. {item.title}
              </h3>
              <p className="text-gray-700 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Хотите проконсультироваться с Александром?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/77082106003" className="bg-white text-blue-700 px-8 py-4 rounded font-bold hover:bg-blue-50">
              Написать в WhatsApp
            </a>
            <a href="tel:+77082106003" className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-blue-700">
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
