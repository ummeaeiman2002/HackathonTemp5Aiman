import ShopHeader from "../components/shop/ShopHeader";
import ProductList from "../components/shop/ProductList";
import Clients from "../components/shop/Clients";
import Filter from "../components/shop/Filter";
import ShopCategories from "../components/shop/ShopCategories";
import ProductDetailsPage from "../products/[id]/page";







export default function () {
  return (
    <div>
      <ShopHeader />
      <ShopCategories />
      <Filter />
      <ProductList />
      <Clients />
      <ProductDetailsPage />
    
     
      
      
      
    </div>
  );
}
