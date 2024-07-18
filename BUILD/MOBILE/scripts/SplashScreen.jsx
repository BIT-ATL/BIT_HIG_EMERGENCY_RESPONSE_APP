import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#f5f5f5", "#fff"]}
      useAngle={true}
      angle={180}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("SignupLogin")}
      >
        <View style={styles.groupParent}>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-60353.png")}
          />
          <Text style={styles.erin}>ERIN</Text>
          <Text
            style={[
              styles.emergencyResponseInformation,
              styles.supportedByTheContainerTypo,
            ]}
          >
            Emergency Response Information Network
          </Text>
        </View>
        <Text
          style={[
            styles.supportedByTheContainer,
            styles.supportedByTheContainerTypo,
          ]}
        >
          <Text style={styles.supportedByTheContainer1}>
            {`Supported by `}
            <Text style={styles.theHartford}>The Hartford</Text>
          </Text>
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  supportedByTheContainerTypo: {
    fontFamily: FontFamily.anonymousProRegular,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.color,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    height: "66.39%",
    width: "53.17%",
    top: "0%",
    right: "23.43%",
    bottom: "33.61%",
    left: "23.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  erin: {
    marginLeft: -86,
    top: 184,
    fontSize: 78,
    fontWeight: "700",
    fontFamily: FontFamily.anonymousProBold,
    textAlign: "center",
    color: Color.color,
    left: "50%",
    position: "absolute",
  },
  emergencyResponseInformation: {
    marginLeft: -156,
    top: 262,
  },
  groupParent: {
    height: "32.82%",
    width: "80%",
    top: "28.44%",
    right: "10%",
    bottom: "38.74%",
    left: "10%",
    position: "absolute",
  },
  theHartford: {
    textDecoration: "underline",
  },
  supportedByTheContainer1: {
    width: "100%",
  },
  supportedByTheContainer: {
    marginLeft: -195,
    top: 757,
    display: "flex",
    alignItems: "center",
    width: 390,
    height: 28,
  },
  pressable: {
    borderStyle: "solid",
    borderColor: Color.color,
    borderWidth: 1,
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
  splashScreen: {
    height: 844,
    width: "100%",
  },
});

export default SplashScreen;
