import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EmergencyResourceSettings = () => {
  return (
    <View style={styles.emergencyresourcesettings}>
      <View style={styles.emergencyresourcesettingsChild} />
      <View style={[styles.menuItem, styles.menuItemBorder1]}>
        <View style={[styles.backdrop, styles.backdropPosition2]} />
        <Text style={[styles.morehouseCollege, styles.georgiaTypo]}>
          Morehouse College
        </Text>
        <Image
          style={[
            styles.iconsregularchevronDownS,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.menuItem1, styles.menuItemBorder1]}>
        <View style={[styles.backdrop, styles.backdropPosition2]} />
        <Text style={[styles.morrisBrownCollege, styles.georgiaTypo]}>
          Morris Brown College
        </Text>
        <Image
          style={[
            styles.iconsregularchevronDownS,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.menuItem2, styles.menuItemBorder1]}>
        <View style={[styles.backdrop2, styles.backdropPosition1]} />
        <Text style={[styles.spelmanCollege, styles.georgiaStatePosition]}>
          Spelman College
        </Text>
        <Image
          style={[
            styles.iconsregularchevronDownS2,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.menuItem3, styles.menuItemBorder]}>
        <View style={[styles.backdrop3, styles.backdropPosition]} />
        <Text
          style={[styles.georgiaState, styles.georgiaStatePosition]}
        >{`Georgia State `}</Text>
        <Image
          style={[
            styles.iconsregularchevronDownS2,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.menuItem4, styles.menuItemBorder1]}>
        <View style={[styles.backdrop, styles.backdropPosition2]} />
        <Text style={[styles.clarkAtlantaUniversity, styles.georgiaTypo]}>
          Clark Atlanta University
        </Text>
        <Image
          style={[
            styles.iconsregularchevronDownS,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.menuItem5, styles.menuItemBorder]}>
        <View style={[styles.backdrop5, styles.backdropPosition]} />
        <Text style={[styles.universityOfGeorgia, styles.georgiaTypo]}>
          University of Georgia
        </Text>
        <Image
          style={[
            styles.iconsregularchevronDownS5,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.menuItem6, styles.menuItemBorder]}>
        <View style={[styles.backdrop3, styles.backdropPosition]} />
        <Text style={[styles.emoryUniversity, styles.georgiaStatePosition]}>
          Emory University
        </Text>
        <Image
          style={[
            styles.iconsregularchevronDownS2,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.menuItem7, styles.menuItemBorder]}>
        <View style={[styles.backdrop5, styles.backdropPosition]} />
        <Text style={[styles.georgiaTech, styles.georgiaTypo]}>
          Georgia Tech
        </Text>
        <Image
          style={[
            styles.iconsregularchevronDownS5,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.menuItem8, styles.menuItemBorder]}>
        <View style={[styles.backdrop5, styles.backdropPosition]} />
        <Text style={[styles.agnesScott, styles.georgiaTypo]}>Agnes Scott</Text>
        <Image
          style={[
            styles.iconsregularchevronDownS5,
            styles.iconsregularchevronLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/iconsregularchevrondowns1.png")}
        />
      </View>
      <View style={[styles.emergencyResourcesParent, styles.emergencyPosition]}>
        <Text style={[styles.emergencyResources, styles.emergencyFlexBox]}>
          Emergency Resources
        </Text>
        <Text style={[styles.belowAreEmergency, styles.emergencyTypo]}>
          Below are emergency resources. You will find guides, plans, etc.
          Interact with a resource to open it.
        </Text>
      </View>
      <Text style={[styles.emergencyResources1, styles.emergencyTypo]}>
        Emergency Resources
      </Text>
      <Image
        style={[
          styles.emergencyresourcesettingsItem,
          styles.iconsregularchevronLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemBorder1: {
    width: 392,
    borderColor: Color.fFFFFF,
    left: -1,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  backdropPosition2: {
    left: "0%",
    right: "0.51%",
    top: "0%",
    width: "99.49%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  georgiaTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "30.16%",
    textAlign: "center",
    position: "absolute",
  },
  iconsregularchevronLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backdropPosition1: {
    bottom: "3.23%",
    height: "96.77%",
  },
  georgiaStatePosition: {
    top: "25.81%",
    height: "44.35%",
    width: 268,
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  menuItemBorder: {
    borderColor: Color.colorGray_200,
    width: 392,
    left: -1,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  backdropPosition: {
    backgroundColor: Color.colorGray_200,
    left: "0%",
    right: "0.51%",
    top: "0%",
    width: "99.49%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
  },
  emergencyPosition: {
    width: 378,
    left: 0,
    position: "absolute",
  },
  emergencyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color,
  },
  emergencyTypo: {
    fontFamily: FontFamily.anonymousProRegular,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  emergencyresourcesettingsChild: {
    backgroundColor: Color.colorGray_300,
    width: 390,
    height: 52,
    left: 0,
    position: "absolute",
    top: 0,
  },
  backdrop: {
    bottom: "3.17%",
    height: "96.83%",
  },
  morehouseCollege: {
    marginLeft: -94,
    textAlign: "center",
  },
  iconsregularchevronDownS: {
    top: "7.94%",
    bottom: "12.7%",
    left: "83.42%",
    right: "3.83%",
    width: "12.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "79.37%",
  },
  menuItem: {
    top: 297,
    height: 63,
  },
  morrisBrownCollege: {
    marginLeft: -106,
    textAlign: "center",
  },
  menuItem1: {
    top: 479,
    height: 63,
  },
  backdrop2: {
    left: "0%",
    right: "0.51%",
    top: "0%",
    width: "99.49%",
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
  spelmanCollege: {
    marginLeft: -137,
    width: 268,
  },
  iconsregularchevronDownS2: {
    height: "80.65%",
    top: "8.06%",
    bottom: "11.29%",
    left: "83.42%",
    right: "3.83%",
    width: "12.76%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  menuItem2: {
    top: 358,
    height: 62,
  },
  backdrop3: {
    bottom: "3.23%",
    height: "96.77%",
  },
  georgiaState: {
    marginLeft: -129,
    width: 268,
  },
  menuItem3: {
    top: 540,
    height: 62,
  },
  clarkAtlantaUniversity: {
    marginLeft: -116,
    textAlign: "center",
  },
  menuItem4: {
    top: 418,
    height: 63,
  },
  backdrop5: {
    bottom: "3.17%",
    height: "96.83%",
  },
  universityOfGeorgia: {
    marginLeft: -102,
    textAlign: "center",
  },
  iconsregularchevronDownS5: {
    top: "9.52%",
    bottom: "11.11%",
    left: "83.42%",
    right: "3.83%",
    width: "12.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "79.37%",
  },
  menuItem5: {
    top: 600,
    height: 63,
  },
  emoryUniversity: {
    marginLeft: -135,
    width: 268,
  },
  menuItem6: {
    top: 722,
    height: 62,
  },
  georgiaTech: {
    marginLeft: -63,
    textAlign: "center",
  },
  menuItem7: {
    top: 661,
    height: 63,
  },
  agnesScott: {
    marginLeft: -60,
    textAlign: "center",
  },
  menuItem8: {
    top: 782,
    height: 63,
  },
  emergencyResources: {
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.anonymousProBold,
    height: 36,
    width: 378,
    left: 0,
    position: "absolute",
    textAlign: "center",
    top: 0,
    alignItems: "center",
    display: "flex",
    color: Color.color,
  },
  belowAreEmergency: {
    marginLeft: -134,
    top: 46,
    fontSize: FontSize.size_base,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.color,
    width: 268,
  },
  emergencyResourcesParent: {
    top: 139,
    height: 104,
  },
  emergencyResources1: {
    marginLeft: -124,
    top: "1.42%",
    fontSize: FontSize.size_5xl,
    color: Color.fFFFFF,
  },
  emergencyresourcesettingsItem: {
    height: "1.74%",
    width: "6.41%",
    top: "3.08%",
    right: "90.26%",
    bottom: "95.18%",
    left: "3.33%",
  },
  emergencyresourcesettings: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.color,
    borderStyle: "solid",
    backgroundColor: Color.fFFFFF,
  },
});

export default EmergencyResourceSettings;
