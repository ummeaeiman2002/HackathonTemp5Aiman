import BestSeller from "../components/productPage/BestSeller";
import Header from "../components/productPage/Header";
import TheProduct from "../components/productPage/TheProduct";
import Clients from "../components/shop/Clients";


export default function Pages() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="w-[84vw] mx-auto ">
        <Header />
        <TheProduct />
        <BestSeller />
        <Clients/>
        
        
      </div>
    </section>
  );
}
