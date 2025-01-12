import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomSearchInput from '../../component/CustomSearchInput';
import CategoryButton from '../../component/CategoryButton';
import CategoryData from '../../type/category'

type Category = {
  id: number;
  label: string;
  image: any;
}

const CategoryScreen = () => {
  return (
    <View style={{
      backgroundColor: "#F8F9FA",
      flex: 1,
    }}>
      <View
        style={{
          backgroundColor: "#FFC1CC",
          paddingVertical: hp(1),
          justifyContent: "center",
        }}
      >
        <CustomSearchInput />
      </View>
      <View style={{
        paddingHorizontal: hp(1.2),
        flex: 1,
      }}>
        <FlatList data={CategoryData} keyExtractor={(item) => item.id.toString()} renderItem={({ item }: { item: Category }) => (
          <CategoryButton label={item.label} image={item.image} />
        )} snapToAlignment='center' showsVerticalScrollIndicator={false}>

        </FlatList>
      </View>
    </View>
  )
}

export default CategoryScreen