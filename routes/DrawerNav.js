import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import FaqStackNav from "./FaqStackNav";
import Colors from "../styles/Colors";
import BottomTabNav from "./BottomTabNav";

const RouteConfig = {
  Home: {
    screen: BottomTabNav,
    navigationOptions: {
      drawerLabel: "Accueil",
    },
  },
  Faq: {
    screen: FaqStackNav,
    navigationOptions: {
      drawerLabel: "FAQ",
    },
  },
};

const DrawerNavigatorConfig = {
  hideStatusBar: true,
  drawerBackgroundColor: "#333",
  drawerWidth: 110,
  drawerType: "slide",
  contentOptions: {
    labelStyle: {
      fontSize: 19,
    },
    inactiveTintColor: Colors.white,
    activeTintColor: Colors.clicked,
  },
};

const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);

export default createAppContainer(MainNavigator);
