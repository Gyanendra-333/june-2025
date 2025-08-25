import Category from "./Category";
import Banner from "./home/Banner";
import BeautyFoodMore from "./home/BeautyFoodMore";
import BestInElectronics from "./home/BestInElectronics";
import FurnitureCard from "./home/FurnitureCard";
import FurnitureCard2 from "./home/FurnitureCard2";
import SportsAndHealthcare from "./home/SportsAndHealthcare";


function Home() {
    return (
        <div>
            <Category />
            <Banner />
            <BestInElectronics />
            <BeautyFoodMore />
            <SportsAndHealthcare />
            <FurnitureCard />
            <FurnitureCard2 />
        </div>
    )
}

export default Home;