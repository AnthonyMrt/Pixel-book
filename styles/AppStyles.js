import { StyleSheet, Dimensions } from "react-native";
import Colors from "./Colors";

const windowHeight = Dimensions.get("window").height;
console.log(windowHeight);

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  infoContainer: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  infos: {
    fontSize: 20,
    fontFamily: "InriaSans_300Light",
  },
  titleText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
  },
  titleTextBis: {
    fontSize: 25,
    color: Colors.lightBrown,
  },
  imgContainer: {
    width: "100%",
  },
  profileImg: {
    width: "100%",
    height: windowHeight < 600 ? windowHeight / 2 : windowHeight / 4,
    borderRadius: 15,
  },
  profileItem: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  portofolioContainer: {
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontFamily: "InriaSans_700Bold_Italic",
  },
  smallDeviceContainer: {
    flexDirection: "row",
    width: "100%",
  },
  smallImgContainer: {
    width: "70%",
  },
  smallInfoContainer: {
    flexGrow: 1,
    paddingLeft: 9,
    alignSelf: "flex-start",
  },
  smallTitleText: {
    fontSize: 25,
    fontFamily: "InriaSans_700Bold",
    marginBottom: 10,
  },
  smallInfos: {
    marginBottom: 5,
  },
});
