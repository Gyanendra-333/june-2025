import Category from "./Category";
import Banner from "./home/Banner";
import BeautyFoodMore from "./home/BeautyFoodMore";
import BestInElectronics from "./home/BestInElectronics";
import SportsAndHealthcare from "./home/SportsAndHealthcare";


function Home() {
    return (
        <div>
            <Category />
            <Banner />
            <BestInElectronics />
            <BeautyFoodMore />
            <SportsAndHealthcare />
        </div>
    )
}

export default Home;