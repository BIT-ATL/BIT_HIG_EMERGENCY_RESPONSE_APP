import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ProfileInformationSettings = () => {
  return (
    <View style={styles.profileInformationsettings}>
      <View
        style={[styles.profileInformationsettingsChild, styles.profilePosition]}
      />
      <View
        style={[styles.profileInformationsettingsItem, styles.backdrop5Layout]}
      />
      <View style={[styles.backdrop, styles.backdropPosition]} />
      <Text style={[styles.personalInformation, styles.settingsTypo]}>
        Personal Information
      </Text>
      <View style={[styles.backdrop1, styles.backdropPosition]} />
      <Text style={[styles.notificationPreferences, styles.settingsTypo]}>
        Notification Preferences
      </Text>
      <View style={[styles.backdrop2, styles.backdropLayout]} />
      <Text style={[styles.locationSettings, styles.settingsTypo]}>
        Location Settings
      </Text>
      <View style={[styles.backdrop3, styles.backdropLayout]} />
      <Text style={[styles.emergencyContacts, styles.settingsTypo]}>
        Emergency Contacts
      </Text>
      <View style={[styles.backdrop4, styles.backdropPosition]} />
      <Text style={[styles.allowInAppAds, styles.settingsTypo]}>
        Allow In-app Ads
      </Text>
      <View style={[styles.backdrop5, styles.backdrop5Layout]}>
        <View style={[styles.backdrop6, styles.backdropPosition]} />
        <Image
          style={[
            styles.iconsregularchevronDownS,
            styles.iconsregularchevronDownSLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <Text style={[styles.securitySettings, styles.settingsTypo]}>
        Security Settings
      </Text>
      <Text style={styles.deleteAccount}>Delete Account</Text>
      <View style={[styles.profileSettingsParent, styles.profilePosition]}>
        <Text style={[styles.profileSettings, styles.profileFlexBox]}>
          Profile Settings
        </Text>
        <Text
          style={[styles.alterYourProfile, styles.profileTypo]}
        >{`Alter your profile settings by using the buttons below. `}</Text>
      </View>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <Image
        style={[
          styles.profileInformationsettingsInner,
          styles.iconsregularchevronDownSLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={[
          styles.iconsregularchevronDownS1,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns1.png")}
      />
      <Image
        style={[
          styles.iconsregularchevronDownS2,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns1.png")}
      />
      <Image
        style={[
          styles.iconsregularchevronDownS3,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns1.png")}
      />
      <Image
        style={[
          styles.iconsregularchevronDownS4,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns1.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  backdrop5Layout: {
    height: 61,
    width: 390,
    left: 0,
    position: "absolute",
  },
  backdropPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  settingsTypo: {
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  backdropLayout: {
    height: "7.11%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  iconsregularchevronDownSLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profileFlexBox: {
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
  iconsregularchevronLayout: {
    height: "5.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "84.1%",
    right: "3.08%",
    width: "12.82%",
    position: "absolute",
    overflow: "hidden",
  },
  profileInformationsettingsChild: {
    backgroundColor: Color.colorGray_300,
    height: 52,
    top: 0,
    left: 0,
  },
  profileInformationsettingsItem: {
    top: 783,
    backgroundColor: "#df2f2f",
  },
  backdrop: {
    top: "35.31%",
    bottom: "57.46%",
    height: "7.23%",
    left: "0%",
    right: "0%",
  },
  personalInformation: {
    top: "36.97%",
    left: "6.67%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
  },
  backdrop1: {
    top: "49.64%",
    bottom: "43.13%",
    height: "7.23%",
    left: "0%",
    right: "0%",
  },
  notificationPreferences: {
    top: "51.78%",
    left: "6.67%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
  },
  backdrop2: {
    top: "64.1%",
    bottom: "28.79%",
  },
  locationSettings: {
    top: "66.11%",
    left: "6.67%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
  },
  backdrop3: {
    top: "42.54%",
    bottom: "50.36%",
  },
  emergencyContacts: {
    top: "44.55%",
    left: "6.67%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
  },
  backdrop4: {
    top: "56.87%",
    bottom: "35.9%",
    height: "7.23%",
    left: "0%",
    right: "0%",
  },
  allowInAppAds: {
    top: "59%",
    left: "6.41%",
  },
  backdrop6: {
    height: "100%",
    top: "0%",
    bottom: "0%",
  },
  iconsregularchevronDownS: {
    height: "81.97%",
    top: "9.84%",
    bottom: "8.2%",
    left: "84.1%",
    right: "3.08%",
    width: "12.82%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  backdrop5: {
    top: 601,
  },
  securitySettings: {
    height: "4.03%",
    width: "57.95%",
    top: "73.46%",
    left: "-1.54%",
  },
  deleteAccount: {
    top: "92.77%",
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.fFFFFF,
    fontFamily: FontFamily.anonymousProBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    left: "0%",
    height: "7.23%",
    position: "absolute",
    width: "100%",
  },
  profileSettings: {
    fontSize: 28,
    height: 36,
    fontFamily: FontFamily.anonymousProBold,
    fontWeight: "700",
    color: Color.color,
    textAlign: "center",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  alterYourProfile: {
    marginLeft: -143,
    top: 37,
    fontSize: FontSize.size_base,
    width: 287,
    height: 58,
    color: Color.color,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  profileSettingsParent: {
    top: 139,
    height: 95,
  },
  profile: {
    marginLeft: -46,
    top: "1.42%",
    color: Color.fFFFFF,
    fontSize: FontSize.size_5xl,
    left: "50%",
  },
  profileInformationsettingsInner: {
    height: "1.74%",
    width: "6.41%",
    top: "3.08%",
    right: "90.26%",
    bottom: "95.18%",
    left: "3.33%",
  },
  iconsregularchevronDownS1: {
    top: "35.9%",
    bottom: "58.18%",
  },
  iconsregularchevronDownS2: {
    top: "43.13%",
    bottom: "50.95%",
  },
  iconsregularchevronDownS3: {
    top: "50.36%",
    bottom: "43.72%",
  },
  iconsregularchevronDownS4: {
    top: "64.57%",
    bottom: "29.5%",
  },
  ellipseIcon: {
    top: 499,
    left: 339,
    width: 28,
    height: 28,
    position: "absolute",
  },
  profileInformationsettings: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
});

export default ProfileInformationSettings;
