import CategoryItem from "./CategoryItem";
import electronics from "../../../../public/assets/electronics.webp";
import fashion from "../../../../public/assets/fashion.webp";
import home from "../../../../public/assets/home.webp";
import applience from "../../../../public/assets/applience.webp";
import toys from "../../../../public/assets/toys.webp";


const categories = [
    {
        name: "Electronics",
        icon: `${electronics}`,
        subCategories: ["Mobiles", "Laptops", "Cameras", "Accessories"],
    },
    {
        name: "Fashion",
        icon: `${fashion}`,
        subCategories: ["Men", "Women", "Kids", "Watches"],
    },
    {
        name: "Home",
        icon: `${home}`,
        subCategories: ["Furniture", "Decor", "Kitchen", "Storage"],
    },
    {
        name: "Appliances",
        icon: `${applience}`,
        subCategories: ["TV", "Refrigerators", "Washing Machine", "AC"],
    },
    {
        name: "Toys",
        icon: `${toys}`,
        subCategories: ["cars", "cartoons", "dolls", "balls"]
    }
];

function CategoryList() {
    return (
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
            {categories?.map((cat, index) => (
                <CategoryItem
                    key={index}
                    name={cat?.name}
                    icon={cat?.icon}
                    subCategories={cat?.subCategories}
                />
            ))}
        </div>
    );
}

export default CategoryList;
