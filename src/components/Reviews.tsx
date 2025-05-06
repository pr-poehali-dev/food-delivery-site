
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Иван Петров",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format",
    rating: 5,
    text: "Заказываю уже не первый раз, всегда все очень вкусно и быстро. Порции большие, а цены приятные!",
    date: "15.04.2025"
  },
  {
    id: 2,
    name: "Анна Смирнова",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format",
    rating: 4,
    text: "Очень понравилась пицца Маргарита и Цезарь с курицей. Доставка была даже раньше обещанного времени.",
    date: "02.04.2025"
  },
  {
    id: 3, 
    name: "Михаил Козлов",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format", 
    rating: 5,
    text: "Прекрасное обслуживание, еда всегда горячая и свежая. Особенно порадовали скидки для постоянных клиентов.",
    date: "28.03.2025"
  },
  {
    id: 4,
    name: "Елена Соколова",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format",
    rating: 5,
    text: "Бургеры просто потрясающие! Сочные, свежие и с отличными соусами. Буду заказывать еще!",
    date: "15.03.2025"
  },
  {
    id: 5,
    name: "Дмитрий Волков",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format",
    rating: 4,
    text: "Хорошая еда по разумным ценам. Единственное замечание - в этот раз доставка была чуть дольше обычного.",
    date: "10.03.2025"
  }
];

const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Что говорят о нас наши довольные клиенты
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="px-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          className={`h-5 w-5 ${
                            i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 flex-grow">{review.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 translate-y-0" />
            <CarouselNext className="relative static ml-2 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
