import { View, Text, FlatList } from 'react-native'
import React from 'react'
import slidesImage from '../type/posters'
import SlideItem from './SlideItem'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


type Poster = {
  id: number;
  image: any;
}

const CustomSlider = () => {
  return (
    <View style={{ height: hp(23) }}>
      <FlatList data={slidesImage} renderItem={({ item }: { item: Poster }) => <SlideItem item={item} />} pagingEnabled snapToAlignment='center' horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default CustomSlider