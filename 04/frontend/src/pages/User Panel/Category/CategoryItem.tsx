import { useState } from "react";

type CategoryItemProps = {
    name: string;
    icon?: string;
    subCategories?: string[];
};

function CategoryItem({ name, icon, subCategories = [] }: CategoryItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex flex-col items-center justify-center cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Icon + Name */}
            {icon && <img src={icon} alt={name} className="h-10 w-10 object-contain mb-1" />}
            <span className="text-sm group-hover:text-[#FF9F00] font-bold">{name}</span>

            {/* Dropdown */}
            {isHovered && subCategories?.length > 0 && (
                <div className="absolute top-full left-[-4] mt-0 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50 flex items-center justify-center">
                    <ul className="flex flex-col">
                        {subCategories?.map((sub, i) => (
                            <div key={i}>
                                <li
                                    className="px-4 py-2 text-sm font-semibold hover:bg-gray-100 hover:text-[#FF9F00] cursor-pointer"
                                >
                                    {sub}
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CategoryItem;
