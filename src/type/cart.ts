import { ImageSourcePropType } from "react-native";

type CartData = {
  id: number;
  shopName: string;
  image: ImageSourcePropType;
  itemName: string;
}

const cart: CartData[] = [
  {
    id: 1,
    shopName: "ACCESSories",
    image: require("../../assets/category/fashion.png"),
    itemName: "idontknow",
  },
  {
    id: 2,
    shopName: "ACCESSories",
    image: require("../../assets/category/fashion.png"),
    itemName: "idontknow",
  },
  {
    id: 3,
    shopName: "ACCESSories",
    image: require("../../assets/category/fashion.png"),
    itemName: "idontknow",
  },
  {
    id: 4,
    shopName: "ACCESSories",
    image: require("../../assets/category/fashion.png"),
    itemName: "idontknow",
  },
  {
    id: 5,
    shopName: "ACCESSories",
    image: require("../../assets/category/fashion.png"),
    itemName: "idontknow",
  },
  {
    id: 6,
    shopName: "ACCESSories",
    image: require("../../assets/category/fashion.png"),
    itemName: "idontknow",
  },
  {
    id: 7,
    shopName: "ACCESSories",
    image: require("../../assets/category/fashion.png"),
    itemName: "idontknow",
  },
];

export default cart;