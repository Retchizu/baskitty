import { LinkingOptions } from "@react-navigation/native";
import { MainStackParamList } from "./type/types";

const linking: LinkingOptions<MainStackParamList> = {
  prefixes: ["com.retchizu.baskitty://"], // Your app scheme
  config: {
    screens: {
      AuthStack: {
        screens: {
          SignUpScreen: "sign-up", // Map the route to your screen,
        },
      },
    },
  },
};

export { linking };
