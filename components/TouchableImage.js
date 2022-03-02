import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Colors from "../styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const heightResult = Dimensions.get("window").height;

const TouchableImage = ({ onSelectPhoto, imgUrl, imgTitle }) => {
  return (
    <View style={styles.photoContainer}>
      <TouchableOpacity onPress={onSelectPhoto}>
        <ImageBackground source={{ uri: imgUrl }} style={styles.backgroundImg}>
          <View style={styles.photoTitle}>
            <SafeAreaView edges={["left", "right"]}>
              <Text style={styles.photoTitleText}>{imgTitle}</Text>
            </SafeAreaView>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    width: "100%",
    height: heightResult > 600 ? 350 : 250,
    marginBottom: 19,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  photoTitle: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: heightResult > 600 ? 15 : 9,
  },
  photoTitleText: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 19,
    color: Colors.white,
  },
});

export default TouchableImage;
