import React, { useCallback, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import Colors from "../styles/Colors";
import TouchableImage from "../components/TouchableImage";
import AntDesignIconsHeader from "../components/AntDesignIconsHeader";
import { globalStyles } from "../styles/AppStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { setSelection } from "../redux/actions/actionSelection";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

//import MaterialIconsHeader from "../components/MaterialIconsHeader";

const Portofolio = ({ navigation: { getParam, navigate, setParams } }) => {
  const dispatch = useDispatch();

  const userId = getParam("id");
  const favColor = getParam("favColor");
  const name = getParam("name");
  const profilImg = getParam("img");
  const description = getParam("desc");
  const photoArray = getParam("photos");

  const selectedUser = useSelector((state) =>
    state.users.selectedUsers.some((user) => user.id === userId)
  );

  const handleDispatch = useCallback(() => {
    dispatch(setSelection(userId));

    if (selectedUser) {
      Alert.alert(
        "Photos effacées",
        `les photos de ${name} ont été effacées de la sélection`,
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "Photos enregistrées",
        "Elles sont disponibles dans votre sélection",
        [{ text: "OK" }]
      );
    }
  }, [dispatch, userId, selectedUser]);

  useEffect(() => {
    setParams({ handleLike: handleDispatch });
  }, [handleDispatch]);

  useEffect(() => {
    setParams({ isSelected: selectedUser });
  }, [selectedUser]);

  const selectPhoto = (photo) => {
    navigate("Photo", photo);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ backgroundColor: favColor, ...styles.profilInfos }}>
        <Image style={styles.smallProfilImg} source={{ uri: profilImg }} />
        <Text style={styles.profilName}>{name}</Text>
      </View>
      <SafeAreaView style={styles.profilDescription}>
        <View>
          <Text style={styles.titleTextBio}>Biographie</Text>
          <Text style={styles.textBio}>{description}</Text>
        </View>
      </SafeAreaView>
      {photoArray.map((photo) => (
        <TouchableImage
          key={photo.id}
          imgUrl={photo.url}
          onSelectPhoto={() => selectPhoto(photo)}
          imgTitle={photo.title}
        />
      ))}
    </ScrollView>
  );
};

Portofolio.navigationOptions = (navigationData) => {
  const name = navigationData.navigation.getParam("name");
  const favColor = navigationData.navigation.getParam("favColor");
  const handleLike = navigationData.navigation.getParam("handleLike");
  const isSelected = navigationData.navigation.getParam("isSelected");

  return {
    headerTitle: `Profil de ${name}`,
    headerStyle: {
      backgroundColor: favColor,
    },
    headerTintColor: Colors.white,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AntDesignIconsHeader}>
        <Item
          title="Ajouter"
          iconName={isSelected ? "heart" : "hearto"}
          onPress={handleLike}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  profilInfos: {
    alignItems: "center",
    padding: 10,
  },
  smallProfilImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profilName: {
    fontFamily: "InriaSans_700Bold",
    color: Colors.white,
    fontSize: 25,
  },
  profilDescription: {
    backgroundColor: Colors.ghost,
    padding: 10,
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
  },
  titleTextBio: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
  },
  textBio: {
    fontFamily: "InriaSans_400Regular",
    fontSize: Dimensions.get("window").height > 600 ? 20 : 17,
    padding: 9,
  },
});

export default Portofolio;
