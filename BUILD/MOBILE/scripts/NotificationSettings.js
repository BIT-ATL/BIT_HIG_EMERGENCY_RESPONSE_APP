import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NotificationSettings = () => {
  return (
    <View style={styles.notificationSettings}>
      <View
        style={[styles.notificationSettingsChild, styles.notificationLayout]}
      />
      <View style={[styles.backdrop, styles.backdropPosition1]} />
      <Text style={[styles.pushNotifications, styles.notificationFlexBox]}>
        Push Notifications
      </Text>
      <View style={[styles.backdrop1, styles.backdropPosition1]} />
      <Text style={[styles.notificationTypes, styles.notificationFlexBox]}>
        Notification Types
      </Text>
      <View style={[styles.backdrop2, styles.backdropPosition]} />
      <View style={[styles.backdrop3, styles.backdropPosition]} />
      <Text style={[styles.notificationFrequency, styles.notificationFlexBox]}>
        Notification Frequency
      </Text>
      <View style={[styles.backdrop4, styles.backdropPosition1]} />
      <View
        style={[
          styles.notificationPreferencesParent,
          styles.notificationLayout,
        ]}
      >
        <Text style={[styles.notificationPreferences, styles.howDoYouFlexBox]}>
          Notification Preferences
        </Text>
        <Image
          style={[styles.groupChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-321.png")}
        />
        <Text style={[styles.howDoYou, styles.profileTypo]}>
          How do you like to be contacted?
        </Text>
      </View>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <Image
        style={styles.notificationSettingsItem}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={styles.notificationSettingsInner}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[
          styles.iconsregularchevronDownS,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns2.png")}
      />
      <Image
        style={[
          styles.iconsregularchevronDownS1,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationLayout: {
    width: 390,
    left: 0,
  },
  backdropPosition1: {
    left: "0%",
    right: "0%",
    height: "7.23%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.fFFFFF,
  },
  notificationFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  backdropPosition: {
    height: "7.11%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.fFFFFF,
  },
  howDoYouFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color,
  },
  childPosition: {
    top: 0,
    position: "absolute",
  },
  profileTypo: {
    fontFamily: FontFamily.anonymousProRegular,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  iconsregularchevronLayout: {
    left: "84.1%",
    right: "3.08%",
    width: "12.82%",
    height: "5.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  notificationSettingsChild: {
    backgroundColor: Color.colorGray_300,
    height: 52,
    top: 0,
    position: "absolute",
  },
  backdrop: {
    top: "35.31%",
    bottom: "57.46%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
  pushNotifications: {
    top: "37.56%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "4.87%",
    textAlign: "center",
  },
  backdrop1: {
    top: "49.64%",
    bottom: "43.13%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
  notificationTypes: {
    top: "51.9%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "4.87%",
    textAlign: "center",
  },
  backdrop2: {
    top: "64.1%",
    bottom: "28.79%",
  },
  backdrop3: {
    top: "42.54%",
    bottom: "50.36%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
  notificationFrequency: {
    top: "44.67%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "4.87%",
    textAlign: "center",
  },
  backdrop4: {
    top: "56.87%",
    bottom: "35.9%",
  },
  notificationPreferences: {
    top: 38,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.anonymousProBold,
    height: 36,
    textAlign: "center",
    position: "absolute",
    width: 390,
    left: 0,
  },
  groupChild: {
    left: 156,
    width: 100,
    height: 100,
  },
  howDoYou: {
    marginLeft: -143,
    top: 96,
    fontSize: FontSize.size_base,
    width: 287,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color,
  },
  notificationPreferencesParent: {
    top: 101,
    height: 112,
    position: "absolute",
  },
  profile: {
    marginLeft: -46,
    top: "1.42%",
    fontSize: FontSize.size_5xl,
    color: Color.fFFFFF,
  },
  notificationSettingsItem: {
    height: "1.74%",
    width: "6.41%",
    top: "3.08%",
    right: "90.26%",
    bottom: "95.18%",
    left: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  notificationSettingsInner: {
    top: 314,
    left: 339,
    width: 28,
    height: 28,
    position: "absolute",
  },
  iconsregularchevronDownS: {
    top: "43.13%",
    bottom: "50.95%",
  },
  iconsregularchevronDownS1: {
    top: "50.36%",
    bottom: "43.72%",
  },
  notificationSettings: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.fFFFFF,
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
});

export default NotificationSettings;
