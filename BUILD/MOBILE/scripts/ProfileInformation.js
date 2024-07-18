import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PersonalInformation = () => {
  return (
    <View style={styles.personalInformation}>
      <View style={[styles.personalInformationChild, styles.personalLayout]} />
      <View style={styles.backdrop} />
      <Text style={[styles.fullName, styles.fullNameFlexBox]}>Full Name</Text>
      <View style={[styles.backdrop1, styles.backdropLayout1]} />
      <Text style={[styles.phoneNumber, styles.fullNameFlexBox]}>
        Phone Number
      </Text>
      <View style={[styles.backdrop2, styles.backdropLayout]} />
      <Text style={[styles.schoolAffiliation, styles.emailAddressTypo]}>
        School Affiliation
      </Text>
      <View style={[styles.backdrop3, styles.backdropLayout]} />
      <Text style={[styles.username, styles.fullNameFlexBox]}>Username</Text>
      <View style={[styles.backdrop4, styles.backdropLayout1]} />
      <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
        Email Address
      </Text>
      <View style={[styles.personalInformationParent, styles.personalLayout]}>
        <Text
          style={[styles.personalInformation1, styles.commitChangesFlexBox]}
        >
          Personal Information
        </Text>
        <Text style={[styles.changeYourProfile, styles.profileTypo1]}>
          Change your profile information
        </Text>
      </View>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <Image
        style={[
          styles.personalInformationItem,
          styles.personalInformationItemLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Image
        style={[
          styles.iconsregularchevronDownS,
          styles.personalInformationItemLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns2.png")}
      />
      <View style={[styles.personalInformationInner, styles.personalLayout]} />
      <Text style={[styles.commitChanges, styles.profileTypo]}>
        commit changes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  personalLayout: {
    width: 390,
    left: 0,
  },
  fullNameFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  backdropLayout1: {
    left: "0%",
    height: "7.23%",
    width: "100%",
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
  emailAddressTypo: {
    left: "6.41%",
    textAlign: "center",
    color: Color.colorGray_400,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  commitChangesFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_400,
  },
  profileTypo1: {
    fontFamily: FontFamily.anonymousProRegular,
    left: "50%",
  },
  profileTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  personalInformationItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  personalInformationChild: {
    backgroundColor: Color.colorGray_300,
    height: 52,
    top: 0,
    left: 0,
    position: "absolute",
  },
  backdrop: {
    top: "35.31%",
    right: "-0.26%",
    bottom: "57.46%",
    left: "0.26%",
    height: "7.23%",
    position: "absolute",
    width: "100%",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  fullName: {
    top: "37.56%",
    color: Color.colorGray_400,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "6.67%",
    textAlign: "center",
  },
  backdrop1: {
    top: "49.64%",
    bottom: "43.13%",
    right: "0%",
    left: "0%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  phoneNumber: {
    top: "51.78%",
    color: Color.colorGray_400,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "6.67%",
    textAlign: "center",
  },
  backdrop2: {
    top: "64.1%",
    bottom: "28.79%",
  },
  schoolAffiliation: {
    top: "66.23%",
  },
  backdrop3: {
    top: "42.54%",
    bottom: "50.36%",
  },
  username: {
    top: "44.55%",
    color: Color.colorGray_400,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "6.67%",
    textAlign: "center",
  },
  backdrop4: {
    top: "56.87%",
    bottom: "35.9%",
    right: "0%",
    left: "0%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  emailAddress: {
    top: "59.36%",
  },
  personalInformation1: {
    fontSize: FontSize.size_9xl,
    height: 36,
    fontFamily: FontFamily.anonymousProBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
    width: 390,
    left: 0,
    top: 0,
  },
  changeYourProfile: {
    marginLeft: -143,
    top: 37,
    fontSize: FontSize.size_base,
    width: 287,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_400,
    textAlign: "center",
    position: "absolute",
  },
  personalInformationParent: {
    top: 139,
    height: 95,
    position: "absolute",
  },
  profile: {
    marginLeft: -46,
    top: "1.42%",
    color: Color.fFFFFF,
    fontFamily: FontFamily.anonymousProRegular,
    left: "50%",
  },
  personalInformationItem: {
    height: "1.74%",
    width: "6.41%",
    top: "3.08%",
    right: "90.26%",
    bottom: "95.18%",
    left: "3.33%",
  },
  iconsregularchevronDownS: {
    height: "5.92%",
    width: "12.82%",
    top: "64.69%",
    right: "1.79%",
    bottom: "29.38%",
    left: "85.38%",
  },
  personalInformationInner: {
    top: 783,
    backgroundColor: Color.colorMediumaquamarine,
    borderColor: Color.colorGray_400,
    height: 61,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  commitChanges: {
    top: "92.77%",
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_400,
    fontFamily: FontFamily.anonymousProBold,
    fontWeight: "700",
    left: "0%",
    height: "7.23%",
    width: "100%",
  },
  personalInformation: {
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

export default PersonalInformation;
