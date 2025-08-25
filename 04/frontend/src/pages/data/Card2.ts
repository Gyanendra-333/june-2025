import card1 from "../../../public/assets/card/card1.jpg";
import card2 from "../../../public/assets/card/card2.jpg";
import card3 from "../../../public/assets/card/card3.jpg";
import card4 from "../../../public/assets/card/card4.jpg";
import card5 from "../../../public/assets/card/card5.jpg";
import card6 from "../../../public/assets/card/card6.jpg";
import card7 from "../../../public/assets/card/card7.jpg";
import card8 from "../../../public/assets/card/card8.jpg";
import card9 from "../../../public/assets/card/card9.jpg";
import card10 from "../../../public/assets/card/card10.jpg";
import card11 from "../../../public/assets/card/card11.jpg";
import card12 from "../../../public/assets/card/card12.jpg";
import card13 from "../../../public/assets/card/card13.jpg";
import card14 from "../../../public/assets/card/card14.jpg";
import card15 from "../../../public/assets/card/card15.jpg";
import card16 from "../../../public/assets/card/card16.jpg";


export type CategoryItem = {
    name: string;
    image: string;
};

export type Category = {
    id: number;
    title: string;
    items: CategoryItem[];
    linkText: string;
};

export const categories2: Category[] = [
    {
        id: 1,
        title: "Starting ₹149 | Headphones",
        items: [
            { name: "boAt", image: card9 },
            { name: "Boult", image: card10 },
            { name: "Noise", image: card11 },
            { name: "Zebronics", image: card12 },
        ],
        linkText: "See all offers",
    },
    {
        id: 2,
        title: "Revamp your home in style",
        items: [
            { name: "Cushion covers, bedsheets & more", image: card1 },
            { name: "Figurines, vases & more", image: card2 },
            { name: "Home storage", image: card3 },
            { name: "Lighting solutions", image: card4 },
        ],
        linkText: "Explore all",
    },

    {
        id: 3,
        title: "Starting ₹9999 | TV Screen",
        items: [
            { name: "LG", image: card13 },
            { name: "Samsung", image: card14 },
            { name: "Acer", image: card15 },
            { name: "Sony", image: card16 },
        ],
        linkText: "See all offers",
    },
    {
        id: 4,
        title: "Appliances for your home | Up to 55% off",
        items: [
            { name: "Air conditioners", image: card5 },
            { name: "Refrigerators", image: card6 },
            { name: "Microwaves", image: card7 },
            { name: "Washing machines", image: card8 },
        ],
        linkText: "See more",
    },
];
