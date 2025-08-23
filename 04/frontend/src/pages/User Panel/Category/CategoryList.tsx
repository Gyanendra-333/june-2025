import CategoryItem from "./CategoryItem";

const categories = [
    { name: "Electronics", icon: "/icons/electronics.png" },
    { name: "Fashion", icon: "/icons/fashion.png" },
    { name: "Home", icon: "/icons/home.png" },
    { name: "Appliances", icon: "/icons/appliances.png" },
    { name: "Toys", icon: "/icons/toys.png" },
];

function CategoryList() {
    return (
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
            {categories.map((cat, index) => (
                <CategoryItem key={index} name={cat.name} icon={cat.icon} />
            ))}
        </div>
    );
}

export default CategoryList;
