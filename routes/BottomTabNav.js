import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../styles/Colors";
import SelectedStackNav from "./SelectedStackNav";
import StackNav from "./HomeStackNav";

const RouteConfigs = {
  Home: {
    screen: StackNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <MaterialIcons name="home" size={24} color={tabInfo.tintColor} />
      ),
      tabBarLabel: "Accueil",
      tabBarColor: Colors.lightBrown,
    },
  },
  Likes: {
    screen: SelectedStackNav,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="thumb-up" size={24} color={tintColor} />
      ),
      title: "Sélection",
      tabBarColor: Colors.darkGrey,
    },
  },
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: Colors.clicked,
    inactiveTintColor: Colors.darkGrey,
  },
};

const MaterialBottomTabNavigatorConfig = {
  inactiveColor: Colors.white,
  shifting: true,
};

const BottomTabNav =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(
        RouteConfigs,
        MaterialBottomTabNavigatorConfig
      )
    : createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default BottomTabNav;
