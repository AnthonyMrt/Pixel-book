import React from "react";
import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const Photo = ({ navigation: { navigate, getParam } }) => {
  const url = getParam("url");
  const title = getParam("title");
  const photoDesc = getParam("photoDesc");

  return (
    <ScrollView style={globalStyles.container}>
      <Image style={styles.selectedImg} source={{ uri: url }} />
      <SafeAreaView edges={["left", "right"]}>
        <View style={styles.photoDesc}>
          <Text style={globalStyles.titleText}>{title}</Text>
          <Text style={styles.textDesc}>{photoDesc}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

Photo.navigationOptions = ({ navigation: { getParam } }) => {
  const photoTitle = getParam("title");
  return {
    headerTitle: photoTitle.toUpperCase(),
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedImg: {
    width: "100%",
    height: 300,
  },
  photoDesc: {
    padding: 15,
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
  },
  testDesc: {
    fontFamily: "InriaSans_400Regular",
  },
});

Photo.navigationOption = {
  headerTitle: "Photo",
  fontSize: 20,
  padding: 9,
};

export default Photo;
