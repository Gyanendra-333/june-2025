import health1 from "../../../public/assets/healthSports/health1.webp"
import health2 from "../../../public/assets/healthSports/health2.webp"
import health3 from "../../../public/assets/healthSports/health3.webp"
import health4 from "../../../public/assets/healthSports/health4.webp"
import health5 from "../../../public/assets/healthSports/health5.webp"


export type Product = {
    id: number;
    name: string;
    image: string;
    price: string;
    slug: string;
    description: string;
};

export const sportsAndHealthcareProductsData: Product[] = [
    {
        id: 1,
        name: "Cricket Bat",
        image: health1,
        price: "₹1,499",
        slug: "cricket-bat",
        description: "High quality willow cricket bat for professional play.",
    },
    {
        id: 2,
        name: "Football",
        image: health2,
        price: "₹899",
        slug: "football",
        description: "Durable football for training and tournaments.",
    },
    {
        id: 3,
        name: "Yoga Mat",
        image: health3,
        price: "₹599",
        slug: "yoga-mat",
        description: "Comfortable yoga mat with anti-slip surface.",
    },
    {
        id: 4,
        name: "Dumbbells Set",
        image: health4,
        price: "₹2,499",
        slug: "dumbbells",
        description: "Pair of dumbbells for strength training at home.",
    },
    {
        id: 5,
        name: "Football",
        image: health5,
        price: "₹899",
        slug: "football",
        description: "Durable football for training and tournaments.",
    },
    {
        id: 6,
        name: "Yoga Mat",
        image: health3,
        price: "₹599",
        slug: "yoga-mat",
        description: "Comfortable yoga mat with anti-slip surface.",
    },
    {
        id: 7,
        name: "Dumbbells Set",
        image: health4,
        price: "₹2,499",
        slug: "dumbbells",
        description: "Pair of dumbbells for strength training at home.",
    },
];
