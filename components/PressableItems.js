import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const PressableItems = ({ item, handleNavigate }) => {
  const window = useWindowDimensions();

  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.clicked : Colors.white },
        globalStyles.profileItem,
      ]}
      onPress={handleNavigate}
    >
      {window.height < 400 ? (
        <View style={globalStyles.smallDeviceContainer}>
          <View style={globalStyles.smallImgContainer}>
            <Image
              source={{ uri: item.img }}
              style={{
                height: window.height / 2,
                ...globalStyles.profileImg,
              }}
            />
          </View>
          <View style={globalStyles.smallInfoContainer}>
            <Text style={globalStyles.smallTitleText}>{item.name}</Text>
            <Text style={globalStyles.smallInfos}>{item.country}</Text>
            <Text style={globalStyles.smallInfos}>{item.photos.length}</Text>
          </View>
        </View>
      ) : (
        <>
          <Text style={globalStyles.titleText}>{item.name}</Text>
          <View style={globalStyles.imgContainer}>
            <Image
              source={{ uri: item.img }}
              style={{
                height:
                  window.height < 600 ? window.height / 2 : window.height / 4,
                ...globalStyles.profileImg,
              }}
            />
          </View>
          <View style={globalStyles.infoContainer}>
            <Text style={globalStyles.infos}>{item.country}</Text>
            <Text style={globalStyles.infos}>{item.photos.length}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
};

export default PressableItems;
