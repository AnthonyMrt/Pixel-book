import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Photo from "../screens/Photo";
import Portofolio from "../screens/Portofolio";
import Colors from "../styles/Colors";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Accueil",
    },
  },
  Portofolio: {
    screen: Portofolio,
    navigationOptions: {
      title: "Portofolio",
    },
  },
  Photo: {
    screen: Photo,
    navigationOptions: {
      title: "Photo",
    },
  },
};
const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.lightBrown,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontFamily: "InriaSans_700Bold",
    },
  },
};

const StackNav = createStackNavigator(screens, defaultNavigationOptions);

export default StackNav;
