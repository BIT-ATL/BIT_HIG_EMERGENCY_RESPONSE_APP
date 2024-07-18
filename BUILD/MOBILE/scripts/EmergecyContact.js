import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EmergencyContact = () => {
  return (
    <View style={styles.emergencyContact}>
      <View style={[styles.emergencyContactChild, styles.emergencyPosition]} />
      <View style={[styles.emergencyContactItem, styles.emergencyPosition]} />
      <View style={[styles.backdrop, styles.backdropPosition]} />
      <Text style={[styles.firstName, styles.firstNameTypo]}>First Name</Text>
      <View style={[styles.backdrop1, styles.backdropPosition]} />
      <Text style={[styles.emailAddress, styles.lastNameTypo]}>
        Email Address
      </Text>
      <View style={[styles.backdrop2, styles.backdropLayout]} />
      <View style={[styles.backdrop3, styles.backdropLayout]} />
      <Text style={[styles.lastName, styles.lastNameTypo]}>Last Name</Text>
      <View style={[styles.backdrop4, styles.backdropPosition]} />
      <Text style={[styles.phoneNumber, styles.firstNameTypo]}>
        Phone Number
      </Text>
      <Text style={styles.addContact}>Add contact</Text>
      <View style={[styles.emergencyContactParent, styles.emergencyPosition]}>
        <Text style={[styles.emergencyContact1, styles.whoShouldBeFlexBox]}>
          Emergency Contact
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <Text style={[styles.whoShouldBe, styles.profileTypo]}>
          Who should be contacted for you in the case of an emergency?
        </Text>
      </View>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <Image
        style={[
          styles.emergencyContactInner,
          styles.emergencyContactInnerLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Text style={[styles.relationship, styles.firstNameTypo]}>
        Relationship
      </Text>
      <Image
        style={[
          styles.iconsregularchevronDownS,
          styles.emergencyContactInnerLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emergencyPosition: {
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
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  firstNameTypo: {
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  lastNameTypo: {
    left: "9.74%",
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
  whoShouldBeFlexBox: {
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
  emergencyContactInnerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  emergencyContactChild: {
    backgroundColor: Color.colorGray_300,
    height: 52,
    top: 0,
  },
  emergencyContactItem: {
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
  },
  firstName: {
    top: "36.73%",
    left: "10.51%",
  },
  backdrop1: {
    top: "49.64%",
    bottom: "43.13%",
  },
  emailAddress: {
    top: "51.9%",
  },
  backdrop2: {
    top: "64.1%",
    bottom: "28.79%",
  },
  backdrop3: {
    top: "42.54%",
    bottom: "50.36%",
  },
  lastName: {
    top: "44.91%",
  },
  backdrop4: {
    top: "56.87%",
    bottom: "35.9%",
  },
  phoneNumber: {
    top: "59%",
    left: "8.97%",
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
  emergencyContact1: {
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
  whoShouldBe: {
    marginLeft: -143,
    top: 88,
    fontSize: FontSize.size_base,
    width: 287,
    color: Color.color,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  emergencyContactParent: {
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
  emergencyContactInner: {
    height: "1.74%",
    width: "6.41%",
    top: "3.08%",
    right: "90.26%",
    bottom: "95.18%",
    left: "3.33%",
  },
  relationship: {
    height: "2.61%",
    width: "37.44%",
    top: "66.35%",
    left: "6.41%",
  },
  iconsregularchevronDownS: {
    height: "5.92%",
    width: "12.82%",
    top: "64.69%",
    right: "3.85%",
    bottom: "29.38%",
    left: "83.33%",
  },
  emergencyContact: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderColor: Color.color,
    backgroundColor: Color.fFFFFF,
    borderWidth: 1,
    borderStyle: "solid",
  },
});

export default EmergencyContact;
