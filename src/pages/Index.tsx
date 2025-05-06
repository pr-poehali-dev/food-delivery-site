
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import PopularDishes from "@/components/PopularDishes";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Banner />
        <PopularDishes />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
