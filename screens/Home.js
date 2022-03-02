import React, { useEffect, useState } from "react";
import { Text, View, Modal, StyleSheet, Switch } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PressableItems from "../components/PressableItems";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
//import { DATA } from "../data/userData";
import { DrawerActions } from "react-navigation-drawer";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import { MaterialIcons } from "@expo/vector-icons";
import Settings from "../components/Settings";

import { useSelector } from "react-redux";
//import NoData from "../components/NoData";

const Home = ({ navigation: { navigate, setParams } }) => {
  useEffect(() => {
    setParams({ handleModal: handleSettingsModal });
  }, [handleSettingsModal]);

  const [modalVisible, setModalVisible] = useState(false);

  const selectedCategory = useSelector((state) => state.users.selectedCategory);

  const renderProfiles = ({ item }) => {
    return (
      <PressableItems
        item={item}
        handleNavigate={() => navigate("Portofolio", item)}
      />
    );
  };

  const handleSettingsModal = () => {
    setModalVisible(!modalVisible);
  };

  if (selectedCategory.length !== 0) {
    return (
      <View style={globalStyles.container}>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalBody}>
            <MaterialIcons
              name="close"
              size={24}
              color="black"
              style={styles.modalClose}
              onPress={handleSettingsModal}
            />
            <Settings closeModal={handleSettingsModal} />
          </View>
        </Modal>
        <FlatList
          data={selectedCategory}
          renderItem={renderProfiles}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <FlatList
          data={selectedCategory}
          renderItem={renderProfiles}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
};

Home.navigationOptions = ({ navigation: { getParam, dispatch } }) => {
  const handleModal = getParam("handleModal");

  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="Menu"
          iconName="menu"
          iconSize={30}
          onPress={() => dispatch(DrawerActions.toggleDrawer())}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="Réglage"
          iconName="settings"
          iconSize={30}
          onPress={handleModal}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: Colors.ghost,
    marginVertical: 60,
    padding: 20,
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
  },
  modalClose: {
    alignSelf: "flex-end",
  },
});

export default Home;
