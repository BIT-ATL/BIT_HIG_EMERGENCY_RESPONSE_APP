import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const BulletinAlerts = () => {
  return (
    <View style={styles.bulletinalerts}>
      <View style={styles.header}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.title, styles.titleTypo]}>Feed</Text>
        <Image
          style={[styles.headerItem, styles.arrowIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <View style={[styles.header1, styles.headerLayout]}>
        <View style={[styles.headerInner, styles.headerPosition]} />
        <Text style={[styles.title1, styles.titleTypo]}>Events</Text>
        <Image
          style={[styles.arrowIcon, styles.arrowIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-11.png")}
        />
      </View>
      <View style={[styles.header2, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.title2, styles.titleTypo]}>Alerts</Text>
        <Image
          style={[styles.arrowIcon, styles.arrowIconPosition]}
          resizeMode="cover"
          source={require("../assets/arrow-11.png")}
        />
      </View>
      <View style={styles.bulletinalertsChild} />
      <View style={styles.bulletinalertsItem} />
      <View
        style={[
          styles.suspiciousIndividualSpottedParent,
          styles.suspiciousLayout,
        ]}
      >
        <Text
          style={[styles.suspiciousIndividualSpotted, styles.suspiciousFlexBox]}
        >{`Suspicious Individual
Spotted`}</Text>
        <Text
          style={[styles.aSuspiciousIndividual, styles.powerOutagePosition]}
        >
          A suspicious individual has been reported near Martin Luther King Jr.
          International Chapel. Please stay alert and avoid the area if
          possible.
        </Text>
      </View>
      <View style={[styles.menuItem, styles.menuItemLayout1]}>
        <View style={[styles.backdrop, styles.backdropPosition]} />
        <Text style={[styles.powerOutage, styles.textTypo]}>Power Outage</Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.menuItem1, styles.menuItemLayout1]}>
        <View style={[styles.backdrop1, styles.backdropPosition]} />
        <Text style={[styles.theftIncident, styles.alertTypo]}>
          Theft Incident
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.menuItem2, styles.menuItemLayout1]}>
        <View style={[styles.backdrop1, styles.backdropPosition]} />
        <Text style={[styles.healthAdvisory, styles.alertTypo]}>
          Health Advisory
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-13.png")}
        />
      </View>
      <View style={[styles.menuItem3, styles.menuItemLayout1]}>
        <View style={[styles.backdrop1, styles.backdropPosition]} />
        <Text style={[styles.lockdownDrill, styles.alertTypo]}>
          Lockdown Drill
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-13.png")}
        />
      </View>
      <View style={[styles.menuItem4, styles.menuItemLayout]}>
        <View style={styles.backdrop4} />
        <Text style={[styles.severeWeatherAlert, styles.alertTypo]}>
          Severe Weather Alert
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-13.png")}
        />
      </View>
      <View style={[styles.menuItem5, styles.menuItemLayout]}>
        <View style={styles.backdrop4} />
        <Text style={[styles.severeWeatherAlert, styles.alertTypo]}>
          Fire Drill
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-12.png")}
        />
      </View>
      <View style={[styles.menuItem6, styles.menuItemLayout]}>
        <View style={styles.backdrop4} />
        <Text style={[styles.severeWeatherAlert, styles.alertTypo]}>
          Crime Alert
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </View>
      <View style={[styles.menuItem7, styles.menuItemLayout]}>
        <View style={styles.backdrop4} />
        <Text style={[styles.severeWeatherAlert, styles.alertTypo]}>
          Traffic Incident
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </View>
      <View style={[styles.menuItem8, styles.menuItemLayout1]}>
        <View style={[styles.backdrop1, styles.backdropPosition]} />
        <Text style={[styles.missingPersonAlert, styles.alertTypo]}>
          Missing Person Alert
        </Text>
        <Image
          style={[styles.menuItemChild, styles.menuItemChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </View>
      <Image
        style={[styles.bulletinalertsInner, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "14%",
    position: "absolute",
  },
  arrowIconPosition: {
    maxWidth: "100%",
    left: "4.36%",
    right: "89.23%",
    top: "50%",
    width: "6.41%",
    position: "absolute",
    overflow: "hidden",
  },
  headerLayout: {
    width: 195,
    top: 50,
    height: 50,
    position: "absolute",
  },
  suspiciousLayout: {
    width: 378,
    position: "absolute",
  },
  suspiciousFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color,
    textAlign: "center",
  },
  powerOutagePosition: {
    left: "50%",
    position: "absolute",
  },
  menuItemLayout1: {
    height: 63,
    width: 392,
    left: -1,
    borderColor: Color.fFFFFF,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  backdropPosition: {
    bottom: "3.17%",
    height: "96.83%",
    right: "0.51%",
    width: "99.49%",
    left: "0%",
    top: "0%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
  textTypo: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  menuItemChildLayout: {
    height: 28,
    width: 28,
  },
  alertTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  menuItemLayout: {
    height: 64,
    width: 392,
    left: -1,
    borderColor: Color.fFFFFF,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  textPosition: {
    top: 110,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.color,
  },
  title: {
    left: "42.82%",
    color: Color.colorLightgray,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "14%",
  },
  headerItem: {
    height: "29.4%",
    bottom: "20.6%",
    maxHeight: "100%",
  },
  header: {
    height: 50,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  headerInner: {
    backgroundColor: Color.fFFFFF,
  },
  title1: {
    left: "30.26%",
    color: Color.color,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "14%",
  },
  arrowIcon: {
    height: 0,
    display: "none",
  },
  header1: {
    left: 0,
  },
  title2: {
    left: "32.82%",
    color: Color.colorLightgray,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "14%",
  },
  header2: {
    left: 195,
  },
  bulletinalertsChild: {
    top: 49,
    left: 194,
    borderRightWidth: 3,
    width: 3,
    height: 53,
    borderColor: Color.fFFFFF,
    position: "absolute",
    borderStyle: "solid",
  },
  bulletinalertsItem: {
    top: 100,
    height: 198,
    width: 390,
    left: 0,
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  suspiciousIndividualSpotted: {
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.anonymousProBold,
    height: 36,
    width: 378,
    position: "absolute",
    left: 0,
    top: 0,
    alignItems: "center",
    display: "flex",
  },
  aSuspiciousIndividual: {
    marginLeft: -150,
    top: 61,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.anonymousProRegular,
    width: 299,
    height: 83,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color,
    textAlign: "center",
  },
  suspiciousIndividualSpottedParent: {
    top: 138,
    left: 6,
    height: 144,
  },
  backdrop: {
    backgroundColor: Color.color,
  },
  powerOutage: {
    marginLeft: -118,
    color: Color.fFFFFF,
    top: "25.4%",
    left: "50%",
    position: "absolute",
  },
  menuItemChild: {
    top: 16,
    left: 331,
    position: "absolute",
    height: 28,
    width: 28,
  },
  menuItem: {
    top: 297,
  },
  backdrop1: {
    backgroundColor: Color.fFFFFF,
  },
  theftIncident: {
    marginLeft: -119,
    top: "25.4%",
  },
  menuItem1: {
    top: 418,
  },
  healthAdvisory: {
    marginLeft: -128,
    top: "25.4%",
  },
  menuItem2: {
    top: 539,
  },
  lockdownDrill: {
    marginLeft: -125,
    top: "25.4%",
  },
  menuItem3: {
    top: 661,
  },
  backdrop4: {
    height: "96.88%",
    bottom: "3.13%",
    right: "0.51%",
    width: "99.49%",
    left: "0%",
    top: "0%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  severeWeatherAlert: {
    height: "44.53%",
    marginLeft: -171,
    top: "25.47%",
    width: 268,
  },
  menuItem4: {
    top: 357,
  },
  menuItem5: {
    top: 478,
  },
  menuItem6: {
    top: 599,
  },
  menuItem7: {
    top: 721,
  },
  missingPersonAlert: {
    marginLeft: -156,
    top: "25.4%",
  },
  menuItem8: {
    top: 782,
  },
  bulletinalertsInner: {
    left: 345,
    height: 28,
    width: 28,
  },
  text: {
    left: 338,
    width: 42,
    height: 33,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    color: Color.color,
  },
  bulletinalerts: {
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

export default BulletinAlerts;
