import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Icon name="Utensils" className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">ЭкспрессЕда</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Вкусная еда с быстрой доставкой прямо к вашей двери 24/7
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-primary transition-colors">Меню</Link></li>
              <li><Link to="/order" className="text-gray-400 hover:text-primary transition-colors">Заказ</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Контакты</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">ул. Примерная, д. 123, Москва, Россия</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@expresseda.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Clock" className="h-5 w-5 text-primary" />
                <span className="text-gray-400">10:00 - 22:00, ежедневно</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Подписка</h3>
            <p className="text-gray-400 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости об акциях и скидках
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-gray-800 text-white rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                <Icon name="Send" className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ЭкспрессЕда. Все права защищены.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
              Условия обслуживания
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;