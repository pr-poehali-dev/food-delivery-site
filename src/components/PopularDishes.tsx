
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

const dishes = [
  {
    id: 1,
    name: "Пицца Маргарита",
    description: "Классическая итальянская пицца с томатным соусом, моцареллой и свежим базиликом",
    price: 499,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format",
    rating: 4.8,
    category: "Пицца"
  },
  {
    id: 2,
    name: "Бургер Классический",
    description: "Сочная говяжья котлета с сыром, свежими овощами и фирменным соусом",
    price: 389,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format",
    rating: 4.7,
    category: "Бургеры"
  },
  {
    id: 3,
    name: "Паста Карбонара",
    description: "Традиционная итальянская паста с беконом, сливочным соусом и пармезаном",
    price: 429,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=400&auto=format",
    rating: 4.9,
    category: "Паста"
  },
  {
    id: 4,
    name: "Цезарь с курицей",
    description: "Хрустящий салат с обжаренным куриным филе, соусом цезарь и крутонами",
    price: 359,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=400&auto=format",
    rating: 4.6,
    category: "Салаты"
  }
];

const PopularDishes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Популярные блюда</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Попробуйте наши самые популярные блюда, которые наши клиенты заказывают снова и снова
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded-full">
                    {dish.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Icon name="Star" className="h-4 w-4 fill-yellow-500" />
                    <span className="ml-1 text-sm font-medium">{dish.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{dish.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{dish.price} ₽</span>
                  <Button variant="outline" size="sm">
                    <Icon name="Plus" className="h-4 w-4 mr-1" />
                    Добавить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild>
            <a href="/menu">Смотреть все блюда</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
