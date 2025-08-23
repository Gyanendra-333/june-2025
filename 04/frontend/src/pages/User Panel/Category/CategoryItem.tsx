type CategoryItemProps = {
    name: string;
    icon?: string; // agar category icon bhi ho
};

function CategoryItem({ name, icon }: CategoryItemProps) {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer hover:text-[#FF9F00]">
            {icon && <img src={icon} alt={name} className="h-10 w-10 object-contain mb-1" />}
            <span className="text-sm font-medium">{name}</span>
        </div>
    );
}

export default CategoryItem;
