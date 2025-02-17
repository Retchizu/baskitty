import { ImageSourcePropType } from "react-native";

type CartData = {
  id: number;
  shopName: string;
  image: ImageSourcePropType;
  itemName: string;
  types: { type: string; label: string }[];
  price: number;
}

const cart: CartData[] = [
  {
    id: 1,
    shopName: "ACCESSories",
    image: require("../../assets/orders/order1.png"),
    itemName: "Sunglasses",
    types: [
      { type: "Black", label: "Itim" },
      { type: "Brown", label: "Kayumanggi" },
    ],
    price: 208,
  },
  {
    id: 2,
    shopName: "ABCS",
    image: require("../../assets/category/toys.png"),
    itemName: "Bracelet",
    types: [
      { type: "Gold", label: "Ginto" },
      { type: "Silver", label: "Pilak" },
    ],
    price: 99,
  },
  {
    id: 3,
    shopName: "quinb",
    image: require("../../assets/category/electronics.png"),
    itemName: "Earrings",
    types: [
      { type: "Pearl", label: "Perlas" },
      { type: "Diamond", label: "Diyamante" },
    ],
    price: 1090,
  },
  {
    id: 4,
    shopName: "CLOUD",
    image: require("../../assets/category/health.png"),
    itemName: "Necklace",
    types: [
      { type: "Silver Chain", label: "Pilak na Kadena" },
      { type: "Gold Chain", label: "Gintong Kadena" },
    ],
    price: 4122,
  },
  {
    id: 5,
    shopName: "maple",
    image: require("../../assets/orders/order2.png"),
    itemName: "Watch",
    types: [
      { type: "Leather Strap", label: "Balat na Strap" },
      { type: "Metal Strap", label: "Bakal na Strap" },
    ],
    price: 8181,
  },
  {
    id: 6,
    shopName: "TASHI",
    image: require("../../assets/category/books.png"),
    itemName: "Handbag",
    types: [
      { type: "Red", label: "Pula" },
      { type: "Blue", label: "Asul" },
    ],
    price: 96,
  },
  {
    id: 7,
    shopName: "pezzy",
    image: require("../../assets/category/beauty.png"),
    itemName: "Shoes",
    types: [
      { type: "Sneakers", label: "Sapatos na Pang-sports" },
      { type: "Loafers", label: "Pormal na Sapatos" },
    ],
    price: 250,
  },
];

export default cart;
