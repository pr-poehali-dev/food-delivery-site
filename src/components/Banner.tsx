
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    title: "Быстрая доставка от 30 минут",
    description: "Доставим горячим прямо к вашей двери",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format",
    cta: "Заказать сейчас",
    link: "/order"
  },
  {
    id: 2,
    title: "Скидка 20% на первый заказ",
    description: "Используйте промокод FIRST20 при оформлении",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format",
    cta: "Получить скидку",
    link: "/menu"
  },
  {
    id: 3,
    title: "Новое сезонное меню",
    description: "Попробуйте свежие вкусы этого сезона",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format",
    cta: "Смотреть меню",
    link: "/menu"
  }
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] mt-16 overflow-hidden">
      {banners.map((banner, index) => (
        <div 
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{banner.title}</h1>
              <p className="text-xl mb-8">{banner.description}</p>
              <Button asChild size="lg">
                <Link to={banner.link}>{banner.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex 
                ? "bg-primary w-6" 
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Переключить на слайд ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
