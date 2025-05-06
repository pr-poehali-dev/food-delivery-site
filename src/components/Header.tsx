
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Utensils" className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">ЭкспрессЕда</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Главная
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-primary font-medium">
              Меню
            </Link>
            <Link to="/order" className="text-gray-700 hover:text-primary font-medium">
              Заказ
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              О нас
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Контакты
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-primary font-medium">
              FAQ
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="hidden md:flex">
              <Link to="/order">Заказать</Link>
            </Button>
            
            <button className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
