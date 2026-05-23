'use client';

export default function Cases() {
  const cases = [
    {
      title: 'Семейный спор: развод и документы',
      situation: 'Клиенту нужно было понять порядок расторжения брака, подготовить документы и оценить связанные вопросы по имуществу и детям.',
      actions: 'Юрист изучил документы, объяснил возможный порядок действий, подготовил список необходимых документов и помог определить следующий шаг.',
      result: 'Клиент получил понятную правовую картину и план дальнейших действий.'
    },
    {
      title: 'Долг по расписке',
      situation: 'Должник не возвращал деньги в согласованный срок, при этом у клиента были документы и переписка.',
      actions: 'Проверили доказательства, подготовили претензионную позицию и объяснили порядок возможного судебного взыскания.',
      result: 'Клиент понял перспективы взыскания и получил подготовленный правовой маршрут.'
    },
    {
      title: 'Проверка договора перед подписанием',
      situation: 'Клиент планировал подписать договор и хотел понять, какие риски в нем скрыты.',
      actions: 'Проверили условия оплаты, сроков, ответственности, расторжения, подсудности и доказательств исполнения.',
      result: 'Клиент получил замечания и рекомендации по корректировке договора до подписания.'
    }
  ];

  return (
    <>
      <div className="pt-32 pb-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Кейсы и примеры</h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Типовые ситуации, с которыми обращаются клиенты. Описание является примером типовой ситуации. Итог конкретного дела зависит от документов и обстоятельств.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {cases.map((caseItem, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-700">{i + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{caseItem.title}</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Ситуация</h3>
                    <p className="text-gray-700">{caseItem.situation}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Что мы сделали</h3>
                    <p className="text-gray-700">{caseItem.actions}</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded">
                    <h3 className="font-bold text-gray-900 mb-2">Результат</h3>
                    <p className="text-gray-700">{caseItem.result}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-600 italic">
                      <strong>Дисклеймер:</strong> Описание является примером типовой ситуации. Итог конкретного дела зависит от документов и обстоятельств.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">У вас похожая ситуация?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Свяжитесь с нами для индивидуальной оценки вашего случая
          </p>
          <a href="https://wa.me/77082106003" className="inline-block bg-white text-blue-700 px-8 py-4 rounded font-bold hover:bg-blue-50">
            Обсудить вашу ситуацию
          </a>
        </div>
      </section>
    </>
  );
}
