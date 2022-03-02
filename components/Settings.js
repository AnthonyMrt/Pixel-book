import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../styles/Colors";
import { globalStyles } from "../styles/AppStyles";
import CustomSwitch from "./CustomSwitch";
import { setCategorySettings } from "../redux/actions/actionSettings";
import { useDispatch } from "react-redux";

const Settings = ({ closeModal }) => {
  const [isAnimals, setIsAnimals] = useState(true);
  const [isTravel, setIsTravel] = useState(true);
  const [isCars, setIsCar] = useState(true);

  const dispatch = useDispatch();

  const saveSettings = useCallback(() => {
    const savedSettings = {
      animals: isAnimals,
      travel: isTravel,
      cars: isCars,
    };

    //Dispatch action

    dispatch(setCategorySettings(savedSettings));
    closeModal();
  }, [isAnimals, isTravel, isCars]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.settingsTitle}>Réglages</Text>
      <Text style={styles.settingsText}>
        Utiliser les paramètres ci-dessous pour définir les catégories que vous
        souhaitez afficher.
      </Text>
      <View style={styles.separator} />
      <CustomSwitch
        label="Animaux"
        state={isAnimals}
        handleSwitch={(newVal) => setIsAnimals(newVal)}
      />
      <CustomSwitch
        label="Voyages"
        state={isTravel}
        handleSwitch={(newVal) => setIsTravel(newVal)}
      />
      <CustomSwitch
        label="Voitures"
        state={isCars}
        handleSwitch={(newVal) => setIsCar(newVal)}
      />
      {isAnimals === false && isTravel === false && isCars === false ? (
        <Text
          style={{
            ...styles.settingsText,
            color: Colors.clicked,
            textAlign: "center",
          }}
        >
          Veuillez choisir une catégorie
        </Text>
      ) : (
        <Button title="Valider les paramètres" onPress={saveSettings} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  settingsTitle: {
    fontSize: 20,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
    textAlign: "center",
    margin: 16,
    textTransform: "uppercase",
  },
  settingsText: {
    fontFamily: "InriaSans_300Light",
    fontSize: 17,
    padding: 9,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: Colors.lightGrey,
    marginVertical: 25,
  },
});

export default Settings;
