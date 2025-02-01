import { useFonts } from "expo-font";

export const useLoadFont = () => {
  const [loaded] = useFonts({
    fgbold: require("../../assets/fonts/FamiljenGrotesk-Bold.ttf"),
    fgbolditalic: require("../../assets/fonts/FamiljenGrotesk-BoldItalic.ttf"),
    fgitalic: require("../../assets/fonts/FamiljenGrotesk-Italic.ttf"),
    fgmedium: require("../../assets/fonts/FamiljenGrotesk-Medium.ttf"),
    fgmediumitalic: require("../../assets/fonts/FamiljenGrotesk-MediumItalic.ttf"),
    fgregular: require("../../assets/fonts/FamiljenGrotesk-Regular.ttf"),
    fgsemibold: require("../../assets/fonts/FamiljenGrotesk-SemiBold.ttf"),
    fgsemibolditalic: require("../../assets/fonts/FamiljenGrotesk-SemiBoldItalic.ttf"),
  });

  return loaded;
};
