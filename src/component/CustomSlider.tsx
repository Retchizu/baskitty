import { View, FlatList } from "react-native";
import slidesImage, { Poster } from "../type/posters";
import SlideItem from "./SlideItem";

const CustomSlider = () => {
  return (
    <View>
      <FlatList
        data={slidesImage}
        renderItem={({ item }: { item: Poster }) => <SlideItem item={item} />}
        pagingEnabled
        snapToAlignment="center"
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomSlider;
