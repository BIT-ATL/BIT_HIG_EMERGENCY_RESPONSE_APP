import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LocationSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.locationSettings}>
      <View style={[styles.locationSettingsChild, styles.locationPosition]} />
      <View style={[styles.locationSettingsItem, styles.locationPosition]} />
      <View style={[styles.backdrop, styles.backdropPosition]} />
      <Text style={[styles.shareLiveLocation, styles.campusLocationsTypo]}>
        Share Live Location
      </Text>
      <View style={[styles.backdrop1, styles.backdropPosition]} />
      <View style={[styles.backdrop2, styles.backdropLayout]} />
      <View style={[styles.backdrop3, styles.backdropLayout]} />
      <Text style={[styles.campusLocations, styles.campusLocationsTypo]}>
        Campus Locations
      </Text>
      <View style={[styles.backdrop4, styles.backdropPosition]} />
      <Text style={styles.addContact}>Add contact</Text>
      <View style={[styles.locationSettingsParent, styles.locationPosition]}>
        <Text
          style={[styles.locationSettings1, styles.locationSettings1FlexBox]}
        >
          Location Settings
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/rectangle-321.png")}
        />
        <Text style={[styles.setYourPermissions, styles.profileTypo]}>
          Set your permissions for your location.
        </Text>
      </View>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <Image
        style={[styles.locationSettingsInner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Pressable
        style={styles.iconsregularchevronDownS}
        onPress={() => navigation.navigate("EmergencyResoureSettings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns2.png")}
        />
      </Pressable>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  backdropPosition: {
    left: "0%",
    right: "0%",
    height: "7.23%",
    position: "absolute",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  campusLocationsTypo: {
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "6.41%",
    position: "absolute",
  },
  backdropLayout: {
    height: "7.11%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  locationSettings1FlexBox: {
    color: Color.color,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  profileTypo: {
    fontFamily: FontFamily.anonymousProRegular,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  locationSettingsChild: {
    backgroundColor: Color.colorGray_300,
    height: 52,
    top: 0,
  },
  locationSettingsItem: {
    top: 783,
    backgroundColor: Color.colorMediumaquamarine,
    borderColor: Color.colorGray_400,
    height: 61,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  backdrop: {
    top: "35.31%",
    bottom: "57.46%",
    borderColor: Color.color,
  },
  shareLiveLocation: {
    top: "37.8%",
  },
  backdrop1: {
    top: "49.64%",
    bottom: "43.13%",
    borderColor: Color.fFFFFF,
  },
  backdrop2: {
    top: "64.1%",
    bottom: "28.79%",
    borderColor: Color.fFFFFF,
  },
  backdrop3: {
    top: "42.54%",
    bottom: "50.36%",
    borderColor: Color.color,
  },
  campusLocations: {
    top: "44.91%",
  },
  backdrop4: {
    top: "56.87%",
    bottom: "35.9%",
    borderColor: Color.fFFFFF,
  },
  addContact: {
    top: "92.77%",
    textTransform: "uppercase",
    color: Color.colorGray_400,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.anonymousProBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    left: "0%",
    height: "7.23%",
    position: "absolute",
    width: "100%",
  },
  locationSettings1: {
    top: 38,
    fontSize: FontSize.size_9xl,
    height: 36,
    fontFamily: FontFamily.anonymousProBold,
    fontWeight: "700",
    color: Color.color,
    textAlign: "center",
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    left: 156,
    width: 100,
    height: 100,
    top: 0,
    position: "absolute",
  },
  setYourPermissions: {
    marginLeft: -143,
    top: 88,
    fontSize: FontSize.size_base,
    width: 287,
    color: Color.color,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  locationSettingsParent: {
    top: 101,
    height: 120,
  },
  profile: {
    marginLeft: -46,
    top: "1.42%",
    color: Color.fFFFFF,
    fontSize: FontSize.size_5xl,
    left: "50%",
  },
  locationSettingsInner: {
    height: "1.74%",
    width: "6.41%",
    top: "3.08%",
    right: "90.26%",
    bottom: "95.18%",
    left: "3.33%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  iconsregularchevronDownS: {
    left: "80.51%",
    top: "43.25%",
    right: "6.67%",
    bottom: "50.83%",
    width: "12.82%",
    height: "5.92%",
    position: "absolute",
  },
  ellipseIcon: {
    top: 314,
    left: 336,
    width: 28,
    height: 28,
    position: "absolute",
  },
  locationSettings: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.fFFFFF,
    width: "100%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
});

export default LocationSettings;
