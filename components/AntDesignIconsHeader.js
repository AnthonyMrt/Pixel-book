import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../styles/Colors";

const AntDesignIconsHeader = (props) => (
  <HeaderButton
    IconComponent={AntDesign}
    IconSize={23}
    {...props}
    color={Colors.white}
  />
);

export default AntDesignIconsHeader;
