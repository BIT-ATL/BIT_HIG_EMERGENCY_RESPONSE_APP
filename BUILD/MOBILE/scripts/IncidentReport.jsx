import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IncidentReport = () => {
  return (
    <View style={styles.incidentReport1}>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-21.png")}
      />
      <View style={styles.reportMenuParent}>
        <View style={styles.reportMenu} />
        <Text style={[styles.incidentType, styles.feedFlexBox]}>
          Incident Type
        </Text>
      </View>
      <View style={styles.header}>
        <View style={styles.headerChild} />
        <Text style={[styles.title, styles.titleFlexBox]}>
          Incident Reporting
        </Text>
        <Image
          style={styles.headerItem}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <View style={[styles.incidentReport1Child, styles.incidentLayout]} />
      <View style={[styles.incidentReport1Item, styles.incidentLayout]} />
      <View style={[styles.menuLabel, styles.feedFlexBox]} />
      <Text style={[styles.whereDidThe, styles.whereDidTheTypo]}>
        Where did the Incident occur?
      </Text>
      <Text style={[styles.whatIncidentOccurred, styles.whereDidTheTypo]}>
        What incident occurred?
      </Text>
      <View style={styles.incidentReport1Inner} />
      <Text style={[styles.describeWhatHappened, styles.profileFlexBox]}>
        Describe what happened..
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.reportIncident, styles.titleFlexBox]}>
          Report Incident
        </Text>
      </View>
      <View style={[styles.backgroundParent, styles.backgroundPosition]}>
        <View style={styles.headerChild} />
        <View style={[styles.profileWrapper, styles.wrapperPosition]}>
          <Text style={[styles.profile, styles.profileFlexBox]}>Profile</Text>
        </View>
        <View style={[styles.resourcesWrapper, styles.wrapperPosition]}>
          <Text style={[styles.profile, styles.profileFlexBox]}>Resources</Text>
        </View>
        <View style={[styles.background1, styles.backgroundPosition]} />
        <View style={[styles.feedWrapper, styles.wrapperPosition]}>
          <Text style={[styles.feed, styles.feedPosition]}>Feed</Text>
        </View>
      </View>
      <Image
        style={[
          styles.iconsregularchevronDownS,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns.png")}
      />
      <Image
        style={[
          styles.iconsregularchevronDownS1,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/iconsregularchevrondowns.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  incidentLayout: {
    height: 48,
    width: 320,
    borderRadius: Border.br_base,
    left: 31,
    backgroundColor: Color.color,
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    position: "absolute",
  },
  whereDidTheTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    letterSpacing: -0.3,
    left: "12.82%",
    lineHeight: 34,
    fontSize: FontSize.size_base,
    height: "4.15%",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.anonymousProRegular,
    position: "absolute",
  },
  profileFlexBox: {
    color: Color.fFFFFF,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout: {
    width: 200,
    height: 50,
    position: "absolute",
  },
  backgroundPosition: {
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  wrapperPosition: {
    bottom: "16%",
    top: "16%",
    height: "68%",
    position: "absolute",
  },
  feedPosition: {
    top: "0%",
    height: "100%",
  },
  iconsregularchevronLayout: {
    left: "76.67%",
    right: "13.08%",
    width: "10.26%",
    height: "4.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image2Icon: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  reportMenu: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    height: 542,
    width: 350,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.fFFFFF,
  },
  incidentType: {
    top: 30,
    left: 94,
    width: 163,
    height: 28,
    display: "flex",
    color: Color.color,
    alignItems: "center",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.anonymousProRegular,
  },
  reportMenuParent: {
    top: 175,
    left: 17,
    height: 542,
    width: 350,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.color,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  title: {
    top: "14%",
    left: "23.33%",
    fontSize: FontSize.size_5xl,
    color: Color.colorLightgray,
    fontFamily: FontFamily.interRegular,
  },
  headerItem: {
    height: "29.4%",
    width: "6.41%",
    top: "50%",
    right: "89.23%",
    bottom: "20.6%",
    left: "4.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  header: {
    height: 50,
    borderRadius: Border.br_3xs,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  incidentReport1Child: {
    top: 262,
  },
  incidentReport1Item: {
    top: 321,
  },
  menuLabel: {
    top: 334,
    left: 109,
    width: 160,
    height: 35,
  },
  whereDidThe: {
    width: "63.85%",
    top: "31.75%",
  },
  whatIncidentOccurred: {
    width: "63.33%",
    top: "38.74%",
  },
  incidentReport1Inner: {
    top: 387,
    height: 197,
    width: 320,
    borderRadius: Border.br_base,
    left: 31,
    backgroundColor: Color.color,
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    position: "absolute",
  },
  describeWhatHappened: {
    width: "72.05%",
    top: "48.82%",
    left: "11.79%",
    letterSpacing: 0.5,
    lineHeight: 34,
    fontSize: FontSize.size_base,
    height: "4.15%",
    color: Color.fFFFFF,
    fontFamily: FontFamily.anonymousProRegular,
  },
  groupChild: {
    backgroundColor: "#a9eac2",
    borderRadius: Border.br_3xs,
    width: 200,
    left: 0,
    top: 0,
  },
  reportIncident: {
    top: 15,
    left: 18,
    color: "#000012",
    fontFamily: FontFamily.anonymousProRegular,
    fontSize: FontSize.size_xl,
  },
  rectangleParent: {
    top: 625,
    left: 89,
  },
  profile: {
    fontFamily: FontFamily.interRegular,
    left: "0%",
    top: "0%",
    height: "100%",
    fontSize: FontSize.size_xl,
    width: "100%",
  },
  profileWrapper: {
    right: "42.82%",
    left: "37.18%",
    width: "20%",
    top: "16%",
    height: "68%",
  },
  resourcesWrapper: {
    width: "26.92%",
    right: "3.85%",
    left: "69.23%",
    top: "16%",
    height: "68%",
  },
  background1: {
    width: "31.79%",
    right: "68.21%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    backgroundColor: Color.fFFFFF,
  },
  feed: {
    fontFamily: FontFamily.interRegular,
    left: "0%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    display: "flex",
    color: Color.color,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    width: "100%",
    height: "100%",
  },
  feedWrapper: {
    right: "74.87%",
    left: "5.13%",
    width: "20%",
    top: "16%",
    height: "68%",
  },
  backgroundParent: {
    height: "5.92%",
    top: "94.08%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    width: "100%",
  },
  iconsregularchevronDownS: {
    top: "38.51%",
    bottom: "56.75%",
  },
  iconsregularchevronDownS1: {
    top: "31.52%",
    bottom: "63.74%",
  },
  incidentReport1: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.fFFFFF,
  },
});

export default IncidentReport;
