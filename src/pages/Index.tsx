
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const animalCategories = [
  {
    id: 1,
    title: "Хищники",
    description: "Лев, гепард, леопард и другие",
    icon: "Lion",
    color: "bg-amber-100"
  },
  {
    id: 2,
    title: "Травоядные",
    description: "Слон, жираф, зебра и другие",
    icon: "Palmtree",
    color: "bg-emerald-100"
  },
  {
    id: 3,
    title: "Птицы",
    description: "Страус, фламинго, марабу и другие",
    icon: "Bird",
    color: "bg-sky-100"
  },
  {
    id: 4,
    title: "Рептилии",
    description: "Крокодил, змеи, хамелеоны и другие",
    icon: "Fish",
    color: "bg-orange-100"
  }
];

const featuredAnimals = [
  {
    id: 1,
    name: "Лев",
    description: "Король зверей, хищник из семейства кошачьих. Львы живут группами, называемыми прайдами.",
    imageUrl: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Слон",
    description: "Самое крупное наземное млекопитающее. Отличается большими ушами, хоботом и бивнями.",
    imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Жираф",
    description: "Самое высокое наземное животное. Отличается длинной шеей и пятнистым окрасом.",
    imageUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=1000&auto=format&fit=crop"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Шапка */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-800 flex items-center">
            <Icon name="Palmtree" className="mr-2 text-amber-700" />
            <span>Животный мир Африки</span>
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-amber-900 hover:text-amber-700 transition-colors">Главная</a>
            <a href="#categories" className="text-amber-900 hover:text-amber-700 transition-colors">Категории</a>
            <a href="#animals" className="text-amber-900 hover:text-amber-700 transition-colors">Животные</a>
            <a href="#gallery" className="text-amber-900 hover:text-amber-700 transition-colors">Галерея</a>
          </nav>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Icon name="Menu" />
          </Button>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative h-[70vh] bg-amber-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop')",
            filter: "brightness(0.8)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="container mx-auto h-full flex items-center relative z-10 px-4">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 font-serif">Удивительный мир животных Африки</h2>
            <p className="text-xl mb-8">Откройте для себя богатое разнообразие животных, населяющих самый жаркий континент планеты</p>
            <Button className="bg-amber-600 hover:bg-amber-700">Узнать больше</Button>
          </div>
        </div>
      </section>

      {/* Категории животных */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif text-amber-900">Категории животных</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animalCategories.map((category) => (
              <div 
                key={category.id} 
                className={`rounded-xl p-6 ${category.color} shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  <div className="h-12 w-12 rounded-full bg-white/50 flex items-center justify-center">
                    <Icon name={category.icon} size={24} />
                  </div>
                </div>
                <p className="text-gray-700">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные животные */}
      <section id="animals" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif text-amber-900">Популярные животные</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAnimals.map((animal) => (
              <Card key={animal.id} className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={animal.imageUrl} 
                    alt={animal.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{animal.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{animal.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif">Галерея африканских животных</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-md shadow-lg">
                <img 
                  src={`https://source.unsplash.com/random/300x300?african,animal,wildlife&sig=${index}`} 
                  alt="Животное Африки" 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Интересные факты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif text-amber-900">Интересные факты</h2>
          <div className="max-w-3xl mx-auto bg-amber-50 rounded-xl p-8 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="CheckCircle" className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                <p>Африка является домом для более чем 1 200 видов млекопитающих, что составляет около 20% всех видов млекопитающих в мире.</p>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                <p>В Африке обитает более 100 000 видов насекомых, включая множество видов бабочек, жуков и муравьев.</p>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                <p>Слоны могут общаться на расстоянии до 10 км с помощью инфразвуковых сигналов, которые не слышны человеческому уху.</p>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                <p>Гепард может разгоняться от 0 до 96 км/ч за всего лишь три секунды, делая его самым быстрым наземным животным.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <Icon name="Palmtree" className="mr-2" />
                <span>Животный мир Африки</span>
              </h2>
              <p className="mt-2 text-amber-200">Узнайте больше о удивительной фауне Африки</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="border border-amber-700 text-amber-100 hover:bg-amber-800">
                <Icon name="Facebook" />
              </Button>
              <Button variant="ghost" size="icon" className="border border-amber-700 text-amber-100 hover:bg-amber-800">
                <Icon name="Twitter" />
              </Button>
              <Button variant="ghost" size="icon" className="border border-amber-700 text-amber-100 hover:bg-amber-800">
                <Icon name="Instagram" />
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-amber-200 text-sm">
            © {new Date().getFullYear()} Животный мир Африки. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
