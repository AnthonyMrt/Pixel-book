import React from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { globalStyles } from "../styles/AppStyles";
import NoData from "../components/NoData";
import { useSelector } from "react-redux";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Selected = ({ navigation: { navigate } }) => {
  const selectedUsersPhotos = useSelector((state) => state.users.selectedUsers);

  const ListItem = ({ items }) => {
    console.log(items);

    return (
      <View>
        {items.item.photos.map((photo) => {
          return (
            <View key={photo.id}>
              <Pressable
                onPress={() => navigate("Photo", photo)}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? Colors.clicked : Colors.white,
                  },
                  styles.photoContainer,
                ]}
              >
                <Image
                  style={globalStyles.profileImg}
                  source={{ uri: photo.url }}
                />
                <Text style={styles.selectedPhotoText}>{photo.title}</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={globalStyles.container}>
      {selectedUsersPhotos.length ? (
        <FlatList
          data={selectedUsersPhotos}
          renderItem={(selectedUsersPhotos) => {
            return <ListItem items={selectedUsersPhotos} />;
          }}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <NoData>Aucune images favorisées</NoData>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    marginVertical: 9,
    alignItems: "center",
    padding: 20,
  },
  selectedPhotoText: {
    fontSize: 19,
    fontFamily: "InriaSans_300Light",
    margin: 9,
  },
});

export default Selected;
