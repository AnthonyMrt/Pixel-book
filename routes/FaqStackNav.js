import { createStackNavigator } from "react-navigation-stack";
import Colors from "../styles/Colors";
import Faq from "../screens/Faq";

const screens = {
  Faq: {
    screen: Faq,
    navigationOptions: {
      title: "Faq",
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
      fontWeight: "Bold",
    },
  },
};

const FaqStackNav = createStackNavigator(screens, defaultNavigationOptions);

export default FaqStackNav;
