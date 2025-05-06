
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const popularDishes = [
  {
    id: 1,
    name: "Пицца Пепперони",
    description: "Классическая пицца с пепперони, моцареллой и томатным соусом",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=300&auto=format",
    price: 499,
    rating: 4.8,
    isVegetarian: false,
    category: "Пицца"
  },
  {
    id: 2,
    name: "Бургер Классический",
    description: "Сочная говяжья котлета, свежие овощи, специальный соус",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format",
    price: 399,
    rating: 4.7,
    isVegetarian: false,
    category: "Бургеры"
  },
  {
    id: 3,
    name: "Салат Цезарь",
    description: "Хрустящий салат ромэн, куриное филе, гренки, сыр пармезан, соус цезарь",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=300&auto=format",
    price: 349,
    rating: 4.6,
    isVegetarian: false,
    category: "Салаты"
  },
  {
    id: 4,
    name: "Паста Карбонара",
    description: "Спагетти с беконом, яйцом, сыром пармезан и сливочным соусом",
    image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=300&auto=format",
    price: 459,
    rating: 4.9,
    isVegetarian: false,
    category: "Паста"
  },
  {
    id: 5,
    name: "Овощное рагу",
    description: "Ассорти из сезонных овощей в ароматном томатном соусе с зеленью",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=300&auto=format",
    price: 329,
    rating: 4.5,
    isVegetarian: true,
    category: "Горячие блюда"
  },
  {
    id: 6,
    name: "Суп Том Ям",
    description: "Острый тайский суп с креветками, грибами и лемонграссом",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=300&auto=format",
    price: 419,
    rating: 4.7,
    isVegetarian: false,
    category: "Супы"
  },
  {
    id: 7,
    name: "Греческий салат",
    description: "Свежие овощи, оливки, сыр фета, оливковое масло и орегано",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=300&auto=format",
    price: 299,
    rating: 4.4,
    isVegetarian: true,
    category: "Салаты"
  },
  {
    id: 8,
    name: "Тирамису",
    description: "Итальянский десерт на основе маскарпоне, кофе и печенья савоярди",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=300&auto=format",
    price: 279,
    rating: 4.9,
    isVegetarian: true,
    category: "Десерты"
  }
];

const PopularDishes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Популярные блюда</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Насладитесь нашими самыми популярными блюдами, приготовленными из свежих ингредиентов по оригинальным рецептам
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-gray-100">
                    {dish.category}
                  </Badge>
                  
                  {dish.isVegetarian && (
                    <Badge className="bg-green-500 text-white">
                      Вегетарианское
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{dish.price} ₽</span>
                  
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Icon name="Star" size={16} />
                    <span className="text-sm font-medium">{dish.rating}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4">
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  В корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="/menu">Смотреть все блюда</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
