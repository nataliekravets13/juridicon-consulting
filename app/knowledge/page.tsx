'use client';

export default function Knowledge() {
  const articles = [
    { title: 'Как подать на развод в Казахстане', category: 'Семейное право' },
    { title: 'Какие документы нужны для развода', category: 'Семейное право' },
    { title: 'Как взыскать алименты', category: 'Семейное право' },
    { title: 'Раздел имущества супругов', category: 'Семейное право' },
    { title: 'Как составить исковое заявление', category: 'Суды и документы' },
    { title: 'Что делать, если вам не возвращают долг', category: 'Долги и взыскание' },
    { title: 'Как проверить договор перед подписанием', category: 'Договоры' },
    { title: 'Что делать, если звонят коллекторы', category: 'Банки и МФО' },
    { title: 'Как оформить наследство в Казахстане', category: 'Наследство' },
    { title: 'Как безопасно купить квартиру', category: 'Недвижимость' },
    { title: 'Незаконное увольнение: что делать', category: 'Трудовое право' },
    { title: 'Как подготовиться к консультации юриста', category: 'Общее' }
  ];

  const categories = [
    'Семейное право',
    'Суды и документы',
    'Долги и взыскание',
    'Банки, МФО, коллекторы',
    'Недвижимость',
    'Наследство',
    'Трудовое право',
    'Бизнес и договоры'
  ];

  return (
    <>
      <div className="pt-32 pb-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Право РК простыми словами</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            В этом разделе мы публикуем практические материалы по законодательству Республики Казахстан: как подготовиться к консультации, какие документы собрать, как действовать при споре, что важно проверить до подписания договора и когда нужно обращаться к юристу.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <p className="text-gray-700">
              <strong>Важно:</strong> Материалы носят информационный характер и не заменяют индивидуальную консультацию. Для точной оценки ситуации нужен анализ документов и обстоятельств.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Категории</h2>

          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {categories.map((cat, i) => (
              <div key={i} className="p-4 bg-blue-100 rounded-lg text-center font-semibold text-gray-900 hover:bg-blue-200 cursor-pointer transition">
                {cat}
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Все статьи</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded inline-block mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-700 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-3">
                  Практические рекомендации и пошаговые инструкции по законодательству РК.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна ли вам индивидуальная консультация?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Статьи дают общую информацию. Для анализа вашей конкретной ситуации обратитесь к юристу.
          </p>
          <a href="https://wa.me/77082106003" className="inline-block bg-white text-blue-700 px-8 py-4 rounded font-bold hover:bg-blue-50">
            Получить консультацию
          </a>
        </div>
      </section>
    </>
  );
}
