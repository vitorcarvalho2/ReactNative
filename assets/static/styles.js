import styleColors from "./colors";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const stylesHeaderSM = {
  color: styleColors.textColor,
  fontFamily: " Arial",
  fontSize: 33,
  fontStyle: "italic",
  fontVariant: "small-caps",
  fontWeight: "bold",
  justifyContent: "center",
  flex:1
};

const stylesHeaderLG = {

  color: styleColors.textColor,
  fontFamily: " Arial",
  fontSize: 48,
  fontStyle: "italic",
  fontVariant: "small-caps",
  fontWeight: "bold",
  justifyContent: "center",
  
};

export const stylesHeaderText =
  deviceWidth >= 800 ? stylesHeaderLG : stylesHeaderSM;
