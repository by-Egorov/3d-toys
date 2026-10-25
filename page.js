export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16 max-w-6xl mx-auto relative overflow-hidden">
      
      {/* Декоративные желтые пятна на фоне */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-bgYellow rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-bgYellow rounded-full blur-3xl opacity-60 -z-10"></div>

      {/* Контакты */}
      <div className="font-bold text-sm tracking-wide mb-8">
        a.egorov.dev@yandex.ru
      </div>

      {/* Главный заголовок */}
      <h1 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tight">
        3D-печать фигурок и игрушек
      </h1>

      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 items-start justify-center">
        
        {/* Карточка 1 - Козлик */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center">
          {/* Поляроид */}
          <div className="polaroid w-[280px] md:w-[320px] z-10 relative">
            <div className="clip"></div>
            {/* Картинка (замените путь на свою) */}
            <img 
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop" 
              alt="Козлик в халате" 
              className="w-full h-[300px] object-cover bg-gray-200"
            />
            {/* Значок запрета (красный круг) */}
            <div className="absolute top-16 right-10 border-4 border-red-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-red-600 bg-white/80">AI</div>
          </div>

          {/* Кружок 01 */}
          <div className="absolute top-[40%] -right-4 md:-right-8 bg-brandGreen text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl z-30 shadow-md">
            01
          </div>

          {/* Текст описания 1 */}
          <div className="mt-8 ml-4 md:ml-0 text-lg leading-relaxed font-medium">
            <p>Материал: PETG</p>
            <p>Высота: 15см</p>
            <p>Вес: 95гр</p>
            <p>Цвет: На выбор</p>
            <p>Срок печати: 12 часов</p>
          </div>
        </div>

        {/* Карточка 2 - Овечка */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:mt-32">
          {/* Поляроид */}
          <div className="polaroid polaroid-right w-[280px] md:w-[320px] z-10 relative">
            <div className="tape"></div>
            {/* Картинка (замените путь на свою) */}
            <img 
              src="https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=600&auto=format&fit=crop" 
              alt="Овечка в халате" 
              className="w-full h-[300px] object-cover bg-gray-200"
            />
             {/* Значок запрета (красный круг) */}
             <div className="absolute top-16 right-10 border-4 border-red-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-red-600 bg-white/80">AI</div>
          </div>

          {/* Кружок 02 */}
          <div className="absolute bottom-[35%] -left-4 md:-left-8 bg-brandGreen text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl z-30 shadow-md">
            02
          </div>

          {/* Текст описания 2 */}
          <div className="mt-8 ml-4 md:ml-0 text-lg leading-relaxed font-medium w-full md:pl-16">
            <p>Материал: PETG</p>
            <p>Высота: 14см</p>
            <p>Вес: 100гр</p>
            <p>Цвет: На выбор</p>
            <p>Срок печати: 13 часов</p>
          </div>
        </div>

        {/* Зеленая рамка вокруг текста (Имитация) */}
        <div className="hidden md:block absolute top-10 left-20 right-20 bottom-10 border-2 border-brandGreen rounded-[40px] -z-10 pointer-events-none"></div>

      </div>
    </main>
  )
}