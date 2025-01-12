import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type CustomButtonProps = TouchableOpacityProps & {
  label: string;
  loading?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { label, loading, ...touchablyOpacityProps } = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#FFC1CC",
        borderRadius: wp(2),
        paddingVertical: hp(1.2),
        minHeight: hp(4.8),
        marginVertical: hp(1),
      }}
      activeOpacity={0.8}
      {...touchablyOpacityProps}
    >
      {loading ? (
        <ActivityIndicator color={"#F8F9FA"} />
      ) : (
        <Text
          style={{
            textAlign: "center",
            color: "#F8F9FA",
            fontSize: wp(4.5),
            fontFamily: "fgsemibold",
          }}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
