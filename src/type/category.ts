type CategoryType = {
  id: number;
  label: string;
  image: any;
}

const category: CategoryType[] = [
  {
    id: 1,
    label: "Fashion",
    image: require("../../assets/category/fashion.png"),
  },
  {
    id: 2,
    label: "Electronics",
    image: require("../../assets/category/electronics.png"),
  },
  {
    id: 3,
    label: "Beauty and Personal Care",
    image: require("../../assets/category/beauty.png"),
  },
  {
    id: 4,
    label: "Home and Living",
    image: require("../../assets/category/living.png"),
  },
  {
    id: 5,
    label: "Groceries",
    image: require("../../assets/category/groceries.png"),
  },
  {
    id: 6,
    label: "Sports and Outdoors",
    image: require("../../assets/category/sports.png"),
  },
  {
    id: 7,
    label: "Toys and Games",
    image: require("../../assets/category/toys.png"),
  },
  {
    id: 8,
    label: "Pet Supplies",
    image: require("../../assets/category/pet.png"),
  },
  {
    id: 9,
    label: "Books and Stationary",
    image: require("../../assets/category/books.png"),
  },
  {
    id: 10,
    label: "Health and Witness",
    image: require("../../assets/category/health.png"),
  },
  {
    id: 11,
    label: "Automotive",
    image: require("../../assets/category/automotive.png"),
  },
  {
    id: 12,
    label: "Travel and Lifestyle",
    image: require("../../assets/category/travel.png"),
  },
  {
    id: 13,
    label: "Deals and Promotions",
    image: require("../../assets/category/travel.png"),
  },

]

export default category