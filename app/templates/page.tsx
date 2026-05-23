'use client';

export default function Templates() {
  const templates = [
    'Претензия о возврате долга',
    'Претензия потребителя',
    'Исковое заявление о взыскании долга',
    'Исковое заявление о расторжении брака',
    'Заявление о взыскании алиментов',
    'Ходатайство в суд',
    'Заявление о выдаче копии судебного акта',
    'Расписка о получении денег',
    'Договор займа',
    'Договор оказания услуг',
    'Акт выполненных работ',
    'Соглашение о рассрочке оплаты',
    'Доверенность'
  ];

  return (
    <>
      <div className="pt-32 pb-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black text-gray-909 mb-4">Образцы документов</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            В этом разделе размещены образцы документов для общего понимания структуры. Они не заменяют индивидуальную подготовку документа юристом. Перед использованием образца нужно проверить применимость к вашей ситуации и актуальное законодательство РК.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Документы</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {templates.map((template, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="font-bold text-gray-900 mb-3">{template}</h3>
                <button className="w-full bg-blue-700 text-white px-4 py-2 rounded font-semibold hover:bg-blue-800">
                  Скачать образец
                </button>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Нужна ли индивидуальная подготовка?</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Образец документа — это только шаблон. Каждая ситуация уникальна и требует индивидуального подхода. Неправильное оформление может ослабить вашу позицию в суде или переговорах.
            </p>
            <p className="text-gray-700 font-semibold">
              Свяжитесь с нами, чтобы подготовить документ, учитывающий вашу конкретную ситуацию.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Не уверены, подходит ли образец?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Отправьте документ в WhatsApp - юрист проверит, какие правки нужны под вашу ситуацию.
          </p>
          <a href="https://wa.me/77082106003" className="inline-block bg-white text-blue-700 px-8 py-4 rounded font-bold hover:bg-blue-50">
            Отправить документ
          </a>
        </div>
      </section>
    </>
  );
}
