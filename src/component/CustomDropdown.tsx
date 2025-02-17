import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import React, { useCallback, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type OptionItem = {
  type: string;
  label: string;
};

interface DropdownProps {
  data: OptionItem[]; 
  onChange: (item: OptionItem) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({ data, onChange }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<OptionItem | null>(null);

  const onSelect = useCallback((item: OptionItem) => {
    setSelectedItem(item);
    setExpanded(false);
    onChange(item); 
  }, [onChange]);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setExpanded(true)}>
      <Text style={styles.text}>{selectedItem?.type || "Select Type"}</Text>
        <AntDesign name={expanded ? "caretup" : "caretdown"} color={"#ECB5BF"}/>
      </TouchableOpacity>

      <Modal transparent visible={expanded} animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setExpanded(false)}>
          <View style={styles.modalContent}>
            <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
              <Text style={{ fontFamily: "fgmedium", fontSize: hp(1.8), textAlign: "center" }}>
                 Types
              </Text>
            </View>
            <FlatList
              keyExtractor={(item) => item.type}
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onSelect(item)} style={styles.optionItem}>
                  <Text>{item.type}</Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};



export default CustomDropdown;

const styles = StyleSheet.create({
  button: {
    height: hp(3),
    width: wp(23),
    borderRadius: wp(1),
    paddingLeft: wp(1),
    backgroundColor: "#F8E0E3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(2),
    maxHeight: hp(4),
  },
  text: {
    fontSize: hp(1.6),
    fontFamily: "fgregular",
    color: "#ECB5BF"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(51, 35, 50, 0.3)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#F8E0E3",
    width: wp(100),
    borderRadius: wp(2),
    padding: wp(3),
    elevation: 10,
    height: hp(40),
  },
  optionItem: {
    paddingVertical: hp(0.8),
    justifyContent: "center",
  },
  separator: {
    height: 1.3,
    backgroundColor: "#F4FBF9",
  },
});