import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const LoginVersion = () => {
  return (
    <View style={styles.loginVersion7}>
      <View style={styles.loginVersion7Child} />
      <Text style={[styles.heyHello, styles.logInTypo]}>Hey, Hello 👋</Text>
      <View style={styles.emailAddressParent}>
        <View style={styles.emailAddress}>
          <View style={[styles.emailAddressChild, styles.childLayout]} />
          <Text style={styles.name}>Name</Text>
        </View>
        <View style={[styles.emailAddress1, styles.passwordSpaceBlock]}>
          <View style={[styles.emailAddressChild, styles.childLayout]} />
          <Text style={styles.name}>Email address</Text>
        </View>
        <View style={[styles.password, styles.passwordSpaceBlock]}>
          <View style={[styles.passwordChild, styles.childLayout]} />
          <Text style={styles.name}>Password</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
      </View>
      <Text
        style={[
          styles.enterYourCredentials,
          styles.dontHaveAnContainerPosition,
        ]}
      >
        Enter your credentials to access your account
      </Text>
      <View style={[styles.login, styles.loginLayout]}>
        <View style={[styles.loginChild, styles.capacityBg]} />
        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      </View>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>4:21</Text>
      </View>
      <View style={[styles.line, styles.linePosition]}>
        <View style={styles.lineChild} />
        <View style={styles.orWrapper}>
          <Text style={styles.or}>or</Text>
        </View>
      </View>
      <View style={[styles.continueWithGoogle, styles.continuePosition]}>
        <View
          style={[styles.continueWithGoogleChild, styles.continueChildBorder]}
        />
        <View style={[styles.googleParent, styles.parentPosition]}>
          <Text style={[styles.google, styles.appleTypo]}>Google</Text>
          <Image
            style={[styles.socialIcons, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/social-icons.png")}
          />
        </View>
      </View>
      <View style={[styles.continueWithFacebook, styles.continuePosition]}>
        <View
          style={[styles.continueWithFacebookChild, styles.continueChildBorder]}
        />
        <View style={[styles.appleParent, styles.parentPosition]}>
          <Text style={[styles.apple, styles.appleTypo]}>Apple</Text>
          <Image
            style={[styles.appleIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/apple.png")}
          />
        </View>
      </View>
      <View style={[styles.iAgreeToTheTermsPrivacyParent, styles.linePosition]}>
        <Text style={[styles.iAgreeToContainer, styles.timeTypo]}>
          <Text style={styles.iAgreeTo}>{`I agree to the `}</Text>
          <Text style={styles.termsPrivacy}>{`Terms & Privacy`}</Text>
        </Text>
        <View style={[styles.groupChild, styles.borderBorder]} />
      </View>
      <Text
        style={[styles.dontHaveAnContainer, styles.dontHaveAnContainerPosition]}
      >
        <Text style={styles.dontHaveAn}>Don't have an account?</Text>
        <Text style={[styles.signUp, styles.logInTypo]}> Sign up</Text>
      </Text>
      <Text style={[styles.soAllRight, styles.timeTypo]}>
        © 2023 SO, All right Reserved
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logInTypo: {
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
  },
  childLayout: {
    opacity: 0.2,
    top: 35,
    height: 48,
    borderWidth: 1.1,
    borderColor: Color.color,
    borderStyle: "solid",
    borderRadius: Border.br_2xs_7,
    width: 417,
    left: "50%",
    backgroundColor: Color.fFFFFF,
    position: "absolute",
  },
  passwordSpaceBlock: {
    marginTop: 21.4,
    height: 83,
  },
  dontHaveAnContainerPosition: {
    fontSize: FontSize.size_lgi_3,
    left: "50%",
    position: "absolute",
  },
  loginLayout: {
    height: 48,
    width: 417,
    left: "50%",
    marginLeft: -208.6,
  },
  capacityBg: {
    backgroundColor: Color.color,
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeTypo: {
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  linePosition: {
    left: 21,
    position: "absolute",
  },
  continuePosition: {
    height: 53,
    width: 198,
    top: 242,
    left: "50%",
    position: "absolute",
  },
  continueChildBorder: {
    borderColor: Color.colorGray_400,
    height: 53,
    width: 198,
    borderWidth: 1.1,
    borderStyle: "solid",
    borderRadius: Border.br_2xs_7,
    backgroundColor: Color.fFFFFF,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 11,
    position: "absolute",
  },
  appleTypo: {
    fontSize: FontSize.size_4xl_5,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.color,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1.1,
    borderColor: Color.color,
    borderStyle: "solid",
    position: "absolute",
  },
  loginVersion7Child: {
    width: 460,
    height: 997,
    backgroundColor: Color.fFFFFF,
    left: 0,
    top: 0,
    position: "absolute",
  },
  heyHello: {
    top: 101,
    fontSize: 32,
    textAlign: "left",
    color: Color.color,
    left: "50%",
    marginLeft: -208.6,
    position: "absolute",
  },
  emailAddressChild: {
    marginLeft: -208.6,
  },
  name: {
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_2xl_4,
    textAlign: "left",
    color: Color.color,
    left: 0,
    top: 0,
    position: "absolute",
  },
  emailAddress: {
    height: 83,
    width: 417,
  },
  emailAddress1: {
    width: 417,
  },
  passwordChild: {
    marginLeft: -209.05,
  },
  vectorIcon: {
    height: "16.67%",
    top: "62.83%",
    right: 19,
    bottom: "20.5%",
    width: 21,
    opacity: 0.3,
    maxHeight: "100%",
    position: "absolute",
  },
  forgotPassword: {
    top: 5,
    left: 270,
    fontSize: 17,
    textAlign: "right",
    color: Color.fF,
    fontFamily: FontFamily.workSansRegular,
    position: "absolute",
  },
  password: {
    width: 418,
  },
  emailAddressParent: {
    marginLeft: -208.8,
    top: 373,
    left: "50%",
    position: "absolute",
  },
  enterYourCredentials: {
    top: 154,
    width: 340,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    color: Color.color,
    marginLeft: -208.6,
  },
  loginChild: {
    shadowColor: "rgba(255, 255, 255, 0.15)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 48,
    width: 417,
    left: "50%",
    marginLeft: -208.6,
    borderRadius: Border.br_2xs_7,
    top: 0,
  },
  logIn: {
    top: 9,
    left: 169,
    fontSize: 27,
    color: Color.fFFFFF,
    textAlign: "center",
    position: "absolute",
  },
  login: {
    top: 745,
    position: "absolute",
  },
  border: {
    width: "90.38%",
    right: "9.62%",
    borderRadius: 3,
    opacity: 0.35,
    borderWidth: 1.1,
    borderColor: Color.color,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    height: "35.54%",
    width: "5.38%",
    top: "32.23%",
    right: "0%",
    bottom: "32.23%",
    left: "94.62%",
    opacity: 0.4,
  },
  capacity: {
    height: "64.46%",
    width: "74.23%",
    top: "17.36%",
    right: "17.69%",
    bottom: "18.18%",
    left: "8.08%",
    borderRadius: 1,
  },
  battery: {
    height: "25.69%",
    width: "5.65%",
    top: "39.28%",
    right: "7.13%",
    bottom: "35.03%",
    left: "87.22%",
    position: "absolute",
  },
  wifiIcon: {
    height: 12,
    width: 16,
  },
  cellularConnectionIcon: {
    width: 18,
    height: 11,
  },
  time: {
    marginTop: -9.65,
    width: "7.17%",
    top: "50%",
    left: "7.22%",
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "800",
    fontFamily: FontFamily.plusJakartaSansExtraBold,
    height: 22,
    textAlign: "center",
    color: Color.color,
  },
  statusBar: {
    right: 0,
    height: 47,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lineChild: {
    top: 12,
    borderTopWidth: 1.1,
    height: 1,
    opacity: 0.1,
    width: 418,
    borderColor: Color.color,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  or: {
    opacity: 0.5,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_2xl_4,
    color: Color.color,
  },
  orWrapper: {
    left: 202,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 11,
    paddingVertical: 0,
    backgroundColor: Color.fFFFFF,
    top: 0,
    position: "absolute",
  },
  line: {
    top: 322,
    height: 25,
    width: 417,
  },
  continueWithGoogleChild: {
    marginLeft: -98.95,
    left: "50%",
  },
  google: {
    left: 45,
    top: 2,
  },
  socialIcons: {
    width: "27.37%",
    right: "72.63%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  googleParent: {
    width: 124,
    height: 32,
    left: 37,
  },
  continueWithGoogle: {
    marginLeft: -208.6,
    overflow: "hidden",
  },
  continueWithFacebookChild: {
    left: 0,
  },
  apple: {
    left: 37,
    top: 0,
  },
  appleIcon: {
    width: "25.57%",
    right: "74.43%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  appleParent: {
    left: 47,
    width: 104,
    height: 31,
  },
  continueWithFacebook: {
    marginLeft: 10.7,
  },
  iAgreeTo: {
    color: Color.colorGray_200,
  },
  termsPrivacy: {
    textDecoration: "underline",
    color: Color.color,
  },
  iAgreeToContainer: {
    left: 27,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    top: 0,
  },
  groupChild: {
    height: 16,
    top: 2,
    width: 16,
    borderRadius: Border.br_2xs_7,
    backgroundColor: Color.fFFFFF,
    left: 0,
  },
  iAgreeToTheTermsPrivacyParent: {
    top: 693,
    width: 261,
    height: 19,
  },
  dontHaveAn: {
    fontFamily: FontFamily.workSansRegular,
    color: Color.color,
  },
  signUp: {
    color: Color.fF,
  },
  dontHaveAnContainer: {
    marginLeft: -210.7,
    top: 825,
    textAlign: "center",
  },
  soAllRight: {
    top: 935,
    left: 115,
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.workSansRegular,
  },
  loginVersion7: {
    borderRadius: 32,
    backgroundColor: "#fdfdfe",
    flex: 1,
    width: "100%",
    height: 877,
    overflow: "hidden",
  },
});

export default LoginVersion;
