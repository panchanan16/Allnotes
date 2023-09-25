import Category from "../category/category";
import ItemsSection from "./items";
import Slider from "../slider/slider";
 

function MainSection() {
  return (
      <main className="w-full xl:ml-56">
        <Slider/>
        <Category />
        <ItemsSection/>
      </main>
  
  );
}

export default MainSection;
